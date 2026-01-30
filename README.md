# CompliCheck 🛡️

AI-powered ISO 27001 compliance assessment platform for Vietnamese SMEs.

## Features

- **AI-Powered Analysis**: Upload your security documents and get instant compliance scores
- **ISO 27001:2022**: Comprehensive assessment against 27 controls across 4 domains
- **Gap Analysis**: Identify compliance gaps with actionable insights
- **Real-time Progress**: Watch your assessment progress in real-time
- **Beautiful UI**: Modern, responsive design built with Next.js and Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 16 (App Router), TypeScript, Tailwind CSS
- **Database**: Supabase (PostgreSQL + Auth)
- **Storage**: Azure Blob Storage
- **AI**: OpenAI GPT-4 Turbo
- **Payments**: Stripe (coming soon)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Azure Storage account
- OpenAI API key

### Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/complicheck.git
cd complicheck
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Azure Storage
AZURE_STORAGE_CONNECTION_STRING=your_connection_string
AZURE_STORAGE_CONTAINER_NAME=documents

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Set up Supabase database:
   - Go to your Supabase project
   - Navigate to SQL Editor
   - Run the SQL from `supabase/schema.sql`

5. Set up Azure Storage:
   - Create a storage container named `documents`
   - Enable CORS for your domain

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
complicheck/
├── app/
│   ├── api/
│   │   ├── analyze/          # AI analysis endpoint
│   │   └── upload/           # File upload endpoint
│   ├── assessment/
│   │   ├── new/              # Create new assessment
│   │   └── [id]/             # Assessment results
│   │       └── upload/       # Document upload
│   ├── dashboard/            # User dashboard
│   ├── forgot-password/      # Password reset
│   ├── login/                # Sign in
│   ├── pricing/              # Pricing page
│   ├── reset-password/       # Password update
│   ├── signup/               # Sign up
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── lib/
│   ├── auth.ts               # Authentication helpers
│   ├── azure-storage.ts      # Azure Blob Storage
│   ├── document-parser.ts    # PDF/DOC text extraction
│   ├── iso27001-controls.ts  # ISO 27001 controls data
│   ├── openai.ts             # OpenAI integration
│   └── supabase.ts           # Supabase client
├── supabase/
│   └── schema.sql            # Database schema + RLS
└── middleware.ts             # Auth middleware
```

## ISO 27001 Domains Covered

| Domain | Controls | Focus Area |
|--------|----------|------------|
| A.5 Organizational | 6 | Policies, roles, assets |
| A.6 People | 5 | HR security, training |
| A.7 Physical | 3 | Physical access, monitoring |
| A.8 Technology | 13 | Access, encryption, monitoring |

## API Endpoints

### POST /api/upload
Upload documents for analysis.

**Request**: `multipart/form-data`
- `file`: The document file (PDF, DOC, TXT)
- `assessmentId`: UUID of the assessment

**Response**:
```json
{
  "success": true,
  "documentId": "uuid",
  "filename": "policy.pdf"
}
```

### POST /api/analyze
Analyze uploaded documents against ISO 27001 controls.

**Request**:
```json
{
  "assessmentId": "uuid"
}
```

**Response**:
```json
{
  "success": true,
  "overallScore": 75,
  "controlsAnalyzed": 27,
  "met": 15,
  "partial": 8,
  "notMet": 4
}
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Docker

```bash
docker build -t complicheck .
docker run -p 3000:3000 complicheck
```

## Security

- All documents are encrypted at rest (Azure Storage)
- Row-Level Security (RLS) enabled on all Supabase tables
- Documents are deleted after analysis
- No data retention beyond 30 days

## License

MIT

## Made in Vietnam 🇻🇳

Built by [Dong Tran](mailto:dong.tran@vinatran.vn)
