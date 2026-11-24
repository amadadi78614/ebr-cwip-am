// Executive overview: entry page for the combined Telkom Shared Services EBR.
const OVERVIEW = {
  key: 'overview',
  domain: 'Executive overview',
  period: 'H1 FY27',
  accent: '#0070AD',
  accent2: '#009FE3',
  source: 'Telkom Shared Services · H1 FY27 EBR',
  tabs: [
    {
      id: 'agenda', label: 'Overview', title: 'Telkom Shared Services · H1 FY27 Executive Business Review',
      blocks: [
        {
          type: 'hero', items: [
            { value: '97%', label: 'Current asset verification', sub: 'Electronic coverage 34% to 59%', tone: 'good' },
            { value: '52.9%', label: 'Group capital conversion', sub: '24 Nov 2026 · target 60.3%', tone: 'warn' },
            { value: '58%', label: 'FAM incident backlog closed', sub: 'F&A H1 highlight', tone: 'good' },
            { value: 'UAT done', label: 'Touchless AP invoice processing', sub: 'Ready for the next step' },
          ],
        },
        {
          type: 'agenda', span: 12, rows: 4, items: [
            { label: 'Asset Management & Project Accounting', icon: 'Landmark', tab: 'cwip/agenda', line: 'Capital performance, portfolio, business units, asset verification' },
            { label: 'Finance & Accounting', icon: 'Wallet', tab: 'finance/agenda', line: 'H1 highlights, H2 focus areas, automation and analytics' },
            { label: 'Transformation and AI · Asset Management', icon: 'Sparkles', tab: 'cwip/ai', line: 'From manual verification to capital foresight', who: 'Capgemini Transformation' },
            { label: 'Transformation and AI · Finance', icon: 'Bot', tab: 'finance/ai', line: 'From batch-file bots to AI-assisted reconciliation', who: 'Capgemini Transformation' },
          ],
        },
      ],
    },
  ],
}
export default OVERVIEW
