import { Framework } from '../types';

export const nisFramework: Framework = {
  id: 'nis',
  name: 'NIS2 Directive',
  shortName: 'NIS2',
  description: 'EU directive on security of network and information systems',
  version: '2022/2555',
  category: 'government',
  regions: ['EU'],
  domains: [
    {
      id: 'nis-risk-management',
      name: 'Risk Management',
      description: 'Article 21 - Risk analysis, incident handling, and business continuity measures',
      controls: [
        {
          id: 'nis-rm-001',
          name: 'Risk Analysis and Assessment',
          description: 'Conduct regular risk analysis to identify threats, vulnerabilities, and impacts to network and information systems',
          requiredEvidence: [
            'Risk assessment methodology documentation',
            'Annual risk analysis reports',
            'Risk register with identified threats and vulnerabilities',
            'Impact assessment documentation'
          ],
          keywords: ['risk assessment', 'threat analysis', 'vulnerability identification', 'risk evaluation']
        },
        {
          id: 'nis-rm-002',
          name: 'Incident Handling Procedures',
          description: 'Establish and maintain procedures for handling, managing, and responding to security incidents',
          requiredEvidence: [
            'Incident handling policy and procedures',
            'Incident response plan',
            'Incident log with response activities',
            'Post-incident review reports'
          ],
          keywords: ['incident response', 'incident management', 'incident procedure', 'incident handling']
        },
        {
          id: 'nis-rm-003',
          name: 'Business Continuity and Disaster Recovery',
          description: 'Implement measures to ensure continuity of operations and recovery from security incidents or disasters',
          requiredEvidence: [
            'Business continuity plan',
            'Disaster recovery procedures',
            'Recovery time objectives (RTO) and recovery point objectives (RPO)',
            'Business continuity testing and drill records'
          ],
          keywords: ['business continuity', 'disaster recovery', 'continuity planning', 'resilience']
        },
        {
          id: 'nis-rm-004',
          name: 'Security Incident Response Testing',
          description: 'Conduct regular testing and exercises of incident response and business continuity plans',
          requiredEvidence: [
            'Test plan and test scenarios',
            'Incident response drill records',
            'Tabletop exercise documentation',
            'Test results and findings'
          ],
          keywords: ['testing', 'drills', 'exercises', 'simulation', 'incident response testing']
        },
        {
          id: 'nis-rm-005',
          name: 'Risk Mitigation Measures',
          description: 'Implement appropriate technical and organizational measures to mitigate identified risks',
          requiredEvidence: [
            'Risk mitigation plan',
            'Implementation records of control measures',
            'Residual risk assessment',
            'Risk acceptance documentation'
          ],
          keywords: ['mitigation', 'control implementation', 'risk reduction', 'safeguards']
        }
      ]
    },
    {
      id: 'nis-supply-chain',
      name: 'Supply Chain Security',
      description: 'Security management of suppliers and third-party relationships',
      controls: [
        {
          id: 'nis-sc-001',
          name: 'Supplier Security Assessment',
          description: 'Evaluate and assess the security measures of suppliers, contractors, and third-party service providers',
          requiredEvidence: [
            'Supplier assessment questionnaire and methodology',
            'Security assessment reports for suppliers',
            'Due diligence documentation',
            'Risk rating for critical suppliers'
          ],
          keywords: ['supplier assessment', 'third-party assessment', 'vendor security', 'due diligence']
        },
        {
          id: 'nis-sc-002',
          name: 'Supply Chain Risk Management',
          description: 'Identify, monitor, and manage risks related to supply chain dependencies and relationships',
          requiredEvidence: [
            'Supply chain risk register',
            'Dependency mapping documentation',
            'Supplier risk monitoring procedures',
            'Alternative supplier identification records'
          ],
          keywords: ['supply chain risk', 'supplier dependency', 'third-party risk', 'supply chain monitoring']
        },
        {
          id: 'nis-sc-003',
          name: 'Contractual Security Requirements',
          description: 'Include security requirements, responsibilities, and obligations in contracts with suppliers and service providers',
          requiredEvidence: [
            'Master service agreements with security clauses',
            'Data processing agreements',
            'Security requirements in contracts',
            'Subcontractor agreements'
          ],
          keywords: ['contracts', 'SLA', 'security clauses', 'service level agreements']
        },
        {
          id: 'nis-sc-004',
          name: 'Third-Party Access Control',
          description: 'Control and monitor access to systems and data granted to third-party providers',
          requiredEvidence: [
            'Third-party access policy',
            'Access provisioning and deprovisioning records',
            'Monitoring logs of third-party access',
            'Access review documentation'
          ],
          keywords: ['third-party access', 'vendor access', 'access control', 'monitoring']
        }
      ]
    },
    {
      id: 'nis-network-security',
      name: 'Network Security',
      description: 'Technical measures for network and system protection',
      controls: [
        {
          id: 'nis-ns-001',
          name: 'Network Monitoring and Detection',
          description: 'Implement systems to monitor network traffic and detect security anomalies or intrusions',
          requiredEvidence: [
            'Network monitoring tool configuration',
            'IDS/IPS system logs',
            'Network traffic analysis reports',
            'Anomaly detection procedure documentation'
          ],
          keywords: ['network monitoring', 'intrusion detection', 'SIEM', 'traffic analysis', 'anomaly detection']
        },
        {
          id: 'nis-ns-002',
          name: 'Access Control and Authentication',
          description: 'Implement strong authentication mechanisms and access controls to protect systems and data',
          requiredEvidence: [
            'Access control policy',
            'Multi-factor authentication implementation records',
            'User access provisioning documentation',
            'Privileged access management procedures'
          ],
          keywords: ['access control', 'authentication', 'MFA', 'authorization', 'privilege management']
        },
        {
          id: 'nis-ns-003',
          name: 'Data Encryption',
          description: 'Use encryption to protect data in transit and at rest from unauthorized access',
          requiredEvidence: [
            'Encryption standards and policy',
            'Encryption implementation records',
            'Key management procedures',
            'Encryption coverage assessment'
          ],
          keywords: ['encryption', 'TLS', 'data protection', 'cryptography', 'key management']
        },
        {
          id: 'nis-ns-004',
          name: 'Patch and Vulnerability Management',
          description: 'Implement processes to identify, assess, and remediate vulnerabilities in systems and software',
          requiredEvidence: [
            'Vulnerability management policy',
            'Patch management schedule',
            'Vulnerability scan reports',
            'Remediation tracking records'
          ],
          keywords: ['patching', 'vulnerability management', 'patch management', 'remediation']
        },
        {
          id: 'nis-ns-005',
          name: 'Firewall and Network Segmentation',
          description: 'Deploy firewalls and network segmentation to control traffic and isolate critical systems',
          requiredEvidence: [
            'Network architecture documentation',
            'Firewall rule sets and configurations',
            'Network segmentation design',
            'DMZ and security zone documentation'
          ],
          keywords: ['firewall', 'network segmentation', 'network architecture', 'segmentation']
        }
      ]
    },
    {
      id: 'nis-incident-reporting',
      name: 'Incident Reporting',
      description: 'Article 23 - Detection, notification, and documentation of security incidents',
      controls: [
        {
          id: 'nis-ir-001',
          name: 'Incident Detection and Analysis',
          description: 'Establish capabilities to detect security incidents and determine their nature and scope',
          requiredEvidence: [
            'Incident detection procedures',
            'Security monitoring and alerting systems',
            'Incident analysis methodology',
            'Incident classification documentation'
          ],
          keywords: ['incident detection', 'incident identification', 'incident analysis', 'threat detection']
        },
        {
          id: 'nis-ir-002',
          name: 'Incident Notification Requirements',
          description: 'Notify relevant authorities of incidents that significantly impact availability or integrity of services',
          requiredEvidence: [
            'Notification procedures and escalation matrix',
            'Regulatory authority contact information',
            'Notification timelines and requirements',
            'Notification records and evidence'
          ],
          keywords: ['notification', 'incident reporting', 'authority notification', 'regulatory reporting']
        },
        {
          id: 'nis-ir-003',
          name: 'Incident Documentation',
          description: 'Document all security incidents including detection, analysis, response actions, and outcomes',
          requiredEvidence: [
            'Incident register or log',
            'Incident investigation reports',
            'Timeline of incident events',
            'Documentation of remediation steps'
          ],
          keywords: ['incident documentation', 'incident logging', 'incident tracking', 'incident records']
        },
        {
          id: 'nis-ir-004',
          name: 'Forensic Capabilities',
          description: 'Maintain capabilities for forensic investigation and evidence preservation of security incidents',
          requiredEvidence: [
            'Forensic procedures and guidelines',
            'Log retention policy',
            'Evidence preservation procedures',
            'Forensic tools and systems documentation'
          ],
          keywords: ['forensics', 'evidence preservation', 'log retention', 'incident investigation']
        }
      ]
    },
    {
      id: 'nis-governance',
      name: 'Governance',
      description: 'Governance, policies, and organizational aspects of information security',
      controls: [
        {
          id: 'nis-gov-001',
          name: 'Security Policies and Standards',
          description: 'Establish and maintain comprehensive security policies and standards aligned with organizational objectives',
          requiredEvidence: [
            'Information security policy',
            'Security standards and procedures',
            'Policy version control and approval records',
            'Policy dissemination documentation'
          ],
          keywords: ['security policy', 'information security policy', 'security standards', 'policies']
        },
        {
          id: 'nis-gov-002',
          name: 'Management Commitment and Oversight',
          description: 'Ensure management commitment and oversight of information security measures',
          requiredEvidence: [
            'Security committee or steering group minutes',
            'Executive sponsorship documentation',
            'Management review records',
            'Security budget and resource allocation'
          ],
          keywords: ['management commitment', 'management oversight', 'executive commitment', 'governance']
        },
        {
          id: 'nis-gov-003',
          name: 'Security Awareness and Training',
          description: 'Implement security awareness and training programs for all personnel',
          requiredEvidence: [
            'Security awareness training content',
            'Training attendance records',
            'Training effectiveness assessment',
            'Awareness campaign materials'
          ],
          keywords: ['awareness', 'training', 'security awareness', 'employee training', 'education']
        },
        {
          id: 'nis-gov-004',
          name: 'Roles and Responsibilities',
          description: 'Define and communicate clear roles and responsibilities for security within the organization',
          requiredEvidence: [
            'RACI matrix for security roles',
            'Job descriptions with security responsibilities',
            'Security team structure documentation',
            'Responsibility assignments and acknowledgments'
          ],
          keywords: ['roles', 'responsibilities', 'accountability', 'organizational structure']
        },
        {
          id: 'nis-gov-005',
          name: 'Internal Audit and Compliance',
          description: 'Conduct regular audits and assessments to verify compliance with security measures',
          requiredEvidence: [
            'Internal audit plan and scope',
            'Audit reports and findings',
            'Compliance assessment results',
            'Corrective action tracking'
          ],
          keywords: ['audit', 'compliance', 'assessment', 'internal audit', 'compliance verification']
        }
      ]
    }
  ]
};
