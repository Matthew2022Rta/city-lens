/* ============================================================
   City Lens — Important Dates (NYC)
   ------------------------------------------------------------
   Edit this file to update the "Important dates" sidebar.
   Clicking a date opens a detail card (importance / details / who it's for).

   Each entry:
     cat       – "housing", "money", "government", "education", or "work"
     urgency   – "alert" (red), "warn" (amber), or "normal" (green)
     badgeTop  – big number/word in the badge ("15", "1", "–")
     badgeBot  – small label; bilingual {en, es} (month, or "days"/"varies")
     title     – bilingual {en, es}
     sub       – bilingual {en, es}, one short line
     detail.importance  – why it matters (bilingual)
     detail.details     – the specifics / dates (bilingual)
     detail.eligibility – who it's for / who can use it (bilingual)
     source    – where the info comes from
     verified  – month last checked

   ⚠️ Re-check yearly. Election dates change each cycle; tax dates shift
   if the 15th falls on a weekend/holiday.
   ============================================================ */

const CASA_DATE_CATS = {
  order: ["housing", "money", "government", "education", "work"],
  labels: {
    en: { housing:"Housing & utilities", money:"Taxes & money", government:"Government & legal", education:"School & education", work:"Work & career" },
    es: { housing:"Vivienda y servicios", money:"Impuestos y dinero", government:"Gobierno y legal", education:"Escuela y educación", work:"Trabajo y carrera" },
    zh: { housing:"住房与公用事业", money:"税务与金钱", government:"政府与法律", education:"学校与教育", work:"工作与职业" },
    ht: { housing:"Lojman ak sèvis", money:"Taks ak lajan", government:"Gouvènman ak legal", education:"Lekòl ak edikasyon", work:"Travay ak karyè" },
    bn: { housing:"বাসস্থান ও ইউটিলিটি", money:"কর ও অর্থ", government:"সরকার ও আইন", education:"স্কুল ও শিক্ষা", work:"কাজ ও পেশা" },
    ru: { housing:"Жильё и коммунальные услуги", money:"Налоги и деньги", government:"Власти и право", education:"Школа и образование", work:"Работа и карьера" },
    it: { housing:"Casa e utenze", money:"Tasse e denaro", government:"Governo e legale", education:"Scuola e istruzione", work:"Lavoro e carriera" },
    fr: { housing:"Logement et services", money:"Impôts et argent", government:"Gouvernement et droit", education:"École et éducation", work:"Travail et carrière" },
    de: { housing:"Wohnen und Versorgung", money:"Steuern und Geld", government:"Behörden und Recht", education:"Schule und Bildung", work:"Arbeit und Beruf" }
  }
};

const CASA_DATES = [

  /* ---------------- HOUSING & UTILITIES ---------------- */
  {
    cat:"housing", urgency:"alert", badgeTop:"10", badgeBot:{en:"days",es:"días"},
    title:{en:"Respond to a notice", es:"Responder a un aviso"},
    sub:{en:"Notice to Cure: act within 10 days", es:"Aviso para Subsanar: actúa en 10 días"},
    detail:{
      importance:{en:"Missing the window can move your case toward housing court. Acting fast keeps all your options open.", es:"Perder el plazo puede llevar tu caso a la corte de vivienda. Actuar rápido mantiene tus opciones abiertas."},
      details:{en:"A Notice to Cure usually gives 10 days from the date you received it to fix the claimed lease violation. Keep the notice and the envelope.", es:"Un Aviso para Subsanar normalmente da 10 días desde que lo recibiste para corregir la supuesta violación. Guarda el aviso y el sobre."},
      eligibility:{en:"Any NYC tenant who received a notice from a landlord. Free legal help is available.", es:"Cualquier inquilino de NYC que recibió un aviso. Hay ayuda legal gratis."}
    },
    source:"General tenant guidance", verified:"June 2026"
  },
  {
    cat:"housing", urgency:"normal", badgeTop:"1", badgeBot:{en:"OCT",es:"OCT"},
    title:{en:"Heat season begins", es:"Inicia temporada de calefacción"},
    sub:{en:"Oct 1–May 31: heat is required", es:"1 oct–31 may: calefacción obligatoria"},
    detail:{
      importance:{en:"Heat and hot water are a legal right, not a favor — the city can enforce it against your landlord.", es:"La calefacción y el agua caliente son un derecho legal, no un favor — la ciudad puede exigirlo."},
      details:{en:"Oct 1–May 31, landlords must keep apartments at 68°F (day, when below 55°F outside) and 62°F (night). Report no-heat to 311.", es:"1 oct–31 may, el casero debe mantener 68°F (día, si afuera está bajo 55°F) y 62°F (noche). Reporta al 311."},
      eligibility:{en:"All NYC renters, regardless of immigration status.", es:"Todos los inquilinos de NYC, sin importar el estatus migratorio."}
    },
    source:"nyc.gov/hpd — Heat & Hot Water", verified:"June 2026"
  },
  {
    cat:"housing", urgency:"normal", badgeTop:"–", badgeBot:{en:"varies",es:"varía"},
    title:{en:"Lease renewal / notice to vacate", es:"Renovación / aviso de desalojo voluntario"},
    sub:{en:"Know your notice deadlines", es:"Conoce los plazos de aviso"},
    detail:{
      importance:{en:"Renewing or giving notice late can cost you the apartment or extra rent. Mark the dates as soon as you sign.", es:"Renovar o avisar tarde puede costarte el apartamento o renta extra. Marca las fechas al firmar."},
      details:{en:"Check your lease for the renewal window and how much notice you must give to move out (often 30–90 days). Rent-stabilized tenants have extra renewal protections.", es:"Revisa tu contrato para la ventana de renovación y cuánto aviso debes dar para mudarte (a menudo 30–90 días). Los inquilinos de renta estabilizada tienen protecciones adicionales."},
      eligibility:{en:"All renters. Terms vary by lease and by whether the unit is rent-stabilized.", es:"Todos los inquilinos. Los términos varían según el contrato y si la unidad es de renta estabilizada."}
    },
    source:"Your lease / HCR rent-stabilization rules", verified:"June 2026"
  },

  /* ---------------- TAXES & MONEY ---------------- */
  {
    cat:"money", urgency:"alert", badgeTop:"15", badgeBot:{en:"APR",es:"ABR"},
    title:{en:"Income tax filing deadline", es:"Fecha límite de impuestos"},
    sub:{en:"Federal & state returns due Apr 15", es:"Declaración federal y estatal: 15 abr"},
    detail:{
      importance:{en:"Filing on time avoids penalties and is how many people claim refunds and credits like the EITC.", es:"Declarar a tiempo evita multas y es como muchas personas reclaman reembolsos y créditos como el EITC."},
      details:{en:"2026 deadline is Wed, April 15, 2026 for 2025 income. You can request an extension to Oct 15, but you must still pay what you owe by April 15. Free filing help (VITA) exists for low/moderate income.", es:"El plazo 2026 es el miércoles 15 de abril de 2026 por ingresos de 2025. Puedes pedir prórroga hasta el 15 oct, pero debes pagar lo que debes para el 15 abr. Hay ayuda gratis (VITA) para ingresos bajos/medios."},
      eligibility:{en:"Anyone with taxable income. Free help available regardless of immigration status (ITIN filers included).", es:"Cualquiera con ingresos gravables. Ayuda gratis sin importar estatus migratorio (incluye quienes usan ITIN)."}
    },
    source:"irs.gov", verified:"June 2026"
  },
  {
    cat:"money", urgency:"warn", badgeTop:"15", badgeBot:{en:"qtrly",es:"trim."},
    title:{en:"Quarterly estimated taxes", es:"Impuestos estimados trimestrales"},
    sub:{en:"If self-employed / 1099", es:"Si trabajas por cuenta propia / 1099"},
    detail:{
      importance:{en:"If you don't have taxes withheld, paying quarterly avoids a big bill and underpayment penalties at year-end.", es:"Si no te retienen impuestos, pagar cada trimestre evita una cuenta grande y multas por pago insuficiente."},
      details:{en:"2026 due dates: Apr 15, Jun 15, Sep 15, 2026, and Jan 15, 2027. Pay online at irs.gov/payments.", es:"Fechas 2026: 15 abr, 15 jun, 15 sep de 2026, y 15 ene de 2027. Paga en línea en irs.gov/payments."},
      eligibility:{en:"Self-employed, gig workers, freelancers, or anyone expecting to owe $1,000+ not covered by withholding.", es:"Trabajadores por cuenta propia, gig, freelancers, o quien espere deber $1,000+ no cubierto por retención."}
    },
    source:"irs.gov", verified:"June 2026"
  },
  {
    cat:"money", urgency:"normal", badgeTop:"15", badgeBot:{en:"APR",es:"ABR"},
    title:{en:"IRA & HSA contribution deadline", es:"Plazo de aportes a IRA y HSA"},
    sub:{en:"Last day to add for prior year", es:"Último día para el año anterior"},
    detail:{
      importance:{en:"Contributing can lower your taxes and build savings — and you have until tax day to count it for the prior year.", es:"Aportar puede bajar tus impuestos y crear ahorros — y tienes hasta el día de impuestos para el año anterior."},
      details:{en:"You can make 2025 IRA and HSA contributions up to April 15, 2026. Check annual limits before contributing.", es:"Puedes hacer aportes de IRA y HSA de 2025 hasta el 15 de abril de 2026. Revisa los límites anuales antes."},
      eligibility:{en:"Anyone with earned income (IRA) or an HSA-eligible high-deductible health plan (HSA).", es:"Cualquiera con ingreso laboral (IRA) o un plan de salud con deducible alto elegible para HSA."}
    },
    source:"irs.gov", verified:"June 2026"
  },
  {
    cat:"money", urgency:"warn", badgeTop:"1", badgeBot:{en:"NOV",es:"NOV"},
    title:{en:"Health insurance open enrollment (ACA)", es:"Inscripción abierta de seguro (ACA)"},
    sub:{en:"Marketplace plans for next year", es:"Planes del mercado para el próximo año"},
    detail:{
      importance:{en:"This is the main yearly window to get or change marketplace health coverage. Miss it and you usually wait a year.", es:"Es la ventana anual principal para obtener o cambiar cobertura del mercado. Si la pierdes, normalmente esperas un año."},
      details:{en:"For 2027 coverage, open enrollment runs Nov 1–Dec 15, 2026 in most states; New York's exchange (NY State of Health) often runs longer. Plans start Jan 1. Many qualify for subsidies.", es:"Para cobertura 2027, la inscripción va del 1 nov al 15 dic de 2026 en la mayoría de los estados; el mercado de NY (NY State of Health) suele durar más. Los planes inician el 1 ene. Muchos califican para subsidios."},
      eligibility:{en:"Anyone without job-based or public coverage. NY State of Health also screens for Medicaid and the Essential Plan.", es:"Cualquiera sin cobertura del trabajo o pública. NY State of Health también evalúa Medicaid y el Essential Plan."}
    },
    source:"nystateofhealth.ny.gov / healthcare.gov", verified:"June 2026"
  },
  {
    cat:"money", urgency:"normal", badgeTop:"15", badgeBot:{en:"OCT",es:"OCT"},
    title:{en:"Medicare enrollment window", es:"Inscripción de Medicare"},
    sub:{en:"Annual Election: Oct 15–Dec 7", es:"Elección anual: 15 oct–7 dic"},
    detail:{
      importance:{en:"This is when you can join, switch, or drop Medicare Advantage and Part D drug plans — changes start Jan 1.", es:"Es cuando puedes unirte, cambiar o dejar planes Medicare Advantage y Parte D — los cambios inician el 1 ene."},
      details:{en:"Annual Election Period is Oct 15–Dec 7 each year. If you're new to Medicare, your Initial Enrollment Period is the 7 months around your 65th birthday.", es:"El Período de Elección Anual es del 15 oct al 7 dic cada año. Si eres nuevo en Medicare, tu Período de Inscripción Inicial son los 7 meses alrededor de cumplir 65."},
      eligibility:{en:"People 65+ or who qualify by disability. Free counseling is available through NY's HIICAP program.", es:"Personas de 65+ o que califican por discapacidad. Hay asesoría gratis por el programa HIICAP de NY."}
    },
    source:"medicare.gov", verified:"June 2026"
  },

  /* ---------------- GOVERNMENT & LEGAL ---------------- */
  {
    cat:"government", urgency:"alert", badgeTop:"24", badgeBot:{en:"OCT",es:"OCT"},
    title:{en:"Voter registration deadline", es:"Fecha límite para registrarse a votar"},
    sub:{en:"Register by Oct 24 for Nov 3 election", es:"Regístrate antes del 24 oct"},
    detail:{
      importance:{en:"You must be registered before the deadline to vote in the general election. It's free and takes minutes.", es:"Debes registrarte antes del plazo para votar en las elecciones generales. Es gratis y toma minutos."},
      details:{en:"Register by Oct 24, 2026 to vote in the Nov 3 general election. Early voting runs Oct 24–Nov 1. Register online, by mail, or in person.", es:"Regístrate antes del 24 oct de 2026 para votar el 3 nov. El voto anticipado es del 24 oct al 1 nov. Regístrate en línea, por correo o en persona."},
      eligibility:{en:"U.S. citizens, 18+ by election day, NY residents. Check your status at the NY Board of Elections.", es:"Ciudadanos de EE. UU., 18+ para el día de elección, residentes de NY. Verifica tu estatus en la Junta Electoral de NY."}
    },
    source:"elections.ny.gov", verified:"June 2026"
  },
  {
    cat:"government", urgency:"warn", badgeTop:"3", badgeBot:{en:"NOV",es:"NOV"},
    title:{en:"General Election Day", es:"Día de Elecciones Generales"},
    sub:{en:"Nov 3, 2026 · polls open all day", es:"3 nov 2026 · urnas abiertas todo el día"},
    detail:{
      importance:{en:"Local and state offices on the ballot affect housing, schools, and services in your neighborhood.", es:"Los cargos locales y estatales en la boleta afectan vivienda, escuelas y servicios en tu vecindario."},
      details:{en:"Election Day is Nov 3, 2026. Polls are open 6am–9pm. Early voting runs Oct 24–Nov 1. Find your poll site at the NYC Board of Elections.", es:"El día de elección es el 3 nov de 2026. Las urnas abren 6am–9pm. Voto anticipado del 24 oct al 1 nov. Encuentra tu sitio en la Junta Electoral de NYC."},
      eligibility:{en:"Registered NY voters. You can request an absentee/mail ballot if you can't vote in person.", es:"Votantes registrados de NY. Puedes pedir boleta por correo si no puedes votar en persona."}
    },
    source:"vote.nyc / elections.ny.gov", verified:"June 2026"
  },
  {
    cat:"government", urgency:"warn", badgeTop:"1", badgeBot:{en:"JUL",es:"JUL"},
    title:{en:"NYC property tax due", es:"Impuesto predial de NYC"},
    sub:{en:"Quarterly: Jul 1, Oct 1, Jan 1, Apr 1", es:"Trimestral: 1 jul, 1 oct, 1 ene, 1 abr"},
    detail:{
      importance:{en:"Paying on time avoids interest charges. Owners may also qualify for exemptions that lower the bill.", es:"Pagar a tiempo evita intereses. Los propietarios pueden calificar para exenciones que bajan la cuenta."},
      details:{en:"Most NYC homeowners pay quarterly: due Jul 1, Oct 1, Jan 1, and Apr 1 (semi-annual for higher-assessed homes). Check exemptions like STAR, SCHE (seniors), and DHE (disabled).", es:"La mayoría de los propietarios de NYC pagan trimestral: 1 jul, 1 oct, 1 ene y 1 abr. Revisa exenciones como STAR, SCHE (adultos mayores) y DHE (discapacidad)."},
      eligibility:{en:"NYC property owners. Exemption programs have income and age requirements.", es:"Propietarios en NYC. Los programas de exención tienen requisitos de ingreso y edad."}
    },
    source:"nyc.gov/finance", verified:"June 2026"
  },
  {
    cat:"government", urgency:"normal", badgeTop:"–", badgeBot:{en:"early",es:"pronto"},
    title:{en:"Passport & ID renewals", es:"Renovación de pasaporte e identificación"},
    sub:{en:"Start early — processing takes time", es:"Empieza pronto — el trámite tarda"},
    detail:{
      importance:{en:"Passports and licenses can take weeks to months to process. Renewing early avoids missing travel or letting ID lapse.", es:"Los pasaportes y licencias pueden tardar semanas o meses. Renovar pronto evita perder viajes o que venza tu ID."},
      details:{en:"Passport renewal can take several weeks (longer in peak season) — start ~3+ months before travel. Driver's license and vehicle registration renew through the NY DMV, often online.", es:"La renovación de pasaporte puede tardar varias semanas (más en temporada alta) — empieza ~3+ meses antes de viajar. La licencia y el registro del auto se renuevan por el DMV de NY, a menudo en línea."},
      eligibility:{en:"Anyone with an expiring passport, license, or vehicle registration.", es:"Cualquiera con pasaporte, licencia o registro de auto por vencer."}
    },
    source:"travel.state.gov / dmv.ny.gov", verified:"June 2026"
  },

  /* ---------------- SCHOOL & EDUCATION ---------------- */
  {
    cat:"education", urgency:"normal", badgeTop:"1", badgeBot:{en:"OCT",es:"OCT"},
    title:{en:"FAFSA opens (2027–28)", es:"Abre la FAFSA (2027–28)"},
    sub:{en:"Apply early for college aid", es:"Solicita temprano la ayuda universitaria"},
    detail:{
      importance:{en:"The FAFSA unlocks federal and state grants, work-study, and loans. Some aid is first-come, so applying early matters.", es:"La FAFSA abre becas y préstamos federales y estatales, y trabajo-estudio. Parte de la ayuda es por orden de llegada, así que conviene solicitar temprano."},
      details:{en:"The 2027–28 FAFSA opens around Oct 1, 2026 (it can open earlier). File at studentaid.gov; it's free. NY students should also file the TAP application.", es:"La FAFSA 2027–28 abre cerca del 1 oct de 2026 (puede abrir antes). Solicita en studentaid.gov; es gratis. Los estudiantes de NY también deben solicitar el TAP."},
      eligibility:{en:"Current and prospective college students. Some aid has citizenship rules; NY has separate aid for some immigrant students (NYS DREAM Act).", es:"Estudiantes universitarios actuales y futuros. Parte de la ayuda tiene reglas de ciudadanía; NY tiene ayuda separada para algunos estudiantes inmigrantes (NYS DREAM Act)."}
    },
    source:"studentaid.gov (date approximate)", verified:"June 2026"
  },
  {
    cat:"education", urgency:"warn", badgeTop:"30", badgeBot:{en:"JUN",es:"JUN"},
    title:{en:"NY TAP deadline (2026–27)", es:"Fecha límite NY TAP (2026–27)"},
    sub:{en:"NY State tuition aid", es:"Ayuda de matrícula del estado de NY"},
    detail:{
      importance:{en:"TAP is free money (a grant, not a loan) toward NY college tuition for eligible residents.", es:"El TAP es dinero gratis (una beca, no un préstamo) para la matrícula universitaria en NY para residentes elegibles."},
      details:{en:"Last day to apply for 2026–27 TAP is June 30, 2027. Apply through your FAFSA confirmation or at hesc.ny.gov.", es:"El último día para solicitar el TAP 2026–27 es el 30 de junio de 2027. Solicita por la confirmación de tu FAFSA o en hesc.ny.gov."},
      eligibility:{en:"NY residents attending an approved NY college, within income limits.", es:"Residentes de NY en una universidad de NY aprobada, dentro de los límites de ingreso."}
    },
    source:"hesc.ny.gov", verified:"June 2026"
  },
  {
    cat:"education", urgency:"normal", badgeTop:"–", badgeBot:{en:"varies",es:"varía"},
    title:{en:"Scholarships & registration", es:"Becas y matrícula"},
    sub:{en:"Deadlines, add/drop, test dates", es:"Plazos, agregar/dejar, exámenes"},
    detail:{
      importance:{en:"Scholarship and registration deadlines are easy to miss and rarely have a second chance — track them per school.", es:"Los plazos de becas y matrícula son fáciles de perder y rara vez dan segunda oportunidad — síguelos por escuela."},
      details:{en:"Watch for: scholarship/grant deadlines, course registration windows, tuition due dates, add/drop and withdrawal deadlines, and standardized test (SAT/ACT/GRE) registration dates.", es:"Atento a: plazos de becas, ventanas de matrícula, fechas de pago de matrícula, plazos para agregar/dejar y retirar, y fechas de registro de exámenes (SAT/ACT/GRE)."},
      eligibility:{en:"Students at any level. Dates are set by each school, program, and testing agency.", es:"Estudiantes de cualquier nivel. Las fechas las fija cada escuela, programa y agencia de exámenes."}
    },
    source:"Your school / testing agencies", verified:"June 2026"
  },

  /* ---------------- WORK & CAREER ---------------- */
  {
    cat:"work", urgency:"normal", badgeTop:"–", badgeBot:{en:"fall",es:"otoño"},
    title:{en:"Benefits & 401(k) open enrollment", es:"Inscripción de beneficios y 401(k)"},
    sub:{en:"Usually each fall at work", es:"Normalmente cada otoño en el trabajo"},
    detail:{
      importance:{en:"This is often your one yearly chance to change health, dental, and retirement contributions through your employer.", es:"Suele ser tu única oportunidad anual para cambiar salud, dental y aportes de retiro por tu empleador."},
      details:{en:"Most employers hold open enrollment in the fall, with changes effective Jan 1. Review your plan, dependents, and 401(k) contribution percentage.", es:"La mayoría de los empleadores hacen la inscripción en otoño, con cambios desde el 1 ene. Revisa tu plan, dependientes y el porcentaje de aporte al 401(k)."},
      eligibility:{en:"Employees with employer-sponsored benefits. Exact dates come from your HR department.", es:"Empleados con beneficios del empleador. Las fechas exactas vienen de Recursos Humanos."}
    },
    source:"Your employer / HR", verified:"June 2026"
  },
  {
    cat:"work", urgency:"normal", badgeTop:"–", badgeBot:{en:"varies",es:"varía"},
    title:{en:"License & certification renewals", es:"Renovación de licencias y certificaciones"},
    sub:{en:"Keep your credentials active", es:"Mantén tus credenciales activas"},
    detail:{
      importance:{en:"Letting a professional license lapse can stop you from working legally — renewals often need fees and continuing education.", es:"Dejar vencer una licencia profesional puede impedirte trabajar legalmente — las renovaciones suelen requerir tarifas y educación continua."},
      details:{en:"Track renewal dates for any professional license or certification you hold, plus any required continuing-education hours and performance-review cycles at your job.", es:"Sigue las fechas de renovación de cualquier licencia o certificación que tengas, además de las horas de educación continua requeridas y los ciclos de evaluación en tu trabajo."},
      eligibility:{en:"Licensed professionals (healthcare, trades, real estate, etc.). Requirements vary by field.", es:"Profesionales con licencia (salud, oficios, bienes raíces, etc.). Los requisitos varían por campo."}
    },
    source:"Your licensing board", verified:"June 2026"
  }

];

/* Panel labels (bilingual) */
const CASA_DATES_LABELS = {
  en: { title:"Important dates", sub:"Housing, money, voting, school & work", note:"Tap any date for details · verified June 2026" },
  es: { title:"Fechas importantes", sub:"Vivienda, dinero, voto, escuela y trabajo", note:"Toca una fecha para detalles · verificado junio 2026" },
  zh: { title:"重要日期", sub:"住房、金钱、投票、上学和工作", note:"点按任意日期查看详情 · 2026年6月核实" },
  ht: { title:"Dat enpòtan", sub:"Lojman, lajan, vòt, lekòl ak travay", note:"Klike sou yon dat pou detay · verifye jen 2026" },
  bn: { title:"গুরুত্বপূর্ণ তারিখ", sub:"বাসস্থান, অর্থ, ভোট, স্কুল ও কাজ", note:"বিস্তারিত জানতে যেকোনো তারিখে ট্যাপ করুন · জুন ২০২৬-এ যাচাইকৃত" },
  ru: { title:"Важные даты", sub:"Жильё, деньги, выборы, учёба и работа", note:"Нажмите на дату для подробностей · проверено в июне 2026" },
  it: { title:"Date importanti", sub:"Casa, denaro, voto, scuola e lavoro", note:"Tocca una data per i dettagli · verificato a giugno 2026" },
  fr: { title:"Dates importantes", sub:"Logement, argent, vote, école et travail", note:"Touchez une date pour les détails · vérifié en juin 2026" },
  de: { title:"Wichtige Termine", sub:"Wohnen, Geld, Wahlen, Schule und Arbeit", note:"Für Details auf einen Termin tippen · geprüft Juni 2026" }
};
