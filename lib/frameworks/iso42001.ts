import { Framework } from '../types';

export const iso42001Framework: Framework = {
  id: 'iso42001',
  name: 'ISO/IEC 42001:2023',
  shortName: 'ISO 42001',
  description: 'AI management system standard for responsible AI development',
  version: '2023',
  category: 'ai',
  domains: [
    {
      id: 'ai-policy-leadership',
      name: 'AI Policy and Leadership',
      description: 'Establish AI governance policies and management commitment for responsible AI',
      controls: [
        {
          id: 'ctrl-001',
          name: 'AI Policy Definition',
          description: 'Develop and document comprehensive AI policies covering principles, objectives, and scope of AI system usage',
          requiredEvidence: [
            'AI governance policy document',
            'Policy approval records from management',
            'Policy distribution and acknowledgment logs',
            'Regular policy review and update schedule'
          ],
          keywords: ['policy', 'governance', 'AI principles', 'management approval']
        },
        {
          id: 'ctrl-002',
          name: 'Management Commitment',
          description: 'Ensure senior management commitment to AI governance and allocation of adequate resources',
          requiredEvidence: [
            'Executive sponsor designation document',
            'Budget allocation for AI governance',
            'Management board meeting minutes on AI governance',
            'Resource allocation records'
          ],
          keywords: ['management', 'commitment', 'resources', 'executive support']
        },
        {
          id: 'ctrl-003',
          name: 'AI Governance Roles and Responsibilities',
          description: 'Define clear roles and responsibilities for AI governance including leadership, technical, and oversight functions',
          requiredEvidence: [
            'Organizational structure document for AI governance',
            'Role and responsibility matrix',
            'Job descriptions for AI governance positions',
            'Accountability assignment documentation'
          ],
          keywords: ['roles', 'responsibilities', 'governance structure', 'accountability']
        },
        {
          id: 'ctrl-004',
          name: 'AI Governance Framework',
          description: 'Establish governance framework defining decision-making processes, escalation paths, and oversight mechanisms',
          requiredEvidence: [
            'AI governance framework documentation',
            'Decision-making authority matrix',
            'Escalation procedures',
            'Oversight committee charter'
          ],
          keywords: ['framework', 'governance', 'oversight', 'decision-making']
        },
        {
          id: 'ctrl-005',
          name: 'Compliance and Legal Requirements',
          description: 'Ensure awareness and compliance with applicable legal, regulatory, and contractual requirements for AI systems',
          requiredEvidence: [
            'Legal and regulatory requirements register',
            'Compliance assessment reports',
            'Contractual obligations documentation',
            'Compliance monitoring procedures'
          ],
          keywords: ['compliance', 'legal', 'regulatory', 'requirements']
        }
      ]
    },
    {
      id: 'ai-risk-management',
      name: 'AI Risk Management',
      description: 'Identify, assess, and manage risks related to AI system development and deployment',
      controls: [
        {
          id: 'ctrl-101',
          name: 'Risk Identification',
          description: 'Systematically identify risks associated with AI systems including technical, ethical, and business risks',
          requiredEvidence: [
            'Risk identification procedures',
            'Risk register with AI-specific risks identified',
            'Stakeholder consultation records',
            'Risk source analysis documentation'
          ],
          keywords: ['risk', 'identification', 'technical risk', 'ethical risk']
        },
        {
          id: 'ctrl-102',
          name: 'Risk Assessment and Analysis',
          description: 'Assess identified risks by evaluating their likelihood, impact, and potential consequences',
          requiredEvidence: [
            'Risk assessment methodology document',
            'Risk scoring and prioritization records',
            'Impact and likelihood evaluation reports',
            'Risk heat map or visualization'
          ],
          keywords: ['assessment', 'impact', 'likelihood', 'risk analysis']
        },
        {
          id: 'ctrl-103',
          name: 'Risk Treatment Planning',
          description: 'Develop and implement treatment plans to mitigate, accept, avoid, or transfer identified risks',
          requiredEvidence: [
            'Risk treatment plan documents',
            'Mitigation strategy descriptions',
            'Action items and ownership assignment',
            'Timeline for risk treatment implementation'
          ],
          keywords: ['treatment', 'mitigation', 'risk response', 'controls']
        },
        {
          id: 'ctrl-104',
          name: 'Residual Risk Management',
          description: 'Monitor and manage residual risks after treatment implementation to ensure acceptable risk levels',
          requiredEvidence: [
            'Residual risk assessment reports',
            'Risk acceptance documentation',
            'Ongoing monitoring procedures',
            'Residual risk review records'
          ],
          keywords: ['residual risk', 'acceptance', 'monitoring', 'tolerance']
        },
        {
          id: 'ctrl-105',
          name: 'Risk Communication and Reporting',
          description: 'Communicate identified risks and mitigation status to relevant stakeholders and leadership',
          requiredEvidence: [
            'Risk reporting templates',
            'Stakeholder communication records',
            'Risk dashboard or reporting system',
            'Management review meeting minutes'
          ],
          keywords: ['communication', 'reporting', 'stakeholder', 'transparency']
        }
      ]
    },
    {
      id: 'ai-development-lifecycle',
      name: 'AI Development Lifecycle',
      description: 'Manage AI system development through requirements, design, testing, and deployment phases',
      controls: [
        {
          id: 'ctrl-201',
          name: 'AI System Requirements Definition',
          description: 'Define clear and documented requirements for AI systems including functional, non-functional, and ethical requirements',
          requiredEvidence: [
            'Requirements specification document',
            'Ethical requirements checklist',
            'Stakeholder sign-off on requirements',
            'Requirements traceability matrix'
          ],
          keywords: ['requirements', 'specification', 'functional', 'ethical']
        },
        {
          id: 'ctrl-202',
          name: 'AI System Design and Architecture',
          description: 'Design AI systems with documented architecture, model selection, and integration considerations',
          requiredEvidence: [
            'System architecture documentation',
            'Design review records',
            'Model selection rationale',
            'Technical design specifications'
          ],
          keywords: ['design', 'architecture', 'model', 'integration']
        },
        {
          id: 'ctrl-203',
          name: 'AI System Development and Implementation',
          description: 'Implement AI systems following secure coding practices and development standards',
          requiredEvidence: [
            'Source code repositories and version control',
            'Development standards documentation',
            'Code review records',
            'Development process logs'
          ],
          keywords: ['development', 'implementation', 'coding', 'standards']
        },
        {
          id: 'ctrl-204',
          name: 'AI System Testing and Validation',
          description: 'Conduct comprehensive testing including functional testing, bias testing, and adversarial testing',
          requiredEvidence: [
            'Test plan and test cases',
            'Test execution reports',
            'Bias and fairness test results',
            'Performance validation records'
          ],
          keywords: ['testing', 'validation', 'bias testing', 'performance']
        },
        {
          id: 'ctrl-205',
          name: 'AI System Deployment and Release',
          description: 'Manage controlled deployment of AI systems with rollback procedures and monitoring',
          requiredEvidence: [
            'Deployment checklist and approval',
            'Release notes and documentation',
            'Rollback procedures and testing',
            'Deployment monitoring records'
          ],
          keywords: ['deployment', 'release', 'rollback', 'monitoring']
        }
      ]
    },
    {
      id: 'data-management',
      name: 'Data Management',
      description: 'Ensure data quality, governance, and bias prevention in AI systems',
      controls: [
        {
          id: 'ctrl-301',
          name: 'Data Quality Management',
          description: 'Establish processes to ensure data quality, accuracy, and completeness for AI system training and operation',
          requiredEvidence: [
            'Data quality standards documentation',
            'Data quality assessment reports',
            'Data cleaning procedures',
            'Quality metrics and monitoring dashboards'
          ],
          keywords: ['data quality', 'accuracy', 'completeness', 'validation']
        },
        {
          id: 'ctrl-302',
          name: 'Data Governance',
          description: 'Define data ownership, stewardship, and management practices including data lineage and provenance',
          requiredEvidence: [
            'Data governance policy',
            'Data ownership assignments',
            'Data inventory and catalog',
            'Data lineage documentation'
          ],
          keywords: ['governance', 'ownership', 'stewardship', 'lineage']
        },
        {
          id: 'ctrl-303',
          name: 'Bias Identification and Prevention',
          description: 'Identify and mitigate sources of bias in data, models, and system outputs',
          requiredEvidence: [
            'Bias assessment methodology',
            'Bias analysis reports',
            'Bias mitigation strategies',
            'Fairness testing results'
          ],
          keywords: ['bias', 'fairness', 'discrimination', 'representation']
        },
        {
          id: 'ctrl-304',
          name: 'Data Privacy and Security',
          description: 'Protect personal and sensitive data through privacy controls and secure data handling practices',
          requiredEvidence: [
            'Data privacy policy',
            'Data protection impact assessments',
            'Encryption and access control logs',
            'Privacy compliance records'
          ],
          keywords: ['privacy', 'security', 'protection', 'compliance']
        },
        {
          id: 'ctrl-305',
          name: 'Training Data Documentation',
          description: 'Document training data sources, composition, characteristics, and any limitations or biases',
          requiredEvidence: [
            'Data sheets or documentation for datasets',
            'Data source descriptions and licenses',
            'Data composition analysis',
            'Known limitations and bias documentation'
          ],
          keywords: ['documentation', 'training data', 'composition', 'limitations']
        }
      ]
    },
    {
      id: 'ai-system-monitoring',
      name: 'AI System Monitoring',
      description: 'Monitor AI system performance, detect drift, and manage continuous feedback',
      controls: [
        {
          id: 'ctrl-401',
          name: 'Performance Monitoring',
          description: 'Continuously monitor AI system performance metrics against defined baselines and thresholds',
          requiredEvidence: [
            'Performance monitoring framework',
            'Metric definitions and baselines',
            'Monitoring dashboards',
            'Performance alert and escalation procedures'
          ],
          keywords: ['performance', 'monitoring', 'metrics', 'baseline']
        },
        {
          id: 'ctrl-402',
          name: 'Model Drift Detection',
          description: 'Detect and respond to data drift, concept drift, and performance degradation in deployed models',
          requiredEvidence: [
            'Drift detection methodology',
            'Drift monitoring tools and configurations',
            'Drift detection alerts and logs',
            'Remediation procedures for detected drift'
          ],
          keywords: ['drift', 'detection', 'degradation', 'retraining']
        },
        {
          id: 'ctrl-403',
          name: 'Feedback Collection and Analysis',
          description: 'Collect and analyze user feedback and system outcomes to identify issues and improvement opportunities',
          requiredEvidence: [
            'Feedback collection mechanisms',
            'User feedback analysis reports',
            'Issue identification and tracking',
            'Improvement action items'
          ],
          keywords: ['feedback', 'user', 'analysis', 'improvement']
        },
        {
          id: 'ctrl-404',
          name: 'Incident and Anomaly Detection',
          description: 'Detect and respond to anomalies, errors, and incidents in AI system operation',
          requiredEvidence: [
            'Anomaly detection procedures',
            'Incident response plan',
            'Incident logs and investigation reports',
            'Remediation and resolution records'
          ],
          keywords: ['incident', 'anomaly', 'detection', 'response']
        },
        {
          id: 'ctrl-405',
          name: 'Model Retraining and Updates',
          description: 'Establish procedures for model retraining, updates, and versioning based on monitoring results',
          requiredEvidence: [
            'Retraining procedures and schedules',
            'Model version management',
            'Retraining evaluation and testing results',
            'Update deployment records'
          ],
          keywords: ['retraining', 'updates', 'versioning', 'improvement']
        }
      ]
    },
    {
      id: 'transparency-accountability',
      name: 'Transparency and Accountability',
      description: 'Ensure AI system explainability, documentation, and auditing capabilities',
      controls: [
        {
          id: 'ctrl-501',
          name: 'AI System Explainability',
          description: 'Ensure AI system decisions and outputs are explainable and interpretable to relevant stakeholders',
          requiredEvidence: [
            'Explainability methodology documentation',
            'Model interpretation analysis',
            'Decision explanation examples',
            'Stakeholder explainability assessments'
          ],
          keywords: ['explainability', 'interpretability', 'transparency', 'understanding']
        },
        {
          id: 'ctrl-502',
          name: 'System Documentation',
          description: 'Create and maintain comprehensive documentation of AI systems including model cards, system cards, and operating procedures',
          requiredEvidence: [
            'Model cards and system documentation',
            'Technical documentation',
            'User guides and operating procedures',
            'Documentation review and update records'
          ],
          keywords: ['documentation', 'model cards', 'procedures', 'technical']
        },
        {
          id: 'ctrl-503',
          name: 'Audit and Compliance Verification',
          description: 'Conduct regular audits to verify compliance with AI governance policies and control effectiveness',
          requiredEvidence: [
            'Audit plans and procedures',
            'Internal audit reports',
            'External audit findings',
            'Audit corrective action tracking'
          ],
          keywords: ['audit', 'compliance', 'verification', 'assessment']
        },
        {
          id: 'ctrl-504',
          name: 'Decision Records and Traceability',
          description: 'Maintain records of AI system decisions and maintain traceability for accountability and review purposes',
          requiredEvidence: [
            'Decision logging systems',
            'Input and output traceability records',
            'Decision audit logs',
            'Traceability procedures documentation'
          ],
          keywords: ['records', 'traceability', 'decision logs', 'accountability']
        },
        {
          id: 'ctrl-505',
          name: 'External Communication and Disclosure',
          description: 'Communicate AI system limitations, capabilities, and risks to end users and affected parties transparently',
          requiredEvidence: [
            'AI system capability and limitation statements',
            'User disclosure documentation',
            'Communication templates and records',
            'Feedback on communication effectiveness'
          ],
          keywords: ['communication', 'disclosure', 'limitations', 'transparency']
        },
        {
          id: 'ctrl-506',
          name: 'Accountability Mechanisms',
          description: 'Establish mechanisms for accountability including human oversight, approval processes, and appeal procedures',
          requiredEvidence: [
            'Human oversight procedures',
            'Approval authority documentation',
            'Appeal and escalation procedures',
            'Accountability assignment records'
          ],
          keywords: ['accountability', 'oversight', 'approval', 'escalation']
        }
      ]
    }
  ]
};
