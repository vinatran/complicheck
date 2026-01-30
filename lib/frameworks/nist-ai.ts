import { Framework } from '../types';

export const nistAiFramework: Framework = {
  id: 'nist-ai',
  name: 'NIST AI Risk Management Framework',
  shortName: 'NIST AI RMF',
  description: 'Framework for managing risks in AI systems',
  version: '1.0',
  category: 'ai',
  regions: ['US'],
  domains: [
    {
      id: 'GOVERN',
      name: 'Govern',
      description: 'Establish policies, governance structures, roles, responsibilities, and legal compliance for AI systems',
      controls: [
        {
          id: 'GOVERN-POL-1',
          name: 'AI Governance Policy',
          description: 'Establish and document comprehensive AI governance policies that define principles, standards, and guidelines for AI development, deployment, and operation',
          requiredEvidence: [
            'AI governance policy document',
            'AI ethics guidelines',
            'Board-level AI policy approvals',
            'Policy review and update procedures'
          ],
          keywords: ['governance', 'policy', 'AI', 'principles', 'standards', 'guidelines']
        },
        {
          id: 'GOVERN-ROL-1',
          name: 'Roles and Responsibilities',
          description: 'Define clear roles, responsibilities, and accountability structures for AI system development, oversight, and management across the organization',
          requiredEvidence: [
            'RACI matrix for AI initiatives',
            'Job descriptions with AI responsibilities',
            'Organizational chart showing AI governance structure',
            'Authority and approval matrices'
          ],
          keywords: ['roles', 'responsibilities', 'accountability', 'structure', 'oversight']
        },
        {
          id: 'GOVERN-RCL-1',
          name: 'Risk Culture and Accountability',
          description: 'Foster an organizational risk culture that promotes accountability, transparency, and responsible AI development practices',
          requiredEvidence: [
            'Risk culture assessment documentation',
            'Training materials on responsible AI',
            'Incident reporting procedures',
            'Accountability enforcement records'
          ],
          keywords: ['risk culture', 'accountability', 'transparency', 'responsible AI', 'ethics']
        },
        {
          id: 'GOVERN-LEG-1',
          name: 'Legal and Regulatory Compliance',
          description: 'Ensure AI systems comply with applicable laws, regulations, and industry standards including data protection, algorithmic accountability, and consumer rights',
          requiredEvidence: [
            'Legal compliance assessment report',
            'Regulatory requirements mapping',
            'Compliance tracking documentation',
            'Legal review approvals'
          ],
          keywords: ['legal', 'regulatory', 'compliance', 'laws', 'standards', 'requirements']
        }
      ]
    },
    {
      id: 'MAP',
      name: 'Map',
      description: 'Understand AI system context, identify risks, engage stakeholders, and document system characteristics and intended use',
      controls: [
        {
          id: 'MAP-CTX-1',
          name: 'AI System Context and Documentation',
          description: 'Document the context, purpose, scope, and characteristics of AI systems including intended use, user populations, and operating environment',
          requiredEvidence: [
            'AI system documentation',
            'System architecture diagrams',
            'Use case documentation',
            'Intended user and application scope'
          ],
          keywords: ['context', 'documentation', 'scope', 'purpose', 'architecture']
        },
        {
          id: 'MAP-RID-1',
          name: 'Risk Identification',
          description: 'Systematically identify potential risks in AI systems including bias, fairness, transparency, robustness, and security threats',
          requiredEvidence: [
            'Risk identification workshop minutes',
            'Threat modeling documentation',
            'Bias and fairness assessment reports',
            'Risk register with identified risks'
          ],
          keywords: ['risk identification', 'threats', 'bias', 'fairness', 'vulnerabilities']
        },
        {
          id: 'MAP-STK-1',
          name: 'Stakeholder Engagement and Impact Assessment',
          description: 'Engage relevant stakeholders and assess potential impacts of AI systems on different populations, including vulnerable groups',
          requiredEvidence: [
            'Stakeholder mapping documentation',
            'Impact assessment reports',
            'Community engagement records',
            'Fairness impact analysis'
          ],
          keywords: ['stakeholder', 'engagement', 'impact', 'communities', 'fairness']
        },
        {
          id: 'MAP-DAT-1',
          name: 'Data and Model Inventory',
          description: 'Maintain comprehensive inventory of training data, models, algorithms, and their characteristics including lineage and provenance',
          requiredEvidence: [
            'Data inventory documentation',
            'Model registry',
            'Data lineage documentation',
            'Algorithm provenance records'
          ],
          keywords: ['data', 'inventory', 'models', 'algorithm', 'provenance', 'lineage']
        },
        {
          id: 'MAP-SCP-1',
          name: 'Scope and Boundaries Definition',
          description: 'Define clear boundaries and scope for AI system risk assessment including input constraints, output ranges, and operational limits',
          requiredEvidence: [
            'System boundaries documentation',
            'Constraint definitions',
            'Operational parameter specifications',
            'Scope limitation documents'
          ],
          keywords: ['scope', 'boundaries', 'constraints', 'limitations', 'definitions']
        }
      ]
    },
    {
      id: 'MEASURE',
      name: 'Measure',
      description: 'Establish metrics, perform testing, validate models, and monitor AI system performance and compliance throughout lifecycle',
      controls: [
        {
          id: 'MEASURE-PERF-1',
          name: 'Performance Metrics and Monitoring',
          description: 'Define and monitor performance metrics for AI systems including accuracy, precision, recall, and business metrics aligned with system objectives',
          requiredEvidence: [
            'Performance metrics definition document',
            'Baseline performance documentation',
            'Performance monitoring dashboards',
            'Performance trend analysis reports'
          ],
          keywords: ['performance', 'metrics', 'monitoring', 'accuracy', 'baseline']
        },
        {
          id: 'MEASURE-BIAS-1',
          name: 'Bias and Fairness Testing',
          description: 'Conduct comprehensive testing for bias across protected attributes, demographic groups, and use contexts to ensure fair and equitable AI system behavior',
          requiredEvidence: [
            'Bias testing methodology and reports',
            'Fairness metrics by demographic group',
            'Disparate impact analysis',
            'Bias mitigation testing results'
          ],
          keywords: ['bias', 'fairness', 'testing', 'protected attributes', 'equity', 'disparate impact']
        },
        {
          id: 'MEASURE-VAL-1',
          name: 'Model Validation and Testing',
          description: 'Perform rigorous model validation including functional testing, adversarial testing, stress testing, and edge case analysis',
          requiredEvidence: [
            'Model validation test plans',
            'Test execution results',
            'Adversarial attack test reports',
            'Edge case documentation'
          ],
          keywords: ['validation', 'testing', 'adversarial', 'edge cases', 'robustness']
        },
        {
          id: 'MEASURE-EXP-1',
          name: 'Explainability and Interpretability Assessment',
          description: 'Assess and document the explainability and interpretability of AI models to ensure stakeholders understand system decisions and reasoning',
          requiredEvidence: [
            'Explainability assessment reports',
            'SHAP or LIME analysis documentation',
            'Feature importance documentation',
            'Decision explanation procedures'
          ],
          keywords: ['explainability', 'interpretability', 'transparency', 'SHAP', 'LIME', 'decisions']
        },
        {
          id: 'MEASURE-DRF-1',
          name: 'Data and Robustness Evaluation',
          description: 'Evaluate data quality, completeness, and system robustness to handle distribution shift, adversarial inputs, and edge cases',
          requiredEvidence: [
            'Data quality assessment reports',
            'Distribution shift analysis',
            'Data drift detection procedures',
            'Robustness testing results'
          ],
          keywords: ['data quality', 'robustness', 'drift', 'distribution shift', 'outliers']
        }
      ]
    },
    {
      id: 'MANAGE',
      name: 'Manage',
      description: 'Implement risk treatment strategies, maintain continuous monitoring, respond to incidents, and document all management activities',
      controls: [
        {
          id: 'MANAGE-TRT-1',
          name: 'Risk Treatment and Mitigation',
          description: 'Develop and implement treatment strategies to mitigate identified AI risks including redesign, process changes, and control implementation',
          requiredEvidence: [
            'Risk treatment plan',
            'Mitigation strategy documentation',
            'Implementation status tracking',
            'Residual risk assessment'
          ],
          keywords: ['risk treatment', 'mitigation', 'remediation', 'controls', 'strategies']
        },
        {
          id: 'MANAGE-MON-1',
          name: 'Continuous Monitoring and Surveillance',
          description: 'Establish continuous monitoring of AI system performance, safety, fairness, and security in production environments',
          requiredEvidence: [
            'Monitoring plan documentation',
            'Alert and threshold definitions',
            'Monitoring data and logs',
            'Performance reports and alerts'
          ],
          keywords: ['monitoring', 'surveillance', 'continuous', 'alerts', 'thresholds', 'production']
        },
        {
          id: 'MANAGE-INC-1',
          name: 'Incident Response and Escalation',
          description: 'Develop and maintain incident response procedures for AI system failures, biased outcomes, security breaches, and other critical events',
          requiredEvidence: [
            'Incident response plan',
            'Escalation procedures',
            'Incident response team designation',
            'Past incident response records'
          ],
          keywords: ['incident', 'response', 'escalation', 'procedures', 'failures', 'breaches']
        },
        {
          id: 'MANAGE-DOC-1',
          name: 'Documentation and Auditability',
          description: 'Maintain comprehensive documentation of AI system development, testing, deployment, decisions, and changes to ensure auditability and traceability',
          requiredEvidence: [
            'Version control logs and documentation',
            'Change management records',
            'Decision logs and approvals',
            'Audit trails and access logs'
          ],
          keywords: ['documentation', 'audit trail', 'traceability', 'change management', 'records']
        }
      ]
    }
  ]
};
