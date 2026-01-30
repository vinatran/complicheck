/**
 * GDPR Compliance Framework
 * Implementation of EU General Data Protection Regulation (GDPR) Regulation (EU) 2016/679
 */

import { Framework } from './index'

export const gdprFramework: Framework = {
  id: 'gdpr',
  name: 'General Data Protection Regulation',
  shortName: 'GDPR',
  description: 'EU regulation on data protection and privacy',
  version: '2016/679',
  category: 'privacy',
  regions: ['EU', 'EEA'],
  domains: [
    {
      id: 'lawfulness-of-processing',
      name: 'Lawfulness of Processing (Art. 6)',
      controls: [
        {
          id: 'gdpr-lop-001',
          name: 'Legal Basis Documentation',
          description: 'Document and maintain a record of the legal basis for processing personal data',
          requiredEvidence: [
            'Legal basis documentation (consent, contract, legal obligation, vital interests, public task, legitimate interests)',
            'Processing activity records with legal basis specified',
            'Data Processing Impact Assessment (DPIA) showing legal basis determination',
            'Contractual agreements referencing legal basis'
          ],
          keywords: ['legal basis', 'article 6', 'lawfulness', 'processing justification']
        },
        {
          id: 'gdpr-lop-002',
          name: 'Consent Management',
          description: 'Implement consent collection and management procedures for consent-based processing',
          requiredEvidence: [
            'Consent forms or mechanisms with clear opt-in design',
            'Records of consent collection with timestamps',
            'Consent withdrawal procedures and documentation',
            'Granular consent options for different processing purposes',
            'Evidence of freely given, specific, informed consent'
          ],
          keywords: ['consent', 'opt-in', 'freely given', 'informed consent']
        },
        {
          id: 'gdpr-lop-003',
          name: 'Legitimate Interests Assessment',
          description: 'Conduct and document Legitimate Interests Assessments (LIA) where applicable',
          requiredEvidence: [
            'Documented Legitimate Interests Assessment (LIA)',
            'Balance analysis between organization interests and data subject rights',
            'Assessment of necessity and proportionality',
            'Review and approval by relevant stakeholders'
          ],
          keywords: ['legitimate interests', 'LIA', 'balancing test', 'necessity']
        },
        {
          id: 'gdpr-lop-004',
          name: 'Contract-based Processing',
          description: 'Maintain contracts that establish lawful basis for processing',
          requiredEvidence: [
            'Signed contracts or service agreements establishing processing basis',
            'Employment contracts referencing data processing',
            'Service provider agreements with processing terms',
            'Customer agreements with data processing clauses'
          ],
          keywords: ['contract', 'agreement', 'service agreement', 'employment contract']
        },
        {
          id: 'gdpr-lop-005',
          name: 'Legal Obligation Compliance',
          description: 'Identify and document legal obligations requiring data processing',
          requiredEvidence: [
            'List of applicable legal obligations',
            'Regulatory requirements documentation',
            'References to relevant legislation or regulations',
            'Mapping of processing activities to specific legal obligations'
          ],
          keywords: ['legal obligation', 'compliance', 'regulation', 'statutory requirement']
        }
      ]
    },
    {
      id: 'data-subject-rights',
      name: 'Data Subject Rights (Art. 12-23)',
      controls: [
        {
          id: 'gdpr-dsr-001',
          name: 'Right of Access Implementation',
          description: 'Enable data subjects to access their personal data upon request',
          requiredEvidence: [
            'Documented procedures for access requests',
            'Request submission mechanisms (online forms, email addresses)',
            'Data retrieval and compilation processes',
            'Evidence of fulfilling access requests within 30 days',
            'Records of access request responses'
          ],
          keywords: ['right of access', 'subject access request', 'SAR', 'data retrieval']
        },
        {
          id: 'gdpr-dsr-002',
          name: 'Right to Rectification',
          description: 'Allow data subjects to correct inaccurate personal data',
          requiredEvidence: [
            'Procedures for rectification requests',
            'Correction mechanisms in data systems',
            'Audit trail of corrections made',
            'Communication to recipients about rectifications',
            'Response records with correction confirmations'
          ],
          keywords: ['rectification', 'correction', 'inaccuracy', 'data update']
        },
        {
          id: 'gdpr-dsr-003',
          name: 'Right to Erasure (Right to be Forgotten)',
          description: 'Implement procedures for deletion of personal data when appropriate',
          requiredEvidence: [
            'Erasure request procedures and forms',
            'Data deletion mechanisms and systems',
            'Records of erasure requests and responses',
            'Exceptions documentation (legal obligation, public interest)',
            'Confirmation of data deletion across systems'
          ],
          keywords: ['erasure', 'right to be forgotten', 'deletion', 'RTBF']
        },
        {
          id: 'gdpr-dsr-004',
          name: 'Right to Data Portability',
          description: 'Enable data subjects to obtain and reuse their data',
          requiredEvidence: [
            'Data portability procedures and formats (machine-readable)',
            'Technical mechanisms for data export',
            'Records of data portability requests fulfilled',
            'Data format specifications (CSV, JSON, XML, etc.)',
            'Direct transfer mechanisms to other controllers where feasible'
          ],
          keywords: ['data portability', 'export', 'machine-readable', 'transfer']
        },
        {
          id: 'gdpr-dsr-005',
          name: 'Right to Object',
          description: 'Allow data subjects to object to processing',
          requiredEvidence: [
            'Procedures for handling objection requests',
            'Clear instructions for submitting objections',
            'Processing suspension protocols upon objection',
            'Records of objection handling and outcomes',
            'Communications informing subjects of objection rights'
          ],
          keywords: ['right to object', 'objection', 'direct marketing', 'processing suspension']
        },
        {
          id: 'gdpr-dsr-006',
          name: 'Rights Related to Automated Decision Making',
          description: 'Protect rights regarding automated processing and profiling',
          requiredEvidence: [
            'Information about automated decision making and profiling',
            'Policies on significant decisions based on automated processing',
            'Procedures for human review of automated decisions',
            'Records of automated decision review processes',
            'Documentation of rights explanations to data subjects'
          ],
          keywords: ['automated decision making', 'profiling', 'human intervention', 'significant decision']
        }
      ]
    },
    {
      id: 'data-protection-by-design',
      name: 'Data Protection by Design (Art. 25)',
      controls: [
        {
          id: 'gdpr-dpd-001',
          name: 'Privacy by Design Principles',
          description: 'Integrate privacy into system design and operations from the outset',
          requiredEvidence: [
            'Privacy design documentation for systems and processes',
            'Data minimization documentation',
            'Privacy requirements in system specifications',
            'Design review records showing privacy consideration',
            'Privacy impact assessments during development'
          ],
          keywords: ['privacy by design', 'design principles', 'privacy requirements', 'development']
        },
        {
          id: 'gdpr-dpd-002',
          name: 'Data Minimization',
          description: 'Collect and process only necessary personal data for specified purposes',
          requiredEvidence: [
            'Documentation of data collection purposes and scope',
            'Data inventory showing what data is collected',
            'Justification for each data element collected',
            'Regular data minimization reviews',
            'Policies restricting data collection to necessary data'
          ],
          keywords: ['data minimization', 'necessity', 'collection scope', 'limited scope']
        },
        {
          id: 'gdpr-dpd-003',
          name: 'Purpose Limitation',
          description: 'Process data only for specified, explicit, and legitimate purposes',
          requiredEvidence: [
            'Documentation of processing purposes for each system',
            'Policies defining permitted uses of data',
            'Records of purpose determination and approval',
            'Controls preventing use for incompatible purposes',
            'Staff training on purpose limitations'
          ],
          keywords: ['purpose limitation', 'purpose', 'specified purpose', 'incompatible use']
        },
        {
          id: 'gdpr-dpd-004',
          name: 'Storage Limitation',
          description: 'Retain personal data only as long as necessary',
          requiredEvidence: [
            'Data retention schedule and policy',
            'Documented retention periods for each data category',
            'Deletion procedures and automation',
            'Audit logs of data deletion activities',
            'Records of retention review and updates'
          ],
          keywords: ['storage limitation', 'retention', 'deletion schedule', 'retention period']
        },
        {
          id: 'gdpr-dpd-005',
          name: 'Default Data Protection',
          description: 'Implement appropriate technical and organizational measures by default',
          requiredEvidence: [
            'Default privacy settings documentation',
            'Encryption and security measures implemented by default',
            'Access control defaults (least privilege)',
            'Logging and monitoring enabled by default',
            'Configuration standards ensuring privacy protection'
          ],
          keywords: ['default protection', 'technical measures', 'organizational measures', 'security defaults']
        }
      ]
    },
    {
      id: 'security-of-processing',
      name: 'Security of Processing (Art. 32)',
      controls: [
        {
          id: 'gdpr-sec-001',
          name: 'Encryption and Pseudonymization',
          description: 'Implement encryption and pseudonymization of personal data',
          requiredEvidence: [
            'Encryption policy for data at rest and in transit',
            'Documentation of encryption algorithms and key management',
            'Pseudonymization procedures and documentation',
            'Evidence of encryption implementation in systems',
            'Encryption audit logs and validation records'
          ],
          keywords: ['encryption', 'pseudonymization', 'AES-256', 'TLS', 'cipher']
        },
        {
          id: 'gdpr-sec-002',
          name: 'Access Control and Authentication',
          description: 'Control access to personal data through authentication and authorization',
          requiredEvidence: [
            'Access control policies and procedures',
            'Role-based access control (RBAC) implementation',
            'Multi-factor authentication (MFA) for sensitive data',
            'User access provisioning and deprovisioning records',
            'Periodic access reviews and recertification'
          ],
          keywords: ['access control', 'authentication', 'authorization', 'MFA', 'RBAC']
        },
        {
          id: 'gdpr-sec-003',
          name: 'Availability and Resilience',
          description: 'Ensure availability of personal data and recovery capability',
          requiredEvidence: [
            'Business continuity and disaster recovery plans',
            'Backup and recovery procedures',
            'System redundancy and failover mechanisms',
            'Recovery time objective (RTO) and recovery point objective (RPO) documentation',
            'Testing records of recovery procedures'
          ],
          keywords: ['availability', 'resilience', 'backup', 'recovery', 'business continuity']
        },
        {
          id: 'gdpr-sec-004',
          name: 'Integrity and Confidentiality',
          description: 'Protect integrity and confidentiality of personal data',
          requiredEvidence: [
            'Data integrity controls and checksums',
            'Version control and change management',
            'Confidentiality agreements and NDAs',
            'Secure disposal procedures',
            'System audit trails and integrity monitoring'
          ],
          keywords: ['integrity', 'confidentiality', 'NDA', 'secure disposal', 'data quality']
        },
        {
          id: 'gdpr-sec-005',
          name: 'Secure Development Practices',
          description: 'Apply security principles throughout development lifecycle',
          requiredEvidence: [
            'Secure coding standards and guidelines',
            'Code review and security testing procedures',
            'Vulnerability assessment and penetration testing results',
            'Security training for developers',
            'Dependency scanning and patching procedures'
          ],
          keywords: ['secure development', 'code review', 'vulnerability testing', 'SAST', 'DAST']
        },
        {
          id: 'gdpr-sec-006',
          name: 'Incident Response and Monitoring',
          description: 'Monitor systems and respond to security incidents',
          requiredEvidence: [
            'Incident detection and monitoring systems',
            'Incident response procedures',
            'Security information and event management (SIEM)',
            'Intrusion detection systems (IDS)',
            'Incident response team documentation and training'
          ],
          keywords: ['incident response', 'monitoring', 'SIEM', 'IDS', 'incident handling']
        }
      ]
    },
    {
      id: 'data-breach-notification',
      name: 'Data Breach Notification (Art. 33-34)',
      controls: [
        {
          id: 'gdpr-dbn-001',
          name: 'Breach Detection Mechanisms',
          description: 'Detect personal data breaches involving unauthorized access or loss',
          requiredEvidence: [
            'Security monitoring and alerting systems',
            'Log monitoring and analysis procedures',
            'Anomaly detection mechanisms',
            'User reports and incident channels',
            'Breach detection documentation and testing records'
          ],
          keywords: ['breach detection', 'monitoring', 'alerting', 'anomaly detection', 'incident detection']
        },
        {
          id: 'gdpr-dbn-002',
          name: 'Breach Notification to Supervisory Authority',
          description: 'Notify supervisory authority of breaches without undue delay',
          requiredEvidence: [
            'Breach notification procedures',
            'Supervisory authority contact information',
            'Templates for breach notification communications',
            'Records of notifications sent to authorities',
            'Notification documentation including timing and content'
          ],
          keywords: ['breach notification', 'supervisory authority', 'DPA', 'notification template', 'timing']
        },
        {
          id: 'gdpr-dbn-003',
          name: 'Breach Notification to Data Subjects',
          description: 'Inform data subjects when breach poses high risk to their rights',
          requiredEvidence: [
            'Data subject notification procedures',
            'Communication templates for breach notifications',
            'Records of notifications to data subjects',
            'Risk assessment methodology for determining notification need',
            'Evidence of notification within appropriate timeframes'
          ],
          keywords: ['data subject notification', 'breach communication', 'risk assessment', 'notification letter']
        },
        {
          id: 'gdpr-dbn-004',
          name: 'Breach Documentation',
          description: 'Document breaches including facts, effects, and remedial action',
          requiredEvidence: [
            'Breach investigation reports',
            'Documentation of breach facts and circumstances',
            'Assessment of impact on data subjects',
            'Remedial actions taken',
            'Breach register or log'
          ],
          keywords: ['breach documentation', 'investigation', 'breach register', 'root cause analysis']
        },
        {
          id: 'gdpr-dbn-005',
          name: 'Breach Prevention and Remediation',
          description: 'Take measures to prevent and remedy breaches',
          requiredEvidence: [
            'Corrective action plans for breaches',
            'Implementation of preventive measures',
            'Security improvements following breaches',
            'Monitoring of remediation effectiveness',
            'Follow-up assessments and testing'
          ],
          keywords: ['breach prevention', 'remediation', 'corrective action', 'mitigation', 'preventive measures']
        },
        {
          id: 'gdpr-dbn-006',
          name: 'Breach Response Procedures',
          description: 'Establish incident response procedures for managing breaches',
          requiredEvidence: [
            'Incident response plan and procedures',
            'Response team roles and responsibilities',
            'Communication protocols',
            'Evidence of breach response testing (drills, simulations)',
            'Response time metrics and compliance records'
          ],
          keywords: ['incident response', 'response plan', 'response team', 'escalation', 'response time']
        }
      ]
    },
    {
      id: 'data-protection-officer',
      name: 'Data Protection Officer (Art. 37-39)',
      controls: [
        {
          id: 'gdpr-dpo-001',
          name: 'DPO Appointment',
          description: 'Appoint a Data Protection Officer where required by law',
          requiredEvidence: [
            'Decision document for DPO designation',
            'DPO job description and role definition',
            'Appointment letter or contract',
            'DPO contact information disclosure',
            'Organizational charts showing DPO reporting structure'
          ],
          keywords: ['DPO appointment', 'designation', 'required', 'public authority', 'core activities']
        },
        {
          id: 'gdpr-dpo-002',
          name: 'DPO Independence and Resources',
          description: 'Ensure DPO has independence and necessary resources',
          requiredEvidence: [
            'DPO employment contract guaranteeing independence',
            'Budget allocation for DPO functions',
            'Staff or support for DPO activities',
            'Training budget documentation',
            'Evidence of DPO reporting directly to senior management'
          ],
          keywords: ['DPO independence', 'resources', 'budget', 'support staff', 'reporting']
        },
        {
          id: 'gdpr-dpo-003',
          name: 'DPO Monitoring Compliance',
          description: 'DPO monitors compliance with GDPR and other data protection laws',
          requiredEvidence: [
            'DPO compliance monitoring procedures',
            'Records of compliance assessments',
            'Audit schedules and reports',
            'Documentation of monitoring activities',
            'DPO recommendations and advice documentation'
          ],
          keywords: ['monitoring', 'compliance check', 'audit', 'assessment', 'DPO duties']
        },
        {
          id: 'gdpr-dpo-004',
          name: 'DPO Cooperation with Supervisory Authority',
          description: 'DPO cooperates with supervisory authority as contact point',
          requiredEvidence: [
            'DPO contact details provided to supervisory authority',
            'Records of communication with DPA',
            'Cooperation agreements or procedures',
            'Documentation of DPA inquiries and responses',
            'Evidence of serving as single point of contact'
          ],
          keywords: ['cooperation', 'DPA contact', 'supervisory authority', 'liaison', 'communication']
        },
        {
          id: 'gdpr-dpo-005',
          name: 'DPO Awareness and Support',
          description: 'Raise awareness of DPO role and provide support for DPO activities',
          requiredEvidence: [
            'Internal communications about DPO role',
            'Organization contact information for DPO',
            'Support for DPO training and professional development',
            'Procedures for staff to contact DPO',
            'Evidence of DPO availability and accessibility'
          ],
          keywords: ['awareness', 'support', 'accessibility', 'training', 'communication']
        },
        {
          id: 'gdpr-dpo-006',
          name: 'DPO Professional Qualification',
          description: 'Ensure DPO has necessary professional expertise in data protection',
          requiredEvidence: [
            'DPO CV or qualifications documentation',
            'Professional certifications (CDPP, IAPP, etc.)',
            'Data protection training and education records',
            'Professional experience in data protection',
            'Continuing professional development records'
          ],
          keywords: ['qualification', 'expertise', 'certification', 'training', 'professional development']
        }
      ]
    }
  ]
}
