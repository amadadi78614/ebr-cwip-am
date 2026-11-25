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

const take = (c, id, suffix, label) => ({ ...c.tabs.find(t => t.id === id), id: id + '-' + suffix, label })

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
        type: 'agenda', span: 12, rows: 6, items: [
          { label: 'Automation · Finance & Accounting', icon: 'Bot', tab: 'rpa-fa', line: 'Eight digital interventions: one completed, three in progress, four in pipeline', who: 'Capgemini Transformation' },
          { label: 'Transformation and AI · Finance & Accounting', icon: 'Sparkles', tab: 'ai-fa', line: 'From batch-file bots to AI-assisted reconciliation', who: 'Capgemini Transformation' },
          { label: 'Automation · Asset Management', icon: 'ScanLine', tab: 'rpa-am', line: 'Automation taking over verification and reporting', who: 'Capgemini Transformation' },
          { label: 'Transformation and AI · Asset Management', icon: 'Sparkles', tab: 'ai-am', line: 'From manual verification to capital foresight', who: 'Capgemini Transformation' },
          { label: 'Analytics · Finance & Accounting', icon: 'BarChart3', tab: 'analytics-fa', line: 'Bank balance, cash flow and SLA models live · AR recon tracker next', who: 'Capgemini Analytics' },
          { label: 'Analytics · Asset Management', icon: 'LineChart', tab: 'analytics-am', line: 'Capital work in progress, visible every month', who: 'Capgemini Analytics' },
        ],
      }],
    },
    take(FIN, 'rpa', 'fa', 'Automation · F&A'),
    take(FIN, 'ai', 'fa', 'AI · F&A'),
    take(AM, 'rpa', 'am', 'Automation · AM'),
    take(AM, 'ai', 'am', 'AI · AM'),
    take(FIN, 'analytics', 'fa', 'Analytics · F&A'),
    take(AM, 'analytics', 'am', 'Analytics · AM'),
  ],
}

export const DOMAINS = [OVERVIEW, { ...strip(FIN), domain: 'Finance & Accounting' }, { ...strip(AM), domain: 'Asset Management & Project Accounting' }, TA]
