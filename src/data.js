// CWIP & Asset Management EBR. Source: CWIP & AM MBR, September 2026 review (deck 21 Oct 2026),
// capitalisation status at 20 Oct 2026; minutes 23 Sep 2026; Sept placemat (e-verification coverage).
const CONFIG = {
  key: 'cwip',
  domain: 'CWIP & Asset Management',
  period: 'H1 FY27',
  accent: '#009FE3',
  accent2: '#FF6F4D',
  source: 'CWIP & AM MBR, September 2026 review (21 Oct 2026) · status at 20 Oct 2026',
  tabs: [
    {
      id: 'since', label: 'Since last EBR', title: 'Since the last EBR',
      blocks: [
        {
          type: 'hero', items: [
            { value: '59%', label: 'Electronic verification', sub: 'Last EBR: 34%', tone: 'good' },
            { value: '4', label: 'Technologies verified electronically', sub: 'IT HW · IT SW · Mobile RAN · POTN' },
            { value: 'R105m', label: 'AUC reduced', sub: 'R2,208.7m opening to R2,103.1m (20 Oct)', tone: 'good' },
            { value: '49.8%', label: 'Conversion YTD', sub: 'Above prior year · target 59%', tone: 'warn' },
          ],
        },
        {
          type: 'journey', span: 12, rows: 4, title: 'Where we were, where we are · click a row', thenLabel: 'Last EBR', nowLabel: 'Now · Sep 2026 review',
          items: [
            { icon: 'ScanLine', label: 'Electronic verification coverage', then: '34%', now: '59%', status: 'live', detail: { text: 'Excludes cable. IT software and Metro Ethernet & POTN at 89%.' } },
            { icon: 'Cpu', label: 'Technologies in e-verification', then: 'IT hardware, IT software', now: '+ Mobile RAN, POTN', status: 'live', detail: { text: 'Next: NCAS – Tienet, Tuenet, Tcnet, Tnet, Tmnet.' } },
            { icon: 'Layers', label: 'AUC balance', then: 'R2,208.7m', now: 'R2,103.1m', status: 'progress' },
            { icon: 'DatabaseZap', label: 'Capex data extraction', then: 'In test', now: 'Auto-scheduled', status: 'test', detail: { text: 'Output file runs on schedule; reconciling against the Report 2027 download.' } },
            { icon: 'LineChart', label: 'AUC life cycle analytics', then: 'Daily dashboard', now: 'Ready to operationalise', status: 'progress' },
            { icon: 'Target', label: 'Capitalisation vs corporate target', then: 'FY26: >74% conversion', now: 'R459m behind', tone: 'warn', status: 'risk', detail: { text: 'YTD Sep: R2.17bn capitalised vs R2.63bn corporate target; only R43m below prior year. Mobile on target; Consumer and Openserve the gaps.' } },
          ],
        },
      ],
    },
    {
      id: 'performance', label: 'Capital performance', title: 'Capitalisation, YTD September 2026',
      blocks: [
        {
          type: 'hero', items: [
            { value: 'R2.17bn', label: 'Capitalised YTD', sub: 'R459m below corporate target', detail: { text: 'Only R43m below the prior year. Mobile achieved target; Consumer (excl. Mobile) R281m below; Openserve R106m below corporate but met its internal target.' } },
            { value: '49.8%', label: 'Group conversion', sub: 'Target 59% · 51.4% at 20 Oct', tone: 'warn' },
            { value: 'R2.1bn', label: 'Capex spend', sub: '31% of R7.06bn after 6 months', detail: { text: 'R548m below prior year at the same point (Sep 2025: 43% of plan).' } },
            { value: '92%', label: 'Asset lines verified', sub: 'Across the 2-year cycle', tone: 'good' },
          ],
        },
        {
          type: 'chart', kind: 'bar', span: 7, title: 'Capitalised vs corporate target', note: 'R million', suffix: 'm',
          labels: ['Mobile', 'Openserve', 'Consumer', 'Properties', 'Corp Centre', 'TGIT'],
          datasets: [
            { label: 'Actual', data: [1032.1, 798.0, 306.3, 28.4, 4.3, 2.6], color: 'accent' },
            { label: 'Corporate target', data: [1013.4, 904.4, 588.1, 82.4, 31.8, 11.3], color: '#C9D1DA' },
          ],
        },
        {
          type: 'rings', span: 5, title: 'Conversion rate vs target', items: [
            { pct: 49.8, value: '49.8%', label: 'Group', sub: 'Target 59%', color: '#E07B00' },
            { pct: 68.5, value: '68.5%', label: 'Openserve', sub: 'Corp 77% · internal 66% met', color: 'accent' },
            { pct: 37.9, value: '37.9%', label: 'Mobile', sub: 'Target 36% · met', color: 'accent2' },
          ],
        },
      ],
    },
    {
      id: 'units', label: 'Business units', title: 'Where the capital sits, 20 October 2026',
      blocks: [
        {
          type: 'units', span: 7, rows: 2, title: 'Select a business unit', note: 'R million · target = FY27 corporate conversion',
          data: {
            Openserve: { conv: 67.3, target: 78, stats: [['Spend', 'R867.5m'], ['Capitalised', 'R819.9m'], ['AUC', 'R393.2m'], ['FNLD', 'R57.3m'], ['On hold', 'R76.6m']] },
            Mobile: { conv: 40.2, target: 64, stats: [['Spend', 'R1,175.7m'], ['Capitalised', 'R1,064.6m'], ['AUC', 'R1,584.4m'], ['FNLD', 'R542.5m'], ['On hold', 'R122.6m']] },
            Consumer: { conv: 96.8, target: 91, stats: [['Spend', 'R3.2m'], ['Capitalised', 'R309.1m'], ['AUC', 'R10.2m'], ['FNLD', 'R5.8m'], ['On hold', 'R1.8m']] },
            'Telkom Properties': { conv: 46.6, target: 72, stats: [['Spend', 'R17.7m'], ['Capitalised', 'R30.2m'], ['AUC', 'R33.8m'], ['FNLD', 'R0.7m'], ['On hold', 'R0.0m']] },
            TGIT: { conv: 3.1, target: 26, stats: [['Spend', 'R67.2m'], ['Capitalised', 'R2.6m'], ['AUC', 'R80.6m'], ['FNLD', 'R0.0m'], ['On hold', 'R3.1m']] },
            Group: { conv: 51.4, target: 69, stats: [['Spend', 'R2,132.4m'], ['Capitalised', 'R2,230.7m'], ['AUC', 'R2,103.1m'], ['FNLD', 'R606.4m'], ['On hold', 'R204.2m']] },
          },
        },
        {
          type: 'chart', kind: 'bar', span: 5, horizontal: true, title: 'Openserve conversion by region', suffix: '%', max: 100,
          labels: ['NNE', 'KZN', 'WC', 'LNM', 'GT', 'ENF', 'CIM', 'CIO'],
          datasets: [{ label: 'Conversion', data: [83.9, 78.3, 74.9, 74.4, 70.6, 58.6, 30.5, 0], colors: ['accent', 'accent', 'accent', 'accent', 'accent', '#E07B00', '#D84851', '#D84851'] }],
        },
        {
          type: 'tiles', span: 5, cols: 4, title: 'Prior-year projects still open', note: 'Click for detail',
          items: [
            { label: 'Openserve REL done', value: '67%', tone: 'amber', detail: { text: 'R236.8m of R357.1m capitalised; 385 projects (R114.5m) left.' } },
            { label: 'CIM done', value: '4%', tone: 'red', detail: { text: '48 projects, R42.9m left.' } },
            { label: 'CIO done', value: '0%', tone: 'red', detail: { text: '8 projects, R34.0m left.' } },
            { label: 'Partial provisions', value: '98', tone: 'grey', detail: { text: '98 projects, R46.3m (19 Oct).' } },
          ],
        },
      ],
    },
    {
      id: 'rpa', owner: {   "name": "Mohamed Nomani",   "role": "WNS Transformation · part of Capgemini" }, label: 'Automation', title: 'Automation is taking over verification and reporting',
      blocks: [
        {
          type: 'cards', span: 12, cols: 3, rows: 3, title: 'Enhancement projects · click for detail',
          items: [
            { icon: 'ScanLine', name: 'Electronic asset verification', line: 'IT hardware · IT software · Mobile RAN · POTN', status: 'live', metric: '4 technologies', detail: { text: 'Existence verification runs in SAP. Full rerun of all SAP verifications completed in August and September.', rows: [['Next', 'NCAS: Tienet, Tuenet, Tcnet, Tnet, Tmnet'], ['Benefit', 'Less reliance on technical verification resources; more up-to-date status']] } },
            { icon: 'DatabaseZap', name: 'Capex data extraction', line: 'Output file auto-scheduled and monitored', status: 'test', metric: 'Auto-scheduled', detail: { rows: [['Next', 'Reconcile output against the Report 2027 download (6 Sep)'], ['Benefit', 'Faster capex reporting; SMEs freed for analysis']] } },
            { icon: 'LineChart', name: 'AUC life cycle analytics', line: 'Dashboard ready to operationalise', status: 'progress', metric: 'Near complete', detail: { rows: [['Next', 'Align group view incl. BCX'], ['Why it matters', 'Multi-year AUC history is the base for prediction']] } },
          ],
        },
        {
          type: 'shift', span: 5, rows: 2, title: 'Verification shift',
          items: [{ label: 'Electronic verification coverage (excl. cable)', from: '34%', to: '59%' }, { label: 'IT software · Metro Ethernet & POTN coverage', from: '–', to: '89%' }],
        },
        {
          type: 'tiles', span: 7, rows: 2, cols: 5, title: 'Next technologies for electronic verification',
          items: [
            { label: 'NCAS', value: 'Tienet', tone: 'grey' }, { label: 'NCAS', value: 'Tuenet', tone: 'grey' },
            { label: 'NCAS', value: 'Tcnet', tone: 'grey' }, { label: 'NCAS', value: 'Tnet', tone: 'grey' }, { label: 'NCAS', value: 'Tmnet', tone: 'grey' },
          ],
        },
      ],
    },
    {
      "id": "ai",
      "label": "Transformation and AI",
      "owner": {
        "name": "Mohamed Nomani",
        "role": "WNS Transformation · part of Capgemini"
      },
      "title": "From manual verification to capital foresight",
      "blocks": [
        {
          "type": "hero",
          "items": [
            {
              "value": "34 → 59%",
              "label": "Electronic verification coverage",
              "sub": "Excl. cable",
              "tone": "good"
            },
            {
              "value": "4",
              "label": "Technologies verified in SAP",
              "sub": "IT hardware, software, RAN, POTN",
              "tone": "good"
            },
            {
              "value": "Auto",
              "label": "Capex data extraction",
              "sub": "Scheduled and monitored"
            },
            {
              "value": "Next",
              "label": "Capitalisation forecast",
              "sub": "On AUC history"
            }
          ]
        },
        {
          "type": "track",
          "span": 12,
          "rows": 2,
          "title": "Automation to AI, step by step · where the capitalisation forecast is today",
          "at": 1
        },
        {
          "type": "waves",
          "big": true,
          "span": 12,
          "rows": 4,
          "title": "WNS Transformation portfolio · done, under way, next 90 days",
          "items": [
            {
              "when": "Done · live at Telkom",
              "name": "Delivered",
              "tone": "done",
              "items": [
                "Electronic asset verification on 4 technologies",
                "AUC life-cycle analytics with Analytics"
              ]
            },
            {
              "when": "Under way",
              "name": "Being delivered now",
              "tone": "doing",
              "items": [
                "NCAS electronic verification (5 networks)",
                "Capex extraction: reconcile and move to production",
                "AUC analytics including BCX"
              ]
            },
            {
              "when": "Next 90 days",
              "name": "What we will prove next",
              "tone": "next",
              "items": [
                "Prove a capitalisation forecast on AUC history",
                "Flag projects likely to miss capitalisation",
                "Measure forecast against actual"
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'next', label: 'Way forward', title: 'Prove the value, then scale',
      blocks: [
        {
          type: 'waves', span: 8, rows: 2, title: 'Roadmap',
          items: [
            { when: '0–12 months', name: 'Foundation', items: ['Close the R459m capitalisation gap', 'Operationalise AUC analytics (incl. BCX)', 'Capex extraction to production', 'NCAS electronic verification'] },
            { when: '1–3 years', name: 'Prediction', items: ['Capitalisation forecast pilot', 'FNLD and hold risk signals', 'Validated business results'] },
            { when: '3–5 years', name: 'Governed agents', items: ['Approved agent workflows', 'Automated MBR commentary', 'Measured outcomes'] },
          ],
        },
        {
          type: 'asks', span: 4, rows: 2, title: 'Decisions requested from Telkom',
          items: ['Agree the recovery plan to March 2027', 'Owners for CIM and CIO prior-year balances', 'Sponsor the capitalisation forecast pilot'],
        },
      ],
    },
  ],
}
export default CONFIG
