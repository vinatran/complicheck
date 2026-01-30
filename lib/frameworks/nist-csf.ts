import { Framework } from '../types';

export const nistCsfFramework: Framework = {
  id: 'nist-csf',
  name: 'NIST Cybersecurity Framework',
  shortName: 'NIST CSF',
  description: 'Framework for improving critical infrastructure cybersecurity',
  version: '2.0',
  category: 'security',
  regions: ['US'],
  domains: [
    {
      id: 'ID',
      name: 'Identify',
      description: 'Develop an organizational understanding to manage cybersecurity risk to systems, people, assets, data, and capabilities',
      controls: [
        {
          id: 'ID-AM-1',
          name: 'Asset Inventory and Management',
          description: 'Maintain an inventory of all assets and resources connected to the organization\'s network and systems',
          requiredEvidence: [
            'Documented asset inventory',
            'Asset classification scheme',
            'Asset tracking procedures',
            'Hardware inventory lists'
          ],
          keywords: ['assets', 'inventory', 'hardware', 'software', 'devices']
        },
        {
          id: 'ID-RA-1',
          name: 'Risk Assessment Process',
          description: 'Conduct periodic risk assessments to identify threats, vulnerabilities, and potential impacts to organizational assets',
          requiredEvidence: [
            'Risk assessment reports',
            'Vulnerability scan results',
            'Threat analysis documentation',
            'Risk matrix and scoring methodology'
          ],
          keywords: ['risk', 'assessment', 'vulnerability', 'threat', 'impact']
        },
        {
          id: 'ID-RA-2',
          name: 'Risk Prioritization',
          description: 'Prioritize identified risks based on likelihood and impact to guide mitigation efforts',
          requiredEvidence: [
            'Risk prioritization matrix',
            'Risk scoring documentation',
            'Risk remediation roadmap',
            'Executive risk reports'
          ],
          keywords: ['prioritization', 'risk ranking', 'mitigation', 'timeline']
        },
        {
          id: 'ID-GV-1',
          name: 'Governance and Strategy',
          description: 'Establish governance structures and cybersecurity strategy aligned with organizational objectives',
          requiredEvidence: [
            'Cybersecurity policy documentation',
            'Governance charter',
            'Strategic plan aligned with risk',
            'Board-level approvals'
          ],
          keywords: ['governance', 'strategy', 'policy', 'objectives', 'oversight']
        },
        {
          id: 'ID-GV-2',
          name: 'Roles and Responsibilities',
          description: 'Define and communicate roles, responsibilities, and accountability for cybersecurity across the organization',
          requiredEvidence: [
            'RACI matrix',
            'Job descriptions with security responsibilities',
            'Organizational chart',
            'Authority delegation documentation'
          ],
          keywords: ['roles', 'responsibilities', 'accountability', 'structure', 'authority']
        },
        {
          id: 'ID-GV-3',
          name: 'Risk Management Framework',
          description: 'Implement a risk management framework that systematically addresses cybersecurity risks',
          requiredEvidence: [
            'Risk management framework documentation',
            'Risk assessment procedures',
            'Risk register',
            'Treatment plans'
          ],
          keywords: ['framework', 'risk management', 'procedures', 'methodology']
        }
      ]
    },
    {
      id: 'PR',
      name: 'Protect',
      description: 'Develop and implement safeguards to ensure delivery of critical services and protect assets and systems',
      controls: [
        {
          id: 'PR-AC-1',
          name: 'Identity and Access Management',
          description: 'Manage user access through authentication, authorization, and access controls',
          requiredEvidence: [
            'Access control policies',
            'User access matrices',
            'Authentication system logs',
            'Privileged account management procedures'
          ],
          keywords: ['access control', 'authentication', 'authorization', 'identity', 'privileges']
        },
        {
          id: 'PR-AC-2',
          name: 'Physical Access Control',
          description: 'Control physical access to facilities, systems, and critical assets',
          requiredEvidence: [
            'Badge access logs',
            'Visitor logs',
            'Physical security procedures',
            'Camera surveillance documentation'
          ],
          keywords: ['physical access', 'facilities', 'badge', 'doors', 'perimeter']
        },
        {
          id: 'PR-AT-1',
          name: 'Security Awareness and Training',
          description: 'Provide cybersecurity awareness and training programs to all personnel',
          requiredEvidence: [
            'Training curriculum documentation',
            'Attendance records',
            'Training effectiveness assessments',
            'Phishing simulation results'
          ],
          keywords: ['training', 'awareness', 'education', 'phishing', 'personnel']
        },
        {
          id: 'PR-DS-1',
          name: 'Data Security and Privacy',
          description: 'Implement controls to protect sensitive data and ensure privacy compliance',
          requiredEvidence: [
            'Data classification scheme',
            'Encryption standards documentation',
            'Data handling procedures',
            'Privacy impact assessments'
          ],
          keywords: ['data', 'encryption', 'privacy', 'protection', 'classification']
        },
        {
          id: 'PR-DS-2',
          name: 'Data Protection Controls',
          description: 'Apply technical controls including encryption, masking, and access restrictions for sensitive data',
          requiredEvidence: [
            'Encryption implementation details',
            'Data masking procedures',
            'Key management documentation',
            'Data backup and recovery procedures'
          ],
          keywords: ['encryption', 'masking', 'protection', 'backup', 'recovery']
        },
        {
          id: 'PR-IR-1',
          name: 'Incident Response Planning',
          description: 'Develop and maintain incident response plans to address cybersecurity incidents',
          requiredEvidence: [
            'Incident response plan',
            'Contact lists',
            'Escalation procedures',
            'Testing and drill results'
          ],
          keywords: ['incident response', 'plan', 'procedures', 'communication', 'escalation']
        }
      ]
    },
    {
      id: 'DE',
      name: 'Detect',
      description: 'Implement capabilities to identify and discover cybersecurity events as they occur',
      controls: [
        {
          id: 'DE-AE-1',
          name: 'Anomaly Detection',
          description: 'Implement systems to detect unusual or suspicious activity and behavior',
          requiredEvidence: [
            'SIEM configuration documentation',
            'Baseline activity profiles',
            'Alert definitions',
            'Anomaly detection rules'
          ],
          keywords: ['anomaly', 'detection', 'unusual', 'baseline', 'alert']
        },
        {
          id: 'DE-CM-1',
          name: 'Continuous Monitoring',
          description: 'Maintain continuous monitoring of systems and networks for security events',
          requiredEvidence: [
            'Monitoring infrastructure documentation',
            'Log collection procedures',
            'Monitoring schedules',
            'Performance metrics'
          ],
          keywords: ['monitoring', 'continuous', 'logs', 'metrics', 'telemetry']
        },
        {
          id: 'DE-CM-2',
          name: 'System and Network Monitoring',
          description: 'Monitor systems, networks, and applications for indicators of compromise',
          requiredEvidence: [
            'Network monitoring tools configuration',
            'System log collection',
            'Alert tuning documentation',
            'Monitoring reports'
          ],
          keywords: ['network', 'system', 'monitoring', 'tools', 'indicators']
        },
        {
          id: 'DE-DP-1',
          name: 'Detection Processes',
          description: 'Implement detection processes and procedures to identify and respond to events',
          requiredEvidence: [
            'Detection procedures',
            'Event classification schema',
            'Investigation procedures',
            'Detection playbooks'
          ],
          keywords: ['detection', 'process', 'procedure', 'investigation', 'analysis']
        },
        {
          id: 'DE-DP-2',
          name: 'Security Event Analysis',
          description: 'Analyze security events to determine severity, scope, and appropriate response actions',
          requiredEvidence: [
            'Event analysis procedures',
            'Severity classification criteria',
            'Analysis tools and methods',
            'Case studies and examples'
          ],
          keywords: ['analysis', 'severity', 'scope', 'investigation', 'forensics']
        }
      ]
    },
    {
      id: 'RS',
      name: 'Respond',
      description: 'Develop and implement capabilities to contain impacts of cybersecurity incidents',
      controls: [
        {
          id: 'RS-RP-1',
          name: 'Incident Response Plan',
          description: 'Develop and maintain a comprehensive incident response plan',
          requiredEvidence: [
            'Documented response plan',
            'Response procedures',
            'Team assignments',
            'Testing results'
          ],
          keywords: ['plan', 'response', 'procedures', 'team', 'structure']
        },
        {
          id: 'RS-CO-1',
          name: 'Communication and Coordination',
          description: 'Establish communication channels and coordinate response activities among teams',
          requiredEvidence: [
            'Communication procedures',
            'Contact trees',
            'Notification templates',
            'Coordination logs'
          ],
          keywords: ['communication', 'coordination', 'notification', 'contact', 'escalation']
        },
        {
          id: 'RS-AN-1',
          name: 'Incident Analysis',
          description: 'Analyze incidents to determine scope, impact, and root cause',
          requiredEvidence: [
            'Incident investigation reports',
            'Root cause analysis documentation',
            'Timeline reconstruction',
            'Scope assessment documents'
          ],
          keywords: ['analysis', 'investigation', 'root cause', 'timeline', 'scope']
        },
        {
          id: 'RS-MI-1',
          name: 'Incident Mitigation',
          description: 'Take immediate actions to mitigate the impact of security incidents',
          requiredEvidence: [
            'Mitigation action logs',
            'Containment procedures',
            'System isolation documentation',
            'Remediation actions'
          ],
          keywords: ['mitigation', 'containment', 'isolation', 'remediation', 'action']
        },
        {
          id: 'RS-MI-2',
          name: 'Incident Recovery',
          description: 'Execute recovery procedures to restore systems and operations to normal',
          requiredEvidence: [
            'Recovery procedures',
            'System restoration logs',
            'Validation procedures',
            'Recovery testing documentation'
          ],
          keywords: ['recovery', 'restoration', 'validation', 'testing', 'operations']
        }
      ]
    },
    {
      id: 'RC',
      name: 'Recover',
      description: 'Develop and implement capabilities to restore systems and operations to a known good state',
      controls: [
        {
          id: 'RC-RP-1',
          name: 'Recovery Planning',
          description: 'Develop and maintain recovery plans for critical systems and business functions',
          requiredEvidence: [
            'Business continuity plans',
            'Disaster recovery plans',
            'Recovery procedures',
            'Backup strategies'
          ],
          keywords: ['recovery', 'planning', 'continuity', 'procedures', 'backup']
        },
        {
          id: 'RC-RP-2',
          name: 'Recovery Testing',
          description: 'Test recovery procedures regularly to ensure effectiveness and readiness',
          requiredEvidence: [
            'Test schedules',
            'Test results and reports',
            'Lessons learned documentation',
            'Test execution logs'
          ],
          keywords: ['testing', 'drill', 'exercise', 'validation', 'readiness']
        },
        {
          id: 'RC-IM-1',
          name: 'Incident-Based Improvements',
          description: 'Implement improvements based on incident lessons learned and findings',
          requiredEvidence: [
            'Post-incident review reports',
            'Improvement recommendations',
            'Corrective action tracking',
            'Implementation documentation'
          ],
          keywords: ['improvement', 'lessons learned', 'corrective action', 'findings']
        },
        {
          id: 'RC-IM-2',
          name: 'Preventive Improvements',
          description: 'Proactively identify and implement improvements to prevent future incidents',
          requiredEvidence: [
            'Improvement assessments',
            'Enhancement plans',
            'Implementation tracking',
            'Effectiveness measures'
          ],
          keywords: ['prevention', 'improvement', 'enhancement', 'proactive', 'measures']
        },
        {
          id: 'RC-CO-1',
          name: 'Communication and Transparency',
          description: 'Communicate recovery status and lessons learned to relevant stakeholders',
          requiredEvidence: [
            'Status reports',
            'Stakeholder communications',
            'Lessons learned sharing',
            'Documentation of findings'
          ],
          keywords: ['communication', 'transparency', 'stakeholders', 'reporting', 'findings']
        }
      ]
    }
  ]
};
