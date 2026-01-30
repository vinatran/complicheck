import { Framework, Domain, Control } from '../types';

export const iso27001Framework: Framework = {
  id: 'iso27001',
  name: 'ISO 27001:2022',
  shortName: 'ISO 27001',
  description: 'International standard for information security management systems',
  version: '2022',
  category: 'security',
  domains: [
    {
      id: 'a5',
      name: 'Organizational Controls (A.5)',
      description: 'Controls related to organizational policies, governance, and management structures',
      controls: [
        {
          id: 'a5.1',
          name: 'Information Security Policies',
          description: 'Establish and maintain comprehensive information security policies that address the organization\'s objectives and requirements',
          requiredEvidence: [
            'Information security policy document',
            'Policy approval and sign-off records',
            'Policy communication records',
            'Policy review and update history'
          ],
          keywords: ['policy', 'governance', 'information security', 'objectives']
        },
        {
          id: 'a5.2',
          name: 'Information Security Roles and Responsibilities',
          description: 'Define and assign clear roles and responsibilities for information security management',
          requiredEvidence: [
            'Role and responsibility matrix',
            'Job descriptions with security responsibilities',
            'Organizational chart with security roles',
            'Approval authority documentation'
          ],
          keywords: ['roles', 'responsibilities', 'accountability', 'organization']
        },
        {
          id: 'a5.3',
          name: 'Segregation of Duties',
          description: 'Implement segregation of duties to prevent conflicts of interest and unauthorized actions',
          requiredEvidence: [
            'Segregation of duties matrix',
            'Access control policies',
            'System configurations enforcing separation',
            'Review records and audit logs'
          ],
          keywords: ['segregation', 'duties', 'conflicts', 'authorization']
        },
        {
          id: 'a5.4',
          name: 'Management Responsibilities',
          description: 'Define and communicate management responsibilities for information security across all levels',
          requiredEvidence: [
            'Management directives and communications',
            'Delegation of authority documentation',
            'Management review records',
            'Performance measurement data'
          ],
          keywords: ['management', 'responsibilities', 'direction', 'oversight']
        },
        {
          id: 'a5.5',
          name: 'Contact with Authorities',
          description: 'Establish and maintain appropriate contacts with relevant authorities and law enforcement',
          requiredEvidence: [
            'Contacts list with authorities',
            'Communication records',
            'Reporting procedures documentation',
            'Incident escalation procedures'
          ],
          keywords: ['authorities', 'law enforcement', 'contacts', 'reporting']
        },
        {
          id: 'a5.6',
          name: 'Threat Intelligence',
          description: 'Gather and analyze threat intelligence to inform security decisions',
          requiredEvidence: [
            'Threat intelligence sources and feeds',
            'Analysis reports and assessments',
            'Action items from threat intelligence',
            'Integration with security controls'
          ],
          keywords: ['threat', 'intelligence', 'vulnerabilities', 'landscape']
        },
        {
          id: 'a5.7',
          name: 'Information Security in Project Management',
          description: 'Integrate information security requirements into all project management activities',
          requiredEvidence: [
            'Project governance documentation',
            'Security requirements in project charters',
            'Risk assessments for projects',
            'Project completion reviews'
          ],
          keywords: ['projects', 'management', 'integration', 'requirements']
        },
        {
          id: 'a5.8',
          name: 'Asset Management',
          description: 'Identify, inventory, and manage information and technology assets throughout their lifecycle',
          requiredEvidence: [
            'Asset register and inventory',
            'Asset classification scheme',
            'Lifecycle management procedures',
            'Periodic reconciliation records'
          ],
          keywords: ['assets', 'inventory', 'management', 'lifecycle', 'register']
        }
      ]
    },
    {
      id: 'a6',
      name: 'People Controls (A.6)',
      description: 'Controls related to human resources and personnel security',
      controls: [
        {
          id: 'a6.1',
          name: 'Screening',
          description: 'Conduct appropriate screening and background checks for all personnel with access to information assets',
          requiredEvidence: [
            'Background check policies',
            'Screening records and results',
            'Reference check documentation',
            'Verification of credentials'
          ],
          keywords: ['screening', 'background checks', 'personnel', 'candidates', 'vetting']
        },
        {
          id: 'a6.2',
          name: 'Terms and Conditions of Employment',
          description: 'Include information security requirements and responsibilities in employment contracts and policies',
          requiredEvidence: [
            'Employment contracts with security clauses',
            'Employee handbook and policies',
            'Confidentiality agreements',
            'Policy acknowledgment records'
          ],
          keywords: ['employment', 'terms', 'conditions', 'agreements', 'contracts']
        },
        {
          id: 'a6.3',
          name: 'Information Security Training and Awareness',
          description: 'Provide mandatory information security training and awareness programs to all personnel',
          requiredEvidence: [
            'Training curriculum and materials',
            'Training attendance records',
            'Training completion certificates',
            'Awareness campaign documentation',
            'Assessment and quiz results'
          ],
          keywords: ['training', 'awareness', 'education', 'security', 'personnel']
        },
        {
          id: 'a6.4',
          name: 'Disciplinary Process',
          description: 'Establish and enforce a disciplinary process for security policy violations',
          requiredEvidence: [
            'Disciplinary policy documentation',
            'Violation investigation records',
            'Disciplinary action records',
            'Appeal process documentation'
          ],
          keywords: ['discipline', 'violations', 'enforcement', 'process', 'consequences']
        },
        {
          id: 'a6.5',
          name: 'Responsibilities After Termination or Change of Role',
          description: 'Define and enforce responsibilities of personnel during and after employment termination or role changes',
          requiredEvidence: [
            'Termination procedures documentation',
            'Exit checklists and records',
            'Access revocation evidence',
            'Return of assets documentation',
            'Knowledge transfer procedures'
          ],
          keywords: ['termination', 'exit', 'offboarding', 'role change', 'access revocation']
        },
        {
          id: 'a6.6',
          name: 'Confidentiality or Non-Disclosure Agreements',
          description: 'Require all personnel to execute confidentiality or non-disclosure agreements',
          requiredEvidence: [
            'NDA templates and policies',
            'Signed NDA records',
            'NDA acknowledgment logs',
            'Enforcement records'
          ],
          keywords: ['confidentiality', 'NDA', 'non-disclosure', 'agreements', 'personnel']
        },
        {
          id: 'a6.7',
          name: 'Remote Working',
          description: 'Establish and enforce security controls for remote working arrangements',
          requiredEvidence: [
            'Remote work policy',
            'Security requirements documentation',
            'Remote access controls',
            'VPN and encryption enforcement',
            'Equipment and connectivity standards'
          ],
          keywords: ['remote', 'working', 'telecommute', 'home office', 'mobile']
        },
        {
          id: 'a6.8',
          name: 'Information Security Event Reporting',
          description: 'Establish clear procedures for reporting information security events and weaknesses',
          requiredEvidence: [
            'Incident reporting procedures',
            'Reporting channels and contacts',
            'Incident response process documentation',
            'Reporting records and statistics',
            'Feedback mechanisms'
          ],
          keywords: ['reporting', 'incidents', 'events', 'weaknesses', 'procedures']
        }
      ]
    },
    {
      id: 'a7',
      name: 'Physical Controls (A.7)',
      description: 'Controls related to physical security and environmental safeguards',
      controls: [
        {
          id: 'a7.1',
          name: 'Physical Security Perimeters',
          description: 'Establish physical security perimeters to protect information assets and facilities',
          requiredEvidence: [
            'Physical site layout and diagrams',
            'Perimeter security specifications',
            'Fencing and barrier documentation',
            'Design approval records'
          ],
          keywords: ['perimeter', 'physical', 'security', 'boundaries', 'facility']
        },
        {
          id: 'a7.2',
          name: 'Physical Entry',
          description: 'Control physical access to facilities with appropriate entry controls and monitoring',
          requiredEvidence: [
            'Access control system documentation',
            'Badge reader system records',
            'Key and lock management records',
            'Entry logs and audit trails',
            'Visitor management procedures'
          ],
          keywords: ['entry', 'access', 'physical', 'badge', 'visitor', 'authentication']
        },
        {
          id: 'a7.3',
          name: 'Securing Offices, Rooms, and Facilities',
          description: 'Protect offices, rooms, and facilities containing information assets from unauthorized access',
          requiredEvidence: [
            'Room access controls and locks',
            'Segregation of sensitive areas',
            'Security requirements by area',
            'Access rights documentation',
            'Inspection and audit records'
          ],
          keywords: ['offices', 'rooms', 'secure areas', 'facilities', 'access control']
        },
        {
          id: 'a7.4',
          name: 'Physical Security Monitoring',
          description: 'Implement monitoring systems to detect and respond to physical security incidents',
          requiredEvidence: [
            'CCTV system documentation',
            'Monitoring procedures and protocols',
            'Camera placement and coverage maps',
            'Recording and retention policies',
            'Incident response records',
            'Guard patrol documentation'
          ],
          keywords: ['monitoring', 'surveillance', 'CCTV', 'cameras', 'detection', 'incident']
        },
        {
          id: 'a7.5',
          name: 'Protection from Environmental Threats',
          description: 'Protect facilities and assets from environmental threats such as fire, water, and natural disasters',
          requiredEvidence: [
            'Fire suppression system documentation',
            'Environmental threat assessment',
            'Disaster recovery procedures',
            'Equipment placement standards',
            'Maintenance and inspection records'
          ],
          keywords: ['environmental', 'fire', 'water', 'disaster', 'threats', 'protection']
        },
        {
          id: 'a7.6',
          name: 'Work in Secure Areas',
          description: 'Establish security procedures for work activities in secure areas',
          requiredEvidence: [
            'Secure area work procedures',
            'Supervision requirements',
            'Clean desk policy',
            'Documentation handling procedures',
            'Compliance monitoring records'
          ],
          keywords: ['secure areas', 'work', 'procedures', 'supervision', 'clean desk']
        },
        {
          id: 'a7.7',
          name: 'Clear Desk and Clear Screen',
          description: 'Implement clear desk and clear screen policies to prevent unauthorized information access',
          requiredEvidence: [
            'Clear desk policy documentation',
            'Clear screen policy requirements',
            'Training and awareness materials',
            'Inspection records',
            'Non-compliance incident records'
          ],
          keywords: ['clear desk', 'clear screen', 'confidential', 'information', 'workspace']
        },
        {
          id: 'a7.8',
          name: 'Equipment Siting and Protection',
          description: 'Protect equipment from damage and environmental threats through proper siting and maintenance',
          requiredEvidence: [
            'Equipment placement guidelines',
            'Environmental specifications',
            'Maintenance procedures',
            'Inspection and maintenance records',
            'Disposal procedures'
          ],
          keywords: ['equipment', 'siting', 'protection', 'maintenance', 'environment']
        }
      ]
    },
    {
      id: 'a8',
      name: 'Technology Controls (A.8)',
      description: 'Controls related to technical security measures and information systems',
      controls: [
        {
          id: 'a8.1',
          name: 'User Endpoint Devices',
          description: 'Implement security controls for all user endpoint devices including computers, mobile devices, and IoT',
          requiredEvidence: [
            'Endpoint security policy',
            'Device inventory and registry',
            'Configuration standards',
            'Patching and update procedures',
            'Mobile device management policies',
            'Antivirus and anti-malware deployment records'
          ],
          keywords: ['endpoint', 'devices', 'computers', 'mobile', 'security', 'configuration']
        },
        {
          id: 'a8.2',
          name: 'Privileged Access Rights',
          description: 'Control and manage privileged access to systems and data with appropriate authentication and authorization',
          requiredEvidence: [
            'Privileged access management policy',
            'Access control lists and matrices',
            'Privilege escalation procedures',
            'Approval records for privilege grant',
            'Access review records',
            'Segregation of duties implementation'
          ],
          keywords: ['privileged access', 'administrator', 'authorization', 'authentication', 'approval']
        },
        {
          id: 'a8.3',
          name: 'Information Access Restriction',
          description: 'Restrict access to information and information systems based on the principle of least privilege',
          requiredEvidence: [
            'Access control policies',
            'User access matrices',
            'Permission assignment records',
            'Access reviews and certifications',
            'Audit logs of access',
            'Exception documentation'
          ],
          keywords: ['access control', 'restriction', 'principle', 'least privilege', 'authorization']
        },
        {
          id: 'a8.4',
          name: 'Access to Cryptographic Keys',
          description: 'Manage and protect access to cryptographic keys throughout their lifecycle',
          requiredEvidence: [
            'Key management policy',
            'Key generation procedures',
            'Key storage and protection measures',
            'Key usage logs',
            'Key rotation procedures',
            'Backup and recovery procedures'
          ],
          keywords: ['cryptographic', 'keys', 'encryption', 'management', 'protection']
        },
        {
          id: 'a8.5',
          name: 'Authentication',
          description: 'Implement strong authentication mechanisms to verify user identity',
          requiredEvidence: [
            'Authentication policy documentation',
            'Password policy standards',
            'Multi-factor authentication implementation',
            'Authentication mechanism selection',
            'User authentication records',
            'Failed authentication logs'
          ],
          keywords: ['authentication', 'multi-factor', 'password', 'verification', 'identity', 'MFA']
        },
        {
          id: 'a8.6',
          name: 'Capacity Management',
          description: 'Monitor, predict, and manage capacity of systems to ensure adequate performance',
          requiredEvidence: [
            'Capacity management policy',
            'Performance baseline documentation',
            'Monitoring tools and procedures',
            'Capacity forecasting data',
            'Resource allocation records',
            'Scalability planning documentation'
          ],
          keywords: ['capacity', 'management', 'performance', 'resources', 'monitoring', 'planning']
        },
        {
          id: 'a8.7',
          name: 'Protection Against Malware',
          description: 'Implement technical controls to detect and prevent malware infections',
          requiredEvidence: [
            'Anti-malware policy',
            'Antivirus software deployment records',
            'Malware scanning procedures',
            'Update and signature records',
            'Incident detection logs',
            'Quarantine and remediation records'
          ],
          keywords: ['malware', 'antivirus', 'anti-malware', 'detection', 'prevention', 'protection']
        },
        {
          id: 'a8.8',
          name: 'Management of Technical Vulnerabilities',
          description: 'Identify and remediate technical vulnerabilities in systems and software',
          requiredEvidence: [
            'Vulnerability management policy',
            'Vulnerability assessment reports',
            'Patch management procedures',
            'Patch deployment records',
            'Risk assessment of vulnerabilities',
            'Remediation tracking and verification'
          ],
          keywords: ['vulnerabilities', 'patches', 'updates', 'management', 'assessment', 'remediation']
        },
        {
          id: 'a8.9',
          name: 'Configuration Management',
          description: 'Establish and maintain secure baseline configurations for systems and software',
          requiredEvidence: [
            'Configuration management policy',
            'Baseline configuration documentation',
            'Configuration change procedures',
            'Change approval records',
            'Configuration audit records',
            'Deviation and exception documentation'
          ],
          keywords: ['configuration', 'management', 'baseline', 'changes', 'control', 'standards']
        },
        {
          id: 'a8.10',
          name: 'Information Deletion',
          description: 'Ensure secure and complete deletion or destruction of information when no longer needed',
          requiredEvidence: [
            'Data deletion policy',
            'Retention schedule documentation',
            'Deletion procedures and tools',
            'Destruction certificates',
            'Verification records of deletion',
            'Audit logs of deletion activities'
          ],
          keywords: ['deletion', 'destruction', 'data', 'secure', 'erasure', 'retention']
        },
        {
          id: 'a8.11',
          name: 'Data Masking',
          description: 'Implement data masking techniques to protect sensitive information in non-production environments',
          requiredEvidence: [
            'Data masking policy and procedures',
            'Masking rules and specifications',
            'Technology implementation records',
            'Approval for production data use',
            'Testing and validation records',
            'Audit logs of masked data access'
          ],
          keywords: ['data masking', 'sensitive data', 'protection', 'testing', 'anonymization']
        },
        {
          id: 'a8.12',
          name: 'Logging',
          description: 'Record and retain system and security event logs for monitoring and analysis',
          requiredEvidence: [
            'Logging policy and procedures',
            'Log retention policy',
            'System log configuration',
            'Log collection and storage',
            'Log monitoring procedures',
            'Log review records and findings'
          ],
          keywords: ['logging', 'logs', 'events', 'audit', 'monitoring', 'recording', 'retention']
        },
        {
          id: 'a8.13',
          name: 'Monitoring Activities',
          description: 'Monitor and detect information security incidents through continuous monitoring',
          requiredEvidence: [
            'Monitoring procedures and tools',
            'Security event definitions',
            'Monitoring rules and alerts',
            'Detection records and investigations',
            'Response procedures',
            'Incident reporting and trending'
          ],
          keywords: ['monitoring', 'detection', 'incidents', 'analysis', 'SIEM', 'alert']
        },
        {
          id: 'a8.14',
          name: 'Encryption',
          description: 'Protect the confidentiality and integrity of information through encryption',
          requiredEvidence: [
            'Encryption policy and standards',
            'Data classification by encryption needs',
            'Encryption algorithm selection',
            'Encryption implementation records',
            'Key management procedures',
            'End-to-end encryption documentation'
          ],
          keywords: ['encryption', 'confidentiality', 'integrity', 'cryptography', 'protection', 'TLS', 'AES']
        }
      ]
    }
  ]
};