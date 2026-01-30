import { Framework } from '../types';

export const cmmcFramework: Framework = {
  id: 'cmmc',
  name: 'Cybersecurity Maturity Model Certification',
  shortName: 'CMMC',
  description: 'DoD cybersecurity certification for defense contractors',
  version: '2.0',
  category: 'government',
  regions: ['US'],
  industries: ['Defense', 'Government Contractors'],
  domains: [
    {
      id: 'AC',
      name: 'Access Control',
      description: 'Policies and controls for managing user access to systems and data',
      controls: [
        {
          id: 'AC-1',
          name: 'Account Management',
          description: 'Establish and manage user accounts with proper access provisioning and deprovisioning procedures',
          requiredEvidence: [
            'Account management policy',
            'User provisioning procedures',
            'Account deprovisioning logs',
            'Account inventory and justifications'
          ],
          keywords: ['account', 'user', 'provisioning', 'deprovisioning', 'management']
        },
        {
          id: 'AC-2',
          name: 'Access Enforcement',
          description: 'Enforce access controls based on the principle of least privilege',
          requiredEvidence: [
            'Access control matrix',
            'Authorization procedures',
            'System configuration documentation',
            'Access violation logs'
          ],
          keywords: ['access', 'enforcement', 'least privilege', 'authorization', 'permissions']
        },
        {
          id: 'AC-3',
          name: 'Privileged Access Management',
          description: 'Control and monitor privileged account access with additional safeguards',
          requiredEvidence: [
            'Privileged account inventory',
            'PAM solution configuration',
            'Session recording logs',
            'Approval procedures for privileged access'
          ],
          keywords: ['privileged', 'admin', 'root', 'management', 'monitoring']
        },
        {
          id: 'AC-4',
          name: 'Access Control Review and Verification',
          description: 'Regularly review and verify user access rights to ensure continued appropriateness',
          requiredEvidence: [
            'Access review schedules and reports',
            'Review approval documentation',
            'Removal of inappropriate access logs',
            'Certification of access rights'
          ],
          keywords: ['review', 'verification', 'audit', 'certification', 'rightfulness']
        },
        {
          id: 'AC-5',
          name: 'Session Management',
          description: 'Manage user sessions and enforce session timeout controls',
          requiredEvidence: [
            'Session timeout policies',
            'Session management configuration',
            'Session logs and audit trails',
            'Idle timeout enforcement documentation'
          ],
          keywords: ['session', 'timeout', 'idle', 'termination', 'management']
        }
      ]
    },
    {
      id: 'AU',
      name: 'Audit and Accountability',
      description: 'Controls for logging, monitoring, and maintaining accountability for system activities',
      controls: [
        {
          id: 'AU-1',
          name: 'Audit Events Selection and Configuration',
          description: 'Select and configure system events to be audited based on risk and compliance needs',
          requiredEvidence: [
            'Audit logging policy',
            'System event selection criteria',
            'Logging configuration documentation',
            'Event classification scheme'
          ],
          keywords: ['audit', 'events', 'logging', 'selection', 'configuration']
        },
        {
          id: 'AU-2',
          name: 'Audit Log Review and Analysis',
          description: 'Review and analyze audit logs to identify anomalies and security events',
          requiredEvidence: [
            'Log analysis procedures',
            'Review frequency documentation',
            'Analysis tools and methodologies',
            'Anomaly detection findings'
          ],
          keywords: ['audit', 'review', 'analysis', 'anomaly', 'investigation']
        },
        {
          id: 'AU-3',
          name: 'Audit Log Protection',
          description: 'Protect audit logs from unauthorized modification and deletion',
          requiredEvidence: [
            'Log retention policies',
            'Access controls for logs',
            'Log protection mechanisms',
            'Backup and archive procedures'
          ],
          keywords: ['protection', 'logs', 'integrity', 'immutability', 'retention']
        },
        {
          id: 'AU-4',
          name: 'Audit Log Storage and Retention',
          description: 'Store and retain audit logs for appropriate timeframes to support investigations',
          requiredEvidence: [
            'Log retention schedule',
            'Storage capacity documentation',
            'Archive procedures',
            'Log management tool documentation'
          ],
          keywords: ['retention', 'storage', 'archive', 'timeframe', 'preservation']
        }
      ]
    },
    {
      id: 'IA',
      name: 'Identification and Authentication',
      description: 'Controls for ensuring users and systems are properly identified and authenticated',
      controls: [
        {
          id: 'IA-1',
          name: 'User Identification and Authentication',
          description: 'Implement mechanisms to identify and authenticate users before granting system access',
          requiredEvidence: [
            'Authentication policy',
            'Credential management procedures',
            'Authentication system documentation',
            'Password policy documentation'
          ],
          keywords: ['identification', 'authentication', 'credentials', 'identity', 'verification']
        },
        {
          id: 'IA-2',
          name: 'Multi-Factor Authentication',
          description: 'Require multi-factor authentication for all user access, especially for remote access',
          requiredEvidence: [
            'MFA implementation documentation',
            'MFA configuration and deployment',
            'Exception procedures and approvals',
            'MFA usage logs'
          ],
          keywords: ['multi-factor', 'MFA', '2FA', 'authentication', 'factors']
        },
        {
          id: 'IA-3',
          name: 'Device Identity and Authentication',
          description: 'Establish mechanisms to authenticate devices and systems connecting to the network',
          requiredEvidence: [
            'Device authentication policy',
            'Certificate management procedures',
            'Device inventory and authentication status',
            'Network access control logs'
          ],
          keywords: ['device', 'authentication', 'certificate', 'identity', 'network']
        },
        {
          id: 'IA-4',
          name: 'Access Token Management',
          description: 'Manage authentication tokens and credentials with appropriate lifecycle controls',
          requiredEvidence: [
            'Token lifecycle management procedures',
            'Token expiration policies',
            'Revocation procedures',
            'Token usage logs'
          ],
          keywords: ['token', 'credentials', 'lifecycle', 'expiration', 'revocation']
        },
        {
          id: 'IA-5',
          name: 'Password and Credential Management',
          description: 'Implement strong password policies and secure credential storage mechanisms',
          requiredEvidence: [
            'Password policy documentation',
            'Password complexity requirements',
            'Password storage and encryption procedures',
            'Credential change procedures'
          ],
          keywords: ['password', 'credential', 'complexity', 'strength', 'management']
        }
      ]
    },
    {
      id: 'IR',
      name: 'Incident Response',
      description: 'Controls for detecting, responding to, and recovering from security incidents',
      controls: [
        {
          id: 'IR-1',
          name: 'Incident Handling and Response',
          description: 'Establish procedures for detecting, reporting, and responding to security incidents',
          requiredEvidence: [
            'Incident response plan',
            'Detection procedures',
            'Response workflows',
            'Escalation procedures',
            'Incident response team documentation'
          ],
          keywords: ['incident', 'response', 'handling', 'detection', 'procedures']
        },
        {
          id: 'IR-2',
          name: 'Incident Reporting and Notification',
          description: 'Implement procedures to report incidents internally and to appropriate external parties',
          requiredEvidence: [
            'Reporting procedures and templates',
            'Notification timelines',
            'External reporting requirements documentation',
            'Incident reporting logs',
            'DoD notification procedures'
          ],
          keywords: ['reporting', 'notification', 'disclosure', 'communication', 'external']
        },
        {
          id: 'IR-3',
          name: 'Incident Investigation and Analysis',
          description: 'Conduct thorough investigations and root cause analysis of security incidents',
          requiredEvidence: [
            'Investigation procedures',
            'Forensic analysis documentation',
            'Root cause analysis templates',
            'Investigation findings and reports'
          ],
          keywords: ['investigation', 'analysis', 'forensics', 'root cause', 'findings']
        },
        {
          id: 'IR-4',
          name: 'Incident Recovery and Remediation',
          description: 'Execute recovery actions to restore systems and implement remediation measures',
          requiredEvidence: [
            'Recovery procedures',
            'Remediation action plans',
            'System restoration logs',
            'Validation and testing results'
          ],
          keywords: ['recovery', 'remediation', 'restoration', 'correction', 'prevention']
        }
      ]
    },
    {
      id: 'MP',
      name: 'Media Protection',
      description: 'Controls for protecting physical and digital media containing sensitive data',
      controls: [
        {
          id: 'MP-1',
          name: 'Media Access Control',
          description: 'Control and restrict physical access to media containing sensitive information',
          requiredEvidence: [
            'Media access policies',
            'Media inventory and labeling',
            'Access control procedures',
            'Storage facility documentation',
            'Physical security controls'
          ],
          keywords: ['media', 'access', 'physical', 'control', 'storage']
        },
        {
          id: 'MP-2',
          name: 'Media Sanitization',
          description: 'Implement procedures to sanitize and destroy media to prevent data recovery',
          requiredEvidence: [
            'Media sanitization policy',
            'Sanitization procedures and methods',
            'Destruction certifications',
            'Sanitization logs and records',
            'Approved vendor documentation'
          ],
          keywords: ['sanitization', 'destruction', 'media', 'wiping', 'disposal']
        },
        {
          id: 'MP-3',
          name: 'Media Labeling and Handling',
          description: 'Label media appropriately and establish procedures for secure handling and transport',
          requiredEvidence: [
            'Labeling standards and procedures',
            'Handling procedures documentation',
            'Transport and shipping procedures',
            'Chain of custody documentation'
          ],
          keywords: ['labeling', 'handling', 'transport', 'classification', 'custody']
        },
        {
          id: 'MP-4',
          name: 'Media Encryption',
          description: 'Encrypt sensitive data on portable media and removable storage devices',
          requiredEvidence: [
            'Encryption policy for media',
            'Encryption standards and algorithms',
            'Key management procedures',
            'Encryption implementation documentation'
          ],
          keywords: ['encryption', 'media', 'portable', 'removable', 'storage']
        },
        {
          id: 'MP-5',
          name: 'Media Inventory and Tracking',
          description: 'Maintain inventory and tracking of media containing sensitive information',
          requiredEvidence: [
            'Media inventory system',
            'Tracking procedures',
            'Accountability records',
            'Audit logs of media access and movement'
          ],
          keywords: ['inventory', 'tracking', 'accountability', 'audit', 'records']
        }
      ]
    },
    {
      id: 'SC',
      name: 'System and Communications Protection',
      description: 'Controls for protecting systems and communications from unauthorized access and modification',
      controls: [
        {
          id: 'SC-1',
          name: 'Boundary Protection',
          description: 'Implement mechanisms to protect system and network boundaries from unauthorized access',
          requiredEvidence: [
            'Firewall configuration and rules',
            'Network segmentation documentation',
            'DMZ architecture',
            'VPN configuration',
            'Intrusion detection/prevention system logs'
          ],
          keywords: ['boundary', 'firewall', 'segmentation', 'network', 'perimeter']
        },
        {
          id: 'SC-2',
          name: 'Encryption for Data in Transit',
          description: 'Encrypt data while in transit over networks using approved cryptographic algorithms',
          requiredEvidence: [
            'Encryption policy for data in transit',
            'TLS/SSL implementation documentation',
            'VPN configuration and protocols',
            'Approved algorithm list',
            'Certificate management procedures'
          ],
          keywords: ['encryption', 'transit', 'TLS', 'VPN', 'cryptographic']
        },
        {
          id: 'SC-3',
          name: 'Encryption for Data at Rest',
          description: 'Encrypt sensitive data while stored to prevent unauthorized access',
          requiredEvidence: [
            'Data at rest encryption policy',
            'Encryption implementation across storage systems',
            'Key management and storage procedures',
            'Encryption algorithm documentation',
            'Database and file encryption configuration'
          ],
          keywords: ['encryption', 'at rest', 'storage', 'database', 'cryptographic']
        },
        {
          id: 'SC-4',
          name: 'Key Management',
          description: 'Establish procedures for generating, storing, rotating, and destroying cryptographic keys',
          requiredEvidence: [
            'Key management policy',
            'Key generation procedures',
            'Key storage and backup procedures',
            'Key rotation schedule and logs',
            'Key destruction procedures'
          ],
          keywords: ['key', 'management', 'rotation', 'storage', 'cryptographic']
        },
        {
          id: 'SC-5',
          name: 'System Security Configuration',
          description: 'Configure systems with security baselines and maintain secure configurations',
          requiredEvidence: [
            'Security configuration baselines',
            'Hardening standards and procedures',
            'Configuration management documentation',
            'Compliance scanning results',
            'Deviation and exception procedures'
          ],
          keywords: ['configuration', 'hardening', 'baseline', 'security', 'standards']
        },
        {
          id: 'SC-6',
          name: 'Vulnerability Management',
          description: 'Identify, assess, and remediate system vulnerabilities on a regular basis',
          requiredEvidence: [
            'Vulnerability scanning procedures',
            'Scan results and reports',
            'Remediation procedures and timelines',
            'Patch management policy',
            'Exception and risk acceptance procedures'
          ],
          keywords: ['vulnerability', 'patch', 'scanning', 'remediation', 'management']
        }
      ]
    }
  ]
};
