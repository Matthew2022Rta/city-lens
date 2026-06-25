/* ============================================================
   City Lens — Resource Data (NYC, Phase 1: Housing)
   ------------------------------------------------------------
   This is the file you and Sam edit to update the app's resources.
   Each entry shows up automatically in the app — no other code to touch.

   To add or change a resource, copy a block and edit the fields:
     cat   – which situation it belongs to (see CATEGORIES below)
     name  – resource name shown in bold
     org   – the organization behind it
     desc  – plain-language description (what it is / how it helps)
     contact – the text shown on the call button
     dial  – digits only, used when the button is tapped on a phone
             (use "311" for 311; use null if there is no phone)
     website  – web address (no https://), or null
     languages – comma-separated, or "Multiple languages"
     who   – who can use it
     hours – when it's open
     cost  – usually "Free"
     region – "NYC" for now (lets us expand to other NY cities later)
     verified – the month you last checked it

   CATEGORIES (the "cat" value must match one of these):
     evict          – Facing eviction or a notice
     rent           – Can't afford rent
     unsafe         – Unsafe living conditions
     affordable     – Looking for affordable housing
     shelter        – Experiencing homelessness
     discrimination – Housing discrimination
     dv             – Domestic violence / safety
   ============================================================ */

const CASA_RESOURCES = [

  /* ---------- FACING EVICTION ---------- */
  {
    cat: "evict",
    name: "NYC Right to Counsel",
    org: "NYC Office of Civil Justice",
    desc: "If you're taken to housing court, you have the right to a free lawyer — even if you can't afford one. Go to your court date and say 'I would like an attorney.'",
    contact: "311 — or go to your court date",
    dial: "311",
    website: "nyc.gov/hra/ocj",
    languages: "10+ languages",
    who: "NYC tenants with a housing court case (income limits apply for full representation)",
    hours: "Mon–Fri, court hours",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "evict",
    name: "Legal Aid Society — Housing",
    org: "The Legal Aid Society",
    desc: "Free legal help if you're facing eviction, harassment, or unsafe conditions. Has offices in every borough; no immigration status check.",
    contact: "(212) 577-3300",
    dial: "2125773300",
    website: "legalaidnyc.org/get-help/housing-problems",
    languages: "Spanish, Chinese, Haitian Creole, + more",
    who: "Low-income NYC residents",
    hours: "Mon–Fri 9am–5pm",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "evict",
    name: "Legal Services NYC",
    org: "Legal Services NYC",
    desc: "Free legal representation for low-income tenants. Can help with eviction defense, harassment, and rent issues.",
    contact: "(917) 661-4500",
    dial: "9176614500",
    website: "legalservicesnyc.org",
    languages: "Multiple languages",
    who: "Income below 200% of the federal poverty level",
    hours: "Mon–Fri 9am–5pm",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "evict",
    name: "NYC Tenant Helpline",
    org: "NYC Mayor's Office",
    desc: "Call 311 and ask for the Tenant Helpline. They can connect you to free legal help and explain your rights in plain language.",
    contact: "311 — ask for Tenant Helpline",
    dial: "311",
    website: null,
    languages: "Multiple languages",
    who: "All NYC tenants",
    hours: "Mon–Fri",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "evict",
    name: "Met Council on Housing — Tenants' Rights Hotline",
    org: "Metropolitan Council on Housing",
    desc: "A tenants' rights hotline staffed by real people who can answer your housing questions and tell you what to do next.",
    contact: "(212) 979-0611",
    dial: "2129790611",
    website: "metcouncilonhousing.org",
    languages: "English, Español",
    who: "All NYC tenants",
    hours: "Mon 1:30–8pm · Wed & Fri 1:30–5pm",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "evict",
    name: "Housing Court Answers",
    org: "Housing Court Answers",
    desc: "If you have to go to housing court, call this first. They explain the process and help you understand what's happening.",
    contact: "(718) 557-1379",
    dial: "7185571379",
    website: "housingcourtanswers.org",
    languages: "English, Español",
    who: "Anyone with a housing court case",
    hours: "Mon–Fri 9am–5pm",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "evict",
    name: "NYLAG Tenants' Rights",
    org: "New York Legal Assistance Group",
    desc: "Free legal help for tenants. Can help you respond to eviction notices, understand your lease, and know your rights.",
    contact: "(212) 613-5000",
    dial: "2126135000",
    website: "nylag.org/tenants-rights",
    languages: "Multiple languages",
    who: "Low-to-moderate income NYC residents",
    hours: "Mon–Fri 9am–5pm",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },

  /* ---------- CAN'T AFFORD RENT ---------- */
  {
    cat: "rent",
    name: "One-Shot Deal (Emergency Rent Assistance)",
    org: "NYC Human Resources Administration (HRA)",
    desc: "A one-time payment from the city to help cover back rent and prevent eviction. You apply and they pay your landlord directly. You have to show you can afford rent going forward.",
    contact: "(718) 557-1399 — or ACCESS HRA app",
    dial: "7185571399",
    website: "nyc.gov/hra",
    languages: "Multiple languages",
    who: "NYC residents who can pay going-forward rent but have arrears",
    hours: "Mon–Fri",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "rent",
    name: "CityFHEPS Rental Voucher",
    org: "NYC Human Resources Administration (HRA)",
    desc: "A voucher that pays a big part of your monthly rent for up to 5 years. First step is visiting a Homebase office near you.",
    contact: "311 — ask for Homebase",
    dial: "311",
    website: "nyc.gov/site/hra/help/homebase.page",
    languages: "Multiple languages",
    who: "At risk of eviction or homelessness; income limits apply",
    hours: "Mon–Fri",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "rent",
    name: "Homebase Homelessness Prevention",
    org: "NYC Department of Social Services",
    desc: "A local office (in every borough) that helps you make a plan to stay housed. They connect you to rental assistance, benefits, and other resources before you lose your home.",
    contact: "311 — find your nearest Homebase",
    dial: "311",
    website: "nyc.gov/site/hra/help/homebase.page",
    languages: "Multiple languages",
    who: "NYC residents at risk of losing housing",
    hours: "Mon–Fri",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "rent",
    name: "HRA Benefits Access Centers",
    org: "NYC Human Resources Administration",
    desc: "Walk-in centers where you can apply for emergency financial assistance, food stamps, Medicaid, and other benefits. Bring ID and proof of income.",
    contact: "(718) 557-1399",
    dial: "7185571399",
    website: "nyc.gov/hra",
    languages: "Multiple languages",
    who: "NYC residents",
    hours: "Mon–Fri",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },

  /* ---------- UNSAFE CONDITIONS ---------- */
  {
    cat: "unsafe",
    name: "NYC 311 / HPD Housing Complaint",
    org: "NYC Dept. of Housing Preservation & Development",
    desc: "If your apartment has no heat, hot water, pests, mold, broken locks, or repairs your landlord won't make — report it to 311. The city will inspect and issue violations against your landlord.",
    contact: "311 — or 311online.nyc.gov",
    dial: "311",
    website: "hpdonline.nyc.gov",
    languages: "Multiple languages",
    who: "All NYC tenants",
    hours: "24/7 (online); Mon–Fri phone follow-up",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "unsafe",
    name: "HPD Tenant Rights Portal",
    org: "NYC Dept. of Housing Preservation & Development",
    desc: "Learn what your landlord is legally required to provide and what your rights are if they don't. You can also look up the violation history for any building.",
    contact: "311",
    dial: "311",
    website: "nyc.gov/site/hpd/services-and-information/tenants-rights-and-responsibilities.page",
    languages: "Multiple languages",
    who: "All NYC tenants",
    hours: "24/7 (online)",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },

  /* ---------- LOOKING FOR HOUSING ---------- */
  {
    cat: "affordable",
    name: "NYC Housing Connect",
    org: "NYC Dept. of Housing Preservation & Development",
    desc: "The official site to apply for affordable apartments through NYC's housing lottery. Free to apply. You enter your income and household size and apply to buildings that match.",
    contact: "Apply online — free",
    dial: null,
    website: "housingconnect.nyc.gov",
    languages: "Multiple languages",
    who: "Varies by lottery — income limits apply; anyone can create a free account",
    hours: "24/7 (online)",
    cost: "Free to apply",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "affordable",
    name: "NYCHA Public Housing",
    org: "New York City Housing Authority",
    desc: "City-owned, permanently affordable apartments. Very low rent based on your income. Warning: the waitlist is very long — apply now, but also look at other options.",
    contact: "(718) 707-7771 — or 311",
    dial: "7187077771",
    website: "nyc.gov/nycha",
    languages: "Multiple languages",
    who: "Low income (generally below 50% AMI); citizenship or eligible immigration status required",
    hours: "Apply online anytime",
    cost: "Free to apply",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "affordable",
    name: "ACCESS HRA — Benefits Screening",
    org: "NYC Human Resources Administration",
    desc: "Check what city benefits you qualify for — including housing vouchers, food stamps, and healthcare. Takes about 10 minutes.",
    contact: "(718) 557-1399 — or the app",
    dial: "7185571399",
    website: "access.nyc.gov",
    languages: "Multiple languages",
    who: "All NYC residents",
    hours: "24/7 (app/online)",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "affordable",
    name: "HUD Housing Voucher (Section 8)",
    org: "U.S. Dept. of Housing & Urban Development",
    desc: "A federal voucher that helps pay your rent in a private apartment. NYC's waitlist is long and often closed, but it's worth checking the current status.",
    contact: "1-800-955-2232",
    dial: "18009552232",
    website: "hud.gov/topics/housing_choice_voucher_program_section_8",
    languages: "Multiple languages",
    who: "Very low income (below 50% AMI); citizenship or eligible status required",
    hours: "Check online for waitlist status",
    cost: "Free to apply",
    region: "NYC",
    verified: "June 2026"
  },

  /* ---------- EXPERIENCING HOMELESSNESS ---------- */
  {
    cat: "shelter",
    name: "NYC Department of Homeless Services (DHS)",
    org: "NYC Dept. of Homeless Services",
    desc: "If you have nowhere to stay tonight, call 311. You have a legal right to shelter in NYC, regardless of immigration status. DHS will find you a placement. This applies to families and individuals.",
    contact: "311 (24/7)",
    dial: "311",
    website: "nyc.gov/site/dhs",
    languages: "Multiple languages",
    who: "All NYC residents — right to shelter regardless of immigration status",
    hours: "24/7",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "shelter",
    name: "PATH — Family Intake Center",
    org: "NYC Dept. of Homeless Services",
    desc: "If you are a family with children and need emergency shelter, go to PATH first. They assess your situation and connect you to family shelter. Open 24/7.",
    contact: "311 (24/7) — Walk-in: 151 E. 151st St., Bronx",
    dial: "311",
    website: "nyc.gov/site/dhs/shelter/shelter-for-families.page",
    languages: "Multiple languages",
    who: "Families with children experiencing homelessness",
    hours: "Open 24/7",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "shelter",
    name: "Safe Haven / Drop-In Centers",
    org: "NYC Dept. of Homeless Services",
    desc: "If you are living on the street and not ready for a shelter, drop-in centers offer food, showers, clothes, and a safe place to rest — no questions asked.",
    contact: "311 — or text SHELTER to 898-211",
    dial: "311",
    website: "nyc.gov/site/dhs/outreach",
    languages: "Multiple languages",
    who: "Adults experiencing street homelessness",
    hours: "Most open 24/7",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },

  /* ---------- HOUSING DISCRIMINATION ---------- */
  {
    cat: "discrimination",
    name: "NYC Commission on Human Rights",
    org: "NYC Commission on Human Rights",
    desc: "If a landlord refuses to rent to you, harasses you, or treats you differently because of your race, religion, national origin, immigration status, disability, or source of income (like Section 8) — file a free complaint here.",
    contact: "(718) 722-3131 — or 311",
    dial: "7187223131",
    website: "nyc.gov/cchr",
    languages: "Multiple languages",
    who: "All NYC residents — protected classes include immigration status and source of income",
    hours: "Mon–Fri 9am–5pm",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "discrimination",
    name: "NYS Division of Human Rights",
    org: "New York State Division of Human Rights",
    desc: "State-level discrimination complaints. Can also handle cases that fall outside NYC jurisdiction.",
    contact: "1-888-392-3644",
    dial: "18883923644",
    website: "dhr.ny.gov",
    languages: "Multiple languages",
    who: "All NYS residents",
    hours: "Mon–Fri 9am–5pm",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "discrimination",
    name: "HUD Fair Housing Complaint",
    org: "U.S. Dept. of Housing & Urban Development",
    desc: "Federal-level fair housing complaints, if a landlord discriminates based on race, color, national origin, religion, sex, disability, or family status.",
    contact: "1-800-669-9777",
    dial: "18006699777",
    website: "hud.gov/program_offices/fair_housing_equal_opp",
    languages: "Multiple languages",
    who: "All US residents",
    hours: "Mon–Fri",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },

  /* ---------- DOMESTIC VIOLENCE / SAFETY ---------- */
  {
    cat: "dv",
    name: "NYC 24-Hour Domestic Violence Hotline",
    org: "NYC Mayor's Office to End Domestic & Gender-Based Violence",
    desc: "A 24-hour hotline for anyone experiencing domestic violence. They can help you find emergency shelter, make a safety plan, and connect to services. Confidential.",
    contact: "1-800-621-HOPE (4673) — text 1-833-621-4673",
    dial: "18006214673",
    website: "nyc.gov/dvhotline",
    languages: "Multiple languages + TTY",
    who: "Anyone experiencing domestic or gender-based violence",
    hours: "24/7",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "dv",
    name: "Safe Horizon Shelters",
    org: "Safe Horizon",
    desc: "Eight confidential domestic violence shelters across the five boroughs. Also offers counseling, legal help, and advocacy for survivors.",
    contact: "1-800-621-4673",
    dial: "18006214673",
    website: "safehorizon.org/domestic-violence-shelters",
    languages: "Multiple languages",
    who: "Survivors of domestic violence and their children",
    hours: "24/7 intake via hotline",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "dv",
    name: "Womankind Emergency Housing",
    org: "Womankind",
    desc: "Emergency housing for survivors of domestic and gender-based violence — up to 180 days. Especially serves Asian and immigrant communities.",
    contact: "1-888-888-7702",
    dial: "18888887702",
    website: "iamwomankind.org",
    languages: "Mandarin, Cantonese, Korean, + other Asian languages",
    who: "Survivors of GBV; especially immigrant and Asian communities",
    hours: "24/7 hotline",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "dv",
    name: "HRA Domestic Violence Support",
    org: "NYC Human Resources Administration",
    desc: "Connects DV survivors to emergency shelter, financial assistance, legal services, and safety planning through city programs.",
    contact: "1-800-621-4673 — or 311",
    dial: "18006214673",
    website: "nyc.gov/site/hra/help/domestic-violence-support.page",
    languages: "Multiple languages",
    who: "All NYC residents experiencing domestic violence",
    hours: "Mon–Fri case management; hotline 24/7",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  },
  {
    cat: "dv",
    name: "Barrier Free Living (DV + Disability)",
    org: "Barrier Free Living",
    desc: "Domestic violence shelter and services specifically for survivors with disabilities. Fully accessible facilities.",
    contact: "(212) 400-6470",
    dial: "2124006470",
    website: "bflnyc.org",
    languages: "English, Español",
    who: "DV survivors with physical or mental disabilities",
    hours: "24/7 shelter",
    cost: "Free",
    region: "NYC",
    verified: "June 2026"
  }

];

/* Friendly heading for each category's resource screen (bilingual) */
const CASA_CATEGORY_LABELS = {
  en: {
    all:            "People who can help — for free",
    evict:          "Facing eviction — who can help",
    rent:           "Help affording rent",
    unsafe:         "Unsafe conditions — your options",
    affordable:     "Finding affordable housing",
    shelter:        "Nowhere to stay — help right now",
    discrimination: "Housing discrimination — file a complaint",
    dv:             "Safety & domestic violence help"
  },
  es: {
    all:            "Personas que pueden ayudar — gratis",
    evict:          "Enfrentando un desalojo — quién ayuda",
    rent:           "Ayuda para pagar la renta",
    unsafe:         "Condiciones inseguras — tus opciones",
    affordable:     "Buscando vivienda asequible",
    shelter:        "Sin dónde quedarte — ayuda ahora",
    discrimination: "Discriminación de vivienda — presenta una queja",
    dv:             "Seguridad y violencia doméstica"
  }
};
