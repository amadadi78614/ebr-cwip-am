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
  id: 'transformation', label: 'Automation', owner: { name: 'Mohamed Nomani', role: 'Capgemini Transformation' }, title: 'Automation to AI across Finance and Fixed Assets',
  blocks: [
    { ...compact(blk(finRpa, 'cards')), span: 7, rows: 3, cols: 2, list: true, title: 'Finance & Accounting · 8 interventions · ~20 hours a month targeted' },
    { ...blk(amRpa, 'cards'), span: 5, rows: 3, cols: 1, list: true, title: 'Fixed Assets · electronic verification 34% to 59%' },
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

const AI_LEARNED = {
  id: 'learned', label: 'What we learned', owner: { name: 'Mohamed Nomani · Dani Viljoen', role: 'Capgemini Transformation and Analytics' }, title: 'What we learned: enterprise value comes from shared AI, not individual helpers',
  blocks: [
    { type: 'image', span: 8, title: 'Two ways AI shows up at work', src: '/ai-two-ways.png', alt: 'Individual AI assistant compared with a shared AI agent in an AI harness' },
    {
      type: 'cards', span: 4, cols: 1, list: true, title: 'What we learned since June',
      items: [
        { icon: 'KeyRound', name: 'Enterprise AI needs the right tools', line: 'Telkom AI licences not yet broadly provisioned', status: 'confirm', statusText: 'Ask',
          detail: { text: 'Delivery teams cannot reach advanced capabilities, which limits experimentation and workflow integration at scale.', rows: [['Ask', 'Microsoft enterprise AI access for Shared Services']] } },
        { icon: 'Workflow', name: 'Value comes from the workflow', line: 'Personal productivity does not scale on its own', status: 'live', statusText: 'Learned',
          detail: { text: 'About 80% report better individual productivity, but only 7% scale AI across the enterprise (McKinsey, Deloitte). Value comes from embedding intelligence in real, governed workflows.' } },
        { icon: 'Scale', name: 'Invest per use case', line: 'Defined case, measurable value, then infrastructure', status: 'planned', statusText: 'Proposed',
          detail: { text: 'Tie investment to defined business use cases and evidence of value. Where a case needs more than the standard AI framework, evaluate contained AI infrastructure.' } },
      ],
    },
  ],
}

const AI_POC = {
  id: 'poc', label: 'Microsoft POC', owner: { name: 'Mohamed Nomani · Dani Viljoen', role: 'Capgemini Transformation and Analytics' }, title: 'The POC proved the use case; enablement is the hurdle we are clearing',
  blocks: [
    {
      type: 'arch', span: 8, rows: 6, title: 'Enterprise AI POC with Microsoft · SAP contract operationalisation · click an outcome',
      sources: [
        { icon: 'FileText', name: 'Signed contracts', sub: 'Real Telkom contracts' },
        { icon: 'Database', name: 'SAP data', sub: 'Vendors and conditions' },
      ],
      core: { kicker: 'Capgemini Transformation + Analytics', name: 'ContractOps', icon: 'BrainCircuit', sub: 'Built · moving to Microsoft POC', status: 'progress', statusText: 'Microsoft POC' },
      outputs: [
        { icon: 'ScanText', name: 'Terms extracted', metric: 'Rates, dates', detail: { text: 'AI reads each signed contract and pulls out pricing, escalations, dates and obligations into a structured record.', rows: [['Today', 'Read and keyed by hand'], ['Control', 'Person confirms each extract']] } },
        { icon: 'Settings2', name: 'SAP set-up', metric: 'For approval', detail: { text: 'Prepares the SAP contract and condition set-up from the extracted terms, for a person to approve before it is loaded.', rows: [['Benefit', 'Faster, consistent contract set-up']] } },
        { icon: 'ShieldCheck', name: 'Invoice vs contract', metric: 'Before payment', detail: { text: 'Compares invoiced rates and escalations with the contract and flags differences before payment is released.', rows: [['Benefit', 'Stops over-payments at source']] } },
        { icon: 'BellRing', name: 'Obligation alerts', metric: 'Renewals', detail: { text: 'Warns owners ahead of renewals, expiries and escalation dates.', rows: [['Benefit', 'No missed renewals or escalations']] } },
      ],
    },
    {
      type: 'cards', span: 4, rows: 6, cols: 1, list: true, title: 'Enablement · clearing the hurdle',
      items: [
        { icon: 'CheckCircle2', name: 'Use case proved', line: 'Contract packs to SAP-ready requirements', status: 'live', statusText: 'Done',
          detail: { text: 'Evidence-cited SAP readiness report, prioritised missing-information register and clear human-review points, built with the Telkom team.' } },
        { icon: 'KeyRound', name: 'Microsoft enterprise AI access', line: 'Telkom AI licences not yet provisioned', status: 'confirm', statusText: 'Motivation',
          detail: { text: 'Motivations are in progress so the Shared Services team can work in Telkom\'s chosen AI ecosystem.' } },
        { icon: 'Server', name: 'Microsoft POC environment', line: 'Built solution moves into it', status: 'progress', statusText: 'In progress',
          detail: { text: 'Microsoft provides the POC environment; the solution already built is lifted and shifted into it.' } },
      ],
    },
  ],
}

const AI_PATH = {
  id: 'path', label: 'Path to value', owner: { name: 'Mohamed Nomani · Dani Viljoen', role: 'Capgemini Transformation and Analytics' }, title: 'The path towards unlocking value within Shared Services',
  blocks: [
    { type: 'image', span: 8, title: 'How we propose to progress · executive sponsorship requested', src: '/ai-path.png', alt: 'Path from business problem to measured outcome, with the two sponsorship asks' },
    {
      type: 'cards', span: 4, cols: 1, list: true, title: 'Next AI propositions · click for detail',
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
  id: 'analytics', label: '6 months in review', owner: finAna.owner, title: '6 months in review: building a data-driven finance engine',
  blocks: [
    {
      type: 'cards', span: 4, cols: 1, list: true, title: 'Completed · click for detail',
      items: [
        { icon: 'CalendarClock', name: 'System forecasting', line: 'Earlier visibility of committed cash', status: 'live', statusText: 'Completed',
          detail: { text: 'Daily-refreshed view of logged-unpaid, paid and total committed cash, compared with the model forecast to expose projected vs in-system differences.' } },
        { icon: 'BrainCircuit', name: 'Prediction model enhancements', line: 'More reliable forecast inputs', status: 'live', statusText: 'Completed',
          detail: { text: 'Updated machine-learning logic to improve forecasting performance; the enhanced logic is now being validated.' } },
        { icon: 'Layers', name: 'AUC analytics model', line: 'Less reporting effort, better insight', status: 'live', statusText: 'Completed',
          detail: { text: 'Reports on capital work in progress: open capital projects, accumulated costs and ageing. Supports timely capitalisation, accurate reporting and visibility of long-outstanding CWIP balances.' } },
      ],
    },
    {
      type: 'cards', span: 4, cols: 1, list: true, title: 'In progress · click for detail',
      items: [
        { icon: 'Smartphone', name: 'Enterprise / Consumer receipts', line: 'Accurate allocation, better accountability', status: 'progress',
          detail: { text: 'Improves mobile-receipt allocation by customer segment, reducing misallocations and reconciliation effort.' } },
        { icon: 'ListChecks', name: 'Accounts receivable (open vs cleared)', line: 'Stronger collections and working capital decisions', status: 'progress',
          detail: { text: 'Separates cleared and open AR items to improve outstanding-balance visibility, collections focus and forecast accuracy.' } },
        { icon: 'Store', name: 'Consumer dealer reporting automation', line: 'Efficiency now, AI potential later', status: 'progress',
          detail: { text: 'Reduces the time to produce dealer commission reports, and improves the timing and accuracy of monthly commission provisions.' } },
        { icon: 'Network', name: 'Sales hierarchy tool', line: 'Accurate allocation of dealer sales', status: 'progress',
          detail: { text: 'Improves the creation and modification of user hierarchy allocation data.' } },
      ],
    },
    {
      type: 'cards', span: 4, cols: 1, list: true, title: 'Maintained · protecting the analytical backbone',
      items: [
        { icon: 'Plane', name: 'Travel analytics', line: 'Spend and activity trends', status: 'complete', statusText: 'Maintained' },
        { icon: 'Timer', name: 'TBI analytics', line: 'Status and deadline prioritisation', status: 'complete', statusText: 'Maintained' },
        { icon: 'GitCompareArrows', name: 'AR reconciliations', line: 'Ageing and unreconciled item control', status: 'complete', statusText: 'Maintained' },
        { icon: 'BarChart3', name: 'OMS dashboard', line: 'Volumes, statuses, turnaround times', status: 'complete', statusText: 'Maintained' },
        { icon: 'Mail', name: 'TOMS mailbox', line: 'Response time and resolution', status: 'complete', statusText: 'Maintained' },
        { icon: 'Gauge', name: 'F&A / HR SLA', line: 'Performance vs service targets', status: 'complete', statusText: 'Maintained' },
      ],
    },
  ],
}

const MATURITY = {
  id: 'maturity', label: 'Data maturity', owner: finAna.owner, title: 'What we are focusing on next: the next frontier of data analytics',
  blocks: [
    {
      type: 'maturity', span: 12, title: 'Progressing the data maturity curve within Telkom, as a trusted implementation partner', split: 3, bands: ['Data', 'Data + Artificial Intelligence'],
      items: [
        { name: 'Descriptive', q: 'What happened?', pct: 100, text: 'Data provides hindsight', tools: ['Reports', 'Dashboards'] },
        { name: 'Diagnostic', q: 'Why did it happen?', pct: 100, text: 'Analysis provides insight', tools: ['Reports', 'Dashboards'] },
        { name: 'Predictive', q: 'What will happen?', pct: 100, text: 'Models provide foresight', tools: ['Reports', 'Dashboards', 'AI / ML'] },
        { name: 'Prescriptive', q: 'What should we do about it?', pct: 20, text: 'Intelligence framework provides rapid insight, recommendations and decisions', tools: ['Reports', 'Dashboards', 'AI / ML', 'Scenario tools', 'Agentic framework'] },
        { name: 'Cognitive', q: 'Controlled execution', pct: 5, text: 'Intelligence framework provides controlled execution autonomy through agentic layers', tools: ['Agentic framework'] },
      ],
    },
  ],
}

const area = (key, domain, page) => ({ key, domain, period: 'H1 FY27', accent: '#0070AD', accent2: '#009FE3', source: 'Capgemini ' + domain + ' · H1 FY27', tabs: [page] })

export const DOMAINS = [OVERVIEW, { ...strip(FIN), domain: 'Finance & Accounting' }, { ...strip(AM), domain: 'Fixed Assets & Project Accounting' }, area('transformation', 'Transformation', TRANSFORMATION), { ...area('analytics', 'Analytics', ANALYTICS), tabs: [ANALYTICS, MATURITY] }, { ...area('ai', 'AI', AI_LEARNED), tabs: [AI_LEARNED, AI_POC, AI_PATH] }]
