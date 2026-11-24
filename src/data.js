// CWIP & Asset Management EBR. Source: CWIP & AM MBR, September 2026 review (deck 21 Oct 2026),
// capitalisation status at 20 Oct 2026; minutes 23 Sep 2026; Sept placemat (e-verification coverage).
const CONFIG = {
  key: 'cwip',
  domain: 'Asset Management & Project Accounting',
  period: 'H1 FY27',
  accent: '#0070AD',
  accent2: '#009FE3',
  source: 'AM & PA EBR · September 2026',
  tabs: [
    {
      id: 'agenda', label: 'Agenda', title: "Asset Management and Project Accounting \u00b7 Executive Business Review",
      blocks: [ { type: 'agenda', span: 12, rows: 6, items: [{"label": "Since last EBR", "icon": "History", "tab": "since", "line": "97% asset verification · 59% electronic · capex intensity down"}, {"label": "Capital performance", "icon": "Target", "tab": "performance", "line": "R2,171.7m capitalised YTD Sep · capex spend down 22.5%"}, {"label": "Capital portfolio", "icon": "Layers", "tab": "portfolio", "line": "Total AUC R2,180.8m · CWIP composition and AUC status"}, {"label": "Business units", "icon": "Building2", "tab": "units", "line": "Where the capital sits at 24 Nov · group conversion 52.9% vs 60.3%"}, {"label": "Asset verification", "icon": "ScanLine", "tab": "verification", "line": "97% verified · electronic coverage 34% to 59%"}, {"label": "Automation", "icon": "Bot", "tab": "rpa", "line": "Automation taking over verification and reporting", "who": "Capgemini Transformation"}, {"label": "Transformation and AI", "icon": "Sparkles", "tab": "ai", "line": "From manual verification to capital foresight", "who": "Capgemini Transformation"}, {"label": "Analytics", "icon": "BarChart3", "tab": "analytics", "line": "Capital work in progress, visible every month", "who": "Capgemini Analytics"}, {"label": "Way forward", "icon": "Route", "tab": "next", "line": "Prove the value, then scale · decisions requested"}] } ],
    },
    {
      id: 'since', label: 'Since last EBR', title: 'Optimise capital locked in process',
      blocks: [
        {
          type: 'hero', items: [
            { value: '97%', label: 'Current asset verification', sub: 'Current cycle · 3 pp to full coverage', tone: 'good' },
            { value: '59%', label: 'Electronic asset verification', sub: 'Last EBR: 34% · excludes cable', tone: 'good' },
            { value: '49.8%', label: 'Conversion YTD', sub: 'Above prior year · target 59%', tone: 'warn' },
            { value: '↓22.5%', label: 'Capex spend, H1 FY27 vs H1 FY26', sub: 'R2,870m to R2,223m · intensity 13.0% to 9.9%' },
          ],
        },
        {
          type: 'journey', span: 12, rows: 4, title: 'Where we were, where we are · click a row', thenLabel: 'Last EBR', nowLabel: 'Now · Sep 2026 review',
          items: [
            { icon: 'ScanLine', label: 'Electronic asset verification coverage', then: '34%', now: '59%', status: 'live', detail: { text: 'Excludes cable. IT software and Metro Ethernet & POTN at 89%.' } },
            { icon: 'Cpu', label: 'Technologies in e-verification', then: 'IT hardware, IT software', now: '+ Mobile RAN, POTN', status: 'live', detail: { text: 'Next: NCAS – Tienet, Tuenet, Tcnet, Tnet, Tmnet.' } },
            { icon: 'Layers', label: 'AUC balance', then: 'R2,208.7m opening', now: 'R2,180.8m Sep 2026', status: 'progress' },
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
            { value: 'R2,143.8m', label: 'Capex spend YTD', sub: '31% of R7.06bn after 6 months', detail: { text: 'R548m below prior year at the same point (Sep 2025: 43% of plan).' } },
            { value: '97%', label: 'Current asset verification', sub: 'Current cycle · 3 pp to full coverage', tone: 'good' },
          ],
        },
        {
          type: 'chart', kind: 'bar', span: 5, title: 'Capitalised vs corporate target', note: 'R million', suffix: 'm',
          labels: ['Mobile', 'Openserve', 'Consumer', 'Properties', 'Corp Centre', 'TGIT'],
          datasets: [
            { label: 'Actual', data: [1032.1, 798.0, 306.3, 28.4, 4.3, 2.6], color: 'accent' },
            { label: 'Corporate target', data: [1013.4, 904.4, 588.1, 82.4, 31.8, 11.3], color: '#C9D1DA' },
          ],
        },
        {
          type: 'chart', kind: 'bar', span: 3, title: 'Capex spend and intensity', note: 'R million', suffix: 'm',
          labels: ['H1 FY26 · 13.0%', 'H1 FY27 · 9.9%'],
          datasets: [{ label: 'Capex', data: [2870, 2223], colors: ['#B8C2CC', 'accent'] }],
          footnote: '↓22.5% capex spend · intensity 13.0% to 9.9%',
        },
        {
          type: 'rings', span: 4, title: 'Conversion rate vs target', items: [
            { pct: 49.8, value: '49.8%', label: 'Group', sub: 'Target 59%', color: '#E07B00' },
            { pct: 68.5, value: '68.5%', label: 'Openserve', sub: 'Corp 77% · internal 66% met', color: 'accent' },
            { pct: 37.9, value: '37.9%', label: 'Mobile', sub: 'Target 36% · met', color: 'accent2' },
          ],
        },
      ],
    },
    {
      id: 'verification', label: 'Asset verification', title: 'Asset verification, H1 FY27',
      blocks: [
        {
          type: 'hero', items: [
            { value: '97%', label: 'Current asset verification', sub: 'Current cycle · 3 pp to full coverage', tone: 'good' },
            { value: '59%', label: 'Electronic asset verification', sub: 'Last EBR: 34% · excludes cable', tone: 'good' },
            { value: '89%', label: 'IT software · Metro Ethernet / POTN', sub: 'Electronic coverage' },
            { value: '4', label: 'Technologies verified in SAP', sub: 'IT hardware, software, RAN, POTN' },
          ],
        },
        {
          type: 'chart', kind: 'bar', span: 4, title: 'Electronic asset verification', note: '+25 percentage points', suffix: '%', max: 100,
          labels: ['Previous review', 'H1 FY27'],
          datasets: [{ label: 'Coverage', data: [34, 59], colors: ['#B8C2CC', 'accent'] }],
          footnote: '34% to 59% · latest figure excludes cable',
        },
        {
          type: 'chart', kind: 'bar', span: 4, horizontal: true, title: 'Technology coverage', note: 'Latest review', suffix: '%', max: 100,
          labels: ['IT hardware', 'IT software', 'Metro Ethernet / POTN'],
          datasets: [{ label: 'Coverage', data: [26, 89, 89], colors: ['#FECB5E', 'accent', 'accent2'] }],
          footnote: 'MSAN/ISAM and GPON classes reported verified',
        },
        {
          type: 'image', span: 4, title: 'Asset base value per BU', src: '/asset-base-bu.png', alt: 'Asset base value per business unit: Consumer, Corporate, Openserve and Properties',
          footnote: 'Consumer · Corporate · Openserve · Properties',
        },
      ],
    },
    {
      id: 'portfolio', label: 'Capital portfolio', title: 'The capital portfolio, September 2026',
      blocks: [
        {
          type: 'hero', items: [
            { value: 'R2,208.7m', label: 'Opening balance AUC' },
            { value: 'R2,143.8m', label: 'Capex' },
            { value: 'R2,171.7m', label: 'Capitalisation YTD', tone: 'good' },
            { value: 'R2,180.8m', label: 'Total AUC Sep 2026', sub: 'On hold R58.8m' },
          ],
        },
        {
          type: 'chart', kind: 'bar', span: 6, rows: 4, horizontal: true, title: 'CWIP composition', note: 'R million · CWIP total R2,094.1m', suffix: 'm',
          labels: ['AUC', 'Build not ready for capitalisation (FNLD)', 'Build ready for capitalisation (TECO)'],
          datasets: [{ label: 'R million', data: [1628.18, 465.50, 0.43], colors: ['accent', '#FECB5E', 'accent2'] }],
        },
        {
          type: 'chart', kind: 'bar', span: 6, rows: 4, horizontal: true, title: 'AUC status', note: 'R million · AUC R1,628.2m', suffix: 'm',
          labels: ['Active AUC', 'Build on hold', 'In plan'],
          datasets: [{ label: 'R million', data: [1407.19, 216.40, 4.60], colors: ['accent', '#FECB5E', '#B8C2CC'] }],
        },
      ],
    },
    {
      id: 'units', label: 'Business units', title: 'Where the capital sits, 24 November 2026',
      blocks: [
        {
          type: 'units', span: 7, rows: 2, title: 'Select a business unit', note: 'R million · target = November 2026 conversion target',
          data: {
            Openserve: { conv: 67.9, target: 73.3, stats: [['Spend', 'R987.3m'], ['Capitalised', 'R909.4m'], ['AUC', 'R422.2m'], ['FNLD', 'R51.1m'], ['On hold', 'R50.2m']] },
            Mobile: { conv: 46.2, target: 50.0, stats: [['Spend', 'R1,434.1m'], ['Capitalised', 'R1,344.2m'], ['AUC', 'R1,562.8m'], ['FNLD', 'R512.5m'], ['On hold', 'R122.6m']] },
            Consumer: { conv: 59.4, target: 92.4, stats: [['Spend', 'R218.7m'], ['Capitalised', 'R317.4m'], ['AUC', 'R217.4m'], ['FNLD', 'R0.0m'], ['On hold', 'R1.8m']] },
            'Telkom Properties': { conv: 48.0, target: 60.4, stats: [['Spend', 'R16.0m'], ['Capitalised', 'R30.3m'], ['AUC', 'R32.0m'], ['FNLD', 'R0.4m'], ['On hold', 'R0.1m']] },
            'Corporate Centre': { conv: 80.6, target: 86.4, stats: [['Spend', 'R1.1m'], ['Capitalised', 'R4.3m'], ['AUC', 'R1.0m'], ['FNLD', 'R0.0m'], ['On hold', 'R0.0m']] },
            TGIT: { conv: 3.1, target: 2.9, stats: [['Spend', 'R67.8m'], ['Capitalised', 'R2.6m'], ['AUC', 'R81.2m'], ['FNLD', 'R0.0m'], ['On hold', 'R3.1m']] },
            Group: { conv: 52.9, target: 60.3, stats: [['Spend', 'R2,725.0m'], ['Capitalised', 'R2,608.2m'], ['AUC', 'R2,316.6m'], ['FNLD', 'R563.9m'], ['On hold', 'R177.9m']] },
          },
        },
        {
          type: 'chart', kind: 'bar', span: 5, horizontal: true, title: 'Openserve conversion by region', note: '24 Nov 2026', suffix: '%', max: 100,
          labels: ['NNE', 'WC', 'KZN', 'LNM', 'GT', 'ENF', 'CIM', 'CIO'],
          datasets: [{ label: 'Conversion', data: [82.0, 76.9, 76.6, 75.7, 70.6, 59.8, 30.3, 0], colors: ['accent', 'accent', 'accent', 'accent', 'accent', '#E07B00', '#D84851', '#D84851'] }],
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
      id: 'analytics', owner: { name: "Dani Viljoen", role: "Capgemini Analytics" }, label: 'Analytics', title: 'Capital work in progress, visible every month',
      blocks: [
        {
          type: 'cards', span: 7, rows: 3, cols: 1, list: true, title: 'Capgemini Analytics · click for detail',
          items: [
            { icon: 'LineChart', name: 'AUC analytics model', line: 'Open capital projects, accumulated costs, ageing', status: 'progress', team: 'Analytics', detail: { text: 'Reports on capital work in progress: open projects, costs and ageing.', rows: [['Supports', 'Timely capitalisation of completed assets'], ['Value', 'Less reporting effort, visibility of long-outstanding CWIP']] } },
            { icon: 'Building2', name: 'Group view including BCX', line: 'One AUC view across entities', status: 'progress', team: 'Analytics + Transformation' },
            { icon: 'TrendingUp', name: 'Capital portfolio intelligence', line: 'Capex portfolio and allocation insight', status: 'planned', team: 'Analytics', detail: { text: 'Decision intelligence use case for Capital Management from the Capgemini Analytics use-case map.' } },
          ],
        },
        {
          type: 'rings', span: 5, rows: 3, size: 92, title: 'Data maturity · next frontier is prescriptive and cognitive',
          items: [
            { pct: 100, value: '100%', label: 'Descriptive to predictive', sub: 'Hindsight, insight, foresight' },
            { pct: 20, value: '20%', label: 'Prescriptive', sub: 'What should we do?', color: 'accent2' },
            { pct: 5, value: '5%', label: 'Cognitive', sub: 'Controlled execution', color: 'accent2' },
          ],
        },
      ],
    },
    {
      id: 'rpa', owner: {   "name": "Mohamed Nomani",   "role": "Capgemini Transformation" }, label: 'Automation', title: 'Automation is taking over verification and reporting',
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
        "role": "Capgemini Transformation"
      },
      "title": "From manual verification to capital foresight",
      "blocks": [
        {
          "type": "hero",
          "items": [
            {
              "value": "34 → 59%",
              "label": "Electronic asset verification coverage",
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
          "title": "Capgemini Transformation portfolio · done, under way, next 90 days",
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
          items: ['Agree the recovery plan to March 2027', 'Owners for CIM and CIO prior-year balances', 'Enable Microsoft enterprise AI access for the Shared Services team', 'Agree the capitalisation forecast proof of value'],
        },
      ],
    },
  ],
}
const ORDER = ['agenda', 'since', 'performance', 'portfolio', 'units', 'verification', 'rpa', 'ai', 'analytics', 'next']
CONFIG.tabs = ORDER.map(id => CONFIG.tabs.find(t => t.id === id))
export default CONFIG
