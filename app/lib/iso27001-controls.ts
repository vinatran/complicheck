export const iso27001Controls = {
  domains: [
    {
      id: 'A.5',
      name: 'Organizational Controls',
      controls: [
        {
          id: 'A.5.1',
          name: 'Policies for information security',
          description: 'Information security policy shall be defined, approved, published.',
          requiredEvidence: ['Information Security Policy', 'Approval records'],
          keywords: ['policy', 'security policy', 'approved'],
        },
        {
          id: 'A.5.2',
          name: 'Information security roles',
          description: 'Security roles and responsibilities shall be defined.',
          requiredEvidence: ['Roles matrix', 'Job descriptions'],
          keywords: ['roles', 'responsibilities', 'RACI'],
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
          description: 'Background checks on candidates before joining.',
          requiredEvidence: ['Background check policy', 'Verification records'],
          keywords: ['background check', 'screening'],
        },
        {
          id: 'A.6.3',
          name: 'Security awareness training',
          description: 'Personnel shall receive security training.',
          requiredEvidence: ['Training records', 'Attendance sheets'],
          keywords: ['training', 'awareness', 'education'],
        },
      ],
    },
    {
      id: 'A.8',
      name: 'Technology Controls',
      controls: [
        {
          id: 'A.8.2',
          name: 'Privileged access rights',
          description: 'Privileged access shall be restricted and managed.',
          requiredEvidence: ['Access policy', 'Admin account list'],
          keywords: ['admin', 'privileged', 'root'],
        },
        {
          id: 'A.8.3',
          name: 'Information access restriction',
          description: 'Access to information shall be restricted.',
          requiredEvidence: ['Access control matrix', 'Permissions'],
          keywords: ['access control', 'permissions'],
        },
        {
          id: 'A.8.5',
          name: 'Secure authentication',
          description: 'Secure authentication shall be implemented.',
          requiredEvidence: ['Auth policy', 'MFA evidence'],
          keywords: ['authentication', 'MFA', '2FA', 'password'],
        },
        {
          id: 'A.8.8',
          name: 'Vulnerability management',
          description: 'Technical vulnerabilities shall be managed.',
          requiredEvidence: ['Vulnerability scans', 'Patch records'],
          keywords: ['vulnerability', 'patch', 'scanning'],
        },
        {
          id: 'A.8.15',
          name: 'Logging',
          description: 'Logs shall be produced, stored, and analyzed.',
          requiredEvidence: ['Logging policy', 'Log retention'],
          keywords: ['logs', 'logging', 'audit trail'],
        },
        {
          id: 'A.8.16',
          name: 'Monitoring',
          description: 'Systems shall be monitored for anomalies.',
          requiredEvidence: ['Monitoring procedures', 'Alerts'],
          keywords: ['monitoring', 'alerts', 'detection'],
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

export function getTotalControlCount() {
  return getAllControls().length
}