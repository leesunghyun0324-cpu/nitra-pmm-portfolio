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
          'Consolidated procurement across pharma and supply categories. Centralize vendor management and surface spend visibility across your existing supplier list.',
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

export const SCENARIOS = [
  { id: 'cold', label: 'Cold Outreach Email', kind: 'email' },
  { id: 'discovery', label: 'Discovery Call Opening', kind: 'speech' },
  { id: 'followup', label: 'Follow-Up After Demo', kind: 'email' },
]

export const PITCHES = {
  derm: {
    cold: {
      subject: 'Quick question about your supply spend',
      body: `Hi Dr. [Name],

I work with dermatology and aesthetics practices that are managing high-volume injectable and filler orders across multiple suppliers. One thing we hear constantly is that reconciling receipts from 10+ vendors at month-end is a time sink that falls on the office manager.

Nitra is a financial platform built specifically for medical practices. Our clients in aesthetics typically consolidate their supplier payments through virtual vendor-specific cards with automatic receipt capture, and earn cashback on the pharma and medical spend they are already making.

Would a 15-minute call this week make sense? Happy to show you how practices similar to yours are handling this.

Best,
[Rep Name]`,
    },
    discovery: {
      body: `Thanks for taking the time. I know your schedule is packed, so I'll keep this focused. We work with a lot of dermatology and aesthetics practices, and the pattern we see is pretty consistent: you're ordering injectables and supplies from multiple vendors, your office manager is tracking receipts manually, and at month-end it's a scramble to reconcile everything in QuickBooks. Does that sound like what you're dealing with, or is your setup different?`,
    },
    followup: {
      subject: 'Following up — your supply spend and receipt workflow',
      body: `Hi Dr. [Name],

Thanks for the time today. Based on what you shared, two things stood out:

First, the card declines on large filler orders. Nitra's card is built for medical purchasing, so high-value pharmaceutical and supply orders go through without holds or flags.

Second, the manual receipt tracking across your vendors. With vendor-specific virtual cards, every transaction is automatically categorized and synced to QuickBooks. No more collecting paper receipts at month-end.

I can set up a quick pilot with your top 2–3 suppliers to show the difference. Would that be worth exploring?

Best,
[Rep Name]`,
    },
  },
  ophtho: {
    cold: {
      subject: 'Managing spend across multiple locations',
      body: `Hi Dr. [Name],

I've been speaking with ophthalmology and retina practices that are running multi-location operations, and one challenge keeps coming up: each site has its own vendor relationships, its own purchasing workflows, and its own stack of invoices. Getting a unified view of what you're actually spending across locations is harder than it should be.

Nitra is a financial platform built for medical practices. We centralize vendor payments, AP workflows, and spend tracking across all your locations into one dashboard, so you can see total spend by vendor, by site, and by category in real time.

Would it be worth a brief conversation to see if this applies to your practice?

Best,
[Rep Name]`,
    },
    discovery: {
      body: `A multi-location retina practice we work with recently spent the better part of three weeks reconstructing their Q4 vendor spend manually because each site was running its own purchasing workflow. They aren't unusual — that fragmentation is the rule, not the exception, in multi-site ophthalmology. Before I get into how Nitra handles it, I want to understand your setup. How are you tracking spend across locations today?`,
    },
    followup: {
      subject: 'Following up — multi-location visibility',
      body: `Hi Dr. [Name],

Great speaking with you today. Two things from our conversation that Nitra can address directly:

First, the invoice workflow. You mentioned vendor invoices arriving by mail, fax, and email across locations with manual entry for each. Nitra's AP automation consolidates that into a single approval workflow with invoice matching and full audit trails.

Second, the lack of cross-location spend visibility. With Nitra, you'd see consolidated reporting across all sites — by vendor, by location, by category — in real time instead of reconstructing it quarterly.

Happy to set up a walkthrough with your office managers if that would be helpful.

Best,
[Rep Name]`,
    },
  },
  ortho: {
    cold: {
      subject: 'Tracking implant spend across vendors',
      body: `Hi Dr. [Name],

I've been talking with orthopedic and surgical practices about how they manage the financial side of device and implant purchasing. The clinical relationships with device reps are strong, but the back-office workflow around invoicing, payment tracking, and spend reconciliation is usually still manual and fragmented.

Nitra is a financial platform for medical practices. We help surgical practices track implant-level spend by vendor and contract terms, automate vendor payments, and create clean spend data you can use when negotiating pricing.

Would a short call make sense to see if this is relevant to how your practice operates?

Best,
[Rep Name]`,
    },
    discovery: {
      body: `Quick question to start. Of the device vendors you work with most, how many of them invoice you the same way? In our experience, surgical practices end up managing five to ten different invoicing formats across implant suppliers, with most of the reconciliation happening manually. Is that the world you operate in, or have you already standardized that?`,
    },
    followup: {
      subject: 'Following up — device spend tracking and AP workflow',
      body: `Hi Dr. [Name],

Thanks for walking me through how your practice handles device purchasing today. Two areas where Nitra could make an immediate difference:

First, the spend tracking gap. You mentioned not having a clean view of total implant spend by vendor or contract terms. Nitra's vendor-specific virtual cards create automatic spend trails that give you that data without manual tracking.

Second, the contract pricing visibility gap. With AP automation matching invoices to purchase orders, you'd have clean data on what each vendor actually charges versus what was negotiated — useful both for current operations and for future contract renewals.

Want me to map out what a pilot would look like for your top device vendors?

Best,
[Rep Name]`,
    },
  },
  primarycare: {
    cold: {
      subject: 'Reducing admin time at your practice',
      body: `Hi Dr. [Name],

I work with independent primary care practices, and the same challenge comes up in almost every conversation: the physician-owner is spending a significant portion of their time on administrative work that pulls away from patient care. Between phone-based scheduling, manual insurance checks, and managing vendor payments, the back office consumes hours that directly reduce your capacity to see patients and generate revenue.

Nitra is a financial and operations platform built for medical practices. For primary care, the biggest impact is usually on the scheduling and insurance verification side — our voice AI handles patient booking and eligibility checks automatically, freeing up front-desk staff for higher-value work.

Would a quick call be useful to see if this fits your practice?

Best,
[Rep Name]`,
    },
    discovery: {
      body: `Thanks for making time — I know every minute counts when you're running a lean practice. We work with a lot of independent primary care physicians, and the number one thing we hear is that admin work is eating into patient care time. Scheduling, insurance eligibility calls, vendor payments — it all piles up, especially when you're the physician and the business manager. Is that the kind of pressure you're feeling, or is your practice structured differently?`,
    },
    followup: {
      subject: 'Following up — scheduling automation and admin time',
      body: `Hi Dr. [Name],

Thanks for the conversation today. Based on what you shared, the clearest opportunity is on the scheduling and insurance side. You mentioned your front desk spends a significant portion of the day on phone-based patient booking and manual eligibility checks.

Nitra's patient management tools handle both automatically — voice AI for scheduling and real-time insurance verification — so your staff can redirect that time to patient-facing work.

The card and AP automation are secondary benefits, but the cashback on your existing practice spend starts generating value from day one with no workflow changes required.

Happy to set up a trial focused just on the scheduling piece if you want to see the impact before committing to the full platform.

Best,
[Rep Name]`,
    },
  },
}

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
