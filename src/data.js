// CWIP & Asset Management EBR content. Source: September H1 FY27 placemat (dated 15 Oct 2026) and the previous CWIP EBR site.
const CONFIG = {
  key: 'cwip',
  domain: 'CWIP & Asset Management',
  title: 'CWIP & Asset Management Executive Business Review',
  period: 'H1 FY27',
  accent: '#0d9488',
  source: 'Source: September H1 FY27 placemat (15 Oct 2026) · historical balances from the previous site',
  tabs: [
    {
      id: 'highlights',
      label: 'Highlights',
      title: 'H1 FY27 highlights',
      sub: 'September review',
      blocks: [
        {
          type: 'kpis',
          items: [
            { value: '59%', label: 'Electronic verification', note: 'Up 25 pp · excludes cable', trend: 'up' },
            { value: '50%', label: 'Capital conversion', note: 'H2 focus: 69%' },
            { value: '97%', label: 'Asset verification, current cycle', note: '3 pp to full coverage' },
            { value: '103%', label: 'Project accountant score', note: 'Group, excluding BCX', trend: 'up' },
          ],
        },
        {
          type: 'chart', kind: 'bar', span: 3, title: 'Electronic verification', note: '+25 pp', suffix: '%', max: 100,
          labels: ['Previous review', 'H1 FY27'], datasets: [{ label: 'Coverage', data: [34, 59], colors: ['#94a3b8', 'var(--accent)'] }],
          footnote: 'Latest figure excludes cable.',
        },
        {
          type: 'chart', kind: 'bar', span: 4, horizontal: true, title: 'Verification coverage by technology', suffix: '%', max: 100,
          labels: ['IT hardware', 'IT software', 'Metro Ethernet & POTN'], datasets: [{ label: 'Coverage', data: [26, 89, 89] }],
          footnote: 'MSAN/ISAM and GPON classes reported verified.',
        },
        {
          type: 'chart', kind: 'bar', span: 5, horizontal: true, title: 'Execution performance', note: 'Group excluding BCX · weighting in brackets', suffix: '%', max: 115,
          labels: ['Financial control (65%)', 'On-time execution (10%)', 'On-time administration (20%)', 'Data integrity (5%)'],
          datasets: [{ label: 'Score', data: [103, 99, 106, 102] }],
        },
        {
          type: 'compare', span: 7, title: 'Capital delivery',
          items: [
            { label: 'Capital conversion, H1 actual to H2 focus', from: '50%', to: '69%', note: 'Gap of 19 pp. Confirm the milestone against the March target curve.' },
            { label: 'Electronic verification', from: '34%', to: '59%' },
            { label: 'Asset verification, current cycle', from: '97%', to: '100%', note: 'Close-out of the remaining 3% needs an owner and date.' },
          ],
        },
        {
          type: 'asks', span: 5, title: 'Decisions requested from Telkom', note: 'Owners and dates to agree',
          items: ['Agree the H2 capital conversion milestone.', 'Assign an owner to close out asset verification.', 'Validate AUC and project spend data.'],
        },
      ],
    },
    {
      id: 'rpa',
      label: 'Transformation and RPA',
      title: 'Transformation and RPA',
      sub: 'Initiatives and delivery status',
      blocks: [
        {
          type: 'list', span: 7, rows: 2, title: 'CWIP initiatives',
          items: [
            { title: 'Electronic verification', text: 'Coverage up from 34% to 59%, excluding cable. IT hardware 26%, IT software 89%, Metro Ethernet & POTN 89%.', metric: '59%', status: 'expanded' },
            { title: 'AUC analytics', text: 'Daily dashboard enhanced with end-to-end review. Production sign-off to confirm.', status: 'enhanced' },
            { title: 'Capex data extraction', text: 'Scheduled extraction in test. Confirm production readiness.', status: 'test' },
            { title: 'Carry-over funding workflow', text: 'Confirm whether this links to the funding and requisition release on new CPAs.', status: 'hold' },
            { title: 'New CPA releases', text: 'Funding and requisitions. Confirm scope, ownership and delivery date.', status: 'confirm' },
            { title: 'Project expenditure management', text: 'Confirm the process change, status and measurable benefit.', status: 'confirm' },
          ],
        },
        {
          type: 'steps', span: 5, title: 'Transformation path',
          items: [
            { title: 'Visibility', text: 'AUC dashboard enhanced.', status: 'live' },
            { title: 'Automation', text: 'Expand verification and extraction.', status: 'progress' },
            { title: 'Prediction', text: 'Forecast capitalisation.', status: 'proposed' },
            { title: 'AI assistance', text: 'Governed agents with human review.', status: 'proposed' },
          ],
        },
        {
          type: 'list', span: 5, title: 'Items to confirm before the EBR',
          items: [
            { title: 'Production sign-off', text: 'AUC analytics and capex extraction.' },
            { title: 'Named delivery owners', text: 'For each initiative in the list.' },
            { title: 'Measured benefit', text: 'Effort saved and accuracy, against a baseline.' },
          ],
        },
      ],
    },
    {
      id: 'way-forward',
      label: 'Way forward',
      title: 'Way forward',
      sub: 'Proposed AI capabilities · not live',
      blocks: [
        {
          type: 'cards', span: 8, rows: 2, cols: 4, title: 'Proposed AI capabilities', note: 'Concepts for discussion',
          items: [
            { tag: 'Forecast', title: 'Capex forecast', text: 'Capitalisation timing and variance scenarios.' },
            { tag: 'AUC', title: 'AUC lifecycle', text: 'Ageing alerts and settlement follow-up.' },
            { tag: 'Verification', title: 'Asset verification', text: 'Match suggestions and ranked exceptions.' },
            { tag: 'Depreciation', title: 'Depreciation', text: 'Forecasts and asset-life review candidates.' },
            { tag: 'Risk', title: 'FNLD risk', text: 'Risk-ranked projects and early warnings.' },
            { tag: 'Holds', title: 'Projects on hold', text: 'Classified hold reasons and follow-up.' },
            { tag: 'Governance', title: 'Capex governance', text: 'Policy flags with supporting evidence.' },
            { tag: 'Reporting', title: 'Executive insight', text: 'Draft commentary from validated metrics.' },
          ],
        },
        {
          type: 'steps', span: 4, rows: 2, title: 'Roadmap', note: 'Indicative, subject to agreement',
          items: [
            { period: '0–12 months', title: 'Foundation', points: ['Validate AUC data', 'Confirm ownership', 'Baseline effort and accuracy'] },
            { period: '1–3 years', title: 'Prediction', points: ['Pilot forecasting', 'Test project-risk signals'] },
            { period: '3–5 years', title: 'Scale', points: ['Approved workflows', 'Measured outcomes'] },
          ],
        },
      ],
    },
    {
      id: 'portfolio',
      label: 'Portfolio data',
      title: 'CWIP portfolio by business unit',
      sub: 'Historical snapshot · balances need validation',
      blocks: [
        {
          type: 'bu', span: 12, title: 'CWIP composition', note: 'R million',
          series: ['CWIP', 'AUC', 'Active AUC', 'Built, not ready', 'Built, ready', 'On hold', 'In plan'],
          headline: [['CWIP', 0], ['AUC', 1], ['Active AUC', 2], ['On hold', 5]],
          data: {
            All: [2208.7, 1475.5, 1412.1, 494.7, 238.5, 58.8, 4.6],
            Consumer: [420.1, 280.3, 268.5, 89.2, 48.1, 9.2, 0.8],
            'Corporate Centre': [185.4, 122.1, 116.8, 38.4, 21.2, 3.6, 0.3],
            'Group IT': [312.6, 208.4, 199.2, 64.8, 35.6, 8.4, 0.6],
            Gyro: [98.2, 65.4, 62.5, 20.4, 11.2, 2.1, 0.2],
            Openserve: [890.4, 594.6, 568.8, 198.4, 96.2, 23.6, 1.8],
            'Telkom Properties': [302, 204.7, 196.3, 83.5, 26.2, 11.9, 0.9],
          },
          footnote: 'Taken from the previous site. Not refreshed by the September pack.',
        },
      ],
    },
  ],
}
export default CONFIG
