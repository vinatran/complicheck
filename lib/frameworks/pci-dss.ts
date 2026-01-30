import { Framework, Domain, Control } from '../types';

export const pciDssFramework: Framework = {
  id: 'pci-dss',
  name: 'Payment Card Industry Data Security Standard',
  shortName: 'PCI DSS',
  description: 'Security standard for organizations handling payment cards',
  version: '4.0',
  category: 'industry',
  industries: ['Retail', 'E-commerce', 'Finance'],
  domains: [
    {
      id: 'req1-2',
      name: 'Build and Maintain Secure Network',
      description: 'Establish and maintain network security controls including firewalls and secure configurations',
      controls: [
        {
          id: 'req1.1',
          name: 'Firewall Configuration Standards',
          description: 'Establish firewall and router configuration standards that define stateful firewalls and configuration standards for all system connections',
          requiredEvidence: [
            'Firewall configuration documentation',
            'Firewall rules and policies',
            'Network diagram showing all connections',
            'Firewall rule review records'
          ],
          keywords: ['firewall', 'network', 'configuration', 'security']
        },
        {
          id: 'req1.2',
          name: 'Build Configuration Standards',
          description: 'Establish configuration standards for system components that describe all cardholder data environments (CDE) system components',
          requiredEvidence: [
            'Configuration standards documentation',
            'Baseline configurations',
            'System hardening guides',
            'Implementation records'
          ],
          keywords: ['configuration', 'standards', 'hardening', 'systems']
        },
        {
          id: 'req2.1',
          name: 'Default Passwords and Security Parameters',
          description: 'Establish configuration standards to ensure that default passwords and any unnecessary or insecure services and parameters are removed or changed',
          requiredEvidence: [
            'Password change records',
            'Service audit logs',
            'System configuration audits',
            'Vendor security documentation'
          ],
          keywords: ['passwords', 'defaults', 'insecure', 'parameters']
        },
        {
          id: 'req2.2',
          name: 'Configuration Standards for System Components',
          description: 'Configure system components consistent with industry-accepted system hardening standards',
          requiredEvidence: [
            'System hardening procedures',
            'Configuration checklists',
            'Compliance audit results',
            'Baseline comparison reports'
          ],
          keywords: ['hardening', 'standards', 'components', 'configuration']
        },
        {
          id: 'req2.3',
          name: 'Administrative Access Restrictions',
          description: 'Configure system components to restrict administrative access to systems to the minimum set of ports needed',
          requiredEvidence: [
            'Access control policies',
            'Port usage documentation',
            'System logs showing restricted access',
            'Administrative access audit trails'
          ],
          keywords: ['administrative', 'access', 'restrictions', 'ports']
        }
      ]
    },
    {
      id: 'req3-4',
      name: 'Protect Cardholder Data',
      description: 'Implement controls to protect sensitive cardholder data through encryption and access controls',
      controls: [
        {
          id: 'req3.1',
          name: 'Cardholder Data Inventory and Classification',
          description: 'Identify and implement a process to define and document data classification for all cardholder data',
          requiredEvidence: [
            'Data classification policy',
            'Inventory of cardholder data locations',
            'Data flow diagrams',
            'Classification audit records'
          ],
          keywords: ['data', 'classification', 'inventory', 'cardholder']
        },
        {
          id: 'req3.2',
          name: 'Render Sensitive Data Unreadable',
          description: 'Render all sensitive authentication data unreadable anywhere it is stored by using one of the following approaches',
          requiredEvidence: [
            'Encryption implementation documentation',
            'Hashing algorithms used',
            'Key management procedures',
            'Data masking verification'
          ],
          keywords: ['encryption', 'hashing', 'masking', 'sensitive']
        },
        {
          id: 'req3.3',
          name: 'Data Minimization',
          description: 'Implement a process to remove or mask stored data after a defined period, retaining only the minimum amount of data necessary',
          requiredEvidence: [
            'Data retention policy',
            'Automated purging procedures',
            'Deletion audit logs',
            'Policy enforcement records'
          ],
          keywords: ['data', 'minimization', 'retention', 'deletion']
        },
        {
          id: 'req4.1',
          name: 'Encryption in Transit',
          description: 'Implement strong cryptography and security protocols to protect cardholder data in transit',
          requiredEvidence: [
            'TLS certificate documentation',
            'Encryption standards used',
            'Network traffic analysis',
            'Protocol configuration records'
          ],
          keywords: ['encryption', 'transit', 'TLS', 'cryptography']
        },
        {
          id: 'req4.2',
          name: 'Encryption Protocol Implementation',
          description: 'Configure system components to use only secure, up-to-date encryption protocols without fallback to weaker versions',
          requiredEvidence: [
            'Protocol configuration documentation',
            'SSL/TLS version audit logs',
            'Cipher suite specifications',
            'Security scanning results'
          ],
          keywords: ['protocol', 'encryption', 'versions', 'secure']
        }
      ]
    },
    {
      id: 'req5-6',
      name: 'Maintain Vulnerability Management',
      description: 'Establish controls to detect and address vulnerabilities through anti-malware and secure development practices',
      controls: [
        {
          id: 'req5.1',
          name: 'Anti-Malware Program',
          description: 'Implement an anti-malware solution that detects and removes known and unknown malicious code',
          requiredEvidence: [
            'Anti-malware software documentation',
            'Installation and configuration records',
            'Scan reports and logs',
            'Update and maintenance records'
          ],
          keywords: ['malware', 'anti-virus', 'detection', 'protection']
        },
        {
          id: 'req5.2',
          name: 'Anti-Malware Maintenance',
          description: 'Maintain an anti-malware solution active and up-to-date through automated mechanisms',
          requiredEvidence: [
            'Automated update logs',
            'Update schedule documentation',
            'Signature database version records',
            'Real-time protection verification'
          ],
          keywords: ['malware', 'updates', 'maintenance', 'active']
        },
        {
          id: 'req6.1',
          name: 'Secure Development Process',
          description: 'Establish a secure development process for designing and developing secure applications and systems',
          requiredEvidence: [
            'Development standards and policies',
            'Code review procedures',
            'Development lifecycle documentation',
            'Security training records'
          ],
          keywords: ['development', 'secure', 'process', 'coding']
        },
        {
          id: 'req6.2',
          name: 'Security Patches and Updates',
          description: 'Install security patches and software updates on all system components in a timely manner',
          requiredEvidence: [
            'Patch management policy',
            'Installation records and logs',
            'Testing procedures for patches',
            'Patch deployment schedules'
          ],
          keywords: ['patches', 'updates', 'security', 'timely']
        },
        {
          id: 'req6.3',
          name: 'Vulnerability Testing',
          description: 'Perform vulnerability assessments and remediation of identified weaknesses and verify successful remediation',
          requiredEvidence: [
            'Vulnerability assessment reports',
            'Scanning tools and methods',
            'Remediation tracking records',
            'Verification of fixes'
          ],
          keywords: ['vulnerability', 'testing', 'assessment', 'remediation']
        }
      ]
    },
    {
      id: 'req7-9',
      name: 'Implement Strong Access Control',
      description: 'Establish controls to limit access to cardholder data based on need-to-know, require authentication, and control physical access',
      controls: [
        {
          id: 'req7.1',
          name: 'Access Control on Cardholder Data',
          description: 'Limit access to cardholder data by business need-to-know and restrict access to the minimum amount of data required',
          requiredEvidence: [
            'Access control policies',
            'Role-based access documentation',
            'Access authorization forms',
            'Access review and approval records'
          ],
          keywords: ['access', 'need-to-know', 'limitation', 'business']
        },
        {
          id: 'req8.1',
          name: 'Authentication Systems',
          description: 'Implement an authentication system that uses unique user IDs, strong passwords, and assigns accounts by specific business roles',
          requiredEvidence: [
            'User account policy documentation',
            'Password policy standards',
            'Unique ID assignment records',
            'Role-based access matrices'
          ],
          keywords: ['authentication', 'passwords', 'accounts', 'identity']
        },
        {
          id: 'req8.2',
          name: 'Strong Authentication Mechanisms',
          description: 'Implement strong authentication mechanisms including multi-factor authentication for remote access',
          requiredEvidence: [
            'MFA implementation documentation',
            'Authentication mechanism specifications',
            'Configuration records',
            'User enrollment records'
          ],
          keywords: ['authentication', 'multi-factor', 'strong', 'remote']
        },
        {
          id: 'req9.1',
          name: 'Physical Access Control',
          description: 'Implement and maintain physical access controls to limit and monitor access to cardholder data and systems',
          requiredEvidence: [
            'Physical security policy',
            'Access control procedures',
            'Badge and key management records',
            'Physical access logs'
          ],
          keywords: ['physical', 'access', 'control', 'facilities']
        },
        {
          id: 'req9.2',
          name: 'Physical Access Monitoring',
          description: 'Implement surveillance cameras and access logs to monitor and record all physical access',
          requiredEvidence: [
            'CCTV documentation and placement',
            'Video retention policies',
            'Access badge logs',
            'Facility access audit trails'
          ],
          keywords: ['monitoring', 'surveillance', 'physical', 'logging']
        }
      ]
    },
    {
      id: 'req10-11',
      name: 'Monitor and Test Networks',
      description: 'Establish controls to log and monitor access to cardholder data and test security systems regularly',
      controls: [
        {
          id: 'req10.1',
          name: 'Activity Logging and Monitoring',
          description: 'Implement comprehensive logging of user and administrative access to cardholder data and systems',
          requiredEvidence: [
            'Logging policy documentation',
            'System audit logs',
            'Access event records',
            'Log review procedures'
          ],
          keywords: ['logging', 'monitoring', 'activity', 'access']
        },
        {
          id: 'req10.2',
          name: 'Automated User Activity Logging',
          description: 'Implement automated tools to capture and review user activity in the cardholder data environment',
          requiredEvidence: [
            'SIEM or logging tool documentation',
            'Automated logging configurations',
            'Alert rule definitions',
            'Review and response procedures'
          ],
          keywords: ['automated', 'logging', 'tools', 'activity']
        },
        {
          id: 'req10.3',
          name: 'Protect Audit Logs',
          description: 'Protect audit logs by restricting access and ensuring logs cannot be altered without detection',
          requiredEvidence: [
            'Log access controls',
            'Log integrity verification procedures',
            'Backup and retention policies',
            'Log file permissions documentation'
          ],
          keywords: ['logs', 'protection', 'integrity', 'access']
        },
        {
          id: 'req11.1',
          name: 'Wireless Access Point Detection',
          description: 'Implement processes to detect and identify unauthorized wireless access points on the network',
          requiredEvidence: [
            'Wireless detection policy',
            'Scanning procedures and tools',
            'Detection logs and reports',
            'Response procedures'
          ],
          keywords: ['wireless', 'detection', 'unauthorized', 'access']
        },
        {
          id: 'req11.2',
          name: 'Security Testing Program',
          description: 'Implement processes to conduct vulnerability assessments and penetration testing on the cardholder data environment',
          requiredEvidence: [
            'Testing procedures and scope',
            'Assessment reports',
            'Penetration testing results',
            'Remediation tracking'
          ],
          keywords: ['testing', 'penetration', 'assessment', 'vulnerability']
        }
      ]
    },
    {
      id: 'req12',
      name: 'Maintain Security Policy',
      description: 'Establish and maintain comprehensive security policies and risk assessment procedures',
      controls: [
        {
          id: 'req12.1',
          name: 'Security Policy Establishment',
          description: 'Establish and maintain comprehensive information security policies that address objectives, requirements, and responsibilities',
          requiredEvidence: [
            'Security policy documentation',
            'Policy approval and sign-off',
            'Communication records',
            'Policy review dates'
          ],
          keywords: ['policy', 'security', 'governance', 'comprehensive']
        },
        {
          id: 'req12.2',
          name: 'Risk Assessment Program',
          description: 'Implement and maintain a comprehensive risk assessment program to identify and evaluate threats and vulnerabilities',
          requiredEvidence: [
            'Risk assessment methodology',
            'Assessment reports',
            'Risk register documentation',
            'Mitigation planning records'
          ],
          keywords: ['risk', 'assessment', 'threats', 'vulnerabilities']
        },
        {
          id: 'req12.3',
          name: 'Incident Response Plan',
          description: 'Develop, publish, disseminate, and maintain an incident response plan to address potential data security incidents',
          requiredEvidence: [
            'Incident response plan documentation',
            'Response procedures',
            'Contact information and escalation',
            'Plan review and testing records'
          ],
          keywords: ['incident', 'response', 'plan', 'procedures']
        },
        {
          id: 'req12.4',
          name: 'Security Awareness Training',
          description: 'Implement a comprehensive annual security awareness training program for all personnel with access to cardholder data',
          requiredEvidence: [
            'Training program documentation',
            'Training materials and curriculum',
            'Attendance and completion records',
            'Training effectiveness assessments'
          ],
          keywords: ['training', 'awareness', 'security', 'personnel']
        },
        {
          id: 'req12.5',
          name: 'Security Incident Procedures',
          description: 'Establish and maintain security incident procedures, including notification and response workflows',
          requiredEvidence: [
            'Incident classification procedures',
            'Notification templates',
            'Investigation procedures',
            'Root cause analysis documentation'
          ],
          keywords: ['incident', 'procedures', 'notification', 'investigation']
        }
      ]
    }
  ]
};
