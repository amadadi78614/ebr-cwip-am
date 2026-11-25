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
  id: 'transformation', label: 'Transformation', owner: { name: 'Mohamed Nomani', role: 'Capgemini Transformation' }, title: 'Automation to AI across Finance and Asset Management',
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

const ANALYTICS = {
  id: 'analytics', label: 'Analytics', owner: finAna.owner, title: 'Analytics across Finance and Asset Management',
  blocks: [
    { ...finAna.blocks[0], span: 4, rows: 3, title: 'Finance & Accounting · live' },
    { ...finAna.blocks[1], span: 4, rows: 3, title: 'Finance & Accounting · in progress' },
    { ...compact(blk(amAna, 'cards')), span: 4, rows: 3, cols: 1, list: true, title: 'Asset Management · capital work in progress' },
    { ...blk(finAna, 'rings'), span: 12, rows: 2, size: 72, items: blk(finAna, 'rings').items.map(r => r.pct === 100 ? { ...r, label: 'Predictive', sub: 'Hindsight, insight, foresight' } : r) },
  ],
}

const TA = {
  key: 'transformation',
  domain: 'Transformation & Analytics',
  period: 'H1 FY27',
  accent: '#0070AD',
  accent2: '#009FE3',
  source: 'Capgemini Transformation and Analytics · H1 FY27',
  tabs: [
    {
      id: 'agenda', label: 'Agenda', title: 'Transformation and Analytics · Finance and Asset Management',
      blocks: [{
        type: 'agenda', span: 12, rows: 4, items: [
          { label: 'Transformation', icon: 'Sparkles', tab: 'transformation', line: 'Automation and AI for Finance and Asset Management', who: 'Mohamed Nomani' },
          { label: 'Analytics', icon: 'BarChart3', tab: 'analytics', line: 'Models and dashboards for Finance and Asset Management', who: 'Dani Viljoen' },
        ],
      }],
    },
    TRANSFORMATION,
    ANALYTICS,
  ],
}

export const DOMAINS = [OVERVIEW, { ...strip(FIN), domain: 'Finance & Accounting' }, { ...strip(AM), domain: 'Asset Management & Project Accounting' }, TA]
