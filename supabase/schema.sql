-- CompliCheck Database Schema
-- Run this in your Supabase SQL Editor

-- ===========================================
-- TABLES
-- ===========================================

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  company_name TEXT,
  subscription_status TEXT DEFAULT 'free' CHECK (subscription_status IN ('free', 'starter', 'professional', 'enterprise')),
  stripe_customer_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Assessments table
CREATE TABLE IF NOT EXISTS public.assessments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  framework TEXT NOT NULL CHECK (framework IN ('iso27001', 'nist', 'soc2')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'analyzing', 'completed', 'failed')),
  overall_score INTEGER DEFAULT 0 CHECK (overall_score >= 0 AND overall_score <= 100),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Documents table
CREATE TABLE IF NOT EXISTS public.documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_id UUID REFERENCES public.assessments(id) ON DELETE CASCADE NOT NULL,
  filename TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  mime_type TEXT,
  uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Control Results table
CREATE TABLE IF NOT EXISTS public.control_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_id UUID REFERENCES public.assessments(id) ON DELETE CASCADE NOT NULL,
  control_id TEXT NOT NULL,
  domain TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('met', 'partial', 'not_met')),
  confidence_score INTEGER DEFAULT 0 CHECK (confidence_score >= 0 AND confidence_score <= 100),
  evidence_summary TEXT,
  remediation_advice TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===========================================
-- INDEXES
-- ===========================================

CREATE INDEX IF NOT EXISTS idx_assessments_user_id ON public.assessments(user_id);
CREATE INDEX IF NOT EXISTS idx_assessments_status ON public.assessments(status);
CREATE INDEX IF NOT EXISTS idx_documents_assessment_id ON public.documents(assessment_id);
CREATE INDEX IF NOT EXISTS idx_control_results_assessment_id ON public.control_results(assessment_id);
CREATE INDEX IF NOT EXISTS idx_control_results_status ON public.control_results(status);

-- ===========================================
-- ROW LEVEL SECURITY (RLS)
-- ===========================================

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.control_results ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view own profile"
  ON public.users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.users FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.users FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Assessments policies
CREATE POLICY "Users can view own assessments"
  ON public.assessments FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own assessments"
  ON public.assessments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own assessments"
  ON public.assessments FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own assessments"
  ON public.assessments FOR DELETE
  USING (auth.uid() = user_id);

-- Documents policies
CREATE POLICY "Users can view own documents"
  ON public.documents FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.assessments
      WHERE assessments.id = documents.assessment_id
      AND assessments.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can upload own documents"
  ON public.documents FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.assessments
      WHERE assessments.id = documents.assessment_id
      AND assessments.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete own documents"
  ON public.documents FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.assessments
      WHERE assessments.id = documents.assessment_id
      AND assessments.user_id = auth.uid()
    )
  );

-- Control Results policies
CREATE POLICY "Users can view own control results"
  ON public.control_results FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.assessments
      WHERE assessments.id = control_results.assessment_id
      AND assessments.user_id = auth.uid()
    )
  );

CREATE POLICY "Service can insert control results"
  ON public.control_results FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.assessments
      WHERE assessments.id = control_results.assessment_id
      AND assessments.user_id = auth.uid()
    )
  );

-- ===========================================
-- FUNCTIONS
-- ===========================================

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_assessments_updated_at
  BEFORE UPDATE ON public.assessments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ===========================================
-- REALTIME SUBSCRIPTIONS
-- ===========================================

-- Enable realtime for assessments (for live status updates)
ALTER PUBLICATION supabase_realtime ADD TABLE public.assessments;
