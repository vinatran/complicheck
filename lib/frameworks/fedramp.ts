import { Framework } from '../types';

export const fedRampFramework: Framework = {
  id: 'fedramp',
  name: 'Federal Risk and Authorization Management Program',
  shortName: 'FedRAMP',
  description: 'US government cloud security authorization program',
  version: 'Rev 5',
  category: 'government',
  regions: ['US'],
  industries: ['Government', 'Cloud Services'],
  controlFamilies: [
    {
      id: 'AC',
      name: 'Access Control',
      description: 'Controls for managing user access and authorization to system resources',
      controls: [
        {
          id: 'AC-1',
          name: 'Access Control Policy and Procedures',
          description: 'Establish and document access control policies and procedures',
          requiredEvidence: [
            'Access control policy documentation',
            'Procedure for user access provisioning',
            'Policy review and approval records'
          ],
          keywords: ['policy', 'procedures', 'access', 'documentation']
        },
        {
          id: 'AC-2',
          name: 'Account Management',
          description: 'Manage system accounts including creation, activation, modification, disabling, and removal',
          requiredEvidence: [
            'Account management procedures',
            'Account request and approval forms',
            'Account lifecycle audit logs',
            'Privileged account inventory'
          ],
          keywords: ['account', 'management', 'lifecycle', 'provisioning', 'deprovisioning']
        },
        {
          id: 'AC-3',
          name: 'Access Enforcement',
          description: 'Enforce approved authorizations and deny all other access',
          requiredEvidence: [
            'Access control matrix documentation',
            'Role-based access control (RBAC) configuration',
            'Access enforcement logs',
            'Authorization decision records'
          ],
          keywords: ['authorization', 'enforcement', 'RBAC', 'permissions', 'access matrix']
        },
        {
          id: 'AC-4',
          name: 'Separation of Duties',
          description: 'Separate duties and responsibilities to prevent unauthorized or unintended system modifications',
          requiredEvidence: [
            'Segregation of duties matrix',
            'Role definitions and assignments',
            'Conflict of interest analysis',
            'Monitoring logs for duty violations'
          ],
          keywords: ['separation', 'duties', 'conflict', 'responsibilities', 'segregation']
        },
        {
          id: 'AC-5',
          name: 'Access Restrictions for Change',
          description: 'Restrict individuals from simultaneously holding multiple conflicting system roles',
          requiredEvidence: [
            'Conflicting role definitions',
            'Dual role prevention controls',
            'Access change request approvals',
            'User access review records'
          ],
          keywords: ['conflicting', 'roles', 'change', 'restrictions', 'simultaneous']
        }
      ]
    },
    {
      id: 'AU',
      name: 'Audit and Accountability',
      description: 'Controls for logging, monitoring, and accountability of system activities',
      controls: [
        {
          id: 'AU-1',
          name: 'Audit and Accountability Policy',
          description: 'Establish audit and accountability policies and procedures',
          requiredEvidence: [
            'Audit policy documentation',
            'Audit procedures and guidelines',
            'Audit scope definition',
            'Policy approval records'
          ],
          keywords: ['audit', 'policy', 'procedures', 'accountability', 'documentation']
        },
        {
          id: 'AU-2',
          name: 'Audit Events',
          description: 'Determine system events to be audited based on risk assessment',
          requiredEvidence: [
            'Audit event selection documentation',
            'Risk assessment for audit events',
            'List of auditable events',
            'Event logging configuration'
          ],
          keywords: ['audit', 'events', 'logging', 'selection', 'risk assessment']
        },
        {
          id: 'AU-3',
          name: 'Content of Audit Records',
          description: 'Ensure audit records contain information to establish what occurred',
          requiredEvidence: [
            'Audit record format specifications',
            'Sample audit logs',
            'Field mapping documentation',
            'Timestamp accuracy verification'
          ],
          keywords: ['audit', 'records', 'content', 'fields', 'information']
        },
        {
          id: 'AU-5',
          name: 'Response to Audit Processing Failures',
          description: 'Alert personnel in the event of an audit processing failure',
          requiredEvidence: [
            'Audit failure alerting procedures',
            'Alert notifications and responses',
            'Monitoring for audit failures',
            'Log of audit processing errors'
          ],
          keywords: ['audit', 'failure', 'alert', 'processing', 'notification']
        },
        {
          id: 'AU-6',
          name: 'Audit Review, Analysis, and Reporting',
          description: 'Review and analyze audit records for inappropriate or unusual activity',
          requiredEvidence: [
            'Audit review procedures',
            'Audit analysis reports',
            'Log review schedules',
            'Anomaly detection documentation'
          ],
          keywords: ['review', 'analysis', 'reporting', 'anomalies', 'investigation']
        },
        {
          id: 'AU-9',
          name: 'Protection of Audit Information',
          description: 'Protect audit information and audit tools from unauthorized access',
          requiredEvidence: [
            'Audit log access restrictions',
            'Encryption of audit data',
            'Audit tool protection measures',
            'Backup and archival procedures'
          ],
          keywords: ['protection', 'audit', 'encryption', 'access', 'safeguard']
        }
      ]
    },
    {
      id: 'CA',
      name: 'Security Assessment',
      description: 'Controls for assessing security controls and monitoring system security',
      controls: [
        {
          id: 'CA-1',
          name: 'Security Assessment and Authorization Policy',
          description: 'Establish security assessment and authorization policies',
          requiredEvidence: [
            'Assessment policy documentation',
            'Authorization procedures',
            'Policy approval records',
            'Scope and boundaries definition'
          ],
          keywords: ['assessment', 'authorization', 'policy', 'security', 'procedures']
        },
        {
          id: 'CA-2',
          name: 'Security Assessments',
          description: 'Conduct security control assessments to determine compliance',
          requiredEvidence: [
            'Assessment plans and procedures',
            'Assessment reports',
            'Control testing evidence',
            'Remediation tracking'
          ],
          keywords: ['assessment', 'testing', 'evaluation', 'compliance', 'controls']
        },
        {
          id: 'CA-5',
          name: 'Plan of Action and Milestones',
          description: 'Develop plans to remediate findings and weaknesses',
          requiredEvidence: [
            'POA&M documentation',
            'Remediation timelines',
            'Risk ranking',
            'Tracking and status reports'
          ],
          keywords: ['remediation', 'plan', 'action', 'milestones', 'findings']
        },
        {
          id: 'CA-7',
          name: 'Continuous Monitoring',
          description: 'Establish continuous monitoring strategy and procedures',
          requiredEvidence: [
            'Continuous monitoring plan',
            'Monitoring tool configuration',
            'Baseline security metrics',
            'Monitoring reports and dashboards'
          ],
          keywords: ['continuous', 'monitoring', 'metrics', 'baseline', 'tracking']
        },
        {
          id: 'CA-8',
          name: 'Penetration Testing',
          description: 'Conduct penetration testing to assess system vulnerabilities',
          requiredEvidence: [
            'Penetration test plans',
            'Test results and reports',
            'Vulnerability findings',
            'Remediation evidence'
          ],
          keywords: ['penetration', 'testing', 'vulnerabilities', 'assessment', 'exploitation']
        }
      ]
    },
    {
      id: 'CM',
      name: 'Configuration Management',
      description: 'Controls for managing system configurations and changes',
      controls: [
        {
          id: 'CM-1',
          name: 'Configuration Management Policy',
          description: 'Establish configuration management policies and procedures',
          requiredEvidence: [
            'CM policy documentation',
            'CM procedures',
            'Policy approval records',
            'CM tools and processes'
          ],
          keywords: ['configuration', 'management', 'policy', 'procedures', 'documentation']
        },
        {
          id: 'CM-2',
          name: 'Baseline Configuration',
          description: 'Establish and maintain baseline configurations for systems',
          requiredEvidence: [
            'Baseline configuration documentation',
            'Configuration inventory',
            'Baseline approval records',
            'Configuration baselines per system'
          ],
          keywords: ['baseline', 'configuration', 'inventory', 'standard', 'documentation']
        },
        {
          id: 'CM-3',
          name: 'Change Control',
          description: 'Establish and implement change control procedures',
          requiredEvidence: [
            'Change control procedures',
            'Change request forms',
            'Change approval records',
            'Change implementation logs',
            'Rollback procedures'
          ],
          keywords: ['change', 'control', 'approval', 'implementation', 'request']
        },
        {
          id: 'CM-5',
          name: 'Access Restrictions for Change',
          description: 'Restrict physical and logical access for configuration changes',
          requiredEvidence: [
            'Access control lists for changes',
            'Change authorization matrix',
            'Access logs for configuration systems',
            'Segregation of duties in changes'
          ],
          keywords: ['access', 'restriction', 'change', 'authorization', 'segregation']
        },
        {
          id: 'CM-6',
          name: 'Configuration Settings',
          description: 'Establish and document configuration settings',
          requiredEvidence: [
            'Configuration documentation',
            'Security configuration guides',
            'Hardening standards',
            'Configuration verification reports'
          ],
          keywords: ['configuration', 'settings', 'hardening', 'standards', 'security']
        }
      ]
    },
    {
      id: 'IR',
      name: 'Incident Response',
      description: 'Controls for detecting, reporting, and responding to security incidents',
      controls: [
        {
          id: 'IR-1',
          name: 'Incident Response Policy and Procedures',
          description: 'Establish incident response policies and procedures',
          requiredEvidence: [
            'Incident response policy',
            'Response procedures',
            'Contact lists and escalation paths',
            'Policy approval records'
          ],
          keywords: ['incident', 'response', 'policy', 'procedures', 'documentation']
        },
        {
          id: 'IR-2',
          name: 'Incident Handling',
          description: 'Implement incident handling capabilities for security incidents',
          requiredEvidence: [
            'Incident handling procedures',
            'Incident logs and tickets',
            'Response time records',
            'Incident closure documentation'
          ],
          keywords: ['handling', 'incident', 'response', 'process', 'procedures']
        },
        {
          id: 'IR-4',
          name: 'Incident Handling Implementation',
          description: 'Implement incident handling capability with preparation, detection, analysis, containment, eradication, and recovery',
          requiredEvidence: [
            'Incident response playbooks',
            'Detection and analysis procedures',
            'Containment and eradication steps',
            'Recovery procedures',
            'Incident response training'
          ],
          keywords: ['handling', 'preparation', 'detection', 'containment', 'recovery']
        },
        {
          id: 'IR-5',
          name: 'Incident Monitoring',
          description: 'Track and document incident information and recovery activities',
          requiredEvidence: [
            'Incident tracking system',
            'Incident metrics and reports',
            'Recovery documentation',
            'Incident status tracking'
          ],
          keywords: ['monitoring', 'tracking', 'metrics', 'documentation', 'incident']
        },
        {
          id: 'IR-6',
          name: 'Incident Reporting',
          description: 'Report security incidents to appropriate authorities and stakeholders',
          requiredEvidence: [
            'Incident reporting procedures',
            'Report templates',
            'Distribution lists',
            'Reporting logs and confirmations'
          ],
          keywords: ['reporting', 'incident', 'notification', 'disclosure', 'authorities']
        }
      ]
    },
    {
      id: 'SC',
      name: 'System Protection',
      description: 'Controls for protecting system resources and information',
      controls: [
        {
          id: 'SC-1',
          name: 'System and Communications Protection Policy',
          description: 'Establish system and communications protection policies',
          requiredEvidence: [
            'Protection policy documentation',
            'Procedures for system protection',
            'Communication security standards',
            'Policy approval records'
          ],
          keywords: ['system', 'protection', 'policy', 'communication', 'security']
        },
        {
          id: 'SC-5',
          name: 'Denial of Service Protection',
          description: 'Protect against and limit the effects of denial of service attacks',
          requiredEvidence: [
            'DoS protection mechanisms',
            'Network monitoring configurations',
            'Rate limiting policies',
            'DDoS mitigation logs'
          ],
          keywords: ['denial', 'service', 'DoS', 'protection', 'attack']
        },
        {
          id: 'SC-7',
          name: 'Boundary Protection',
          description: 'Monitor and control communications at external boundaries',
          requiredEvidence: [
            'Network architecture diagrams',
            'Firewall configurations',
            'Boundary protection logs',
            'DMZ specifications',
            'Access control rules'
          ],
          keywords: ['boundary', 'protection', 'firewall', 'perimeter', 'monitoring']
        },
        {
          id: 'SC-13',
          name: 'Cryptographic Protection',
          description: 'Use approved cryptographic algorithms and encryption for data protection',
          requiredEvidence: [
            'Encryption standards documentation',
            'Cryptographic key management procedures',
            'Data encryption verification',
            'Algorithm compliance documentation'
          ],
          keywords: ['encryption', 'cryptographic', 'protection', 'algorithm', 'key']
        },
        {
          id: 'SC-28',
          name: 'Protection of Information at Rest',
          description: 'Protect information at rest using encryption and other means',
          requiredEvidence: [
            'Data encryption at rest configuration',
            'Storage security controls',
            'Encryption key management',
            'Data classification procedures'
          ],
          keywords: ['encryption', 'rest', 'data', 'protection', 'storage']
        },
        {
          id: 'SC-32',
          name: 'System Integrity',
          description: 'Monitor and maintain the integrity of information systems',
          requiredEvidence: [
            'System integrity monitoring tools',
            'Integrity verification procedures',
            'Patch management processes',
            'Malware detection and prevention'
          ],
          keywords: ['integrity', 'monitoring', 'verification', 'system', 'patches']
        }
      ]
    }
  ]
};