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

// Automation and Transformation/AI on one page per area.
const merged = (c, suffix, label, layout) => {
  const rpa = tab(c, 'rpa'), ai = tab(c, 'ai')
  return { ...ai, id: 'ai-' + suffix, label, title: ai.title, blocks: layout(rpa, ai) }
}
const take = (c, id, suffix, label) => ({ ...tab(c, id), id: id + '-' + suffix, label })

const FA_AI = merged(FIN, 'fa', 'Automation and AI · F&A', (rpa, ai) => [
  { ...blk(rpa, 'cards'), span: 12, rows: 3, cols: 4, title: '8 digital interventions · 1 completed, 3 in progress, 4 in pipeline · ~20 hours a month targeted' },
  { ...blk(ai, 'waves'), big: false, span: 12, rows: 2, title: 'Automation to AI · done, under way, next',
    items: blk(ai, 'waves').items.map(w => ({ ...w, items: w.items.map(x => x
      .replace('Wholesale reconciliation automation, once SingleView and FAM balances are live', 'Wholesale recon automation, after SingleView and FAM go live')
      .replace(' (with Analytics)', '')) })) },
])
const AM_AI = merged(AM, 'am', 'Automation and AI · AM', (rpa, ai) => [
  { ...blk(rpa, 'cards'), span: 8, rows: 4, cols: 3, title: 'Automation projects · click for detail' },
  { ...blk(rpa, 'shift'), span: 4, rows: 4 },
  { ...blk(ai, 'waves'), big: false, span: 12, rows: 3, title: 'Automation to AI · done, under way, next 90 days' },
])

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
          { label: 'Automation and AI · Finance & Accounting', icon: 'Bot', tab: 'ai-fa', line: 'Eight digital interventions, ~20 hours a month targeted · next: AI-assisted reconciliation', who: 'Capgemini Transformation' },
          { label: 'Automation and AI · Asset Management', icon: 'Sparkles', tab: 'ai-am', line: 'Electronic verification 34% to 59% · next: capitalisation forecast', who: 'Capgemini Transformation' },
          { label: 'Analytics · Finance & Accounting', icon: 'BarChart3', tab: 'analytics-fa', line: 'Bank balance, cash flow and SLA models live · AR recon tracker next', who: 'Capgemini Analytics' },
          { label: 'Analytics · Asset Management', icon: 'LineChart', tab: 'analytics-am', line: 'Capital work in progress, visible every month', who: 'Capgemini Analytics' },
        ],
      }],
    },
    FA_AI,
    AM_AI,
    take(FIN, 'analytics', 'fa', 'Analytics · F&A'),
    take(AM, 'analytics', 'am', 'Analytics · AM'),
  ],
}

export const DOMAINS = [OVERVIEW, { ...strip(FIN), domain: 'Finance & Accounting' }, { ...strip(AM), domain: 'Asset Management & Project Accounting' }, TA]
