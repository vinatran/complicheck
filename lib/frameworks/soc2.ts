import { Framework, Domain, Control } from '../types';

export const soc2Framework: Framework = {
  id: 'soc2',
  name: 'SOC 2 Type II',
  shortName: 'SOC 2',
  description: 'Trust services criteria for service organizations',
  version: '2017',
  category: 'security',
  domains: [
    {
      id: 'security',
      name: 'Security (CC)',
      description: 'Controls that address the confidentiality and security of system resources',
      controls: [
        {
          id: 'cc-access-control',
          name: 'Access Control',
          description: 'The entity restricts or appropriately qualifies logical and physical access to facilities and resources based on roles, responsibilities, and the principle of least privilege.',
          requiredEvidence: [
            'Access control policies and procedures',
            'User access logs',
            'Role-based access control (RBAC) configuration',
            'Access reviews and approvals',
            'Privileged access management documentation'
          ],
          keywords: ['authentication', 'authorization', 'least privilege', 'access management', 'RBAC']
        },
        {
          id: 'cc-system-operations',
          name: 'System Operations',
          description: 'The entity executes, maintains, and evaluates documented procedures over its system to achieve its objectives related to effective and efficient operation.',
          requiredEvidence: [
            'System operation procedures',
            'System monitoring logs',
            'Performance metrics and baselines',
            'Incident response procedures',
            'System maintenance schedules',
            'Operational runbooks'
          ],
          keywords: ['operations', 'monitoring', 'performance', 'procedures', 'maintenance']
        },
        {
          id: 'cc-change-management',
          name: 'Change Management',
          description: 'The entity authorizes, designs, develops, configures, documents, tests, approves, and implements changes to achieve its objectives related to effective and efficient operation.',
          requiredEvidence: [
            'Change management policy',
            'Change request forms',
            'Approval documentation',
            'Testing results',
            'Deployment logs',
            'Change history and records'
          ],
          keywords: ['change control', 'deployment', 'testing', 'approval', 'version control']
        },
        {
          id: 'cc-risk-mitigation',
          name: 'Risk Mitigation',
          description: 'The entity identifies, analyzes, and mitigates risks that could adversely affect the achievement of its objectives related to effective and efficient operation.',
          requiredEvidence: [
            'Risk assessment documentation',
            'Risk register',
            'Mitigation plans',
            'Risk monitoring procedures',
            'Vulnerability assessments',
            'Threat analysis reports'
          ],
          keywords: ['risk management', 'vulnerability assessment', 'threat modeling', 'risk mitigation', 'security posture']
        },
        {
          id: 'cc-logical-security',
          name: 'Logical and Physical Security',
          description: 'The entity restricts physical access to facilities and system resources, and logical access to system software and related information.',
          requiredEvidence: [
            'Physical security policies',
            'Facility access logs',
            'Badge systems and controls',
            'Firewall configurations',
            'Network security controls',
            'Environmental monitoring'
          ],
          keywords: ['physical access', 'firewall', 'network security', 'badge access', 'surveillance']
        },
        {
          id: 'cc-encryption',
          name: 'Encryption and Data Protection',
          description: 'The entity implements encryption, hashing, and other data protection methods to protect sensitive data in transit and at rest.',
          requiredEvidence: [
            'Encryption policy and standards',
            'Certificate management records',
            'Key management procedures',
            'Data classification scheme',
            'Encryption implementation documentation',
            'TLS/SSL configurations'
          ],
          keywords: ['encryption', 'data protection', 'TLS', 'cryptography', 'hashing', 'key management']
        }
      ]
    },
    {
      id: 'availability',
      name: 'Availability (A)',
      description: 'Controls that address the accessibility and ability of the service to perform its intended functions',
      controls: [
        {
          id: 'a-capacity-planning',
          name: 'Capacity Planning',
          description: 'The entity acquires or generates, uses, and maintains appropriate IT and physical resources to achieve its objectives related to the availability of system resources.',
          requiredEvidence: [
            'Capacity planning documentation',
            'Resource utilization reports',
            'Performance trending analysis',
            'Scaling procedures',
            'Infrastructure inventory',
            'Demand forecasts'
          ],
          keywords: ['capacity planning', 'resource management', 'performance metrics', 'scaling', 'infrastructure']
        },
        {
          id: 'a-disaster-recovery',
          name: 'Disaster Recovery and Business Continuity',
          description: 'The entity maintains and tests disaster recovery plans to ensure system availability can be restored in the event of a disruption.',
          requiredEvidence: [
            'Disaster recovery plan (DRP)',
            'Business continuity plan (BCP)',
            'Recovery point objective (RPO) and RTO definitions',
            'Backup procedures and schedules',
            'Disaster recovery test results',
            'Restoration procedures'
          ],
          keywords: ['disaster recovery', 'business continuity', 'backup', 'failover', 'recovery', 'RTO', 'RPO']
        },
        {
          id: 'a-incident-management',
          name: 'Incident Management',
          description: 'The entity detects, investigates, responds to, and remediates incidents that could adversely affect system availability.',
          requiredEvidence: [
            'Incident management procedures',
            'Incident logs and records',
            'Detection mechanisms and alerts',
            'Escalation procedures',
            'Response time metrics',
            'Incident investigation reports',
            'Root cause analysis documentation'
          ],
          keywords: ['incident response', 'incident management', 'detection', 'alerts', 'root cause analysis']
        },
        {
          id: 'a-maintenance',
          name: 'System Maintenance and Patching',
          description: 'The entity applies and maintains appropriate security updates and patches to system components in a timely manner.',
          requiredEvidence: [
            'Patch management policy',
            'Patch schedule and calendar',
            'Patching procedures',
            'Testing procedures for patches',
            'Vulnerability tracking',
            'Patch deployment logs'
          ],
          keywords: ['patching', 'updates', 'vulnerability management', 'maintenance windows', 'patch testing']
        },
        {
          id: 'a-monitoring',
          name: 'System Monitoring',
          description: 'The entity monitors system resources, infrastructure, and services to identify and address conditions that could impact availability.',
          requiredEvidence: [
            'Monitoring tools and configurations',
            'Alert thresholds and rules',
            'Monitoring dashboards',
            'Log analysis procedures',
            'System metrics and reports',
            'Uptime statistics'
          ],
          keywords: ['monitoring', 'alerting', 'system health', 'uptime', 'performance monitoring', 'metrics']
        }
      ]
    },
    {
      id: 'processing-integrity',
      name: 'Processing Integrity (PI)',
      description: 'Controls that address the completeness, accuracy, timeliness, and authorization of system processing',
      controls: [
        {
          id: 'pi-completeness',
          name: 'Data Completeness',
          description: 'The entity obtains or generates, uses, and maintains complete and accurate information related to the objectives of the system.',
          requiredEvidence: [
            'Data completeness requirements and standards',
            'Data validation procedures',
            'Reconciliation reports',
            'Data quality monitoring',
            'Exception handling procedures',
            'Data audit trails'
          ],
          keywords: ['data completeness', 'validation', 'data quality', 'reconciliation', 'exception handling']
        },
        {
          id: 'pi-accuracy',
          name: 'Data Accuracy',
          description: 'The entity maintains data accuracy throughout the system processing lifecycle and corrects identified errors.',
          requiredEvidence: [
            'Data accuracy requirements and standards',
            'Accuracy testing procedures',
            'Error detection and correction logs',
            'Data correction procedures',
            'Accuracy metrics and monitoring',
            'Quality assurance reviews'
          ],
          keywords: ['data accuracy', 'error correction', 'validation', 'data integrity', 'quality assurance']
        },
        {
          id: 'pi-timeliness',
          name: 'Processing Timeliness',
          description: 'The entity processes, records, and reports information within defined time periods to support the achievement of objectives.',
          requiredEvidence: [
            'Service level agreements (SLAs)',
            'Processing time requirements',
            'Timeliness monitoring',
            'Performance metrics',
            'Latency measurements',
            'Processing schedules'
          ],
          keywords: ['timeliness', 'SLAs', 'processing delays', 'latency', 'response time']
        },
        {
          id: 'pi-authorization',
          name: 'Transaction Authorization',
          description: 'The entity authorizes, processes, records, and reports transactions to achieve its objectives related to the completeness and accuracy of transaction processing.',
          requiredEvidence: [
            'Authorization procedures and workflows',
            'Approval hierarchies',
            'Transaction logs',
            'Authorization records',
            'Segregation of duties documentation',
            'Control matrices'
          ],
          keywords: ['authorization', 'approval workflow', 'transaction control', 'segregation of duties']
        },
        {
          id: 'pi-system-processing',
          name: 'System Processing Controls',
          description: 'The entity implements controls to ensure that system processing is performed accurately, completely, and on a timely basis.',
          requiredEvidence: [
            'System processing control documentation',
            'Control testing results',
            'Automated control configurations',
            'Batch processing logs',
            'Reconciliation procedures',
            'Control effectiveness reviews'
          ],
          keywords: ['system controls', 'batch processing', 'automation', 'control testing', 'reconciliation']
        },
        {
          id: 'pi-exception-handling',
          name: 'Exception and Error Handling',
          description: 'The entity identifies, records, investigates, and resolves exceptions and errors in system processing.',
          requiredEvidence: [
            'Exception handling procedures',
            'Error logs and records',
            'Investigation documentation',
            'Resolution tracking',
            'Exception metrics',
            'Root cause analysis'
          ],
          keywords: ['exception handling', 'error handling', 'root cause analysis', 'resolution tracking']
        }
      ]
    },
    {
      id: 'confidentiality',
      name: 'Confidentiality (C)',
      description: 'Controls that address the protection of information from unauthorized disclosure',
      controls: [
        {
          id: 'c-data-classification',
          name: 'Data Classification',
          description: 'The entity classifies and protects information based on its level of sensitivity and regulatory requirements.',
          requiredEvidence: [
            'Data classification policy',
            'Classification scheme and levels',
            'Classified asset inventory',
            'Labeling procedures',
            'Classification guidelines',
            'Regular reassessment records'
          ],
          keywords: ['data classification', 'sensitivity levels', 'information labeling', 'data inventory']
        },
        {
          id: 'c-encryption',
          name: 'Encryption Controls',
          description: 'The entity implements encryption and other technical controls to protect confidential information in transit and at rest.',
          requiredEvidence: [
            'Encryption standards and policies',
            'Algorithm specifications',
            'Key management procedures',
            'Certificate management',
            'Encryption implementation details',
            'Encryption audit logs'
          ],
          keywords: ['encryption', 'AES', 'TLS', 'key management', 'cryptography', 'data protection']
        },
        {
          id: 'c-access-controls',
          name: 'Confidential Data Access Controls',
          description: 'The entity restricts access to confidential information to authorized individuals based on need-to-know and roles.',
          requiredEvidence: [
            'Access control policies for confidential data',
            'Role definitions and assignments',
            'Need-to-know justifications',
            'Access logs and audit trails',
            'Access reviews and certifications',
            'De-provisioning procedures'
          ],
          keywords: ['access control', 'need-to-know', 'confidential data access', 'role-based access']
        },
        {
          id: 'c-retention',
          name: 'Data Retention and Disposal',
          description: 'The entity establishes and maintains procedures to securely retain and dispose of confidential information.',
          requiredEvidence: [
            'Data retention policy',
            'Retention schedules by data type',
            'Secure disposal procedures',
            'Disposal logs and certifications',
            'Retention schedule reviews',
            'Destruction verification records'
          ],
          keywords: ['data retention', 'data disposal', 'secure deletion', 'retention schedule', 'destruction']
        },
        {
          id: 'c-transmission',
          name: 'Secure Data Transmission',
          description: 'The entity implements controls to protect confidential information during transmission to prevent unauthorized access.',
          requiredEvidence: [
            'Data transmission security policy',
            'Secure transmission protocols (TLS, SFTP, VPN)',
            'Configuration standards',
            'Certificate management',
            'Transmission logs',
            'Security architecture documentation'
          ],
          keywords: ['secure transmission', 'TLS', 'VPN', 'SFTP', 'data in transit', 'encryption protocols']
        }
      ]
    },
    {
      id: 'privacy',
      name: 'Privacy (P)',
      description: 'Controls that address the collection, use, retention, disclosure, and disposal of personal information',
      controls: [
        {
          id: 'p-notice',
          name: 'Privacy Notice',
          description: 'The entity provides notices to individuals regarding the collection, use, retention, and disclosure of their personal information.',
          requiredEvidence: [
            'Privacy notices and policies',
            'Data collection notices',
            'Privacy policy documentation',
            'Language availability',
            'Distribution methods and records',
            'Updates and revisions'
          ],
          keywords: ['privacy notice', 'privacy policy', 'data collection notice', 'transparency', 'disclosure']
        },
        {
          id: 'p-choice',
          name: 'Privacy Choice and Consent',
          description: 'The entity provides individuals with the ability to exercise choice with regard to the collection, use, and disclosure of their personal information.',
          requiredEvidence: [
            'Consent management procedures',
            'Opt-in/opt-out mechanisms',
            'Consent records and logs',
            'Marketing preferences management',
            'Preference documentation',
            'Consent process descriptions'
          ],
          keywords: ['consent', 'choice', 'opt-in', 'opt-out', 'preferences', 'data preferences']
        },
        {
          id: 'p-access',
          name: 'Individual Access to Personal Information',
          description: 'The entity provides individuals with the ability to access their personal information and to challenge the accuracy and completeness of that information.',
          requiredEvidence: [
            'Access request procedures',
            'Response time commitments',
            'Data subject access request logs',
            'Accuracy challenge procedures',
            'Correction procedures',
            'Access request tracking'
          ],
          keywords: ['data subject access', 'right to access', 'data correction', 'accuracy challenges', 'SAR']
        },
        {
          id: 'p-disclosure',
          name: 'Privacy Disclosure',
          description: 'The entity discloses personal information to third parties with appropriate safeguards and in accordance with privacy laws and commitments.',
          requiredEvidence: [
            'Data sharing agreements',
            'Third-party processor agreements',
            'Privacy addendums and DPAs',
            'Disclosure logs',
            'Safeguards documentation',
            'Third-party assessment records'
          ],
          keywords: ['disclosure', 'third-party sharing', 'data sharing agreements', 'DPA', 'data processor']
        },
        {
          id: 'p-security',
          name: 'Privacy Data Security',
          description: 'The entity implements security controls to protect personal information throughout its lifecycle.',
          requiredEvidence: [
            'Personal data security controls',
            'Encryption of personal data',
            'Access controls for personal data',
            'Data minimization procedures',
            'Breach notification procedures',
            'Incident response for personal data'
          ],
          keywords: ['personal data security', 'data minimization', 'breach notification', 'GDPR', 'privacy security']
        }
      ]
    }
  ]
};