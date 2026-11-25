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
  id: 'ai', label: 'AI propositions', owner: { name: 'Mohamed Nomani', role: 'Capgemini Transformation' }, title: 'AI propositions for Finance and Asset Management',
  blocks: [
    {
      type: 'cards', span: 12, rows: 6, cols: 3,
      title: 'Six realistic AI propositions · built on the automation already in place · click for detail',
      items: [
        { icon: 'GitCompareArrows', name: 'AI on reconciliation exceptions', line: 'F&A · Rules clear the matches; AI explains and suggests a fix for the breaks', status: 'planned', statusText: 'H2 · proof of value',
          detail: { text: 'Rules-based matching first, then AI on the exceptions: likely cause, suggested journal, human approval before posting.', rows: [['Starts with', 'One account, after SingleView and FAM balances are live'], ['Builds on', 'Wholesale recon automation and the AR recon tracker']] } },
        { icon: 'ScanText', name: 'Touchless AP invoice processing', line: 'F&A · Invoices read, validated and posted without keying', status: 'test', statusText: 'UAT done',
          detail: { text: 'AI reads the invoice, validates it against PO and vendor master, and routes only exceptions to a person.', rows: [['Now', 'UAT completed in H1'], ['Next', 'Production and exception-rate tracking']] } },
        { icon: 'FileSignature', name: 'Contract operationalisation in SAP', line: 'F&A · Contract terms turned into SAP set-up, checked before payment', status: 'planned', statusText: 'POC proposed',
          detail: { text: 'Microsoft AI reads the signed contract, extracts rates, dates and obligations, and prepares the SAP set-up for approval.', rows: [['Partner', 'Microsoft'], ['Needs', 'Microsoft enterprise AI access for Shared Services']] } },
        { icon: 'TrendingUp', name: 'Capitalisation forecast', line: 'AM · See the year-end conversion gap months earlier', status: 'planned', statusText: 'Next 90 days',
          detail: { text: 'Uses multi-year AUC life-cycle data to forecast capitalisation by BU and region, measured against actuals.', rows: [['Builds on', 'AUC life-cycle analytics'], ['Measure', 'Forecast vs actual each month']] } },
        { icon: 'AlertTriangle', name: 'FNLD and on-hold risk signals', line: 'AM · Flags projects likely to miss capitalisation, with an owner', status: 'planned', statusText: 'Next',
          detail: { text: 'Scores open projects on age, spend pattern, FNLD and hold status, and sends the riskiest to the BU owner.', rows: [['Focus', 'CIM, CIO and prior-year balances']] } },
        { icon: 'FileText', name: 'Automated MBR commentary', line: 'AM and F&A · First-draft commentary in minutes; people review and sign', status: 'planned', statusText: '1–3 years',
          detail: { text: 'Drafts the monthly variance commentary from the capital and finance data; the accountant edits and approves.', rows: [['Guardrail', 'Human sign-off on every report']] } },
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
