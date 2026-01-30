import { Framework, Control } from '../types';

const gli19Framework: Framework = {
  id: 'gli-19',
  name: 'Gaming Laboratories International Standard 19',
  shortName: 'GLI-19',
  description: 'Interactive gaming systems security standard',
  version: '3.0',
  category: 'industry',
  industries: ['Gaming', 'iGaming', 'Gambling'],
  domains: [
    {
      id: 'gli-19-system-security',
      name: 'System Security',
      description: 'Controls for securing interactive gaming systems and access management',
      controls: [
        {
          id: 'gli-19-ss-001',
          name: 'Access Control Implementation',
          description: 'Implement role-based access control (RBAC) with principle of least privilege for all gaming system components',
          requiredEvidence: [
            'Access control policy documentation',
            'RBAC matrix or configuration',
            'User role assignments',
            'Privilege audit logs'
          ],
          keywords: ['access control', 'RBAC', 'least privilege', 'authorization']
        },
        {
          id: 'gli-19-ss-002',
          name: 'Authentication Mechanisms',
          description: 'Deploy strong authentication mechanisms including multi-factor authentication for administrative access',
          requiredEvidence: [
            'Authentication policy',
            'MFA configuration documentation',
            'Password complexity requirements',
            'Authentication logs'
          ],
          keywords: ['authentication', 'MFA', 'password policy', 'credentials']
        },
        {
          id: 'gli-19-ss-003',
          name: 'Encryption for Data at Rest',
          description: 'Encrypt sensitive gaming data at rest using approved cryptographic algorithms',
          requiredEvidence: [
            'Encryption policy',
            'Approved algorithm list',
            'Key management procedures',
            'Encryption implementation documentation'
          ],
          keywords: ['encryption', 'cryptography', 'data at rest', 'algorithm']
        },
        {
          id: 'gli-19-ss-004',
          name: 'Encryption for Data in Transit',
          description: 'Protect all data transmitted between gaming system components using TLS or equivalent encryption',
          requiredEvidence: [
            'Network security policy',
            'TLS configuration',
            'Certificate management procedures',
            'Network traffic analysis'
          ],
          keywords: ['TLS', 'encryption', 'data in transit', 'network security']
        },
        {
          id: 'gli-19-ss-005',
          name: 'Secure System Configuration',
          description: 'Maintain hardened and secure baseline configurations for all gaming system components',
          requiredEvidence: [
            'System hardening guidelines',
            'Configuration baseline documentation',
            'Security patches log',
            'Configuration audit reports'
          ],
          keywords: ['hardening', 'configuration', 'baseline', 'system security']
        }
      ]
    },
    {
      id: 'gli-19-data-protection',
      name: 'Data Protection',
      description: 'Controls for protecting player data and transaction security in gaming systems',
      controls: [
        {
          id: 'gli-19-dp-001',
          name: 'Player Data Privacy',
          description: 'Implement controls to protect personally identifiable information (PII) of players',
          requiredEvidence: [
            'Data privacy policy',
            'Data classification scheme',
            'PII protection procedures',
            'Privacy audit results'
          ],
          keywords: ['PII', 'privacy', 'player data', 'GDPR']
        },
        {
          id: 'gli-19-dp-002',
          name: 'Transaction Security',
          description: 'Secure all financial and gaming transactions with encryption, authentication, and audit trails',
          requiredEvidence: [
            'Transaction security policy',
            'Encryption certificates',
            'Transaction log samples',
            'Audit trail documentation'
          ],
          keywords: ['transaction', 'financial', 'security', 'payment']
        },
        {
          id: 'gli-19-dp-003',
          name: 'Data Retention Policies',
          description: 'Establish and enforce data retention and disposal policies for gaming and player data',
          requiredEvidence: [
            'Data retention policy',
            'Disposal procedures',
            'Retention schedule',
            'Disposal audit logs'
          ],
          keywords: ['retention', 'disposal', 'data lifecycle', 'archival']
        },
        {
          id: 'gli-19-dp-004',
          name: 'Database Security',
          description: 'Protect databases containing gaming and player information with access controls and encryption',
          requiredEvidence: [
            'Database security policy',
            'Database access controls',
            'Encryption configuration',
            'Database audit logs'
          ],
          keywords: ['database', 'data protection', 'access control', 'encryption']
        }
      ]
    },
    {
      id: 'gli-19-network-security',
      name: 'Network Security',
      description: 'Controls for securing the network infrastructure supporting gaming systems',
      controls: [
        {
          id: 'gli-19-ns-001',
          name: 'Network Architecture Security',
          description: 'Design network architecture with proper segmentation and DMZ implementation for gaming systems',
          requiredEvidence: [
            'Network architecture diagram',
            'Segmentation policy',
            'DMZ configuration',
            'Network design documentation'
          ],
          keywords: ['network architecture', 'segmentation', 'DMZ', 'design']
        },
        {
          id: 'gli-19-ns-002',
          name: 'Firewall Configuration',
          description: 'Implement and maintain firewalls with rules based on least privilege and service requirements',
          requiredEvidence: [
            'Firewall policy',
            'Firewall rule set',
            'Rule review logs',
            'Firewall change documentation'
          ],
          keywords: ['firewall', 'network security', 'rules', 'filtering']
        },
        {
          id: 'gli-19-ns-003',
          name: 'Intrusion Detection and Prevention',
          description: 'Deploy intrusion detection and prevention systems to monitor and protect gaming networks',
          requiredEvidence: [
            'IDS/IPS policy',
            'IDS/IPS configuration',
            'Alert logs',
            'Signature update logs'
          ],
          keywords: ['IDS', 'IPS', 'intrusion detection', 'prevention', 'monitoring']
        },
        {
          id: 'gli-19-ns-004',
          name: 'Network Monitoring and Logging',
          description: 'Implement comprehensive network monitoring and maintain detailed logs of network activity',
          requiredEvidence: [
            'Monitoring policy',
            'Network flow logs',
            'Alert configuration',
            'Incident response logs'
          ],
          keywords: ['network monitoring', 'logging', 'traffic analysis', 'surveillance']
        },
        {
          id: 'gli-19-ns-005',
          name: 'Remote Access Security',
          description: 'Secure remote access to gaming systems with authentication, encryption, and monitoring',
          requiredEvidence: [
            'Remote access policy',
            'VPN/remote access configuration',
            'Authentication requirements',
            'Remote session logs'
          ],
          keywords: ['remote access', 'VPN', 'authentication', 'secure tunnel']
        }
      ]
    },
    {
      id: 'gli-19-software-development',
      name: 'Software Development',
      description: 'Controls for secure software development lifecycle in gaming systems',
      controls: [
        {
          id: 'gli-19-sd-001',
          name: 'Secure SDLC Requirements',
          description: 'Establish and follow secure software development lifecycle standards for gaming applications',
          requiredEvidence: [
            'SDLC policy document',
            'Development standards',
            'Security requirements checklist',
            'SDLC process documentation'
          ],
          keywords: ['SDLC', 'development', 'secure', 'lifecycle', 'standards']
        },
        {
          id: 'gli-19-sd-002',
          name: 'Code Review Process',
          description: 'Implement mandatory code review procedures with security focus for all gaming code changes',
          requiredEvidence: [
            'Code review policy',
            'Review checklist',
            'Code review logs',
            'Reviewer approvals'
          ],
          keywords: ['code review', 'peer review', 'security review', 'approval']
        },
        {
          id: 'gli-19-sd-003',
          name: 'Security Testing and Validation',
          description: 'Perform security testing including static analysis, dynamic analysis, and penetration testing',
          requiredEvidence: [
            'Testing policy',
            'Test plans',
            'SAST/DAST reports',
            'Penetration test results'
          ],
          keywords: ['security testing', 'SAST', 'DAST', 'penetration testing', 'validation']
        },
        {
          id: 'gli-19-sd-004',
          name: 'Vulnerability Management',
          description: 'Track, remediate, and document vulnerabilities found in gaming software',
          requiredEvidence: [
            'Vulnerability tracking system',
            'Vulnerability scan results',
            'Remediation plans',
            'Verification evidence'
          ],
          keywords: ['vulnerability', 'remediation', 'patch', 'defect tracking']
        },
        {
          id: 'gli-19-sd-005',
          name: 'Secure Coding Practices',
          description: 'Follow secure coding standards and guidelines to prevent common vulnerabilities',
          requiredEvidence: [
            'Coding standards document',
            'Secure coding guidelines',
            'Developer training records',
            'Code quality metrics'
          ],
          keywords: ['coding standards', 'OWASP', 'secure code', 'best practices']
        }
      ]
    },
    {
      id: 'gli-19-change-management',
      name: 'Change Management',
      description: 'Controls for managing changes to gaming systems securely',
      controls: [
        {
          id: 'gli-19-cm-001',
          name: 'Change Control Process',
          description: 'Implement formal change control procedures for all changes to gaming systems',
          requiredEvidence: [
            'Change management policy',
            'Change request template',
            'Change approval logs',
            'Change documentation'
          ],
          keywords: ['change control', 'CAB', 'approval', 'process']
        },
        {
          id: 'gli-19-cm-002',
          name: 'Change Risk Assessment',
          description: 'Assess and document the risk of all proposed changes to gaming systems',
          requiredEvidence: [
            'Risk assessment template',
            'Risk assessment results',
            'Impact analysis',
            'Approval records'
          ],
          keywords: ['risk assessment', 'impact analysis', 'change risk', 'evaluation']
        },
        {
          id: 'gli-19-cm-003',
          name: 'Version Control and Management',
          description: 'Maintain version control systems with proper branching, tagging, and release management',
          requiredEvidence: [
            'Version control policy',
            'Repository configuration',
            'Release notes',
            'Version history logs'
          ],
          keywords: ['version control', 'git', 'branching', 'release management', 'tagging']
        },
        {
          id: 'gli-19-cm-004',
          name: 'Testing and Validation of Changes',
          description: 'Test all changes in controlled environments before deployment to production',
          requiredEvidence: [
            'Testing policy',
            'Test plans',
            'Test results',
            'Validation reports'
          ],
          keywords: ['testing', 'validation', 'staging', 'test environment', 'deployment']
        },
        {
          id: 'gli-19-cm-005',
          name: 'Rollback Procedures',
          description: 'Establish and document rollback procedures for failed or problematic deployments',
          requiredEvidence: [
            'Rollback procedures',
            'Backup procedures',
            'Recovery plan',
            'Rollback logs'
          ],
          keywords: ['rollback', 'recovery', 'backups', 'disaster recovery']
        }
      ]
    },
    {
      id: 'gli-19-audit-logging',
      name: 'Audit and Logging',
      description: 'Controls for audit trails and logging in gaming systems',
      controls: [
        {
          id: 'gli-19-al-001',
          name: 'Comprehensive Audit Trails',
          description: 'Maintain comprehensive audit trails of all activities in gaming systems including user actions and administrative functions',
          requiredEvidence: [
            'Audit logging policy',
            'Audit log configuration',
            'Sample audit logs',
            'Log format documentation'
          ],
          keywords: ['audit trail', 'logging', 'activity log', 'user actions']
        },
        {
          id: 'gli-19-al-002',
          name: 'Log Retention and Protection',
          description: 'Retain logs for defined retention periods and protect logs from unauthorized modification or deletion',
          requiredEvidence: [
            'Log retention policy',
            'Log storage configuration',
            'Access controls for logs',
            'Archival procedures'
          ],
          keywords: ['log retention', 'log protection', 'archive', 'immutability']
        },
        {
          id: 'gli-19-al-003',
          name: 'Log Monitoring and Analysis',
          description: 'Monitor and analyze logs to detect security incidents and anomalous behavior',
          requiredEvidence: [
            'Log monitoring policy',
            'SIEM configuration',
            'Alert rules',
            'Incident investigation logs'
          ],
          keywords: ['log monitoring', 'SIEM', 'alerting', 'anomaly detection']
        },
        {
          id: 'gli-19-al-004',
          name: 'Time Synchronization',
          description: 'Ensure all system clocks are synchronized to enable correlation of log entries across systems',
          requiredEvidence: [
            'Time sync policy',
            'NTP configuration',
            'Clock synchronization logs',
            'Time audit reports'
          ],
          keywords: ['time synchronization', 'NTP', 'clock', 'timestamps']
        },
        {
          id: 'gli-19-al-005',
          name: 'Gaming Transaction Reporting',
          description: 'Generate and maintain detailed reports of gaming transactions for audit and regulatory compliance',
          requiredEvidence: [
            'Transaction reporting policy',
            'Report templates',
            'Sample transaction reports',
            'Regulatory submission records'
          ],
          keywords: ['transaction reporting', 'gaming logs', 'compliance', 'audit reports']
        },
        {
          id: 'gli-19-al-006',
          name: 'Incident Logging and Response',
          description: 'Log all security incidents and maintain records of incident investigation and remediation',
          requiredEvidence: [
            'Incident response policy',
            'Incident log',
            'Investigation reports',
            'Remediation records'
          ],
          keywords: ['incident logging', 'incident response', 'investigation', 'remediation']
        }
      ]
    }
  ]
};

export { gli19Framework };
