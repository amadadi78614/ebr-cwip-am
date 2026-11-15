// CWIP & Asset Management EBR content.
// Source: Telkom WO 10 MBR CWIP & AM, September 2026 review (MBR CWIP_AM Deck 2026-10-21 f2.pdf),
// with capitalisation status as at 20 Oct 2026; MBR minutes 23 Sep 2026.
const CONFIG = {
  key: 'cwip',
  domain: 'CWIP & Asset Management',
  title: 'CWIP & Asset Management Executive Business Review',
  period: 'H1 FY27',
  accent: '#0d9488',
  source: 'Source: CWIP & AM MBR, September 2026 review (21 Oct 2026) · status as at 20 Oct 2026',
  tabs: [
    {
      id: 'highlights',
      label: 'Highlights',
      title: 'H1 FY27 highlights',
      sub: 'YTD September 2026',
      blocks: [
        {
          type: 'kpis',
          items: [
            { value: 'R2.17bn', label: 'Capitalised YTD', note: 'R459m below corporate target · only R43m below prior year' },
            { value: '49.8%', label: 'Group conversion rate', note: 'Target 59% · higher than prior year · 51.4% at 20 Oct' },
            { value: 'R2.1bn', label: 'Capex spend YTD', note: '31% of R7.06bn after 6 months' },
            { value: '>92%', label: 'Asset lines verified', note: 'Across the 2-year verification cycle' },
          ],
        },
        {
          type: 'chart', kind: 'bar', span: 6, title: 'Capitalisation vs corporate target', note: 'R million · YTD September', suffix: 'm',
          labels: ['Mobile', 'Openserve', 'Consumer', 'Telkom Properties', 'Corporate Centre', 'TGIT'],
          datasets: [
            { label: 'Actual', data: [1032.1, 798.0, 306.3, 28.4, 4.3, 2.6] },
            { label: 'Corporate target', data: [1013.4, 904.4, 588.1, 82.4, 31.8, 11.3], color: '#94a3b8' },
          ],
          footnote: 'Mobile achieved target. Consumer (excl. Mobile) R281m below; Openserve R106m below corporate but met internal target.',
        },
        {
          type: 'chart', kind: 'bar', span: 6, title: 'Conversion rate vs target', note: '% · YTD September', suffix: '%', max: 100,
          labels: ['Group', 'Openserve', 'Mobile'],
          datasets: [
            { label: 'Actual', data: [49.8, 68.5, 37.9] },
            { label: 'Corporate target', data: [59, 77, 36], color: '#94a3b8' },
          ],
          footnote: 'Openserve internal target 66% achieved. Mobile ahead of corporate target.',
        },
        {
          type: 'list', span: 12, title: 'Asset management',
          items: [
            { title: 'Verification on track for year 2 of the cycle', text: 'Priority is completing FDA verification; super ASN follow-up to reduce write-offs.', status: 'progress' },
            { title: 'Electronic verification rerun completed', text: 'All SAP verifications rerun in August and September; NCAS assets (Tienet, Tuenet, Tcnet, Tnet, Tmnet) next.', status: 'complete' },
          ],
        },
      ],
    },
    {
      id: 'capital',
      label: 'Capital status',
      title: 'Capitalisation status',
      sub: 'As at 20 October 2026 · R million',
      blocks: [
        {
          type: 'table', span: 8, rows: 2, title: 'By business unit',
          columns: ['Business unit', 'Spend', 'Capitalised', 'Conv. rate', 'AUC', 'FNLD', 'Hold'],
          rows: [
            ['Openserve', 'R867.5', 'R819.9', '67.3%', 'R393.2', 'R57.3', 'R76.6'],
            ['Mobile', 'R1,175.7', 'R1,064.6', '40.2%', 'R1,584.4', 'R542.5', 'R122.6'],
            ['Consumer', 'R3.2', 'R309.1', '96.8%', 'R10.2', 'R5.8', 'R1.8'],
            ['Telkom Properties', 'R17.7', 'R30.2', '46.6%', 'R33.8', 'R0.7', '–'],
            ['Corporate Centre', 'R1.0', 'R4.3', '80.7%', 'R1.0', '–', '–'],
            ['TGIT', 'R67.2', 'R2.6', '3.1%', 'R80.6', '–', 'R3.1'],
            ['Total', 'R2,132.4', 'R2,230.7', '51.4%', 'R2,103.1', 'R606.4', 'R204.2'],
          ],
        },
        {
          type: 'chart', kind: 'bar', span: 4, horizontal: true, title: 'Openserve conversion by region', note: '20 Oct', suffix: '%', max: 100,
          labels: ['NNE', 'KZN', 'WC', 'LNM', 'GT', 'ENF', 'CIM', 'CIO'],
          datasets: [{ label: 'Conversion', data: [83.9, 78.3, 74.9, 74.4, 70.6, 58.6, 30.5, 0] }],
        },
        {
          type: 'list', span: 4, title: 'Prior-year balances',
          items: [
            { title: 'Openserve REL opening balance', text: 'R236.8m of R357.1m capitalised; 385 projects (R114.5m) left.', metric: '67.4%' },
            { title: 'CIM and CIO', text: 'CIM 4% done (R42.9m left); CIO not started (R34.0m).', metric: 'At risk' },
            { title: 'Partial provisions', text: '98 projects, R46.3m (19 Oct).' },
          ],
        },
      ],
    },
    {
      id: 'rpa',
      label: 'Transformation and RPA',
      title: 'Transformation and RPA',
      sub: 'Enhancement projects · September 2026 review',
      blocks: [
        {
          type: 'list', span: 7, rows: 2, title: 'Enhancement projects',
          items: [
            { title: 'Capex data extraction for AUC management', text: 'Output file auto-scheduled and running smoothly. Next: reconcile against the Report 2027 download (6 Sep). Benefit: faster capex reporting.', status: 'test' },
            { title: 'Electronic asset verification', text: 'Existence verification running for IT hardware, IT software, Mobile RAN and POTN. Validating NCAS technologies for SAP. Next: size automatable asset classes by value.', status: 'live' },
            { title: 'Project AUC life cycle analytics', text: 'Dashboard nearing completion and ready to operationalise. Multi-year trend view needed for prediction; group view incl. BCX to align.', status: 'progress' },
          ],
        },
        {
          type: 'steps', span: 5, title: 'Transformation path',
          items: [
            { title: 'Visibility', text: 'AUC dashboard.', status: 'progress' },
            { title: 'Automation', text: 'Extraction and e-verification.', status: 'live' },
            { title: 'Prediction', text: 'Capitalisation forecast.', status: 'proposed' },
            { title: 'AI assistance', text: 'Governed agents.', status: 'proposed' },
          ],
        },
        {
          type: 'list', span: 5, title: 'Benefits being tracked',
          items: [
            { title: 'Turnaround time', text: 'Capex reports produced automatically.' },
            { title: 'Verification effort', text: 'Less reliance on technical verification resources.' },
            { title: 'Analyst capacity', text: 'SMEs freed for critical and strategic work.' },
          ],
        },
      ],
    },
    {
      id: 'way-forward',
      label: 'Way forward',
      title: 'Way forward',
      sub: 'Risks, focus and proposed AI capabilities',
      blocks: [
        {
          type: 'list', span: 5, rows: 2, title: 'Focus areas',
          items: [
            { title: 'Close the capitalisation gap', text: 'R459m below corporate target; Consumer and Openserve the main gaps.' },
            { title: 'Q3 forecast alignment', text: 'Confirm forecast to December with business units.' },
            { title: 'Prior-year REL projects', text: 'CIM and CIO balances need owners and dates.' },
            { title: 'FDA verification', text: 'Complete at the earliest; super ASN write-off memos.' },
            { title: 'Mobile FNLD', text: 'Rising and available for capitalisation.' },
          ],
        },
        {
          type: 'cards', span: 7, cols: 4, title: 'Proposed AI capabilities', note: 'Concepts · not live',
          items: [
            { tag: 'Forecast', title: 'Capex forecast', text: 'Capitalisation timing and variance.' },
            { tag: 'AUC', title: 'AUC lifecycle', text: 'Ageing alerts and settlement follow-up.' },
            { tag: 'Verification', title: 'Asset verification', text: 'Match suggestions and exceptions.' },
            { tag: 'Risk', title: 'FNLD risk', text: 'Early warning on projects.' },
          ],
        },
        {
          type: 'asks', span: 7, title: 'Decisions requested from Telkom', note: 'Owners and dates to agree',
          items: [
            'Agree recovery plan for the capitalisation gap to March 2027.',
            'Assign owners for CIM and CIO prior-year balances.',
            'Approve AUC analytics for operational use, incl. BCX group view.',
          ],
        },
      ],
    },
  ],
}
export default CONFIG
