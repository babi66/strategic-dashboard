export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export interface ComplianceRisk {
  id: string;
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
  action: string;
}

export interface FinancialRow {
  source: string;
  capacity: string;
  tariff: string;
  annualRevenue: string;
  purpose: string;
}

export interface Slide {
  id: number;
  title: string;
  points: string[];
}

export const strategicData = {
  kpis: [
    { label: "Current Enrolled Students", value: "835", subtext: "AY 2025/2026 baseline baseline" },
    { label: "Core Tuition Revenue", value: "15,865,000 ETB", subtext: "19,000 ETB / student / year" },
    { label: "Target Total Revenue", value: "21,217,000+ ETB", subtext: "Self-reliance target capacity" },
    { label: "Grade 9 Reject Rate", value: "63.5%", subtext: "462 candidates turned away" },
  ] as Metric[],

  complianceRisks: [
    {
      id: "canon-803",
      title: "Canon 803 Branding Identity Deficit",
      description: "Current administrative stamp & street tapela omit the word 'Catholic' and bear legacy congregation details.",
      severity: "high",
      action: "Register identity: 'Comboni Catholic Senior Secondary School'.",
    },
    {
      id: "legacy-software",
      title: "14-Year Legacy Database Fragility",
      description: "Database built in 2012 G.C. operates with zero modernization and single-technician dependency.",
      severity: "high",
      action: "Modernize database architecture prior to academic launch.",
    },
    {
      id: "dining-crisis",
      title: "0% Baseline Student Dining Infrastructure",
      description: "800+ students lack sheltered dining areas during rainy seasons, straining classroom sanitation.",
      severity: "high",
      action: "Build dedicated student dining hall.",
    },
    {
      id: "transit-zero",
      title: "0 Vehicle Baseline Operational Deficit",
      description: "Zero management pick-up trucks or director motorbikes, creating severe risk during student medical emergencies.",
      severity: "medium",
      action: "Deploy dual-zone school bus fleet and emergency transport vehicles.",
    },
    {
      id: "land-grabbing",
      title: "Asphalt-Front Municipal Expropriation Risk",
      description: "Prime street-front plot on double asphalt in Hawassa Piasa risks municipal re-allocation if left vacant.",
      severity: "high",
      action: "Mobilize 6 shipping containers as retail storefront placeholders.",
    },
  ] as ComplianceRisk[],

  financialMatrix: [
    {
      source: "Core Student Tuition",
      capacity: "835 Students",
      tariff: "19,000 ETB / yr",
      annualRevenue: "15,865,000 ETB",
      purpose: "Core operations & faculty payroll",
    },
    {
      source: "Faculty Housing Block (28 Units)",
      capacity: "28 Units",
      tariff: "7,000 ETB / mo",
      annualRevenue: "2,352,000 ETB",
      purpose: "Bank loan debt service → Pastoral Scholarships",
    },
    {
      source: "Urban School Bus Fleet (Hawassa)",
      capacity: "250 Far-Commuters",
      tariff: "1,200 ETB / mo",
      annualRevenue: "3,000,000 ETB",
      purpose: "Fleet CapEx, fuel, driver payroll",
    },
    {
      source: "Perimeter Container Shops (Phase 2)",
      capacity: "6 Retail Shops",
      tariff: "Retail Benchmark",
      annualRevenue: "Variable Target",
      purpose: "Gate security block & visitor restrooms",
    },
  ] as FinancialRow[],

  slides: [
    {
      id: 1,
      title: "Slide 1: Introduction and Welcome",
      points: [
        "Your Excellency, thank you for scheduling this time to review my first ninety days in office.",
        "This report combines our operational updates with an MBA-modeled financial plan.",
        "Our ultimate goal is complete long-term financial self-reliance for the school under your corporate Diocesan ownership."
      ]
    },
    {
      id: 2,
      title: "Slide 2: The Transition Timeline",
      points: [
        "During my first two months, I worked closely on the ground with Sr. Lucia to ensure a smooth handoff.",
        "Following her departure one month ago, I have been managing the vacant Principal's office workloads.",
        "We are running daily operations in collaboration with the Vicariate Educational Desk and the Academic Director.",
        "Our team has already successfully completed a one hundred percent verified asset inventory ledger."
      ]
    },
    {
      id: 3,
      title: "Slide 3: Recent Crisis Management (Grade 9 Intake)",
      points: [
        "This year, we faced an extraordinary demand of 712 registered applicants for Grade Nine.",
        "Through structural optimizations, we expanded our final intake and safely admitted 260 students.",
        "This created a massive wave of parental complaints, appeals, and intense pleading from overflow families.",
        "Working with the Head Office and Academic Director, we successfully processed and settled all grievances.",
        "We maintained absolute grading integrity, but this crisis proves the immediate market demand for campus expansion."
      ]
    },
    {
      id: 4,
      title: "Slide 4: Long-Term Vision (K-12 Quality Pipeline)",
      points: [
        "To permanently eliminate public admissions chaos, we must look inward to our internal elementary pipeline.",
        "We propose focusing administrative energy on Kidane Meheret Kindergarten & Elementary (Grades 1 to 8).",
        "By ensuring strict academic quality control early, we guarantee elite secondary outcomes.",
        "We will restructure the entrance exam to give absolute priority seating to our internal graduates.",
        "This closed-loop system eliminates public complaints and parental pleading completely."
      ]
    },
    {
      id: 5,
      title: "Slide 5: Urgent Institutional Risks & Compliance Gaps",
      points: [
        "Our stamp and signpost completely omit the word 'Catholic', which violates Canon 803.",
        "I request authorization to formally update branding templates to 'Comboni Catholic Senior Secondary School'.",
        "Our street signpost is improperly fixed, creating an active citation risk with the Hawassa Education Desk.",
        "We operate at a 0% baseline for student dining infrastructure and have a 0-vehicle footprint.",
        "This leaves the school entirely vulnerable during sudden student medical emergencies."
      ]
    },
    {
      id: 6,
      title: "Slide 6: Priority Faculty Housing Block",
      points: [
        "Our most critical human resource threat is talent poaching by competing regional schools.",
        "Competitors are offering aggressive cash salary increases to lure away our 28 evaluated teachers.",
        "We propose constructing a 28-unit Faculty Housing Block directly on our school site.",
        "Charging a stable internal rate of 7,000 ETB/month shields teachers from market rent inflation.",
        "This creates absolute loyalty, eliminates daily travel downtime, and ensures morning classes start on time."
      ]
    },
    {
      id: 7,
      title: "Slide 7: Capital Procurement & Direct-Labor System",
      points: [
        "We will use a Direct-Labor Foreman System, eliminating commercial contractors to save 20% to 30%.",
        "We will hire one master foreman for technical control and flexible daily labor for physical execution.",
        "We will secure a local commercial bank bridge loan paid down by the 196,000 ETB monthly faculty rent stream.",
        "Simultaneously, we will apply for European grants to liquidate the bank loan and extract pure capital."
      ]
    },
    {
      id: 8,
      title: "Slide 8: Street-Front Defense & Container Placeholder Strategy",
      points: [
        "Developing permanent structures on our high-traffic street front requires a licensed structural engineer.",
        "Leaving this prime space vacant creates a high risk of municipal land-grabbing.",
        "We will position our 6 idle shipping containers along the asphalt perimeter fence as functional rental shops.",
        "To protect our campus moral environment, our lease strictly bans alcohol, tobacco, and inappropriate items.",
        "This establishes legal possession and generates instant monthly cash flow while blueprints are drawn."
      ]
    },
    {
      id: 9,
      title: "Slide 9: Two-Tiered Pastoral Scholarship Architecture",
      points: [
        "Our generated housing revenues will permanently finance our charitable social mission.",
        "We will recruit low-income students directly at the Vicariate level across all 20 parishes.",
        "We will also select brilliant candidates from local poorest-of-the-poor families in our immediate community.",
        "Selection will be strictly merit-driven, targeting brilliant students who cannot afford fees.",
        "Our program enforces an absolute non-discrimination policy regarding religion, culture, or sex."
      ]
    },
    {
      id: 10,
      title: "Slide 10: Consolidated Financial Reality Dashboard",
      points: [
        "Current 835 student fees bring in 15.86 million ETB.",
        "Proposed 28 faculty housing units add over 2.35 million ETB annually.",
        "Proposed dual-zone school bus fleet targets an additional 3.0 million ETB annually.",
        "Combined, this shifts our annual revenue capacity to over 21.2 million ETB.",
        "I respectfully request your pastoral guidance, modifications, and blessing to proceed with this work."
      ]
    }
  ] as Slide[]
};