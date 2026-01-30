/**
 * HIPAA Compliance Framework
 * Implementation of Health Insurance Portability and Accountability Act (HIPAA)
 * 45 CFR Parts 160, 162, and 164
 */

import { Framework } from './index'

export const hipaaFramework: Framework = {
  id: 'hipaa',
  name: 'Health Insurance Portability and Accountability Act',
  shortName: 'HIPAA',
  description: 'US healthcare data privacy and security regulations',
  version: '2013',
  category: 'industry',
  regions: ['US'],
  industries: ['Healthcare', 'Health Insurance'],
  domains: [
    {
      id: 'administrative-safeguards',
      name: 'Administrative Safeguards (§164.308)',
      controls: [
        {
          id: 'hipaa-as-001',
          name: 'Security Management Process',
          description: 'Establish and maintain a security management process that includes risk analysis and management',
          requiredEvidence: [
            'Risk analysis documentation assessing threats and vulnerabilities',
            'Risk management plan addressing identified risks',
            'Sanction policy for security violations',
            'Security training and awareness program documentation',
            'Security incident procedures and response protocols'
          ],
          keywords: ['security management', 'risk analysis', 'risk management', 'sanction policy', 'threat assessment']
        },
        {
          id: 'hipaa-as-002',
          name: 'Workforce Security',
          description: 'Implement workforce security procedures to ensure authorized access to ePHI',
          requiredEvidence: [
            'Access authorization procedures and documentation',
            'Role-based access assignments and job descriptions',
            'User access provisioning and deprovisioning records',
            'Periodic review and recertification of user access',
            'Supervision and monitoring of workforce with access to ePHI'
          ],
          keywords: ['workforce security', 'access control', 'authorization', 'deprovisioning', 'user management']
        },
        {
          id: 'hipaa-as-003',
          name: 'Information Access Management',
          description: 'Manage access to ePHI based on role and need-to-know principle',
          requiredEvidence: [
            'Access control policies defining role-based permissions',
            'Documentation of minimum necessary access determinations',
            'Access restriction controls and implementation evidence',
            'Audit trails showing access reviews and modifications',
            'Emergency access procedures and approval documentation'
          ],
          keywords: ['information access', 'minimum necessary', 'role-based access', 'need-to-know', 'access policies']
        },
        {
          id: 'hipaa-as-004',
          name: 'Security Training and Awareness',
          description: 'Provide security training and awareness programs to all workforce members',
          requiredEvidence: [
            'Documented security training curriculum and program',
            'Training sign-in sheets and completion records',
            'Training effectiveness assessments',
            'Annual refresher training records',
            'Training documentation for new employees and role changes',
            'Security awareness materials and communications'
          ],
          keywords: ['security training', 'awareness program', 'education', 'workforce training', 'compliance training']
        },
        {
          id: 'hipaa-as-005',
          name: 'Security Incident Procedures',
          description: 'Establish procedures to address and report security incidents involving ePHI',
          requiredEvidence: [
            'Security incident response procedures and plan',
            'Incident detection and reporting mechanisms',
            'Investigation and documentation procedures',
            'Breach assessment procedures and documentation',
            'Incident response team roles and responsibilities'
          ],
          keywords: ['incident procedures', 'incident response', 'breach management', 'reporting', 'investigation']
        },
        {
          id: 'hipaa-as-006',
          name: 'Contingency Planning',
          description: 'Establish and maintain contingency plans for emergency access to ePHI',
          requiredEvidence: [
            'Contingency plan documentation and procedures',
            'Data backup plans and procedures',
            'Disaster recovery plan and testing records',
            'Emergency mode operation procedures',
            'Backup testing and validation evidence'
          ],
          keywords: ['contingency plan', 'disaster recovery', 'backup procedures', 'emergency access', 'business continuity']
        }
      ]
    },
    {
      id: 'physical-safeguards',
      name: 'Physical Safeguards (§164.310)',
      controls: [
        {
          id: 'hipaa-ps-001',
          name: 'Facility Access Controls',
          description: 'Limit physical access to facilities containing ePHI systems and equipment',
          requiredEvidence: [
            'Facility security plan and access control procedures',
            'Badge system or access control system logs',
            'Visitor log records with time-in/time-out',
            'Security guards or surveillance system documentation',
            'Facility diagrams showing controlled access areas',
            'Maintenance records for physical access controls'
          ],
          keywords: ['facility access', 'physical access', 'access controls', 'badges', 'visitor logs', 'security']
        },
        {
          id: 'hipaa-ps-002',
          name: 'Workstation Use and Security',
          description: 'Implement and enforce procedures to limit ePHI access at workstations',
          requiredEvidence: [
            'Workstation security policy and procedures',
            'Workstation usage guidelines and documentation',
            'Workstation location and configuration diagrams',
            'Workstation access logs and usage monitoring',
            'Screen privacy or anti-glare filters',
            'Workstation hardening and lock procedures'
          ],
          keywords: ['workstation security', 'workstation use', 'screen privacy', 'physical security', 'access procedures']
        },
        {
          id: 'hipaa-ps-003',
          name: 'Workstation Device and Media Controls',
          description: 'Manage and protect devices and media containing ePHI',
          requiredEvidence: [
            'Device and media inventory and control procedures',
            'Encryption of portable devices and media',
            'Secure disposal procedures for devices and media',
            'Evidence of media destruction or sanitization',
            'Mobile device management policies',
            'Accountability logs for devices and media access'
          ],
          keywords: ['device controls', 'media controls', 'encryption', 'secure disposal', 'destruction', 'accountability']
        },
        {
          id: 'hipaa-ps-004',
          name: 'Technical Controls for Physical Environment',
          description: 'Implement technical controls in the physical environment',
          requiredEvidence: [
            'Environmental controls documentation (temperature, humidity)',
            'Fire suppression system installation and maintenance records',
            'Power supply and backup system documentation',
            'Cabling security and organization procedures',
            'Environmental monitoring system logs'
          ],
          keywords: ['environmental controls', 'power management', 'fire suppression', 'infrastructure', 'cabling']
        },
        {
          id: 'hipaa-ps-005',
          name: 'Maintenance Records',
          description: 'Maintain and document maintenance records for physical infrastructure',
          requiredEvidence: [
            'Maintenance schedules and procedures',
            'Maintenance activity logs and completion records',
            'HVAC system maintenance documentation',
            'Fire detection and suppression system maintenance',
            'Security system maintenance and testing records'
          ],
          keywords: ['maintenance', 'records', 'upkeep', 'infrastructure maintenance', 'compliance records']
        },
        {
          id: 'hipaa-ps-006',
          name: 'Data Center Security',
          description: 'Ensure data center facilities have appropriate physical security',
          requiredEvidence: [
            'Data center security policy and procedures',
            'Physical security controls documentation',
            'Access control system for data center',
            'Environmental monitoring and controls',
            'Surveillance and monitoring system documentation'
          ],
          keywords: ['data center security', 'facility security', 'physical controls', 'monitoring', 'surveillance']
        }
      ]
    },
    {
      id: 'technical-safeguards',
      name: 'Technical Safeguards (§164.312)',
      controls: [
        {
          id: 'hipaa-ts-001',
          name: 'Access Control',
          description: 'Implement technical controls to limit access to ePHI',
          requiredEvidence: [
            'User authentication mechanisms (passwords, MFA, biometrics)',
            'Emergency access procedures with authorization',
            'Automatic logoff procedures and configuration',
            'User session management logs',
            'Role-based access control (RBAC) implementation',
            'Access control testing and validation records'
          ],
          keywords: ['access control', 'authentication', 'authorization', 'MFA', 'session management', 'RBAC']
        },
        {
          id: 'hipaa-ts-002',
          name: 'Audit Controls and Logs',
          description: 'Implement mechanisms to record and examine access to systems containing ePHI',
          requiredEvidence: [
            'Audit log configuration and retention policy',
            'Access logs including user ID, date, time, ePHI accessed',
            'Activity logs with detailed transaction records',
            'Log protection and integrity mechanisms',
            'Log review procedures and frequency',
            'Unauthorized access attempt logs and analysis'
          ],
          keywords: ['audit controls', 'audit logs', 'activity logs', 'log retention', 'monitoring', 'investigation']
        },
        {
          id: 'hipaa-ts-003',
          name: 'Integrity Controls',
          description: 'Protect ePHI from improper alteration or destruction',
          requiredEvidence: [
            'Data integrity checking mechanisms (checksums, hashing)',
            'Version control and change management procedures',
            'Digital signatures for authentication and non-repudiation',
            'Change logs and audit trails',
            'Data validation procedures',
            'Integrity monitoring and alerting systems'
          ],
          keywords: ['integrity controls', 'data integrity', 'checksums', 'hashing', 'version control', 'change management']
        },
        {
          id: 'hipaa-ts-004',
          name: 'Encryption and Decryption',
          description: 'Implement encryption to protect ePHI during storage and transmission',
          requiredEvidence: [
            'Encryption policy for data at rest and in transit',
            'Encryption algorithm documentation (AES-256, TLS 1.2+)',
            'Encryption key management procedures',
            'Key generation, storage, and destruction documentation',
            'Encryption implementation validation',
            'Hardware or software encryption evidence'
          ],
          keywords: ['encryption', 'AES-256', 'TLS', 'key management', 'data protection', 'cryptography']
        },
        {
          id: 'hipaa-ts-005',
          name: 'Transmission Security',
          description: 'Implement controls to protect ePHI during electronic transmission',
          requiredEvidence: [
            'Transmission security policy and procedures',
            'Secure channel implementation (TLS, VPN, SSH)',
            'End-to-end encryption for transmitted ePHI',
            'Digital signatures for message authentication',
            'Secure messaging protocols documentation',
            'Transmission testing and validation records'
          ],
          keywords: ['transmission security', 'secure channels', 'TLS', 'VPN', 'secure transmission', 'encryption']
        },
        {
          id: 'hipaa-ts-006',
          name: 'System Monitoring and Intrusion Detection',
          description: 'Monitor systems for unauthorized access and implement intrusion detection',
          requiredEvidence: [
            'Intrusion detection system (IDS) deployment',
            'System monitoring and event management (SIEM)',
            'Unauthorized access detection and alerting',
            'Network traffic monitoring',
            'Incident detection procedures and logs',
            'Real-time alerting and response documentation'
          ],
          keywords: ['intrusion detection', 'IDS', 'SIEM', 'monitoring', 'unauthorized access', 'threat detection']
        }
      ]
    },
    {
      id: 'privacy-rule',
      name: 'Privacy Rule (§164.500)',
      controls: [
        {
          id: 'hipaa-pr-001',
          name: 'Use and Disclosure Restrictions',
          description: 'Limit use and disclosure of PHI to purposes permitted by HIPAA',
          requiredEvidence: [
            'Privacy policies and procedures',
            'Documented permitted uses and disclosures',
            'Authorization forms for use and disclosure',
            'Business associate agreements (BAAs)',
            'Disclosure logs and records',
            'Staff training on use and disclosure restrictions'
          ],
          keywords: ['use and disclosure', 'authorization', 'permitted uses', 'BAA', 'disclosure restrictions']
        },
        {
          id: 'hipaa-pr-002',
          name: 'Minimum Necessary Standard',
          description: 'Limit PHI use, disclosure, and requests to the minimum necessary',
          requiredEvidence: [
            'Minimum necessary policies and procedures',
            'Documentation of minimum necessary determinations',
            'Access restrictions based on minimum necessary',
            'Request handling procedures limiting disclosure',
            'Role-specific need-to-know determinations',
            'Staff training on minimum necessary principle'
          ],
          keywords: ['minimum necessary', 'access restrictions', 'limited scope', 'disclosure scope', 'need-to-know']
        },
        {
          id: 'hipaa-pr-003',
          name: 'Patient Rights to Access',
          description: 'Allow patients to access and obtain copies of their health information',
          requiredEvidence: [
            'Patient access request procedures and forms',
            'Documented responses to access requests',
            'Timeframe compliance (30 days) documentation',
            'Denial procedures with explanations',
            'Electronic health record (EHR) access logs',
            'Patient communication and notification records'
          ],
          keywords: ['patient access', 'access requests', 'right to access', 'patient rights', 'health information access']
        },
        {
          id: 'hipaa-pr-004',
          name: 'Amendments and Corrections',
          description: 'Allow patients to request amendments to their health information',
          requiredEvidence: [
            'Amendment request procedures and forms',
            'Amendment documentation and tracking',
            'Denial procedures with explanations and appeals',
            'Amendment notification to related parties',
            'Audit trail of amendments made',
            'Staff procedures for handling amendments'
          ],
          keywords: ['amendments', 'corrections', 'patient rights', 'modification requests', 'record accuracy']
        },
        {
          id: 'hipaa-pr-005',
          name: 'Accounting of Disclosures',
          description: 'Maintain and provide accounting of disclosures of PHI',
          requiredEvidence: [
            'Disclosure accounting procedures and logs',
            'Records of all disclosures with recipient information',
            'Accounting request procedures and responses',
            'Timeframe compliance documentation',
            'Electronic disclosure tracking systems',
            'Disclosure tracking for 6+ years of history'
          ],
          keywords: ['accounting of disclosures', 'disclosure tracking', 'disclosure records', 'patient notification']
        },
        {
          id: 'hipaa-pr-006',
          name: 'Privacy Notice and Consent',
          description: 'Provide privacy notice and obtain patient consent for use and disclosure',
          requiredEvidence: [
            'Privacy notice documentation in plain language',
            'Patient consent forms and signed acknowledgments',
            'Notice of privacy practices distribution records',
            'Consent for treatment, payment, operations',
            'Notice updates and change notifications',
            'Verification of patient receipt of notice'
          ],
          keywords: ['privacy notice', 'patient consent', 'HIPAA notice', 'informed consent', 'acknowledgment']
        }
      ]
    },
    {
      id: 'breach-notification',
      name: 'Breach Notification (§164.400)',
      controls: [
        {
          id: 'hipaa-bn-001',
          name: 'Breach Determination',
          description: 'Determine whether unauthorized access or disclosure constitutes a breach',
          requiredEvidence: [
            'Breach assessment procedures and criteria',
            'Risk assessment documentation for potential breaches',
            'Determination of unauthorized access or acquisition',
            'Risk of harm analysis and documentation',
            'Breach determination decision and rationale',
            'Investigation findings and conclusions'
          ],
          keywords: ['breach determination', 'breach assessment', 'risk of harm', 'unauthorized access', 'evaluation']
        },
        {
          id: 'hipaa-bn-002',
          name: 'Breach Notification to Individuals',
          description: 'Notify individuals whose unsecured PHI has been breached',
          requiredEvidence: [
            'Breach notification procedures',
            'Notification content requirements (what happened, risk)',
            'Notification timing (without unreasonable delay)',
            'Notification methods (mail, email, phone, media)',
            'Records of notifications sent to individuals',
            'Notification template documentation'
          ],
          keywords: ['breach notification', 'individual notification', 'notification requirements', 'timing', 'communication']
        },
        {
          id: 'hipaa-bn-003',
          name: 'Notification to Media',
          description: 'Notify the media of breaches affecting large numbers of residents',
          requiredEvidence: [
            'Media notification procedures and triggers',
            'Media notification templates',
            'Records of media notifications sent',
            'Notice to prominent media outlets',
            'Timing and scope documentation',
            'Public notification records'
          ],
          keywords: ['media notification', 'public notification', 'breach publicity', 'large breach', 'widespread disclosure']
        },
        {
          id: 'hipaa-bn-004',
          name: 'Notification to HHS Secretary',
          description: 'Notify the Department of Health and Human Services of breaches',
          requiredEvidence: [
            'HHS notification procedures and requirements',
            'HHS breach notification portal submissions',
            'Notice content including number of individuals affected',
            'Submission timing documentation',
            'Breach report records submitted to HHS',
            'Regulatory compliance confirmation'
          ],
          keywords: ['HHS notification', 'regulatory notification', 'government notification', 'breach reporting', 'federal notification']
        },
        {
          id: 'hipaa-bn-005',
          name: 'Breach Documentation and Investigation',
          description: 'Document and investigate breaches of PHI',
          requiredEvidence: [
            'Breach investigation procedures and team',
            'Investigation documentation and findings',
            'Root cause analysis of the breach',
            'Remedial action plans and implementation',
            'Breach register or log of all incidents',
            'Documentation retention (6+ years)'
          ],
          keywords: ['breach investigation', 'documentation', 'root cause', 'remediation', 'breach tracking', 'incident analysis']
        }
      ]
    }
  ]
}
