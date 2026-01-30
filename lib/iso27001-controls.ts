/**
 * ISO 27001:2022 Controls
 * Comprehensive list for compliance assessment
 */

export interface Control {
  id: string
  name: string
  description: string
  requiredEvidence: string[]
  keywords: string[]
}

export interface Domain {
  id: string
  name: string
  controls: Control[]
}

export const iso27001Controls = {
  domains: [
    {
      id: 'A.5',
      name: 'Organizational Controls',
      controls: [
        {
          id: 'A.5.1',
          name: 'Policies for information security',
          description: 'Information security policy and topic-specific policies shall be defined, approved by management, published, communicated to and acknowledged by relevant personnel.',
          requiredEvidence: ['Information Security Policy', 'Policy approval records', 'Communication records'],
          keywords: ['policy', 'security policy', 'approved', 'information security'],
        },
        {
          id: 'A.5.2',
          name: 'Information security roles and responsibilities',
          description: 'Information security roles and responsibilities shall be defined and allocated.',
          requiredEvidence: ['RACI matrix', 'Job descriptions', 'Organization chart'],
          keywords: ['roles', 'responsibilities', 'RACI', 'security officer', 'CISO'],
        },
        {
          id: 'A.5.3',
          name: 'Segregation of duties',
          description: 'Conflicting duties and conflicting areas of responsibility shall be segregated.',
          requiredEvidence: ['Segregation of duties matrix', 'Access control policy'],
          keywords: ['segregation', 'separation', 'duties', 'conflict'],
        },
        {
          id: 'A.5.7',
          name: 'Threat intelligence',
          description: 'Information relating to information security threats shall be collected and analysed.',
          requiredEvidence: ['Threat intelligence feeds', 'Security bulletins', 'Threat reports'],
          keywords: ['threat', 'intelligence', 'vulnerability', 'CVE', 'security advisory'],
        },
        {
          id: 'A.5.9',
          name: 'Inventory of information and assets',
          description: 'An inventory of information and associated assets shall be developed and maintained.',
          requiredEvidence: ['Asset inventory', 'Asset register', 'Classification scheme'],
          keywords: ['inventory', 'assets', 'register', 'classification'],
        },
        {
          id: 'A.5.10',
          name: 'Acceptable use of assets',
          description: 'Rules for acceptable use of information and assets shall be identified and documented.',
          requiredEvidence: ['Acceptable use policy', 'User agreements'],
          keywords: ['acceptable use', 'policy', 'rules', 'usage'],
        },
      ],
    },
    {
      id: 'A.6',
      name: 'People Controls',
      controls: [
        {
          id: 'A.6.1',
          name: 'Screening',
          description: 'Background verification checks on all candidates for employment shall be carried out.',
          requiredEvidence: ['Background check policy', 'Verification records', 'Reference checks'],
          keywords: ['background check', 'screening', 'verification', 'reference'],
        },
        {
          id: 'A.6.2',
          name: 'Terms and conditions of employment',
          description: 'Employment contractual agreements shall state personnel and organization responsibilities for information security.',
          requiredEvidence: ['Employment contracts', 'NDA', 'Confidentiality agreements'],
          keywords: ['contract', 'employment', 'NDA', 'confidentiality', 'agreement'],
        },
        {
          id: 'A.6.3',
          name: 'Information security awareness, education and training',
          description: 'Personnel shall receive appropriate security awareness education, training and regular updates.',
          requiredEvidence: ['Training records', 'Awareness materials', 'Completion certificates'],
          keywords: ['training', 'awareness', 'education', 'phishing', 'simulation'],
        },
        {
          id: 'A.6.5',
          name: 'Responsibilities after termination',
          description: 'Information security responsibilities that remain valid after termination or change of employment shall be defined.',
          requiredEvidence: ['Exit procedures', 'Access revocation records'],
          keywords: ['termination', 'offboarding', 'exit', 'access revocation'],
        },
        {
          id: 'A.6.7',
          name: 'Remote working',
          description: 'Security measures shall be implemented when personnel are working remotely.',
          requiredEvidence: ['Remote work policy', 'VPN logs', 'Endpoint security'],
          keywords: ['remote', 'telework', 'work from home', 'VPN', 'WFH'],
        },
      ],
    },
    {
      id: 'A.7',
      name: 'Physical Controls',
      controls: [
        {
          id: 'A.7.1',
          name: 'Physical security perimeters',
          description: 'Security perimeters shall be defined and used to protect areas containing information and assets.',
          requiredEvidence: ['Physical security policy', 'Site plans', 'Access control systems'],
          keywords: ['physical', 'perimeter', 'access control', 'badge', 'entry'],
        },
        {
          id: 'A.7.2',
          name: 'Physical entry',
          description: 'Secure areas shall be protected by appropriate entry controls.',
          requiredEvidence: ['Access logs', 'Visitor logs', 'Badge records'],
          keywords: ['entry', 'access', 'badge', 'visitor', 'log'],
        },
        {
          id: 'A.7.4',
          name: 'Physical security monitoring',
          description: 'Premises shall be continuously monitored for unauthorized physical access.',
          requiredEvidence: ['CCTV policy', 'Monitoring procedures', 'Alert records'],
          keywords: ['CCTV', 'monitoring', 'surveillance', 'camera', 'security guard'],
        },
      ],
    },
    {
      id: 'A.8',
      name: 'Technology Controls',
      controls: [
        {
          id: 'A.8.1',
          name: 'User endpoint devices',
          description: 'Information stored on, processed by or accessible via user endpoint devices shall be protected.',
          requiredEvidence: ['Endpoint policy', 'MDM configuration', 'Encryption settings'],
          keywords: ['endpoint', 'laptop', 'mobile', 'device', 'MDM', 'encryption'],
        },
        {
          id: 'A.8.2',
          name: 'Privileged access rights',
          description: 'The allocation and use of privileged access rights shall be restricted and managed.',
          requiredEvidence: ['Privileged access policy', 'Admin account inventory', 'PAM logs'],
          keywords: ['admin', 'privileged', 'root', 'sudo', 'elevated', 'PAM'],
        },
        {
          id: 'A.8.3',
          name: 'Information access restriction',
          description: 'Access to information and application system functions shall be restricted.',
          requiredEvidence: ['Access control matrix', 'Role-based access', 'Permissions audit'],
          keywords: ['access control', 'permissions', 'RBAC', 'least privilege'],
        },
        {
          id: 'A.8.5',
          name: 'Secure authentication',
          description: 'Secure authentication technologies and procedures shall be implemented.',
          requiredEvidence: ['Authentication policy', 'MFA deployment records', 'Password policy'],
          keywords: ['authentication', 'MFA', '2FA', 'password', 'SSO', 'identity'],
        },
        {
          id: 'A.8.7',
          name: 'Protection against malware',
          description: 'Protection against malware shall be implemented.',
          requiredEvidence: ['Anti-malware policy', 'AV deployment', 'Scan reports'],
          keywords: ['malware', 'antivirus', 'anti-malware', 'EDR', 'protection'],
        },
        {
          id: 'A.8.8',
          name: 'Management of technical vulnerabilities',
          description: 'Information about technical vulnerabilities shall be obtained and appropriate measures taken.',
          requiredEvidence: ['Vulnerability scans', 'Patch management records', 'Remediation reports'],
          keywords: ['vulnerability', 'patch', 'scanning', 'CVE', 'remediation'],
        },
        {
          id: 'A.8.9',
          name: 'Configuration management',
          description: 'Configurations shall be established, documented, implemented, monitored and reviewed.',
          requiredEvidence: ['Baseline configurations', 'Hardening standards', 'Configuration audits'],
          keywords: ['configuration', 'hardening', 'baseline', 'CIS benchmark'],
        },
        {
          id: 'A.8.15',
          name: 'Logging',
          description: 'Logs that record activities, exceptions, faults and other events shall be produced, stored, protected and analysed.',
          requiredEvidence: ['Logging policy', 'SIEM configuration', 'Log retention'],
          keywords: ['logs', 'logging', 'audit trail', 'SIEM', 'events'],
        },
        {
          id: 'A.8.16',
          name: 'Monitoring activities',
          description: 'Networks, systems and applications shall be monitored for anomalous behaviour.',
          requiredEvidence: ['Monitoring procedures', 'Alert configurations', 'SOC procedures'],
          keywords: ['monitoring', 'alerts', 'detection', 'SOC', 'anomaly'],
        },
        {
          id: 'A.8.20',
          name: 'Networks security',
          description: 'Networks and network devices shall be secured, managed and controlled.',
          requiredEvidence: ['Network security policy', 'Firewall rules', 'Network diagrams'],
          keywords: ['network', 'firewall', 'segmentation', 'IDS', 'IPS'],
        },
        {
          id: 'A.8.24',
          name: 'Use of cryptography',
          description: 'Rules for cryptography shall be defined and implemented.',
          requiredEvidence: ['Cryptography policy', 'Encryption standards', 'Key management'],
          keywords: ['encryption', 'cryptography', 'TLS', 'SSL', 'key management'],
        },
        {
          id: 'A.8.25',
          name: 'Secure development life cycle',
          description: 'Rules for secure development shall be established and applied.',
          requiredEvidence: ['SDLC policy', 'Security requirements', 'Code review records'],
          keywords: ['SDLC', 'secure development', 'code review', 'security testing'],
        },
        {
          id: 'A.8.32',
          name: 'Change management',
          description: 'Changes to information processing facilities and systems shall be subject to change management procedures.',
          requiredEvidence: ['Change management policy', 'Change records', 'CAB minutes'],
          keywords: ['change management', 'CAB', 'change control', 'approval'],
        },
      ],
    },
  ],
}

export function getAllControls() {
  return iso27001Controls.domains.flatMap((d) =>
    d.controls.map((c) => ({ ...c, domain: d.name, domainId: d.id }))
  )
}

export function getControlById(id: string) {
  return getAllControls().find(c => c.id === id)
}

export function getControlsByDomain(domainId: string) {
  const domain = iso27001Controls.domains.find(d => d.id === domainId)
  return domain?.controls || []
}

export function getTotalControlCount() {
  return getAllControls().length
}

export function getDomains() {
  return iso27001Controls.domains.map(d => ({
    id: d.id,
    name: d.name,
    controlCount: d.controls.length,
  }))
}
