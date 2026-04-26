export const PERSONAS = [
  {
    id: 'derm',
    label: 'Dermatology & Aesthetics',
    profile:
      'Mid-size practice (3–8 providers), mix of medical dermatology (insurance-based) and cosmetic/aesthetic procedures (cash-pay). High inventory spend on injectables, fillers, and skincare products across multiple suppliers. Revenue typically $2–5M. Office manager handles finances manually or through basic QuickBooks.',
    painPoints: [
      'High-value inventory purchases (injectables, fillers, laser supplies) spread across multiple vendors with no consolidated visibility into total spend or cost comparison.',
      'Card declines or holds on large pharma and supply orders disrupt purchasing and delay procedures.',
      'Receipt tracking and expense reconciliation is manual. Office manager collects paper receipts from multiple supplier orders and enters them into QuickBooks at month-end.',
      'Dual revenue streams (insurance reimbursement + cash-pay cosmetic) create accounting complexity that basic tools don\'t handle well.',
    ],
    positioning: [
      {
        product: 'Nitra Card',
        description:
          'High-limit, no-decline purchasing for large supply orders, with cashback on medical-specific spend. Eliminates the friction of card holds on high-value injectable and pharmaceutical orders.',
      },
      {
        product: 'Marketplace',
        description:
          'AI-powered cost comparison across injectable and supply brands. Consolidate vendor management and surface cost-saving alternatives across your existing supply list.',
      },
      {
        product: 'Spend Management',
        description:
          'Virtual cards per vendor, automated receipt capture, and direct sync with QuickBooks and Xero. Turn month-end reconciliation from a manual scramble into a closed loop.',
      },
    ],
    objections: [
      {
        objection: '"We already have a business credit card."',
        response:
          'Does your current card offer vendor-specific virtual cards, automatic receipt capture, and cashback specifically on medical and pharma purchases? Most generic business cards treat a $15K filler order the same as an office supply run. Nitra is built around how medical practices actually buy.',
      },
    ],
  },
  {
    id: 'ophtho',
    label: 'Ophthalmology / Retina',
    profile:
      'Specialty surgical practice (3–10 providers), often multi-location. High-cost pharmaceutical purchases (anti-VEGF injections can cost $1,800+ per dose). Equipment-intensive (OCT machines, surgical instruments). Revenue typically $3–10M. More complex operations than primary care with dedicated billing staff but fragmented financial systems across locations.',
    painPoints: [
      'Pharmaceutical costs are among the highest of any specialty. A single retina clinic can process hundreds of thousands in drug purchases monthly, often across multiple distributors.',
      'Multi-location operations create visibility gaps. Each office may have its own purchasing workflows, cards, and vendor relationships with no unified view of total spend.',
      'AP workflows are largely manual. Vendor invoices arrive by mail, fax, and email, requiring manual entry and approval across locations.',
      'Reimbursement cycles are long and complex (Medicare, commercial payers, patient cost-sharing), creating cash flow pressure that makes spend optimization critical.',
    ],
    positioning: [
      {
        product: 'AP Automation',
        description:
          'Centralize vendor payments across all locations with automated approvals, invoice matching, and full visibility into payables. Replace the mail/fax/email invoice chaos with a single workflow.',
      },
      {
        product: 'Spend Management',
        description:
          'Location-specific virtual cards with consolidated reporting across all sites. See total spend by vendor, by location, by category in real time instead of reconciling at quarter-end.',
      },
      {
        product: 'Nitra Card',
        description:
          'High-limit purchasing for pharmaceutical orders without declines or holds. Cashback on the high-volume drug spend that defines retina practice economics.',
      },
    ],
    objections: [
      {
        objection: '"We have a billing department that handles this."',
        response:
          'Billing teams focus on revenue collection: claims, insurance, patient payments. Nitra handles the other side — what goes out the door. Vendor payments, supply procurement, and expense tracking are usually the least automated part of a practice\'s back office, even in larger operations.',
      },
    ],
  },
  {
    id: 'ortho',
    label: 'Orthopedics / Surgical',
    profile:
      'Surgical specialty practice (3–8 surgeons), high-value device and implant purchasing. Close relationships with device reps (Stryker, Zimmer, Medtronic). Revenue typically $5–15M. Practices often negotiate implant pricing directly with manufacturers. Administrative complexity around surgical scheduling, device inventory, and insurance pre-authorization.',
    painPoints: [
      'Implant and device purchasing involves complex vendor relationships with negotiated pricing. Practices manage multiple contracts and terms simultaneously without centralized tracking.',
      'Surgical supply orders require coordination between clinical staff (who choose the device) and administrative staff (who manage purchasing and payment) with no shared system connecting clinical decisions to financial workflows.',
      'Prior authorization for procedures creates an administrative bottleneck. Staff spend significant time on the phone with payers, delaying surgical scheduling and revenue.',
      'Expense reconciliation for high-value surgical supplies is error-prone when done manually. Discrepancies between what was ordered, delivered, and billed are common and costly.',
    ],
    positioning: [
      {
        product: 'Marketplace + AP Automation',
        description:
          'Consolidated procurement with automated vendor payment workflows. Match purchase orders to invoices and track implant-level spend by vendor and contract terms.',
      },
      {
        product: 'Spend Management',
        description:
          'Device-specific and vendor-specific virtual cards that create clean spend trails for each supplier relationship. When you negotiate pricing with Stryker, you need data to back it up.',
      },
      {
        product: 'Patient Management (voice AI)',
        description:
          'Automated insurance eligibility checks and scheduling to reduce the pre-authorization bottleneck that delays surgical scheduling and revenue.',
      },
    ],
    objections: [
      {
        objection: '"Our device reps handle procurement for us."',
        response:
          'Device reps manage the clinical relationship, but the financial workflow — invoicing, payment, reconciliation, and spend tracking — still sits with your admin team. Nitra doesn\'t replace your vendor relationships. It automates the payment and tracking layer around them.',
      },
    ],
  },
  {
    id: 'primarycare',
    label: 'Primary Care / Family Medicine',
    profile:
      'Small independent practice (1–5 physicians), high patient volume, thin margins. Revenue largely insurance-dependent (Medicare, Medicaid, commercial payers). Low inventory spend relative to specialties, but high administrative overhead. Often the physician-owner also serves as de facto business manager. Revenue typically $500K–2M per provider.',
    painPoints: [
      'Reimbursement is the dominant financial challenge. The majority of primary care physicians cite it as their top financial concern. Claim denials, prior authorization delays, and payer complexity consume disproportionate staff time.',
      'Physicians spend up to 20 hours per week on administrative paperwork, directly reducing time available for patient care and revenue generation.',
      'Cash flow is tight and unpredictable. Revenue depends on insurance reimbursement timing, which can vary from days to months. Small practices have limited financial buffer to absorb delays.',
      'Scheduling inefficiency driven by phone-based patient booking, manual insurance eligibility checks, and no-shows creates revenue leakage that small practices cannot absorb.',
    ],
    positioning: [
      {
        product: 'Patient Management (voice AI)',
        description:
          'Automated scheduling and insurance eligibility verification reduces front-desk burden and no-show rates. For primary care, this is where Nitra delivers the most immediate time savings.',
      },
      {
        product: 'AP Automation',
        description:
          'Streamline the small but time-consuming vendor payment workflows (medical supplies, cleaning services, office services) that pile up when the physician-owner is also the business manager.',
      },
      {
        product: 'Nitra Card',
        description:
          'Cashback on everyday practice spend creates incremental value on existing operational costs. Not the primary hook, but a tangible benefit from day one.',
      },
    ],
    objections: [
      {
        objection: '"We don\'t spend enough on supplies for a card to matter."',
        response:
          'For primary care, the card is the entry point, not the main value. The real value is reducing the 20 hours per week your physicians spend on admin through automated scheduling, insurance checks, and payment workflows. The cashback is a bonus on spend you\'re already making.',
      },
    ],
  },
]

export const COMPETITIVE = [
  {
    dimension: 'Healthcare-specific platform',
    nitra: 'Yes',
    fintech: 'No — industry-agnostic',
    ap: 'No — horizontal SMB',
    gpo: 'Yes — procurement focus',
  },
  {
    dimension: 'Card + spend management',
    nitra: 'Yes — medical-specific rewards',
    fintech: 'Yes — core product',
    ap: 'No',
    gpo: 'No',
  },
  {
    dimension: 'AP automation',
    nitra: 'Yes — integrated',
    fintech: 'No',
    ap: 'Yes — core product',
    gpo: 'No',
  },
  {
    dimension: 'Procurement marketplace',
    nitra: 'Yes — 100K+ medical products, AI-powered',
    fintech: 'No',
    ap: 'No',
    gpo: 'Yes — group purchasing contracts',
  },
  {
    dimension: 'Patient management / scheduling',
    nitra: 'Yes — voice AI',
    fintech: 'No',
    ap: 'No',
    gpo: 'No',
  },
]
