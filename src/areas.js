// Presentation order for the combined EBR: F&A (Claude Naidu), then AM & PA (Hannes Joubert),
// then Transformation (Mohamed Nomani) and Analytics (Dani Viljoen) for both areas.
import AM from './data.js'
import FIN from './finance.js'
import OVERVIEW from './overview.js'

const MOVED = ['rpa', 'ai', 'analytics']

// Domain sites keep their own story; transformation and analytics move to their own area.
const strip = c => ({
  ...c,
  tabs: c.tabs.filter(t => !MOVED.includes(t.id)).map(t => ({
    ...t,
    blocks: t.blocks.map(b => b.type === 'agenda' ? { ...b, items: b.items.filter(x => !MOVED.includes(x.tab)) } : b),
  })),
})

const tab = (c, id) => c.tabs.find(t => t.id === id)
const blk = (t, type) => t.blocks.find(b => b.type === type)

// One Transformation page and one Analytics page covering both areas.
const SHORT = {
  'Combined TB reports': 'Consolidation benefit', 'All monthly payments': 'Batch files · month-end TAT',
  'FAS PayPro files': '~8 hours saved', 'Debit order look-up': '~8 hours saved', 'Daily BTM files': '~4 hours a month',
  'Age analysis extracts': 'SAP extract, centralised', 'Rebate split per BU': 'Openserve to Telkom split', 'NEDLMP report extraction': 'Bulk view of uploads',
}
const compact = b => ({ ...b, items: b.items.map(({ metric, team, ...x }) => ({ ...x, line: SHORT[x.name] || x.line })) })
const finRpa = tab(FIN, 'rpa'), amRpa = tab(AM, 'rpa'), finAna = tab(FIN, 'analytics'), amAna = tab(AM, 'analytics')

const TRANSFORMATION = {
  id: 'transformation', label: 'Automation', owner: { name: 'Mohamed Nomani', role: 'Capgemini Transformation' }, title: 'Automation to AI across Finance and Asset Management',
  blocks: [
    { ...compact(blk(finRpa, 'cards')), span: 7, rows: 3, cols: 2, list: true, title: 'Finance & Accounting · 8 interventions · ~20 hours a month targeted' },
    { ...blk(amRpa, 'cards'), span: 5, rows: 3, cols: 1, list: true, title: 'Asset Management · electronic verification 34% to 59%' },
    {
      type: 'waves', span: 12, rows: 2, title: 'Automation to AI · done, under way, next',
      items: [
        { when: 'Done · live at Telkom', name: 'Delivered', tone: 'done', items: ['F&A: Combined TB reports · Touchless AP UAT completed', 'AM: electronic asset verification on 4 technologies', 'AM: AUC life-cycle analytics'] },
        { when: 'Under way', name: 'Being delivered now', tone: 'doing', items: ['F&A: payment batch files, PayPro, debit order look-up', 'AM: NCAS electronic verification (5 networks)', 'AM: capex extraction to production'] },
        { when: 'H2 · next', name: 'What we will prove next', tone: 'next', items: ['F&A: wholesale recon automation after SingleView and FAM', 'F&A: AI on reconciliation exceptions, one account', 'AM: capitalisation forecast on AUC history'] },
      ],
    },
  ],
}

const AI_PROPOSITIONS = {
  id: 'ai', label: 'AI propositions', owner: { name: 'Mohamed Nomani', role: 'Capgemini Transformation' }, title: 'Microsoft AI solution leads the AI propositions',
  blocks: [
    {
      type: 'arch', span: 8, rows: 6, title: 'Microsoft AI solution · contract operationalisation in SAP · click an outcome',
      sources: [
        { icon: 'FileText', name: 'Signed contracts', sub: 'Real Telkom contracts' },
        { icon: 'Database', name: 'SAP data', sub: 'Vendors and conditions' },
      ],
      core: { kicker: 'Microsoft Foundry · built by Capgemini', name: 'ContractOps', icon: 'BrainCircuit', sub: 'Built · moving to Microsoft POC', status: 'progress', statusText: 'Microsoft POC' },
      outputs: [
        { icon: 'ScanText', name: 'Terms extracted', metric: 'Rates, dates', detail: { text: 'AI reads each signed contract and pulls out pricing, escalations, dates and obligations into a structured record.', rows: [['Today', 'Read and keyed by hand'], ['Control', 'Person confirms each extract']] } },
        { icon: 'Settings2', name: 'SAP set-up', metric: 'For approval', detail: { text: 'Prepares the SAP contract and condition set-up from the extracted terms, for a person to approve before it is loaded.', rows: [['Benefit', 'Faster, consistent contract set-up']] } },
        { icon: 'ShieldCheck', name: 'Invoice vs contract', metric: 'Before payment', detail: { text: 'Compares invoiced rates and escalations with the contract and flags differences before payment is released.', rows: [['Benefit', 'Stops over-payments at source']] } },
        { icon: 'BellRing', name: 'Obligation alerts', metric: 'Renewals', detail: { text: 'Warns owners ahead of renewals, expiries and escalation dates.', rows: [['Benefit', 'No missed renewals or escalations']] } },
      ],
    },
    {
      type: 'cards', span: 4, rows: 6, cols: 1, list: true, title: 'Next AI propositions · click for detail',
      items: [
        { icon: 'GitCompareArrows', name: 'AI on recon exceptions', line: 'F&A · AI explains the breaks', status: 'planned', statusText: 'H2 proof',
          detail: { text: 'Rules-based matching first, then AI on the exceptions: likely cause, suggested journal, human approval before posting.', rows: [['Starts with', 'One account, after SingleView and FAM balances are live']] } },
        { icon: 'Receipt', name: 'Touchless AP', line: 'F&A · invoices without keying', status: 'test', statusText: 'UAT done',
          detail: { text: 'AI reads the invoice, validates it against PO and vendor master, and routes only exceptions to a person.' } },
        { icon: 'TrendingUp', name: 'Capitalisation forecast', line: 'AM · gap seen months earlier', status: 'planned', statusText: 'Next 90 days',
          detail: { text: 'Uses multi-year AUC life-cycle data to forecast capitalisation by BU and region, measured against actuals.' } },
        { icon: 'AlertTriangle', name: 'FNLD and hold risk signals', line: 'AM · projects likely to slip', status: 'planned', statusText: 'Next',
          detail: { text: 'Scores open projects on age, spend pattern, FNLD and hold status, and sends the riskiest to the BU owner.' } },
        { icon: 'FileText', name: 'MBR commentary drafts', line: 'AM and F&A · people sign off', status: 'planned', statusText: '1–3 years',
          detail: { text: 'Drafts the monthly variance commentary from the capital and finance data; the accountant edits and approves.' } },
      ],
    },
  ],
}

const ANALYTICS = {
  id: 'analytics', label: 'Analytics', owner: finAna.owner, title: 'Analytics across Finance and Asset Management',
  blocks: [
    { ...finAna.blocks[0], span: 4, rows: 3, title: 'Finance & Accounting · live' },
    { ...finAna.blocks[1], span: 4, rows: 3, title: 'Finance & Accounting · in progress' },
    { ...compact(blk(amAna, 'cards')), span: 4, rows: 3, cols: 1, list: true, title: 'Asset Management · capital work in progress' },
    { ...blk(finAna, 'rings'), span: 12, rows: 2, size: 72, items: blk(finAna, 'rings').items.map(r => r.pct === 100 ? { ...r, label: 'Predictive', sub: 'Hindsight, insight, foresight' } : r) },
  ],
}

const area = (key, domain, page) => ({ key, domain, period: 'H1 FY27', accent: '#0070AD', accent2: '#009FE3', source: 'Capgemini ' + domain + ' · H1 FY27', tabs: [page] })

export const DOMAINS = [OVERVIEW, { ...strip(FIN), domain: 'Finance & Accounting' }, { ...strip(AM), domain: 'Asset Management & Project Accounting' }, { ...area('transformation', 'Transformation', TRANSFORMATION), tabs: [TRANSFORMATION, AI_PROPOSITIONS] }, area('analytics', 'Analytics', ANALYTICS)]
