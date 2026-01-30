/**
 * Compliance Framework Registry
 * Supports multiple compliance standards for assessment
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

export interface Framework {
  id: string
  name: string
  shortName: string
  description: string
  version: string
  domains: Domain[]
  category: 'security' | 'privacy' | 'industry' | 'government' | 'ai'
  regions?: string[]
  industries?: string[]
}

// Import all framework definitions
import { iso27001Framework } from './iso27001'
import { nistCsfFramework } from './nist-csf'
import { soc2Framework } from './soc2'
import { gdprFramework } from './gdpr'
import { hipaaFramework } from './hipaa'
import { pciDssFramework } from './pci-dss'
import { nisFramework } from './nis'
import { nistAiFramework } from './nist-ai'
import { hitrustFramework } from './hitrust'
import { fedRampFramework } from './fedramp'
import { iso42001Framework } from './iso42001'
import { cmmcFramework } from './cmmc'
import { tisaxFramework } from './tisax'
import { gli19Framework } from './gli-19'

// Framework Registry
export const frameworks: Record<string, Framework> = {
  'iso27001': iso27001Framework,
  'nist-csf': nistCsfFramework,
  'soc2': soc2Framework,
  'gdpr': gdprFramework,
  'hipaa': hipaaFramework,
  'pci-dss': pciDssFramework,
  'nis': nisFramework,
  'nist-ai': nistAiFramework,
  'hitrust': hitrustFramework,
  'fedramp': fedRampFramework,
  'iso42001': iso42001Framework,
  'cmmc': cmmcFramework,
  'tisax': tisaxFramework,
  'gli-19': gli19Framework,
}

// Helper functions
export function getFramework(frameworkId: string): Framework | undefined {
  return frameworks[frameworkId]
}

export function getAllFrameworks(): Framework[] {
  return Object.values(frameworks)
}

export function getFrameworksByCategory(category: Framework['category']): Framework[] {
  return getAllFrameworks().filter(f => f.category === category)
}

export function getControlsForFramework(frameworkId: string): (Control & { domain: string; domainId: string })[] {
  const framework = getFramework(frameworkId)
  if (!framework) return []

  return framework.domains.flatMap(d =>
    d.controls.map(c => ({ ...c, domain: d.name, domainId: d.id }))
  )
}

export function getControlById(frameworkId: string, controlId: string): Control | undefined {
  return getControlsForFramework(frameworkId).find(c => c.id === controlId)
}

export function getTotalControlCount(frameworkId: string): number {
  return getControlsForFramework(frameworkId).length
}

export function getDomains(frameworkId: string): { id: string; name: string; controlCount: number }[] {
  const framework = getFramework(frameworkId)
  if (!framework) return []

  return framework.domains.map(d => ({
    id: d.id,
    name: d.name,
    controlCount: d.controls.length,
  }))
}

// Framework metadata for UI display
export function getFrameworkList() {
  return getAllFrameworks().map(f => ({
    id: f.id,
    name: f.name,
    shortName: f.shortName,
    description: f.description,
    version: f.version,
    category: f.category,
    controlCount: f.domains.reduce((sum, d) => sum + d.controls.length, 0),
    domainCount: f.domains.length,
    regions: f.regions,
    industries: f.industries,
  }))
}
