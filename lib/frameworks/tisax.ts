import { Framework } from '../types';

export const tisaxFramework: Framework = {
  id: 'tisax',
  name: 'Trusted Information Security Assessment Exchange',
  shortName: 'TISAX',
  description: 'Automotive industry information security assessment standard developed by the German automotive industry for assessing information security in the supply chain',
  version: '6.0',
  category: 'industry',
  regions: ['EU', 'Global'],
  industries: ['Automotive', 'Manufacturing'],
  domains: [
    {
      id: 'tisax-information-security-policies',
      name: 'Information Security Policies',
      description: 'Establishment and maintenance of information security policies and organizational structures',
      controls: [
        {
          id: 'tisax-isp-001',
          name: 'Information Security Policy',
          description: 'Establish, document, and maintain a comprehensive information security policy that addresses the organization\'s approach to information security',
          requiredEvidence: [
            'Information Security Policy document',
            'Policy approval and sign-off records',
            'Policy distribution and acknowledgment records',
            'Policy review and update history'
          ],
          keywords: ['policy', 'security', 'governance', 'framework', 'objectives']
        },
        {
          id: 'tisax-isp-002',
          name: 'Organization of Information Security',
          description: 'Establish organizational structure and responsibilities for managing information security',
          requiredEvidence: [
            'Organizational chart showing security roles',
            'Job descriptions for security-related positions',
            'Assignment letters or documentation',
            'Responsibility matrix or RACI chart'
          ],
          keywords: ['organization', 'structure', 'roles', 'responsibilities', 'accountability']
        },
        {
          id: 'tisax-isp-003',
          name: 'Information Security Roles and Responsibilities',
          description: 'Define and document all roles, responsibilities, and authorities related to information security management',
          requiredEvidence: [
            'Role definitions and assignments',
            'Authority documentation',
            'Delegation records',
            'Management endorsement documentation'
          ],
          keywords: ['roles', 'responsibilities', 'authorities', 'assignment', 'accountability']
        },
        {
          id: 'tisax-isp-004',
          name: 'Management Review and Oversight',
          description: 'Establish management review processes to oversee information security governance and performance',
          requiredEvidence: [
            'Management review meeting minutes',
            'Review schedules and calendars',
            'Performance metrics and KPIs',
            'Management decision documentation'
          ],
          keywords: ['management', 'review', 'oversight', 'governance', 'performance']
        },
        {
          id: 'tisax-isp-005',
          name: 'Security Incident Management',
          description: 'Establish procedures for reporting, handling, and responding to security incidents',
          requiredEvidence: [
            'Incident handling procedures',
            'Incident reporting forms',
            'Incident logs and records',
            'Response and remediation documentation'
          ],
          keywords: ['incident', 'response', 'management', 'reporting', 'remediation']
        }
      ]
    },
    {
      id: 'tisax-human-resources-security',
      name: 'Human Resources Security',
      description: 'Management of information security in human resources processes including screening, training, and termination',
      controls: [
        {
          id: 'tisax-hrs-001',
          name: 'Personnel Screening',
          description: 'Conduct appropriate background checks and screening procedures before employment',
          requiredEvidence: [
            'Background check policies',
            'Screening procedures documentation',
            'Completed background check records',
            'Verification of eligibility documentation'
          ],
          keywords: ['screening', 'background', 'verification', 'hiring', 'recruitment']
        },
        {
          id: 'tisax-hrs-002',
          name: 'Security Awareness and Training',
          description: 'Provide information security awareness and training programs for all personnel',
          requiredEvidence: [
            'Training program documentation',
            'Training attendance records',
            'Course materials and curricula',
            'Competency assessment results'
          ],
          keywords: ['training', 'awareness', 'education', 'competency', 'development']
        },
        {
          id: 'tisax-hrs-003',
          name: 'Disciplinary Procedures',
          description: 'Establish and communicate disciplinary procedures for security violations',
          requiredEvidence: [
            'Disciplinary policy documentation',
            'Incident records and findings',
            'Disciplinary action records',
            'Communication of consequences'
          ],
          keywords: ['discipline', 'violations', 'consequences', 'enforcement', 'procedures']
        },
        {
          id: 'tisax-hrs-004',
          name: 'Termination or Change of Employment',
          description: 'Manage information security aspects of employment termination and role changes',
          requiredEvidence: [
            'Termination procedures documentation',
            'Access removal records',
            'Equipment return logs',
            'Exit interviews and documentation'
          ],
          keywords: ['termination', 'exit', 'offboarding', 'access removal', 'transition']
        }
      ]
    },
    {
      id: 'tisax-asset-management',
      name: 'Asset Management',
      description: 'Identification, classification, and protection of information assets',
      controls: [
        {
          id: 'tisax-am-001',
          name: 'Asset Inventory and Classification',
          description: 'Maintain an inventory of information assets and classify them based on criticality and sensitivity',
          requiredEvidence: [
            'Asset inventory list',
            'Classification scheme documentation',
            'Asset classification records',
            'Inventory update procedures'
          ],
          keywords: ['inventory', 'classification', 'assets', 'criticality', 'sensitivity']
        },
        {
          id: 'tisax-am-002',
          name: 'Asset Ownership and Responsibility',
          description: 'Assign ownership and responsibility for each asset and information resource',
          requiredEvidence: [
            'Asset ownership documentation',
            'Responsibility assignment records',
            'Owner acknowledgment letters',
            'Asset management procedures'
          ],
          keywords: ['ownership', 'responsibility', 'accountability', 'stewardship', 'assignment']
        },
        {
          id: 'tisax-am-003',
          name: 'Acceptable Use of Assets',
          description: 'Define and enforce acceptable use policies for information and assets',
          requiredEvidence: [
            'Acceptable Use Policy document',
            'User acknowledgment records',
            'Usage guidelines and examples',
            'Enforcement and monitoring records'
          ],
          keywords: ['acceptable use', 'policy', 'usage', 'guidelines', 'compliance']
        },
        {
          id: 'tisax-am-004',
          name: 'Asset Handling and Disposal',
          description: 'Establish procedures for secure handling, storage, and disposal of assets',
          requiredEvidence: [
            'Handling procedures documentation',
            'Storage and protection standards',
            'Disposal procedures and records',
            'Certification of destruction'
          ],
          keywords: ['handling', 'disposal', 'destruction', 'storage', 'secure']
        },
        {
          id: 'tisax-am-005',
          name: 'Media Management',
          description: 'Control and protect information storage media throughout its lifecycle',
          requiredEvidence: [
            'Media management policy',
            'Media handling procedures',
            'Media tracking and control logs',
            'Disposal certification records'
          ],
          keywords: ['media', 'storage', 'protection', 'handling', 'lifecycle']
        }
      ]
    },
    {
      id: 'tisax-access-control',
      name: 'Access Control',
      description: 'Management of user access to information systems and resources',
      controls: [
        {
          id: 'tisax-ac-001',
          name: 'User Access Management',
          description: 'Manage user access to systems and applications based on business requirements',
          requiredEvidence: [
            'Access request forms',
            'Access approval records',
            'User access lists',
            'Access review documentation'
          ],
          keywords: ['user management', 'access', 'provisioning', 'deprovisioning', 'lifecycle']
        },
        {
          id: 'tisax-ac-002',
          name: 'Privileged Access Management',
          description: 'Control and monitor access to privileged accounts and administrative functions',
          requiredEvidence: [
            'Privileged account list',
            'Privilege escalation procedures',
            'Administrative access logs',
            'Privilege review records'
          ],
          keywords: ['privileged', 'administrator', 'root', 'sudo', 'elevated']
        },
        {
          id: 'tisax-ac-003',
          name: 'Authentication and Authorization',
          description: 'Implement strong authentication mechanisms and authorize access based on roles',
          requiredEvidence: [
            'Authentication policy documentation',
            'Password policy records',
            'Multi-factor authentication setup',
            'Authorization matrix'
          ],
          keywords: ['authentication', 'authorization', 'credentials', 'password', 'MFA']
        },
        {
          id: 'tisax-ac-004',
          name: 'Access Rights Review',
          description: 'Regularly review and validate user access rights to ensure appropriateness',
          requiredEvidence: [
            'Access review schedule',
            'Review procedures documentation',
            'Review findings and reports',
            'Remediation and approval records'
          ],
          keywords: ['review', 'access rights', 'validation', 'audit', 'compliance']
        }
      ]
    },
    {
      id: 'tisax-cryptography',
      name: 'Cryptography',
      description: 'Use and management of cryptographic controls for protecting information',
      controls: [
        {
          id: 'tisax-crypto-001',
          name: 'Cryptographic Controls Policy',
          description: 'Establish policy for the use of cryptography to protect sensitive information',
          requiredEvidence: [
            'Cryptography policy document',
            'Approved algorithms list',
            'Implementation standards',
            'Key management procedures'
          ],
          keywords: ['cryptography', 'encryption', 'policy', 'standards', 'algorithms']
        },
        {
          id: 'tisax-crypto-002',
          name: 'Encryption of Sensitive Data',
          description: 'Encrypt sensitive information both in transit and at rest',
          requiredEvidence: [
            'Data classification and encryption requirements',
            'Encryption implementation documentation',
            'Encryption key lists',
            'Configuration and verification records'
          ],
          keywords: ['encryption', 'data protection', 'transit', 'rest', 'sensitive']
        },
        {
          id: 'tisax-crypto-003',
          name: 'Key Management',
          description: 'Manage cryptographic keys securely throughout their lifecycle',
          requiredEvidence: [
            'Key management policy',
            'Key generation procedures',
            'Key storage and protection measures',
            'Key rotation and retirement records'
          ],
          keywords: ['key management', 'generation', 'storage', 'rotation', 'lifecycle']
        },
        {
          id: 'tisax-crypto-004',
          name: 'Digital Signatures and Non-repudiation',
          description: 'Use digital signatures to ensure authenticity and non-repudiation of messages',
          requiredEvidence: [
            'Digital signature implementation documentation',
            'Certificate management procedures',
            'Signature verification procedures',
            'Non-repudiation requirements'
          ],
          keywords: ['digital signature', 'authenticity', 'non-repudiation', 'certificate', 'verification']
        }
      ]
    },
    {
      id: 'tisax-physical-security',
      name: 'Physical Security',
      description: 'Protection of physical facilities and equipment from unauthorized access and damage',
      controls: [
        {
          id: 'tisax-ps-001',
          name: 'Secure Areas',
          description: 'Establish and maintain secure areas to protect sensitive information and systems',
          requiredEvidence: [
            'Facility layout and diagrams',
            'Access control specifications',
            'Perimeter security measures',
            'Entry/exit procedures'
          ],
          keywords: ['secure areas', 'facility', 'perimeter', 'access control', 'protection']
        },
        {
          id: 'tisax-ps-002',
          name: 'Equipment Protection',
          description: 'Protect equipment and infrastructure from damage, theft, and environmental hazards',
          requiredEvidence: [
            'Equipment protection procedures',
            'Environmental controls documentation',
            'Maintenance schedules and records',
            'Monitoring and alerting systems'
          ],
          keywords: ['equipment', 'protection', 'environmental', 'maintenance', 'hazards']
        },
        {
          id: 'tisax-ps-003',
          name: 'Supporting Utilities',
          description: 'Protect supporting utilities such as power, water, and cooling systems',
          requiredEvidence: [
            'Utility protection procedures',
            'Redundancy and backup systems',
            'Monitoring and maintenance records',
            'Emergency procedures'
          ],
          keywords: ['utilities', 'power', 'water', 'cooling', 'backup', 'redundancy']
        },
        {
          id: 'tisax-ps-004',
          name: 'Physical Access Logging',
          description: 'Log and monitor physical access to secure areas and critical facilities',
          requiredEvidence: [
            'Physical access log procedures',
            'Access log records',
            'Monitoring system documentation',
            'Review and exception reports'
          ],
          keywords: ['access logging', 'monitoring', 'records', 'auditing', 'tracking']
        },
        {
          id: 'tisax-ps-005',
          name: 'Clear Desk and Screen Policy',
          description: 'Implement clear desk and screen policies to prevent unauthorized access to information',
          requiredEvidence: [
            'Clear Desk and Screen Policy document',
            'Procedure documentation',
            'Compliance monitoring records',
            'Awareness and training materials'
          ],
          keywords: ['clear desk', 'clear screen', 'policy', 'compliance', 'awareness']
        }
      ]
    },
    {
      id: 'tisax-supplier-relationships',
      name: 'Supplier Relationships',
      description: 'Management of information security in supplier and third-party relationships',
      controls: [
        {
          id: 'tisax-sr-001',
          name: 'Information Security Requirements for Suppliers',
          description: 'Define and communicate information security requirements to suppliers and third parties',
          requiredEvidence: [
            'Supplier security requirements document',
            'Contract clauses and terms',
            'Requirements communication records',
            'Acknowledgment and acceptance documentation'
          ],
          keywords: ['supplier', 'third-party', 'requirements', 'contract', 'agreement']
        },
        {
          id: 'tisax-sr-002',
          name: 'Supplier Assessment and Evaluation',
          description: 'Assess and evaluate supplier security capabilities before engagement',
          requiredEvidence: [
            'Supplier assessment procedure',
            'Assessment questionnaires and forms',
            'Evaluation findings and reports',
            'Risk assessment documentation'
          ],
          keywords: ['assessment', 'evaluation', 'due diligence', 'risk', 'capability']
        },
        {
          id: 'tisax-sr-003',
          name: 'Supplier Monitoring and Review',
          description: 'Monitor and review supplier compliance with security requirements on an ongoing basis',
          requiredEvidence: [
            'Monitoring procedures and schedules',
            'Audit and assessment reports',
            'Performance metrics and KPIs',
            'Compliance review records'
          ],
          keywords: ['monitoring', 'compliance', 'review', 'audit', 'ongoing']
        },
        {
          id: 'tisax-sr-004',
          name: 'Supplier Change and Incident Management',
          description: 'Manage information security implications of supplier changes and incidents',
          requiredEvidence: [
            'Change management procedures',
            'Incident notification requirements',
            'Impact assessment documentation',
            'Response and remediation records'
          ],
          keywords: ['change management', 'incident', 'notification', 'impact', 'response']
        },
        {
          id: 'tisax-sr-005',
          name: 'Supply Chain Security',
          description: 'Protect information and systems throughout the supply chain',
          requiredEvidence: [
            'Supply chain security policy',
            'Risk assessment and mitigation plans',
            'Supplier and logistics coordination',
            'Verification and validation records'
          ],
          keywords: ['supply chain', 'logistics', 'transportation', 'integrity', 'protection']
        }
      ]
    }
  ]
};
