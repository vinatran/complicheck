import { Framework } from '../types';

export const hitrustFramework: Framework = {
  id: 'hitrust',
  name: 'HITRUST CSF',
  shortName: 'HITRUST',
  description: 'Healthcare information security certification framework',
  version: '11.0',
  category: 'industry',
  regions: ['US'],
  industries: ['Healthcare'],
  domains: [
    {
      id: 'ipp',
      name: 'Information Protection Program',
      description: 'Comprehensive security management and protection strategies for healthcare information',
      controls: [
        {
          id: 'ipp-001',
          name: 'Security Management Program',
          description: 'Establish and maintain a comprehensive security management program that includes policies, procedures, and oversight mechanisms for protecting healthcare information',
          requiredEvidence: [
            'Security policy documentation',
            'Security management plan',
            'Board approval records',
            'Annual security updates'
          ],
          keywords: ['policy', 'management', 'governance', 'oversight']
        },
        {
          id: 'ipp-002',
          name: 'Risk Assessment',
          description: 'Conduct documented risk assessments to identify vulnerabilities and threats to healthcare information systems and data',
          requiredEvidence: [
            'Risk assessment reports',
            'Vulnerability inventory',
            'Threat identification documentation',
            'Assessment methodology documentation'
          ],
          keywords: ['risk assessment', 'vulnerability', 'threat analysis', 'mitigation']
        },
        {
          id: 'ipp-003',
          name: 'Security Training and Awareness',
          description: 'Implement mandatory security training programs for all workforce members covering HIPAA requirements and information protection',
          requiredEvidence: [
            'Training curriculum documentation',
            'Training completion records',
            'Attendance logs',
            'Training effectiveness assessments'
          ],
          keywords: ['training', 'awareness', 'education', 'workforce']
        },
        {
          id: 'ipp-004',
          name: 'Sanctions Management',
          description: 'Establish and enforce disciplinary sanctions for workforce members who violate security policies',
          requiredEvidence: [
            'Sanction policy documentation',
            'Sanction enforcement records',
            'Disciplinary procedures',
            'Training on sanctions'
          ],
          keywords: ['sanctions', 'discipline', 'enforcement', 'policy violations']
        },
        {
          id: 'ipp-005',
          name: 'Information Protection Maintenance',
          description: 'Maintain systems and procedures to ensure ongoing protection of healthcare information and timely updates',
          requiredEvidence: [
            'Maintenance schedules',
            'System update logs',
            'Patch management records',
            'Configuration baselines'
          ],
          keywords: ['maintenance', 'updates', 'system management', 'protection']
        }
      ]
    },
    {
      id: 'ep',
      name: 'Endpoint Protection',
      description: 'Security controls for devices and endpoints accessing healthcare information systems',
      controls: [
        {
          id: 'ep-001',
          name: 'Device Security Standards',
          description: 'Define and enforce security standards for all endpoints including workstations, mobile devices, and portable media',
          requiredEvidence: [
            'Device classification policy',
            'Security baseline configurations',
            'Device inventory',
            'Compliance verification reports'
          ],
          keywords: ['device', 'endpoint', 'workstation', 'mobile', 'security standards']
        },
        {
          id: 'ep-002',
          name: 'Malware Protection',
          description: 'Implement anti-malware and anti-virus controls on all endpoints with regular updates and monitoring',
          requiredEvidence: [
            'Malware protection policy',
            'Anti-virus installation records',
            'Update logs',
            'Scanning reports',
            'Threat detection logs'
          ],
          keywords: ['malware', 'antivirus', 'protection', 'detection', 'scanning']
        },
        {
          id: 'ep-003',
          name: 'Personal Security Software',
          description: 'Ensure personal security software is deployed and maintained on all devices that access healthcare information',
          requiredEvidence: [
            'Software deployment records',
            'Version control documentation',
            'Update distribution logs',
            'Compliance reports'
          ],
          keywords: ['security software', 'personal protection', 'deployment', 'endpoint']
        },
        {
          id: 'ep-004',
          name: 'Device Encryption',
          description: 'Implement encryption for all devices that store or transmit protected health information',
          requiredEvidence: [
            'Encryption policy documentation',
            'Encryption implementation records',
            'Key management procedures',
            'Compliance verification'
          ],
          keywords: ['encryption', 'device', 'data protection', 'storage']
        }
      ]
    },
    {
      id: 'ac',
      name: 'Access Control',
      description: 'Controls governing user access to healthcare information systems and data',
      controls: [
        {
          id: 'ac-001',
          name: 'User Access Management',
          description: 'Implement procedures for authorized user access provisioning and de-provisioning based on role and business needs',
          requiredEvidence: [
            'User access policy',
            'Provisioning procedures',
            'Access request forms',
            'Approval documentation',
            'De-provisioning records'
          ],
          keywords: ['access', 'user', 'provisioning', 'authorization', 'management']
        },
        {
          id: 'ac-002',
          name: 'Authentication Controls',
          description: 'Require strong authentication mechanisms including passwords, multi-factor authentication, and unique identifiers for all users',
          requiredEvidence: [
            'Authentication policy',
            'Password requirements documentation',
            'MFA implementation records',
            'User credential records',
            'Authentication testing results'
          ],
          keywords: ['authentication', 'password', 'MFA', 'multifactor', 'credentials']
        },
        {
          id: 'ac-003',
          name: 'Role-Based Access Control',
          description: 'Implement role-based access control (RBAC) to grant minimum necessary access privileges for performing job functions',
          requiredEvidence: [
            'RBAC policy documentation',
            'Role definitions and mappings',
            'Access control lists',
            'Privilege review results',
            'Job function analysis'
          ],
          keywords: ['RBAC', 'role', 'privilege', 'least privilege', 'access control']
        },
        {
          id: 'ac-004',
          name: 'Remote Access Security',
          description: 'Implement security controls for remote access to healthcare information systems including VPN and encryption requirements',
          requiredEvidence: [
            'Remote access policy',
            'VPN configuration documentation',
            'Connection logs',
            'Encryption verification',
            'Access control records'
          ],
          keywords: ['remote access', 'VPN', 'telehealth', 'encryption', 'connection']
        },
        {
          id: 'ac-005',
          name: 'Access Monitoring and Logging',
          description: 'Maintain comprehensive logs of all access to protected health information for monitoring and audit purposes',
          requiredEvidence: [
            'Logging policy',
            'Access logs',
            'Audit trail documentation',
            'Log retention procedures',
            'Monitoring procedures'
          ],
          keywords: ['logging', 'audit', 'access logs', 'monitoring', 'tracking']
        }
      ]
    },
    {
      id: 'np',
      name: 'Network Protection',
      description: 'Controls for protecting the integrity and confidentiality of healthcare information in transit',
      controls: [
        {
          id: 'np-001',
          name: 'Network Segmentation',
          description: 'Implement network segmentation to isolate systems containing protected health information from external networks',
          requiredEvidence: [
            'Network architecture documentation',
            'Segmentation policy',
            'Firewall rules and configurations',
            'DMZ documentation',
            'Network diagrams'
          ],
          keywords: ['network', 'segmentation', 'firewall', 'DMZ', 'architecture']
        },
        {
          id: 'np-002',
          name: 'Transmission Security',
          description: 'Implement encryption and security controls for all transmission of protected health information over electronic networks',
          requiredEvidence: [
            'Transmission security policy',
            'Encryption standards documentation',
            'Protocol implementation records',
            'Certificate management procedures',
            'Encryption verification tests'
          ],
          keywords: ['transmission', 'encryption', 'SSL/TLS', 'protocol', 'transit']
        },
        {
          id: 'np-003',
          name: 'Intrusion Detection and Prevention',
          description: 'Deploy intrusion detection and prevention systems to monitor and protect network traffic from attacks',
          requiredEvidence: [
            'IDS/IPS policy documentation',
            'System deployment records',
            'Alert logs and responses',
            'Signature update records',
            'Testing and validation results'
          ],
          keywords: ['intrusion', 'IDS', 'IPS', 'detection', 'prevention', 'attack']
        },
        {
          id: 'np-004',
          name: 'Firewall Management',
          description: 'Implement and maintain firewalls with documented rules, regular reviews, and logging of all traffic',
          requiredEvidence: [
            'Firewall policy documentation',
            'Rule documentation and justification',
            'Change logs',
            'Traffic logs',
            'Regular review records'
          ],
          keywords: ['firewall', 'rules', 'traffic', 'filtering', 'access control']
        }
      ]
    },
    {
      id: 'vm',
      name: 'Vulnerability Management',
      description: 'Processes for identifying, evaluating, and remediating security vulnerabilities',
      controls: [
        {
          id: 'vm-001',
          name: 'Vulnerability Scanning',
          description: 'Conduct regular vulnerability scans of systems and networks to identify potential security weaknesses',
          requiredEvidence: [
            'Vulnerability scanning policy',
            'Scanning schedules and results',
            'Scanning tool documentation',
            'Scan reports',
            'Remediation tracking'
          ],
          keywords: ['vulnerability', 'scanning', 'assessment', 'identification', 'weakness']
        },
        {
          id: 'vm-002',
          name: 'Patch Management',
          description: 'Establish procedures for timely identification, evaluation, and installation of security patches',
          requiredEvidence: [
            'Patch management policy',
            'Patch inventory',
            'Installation records',
            'Testing procedures',
            'Patch testing documentation'
          ],
          keywords: ['patch', 'update', 'remediation', 'installation', 'management']
        },
        {
          id: 'vm-003',
          name: 'Vulnerability Evaluation',
          description: 'Evaluate identified vulnerabilities to determine risk level and prioritize remediation efforts',
          requiredEvidence: [
            'Risk evaluation methodology',
            'Risk scoring documentation',
            'Prioritization procedures',
            'Evaluation reports',
            'Remediation priorities'
          ],
          keywords: ['evaluation', 'risk assessment', 'prioritization', 'severity', 'impact']
        },
        {
          id: 'vm-004',
          name: 'Vulnerability Remediation',
          description: 'Implement timely remediation of identified vulnerabilities based on risk assessment results',
          requiredEvidence: [
            'Remediation procedures',
            'Remediation plans',
            'Implementation records',
            'Verification testing results',
            'Closure documentation'
          ],
          keywords: ['remediation', 'fix', 'resolution', 'mitigation', 'closure']
        }
      ]
    },
    {
      id: 'im',
      name: 'Incident Management',
      description: 'Procedures for detecting, responding to, and recovering from security incidents',
      controls: [
        {
          id: 'im-001',
          name: 'Incident Detection',
          description: 'Implement monitoring and detection mechanisms to identify potential security incidents and breaches',
          requiredEvidence: [
            'Incident detection policy',
            'Monitoring procedures',
            'Alert mechanisms',
            'Log review procedures',
            'Detection test results'
          ],
          keywords: ['detection', 'monitoring', 'alert', 'incident', 'identification']
        },
        {
          id: 'im-002',
          name: 'Incident Response Planning',
          description: 'Develop and maintain a comprehensive incident response plan with defined roles and procedures',
          requiredEvidence: [
            'Incident response plan',
            'Role definitions',
            'Contact lists',
            'Procedures documentation',
            'Plan updates'
          ],
          keywords: ['incident response', 'plan', 'procedure', 'preparedness', 'roles']
        },
        {
          id: 'im-003',
          name: 'Incident Response and Handling',
          description: 'Implement documented procedures for responding to and handling confirmed security incidents',
          requiredEvidence: [
            'Response procedures',
            'Incident tickets and logs',
            'Response timelines',
            'Evidence preservation records',
            'Communication logs'
          ],
          keywords: ['response', 'handling', 'containment', 'investigation', 'action']
        },
        {
          id: 'im-004',
          name: 'Breach Notification',
          description: 'Establish procedures for notifying individuals and regulatory authorities of confirmed data breaches',
          requiredEvidence: [
            'Notification policy',
            'Notification templates',
            'Notification records',
            'Regulatory filings',
            'Communication documentation'
          ],
          keywords: ['breach', 'notification', 'reporting', 'disclosure', 'communication']
        },
        {
          id: 'im-005',
          name: 'Incident Recovery and Learning',
          description: 'Implement recovery procedures and conduct post-incident reviews to prevent future incidents',
          requiredEvidence: [
            'Recovery procedures',
            'Recovery test results',
            'Post-incident review reports',
            'Lessons learned documentation',
            'Improvement implementation records'
          ],
          keywords: ['recovery', 'restoration', 'lessons learned', 'improvement', 'resilience']
        }
      ]
    }
  ]
};
