/* ============================================================
   City Lens — Translations for additional languages (i18n)
   ------------------------------------------------------------
   English + Spanish live inside index.html (UI, SUM, RIGHTS,
   DLG_LABELS). THIS file adds every other language. The app
   merges these on top of English, so any string left out here
   automatically falls back to English — nothing ever breaks.

   What lives here, per language:
     CASA_I18N        – interface strings (buttons, nav, headers, labels)
     CASA_MISC_I18N   – Maria's chat lines & a few status strings
     CASA_DLG_I18N    – the date pop-up section labels
     CASA_SUM_I18N    – the situation explanations (Summary screen)
     CASA_RIGHTS_I18N – the "Know your rights" guides (same order as RIGHTS)

   Dates are translated in dates.js; resource category headings in
   resources.js — each file is the single source of truth for its data.

   To add a language: add it to CASA_LANGS (code + native name), then
   add a matching block in each object below. You don't have to fill
   everything at once — partial languages still work (English fills gaps).

   ⚠️ These are machine-assisted DRAFT translations. Before any public
   launch, have a fluent speaker review each language — this is legal
   and safety information for people in vulnerable situations.
   ============================================================ */

/* Order + native names shown in the language picker.
   en + es are defined in index.html but listed here so the menu can show them. */
const CASA_LANGS = [
  { code:"en", name:"English" },
  { code:"es", name:"Español" },
  { code:"zh", name:"中文" },
  { code:"ht", name:"Kreyòl Ayisyen" },
  { code:"bn", name:"বাংলা" },
  { code:"ru", name:"Русский" },
  { code:"it", name:"Italiano" },
  { code:"fr", name:"Français" },
  { code:"de", name:"Deutsch" }
];

/* ------------------------------------------------------------------
   INTERFACE STRINGS  (same keys as the UI object in index.html)
   ------------------------------------------------------------------ */
const CASA_I18N = {

  /* ===================== 中文 (Chinese, Simplified) ===================== */
  zh:{
    dates_title:"重要日期", dates_sub:"住房、金钱、投票、上学和工作", m_days:"天", m_mon:"月", m_open:"开放",
    d1t:"回应通知", d1s:"整改通知：10天内行动", d2t:"供暖季开始", d2s:"10月1日–5月31日：必须供暖",
    d3t:"房租到期提醒", d3s:"逾期通知不能早于此日", d4t:"住房抽签截止日", d4s:"NYC Housing Connect 新房源", demo_dates:"示例日期（演示）",
    maria_status:"随时帮助你 · 免费且私密",
    c_evict:"📨 我收到了通知", c_rent:"💵 付不起房租", c_unsafe:"🛠️ 公寓不安全", c_shelter:"🏠 没有地方住",
    chat_ph:"告诉我发生了什么…", trust_b:"可放心使用。", trust_t:"我们不会询问您的姓名、移民身份或地址。您输入的内容不会与市政府或任何人分享。",
    news_title:"重要新闻", news_sub:"纽约住房提醒", n1tag:"资金", n1h:"新的房租欠款援助资金已发放", n1m:"尽早通过 ACCESS HRA 申请",
    n2tag:"权利", n2h:"Right to Counsel 扩大免费住房法庭律师", n2m:"更多租户现在符合资格",
    n3tag:"警示", n3h:"供暖投诉上升——了解最低标准", n3m:"无暖气请立即拨打 311 举报",
    n4tag:"住房", n4h:"Housing Connect 开放新的可负担抽签", n4m:"申请免费——切勿支付任何费用", demo_news:"示例标题（演示）",
    back:"返回", u_eye:"告诉我们发生了什么", u_h:"发生了什么事？慢慢来。", u_p:"您可以打字、拍下收到的文件照片，或从常见情况中选择。",
    u_type:"打字", u_photo:"拍照", u_pick:"选择", u_ph:"例如：房东从我门下塞了一张纸，我很害怕……", continue:"继续",
    up_t:"拍摄或上传您通知的照片", up_s:"我们会读取它并用通俗易懂的语言解释。", reading:"正在读取您的文件…",
    o_evict_t:"我收到了通知或驱逐文件", o_evict_s:"来自房东或法院的信件", o_rent_t:"我付不起房租", o_rent_s:"我已拖欠或即将拖欠",
    o_unsafe_t:"我的公寓不安全", o_unsafe_s:"没暖气、漏水、霉菌、维修被忽视", o_shelter_t:"我没有地方住", o_shelter_s:"我今晚需要一个安全的地方",
    s_eye:"这意味着什么", explain_more:"更详细解释", deep_h:"更完整的解释", show_options:"看看我能做什么",
    c_eye:"你并不孤单", c_h:"三条前进的路。选择您觉得合适的。", c_p:"没有错误的选择。从您舒服的地方开始。",
    door1t:"和真人交谈", door1s:"免费法律帮助和租户热线", door2t:"了解您的权利", door2s:"按权利类型的通俗指南",
    door3t:"接下来怎么做", door3s:"未来24–48小时的简单清单", c_trust:"这些是免费、可信赖的纽约机构。许多机构提供帮助", c_trust_b:"无论移民身份如何",
    t_eye:"和某人交谈", t_h:"可以帮助您的人——全部免费。", t_note:"电话号码于2026年6月核实。请始终确认营业时间，可能会变。",
    search_ph:"按名称、语言或关键词搜索…", search_none:"没有结果——换个词试试。",
    rt_eye:"了解您的权利", rt_h:"按类型查看您的权利。", rt_p:"点按一个类别了解更多。这里的一切都适用，无论移民身份如何。",
    n_eye:"接下来怎么做", n_h:"您的接下来48小时。", n_p:"小步骤。每完成一步就点一下。",
    ck1t:"不要惊慌——也不要搬走", ck1s:"通知不是离开的命令。留下来能保护您的权利。",
    ck2t:"拍下通知和信封", ck2s:"正反两面。记下您收到的日期。",
    ck3t:"致电 Legal Aid 或租户热线", ck3s:"告诉他们您收到了通知和日期。他们会指导您。",
    ck4t:"写下房东的指控", ck4s:"知道确切问题有助于您和任何倡导者回应。",
    ck5t:"标记10天截止日", ck5s:"从您收到的那天算起。在到期前行动。",
    n_re:"您已经完成了最难的部分——您开始了。明天打一个电话就是真正的进步。", n_getnum:"获取电话号码", n_done:"重新开始 / 暂时完成",
    b_eye:"自行浏览", b_h:"按情况查找住房帮助。", b_p:"选择最接近您所经历情况的一项。",
    b1t:"面临驱逐或通知", b1s:"权利、流程、谁能帮忙", b2t:"付不起房租", b2s:"租金援助和一次性补助",
    b3t:"不安全的居住条件", b3s:"没暖气、霉菌、维修——您的权利", b4t:"正在经历无家可归", b4s:"庇护权和 PATH 接收",
    b5t:"寻找可负担住房", b5s:"NYC Housing Connect 和 NYCHA", b6t:"安全与家庭暴力", b6s:"保密帮助和紧急庇护",
    b7t:"住房歧视", b7s:"受到不公平对待？免费投诉",
    nav_home:"主页", nav_browse:"浏览", nav_help:"求助", nav_rights:"权利", nav_contacts:"联系"
  },

  /* ===================== Kreyòl Ayisyen (Haitian Creole) ===================== */
  ht:{
    dates_title:"Dat enpòtan", dates_sub:"Lojman, lajan, vòt, lekòl ak travay", m_days:"jou", m_mon:"mwa", m_open:"louvri",
    d1t:"Reponn a yon avi", d1s:"Avi pou Korije: aji nan 10 jou", d2t:"Sezon chofaj kòmanse", d2s:"1 okt–31 me: chofaj obligatwa",
    d3t:"Rapèl lwaye", d3s:"Yon avi reta pa ka rive anvan dat sa a", d4t:"Dat limit lotri lojman", d4s:"Nouvo lis NYC Housing Connect", demo_dates:"Dat egzanp (demo)",
    maria_status:"La pou ede w · gratis e prive",
    c_evict:"📨 Mwen resevwa yon avi", c_rent:"💵 Mwen pa ka peye lwaye", c_unsafe:"🛠️ Apatman an pa an sekirite", c_shelter:"🏠 Mwen pa gen kote pou m rete",
    chat_ph:"Di m sa k ap pase…", trust_b:"San danje pou itilize.", trust_t:"Nou pa mande non w, estati imigrasyon w, ni adrès ou. Anyen ou ekri pa pataje ak vil la ni ak pèsonn.",
    news_title:"Nouvèl enpòtan", news_sub:"Alèt lojman NYC", n1tag:"Finansman", n1h:"Nouvo lajan asistans lwaye disponib pou aryere", n1m:"Aplike bonè atravè ACCESS HRA",
    n2tag:"Dwa", n2h:"Right to Counsel agrandi avoka gratis nan tribinal lojman", n2m:"Plis lokatè kalifye kounye a",
    n3tag:"Alèt", n3h:"Plent chofaj ap monte — konnen minimòm yo", n3m:"Rapòte mank chofaj bay 311 touswit",
    n4tag:"Lojman", n4h:"Nouvo lotri abòdab louvri sou Housing Connect", n4m:"Gratis pou aplike — pa janm peye yon frè", demo_news:"Tit egzanp (demo)",
    back:"Tounen", u_eye:"Di nou sa k ap pase", u_h:"Kisa k ap pase? Pran tan w.", u_p:"Ou ka ekri l, pran yon foto dokiman ou resevwa a, oswa chwazi nan sitiyasyon komen yo.",
    u_type:"Ekri l", u_photo:"Foto", u_pick:"Chwazi", u_ph:"Pa egzanp: pwopriyetè a glise yon papye anba pòt mwen e mwen pè...", continue:"Kontinye",
    up_t:"Pran oswa telechaje yon foto avi ou a", up_s:"N ap li l epi eksplike l an langaj senp.", reading:"N ap li dokiman ou…",
    o_evict_t:"Mwen resevwa yon avi oswa papye degèpisman", o_evict_s:"Yon lèt nan men pwopriyetè a oswa tribinal la", o_rent_t:"Mwen pa ka peye lwaye m", o_rent_s:"Mwen an reta oswa prèt pou m an reta",
    o_unsafe_t:"Apatman m pa an sekirite", o_unsafe_s:"Pa gen chofaj, dlo k ap koule, mwazi, reparasyon inyore", o_shelter_t:"Mwen pa gen kote pou m rete", o_shelter_s:"Mwen bezwen yon kote ki an sekirite aswè a",
    s_eye:"Men sa sa vle di", explain_more:"Eksplike pi an detay", deep_h:"Yon eksplikasyon pi konplè", show_options:"Montre m sa m ka fè",
    c_eye:"Ou pa pou kont ou", c_h:"Twa chemen devan. Chwazi sa ou pi alèz avè l.", c_p:"Pa gen move chwa. Kòmanse kote ou alèz.",
    door1t:"Pale ak yon moun reyèl", door1s:"Èd legal gratis ak liy lokatè", door2t:"Konnen dwa ou", door2s:"Gid an langaj senp dapre kalite dwa",
    door3t:"Sa pou fè apre", door3s:"Yon lis senp pou pwochen 24–48 èdtan", c_trust:"Sa yo se òganizasyon NYC gratis e serye. Anpil ede", c_trust_b:"kèlkeswa estati imigrasyon",
    t_eye:"Pale ak yon moun", t_h:"Moun ki ka ede w — gratis.", t_note:"Nimewo telefòn verifye an jen 2026. Toujou konfime lè yo, paske yo ka chanje.",
    search_ph:"Chèche pa non, lang, oswa mo kle…", search_none:"Pa gen rezilta — eseye yon lòt mo.",
    rt_eye:"Konnen dwa ou", rt_h:"Dwa ou yo, dapre kalite.", rt_p:"Klike sou yon kategori pou aprann plis. Tout bagay isit la aplike kèlkeswa estati imigrasyon.",
    n_eye:"Sa pou fè apre", n_h:"Pwochen 48 èdtan ou yo.", n_p:"Ti etap. Klike sou chak grenn pandan w ap avanse.",
    ck1t:"Pa panike — epi pa demenaje", ck1s:"Yon avi se pa yon lòd pou ale. Rete pwoteje dwa ou.",
    ck2t:"Pran foto avi a ak anvlòp la", ck2s:"Devan ak dèyè. Note dat ou resevwa l la.",
    ck3t:"Rele Legal Aid oswa liy lokatè a", ck3s:"Di yo ou resevwa yon avi ak dat la. Y ap gide w.",
    ck4t:"Ekri sa pwopriyetè a deklare", ck4s:"Konnen pwoblèm egzak la ede w ak nenpòt defansè reponn.",
    ck5t:"Make dat limit 10 jou a", ck5s:"Konte depi jou ou resevwa l. Aji anvan li fini.",
    n_re:"Ou deja fè pati ki pi difisil la — ou kòmanse. Yon apèl demen se pwogrè reyèl.", n_getnum:"Jwenn nimewo telefòn yo", n_done:"Rekòmanse / fini pou kounye a",
    b_eye:"Gade pou kont ou", b_h:"Èd pou lojman, dapre sitiyasyon.", b_p:"Chwazi sa ki pi pre sa w ap viv la.",
    b1t:"Fè fas ak degèpisman oswa yon avi", b1s:"Dwa, pwosesis la, kiyès ki ka ede", b2t:"Pa ka peye lwaye", b2s:"Asistans lwaye ak one-shot deal",
    b3t:"Kondisyon lavi ki pa an sekirite", b3s:"Pa gen chofaj, mwazi, reparasyon — dwa ou", b4t:"Ap viv san kay", b4s:"Dwa a refij ak admisyon PATH",
    b5t:"Ap chèche lojman abòdab", b5s:"NYC Housing Connect ak NYCHA", b6t:"Sekirite ak vyolans domestik", b6s:"Èd konfidansyèl ak refij ijans",
    b7t:"Diskriminasyon lojman", b7s:"Yo trete w enjisteman? Plenyen gratis",
    nav_home:"Akèy", nav_browse:"Gade", nav_help:"Jwenn èd", nav_rights:"Dwa", nav_contacts:"Kontak"
  },

  /* ===================== বাংলা (Bengali) ===================== */
  bn:{
    dates_title:"গুরুত্বপূর্ণ তারিখ", dates_sub:"বাসস্থান, অর্থ, ভোট, স্কুল ও কাজ", m_days:"দিন", m_mon:"মাস", m_open:"খোলা",
    d1t:"নোটিশের জবাব দিন", d1s:"Notice to Cure: ১০ দিনের মধ্যে পদক্ষেপ নিন", d2t:"হিটিং মৌসুম শুরু", d2s:"১ অক্টো–৩১ মে: হিট বাধ্যতামূলক",
    d3t:"ভাড়ার অনুস্মারক", d3s:"দেরির নোটিশ এর আগে আসতে পারে না", d4t:"হাউজিং লটারির শেষ তারিখ", d4s:"NYC Housing Connect-এ নতুন তালিকা", demo_dates:"নমুনা তারিখ (ডেমো)",
    maria_status:"সাহায্য করতে এখানে · বিনামূল্যে ও গোপন",
    c_evict:"📨 আমি একটি নোটিশ পেয়েছি", c_rent:"💵 ভাড়া দিতে পারছি না", c_unsafe:"🛠️ অ্যাপার্টমেন্ট নিরাপদ নয়", c_shelter:"🏠 থাকার জায়গা নেই",
    chat_ph:"কী হয়েছে আমাকে বলুন…", trust_b:"নিরাপদে ব্যবহার করুন।", trust_t:"আমরা আপনার নাম, অভিবাসন অবস্থা বা ঠিকানা জিজ্ঞাসা করি না। আপনি যা লেখেন তা শহর বা অন্য কারও সাথে শেয়ার করা হয় না।",
    news_title:"গুরুত্বপূর্ণ খবর", news_sub:"NYC বাসস্থান সতর্কতা", n1tag:"তহবিল", n1h:"বকেয়ার জন্য নতুন ভাড়া সহায়তা তহবিল ছাড়া হয়েছে", n1m:"ACCESS HRA-এর মাধ্যমে দ্রুত আবেদন করুন",
    n2tag:"অধিকার", n2h:"Right to Counsel বিনামূল্যে হাউজিং-কোর্ট আইনজীবী বাড়াচ্ছে", n2m:"আরও ভাড়াটিয়া এখন যোগ্য",
    n3tag:"সতর্কতা", n3h:"হিট অভিযোগ বাড়ছে — ন্যূনতম জানুন", n3m:"হিট না থাকলে সঙ্গে সঙ্গে 311-এ জানান",
    n4tag:"বাসস্থান", n4h:"Housing Connect-এ নতুন সাশ্রয়ী লটারি খোলা", n4m:"আবেদন বিনামূল্যে — কখনো ফি দেবেন না", demo_news:"নমুনা শিরোনাম (ডেমো)",
    back:"পেছনে", u_eye:"কী হচ্ছে আমাদের বলুন", u_h:"কী হচ্ছে? সময় নিন।", u_p:"আপনি টাইপ করতে পারেন, প্রাপ্ত কাগজের ছবি তুলতে পারেন, বা সাধারণ পরিস্থিতি থেকে বেছে নিতে পারেন।",
    u_type:"টাইপ করুন", u_photo:"ছবি", u_pick:"বেছে নিন", u_ph:"যেমন: বাড়িওয়ালা আমার দরজার নিচে একটি কাগজ রেখেছে এবং আমি ভীত...", continue:"এগিয়ে যান",
    up_t:"আপনার নোটিশের ছবি তুলুন বা আপলোড করুন", up_s:"আমরা এটি পড়ে সহজ ভাষায় ব্যাখ্যা করব।", reading:"আপনার নথি পড়া হচ্ছে…",
    o_evict_t:"আমি একটি নোটিশ বা উচ্ছেদের কাগজ পেয়েছি", o_evict_s:"বাড়িওয়ালা বা আদালত থেকে একটি চিঠি", o_rent_t:"আমি ভাড়া দিতে পারছি না", o_rent_s:"আমি পিছিয়ে আছি বা পড়তে চলেছি",
    o_unsafe_t:"আমার অ্যাপার্টমেন্ট নিরাপদ নয়", o_unsafe_s:"হিট নেই, ফুটো, ছত্রাক, মেরামত উপেক্ষিত", o_shelter_t:"আমার থাকার জায়গা নেই", o_shelter_s:"আজ রাতে আমার একটি নিরাপদ জায়গা দরকার",
    s_eye:"এর অর্থ কী", explain_more:"আরও বিস্তারিত ব্যাখ্যা", deep_h:"আরও পূর্ণ ব্যাখ্যা", show_options:"আমি কী করতে পারি দেখান",
    c_eye:"আপনি একা নন", c_h:"এগিয়ে যাওয়ার তিনটি পথ। যেটি স্বচ্ছন্দ মনে হয় বেছে নিন।", c_p:"কোনো ভুল পছন্দ নেই। যেখানে স্বচ্ছন্দ সেখান থেকে শুরু করুন।",
    door1t:"একজন প্রকৃত মানুষের সাথে কথা বলুন", door1s:"বিনামূল্যে আইনি সাহায্য ও ভাড়াটিয়া হটলাইন", door2t:"আপনার অধিকার জানুন", door2s:"অধিকারের ধরন অনুযায়ী সহজ গাইড",
    door3t:"এরপর কী করবেন", door3s:"পরবর্তী ২৪–৪৮ ঘণ্টার সহজ চেকলিস্ট", c_trust:"এগুলো বিনামূল্যে, বিশ্বস্ত NYC সংস্থা। অনেকেই সাহায্য করে", c_trust_b:"অভিবাসন অবস্থা নির্বিশেষে",
    t_eye:"কারও সাথে কথা বলুন", t_h:"যারা সাহায্য করতে পারেন — বিনামূল্যে।", t_note:"ফোন নম্বর জুন ২০২৬-এ যাচাই করা হয়েছে। সময়সূচি সবসময় নিশ্চিত করুন, এটি বদলাতে পারে।",
    search_ph:"নাম, ভাষা বা শব্দ দিয়ে খুঁজুন…", search_none:"কোনো ফলাফল নেই — অন্য শব্দ চেষ্টা করুন।",
    rt_eye:"আপনার অধিকার জানুন", rt_h:"ধরন অনুযায়ী আপনার অধিকার।", rt_p:"আরও জানতে একটি বিভাগে ট্যাপ করুন। এখানে সবকিছু অভিবাসন অবস্থা নির্বিশেষে প্রযোজ্য।",
    n_eye:"এরপর কী করবেন", n_h:"আপনার পরবর্তী ৪৮ ঘণ্টা।", n_p:"ছোট ধাপ। এগোতে এগোতে প্রতিটিতে ট্যাপ করুন।",
    ck1t:"আতঙ্কিত হবেন না — এবং বাসা ছাড়বেন না", ck1s:"নোটিশ চলে যাওয়ার আদেশ নয়। থাকা আপনার অধিকার রক্ষা করে।",
    ck2t:"নোটিশ ও খাম ছবি তুলুন", ck2s:"সামনে ও পেছনে। কবে পেয়েছেন তা লিখে রাখুন।",
    ck3t:"Legal Aid বা ভাড়াটিয়া হটলাইনে কল করুন", ck3s:"তাদের বলুন আপনি নোটিশ পেয়েছেন ও তারিখ। তারা পথ দেখাবে।",
    ck4t:"বাড়িওয়ালা কী দাবি করছে লিখে রাখুন", ck4s:"সঠিক সমস্যাটি জানা আপনাকে ও যেকোনো সমর্থককে জবাব দিতে সাহায্য করে।",
    ck5t:"১০ দিনের সময়সীমা চিহ্নিত করুন", ck5s:"যেদিন পেয়েছেন সেদিন থেকে গণনা করুন। শেষ হওয়ার আগে পদক্ষেপ নিন।",
    n_re:"আপনি ইতিমধ্যে সবচেয়ে কঠিন অংশটি করেছেন — শুরু করেছেন। আগামীকাল একটি কল প্রকৃত অগ্রগতি।", n_getnum:"ফোন নম্বরগুলো নিন", n_done:"আবার শুরু / আপাতত শেষ",
    b_eye:"নিজে ব্রাউজ করুন", b_h:"পরিস্থিতি অনুযায়ী আবাসন সহায়তা।", b_p:"আপনি যা অনুভব করছেন তার সবচেয়ে কাছেরটি বেছে নিন।",
    b1t:"উচ্ছেদ বা নোটিশের মুখোমুখি", b1s:"অধিকার, প্রক্রিয়া, কে সাহায্য করতে পারে", b2t:"ভাড়া দিতে পারছি না", b2s:"ভাড়া সহায়তা ও one-shot deal",
    b3t:"অনিরাপদ বসবাসের পরিবেশ", b3s:"হিট নেই, ছত্রাক, মেরামত — আপনার অধিকার", b4t:"গৃহহীনতা ভোগ করছেন", b4s:"আশ্রয়ের অধিকার ও PATH ভর্তি",
    b5t:"সাশ্রয়ী আবাসন খুঁজছেন", b5s:"NYC Housing Connect ও NYCHA", b6t:"নিরাপত্তা ও পারিবারিক সহিংসতা", b6s:"গোপন সাহায্য ও জরুরি আশ্রয়",
    b7t:"আবাসন বৈষম্য", b7s:"অন্যায্য আচরণ? বিনামূল্যে অভিযোগ করুন",
    nav_home:"হোম", nav_browse:"ব্রাউজ", nav_help:"সাহায্য", nav_rights:"অধিকার", nav_contacts:"যোগাযোগ"
  },

  /* ===================== Русский (Russian) ===================== */
  ru:{
    dates_title:"Важные даты", dates_sub:"Жильё, деньги, выборы, учёба и работа", m_days:"дн.", m_mon:"мес.", m_open:"открыто",
    d1t:"Ответить на уведомление", d1s:"Notice to Cure: действуйте в течение 10 дней", d2t:"Начало отопительного сезона", d2s:"1 окт–31 мая: отопление обязательно",
    d3t:"Напоминание об аренде", d3s:"Уведомление о просрочке не может прийти раньше", d4t:"Сроки жилищной лотереи", d4s:"Новые объявления NYC Housing Connect", demo_dates:"Примеры дат (демо)",
    maria_status:"Готова помочь · бесплатно и конфиденциально",
    c_evict:"📨 Я получил(а) уведомление", c_rent:"💵 Не могу платить аренду", c_unsafe:"🛠️ Небезопасная квартира", c_shelter:"🏠 Негде жить",
    chat_ph:"Расскажите, что происходит…", trust_b:"Безопасно в использовании.", trust_t:"Мы не спрашиваем ваше имя, иммиграционный статус или адрес. Ничего из написанного вами не передаётся городу или кому-либо ещё.",
    news_title:"Важные новости", news_sub:"Жилищные оповещения NYC", n1tag:"Финансы", n1h:"Выделены новые средства помощи по задолженности за аренду", n1m:"Подайте заявку заранее через ACCESS HRA",
    n2tag:"Права", n2h:"Right to Counsel расширяет бесплатных адвокатов в жилищном суде", n2m:"Теперь подходит больше арендаторов",
    n3tag:"Тревога", n3h:"Растёт число жалоб на отопление — знайте минимумы", n3m:"Сообщайте об отсутствии отопления в 311 сразу",
    n4tag:"Жильё", n4h:"Новые доступные лотереи открыты на Housing Connect", n4m:"Подача бесплатна — никогда не платите сбор", demo_news:"Примеры заголовков (демо)",
    back:"Назад", u_eye:"Расскажите, что происходит", u_h:"Что случилось? Не торопитесь.", u_p:"Можно напечатать, сфотографировать полученную бумагу или выбрать из частых ситуаций.",
    u_type:"Напечатать", u_photo:"Фото", u_pick:"Выбрать", u_ph:"Например: арендодатель подсунул бумагу под дверь, и мне страшно...", continue:"Продолжить",
    up_t:"Сфотографируйте или загрузите ваше уведомление", up_s:"Мы прочитаем его и объясним простыми словами.", reading:"Читаем ваш документ…",
    o_evict_t:"Я получил(а) уведомление или документ о выселении", o_evict_s:"Письмо от арендодателя или суда", o_rent_t:"Я не могу платить аренду", o_rent_s:"Я в просрочке или скоро буду",
    o_unsafe_t:"Моя квартира небезопасна", o_unsafe_s:"Нет отопления, протечки, плесень, ремонт игнорируют", o_shelter_t:"Мне негде жить", o_shelter_s:"Мне нужно безопасное место на сегодня",
    s_eye:"Вот что это значит", explain_more:"Объяснить подробнее", deep_h:"Более полное объяснение", show_options:"Покажите, что я могу сделать",
    c_eye:"Вы не одни", c_h:"Три пути вперёд. Выберите, что вам подходит.", c_p:"Нет неправильного выбора. Начните там, где вам комфортно.",
    door1t:"Поговорить с живым человеком", door1s:"Бесплатная юрпомощь и горячие линии для арендаторов", door2t:"Знайте свои права", door2s:"Понятные руководства по видам прав",
    door3t:"Что делать дальше", door3s:"Простой список на следующие 24–48 часов", c_trust:"Это бесплатные, надёжные организации NYC. Многие помогают", c_trust_b:"независимо от иммиграционного статуса",
    t_eye:"Поговорите с кем-то", t_h:"Люди, которые могут помочь — бесплатно.", t_note:"Номера телефонов проверены в июне 2026. Всегда уточняйте часы работы, они могут меняться.",
    search_ph:"Поиск по названию, языку или слову…", search_none:"Нет совпадений — попробуйте другое слово.",
    rt_eye:"Знайте свои права", rt_h:"Ваши права по видам.", rt_p:"Нажмите на категорию, чтобы узнать больше. Всё здесь применимо независимо от иммиграционного статуса.",
    n_eye:"Что делать дальше", n_h:"Ваши следующие 48 часов.", n_p:"Маленькие шаги. Отмечайте каждый по мере выполнения.",
    ck1t:"Не паникуйте — и не съезжайте", ck1s:"Уведомление — это не приказ уйти. Оставаясь, вы защищаете свои права.",
    ck2t:"Сфотографируйте уведомление и конверт", ck2s:"С обеих сторон. Запишите дату получения.",
    ck3t:"Позвоните в Legal Aid или на горячую линию", ck3s:"Скажите, что получили уведомление и дату. Вас направят.",
    ck4t:"Запишите, что заявляет арендодатель", ck4s:"Знание точной проблемы поможет вам и любому защитнику ответить.",
    ck5t:"Отметьте 10-дневный срок", ck5s:"Считайте со дня получения. Действуйте до его окончания.",
    n_re:"Вы уже сделали самое трудное — начали. Один звонок завтра — это реальный прогресс.", n_getnum:"Получить номера телефонов", n_done:"Начать заново / готово пока",
    b_eye:"Просмотр самостоятельно", b_h:"Помощь с жильём по ситуациям.", b_p:"Выберите то, что ближе всего к вашей ситуации.",
    b1t:"Грозит выселение или уведомление", b1s:"Права, процесс, кто поможет", b2t:"Не могу платить аренду", b2s:"Помощь с арендой и one-shot deal",
    b3t:"Небезопасные условия жизни", b3s:"Нет отопления, плесень, ремонт — ваши права", b4t:"Бездомность", b4s:"Право на приют и приём в PATH",
    b5t:"Поиск доступного жилья", b5s:"NYC Housing Connect и NYCHA", b6t:"Безопасность и домашнее насилие", b6s:"Конфиденциальная помощь и экстренный приют",
    b7t:"Жилищная дискриминация", b7s:"Обошлись несправедливо? Подайте бесплатную жалобу",
    nav_home:"Главная", nav_browse:"Обзор", nav_help:"Помощь", nav_rights:"Права", nav_contacts:"Контакты"
  },

  /* ===================== Italiano (Italian) ===================== */
  it:{
    dates_title:"Date importanti", dates_sub:"Casa, denaro, voto, scuola e lavoro", m_days:"giorni", m_mon:"mese", m_open:"apre",
    d1t:"Rispondere a un avviso", d1s:"Notice to Cure: agisci entro 10 giorni", d2t:"Inizia la stagione del riscaldamento", d2s:"1 ott–31 mag: riscaldamento obbligatorio",
    d3t:"Promemoria affitto", d3s:"Un avviso di ritardo non può arrivare prima", d4t:"Scadenze lotteria casa", d4s:"Nuovi annunci NYC Housing Connect", demo_dates:"Date di esempio (demo)",
    maria_status:"Qui per aiutarti · gratis e privato",
    c_evict:"📨 Ho ricevuto un avviso", c_rent:"💵 Non riesco a pagare l'affitto", c_unsafe:"🛠️ Appartamento non sicuro", c_shelter:"🏠 Non ho dove stare",
    chat_ph:"Dimmi cosa succede…", trust_b:"Sicuro da usare.", trust_t:"Non chiediamo il tuo nome, stato migratorio o indirizzo. Niente di ciò che scrivi viene condiviso con la città o con altri.",
    news_title:"Notizie importanti", news_sub:"Avvisi casa di NYC", n1tag:"Fondi", n1h:"Nuovi fondi di assistenza affitto per gli arretrati", n1m:"Fai domanda presto tramite ACCESS HRA",
    n2tag:"Diritti", n2h:"Right to Counsel amplia gli avvocati gratuiti nel tribunale della casa", n2m:"Più inquilini ora idonei",
    n3tag:"Allerta", n3h:"Reclami sul riscaldamento in aumento — conosci i minimi", n3m:"Segnala la mancanza di riscaldamento al 311 subito",
    n4tag:"Casa", n4h:"Nuove lotterie a prezzo accessibile su Housing Connect", n4m:"Domanda gratuita — non pagare mai una tariffa", demo_news:"Titoli di esempio (demo)",
    back:"Indietro", u_eye:"Raccontaci cosa succede", u_h:"Cosa succede? Con calma.", u_p:"Puoi scriverlo, fotografare un documento ricevuto o scegliere tra le situazioni comuni.",
    u_type:"Scrivilo", u_photo:"Foto", u_pick:"Scegli", u_ph:"Per esempio: il padrone di casa ha infilato un foglio sotto la mia porta e ho paura...", continue:"Continua",
    up_t:"Scatta o carica una foto del tuo avviso", up_s:"Lo leggeremo e lo spiegheremo in parole semplici.", reading:"Stiamo leggendo il tuo documento…",
    o_evict_t:"Ho ricevuto un avviso o un documento di sfratto", o_evict_s:"Una lettera dal padrone di casa o dal tribunale", o_rent_t:"Non riesco a pagare l'affitto", o_rent_s:"Sono in ritardo o sto per esserlo",
    o_unsafe_t:"Il mio appartamento non è sicuro", o_unsafe_s:"Niente riscaldamento, perdite, muffa, riparazioni ignorate", o_shelter_t:"Non ho dove stare", o_shelter_s:"Mi serve un posto sicuro stanotte",
    s_eye:"Ecco cosa significa", explain_more:"Spiega più a fondo", deep_h:"Una spiegazione più completa", show_options:"Mostrami cosa posso fare",
    c_eye:"Non sei solo", c_h:"Tre strade da seguire. Scegli quella giusta per te.", c_p:"Non c'è scelta sbagliata. Inizia da dove ti senti a tuo agio.",
    door1t:"Parla con una persona vera", door1s:"Aiuto legale gratuito e linee per inquilini", door2t:"Conosci i tuoi diritti", door2s:"Guide in parole semplici per tipo di diritto",
    door3t:"Cosa fare ora", door3s:"Una semplice lista per le prossime 24–48 ore", c_trust:"Sono organizzazioni di NYC gratuite e affidabili. Molte aiutano", c_trust_b:"indipendentemente dallo stato migratorio",
    t_eye:"Parla con qualcuno", t_h:"Persone che possono aiutarti — gratis.", t_note:"Numeri verificati a giugno 2026. Conferma sempre gli orari, possono cambiare.",
    search_ph:"Cerca per nome, lingua o parola chiave…", search_none:"Nessun risultato — prova un'altra parola.",
    rt_eye:"Conosci i tuoi diritti", rt_h:"I tuoi diritti, per tipo.", rt_p:"Tocca una categoria per saperne di più. Tutto qui vale indipendentemente dallo stato migratorio.",
    n_eye:"Cosa fare ora", n_h:"Le tue prossime 48 ore.", n_p:"Piccoli passi. Tocca ciascuno man mano che procedi.",
    ck1t:"Niente panico — e non andartene", ck1s:"Un avviso non è un ordine di andartene. Restare protegge i tuoi diritti.",
    ck2t:"Fotografa l'avviso e la busta", ck2s:"Davanti e dietro. Annota la data in cui l'hai ricevuto.",
    ck3t:"Chiama Legal Aid o la linea inquilini", ck3s:"Di' che hai ricevuto un avviso e la data. Ti guideranno.",
    ck4t:"Scrivi cosa sostiene il padrone di casa", ck4s:"Conoscere il problema esatto aiuta te e ogni difensore a rispondere.",
    ck5t:"Segna la scadenza dei 10 giorni", ck5s:"Conta dal giorno in cui l'hai ricevuto. Agisci prima che scada.",
    n_re:"Hai già fatto la parte più difficile — hai iniziato. Una telefonata domani è un vero progresso.", n_getnum:"Ottieni i numeri di telefono", n_done:"Ricomincia / finito per ora",
    b_eye:"Esplora da solo", b_h:"Aiuto per la casa, per situazione.", b_p:"Scegli ciò che è più vicino a quello che stai vivendo.",
    b1t:"Sfratto o un avviso in arrivo", b1s:"Diritti, la procedura, chi può aiutare", b2t:"Non riesco a pagare l'affitto", b2s:"Assistenza affitto e one-shot deal",
    b3t:"Condizioni abitative non sicure", b3s:"Niente riscaldamento, muffa, riparazioni — i tuoi diritti", b4t:"Senza fissa dimora", b4s:"Diritto al rifugio e accoglienza PATH",
    b5t:"Cerco una casa a prezzo accessibile", b5s:"NYC Housing Connect e NYCHA", b6t:"Sicurezza e violenza domestica", b6s:"Aiuto riservato e rifugio d'emergenza",
    b7t:"Discriminazione abitativa", b7s:"Trattato ingiustamente? Presenta un reclamo gratuito",
    nav_home:"Home", nav_browse:"Sfoglia", nav_help:"Aiuto", nav_rights:"Diritti", nav_contacts:"Contatti"
  },

  /* ===================== Français (French) ===================== */
  fr:{
    dates_title:"Dates importantes", dates_sub:"Logement, argent, vote, école et travail", m_days:"jours", m_mon:"mois", m_open:"ouvre",
    d1t:"Répondre à un avis", d1s:"Notice to Cure : agissez sous 10 jours", d2t:"Début de la saison de chauffage", d2s:"1 oct–31 mai : chauffage obligatoire",
    d3t:"Rappel de loyer", d3s:"Un avis de retard ne peut arriver avant", d4t:"Dates limites de loterie logement", d4s:"Nouvelles annonces NYC Housing Connect", demo_dates:"Dates d'exemple (démo)",
    maria_status:"Là pour vous aider · gratuit et privé",
    c_evict:"📨 J'ai reçu un avis", c_rent:"💵 Je ne peux pas payer le loyer", c_unsafe:"🛠️ Appartement non sûr", c_shelter:"🏠 Nulle part où aller",
    chat_ph:"Dites-moi ce qui se passe…", trust_b:"Sûr à utiliser.", trust_t:"Nous ne demandons ni votre nom, ni votre statut migratoire, ni votre adresse. Rien de ce que vous écrivez n'est partagé avec la ville ou qui que ce soit.",
    news_title:"Nouvelles importantes", news_sub:"Alertes logement NYC", n1tag:"Financement", n1h:"De nouveaux fonds d'aide au loyer débloqués pour les arriérés", n1m:"Faites une demande tôt via ACCESS HRA",
    n2tag:"Droits", n2h:"Right to Counsel élargit les avocats gratuits au tribunal du logement", n2m:"Plus de locataires sont désormais éligibles",
    n3tag:"Alerte", n3h:"Hausse des plaintes de chauffage — connaissez les minimums", n3m:"Signalez l'absence de chauffage au 311 sans tarder",
    n4tag:"Logement", n4h:"De nouvelles loteries abordables ouvertes sur Housing Connect", n4m:"Demande gratuite — ne payez jamais de frais", demo_news:"Titres d'exemple (démo)",
    back:"Retour", u_eye:"Dites-nous ce qui se passe", u_h:"Que se passe-t-il ? Prenez votre temps.", u_p:"Vous pouvez l'écrire, photographier un papier reçu, ou choisir parmi des situations courantes.",
    u_type:"Écrire", u_photo:"Photo", u_pick:"Choisir", u_ph:"Par exemple : le propriétaire a glissé un papier sous ma porte et j'ai peur...", continue:"Continuer",
    up_t:"Prenez ou téléversez une photo de votre avis", up_s:"Nous le lirons et l'expliquerons en mots simples.", reading:"Lecture de votre document…",
    o_evict_t:"J'ai reçu un avis ou un papier d'expulsion", o_evict_s:"Une lettre du propriétaire ou du tribunal", o_rent_t:"Je ne peux pas payer mon loyer", o_rent_s:"Je suis en retard ou sur le point de l'être",
    o_unsafe_t:"Mon appartement n'est pas sûr", o_unsafe_s:"Pas de chauffage, fuites, moisissure, réparations ignorées", o_shelter_t:"Je n'ai nulle part où aller", o_shelter_s:"J'ai besoin d'un endroit sûr ce soir",
    s_eye:"Voici ce que cela signifie", explain_more:"Expliquer plus en détail", deep_h:"Une explication plus complète", show_options:"Montrez-moi ce que je peux faire",
    c_eye:"Vous n'êtes pas seul", c_h:"Trois voies possibles. Choisissez celle qui vous convient.", c_p:"Il n'y a pas de mauvais choix. Commencez là où vous êtes à l'aise.",
    door1t:"Parler à une vraie personne", door1s:"Aide juridique gratuite et lignes pour locataires", door2t:"Connaissez vos droits", door2s:"Guides en mots simples par type de droit",
    door3t:"Quoi faire ensuite", door3s:"Une liste simple pour les 24–48 prochaines heures", c_trust:"Ce sont des organismes new-yorkais gratuits et fiables. Beaucoup aident", c_trust_b:"quel que soit le statut migratoire",
    t_eye:"Parlez à quelqu'un", t_h:"Des personnes qui peuvent aider — gratuitement.", t_note:"Numéros vérifiés en juin 2026. Confirmez toujours les horaires, ils peuvent changer.",
    search_ph:"Rechercher par nom, langue ou mot-clé…", search_none:"Aucun résultat — essayez un autre mot.",
    rt_eye:"Connaissez vos droits", rt_h:"Vos droits, par catégorie.", rt_p:"Touchez une catégorie pour en savoir plus. Tout ici s'applique quel que soit le statut migratoire.",
    n_eye:"Quoi faire ensuite", n_h:"Vos 48 prochaines heures.", n_p:"De petits pas. Touchez chacun au fur et à mesure.",
    ck1t:"Pas de panique — et ne partez pas", ck1s:"Un avis n'est pas un ordre de partir. Rester protège vos droits.",
    ck2t:"Photographiez l'avis et l'enveloppe", ck2s:"Recto et verso. Notez la date de réception.",
    ck3t:"Appelez Legal Aid ou la ligne locataires", ck3s:"Dites que vous avez reçu un avis et la date. On vous guidera.",
    ck4t:"Notez ce que le propriétaire prétend", ck4s:"Connaître le problème exact vous aide, vous et tout défenseur, à répondre.",
    ck5t:"Marquez l'échéance de 10 jours", ck5s:"Comptez à partir du jour de réception. Agissez avant la fin.",
    n_re:"Vous avez déjà fait le plus dur — vous avez commencé. Un appel demain est un vrai progrès.", n_getnum:"Obtenir les numéros de téléphone", n_done:"Recommencer / terminé pour l'instant",
    b_eye:"Explorez par vous-même", b_h:"Aide au logement, par situation.", b_p:"Choisissez ce qui est le plus proche de votre situation.",
    b1t:"Face à une expulsion ou un avis", b1s:"Droits, le processus, qui peut aider", b2t:"Je ne peux pas payer le loyer", b2s:"Aide au loyer et one-shot deal",
    b3t:"Conditions de logement non sûres", b3s:"Pas de chauffage, moisissure, réparations — vos droits", b4t:"Sans-abri", b4s:"Droit à l'hébergement et accueil PATH",
    b5t:"À la recherche d'un logement abordable", b5s:"NYC Housing Connect et NYCHA", b6t:"Sécurité et violence domestique", b6s:"Aide confidentielle et hébergement d'urgence",
    b7t:"Discrimination au logement", b7s:"Traité injustement ? Déposez une plainte gratuite",
    nav_home:"Accueil", nav_browse:"Parcourir", nav_help:"Aide", nav_rights:"Droits", nav_contacts:"Contacts"
  },

  /* ===================== Deutsch (German) ===================== */
  de:{
    dates_title:"Wichtige Termine", dates_sub:"Wohnen, Geld, Wahlen, Schule und Arbeit", m_days:"Tage", m_mon:"Mon.", m_open:"offen",
    d1t:"Auf eine Mitteilung reagieren", d1s:"Notice to Cure: innerhalb von 10 Tagen handeln", d2t:"Heizsaison beginnt", d2s:"1. Okt–31. Mai: Heizung Pflicht",
    d3t:"Mieterinnerung", d3s:"Eine Verzugsmitteilung darf nicht früher kommen", d4t:"Fristen der Wohnungslotterie", d4s:"Neue NYC-Housing-Connect-Angebote", demo_dates:"Beispieltermine (Demo)",
    maria_status:"Hier, um zu helfen · kostenlos und privat",
    c_evict:"📨 Ich habe eine Mitteilung erhalten", c_rent:"💵 Ich kann die Miete nicht zahlen", c_unsafe:"🛠️ Unsichere Wohnung", c_shelter:"🏠 Keine Unterkunft",
    chat_ph:"Erzähl mir, was los ist…", trust_b:"Sicher zu benutzen.", trust_t:"Wir fragen nicht nach Ihrem Namen, Aufenthaltsstatus oder Ihrer Adresse. Nichts, was Sie schreiben, wird mit der Stadt oder anderen geteilt.",
    news_title:"Wichtige Nachrichten", news_sub:"NYC-Wohnungswarnungen", n1tag:"Förderung", n1h:"Neue Mietbeihilfen für Rückstände freigegeben", n1m:"Früh über ACCESS HRA beantragen",
    n2tag:"Rechte", n2h:"Right to Counsel baut kostenlose Anwälte im Wohnungsgericht aus", n2m:"Mehr Mieter sind nun berechtigt",
    n3tag:"Warnung", n3h:"Mehr Heizungsbeschwerden — kennen Sie die Mindestwerte", n3m:"Fehlende Heizung sofort dem 311 melden",
    n4tag:"Wohnen", n4h:"Neue bezahlbare Lotterien auf Housing Connect offen", n4m:"Antrag kostenlos — niemals eine Gebühr zahlen", demo_news:"Beispielüberschriften (Demo)",
    back:"Zurück", u_eye:"Erzählen Sie uns, was los ist", u_h:"Was ist los? Lassen Sie sich Zeit.", u_p:"Sie können es tippen, ein erhaltenes Schreiben fotografieren oder aus häufigen Situationen wählen.",
    u_type:"Tippen", u_photo:"Foto", u_pick:"Auswählen", u_ph:"Zum Beispiel: Der Vermieter hat mir einen Zettel unter die Tür geschoben und ich habe Angst...", continue:"Weiter",
    up_t:"Machen oder laden Sie ein Foto Ihrer Mitteilung hoch", up_s:"Wir lesen es und erklären es in einfachen Worten.", reading:"Wir lesen Ihr Dokument…",
    o_evict_t:"Ich habe eine Mitteilung oder Räumungspapiere erhalten", o_evict_s:"Ein Brief vom Vermieter oder Gericht", o_rent_t:"Ich kann meine Miete nicht zahlen", o_rent_s:"Ich bin im Rückstand oder gerate gleich hinein",
    o_unsafe_t:"Meine Wohnung ist unsicher", o_unsafe_s:"Keine Heizung, undicht, Schimmel, Reparaturen ignoriert", o_shelter_t:"Ich habe keine Unterkunft", o_shelter_s:"Ich brauche heute Nacht einen sicheren Ort",
    s_eye:"Das bedeutet es", explain_more:"Ausführlicher erklären", deep_h:"Eine vollständigere Erklärung", show_options:"Zeig mir, was ich tun kann",
    c_eye:"Sie sind nicht allein", c_h:"Drei Wege nach vorn. Wählen Sie, was sich richtig anfühlt.", c_p:"Es gibt keine falsche Wahl. Beginnen Sie dort, wo Sie sich wohlfühlen.",
    door1t:"Mit einer echten Person sprechen", door1s:"Kostenlose Rechtshilfe und Mieter-Hotlines", door2t:"Kennen Sie Ihre Rechte", door2s:"Verständliche Leitfäden nach Art des Rechts",
    door3t:"Was als Nächstes zu tun ist", door3s:"Eine einfache Checkliste für die nächsten 24–48 Stunden", c_trust:"Das sind kostenlose, vertrauenswürdige NYC-Organisationen. Viele helfen", c_trust_b:"unabhängig vom Aufenthaltsstatus",
    t_eye:"Sprechen Sie mit jemandem", t_h:"Menschen, die helfen können — kostenlos.", t_note:"Telefonnummern im Juni 2026 geprüft. Bestätigen Sie immer die Zeiten, sie können sich ändern.",
    search_ph:"Nach Name, Sprache oder Stichwort suchen…", search_none:"Keine Treffer — versuchen Sie ein anderes Wort.",
    rt_eye:"Kennen Sie Ihre Rechte", rt_h:"Ihre Rechte, nach Art.", rt_p:"Tippen Sie auf eine Kategorie, um mehr zu erfahren. Alles hier gilt unabhängig vom Aufenthaltsstatus.",
    n_eye:"Was als Nächstes zu tun ist", n_h:"Ihre nächsten 48 Stunden.", n_p:"Kleine Schritte. Tippen Sie jeden an, während Sie vorankommen.",
    ck1t:"Keine Panik — und ziehen Sie nicht aus", ck1s:"Eine Mitteilung ist kein Befehl zu gehen. Bleiben schützt Ihre Rechte.",
    ck2t:"Fotografieren Sie Mitteilung und Umschlag", ck2s:"Vorder- und Rückseite. Notieren Sie das Empfangsdatum.",
    ck3t:"Rufen Sie Legal Aid oder die Mieter-Hotline an", ck3s:"Sagen Sie, dass Sie eine Mitteilung und das Datum haben. Man leitet Sie an.",
    ck4t:"Notieren Sie, was der Vermieter behauptet", ck4s:"Das genaue Problem zu kennen, hilft Ihnen und jedem Beistand zu antworten.",
    ck5t:"Markieren Sie die 10-Tage-Frist", ck5s:"Zählen Sie ab dem Empfangstag. Handeln Sie vor Ablauf.",
    n_re:"Sie haben den schwersten Teil schon geschafft — Sie haben angefangen. Ein Anruf morgen ist echter Fortschritt.", n_getnum:"Telefonnummern erhalten", n_done:"Neu beginnen / vorerst fertig",
    b_eye:"Selbst stöbern", b_h:"Wohnhilfe, nach Situation.", b_p:"Wählen Sie, was Ihrer Lage am nächsten kommt.",
    b1t:"Räumung oder Mitteilung droht", b1s:"Rechte, der Ablauf, wer helfen kann", b2t:"Kann die Miete nicht zahlen", b2s:"Mietbeihilfe und one-shot deal",
    b3t:"Unsichere Wohnverhältnisse", b3s:"Keine Heizung, Schimmel, Reparaturen — Ihre Rechte", b4t:"Von Obdachlosigkeit betroffen", b4s:"Recht auf Unterkunft und PATH-Aufnahme",
    b5t:"Suche nach bezahlbarem Wohnraum", b5s:"NYC Housing Connect und NYCHA", b6t:"Sicherheit und häusliche Gewalt", b6s:"Vertrauliche Hilfe und Notunterkunft",
    b7t:"Wohnungsdiskriminierung", b7s:"Ungerecht behandelt? Beschwerde kostenlos einreichen",
    nav_home:"Start", nav_browse:"Stöbern", nav_help:"Hilfe", nav_rights:"Rechte", nav_contacts:"Kontakte"
  }

};

/* ------------------------------------------------------------------
   MARIA CHAT LINES + a couple of status strings
   (en + es are repeated here too so the lookup has one home for all)
   ------------------------------------------------------------------ */
const CASA_MISC_I18N = {
  en:{ greet:"Hi, I'm Maria. 💚 You're in the right place. Tell me what's going on — in your own words, in any language. Nothing is shared with anyone.",
       ack:"Thank you for telling me. I understand, and you have options. Let me show you what this means — one step at a time.",
       photo_user:"📄 Photo of my notice", photo_read:"I read it — this looks like a Notice to Cure. Here's what it means.",
       read_done:"✅ Done — here’s what it says.", more_label:"Official resources", all_label:"All" },
  es:{ greet:"Hola, soy Maria. 💚 Estás en el lugar correcto. Cuéntame qué está pasando — con tus palabras, en cualquier idioma. Nada se comparte con nadie.",
       ack:"Gracias por contarme. Entiendo, y tienes opciones. Déjame mostrarte qué significa — paso a paso.",
       photo_user:"📄 Foto de mi aviso", photo_read:"Lo leí — esto parece un Aviso para Subsanar. Esto es lo que significa.",
       read_done:"✅ Listo — esto es lo que dice.", more_label:"Recursos oficiales", all_label:"Todas" },
  zh:{ greet:"你好，我是 Maria。💚 你来对地方了。用你自己的话告诉我发生了什么——任何语言都可以。任何内容都不会分享给别人。",
       ack:"谢谢你告诉我。我明白，你有选择。让我一步一步告诉你这意味着什么。",
       photo_user:"📄 我通知的照片", photo_read:"我读了——这看起来像一份整改通知。这是它的含义。",
       read_done:"✅ 完成——这是上面写的内容。", more_label:"官方资源", all_label:"全部" },
  ht:{ greet:"Bonjou, mwen se Maria. 💚 Ou nan bon kote a. Di m sa k ap pase — ak pwòp mo pa w, nan nenpòt lang. Anyen pa pataje ak pèsonn.",
       ack:"Mèsi dèske ou di m. Mwen konprann, e ou gen opsyon. Kite m montre w sa sa vle di — yon etap alafwa.",
       photo_user:"📄 Foto avi mwen an", photo_read:"Mwen li l — sa sanble yon Avi pou Korije. Men sa sa vle di.",
       read_done:"✅ Fini — men sa li di.", more_label:"Resous ofisyèl", all_label:"Tout" },
  bn:{ greet:"নমস্কার, আমি Maria। 💚 আপনি সঠিক জায়গায় এসেছেন। নিজের ভাষায় আমাকে বলুন কী হয়েছে — যেকোনো ভাষায়। কিছুই কারও সাথে শেয়ার করা হয় না।",
       ack:"আমাকে জানানোর জন্য ধন্যবাদ। আমি বুঝি, এবং আপনার বিকল্প আছে। আসুন ধাপে ধাপে দেখাই এর অর্থ কী।",
       photo_user:"📄 আমার নোটিশের ছবি", photo_read:"আমি পড়েছি — এটি একটি Notice to Cure বলে মনে হচ্ছে। এর অর্থ এই।",
       read_done:"✅ সম্পন্ন — এতে যা লেখা আছে।", more_label:"সরকারি সম্পদ", all_label:"সব" },
  ru:{ greet:"Здравствуйте, я Maria. 💚 Вы там, где нужно. Расскажите своими словами, что происходит — на любом языке. Ничего никому не передаётся.",
       ack:"Спасибо, что рассказали. Я понимаю, и у вас есть варианты. Давайте я покажу, что это значит — шаг за шагом.",
       photo_user:"📄 Фото моего уведомления", photo_read:"Я прочитала — это похоже на Notice to Cure. Вот что это значит.",
       read_done:"✅ Готово — вот что там написано.", more_label:"Официальные ресурсы", all_label:"Все" },
  it:{ greet:"Ciao, sono Maria. 💚 Sei nel posto giusto. Dimmi cosa succede — con parole tue, in qualsiasi lingua. Niente viene condiviso con nessuno.",
       ack:"Grazie per avermelo detto. Capisco, e hai delle opzioni. Lascia che ti mostri cosa significa — un passo alla volta.",
       photo_user:"📄 Foto del mio avviso", photo_read:"L'ho letto — sembra un Notice to Cure. Ecco cosa significa.",
       read_done:"✅ Fatto — ecco cosa dice.", more_label:"Risorse ufficiali", all_label:"Tutte" },
  fr:{ greet:"Bonjour, je suis Maria. 💚 Vous êtes au bon endroit. Dites-moi ce qui se passe — avec vos mots, dans n'importe quelle langue. Rien n'est partagé avec personne.",
       ack:"Merci de me l'avoir dit. Je comprends, et vous avez des options. Laissez-moi vous montrer ce que cela signifie — étape par étape.",
       photo_user:"📄 Photo de mon avis", photo_read:"Je l'ai lu — cela ressemble à un Notice to Cure. Voici ce que cela signifie.",
       read_done:"✅ Terminé — voici ce qu'il dit.", more_label:"Ressources officielles", all_label:"Tous" },
  de:{ greet:"Hallo, ich bin Maria. 💚 Sie sind hier richtig. Erzählen Sie mir mit eigenen Worten, was los ist — in jeder Sprache. Nichts wird mit jemandem geteilt.",
       ack:"Danke, dass Sie es mir sagen. Ich verstehe, und Sie haben Optionen. Lassen Sie mich Ihnen zeigen, was das bedeutet — Schritt für Schritt.",
       photo_user:"📄 Foto meiner Mitteilung", photo_read:"Ich habe es gelesen — das sieht nach einem Notice to Cure aus. Das bedeutet es.",
       read_done:"✅ Fertig — das steht darin.", more_label:"Offizielle Ressourcen", all_label:"Alle" }
};

/* ------------------------------------------------------------------
   DATE POP-UP SECTION LABELS  (en + es live in index.html DLG_LABELS)
   ------------------------------------------------------------------ */
const CASA_DLG_I18N = {
  zh:{ imp:"为什么重要", det:"详情", elig:"适用于谁", src:"来源" },
  ht:{ imp:"Poukisa li enpòtan", det:"Detay", elig:"Pou kiyès li ye", src:"Sous" },
  bn:{ imp:"কেন গুরুত্বপূর্ণ", det:"বিস্তারিত", elig:"কার জন্য", src:"উৎস" },
  ru:{ imp:"Почему это важно", det:"Подробности", elig:"Для кого", src:"Источник" },
  it:{ imp:"Perché è importante", det:"Dettagli", elig:"Per chi è", src:"Fonte" },
  fr:{ imp:"Pourquoi c'est important", det:"Détails", elig:"Pour qui", src:"Source" },
  de:{ imp:"Warum es wichtig ist", det:"Details", elig:"Für wen", src:"Quelle" }
};

/* ------------------------------------------------------------------
   SITUATION SUMMARIES  (the Summary screen).
   Same shape as the SUM object in index.html: each situation has
   {title, tag, plain, reassure, facts:[[emoji,html],...], deep:html}.
   Keys not provided fall back to English automatically.
   ------------------------------------------------------------------ */
const CASA_SUM_I18N = {};

/* ------------------------------------------------------------------
   KNOW-YOUR-RIGHTS GUIDES (same ORDER as the RIGHTS array in index.html).
   Each entry: {t:title, s:subtitle, items:[...]}. Links stay shared.
   ------------------------------------------------------------------ */
const CASA_RIGHTS_I18N = {};

/* ===================== Italiano (Italian) — summaries ===================== */
CASA_SUM_I18N.it = {
  type:{title:"Sembra un Notice to Cure (avviso di sanatoria).", tag:"⏳ Urgente · 10 giorni",
    plain:"Da quello che descrivi, il padrone di casa ti ha dato un <b>Notice to Cure</b> — un foglio che sostiene che hai violato una regola del contratto. <b>Non</b> è uno sfratto. È il primo passo di un processo, e hai tempo e opzioni.",
    reassure:"Un avviso non è uno sfratto. Hai dei diritti, e ogni giorno c'è chi aiuta gratis. Procediamo un passo alla volta.",
    facts:[["📅","<b>Hai circa 10 giorni</b> per rispondere o risolvere il problema."],["⚖️","<b>Questo non è un ordine di sfratto.</b> Solo un giudice può ordinarlo, dopo una causa."],["🆓","<b>Potresti avere diritto a un avvocato gratuito</b> tramite il Right to Counsel di NYC."]],
    deep:"<p>Un <b>Notice to Cure</b> è un avvertimento scritto, non un ordine del tribunale. Il padrone di casa sostiene che hai violato un 'obbligo sostanziale' del contratto — per esempio un animale non autorizzato, occupanti in più o rumore. L'avviso deve darti un termine (di solito 10 giorni) per correggere il problema.</p><p>Se correggi entro il termine, la questione di solito finisce lì. In caso contrario, il passo successivo è un <b>Notice of Termination</b>, e solo dopo possono avviare una causa nel tribunale della casa. Anche allora ricevi una data in tribunale e la possibilità di rispondere — nulla accade in automatico.</p><p>Le mosse più importanti: conserva l'avviso, non andartene, e chiama subito un avvocato per inquilini o una linea gratuita perché qualcuno riveda con te le parole esatte.</p>"},
  evict:{title:"Di fronte a un avviso o a uno sfratto.", tag:"⏳ Urgente",
    plain:"Ricevere un avviso fa paura, ma è l'<b>inizio</b> di un processo, non la fine. Niente accade da un giorno all'altro, e hai protezioni reali.",
    reassure:"Non puoi essere rimosso senza una causa e l'ordine di un giudice. Hai tempo. Troviamo il tuo prossimo passo.",
    facts:[["📅","<b>Le scadenze contano</b> — ma perderne una raramente è la fine. Agisci presto, senza panico."],["⚖️","<b>Solo un tribunale</b> può ordinare uno sfratto, mai il padrone di casa direttamente."],["🆓","<b>Esiste aiuto legale gratuito</b> proprio per questo."]],
    deep:"<p>Uno sfratto a NYC è un processo legale con più fasi, e l'inquilino ha diritto a essere ascoltato in ognuna. Di solito inizia con un avviso scritto, poi un'istanza in tribunale, poi un'udienza dove puoi esporre la tua versione. Il padrone di casa <b>non può</b> cambiare le serrature, rimuovere le tue cose o staccare le utenze per costringerti ad andartene — è uno sfratto illegale 'fai-da-te'.</p><p>Solo un marshal cittadino, con un mandato del giudice, può eseguire uno sfratto, e prima ricevi un avviso scritto. In qualsiasi fase puoi chiedere più tempo, sollevare difese (come riparazioni necessarie o documenti errati) e richiedere un avvocato gratuito.</p><p>Agire presto ti dà più opzioni — la cosa peggiore è ignorare i documenti e perdere una data in tribunale.</p>"},
  rent:{title:"In ritardo con l'affitto.", tag:"💵 C'è aiuto disponibile",
    plain:"Restare indietro con l'affitto è una delle situazioni più comuni a NYC — e ci sono <b>programmi specifici</b> per aiutare, inclusi i sussidi d'emergenza 'one-shot deal'.",
    reassure:"Dovere l'affitto non significa perdere la casa. Molti recuperano con aiuti che non sapevano esistere. Troviamoli.",
    facts:[["💰","<b>One-Shot Deal (HRA)</b> può coprire gli arretrati in un'emergenza."],["📝","<b>Fai domanda tramite ACCESS HRA</b> — operatori possono aiutarti."],["🛡️","<b>Fare domanda può sospendere</b> alcune fasi dello sfratto. Conviene farlo presto."]],
    deep:"<p>Se sei in ritardo con l'affitto, l'<b>Assistenza d'emergenza ('One-Shot Deal')</b> di HRA può pagare gli arretrati per chi è idoneo, soprattutto se puoi dimostrare che riuscirai a stare al passo. Fai domanda su ACCESS HRA, e un assistente sociale esamina la tua situazione.</p><p>Altre vie si possono sommare: sussidi da enti no-profit, accordi di pagamento col padrone di casa e — se una causa è già avviata — programmi che ti collegano a un avvocato gratuito. Documentare reddito, importo dovuto e difficoltà (perdita del lavoro, spese mediche) rafforza la domanda.</p><p>La chiave è iniziare prima che il debito cresca. Anche una soluzione parziale può fermare l'escalation di una causa.</p>"},
  unsafe:{title:"Condizioni abitative non sicure.", tag:"🛠️ Dovere del padrone di casa",
    plain:"Riscaldamento, acqua calda e riparazioni sicure sono un tuo <b>diritto legale</b> — non favori. Il padrone di casa deve fornirli, e la città può farli rispettare.",
    reassure:"Non devi vivere così, e chiedere riparazioni è un tuo diritto. Segnalarlo non può portare a uno sfratto legale.",
    facts:[["🔥","<b>La stagione del riscaldamento</b> (1 ott–31 mag) richiede temperature minime stabilite."],["📞","<b>Chiama il 311</b> per presentare un reclamo e creare un registro ufficiale."],["🚫","<b>La ritorsione è illegale</b> — il padrone non può punirti per aver segnalato."]],
    deep:"<p>Ogni inquilino ha diritto a una casa vivibile — la cosiddetta <b>garanzia di abitabilità</b>. Significa riscaldamento e acqua calda funzionanti, niente perdite o muffa, impianti funzionanti e assenza di infestanti. Durante la stagione del riscaldamento (1 ott–31 mag) i padroni di casa devono mantenere gli appartamenti a temperature minime, giorno e notte.</p><p>Quando segnali le condizioni al 311, la città crea un registro e può inviare un ispettore, che può emettere violazioni contro il padrone di casa. Quel registro è potente — ti sostiene in caso di controversia e può supportare un 'caso di riparazione' (azione HP) nel tribunale della casa per imporre i lavori.</p><p>È illegale che il padrone di casa ti faccia ritorsioni — aumentare l'affitto, negare il rinnovo o minacciare lo sfratto — perché hai chiesto riparazioni o chiamato il 311.</p>"},
  shelter:{title:"Ti serve un posto sicuro.", tag:"🏠 Diritto al rifugio",
    plain:"A New York City hai un <b>diritto legale al rifugio</b>. Nessuno dovrebbe dormire in strada stanotte, e ci sono persone il cui lavoro è aiutarti proprio ora.",
    reassure:"Hai diritto a un posto sicuro stanotte. Non sei un peso — questo aiuto esiste proprio per questo momento.",
    facts:[["🛏️","<b>NYC ha un diritto legale al rifugio</b> per chi ne ha bisogno."],["📍","<b>PATH (Bronx)</b> è il centro di accoglienza per famiglie con bambini — aperto 24/7."],["📞","<b>Chiama il 311</b> a qualsiasi ora per essere collegato all'accoglienza."]],
    deep:"<p>New York City è uno dei pochi posti nel Paese con un <b>diritto legale al rifugio</b> — cioè la città deve fornire un letto a chi ne ha bisogno. Non devi dimostrare lo stato migratorio per cercare un rifugio d'emergenza.</p><p>Le famiglie con bambini passano da <b>PATH</b> nel Bronx per l'accoglienza; gli adulti soli usano centri di accoglienza designati, e il 311 può indirizzarti a quello giusto a qualsiasi ora. Porta gli eventuali documenti, ma la mancanza di carte non deve impedirti di essere ricevuto.</p><p>Se stai fuggendo dalla violenza, esistono rifugi riservati separati per la violenza domestica — dillo all'accoglienza o alla linea e ti indirizzeranno in sicurezza. Il rifugio è pensato come punto di partenza verso una casa stabile, con assistenti che aiutano nei passi successivi.</p>"},
  affordable:{title:"Cercare una casa accessibile.", tag:"🏗️ Un passo alla volta",
    plain:"La casa accessibile a NYC passa soprattutto da <b>lotterie e liste d'attesa</b>. Ci vuole pazienza, ma iscrivere presto il proprio nome è la mossa più importante — e fare domanda è gratis.",
    reassure:"Può sembrare lento, ma ogni domanda è una possibilità reale. Registrarti oggi ti mette in gioco. Iniziamo.",
    facts:[["🎟️","<b>NYC Housing Connect</b> elenca le lotterie di appartamenti accessibili a cui puoi candidarti."],["📋","<b>NYCHA e Section 8</b> hanno liste d'attesa — entrarci presto conta di più."],["🆓","<b>Fare domanda è sempre gratis.</b> Non pagare mai per partecipare a una lotteria abitativa."]],
    deep:"<p>La maggior parte delle case accessibili a NYC è assegnata tramite <b>NYC Housing Connect</b>, il sito ufficiale delle lotterie della città. Crei un profilo con la dimensione del nucleo e il reddito, poi fai domanda per gli annunci per cui sei idoneo. La selezione è per lotteria e numero di protocollo, quindi candidarsi a molti annunci nel tempo migliora le probabilità.</p><p>A parte, <b>NYCHA</b> (case popolari) e i voucher <b>Section 8</b> usano lunghe liste d'attesa — quando aprono, registrati subito, perché la posizione dipende dalla data. Tieni aggiornati i contatti per non perdere una lettera.</p><p>Attento alle truffe: le lotterie legittime sono sempre gratuite, non chiedono mai un pagamento per 'tenere' un appartamento e non garantiscono un'unità a pagamento.</p>"},
  dv:{title:"La tua sicurezza viene prima.", tag:"🛟 Aiuto riservato · 24/7",
    plain:"Se ti fanno del male o ti minacciano a casa, non devi affrontarlo da solo. Ci sono persone disponibili <b>proprio ora, a qualsiasi ora</b>, che possono aiutarti a trovare un posto sicuro e a fare un piano — in modo privato e gratuito.",
    reassure:"Meriti di essere al sicuro. Questi servizi sono riservati, gratuiti e disponibili 24/7 — incluso aiuto indipendentemente dallo stato migratorio.",
    facts:[["📞","<b>La linea 24 ore di NYC</b> può trovare un rifugio d'emergenza e aiutarti a pianificare: 1-800-621-HOPE."],["🤫","<b>È riservato.</b> Non devi dare il tuo nome per ricevere aiuto o consigli."],["🏠","<b>I rifugi d'emergenza per violenza domestica</b> esistono in tutti e cinque i distretti, con spazio per i bambini."]],
    deep:"<p>Se stai subendo violenza domestica o di genere, la tua sicurezza è la priorità — e New York City ha servizi riservati dedicati proprio a questo. La linea 24 ore (1-800-621-HOPE) può collegarti a un rifugio d'emergenza, aiutarti a fare un piano di sicurezza e metterti in contatto con sostegno psicologico e aiuto legale, tutto gratis e in molte lingue.</p><p>Questi servizi sono separati dal normale sistema di rifugi e restano riservati per proteggere la tua posizione. Non devi condividere lo stato migratorio, e i sopravvissuti hanno tutele abitative specifiche — incluso il diritto a programmi di indirizzo riservato.</p><p>Se sei in pericolo immediato, chiama il 911. Altrimenti la linea può esaminare le tue opzioni al tuo ritmo — nessuna pressione a decidere prima che tu sia pronto.</p>"},
  discrimination:{title:"Questo può essere illegale — e puoi agire.", tag:"⚖️ Hai dei diritti",
    plain:"Se un padrone di casa ti rifiuta, ti molesta o ti tratta diversamente per chi sei — razza, religione, stato migratorio, disabilità, avere figli o usare un voucher Section 8 — è <b>discriminazione illegale</b> a NYC, e puoi presentare un reclamo gratuito.",
    reassure:"Non devi semplicemente accettarlo. Presentare un reclamo è gratis, e usare un voucher e il tuo stato migratorio sono entrambi protetti.",
    facts:[["🛡️","<b>La fonte di reddito è protetta</b> — non possono rifiutarti per l'uso di un voucher Section 8."],["📝","<b>Presentare è gratis</b> tramite la Commissione per i Diritti Umani di NYC."],["🌐","<b>Ci sono anche opzioni statali e federali</b> se il tuo caso è fuori dalla portata di NYC."]],
    deep:"<p>NYC ha alcune delle leggi sulla casa equa più forti del Paese. Un padrone di casa, un agente o un edificio non possono rifiutarti, farti pagare di più o trattarti diversamente per razza, colore, religione, origine nazionale, stato migratorio, disabilità, età, genere, orientamento sessuale o per avere figli. Non possono nemmeno rifiutarti per l'uso di un voucher abitativo — si chiama <b>discriminazione sulla fonte di reddito</b> ed è illegale.</p><p>Se accade, annota cosa è stato detto, da chi e quando; conserva messaggi, email e annunci. Puoi presentare un reclamo gratuito alla <b>Commissione per i Diritti Umani di NYC</b>, e per i casi fuori città ci sono opzioni statali (Divisione Diritti Umani NY) e federali (HUD).</p><p>Presentare è gratis, puoi farlo indipendentemente dallo stato migratorio, ed è illegale che un padrone di casa ti faccia ritorsioni per aver fatto valere questi diritti.</p>"}
};

/* ===================== Français (French) — summaries ===================== */
CASA_SUM_I18N.fr = {
  type:{title:"Cela ressemble à un Notice to Cure (avis de régularisation).", tag:"⏳ Urgent · 10 jours",
    plain:"D'après ce que vous décrivez, le propriétaire vous a remis un <b>Notice to Cure</b> — un papier qui prétend que vous avez enfreint une règle du bail. Ce n'est <b>pas</b> une expulsion. C'est la première étape d'un processus, et vous avez du temps et des options.",
    reassure:"Un avis n'est pas une expulsion. Vous avez des droits, et des gens aident gratuitement chaque jour. Allons-y une étape à la fois.",
    facts:[["📅","<b>Vous avez environ 10 jours</b> pour répondre ou régler le problème."],["⚖️","<b>Ce n'est pas un ordre d'expulsion.</b> Seul un juge peut l'ordonner, après une procédure."],["🆓","<b>Vous pourriez avoir droit à un avocat gratuit</b> via le Right to Counsel de NYC."]],
    deep:"<p>Un <b>Notice to Cure</b> est un avertissement écrit, pas une décision de justice. Le propriétaire prétend que vous avez enfreint une « obligation substantielle » du bail — par exemple un animal non autorisé, des occupants supplémentaires ou du bruit. L'avis doit vous donner un délai (en général 10 jours) pour corriger le problème.</p><p>Si vous corrigez dans le délai, l'affaire s'arrête généralement là. Sinon, l'étape suivante est un <b>Notice of Termination</b>, et seulement ensuite ils peuvent ouvrir une procédure au tribunal du logement. Même alors, vous obtenez une date d'audience et une chance de répondre — rien ne se passe automatiquement.</p><p>Les gestes les plus importants : gardez l'avis, ne déménagez pas, et appelez tout de suite un avocat pour locataires ou une ligne gratuite pour qu'on relise avec vous les termes exacts.</p>"},
  evict:{title:"Face à un avis ou à une expulsion.", tag:"⏳ Urgent",
    plain:"Recevoir un avis fait peur, mais c'est le <b>début</b> d'un processus — pas la fin. Rien ne se passe du jour au lendemain, et vous avez de vraies protections.",
    reassure:"On ne peut pas vous expulser sans procédure et sans l'ordre d'un juge. Vous avez du temps. Trouvons votre prochaine étape.",
    facts:[["📅","<b>Les délais comptent</b> — mais en manquer un est rarement la fin. Agissez vite, sans panique."],["⚖️","<b>Seul un tribunal</b> peut ordonner une expulsion, jamais le propriétaire directement."],["🆓","<b>Une aide juridique gratuite</b> existe justement pour cela."]],
    deep:"<p>Une expulsion à NYC est une procédure légale à plusieurs étapes, et le locataire a le droit d'être entendu à chacune. Elle commence en général par un avis écrit, puis une requête au tribunal, puis une audience où vous pouvez présenter votre version. Un propriétaire <b>ne peut pas</b> changer les serrures, retirer vos affaires ni couper les services pour vous forcer à partir — c'est une expulsion illégale « par soi-même ».</p><p>Seul un marshal de la ville, muni d'un mandat du juge, peut exécuter une expulsion, et vous recevez un avis écrit avant. À tout stade, vous pouvez demander plus de temps, soulever des moyens de défense (réparations nécessaires, documents incorrects) et demander un avocat gratuit.</p><p>Agir tôt vous donne le plus d'options — le pire est d'ignorer les papiers et de manquer une date d'audience.</p>"},
  rent:{title:"En retard de loyer.", tag:"💵 De l'aide est disponible",
    plain:"Prendre du retard sur le loyer est l'une des situations les plus courantes à NYC — et il existe des <b>programmes spécifiques</b> pour aider, dont les aides d'urgence « one-shot deal ».",
    reassure:"Devoir un loyer ne veut pas dire perdre son logement. Beaucoup se rattrapent grâce à des aides qu'ils ignoraient. Trouvons-les.",
    facts:[["💰","<b>One-Shot Deal (HRA)</b> peut couvrir les arriérés de loyer en cas d'urgence."],["📝","<b>Vous faites la demande via ACCESS HRA</b> — des intervenants peuvent vous aider."],["🛡️","<b>Faire la demande peut suspendre</b> certaines étapes d'expulsion. À faire tôt."]],
    deep:"<p>Si vous êtes en retard de loyer, l'<b>Aide d'urgence (« One-Shot Deal »)</b> de HRA peut payer les arriérés pour les personnes éligibles, surtout si vous pouvez montrer que vous tiendrez à l'avenir. Vous faites la demande sur ACCESS HRA, et un travailleur social examine votre situation.</p><p>D'autres voies peuvent s'ajouter : aides aux arriérés d'organismes à but non lucratif, accords de paiement avec le propriétaire et — si une procédure est déjà ouverte — des programmes qui vous mettent en lien avec un avocat gratuit. Documenter vos revenus, le montant dû et toute difficulté (perte d'emploi, frais médicaux) renforce la demande.</p><p>La clé est de commencer avant que la dette ne grossisse. Même une solution partielle peut empêcher l'aggravation d'une affaire.</p>"},
  unsafe:{title:"Conditions de logement non sûres.", tag:"🛠️ Devoir du propriétaire",
    plain:"Le chauffage, l'eau chaude et des réparations sûres sont votre <b>droit légal</b> — pas des faveurs. Le propriétaire doit les fournir, et la ville peut l'imposer.",
    reassure:"Vous n'avez pas à vivre ainsi, et demander des réparations est votre droit. Le signaler ne peut pas entraîner une expulsion légale.",
    facts:[["🔥","<b>La saison de chauffage</b> (1 oct–31 mai) exige des températures minimales fixées."],["📞","<b>Appelez le 311</b> pour déposer une plainte et créer un dossier officiel."],["🚫","<b>Les représailles sont illégales</b> — le propriétaire ne peut pas vous punir d'avoir signalé."]],
    deep:"<p>Chaque locataire a droit à un logement habitable — la <b>garantie d'habitabilité</b>. Cela signifie un chauffage et de l'eau chaude qui fonctionnent, pas de fuites ni de moisissure, une plomberie en état et l'absence de nuisibles. Pendant la saison de chauffage (1 oct–31 mai), les propriétaires doivent maintenir les logements à des températures minimales, jour et nuit.</p><p>Quand vous signalez les conditions au 311, la ville crée un dossier et peut envoyer un inspecteur, qui peut émettre des infractions contre le propriétaire. Ce dossier est puissant — il vous appuie en cas de litige et peut soutenir une « affaire de réparation » (action HP) au tribunal du logement pour imposer les travaux.</p><p>Il est illégal pour un propriétaire d'exercer des représailles — augmenter le loyer, refuser le renouvellement ou menacer d'expulsion — parce que vous avez demandé des réparations ou appelé le 311.</p>"},
  shelter:{title:"Vous avez besoin d'un endroit sûr.", tag:"🏠 Droit à l'hébergement",
    plain:"À New York, vous avez un <b>droit légal à l'hébergement</b>. Personne ne devrait dormir dans la rue ce soir, et des personnes ont pour métier de vous aider dès maintenant.",
    reassure:"Vous avez droit à un endroit sûr ce soir. Vous n'êtes pas un fardeau — cette aide existe justement pour ce moment.",
    facts:[["🛏️","<b>NYC a un droit légal à l'hébergement</b> pour ceux qui en ont besoin."],["📍","<b>PATH (Bronx)</b> est le centre d'accueil pour les familles avec enfants — ouvert 24/7."],["📞","<b>Appelez le 311</b> à toute heure pour être mis en lien avec l'accueil."]],
    deep:"<p>New York est l'un des rares endroits du pays avec un <b>droit légal à l'hébergement</b> — la ville doit fournir un lit à ceux qui en ont besoin. Vous n'avez pas à prouver votre statut migratoire pour demander un hébergement d'urgence.</p><p>Les familles avec enfants passent par <b>PATH</b> dans le Bronx pour l'accueil ; les adultes seuls utilisent des centres d'accueil désignés, et le 311 peut vous orienter vers le bon à toute heure. Apportez les papiers que vous avez, mais l'absence de documents ne doit pas vous empêcher d'être reçu.</p><p>Si vous fuyez des violences, il existe des refuges confidentiels distincts pour la violence domestique — dites-le à l'accueil ou à la ligne et on vous orientera en sécurité. L'hébergement est un point de départ vers un logement stable, avec des intervenants pour les étapes suivantes.</p>"},
  affordable:{title:"Trouver un logement abordable.", tag:"🏗️ Étape par étape",
    plain:"Le logement abordable à NYC passe surtout par des <b>loteries et des listes d'attente</b>. Il faut de la patience, mais inscrire son nom tôt est la démarche la plus importante — et la demande est gratuite.",
    reassure:"Cela peut sembler lent, mais chaque demande est une vraie chance. Vous inscrire aujourd'hui vous met dans la course. Commençons.",
    facts:[["🎟️","<b>NYC Housing Connect</b> liste les loteries d'appartements abordables où postuler."],["📋","<b>NYCHA et Section 8</b> ont des listes d'attente — y entrer tôt compte le plus."],["🆓","<b>Postuler est toujours gratuit.</b> Ne payez jamais pour participer à une loterie de logement."]],
    deep:"<p>La plupart des logements abordables à NYC sont attribués via <b>NYC Housing Connect</b>, le site officiel des loteries de la ville. Vous créez un profil avec la taille du foyer et le revenu, puis vous postulez aux annonces auxquelles vous êtes éligible. La sélection se fait par loterie et numéro de dossier, donc postuler à de nombreuses annonces au fil du temps améliore vos chances.</p><p>Par ailleurs, <b>NYCHA</b> (logements sociaux) et les bons <b>Section 8</b> utilisent de longues listes d'attente — quand elles ouvrent, inscrivez-vous tout de suite, car la position dépend de la date. Gardez vos coordonnées à jour pour ne pas manquer un courrier.</p><p>Attention aux arnaques : les loteries légitimes sont toujours gratuites, ne demandent jamais de paiement pour « réserver » un logement et ne garantissent pas un logement contre des frais.</p>"},
  dv:{title:"Votre sécurité avant tout.", tag:"🛟 Aide confidentielle · 24/7",
    plain:"Si l'on vous fait du mal ou vous menace chez vous, vous n'avez pas à y faire face seul. Des personnes sont disponibles <b>tout de suite, à toute heure</b>, pour vous aider à trouver un endroit sûr et à faire un plan — en privé et gratuitement.",
    reassure:"Vous méritez d'être en sécurité. Ces services sont confidentiels, gratuits et disponibles 24/7 — y compris une aide quel que soit le statut migratoire.",
    facts:[["📞","<b>La ligne 24 h de NYC</b> peut trouver un hébergement d'urgence et vous aider à planifier : 1-800-621-HOPE."],["🤫","<b>C'est confidentiel.</b> Vous n'avez pas à donner votre nom pour obtenir de l'aide ou des conseils."],["🏠","<b>Des refuges d'urgence pour violence domestique</b> existent dans les cinq arrondissements, avec de la place pour les enfants."]],
    deep:"<p>Si vous subissez des violences domestiques ou fondées sur le genre, votre sécurité est la priorité — et New York a des services confidentiels dédiés justement à cela. La ligne 24 h (1-800-621-HOPE) peut vous mettre en lien avec un refuge d'urgence, vous aider à faire un plan de sécurité et vous orienter vers un soutien et une aide juridique, le tout gratuitement et en de nombreuses langues.</p><p>Ces services sont distincts du système d'hébergement habituel et restent confidentiels pour protéger votre emplacement. Vous n'avez pas à partager votre statut migratoire, et les victimes ont des protections de logement spécifiques — dont le droit à des programmes d'adresse confidentielle.</p><p>Si vous êtes en danger immédiat, appelez le 911. Sinon, la ligne peut examiner vos options à votre rythme — aucune pression pour décider avant que vous soyez prêt.</p>"},
  discrimination:{title:"Cela peut être illégal — et vous pouvez agir.", tag:"⚖️ Vous avez des droits",
    plain:"Si un propriétaire vous refuse, vous harcèle ou vous traite différemment à cause de qui vous êtes — race, religion, statut migratoire, handicap, avoir des enfants ou utiliser un bon Section 8 — c'est de la <b>discrimination illégale</b> à NYC, et vous pouvez déposer une plainte gratuite.",
    reassure:"Vous n'avez pas à simplement l'accepter. Déposer une plainte est gratuit, et l'usage d'un bon comme votre statut migratoire sont tous deux protégés.",
    facts:[["🛡️","<b>La source de revenu est protégée</b> — on ne peut pas vous refuser pour l'usage d'un bon Section 8."],["📝","<b>Déposer est gratuit</b> via la Commission des droits de l'homme de NYC."],["🌐","<b>Il existe aussi des options d'État et fédérales</b> si votre cas dépasse NYC."]],
    deep:"<p>NYC a parmi les lois sur le logement équitable les plus fortes du pays. Un propriétaire, un agent ou un immeuble ne peuvent pas vous refuser, vous facturer plus ou vous traiter différemment en raison de votre race, couleur, religion, origine nationale, statut migratoire, handicap, âge, sexe, orientation sexuelle ou du fait d'avoir des enfants. Ils ne peuvent pas non plus vous refuser pour l'usage d'un bon de logement — c'est la <b>discrimination sur la source de revenu</b>, et c'est illégal.</p><p>Si cela arrive, notez ce qui a été dit, par qui et quand ; gardez messages, courriels et annonces. Vous pouvez déposer une plainte gratuite auprès de la <b>Commission des droits de l'homme de NYC</b>, et pour les cas hors de la ville il existe des options d'État (Division des droits de l'homme de NY) et fédérales (HUD).</p><p>Déposer est gratuit, vous pouvez le faire quel que soit votre statut migratoire, et il est illégal pour un propriétaire d'exercer des représailles parce que vous faites valoir ces droits.</p>"}
};

/* ===================== Deutsch (German) — summaries ===================== */
CASA_SUM_I18N.de = {
  type:{title:"Das sieht nach einem Notice to Cure (Abhilfeaufforderung) aus.", tag:"⏳ Zeitkritisch · 10 Tage",
    plain:"Nach Ihrer Beschreibung hat Ihr Vermieter Ihnen ein <b>Notice to Cure</b> gegeben — ein Schreiben, das behauptet, Sie hätten gegen eine Mietvertragsregel verstoßen. Es ist <b>keine</b> Räumung. Es ist der erste Schritt eines Verfahrens, und Sie haben Zeit und Optionen.",
    reassure:"Eine Mitteilung ist keine Räumung. Sie haben Rechte, und Menschen helfen damit jeden Tag kostenlos. Gehen wir es Schritt für Schritt an.",
    facts:[["📅","<b>Sie haben etwa 10 Tage</b>, um zu reagieren oder das Problem zu beheben."],["⚖️","<b>Das ist kein Räumungsbescheid.</b> Nur ein Richter kann ihn anordnen, nach einem Gerichtsverfahren."],["🆓","<b>Sie könnten Anspruch auf einen kostenlosen Anwalt haben</b> über das Right to Counsel von NYC."]],
    deep:"<p>Ein <b>Notice to Cure</b> ist eine schriftliche Verwarnung, keine gerichtliche Anordnung. Ihr Vermieter behauptet, Sie hätten eine „wesentliche Pflicht“ des Mietvertrags verletzt — etwa ein nicht genehmigtes Haustier, zusätzliche Bewohner oder Lärm. Die Mitteilung muss Ihnen eine Frist (meist 10 Tage) zur Behebung geben.</p><p>Beheben Sie das Problem fristgerecht, endet die Sache meist hier. Wenn nicht, ist der nächste Schritt des Vermieters ein <b>Notice of Termination</b>, und erst danach kann er ein Verfahren beim Wohnungsgericht beginnen. Auch dann erhalten Sie einen Gerichtstermin und die Chance zu antworten — nichts geschieht automatisch.</p><p>Das Wichtigste: Bewahren Sie die Mitteilung auf, ziehen Sie nicht aus, und rufen Sie sofort einen kostenlosen Mieteranwalt oder eine Hotline an, damit jemand den genauen Wortlaut mit Ihnen durchgeht.</p>"},
  evict:{title:"Mit einer Mitteilung oder Räumung konfrontiert.", tag:"⏳ Zeitkritisch",
    plain:"Eine Mitteilung zu bekommen, macht Angst, aber es ist der <b>Anfang</b> eines Verfahrens — nicht das Ende. Nichts geschieht über Nacht, und Sie haben echten Schutz.",
    reassure:"Ohne Gerichtsverfahren und richterliche Anordnung kann man Sie nicht entfernen. Sie haben Zeit. Finden wir Ihren nächsten Schritt.",
    facts:[["📅","<b>Fristen zählen</b> — aber eine zu verpassen ist selten das Ende. Handeln Sie bald, ohne Panik."],["⚖️","<b>Nur ein Gericht</b> kann eine Räumung anordnen, nie der Vermieter direkt."],["🆓","<b>Kostenlose Rechtshilfe</b> gibt es genau dafür."]],
    deep:"<p>Eine Räumung in NYC ist ein mehrstufiges Rechtsverfahren, und der Mieter hat in jeder Stufe ein Anhörungsrecht. Es beginnt meist mit einer schriftlichen Mitteilung, dann einem Gerichtsantrag, dann einer Anhörung, in der Sie Ihre Seite darlegen können. Ein Vermieter <b>darf nicht</b> Schlösser austauschen, Ihre Sachen entfernen oder die Versorgung abstellen, um Sie hinauszudrängen — das ist eine illegale Räumung in Eigenregie.</p><p>Nur ein städtischer Marshal mit einem richterlichen Beschluss kann eine Räumung vollstrecken, und davor erhalten Sie eine schriftliche Warnung. In jeder Phase können Sie mehr Zeit verlangen, Einwände vorbringen (etwa nötige Reparaturen oder fehlerhafte Unterlagen) und einen kostenlosen Anwalt beantragen.</p><p>Frühes Handeln gibt Ihnen die meisten Optionen — das Schlimmste ist, die Papiere zu ignorieren und einen Gerichtstermin zu verpassen.</p>"},
  rent:{title:"Mit der Miete im Rückstand.", tag:"💵 Hilfe ist verfügbar",
    plain:"Mit der Miete in Rückstand zu geraten ist eine der häufigsten Situationen in NYC — und es gibt <b>spezielle Programme</b> zur Hilfe, einschließlich der Notfallzuschüsse „one-shot deal“.",
    reassure:"Miete zu schulden bedeutet nicht, das Zuhause zu verlieren. Viele holen mit Hilfe auf, von der sie nichts wussten. Finden wir sie.",
    facts:[["💰","<b>One-Shot Deal (HRA)</b> kann Mietrückstände im Notfall decken."],["📝","<b>Sie beantragen über ACCESS HRA</b> — Helfer können Sie dabei unterstützen."],["🛡️","<b>Ein Antrag kann</b> einige Räumungsschritte aussetzen. Es lohnt sich, es früh zu tun."]],
    deep:"<p>Wenn Sie mit der Miete im Rückstand sind, kann die <b>Notfallhilfe („One-Shot Deal“)</b> von HRA Rückstände für Berechtigte zahlen, besonders wenn Sie zeigen können, dass Sie künftig mithalten. Sie beantragen über ACCESS HRA, und ein Sachbearbeiter prüft Ihre Lage.</p><p>Weitere Wege lassen sich kombinieren: Rückstandszuschüsse von Non-Profits, Zahlungsvereinbarungen mit dem Vermieter und — wenn ein Verfahren bereits läuft — Programme, die Sie mit einem kostenlosen Anwalt verbinden. Einkommen, geschuldeten Betrag und jede Härte (Jobverlust, Arztrechnungen) zu dokumentieren, stärkt den Antrag.</p><p>Der Schlüssel ist, vor dem Anwachsen der Schuld zu beginnen. Selbst eine Teillösung kann die Eskalation eines Verfahrens stoppen.</p>"},
  unsafe:{title:"Unsichere Wohnverhältnisse.", tag:"🛠️ Pflicht des Vermieters",
    plain:"Heizung, Warmwasser und sichere Reparaturen sind Ihr <b>gesetzliches Recht</b> — keine Gefälligkeiten. Ihr Vermieter muss sie bereitstellen, und die Stadt kann es durchsetzen.",
    reassure:"Sie müssen nicht so leben, und Reparaturen zu verlangen ist Ihr Recht. Eine Meldung kann nicht zu einer legalen Räumung führen.",
    facts:[["🔥","<b>Die Heizsaison</b> (1. Okt–31. Mai) verlangt festgelegte Mindesttemperaturen."],["📞","<b>Rufen Sie 311 an</b>, um eine Beschwerde einzureichen und einen amtlichen Eintrag zu schaffen."],["🚫","<b>Vergeltung ist illegal</b> — ein Vermieter darf Sie nicht für eine Meldung bestrafen."]],
    deep:"<p>Jeder Mieter hat Anrecht auf eine bewohnbare Wohnung — die sogenannte <b>Gewährleistung der Bewohnbarkeit</b>. Das bedeutet funktionierende Heizung und Warmwasser, keine Lecks oder Schimmel, funktionierende Sanitäranlagen und keine Schädlinge. Während der Heizsaison (1. Okt–31. Mai) müssen Vermieter Wohnungen Tag und Nacht auf festgelegten Mindesttemperaturen halten.</p><p>Wenn Sie Zustände dem 311 melden, erstellt die Stadt einen Eintrag und kann einen Inspektor schicken, der Verstöße gegen den Vermieter feststellen kann. Dieser Eintrag ist mächtig — er stützt Sie bei einem Streit und kann eine „Reparaturklage“ (HP-Klage) beim Wohnungsgericht unterstützen, um Reparaturen zu erzwingen.</p><p>Es ist illegal, dass ein Vermieter Vergeltung übt — Miete erhöhen, Verlängerung verweigern oder mit Räumung drohen — weil Sie Reparaturen verlangt oder 311 angerufen haben.</p>"},
  shelter:{title:"Sie brauchen einen sicheren Ort.", tag:"🏠 Recht auf Unterkunft",
    plain:"In New York City haben Sie ein <b>gesetzliches Recht auf Unterkunft</b>. Niemand sollte heute Nacht auf der Straße schlafen, und es gibt Menschen, deren Aufgabe es ist, Ihnen jetzt zu helfen.",
    reassure:"Sie haben heute Nacht ein Recht auf einen sicheren Ort. Sie sind keine Last — diese Hilfe existiert genau für diesen Moment.",
    facts:[["🛏️","<b>NYC hat ein gesetzliches Recht auf Unterkunft</b> für alle, die es brauchen."],["📍","<b>PATH (Bronx)</b> ist die Aufnahmestelle für Familien mit Kindern — rund um die Uhr geöffnet."],["📞","<b>Rufen Sie 311 an</b> zu jeder Stunde, um mit der Aufnahme verbunden zu werden."]],
    deep:"<p>New York City ist einer der wenigen Orte im Land mit einem <b>gesetzlichen Recht auf Unterkunft</b> — die Stadt muss denen ein Bett geben, die eines brauchen. Sie müssen keinen Aufenthaltsstatus nachweisen, um eine Notunterkunft zu suchen.</p><p>Familien mit Kindern werden über <b>PATH</b> in der Bronx aufgenommen; alleinstehende Erwachsene nutzen ausgewiesene Aufnahmestellen, und 311 kann Sie jederzeit zur richtigen leiten. Bringen Sie vorhandene Ausweise und Unterlagen mit, aber fehlende Papiere sollten Ihre Aufnahme nicht verhindern.</p><p>Wenn Sie vor Gewalt fliehen, gibt es getrennte vertrauliche Unterkünfte bei häuslicher Gewalt — sagen Sie es der Aufnahme oder der Hotline, und man leitet Sie sicher weiter. Die Unterkunft ist als Ausgangspunkt zu stabilem Wohnraum gedacht, mit Sachbearbeitern, die bei den nächsten Schritten helfen.</p>"},
  affordable:{title:"Bezahlbaren Wohnraum finden.", tag:"🏗️ Schritt für Schritt",
    plain:"Bezahlbarer Wohnraum in NYC läuft meist über <b>Lotterien und Wartelisten</b>. Es braucht Geduld, aber den Namen früh einzutragen ist der wichtigste Schritt — und die Bewerbung ist kostenlos.",
    reassure:"Es kann sich langsam anfühlen, aber jede Bewerbung ist eine echte Chance. Sich heute zu registrieren bringt Sie ins Rennen. Fangen wir an.",
    facts:[["🎟️","<b>NYC Housing Connect</b> listet Lotterien für bezahlbare Wohnungen, auf die Sie sich bewerben können."],["📋","<b>NYCHA und Section 8</b> haben Wartelisten — früh hineinzukommen zählt am meisten."],["🆓","<b>Die Bewerbung ist immer kostenlos.</b> Zahlen Sie nie eine Gebühr für die Teilnahme an einer Wohnungslotterie."]],
    deep:"<p>Der meiste bezahlbare Wohnraum in NYC wird über <b>NYC Housing Connect</b> vergeben, die offizielle Lotterie-Seite der Stadt. Sie erstellen ein Profil mit Haushaltsgröße und Einkommen und bewerben sich dann auf Angebote, für die Sie infrage kommen. Die Auswahl erfolgt per Lotterie und Vorgangsnummer, daher verbessert die Bewerbung auf viele Angebote über die Zeit Ihre Chancen.</p><p>Separat nutzen <b>NYCHA</b> (Sozialwohnungen) und <b>Section-8</b>-Gutscheine lange Wartelisten — wenn sie öffnen, registrieren Sie sich sofort, denn die Position hängt vom Datum ab. Halten Sie Ihre Kontaktdaten aktuell, um keinen Brief zu verpassen.</p><p>Vorsicht vor Betrug: Seriöse Lotterien sind immer kostenlos, verlangen nie eine Zahlung, um eine Wohnung zu „reservieren“, und garantieren keine Wohnung gegen Gebühr.</p>"},
  dv:{title:"Ihre Sicherheit zuerst.", tag:"🛟 Vertrauliche Hilfe · 24/7",
    plain:"Wenn Ihnen zu Hause Gewalt angetan oder gedroht wird, müssen Sie das nicht allein bewältigen. Es gibt Menschen, die <b>jetzt sofort, zu jeder Stunde</b> erreichbar sind und Ihnen helfen, einen sicheren Ort zu finden und einen Plan zu machen — privat und kostenlos.",
    reassure:"Sie verdienen Sicherheit. Diese Dienste sind vertraulich, kostenlos und rund um die Uhr verfügbar — einschließlich Hilfe unabhängig vom Aufenthaltsstatus.",
    facts:[["📞","<b>Die 24-Stunden-Hotline von NYC</b> kann eine Notunterkunft finden und beim Planen helfen: 1-800-621-HOPE."],["🤫","<b>Es ist vertraulich.</b> Sie müssen keinen Namen nennen, um Hilfe oder Rat zu erhalten."],["🏠","<b>Notunterkünfte bei häuslicher Gewalt</b> gibt es in allen fünf Stadtbezirken, mit Platz für Kinder."]],
    deep:"<p>Wenn Sie häusliche oder geschlechtsbezogene Gewalt erleben, hat Ihre Sicherheit Vorrang — und New York City hat eigens dafür vertrauliche Dienste. Die 24-Stunden-Hotline (1-800-621-HOPE) kann Sie mit einer Notunterkunft verbinden, Ihnen helfen, einen Sicherheitsplan zu erstellen, und Sie an Beratung und Rechtshilfe anbinden, alles kostenlos und in vielen Sprachen.</p><p>Diese Dienste sind vom regulären Unterkunftssystem getrennt und bleiben vertraulich, um Ihren Aufenthaltsort zu schützen. Sie müssen Ihren Aufenthaltsstatus nicht mitteilen, und Betroffene haben besonderen Wohnschutz — einschließlich des Rechts auf Programme mit vertraulicher Adresse.</p><p>Bei unmittelbarer Gefahr rufen Sie 911. Andernfalls kann die Hotline Ihre Optionen in Ihrem Tempo besprechen — kein Druck, eine Entscheidung zu treffen, bevor Sie bereit sind.</p>"},
  discrimination:{title:"Das könnte illegal sein — und Sie können handeln.", tag:"⚖️ Sie haben Rechte",
    plain:"Wenn ein Vermieter Sie ablehnt, belästigt oder anders behandelt wegen dem, wer Sie sind — Ihrer Rasse, Religion, Ihrem Aufenthaltsstatus, einer Behinderung, weil Sie Kinder haben oder einen Section-8-Gutschein nutzen — ist das <b>illegale Diskriminierung</b> in NYC, und Sie können kostenlos Beschwerde einreichen.",
    reassure:"Sie müssen es nicht einfach hinnehmen. Eine Beschwerde ist kostenlos, und sowohl die Nutzung eines Gutscheins als auch Ihr Aufenthaltsstatus sind geschützt.",
    facts:[["🛡️","<b>Die Einkommensquelle ist geschützt</b> — man darf Sie nicht für die Nutzung eines Section-8-Gutscheins ablehnen."],["📝","<b>Die Einreichung ist kostenlos</b> über die NYC Commission on Human Rights."],["🌐","<b>Es gibt auch Optionen auf Bundesstaats- und Bundesebene</b>, falls Ihr Fall außerhalb der Reichweite von NYC liegt."]],
    deep:"<p>NYC hat einige der stärksten Gesetze zu fairem Wohnen im Land. Ein Vermieter, Makler oder ein Gebäude darf Sie nicht ablehnen, mehr verlangen oder anders behandeln wegen Rasse, Hautfarbe, Religion, Herkunft, Aufenthaltsstatus, Behinderung, Alter, Geschlecht, sexueller Orientierung oder weil Sie Kinder haben. Sie dürfen Sie auch nicht für die Nutzung eines Wohngutscheins ablehnen — das nennt man <b>Diskriminierung nach Einkommensquelle</b>, und sie ist illegal.</p><p>Wenn das passiert, notieren Sie, was gesagt wurde, von wem und wann; bewahren Sie Nachrichten, E-Mails und Anzeigen auf. Sie können kostenlos eine Beschwerde bei der <b>NYC Commission on Human Rights</b> einreichen, und für Fälle außerhalb der Stadt gibt es Optionen auf Staatsebene (NYS Division of Human Rights) und Bundesebene (HUD).</p><p>Die Einreichung ist kostenlos, Sie können sie unabhängig vom Aufenthaltsstatus vornehmen, und es ist illegal, dass ein Vermieter Vergeltung übt, weil Sie diese Rechte geltend machen.</p>"}
};

/* ===================== বাংলা (Bengali) — summaries ===================== */
CASA_SUM_I18N.bn = {
  type:{title:"এটি একটি Notice to Cure বলে মনে হচ্ছে।", tag:"⏳ সময়-সংবেদনশীল · ১০ দিন",
    plain:"আপনার বর্ণনা থেকে, আপনার বাড়িওয়ালা আপনাকে একটি <b>Notice to Cure</b> দিয়েছে — একটি কাগজ যা দাবি করে আপনি লিজের একটি নিয়ম ভেঙেছেন। এটি <b>উচ্ছেদ নয়</b>। এটি একটি প্রক্রিয়ার প্রথম ধাপ, এবং আপনার সময় ও বিকল্প আছে।",
    reassure:"নোটিশ উচ্ছেদ নয়। আপনার অধিকার আছে, এবং প্রতিদিন মানুষ এটি বিনামূল্যে করে। আসুন এক ধাপ করে এগোই।",
    facts:[["📅","<b>আপনার প্রায় ১০ দিন আছে</b> জবাব দিতে বা সমস্যা ঠিক করতে।"],["⚖️","<b>এটি উচ্ছেদের আদেশ নয়।</b> কেবল একজন বিচারক আদালতের মামলার পর আদেশ দিতে পারেন।"],["🆓","<b>আপনি বিনামূল্যে আইনজীবীর যোগ্য হতে পারেন</b> NYC-র Right to Counsel-এর মাধ্যমে।"]],
    deep:"<p>একটি <b>Notice to Cure</b> একটি লিখিত সতর্কতা, আদালতের আদেশ নয়। আপনার বাড়িওয়ালা দাবি করছে আপনি লিজের একটি 'গুরুত্বপূর্ণ বাধ্যবাধকতা' ভেঙেছেন — যেমন অনুমোদনহীন পোষা প্রাণী, অতিরিক্ত বাসিন্দা বা শব্দ। নোটিশে সমস্যা ঠিক করার জন্য একটি সময় (সাধারণত ১০ দিন) দিতে হবে।</p><p>আপনি সময়ের মধ্যে ঠিক করলে বিষয়টি সাধারণত সেখানেই শেষ হয়। না করলে বাড়িওয়ালার পরবর্তী ধাপ একটি <b>Notice of Termination</b>, এবং তারপরই কেবল তারা হাউজিং কোর্টে মামলা শুরু করতে পারে। তখনও আপনি একটি আদালতের তারিখ ও জবাব দেওয়ার সুযোগ পাবেন — কিছুই স্বয়ংক্রিয়ভাবে ঘটে না।</p><p>সবচেয়ে গুরুত্বপূর্ণ পদক্ষেপ: নোটিশ রাখুন, বাসা ছাড়বেন না, এবং সঙ্গে সঙ্গে একজন বিনামূল্যের ভাড়াটিয়া আইনজীবী বা হটলাইনে কল করুন যাতে কেউ সঠিক শব্দগুলো আপনার সাথে পর্যালোচনা করে।</p>"},
  evict:{title:"নোটিশ বা উচ্ছেদের মুখোমুখি।", tag:"⏳ সময়-সংবেদনশীল",
    plain:"নোটিশ পাওয়া ভীতিকর, কিন্তু এটি একটি প্রক্রিয়ার <b>শুরু</b> — শেষ নয়। রাতারাতি কিছু ঘটে না, এবং আপনার প্রকৃত সুরক্ষা আছে।",
    reassure:"আদালতের মামলা ও বিচারকের আদেশ ছাড়া আপনাকে সরানো যাবে না। আপনার সময় আছে। আসুন আপনার পরবর্তী ধাপ খুঁজি।",
    facts:[["📅","<b>সময়সীমা গুরুত্বপূর্ণ</b> — তবে একটি মিস করা খুব কমই শেষ। দ্রুত পদক্ষেপ নিন, আতঙ্কে নয়।"],["⚖️","<b>কেবল একটি আদালত</b> উচ্ছেদের আদেশ দিতে পারে, কখনো সরাসরি বাড়িওয়ালা নয়।"],["🆓","<b>বিনামূল্যে আইনি সাহায্য</b> ঠিক এর জন্যই আছে।"]],
    deep:"<p>NYC-তে উচ্ছেদ একটি বহু-ধাপের আইনি প্রক্রিয়া, এবং প্রতিটি ধাপে ভাড়াটিয়ার শোনার অধিকার আছে। এটি সাধারণত একটি লিখিত নোটিশ দিয়ে শুরু হয়, তারপর আদালতের আবেদন, তারপর একটি শুনানি যেখানে আপনি আপনার দিক উপস্থাপন করতে পারেন। বাড়িওয়ালা <b>পারে না</b> তালা বদলাতে, আপনার জিনিস সরাতে বা ইউটিলিটি বন্ধ করে আপনাকে জোর করে বের করতে — এটি অবৈধ 'স্ব-সহায়ক' উচ্ছেদ।</p><p>কেবল একজন সিটি মার্শাল, বিচারকের পরোয়ানা নিয়ে, উচ্ছেদ কার্যকর করতে পারে, এবং তার আগে আপনি লিখিত সতর্কতা পাবেন। যেকোনো পর্যায়ে আপনি আরও সময় চাইতে, প্রতিরক্ষা তুলতে (যেমন প্রয়োজনীয় মেরামত বা ত্রুটিপূর্ণ কাগজপত্র) এবং একজন বিনামূল্যের আইনজীবী চাইতে পারেন।</p><p>দ্রুত পদক্ষেপ আপনাকে সবচেয়ে বেশি বিকল্প দেয় — সবচেয়ে খারাপ হলো কাগজপত্র উপেক্ষা করা ও আদালতের তারিখ মিস করা।</p>"},
  rent:{title:"ভাড়ায় পিছিয়ে।", tag:"💵 সাহায্য পাওয়া যায়",
    plain:"ভাড়ায় পিছিয়ে পড়া NYC-র সবচেয়ে সাধারণ পরিস্থিতিগুলোর একটি — এবং সাহায্যের জন্য <b>নির্দিষ্ট প্রোগ্রাম</b> আছে, জরুরি 'one-shot deal' অনুদানসহ।",
    reassure:"ভাড়া পাওনা মানে বাড়ি হারানো নয়। অনেকে এমন সাহায্যে ধরে ফেলে যা তারা জানত না। আসুন তা খুঁজি।",
    facts:[["💰","<b>One-Shot Deal (HRA)</b> জরুরি অবস্থায় বকেয়া ভাড়া কভার করতে পারে।"],["📝","<b>আপনি ACCESS HRA-র মাধ্যমে আবেদন করেন</b> — সহায়করা সাহায্য করতে পারে।"],["🛡️","<b>আবেদন কিছু উচ্ছেদ ধাপ থামাতে পারে।</b> দ্রুত করা ভালো।"]],
    deep:"<p>আপনি ভাড়ায় পিছিয়ে থাকলে, HRA-র <b>জরুরি সহায়তা ('One-Shot Deal')</b> যোগ্যদের বকেয়া পরিশোধ করতে পারে, বিশেষত যখন আপনি দেখাতে পারেন ভবিষ্যতে চালিয়ে যেতে পারবেন। আপনি ACCESS HRA-তে আবেদন করেন, এবং একজন কেসওয়ার্কার আপনার পরিস্থিতি পর্যালোচনা করে।</p><p>অন্য পথও যোগ হতে পারে: অলাভজনক সংস্থার বকেয়া অনুদান, বাড়িওয়ালার সাথে পেমেন্ট চুক্তি, এবং — মামলা ইতিমধ্যে দায়ের হলে — যে প্রোগ্রামগুলো আপনাকে বিনামূল্যের আইনজীবীর সাথে যুক্ত করে। আপনার আয়, পাওনা পরিমাণ ও যেকোনো কষ্ট (চাকরি হারানো, চিকিৎসা বিল) নথিভুক্ত করা আবেদন শক্তিশালী করে।</p><p>মূল বিষয় হলো ঋণ বাড়ার আগে শুরু করা। আংশিক সমাধানও একটি মামলা বাড়তে থামাতে পারে।</p>"},
  unsafe:{title:"অনিরাপদ বসবাসের পরিবেশ।", tag:"🛠️ বাড়িওয়ালার দায়িত্ব",
    plain:"হিট, গরম জল ও নিরাপদ মেরামত আপনার <b>আইনি অধিকার</b> — অনুগ্রহ নয়। আপনার বাড়িওয়ালাকে এগুলো দিতে হবে, এবং শহর তা কার্যকর করতে পারে।",
    reassure:"আপনাকে এভাবে বাঁচতে হবে না, এবং মেরামত চাওয়া আপনার অধিকার। রিপোর্ট করায় আপনাকে আইনত উচ্ছেদ করা যায় না।",
    facts:[["🔥","<b>হিটিং মৌসুম</b> (১ অক্টো–৩১ মে) নির্দিষ্ট সর্বনিম্ন তাপমাত্রা চায়।"],["📞","<b>311-এ কল করুন</b> অভিযোগ দায়ের ও সরকারি রেকর্ড তৈরি করতে।"],["🚫","<b>প্রতিশোধ অবৈধ</b> — রিপোর্টের জন্য বাড়িওয়ালা শাস্তি দিতে পারে না।"]],
    deep:"<p>প্রতিটি ভাড়াটিয়ার একটি বসবাসযোগ্য বাড়ির অধিকার আছে — যা <b>বসবাসযোগ্যতার নিশ্চয়তা</b> নামে পরিচিত। এর অর্থ কাজ করা হিট ও গরম জল, ফুটো বা ছত্রাক নেই, কাজ করা প্লাম্বিং, এবং পোকামুক্ত। হিটিং মৌসুমে (১ অক্টো–৩১ মে) বাড়িওয়ালাকে দিনরাত নির্দিষ্ট সর্বনিম্ন তাপমাত্রায় অ্যাপার্টমেন্ট রাখতে হয়।</p><p>আপনি 311-এ অবস্থা জানালে শহর একটি রেকর্ড তৈরি করে ও একজন পরিদর্শক পাঠাতে পারে, যিনি বাড়িওয়ালার বিরুদ্ধে লঙ্ঘন জারি করতে পারেন। সেই রেকর্ড শক্তিশালী — বিরোধ হলে এটি আপনাকে সমর্থন করে এবং হাউজিং কোর্টে আপনার আনা একটি 'মেরামত মামলা' (HP অ্যাকশন) সমর্থন করতে পারে।</p><p>মেরামত চাওয়া বা 311-এ কল করার জন্য বাড়িওয়ালার প্রতিশোধ — ভাড়া বাড়ানো, নবায়ন প্রত্যাখ্যান বা উচ্ছেদের হুমকি — অবৈধ।</p>"},
  shelter:{title:"আপনার একটি নিরাপদ জায়গা দরকার।", tag:"🏠 আশ্রয়ের অধিকার",
    plain:"নিউইয়র্ক সিটিতে, আপনার <b>আইনি আশ্রয়ের অধিকার</b> আছে। আজ রাতে কারও রাস্তায় ঘুমানো উচিত নয়, এবং কিছু মানুষের কাজই এখন আপনাকে সাহায্য করা।",
    reassure:"আজ রাতে একটি নিরাপদ জায়গার অধিকার আপনার। আপনি বোঝা নন — এই সাহায্য ঠিক এই মুহূর্তের জন্যই আছে।",
    facts:[["🛏️","<b>NYC-তে প্রয়োজনীয়দের জন্য আইনি আশ্রয়ের অধিকার আছে।</b>"],["📍","<b>PATH (ব্রঙ্কস)</b> শিশুসহ পরিবারের ভর্তি কেন্দ্র — ২৪/৭ খোলা।"],["📞","<b>311-এ কল করুন</b> যেকোনো সময় ভর্তির সাথে যুক্ত হতে।"]],
    deep:"<p>নিউইয়র্ক সিটি দেশের অল্প কয়েকটি জায়গার একটি যেখানে <b>আইনি আশ্রয়ের অধিকার</b> আছে — অর্থাৎ শহরকে প্রয়োজনীয়দের একটি বিছানা দিতে হবে। জরুরি আশ্রয় চাইতে আপনাকে অভিবাসন অবস্থা প্রমাণ করতে হবে না।</p><p>শিশুসহ পরিবার ভর্তির জন্য ব্রঙ্কসের <b>PATH</b>-এর মধ্য দিয়ে যায়; একক প্রাপ্তবয়স্করা নির্দিষ্ট ভর্তি কেন্দ্র ব্যবহার করে, এবং 311 যেকোনো সময় আপনাকে সঠিক জায়গায় পরিচালিত করতে পারে। আপনার যেকোনো আইডি ও নথি আনুন, তবে কাগজপত্রের অভাব আপনাকে দেখা থেকে আটকানো উচিত নয়।</p><p>আপনি সহিংসতা থেকে পালালে, আলাদা গোপন পারিবারিক-সহিংসতা আশ্রয় আছে — ভর্তি বা হটলাইনে বলুন, তারা নিরাপদে আপনাকে পথ দেখাবে। আশ্রয় স্থিতিশীল আবাসনের দিকে একটি শুরুর পয়েন্ট, কেসওয়ার্কারদের সাথে যারা পরবর্তী ধাপে সাহায্য করে।</p>"},
  affordable:{title:"সাশ্রয়ী আবাসন খোঁজা।", tag:"🏗️ ধাপে ধাপে নিন",
    plain:"NYC-তে সাশ্রয়ী আবাসন বেশিরভাগই <b>লটারি ও অপেক্ষমাণ তালিকার</b> মাধ্যমে চলে। ধৈর্য লাগে, তবে আগে নাম দেওয়া সবচেয়ে গুরুত্বপূর্ণ পদক্ষেপ — এবং আবেদন বিনামূল্যে।",
    reassure:"ধীর মনে হতে পারে, তবে প্রতিটি আবেদন একটি প্রকৃত সুযোগ। আজ নিবন্ধন আপনাকে দৌড়ে নামায়। আসুন শুরু করি।",
    facts:[["🎟️","<b>NYC Housing Connect</b> সাশ্রয়ী অ্যাপার্টমেন্ট লটারি তালিকাভুক্ত করে যেগুলোতে আপনি আবেদন করতে পারেন।"],["📋","<b>NYCHA ও Section 8</b>-এর অপেক্ষমাণ তালিকা আছে — আগে ঢোকা সবচেয়ে গুরুত্বপূর্ণ।"],["🆓","<b>আবেদন সবসময় বিনামূল্যে।</b> হাউজিং লটারিতে ঢুকতে কখনো ফি দেবেন না।"]],
    deep:"<p>NYC-র বেশিরভাগ সাশ্রয়ী আবাসন <b>NYC Housing Connect</b>-এর মাধ্যমে দেওয়া হয়, শহরের সরকারি লটারি সাইট। আপনি পরিবারের আকার ও আয় দিয়ে একটি প্রোফাইল তৈরি করেন, তারপর যোগ্য তালিকায় আবেদন করেন। নির্বাচন লটারি ও লগ নম্বর দিয়ে হয়, তাই সময়ের সাথে অনেক তালিকায় আবেদন আপনার সম্ভাবনা বাড়ায়।</p><p>আলাদাভাবে, <b>NYCHA</b> (পাবলিক হাউজিং) ও <b>Section 8</b> ভাউচার দীর্ঘ অপেক্ষমাণ তালিকা ব্যবহার করে — খুললে সঙ্গে সঙ্গে নিবন্ধন করুন, কারণ অবস্থান তারিখের উপর নির্ভর করে। চিঠি মিস না করতে যোগাযোগের তথ্য হালনাগাদ রাখুন।</p><p>প্রতারণা থেকে সাবধান: বৈধ লটারি সবসময় বিনামূল্যে, কখনো অ্যাপার্টমেন্ট 'ধরে রাখতে' পেমেন্ট চায় না, এবং ফি-র বিনিময়ে ইউনিট নিশ্চিত করে না।</p>"},
  dv:{title:"আপনার নিরাপত্তা আগে।", tag:"🛟 গোপন সাহায্য · ২৪/৭",
    plain:"আপনি যদি বাড়িতে আঘাত বা হুমকির শিকার হন, একা মোকাবেলা করতে হবে না। <b>এখনই, যেকোনো সময়</b> এমন মানুষ আছে যারা আপনাকে একটি নিরাপদ জায়গা খুঁজতে ও পরিকল্পনা করতে সাহায্য করতে পারে — গোপনে ও বিনামূল্যে।",
    reassure:"আপনি নিরাপদ থাকার যোগ্য। এই সেবা গোপন, বিনামূল্যে ও ২৪/৭ উপলব্ধ — অভিবাসন অবস্থা নির্বিশেষে সাহায্যসহ।",
    facts:[["📞","<b>NYC-র ২৪-ঘণ্টা হটলাইন</b> জরুরি আশ্রয় খুঁজে ও পরিকল্পনায় সাহায্য করতে পারে: 1-800-621-HOPE।"],["🤫","<b>এটি গোপন।</b> সাহায্য বা পরামর্শ পেতে নাম দিতে হবে না।"],["🏠","<b>জরুরি DV আশ্রয়</b> পাঁচটি বরোতেই আছে, শিশুদের জন্য জায়গাসহ।"]],
    deep:"<p>আপনি পারিবারিক বা লিঙ্গভিত্তিক সহিংসতার শিকার হলে, আপনার নিরাপত্তা অগ্রাধিকার — এবং নিউইয়র্ক সিটিতে ঠিক এর জন্য নিবেদিত গোপন সেবা আছে। ২৪-ঘণ্টা হটলাইন (1-800-621-HOPE) আপনাকে জরুরি পারিবারিক-সহিংসতা আশ্রয়ের সাথে যুক্ত করতে, নিরাপত্তা পরিকল্পনা করতে এবং কাউন্সেলিং ও আইনি সাহায্যের সাথে সংযুক্ত করতে পারে, সবই বিনামূল্যে ও অনেক ভাষায়।</p><p>এই সেবা নিয়মিত আশ্রয় ব্যবস্থা থেকে আলাদা এবং আপনার অবস্থান রক্ষায় গোপন রাখা হয়। আপনাকে অভিবাসন অবস্থা শেয়ার করতে হবে না, এবং বেঁচে যাওয়াদের নির্দিষ্ট আবাসন সুরক্ষা আছে — গোপন ঠিকানা প্রোগ্রামের অধিকারসহ।</p><p>আপনি তাৎক্ষণিক বিপদে থাকলে 911-এ কল করুন। অন্যথায়, হটলাইন আপনার গতিতে আপনার বিকল্প আলোচনা করতে পারে — প্রস্তুত হওয়ার আগে কোনো সিদ্ধান্ত নেওয়ার চাপ নেই।</p>"},
  discrimination:{title:"এটি অবৈধ হতে পারে — এবং আপনি পদক্ষেপ নিতে পারেন।", tag:"⚖️ আপনার অধিকার আছে",
    plain:"যদি একজন বাড়িওয়ালা আপনাকে প্রত্যাখ্যান, হয়রানি বা ভিন্নভাবে আচরণ করে আপনি কে তার জন্য — আপনার জাতি, ধর্ম, অভিবাসন অবস্থা, প্রতিবন্ধকতা, সন্তান থাকা বা Section 8 ভাউচার ব্যবহার — তা NYC-তে <b>অবৈধ বৈষম্য</b>, এবং আপনি বিনামূল্যে অভিযোগ করতে পারেন।",
    reassure:"আপনাকে কেবল মেনে নিতে হবে না। অভিযোগ বিনামূল্যে, এবং ভাউচার ব্যবহার ও আপনার অভিবাসন অবস্থা দুটোই সুরক্ষিত।",
    facts:[["🛡️","<b>আয়ের উৎস সুরক্ষিত</b> — Section 8 ভাউচার ব্যবহারের জন্য বাড়িওয়ালা প্রত্যাখ্যান করতে পারে না।"],["📝","<b>অভিযোগ বিনামূল্যে</b> NYC মানবাধিকার কমিশনের মাধ্যমে।"],["🌐","<b>রাজ্য ও ফেডারেল বিকল্পও আছে</b> যদি আপনার মামলা NYC-র বাইরে হয়।"]],
    deep:"<p>NYC-তে দেশের অন্যতম শক্তিশালী ন্যায্য-আবাসন আইন আছে। একজন বাড়িওয়ালা, ব্রোকার বা ভবন আপনাকে প্রত্যাখ্যান, বেশি চার্জ বা ভিন্ন আচরণ করতে পারে না আপনার জাতি, বর্ণ, ধর্ম, জাতীয় উৎস, অভিবাসন অবস্থা, প্রতিবন্ধকতা, বয়স, লিঙ্গ, যৌন অভিমুখিতা বা সন্তান থাকার জন্য। আবাসন ভাউচার ব্যবহারের জন্যও তারা প্রত্যাখ্যান করতে পারে না — তাকে বলে <b>আয়ের উৎস বৈষম্য</b>, এবং তা অবৈধ।</p><p>এটি ঘটলে, কী বলা হয়েছে, কে বলেছে ও কখন লিখে রাখুন; বার্তা, ইমেল ও তালিকা সংরক্ষণ করুন। আপনি <b>NYC মানবাধিকার কমিশনে</b> বিনামূল্যে অভিযোগ করতে পারেন, এবং শহরের বাইরের মামলার জন্য রাজ্য (NYS মানবাধিকার বিভাগ) ও ফেডারেল (HUD) বিকল্প আছে।</p><p>অভিযোগ বিনামূল্যে, আপনি অভিবাসন অবস্থা নির্বিশেষে করতে পারেন, এবং এই অধিকার দাবির জন্য বাড়িওয়ালার প্রতিশোধ অবৈধ।</p>"}
};

/* ===================== Русский (Russian) — summaries ===================== */
CASA_SUM_I18N.ru = {
  type:{title:"Это похоже на Notice to Cure (уведомление об устранении).", tag:"⏳ Срочно · 10 дней",
    plain:"Судя по описанию, арендодатель дал вам <b>Notice to Cure</b> — бумагу, утверждающую, что вы нарушили правило аренды. Это <b>не</b> выселение. Это первый шаг процесса, и у вас есть время и варианты.",
    reassure:"Уведомление — это не выселение. У вас есть права, и люди помогают с этим бесплатно каждый день. Давайте шаг за шагом.",
    facts:[["📅","<b>У вас около 10 дней</b>, чтобы ответить или устранить проблему."],["⚖️","<b>Это не приказ о выселении.</b> Только судья может предписать его после судебного дела."],["🆓","<b>Вы можете иметь право на бесплатного адвоката</b> через Right to Counsel в NYC."]],
    deep:"<p><b>Notice to Cure</b> — это письменное предупреждение, а не судебный приказ. Арендодатель утверждает, что вы нарушили 'существенное обязательство' аренды — например, неразрешённое животное, лишние жильцы или шум. Уведомление должно дать вам срок (обычно 10 дней) на устранение.</p><p>Если вы устраните проблему вовремя, дело обычно на этом заканчивается. Если нет, следующий шаг арендодателя — <b>Notice of Termination</b>, и только после этого он может начать дело в жилищном суде. Даже тогда вы получаете дату суда и возможность ответить — ничего не происходит автоматически.</p><p>Самое важное: сохраните уведомление, не съезжайте и сразу позвоните бесплатному адвокату по аренде или на горячую линию, чтобы кто-то проверил с вами точные формулировки.</p>"},
  evict:{title:"Перед лицом уведомления или выселения.", tag:"⏳ Срочно",
    plain:"Получить уведомление страшно, но это <b>начало</b> процесса, а не конец. Ничего не происходит за ночь, и у вас есть реальная защита.",
    reassure:"Вас не могут выселить без судебного дела и решения судьи. У вас есть время. Давайте найдём ваш следующий шаг.",
    facts:[["📅","<b>Сроки важны</b> — но пропуск одного редко конец. Действуйте скоро, без паники."],["⚖️","<b>Только суд</b> может предписать выселение, никогда не арендодатель напрямую."],["🆓","<b>Бесплатная юрпомощь</b> существует именно для этого."]],
    deep:"<p>Выселение в NYC — это юридический процесс из нескольких этапов, и арендатор имеет право быть выслушанным на каждом. Обычно он начинается с письменного уведомления, затем судебное ходатайство, затем слушание, где вы можете изложить свою сторону. Арендодатель <b>не может</b> менять замки, выносить ваши вещи или отключать коммуникации, чтобы выгнать вас — это незаконное 'самовольное' выселение.</p><p>Только городской маршал по ордеру судьи может провести выселение, и до этого вы получаете письменное предупреждение. На любом этапе вы можете просить больше времени, выдвигать возражения (например, нужный ремонт или неправильные документы) и просить бесплатного адвоката.</p><p>Раннее действие даёт больше всего вариантов — худшее, что можно сделать, — игнорировать бумаги и пропустить дату суда.</p>"},
  rent:{title:"Задолженность по аренде.", tag:"💵 Помощь доступна",
    plain:"Задолженность по аренде — одна из самых частых ситуаций в NYC, и есть <b>специальные программы</b> помощи, включая экстренные гранты 'one-shot deal'.",
    reassure:"Долг по аренде не означает потерю дома. Многие наверстывают с помощью, о которой не знали. Давайте найдём её.",
    facts:[["💰","<b>One-Shot Deal (HRA)</b> может покрыть задолженность по аренде в экстренном случае."],["📝","<b>Вы подаёте через ACCESS HRA</b> — защитники могут помочь вам."],["🛡️","<b>Подача может приостановить</b> некоторые шаги выселения. Стоит сделать рано."]],
    deep:"<p>Если у вас задолженность, <b>Экстренная помощь ('One-Shot Deal')</b> от HRA может оплатить долг для подходящих, особенно если вы можете показать, что справитесь дальше. Вы подаёте на ACCESS HRA, и социальный работник рассматривает вашу ситуацию.</p><p>Другие пути можно сложить: гранты на долг от НКО, договоры об оплате с арендодателем и — если дело уже подано — программы, которые свяжут вас с бесплатным адвокатом. Документирование дохода, суммы долга и любых трудностей (потеря работы, медсчета) усиливает заявку.</p><p>Главное — начать до роста долга. Даже частичное решение может остановить эскалацию дела.</p>"},
  unsafe:{title:"Небезопасные условия жизни.", tag:"🛠️ Обязанность арендодателя",
    plain:"Отопление, горячая вода и безопасный ремонт — ваше <b>законное право</b>, а не одолжение. Арендодатель обязан их обеспечить, и город может это принудить.",
    reassure:"Вы не обязаны так жить, и просить ремонт — ваше право. Жалоба не может привести к законному выселению.",
    facts:[["🔥","<b>Отопительный сезон</b> (1 окт–31 мая) требует установленных минимальных температур."],["📞","<b>Звоните в 311</b>, чтобы подать жалобу и создать официальную запись."],["🚫","<b>Месть незаконна</b> — арендодатель не может наказать вас за жалобу."]],
    deep:"<p>У каждого арендатора есть право на пригодное жильё — так называемая <b>гарантия пригодности для проживания</b>. Это значит работающие отопление и горячая вода, отсутствие протечек и плесени, исправная сантехника и отсутствие вредителей. В отопительный сезон (1 окт–31 мая) арендодатели должны поддерживать в квартирах установленные минимальные температуры днём и ночью.</p><p>Когда вы сообщаете об условиях в 311, город создаёт запись и может прислать инспектора, который может выписать нарушения арендодателю. Эта запись весома — она подтверждает вашу позицию при споре и может поддержать 'дело о ремонте' (иск HP) в жилищном суде, чтобы принудить ремонт.</p><p>Арендодателю незаконно мстить — повышать аренду, отказывать в продлении или угрожать выселением — за то, что вы просили ремонт или звонили в 311.</p>"},
  shelter:{title:"Вам нужно безопасное место.", tag:"🏠 Право на приют",
    plain:"В Нью-Йорке у вас есть <b>законное право на приют</b>. Никто не должен спать на улице сегодня, и есть люди, чья работа — помочь вам прямо сейчас.",
    reassure:"У вас есть право на безопасное место сегодня. Вы не обуза — эта помощь существует именно для этого момента.",
    facts:[["🛏️","<b>В NYC есть законное право на приют</b> для тех, кто в нём нуждается."],["📍","<b>PATH (Бронкс)</b> — центр приёма для семей с детьми, открыт 24/7."],["📞","<b>Звоните в 311</b> в любое время, чтобы связаться с приёмом."]],
    deep:"<p>Нью-Йорк — одно из немногих мест в стране с <b>законным правом на приют</b>: город обязан предоставить койку тем, кто в ней нуждается. Не нужно доказывать иммиграционный статус, чтобы искать экстренный приют.</p><p>Семьи с детьми проходят приём через <b>PATH</b> в Бронксе; одинокие взрослые используют назначенные центры приёма, и 311 может направить вас в нужный в любое время. Возьмите любые документы, что есть, но отсутствие бумаг не должно мешать вашему приёму.</p><p>Если вы спасаетесь от насилия, есть отдельные конфиденциальные приюты для жертв домашнего насилия — скажите при приёме или на горячей линии, и вас направят безопасно. Приют — это отправная точка к стабильному жилью, с соцработниками, помогающими со следующими шагами.</p>"},
  affordable:{title:"Поиск доступного жилья.", tag:"🏗️ Шаг за шагом",
    plain:"Доступное жильё в NYC в основном распределяется через <b>лотереи и списки ожидания</b>. Нужно терпение, но раннее внесение имени — самый важный шаг, и подача бесплатна.",
    reassure:"Может казаться медленно, но каждая заявка — реальный шанс. Регистрация сегодня включает вас в гонку. Давайте начнём.",
    facts:[["🎟️","<b>NYC Housing Connect</b> публикует лотереи доступных квартир, на которые можно подать."],["📋","<b>NYCHA и Section 8</b> имеют списки ожидания — раннее попадание важнее всего."],["🆓","<b>Подача всегда бесплатна.</b> Никогда не платите за участие в жилищной лотерее."]],
    deep:"<p>Большая часть доступного жилья в NYC распределяется через <b>NYC Housing Connect</b>, официальный лотерейный сайт города. Вы создаёте один профиль с размером семьи и доходом, затем подаёте на подходящие объявления. Отбор по лотерее и номеру записи, поэтому подача на многие объявления со временем повышает шансы.</p><p>Отдельно <b>NYCHA</b> (государственное жильё) и ваучеры <b>Section 8</b> используют длинные списки ожидания — когда они открываются, регистрируйтесь сразу, ведь позиция зависит от даты. Держите контакты актуальными, чтобы не пропустить письмо.</p><p>Остерегайтесь мошенничества: законные лотереи всегда бесплатны, никогда не просят оплату за 'удержание' квартиры и не гарантируют жильё за плату.</p>"},
  dv:{title:"Ваша безопасность прежде всего.", tag:"🛟 Конфиденциальная помощь · 24/7",
    plain:"Если вам причиняют вред или угрожают дома, вы не обязаны справляться в одиночку. Есть люди, доступные <b>прямо сейчас, в любой час</b>, которые помогут найти безопасное место и составить план — приватно и бесплатно.",
    reassure:"Вы заслуживаете безопасности. Эти услуги конфиденциальны, бесплатны и доступны 24/7 — включая помощь независимо от иммиграционного статуса.",
    facts:[["📞","<b>24-часовая горячая линия NYC</b> может найти экстренный приют и помочь спланировать: 1-800-621-HOPE."],["🤫","<b>Это конфиденциально.</b> Не нужно называть имя, чтобы получить помощь или совет."],["🏠","<b>Экстренные приюты при домашнем насилии</b> есть во всех пяти боро, с местами для детей."]],
    deep:"<p>Если вы переживаете домашнее или гендерное насилие, ваша безопасность — приоритет, и в Нью-Йорке есть специальные конфиденциальные службы именно для этого. 24-часовая линия (1-800-621-HOPE) может связать вас с экстренным приютом при домашнем насилии, помочь составить план безопасности и связать с консультированием и юрпомощью — всё бесплатно и на многих языках.</p><p>Эти службы отделены от обычной системы приютов и держатся в тайне, чтобы защитить ваше местонахождение. Вам не нужно сообщать иммиграционный статус, и у пострадавших есть особая жилищная защита — включая право на программы конфиденциального адреса.</p><p>Если вы в непосредственной опасности, звоните 911. Иначе линия может обсудить ваши варианты в вашем темпе — нет давления принимать решение, пока вы не готовы.</p>"},
  discrimination:{title:"Это может быть незаконно — и вы можете действовать.", tag:"⚖️ У вас есть права",
    plain:"Если арендодатель отказывает вам, преследует или относится иначе из-за того, кто вы — ваша раса, религия, иммиграционный статус, инвалидность, наличие детей или использование ваучера Section 8 — это <b>незаконная дискриминация</b> в NYC, и вы можете подать бесплатную жалобу.",
    reassure:"Вы не обязаны просто принимать это. Подача жалобы бесплатна, а использование ваучера и ваш иммиграционный статус оба защищены.",
    facts:[["🛡️","<b>Источник дохода защищён</b> — арендодатель не может отказать за использование ваучера Section 8."],["📝","<b>Подача бесплатна</b> через Комиссию по правам человека NYC."],["🌐","<b>Есть также штатные и федеральные варианты</b>, если ваше дело вне досягаемости NYC."]],
    deep:"<p>В NYC одни из сильнейших законов о справедливом жилье в стране. Арендодатель, брокер или дом не могут отказать вам, брать больше или относиться иначе из-за расы, цвета кожи, религии, происхождения, иммиграционного статуса, инвалидности, возраста, пола, ориентации или наличия детей. Они также не могут отказать за использование жилищного ваучера — это называется <b>дискриминацией по источнику дохода</b>, и это незаконно.</p><p>Если это случилось, запишите, что было сказано, кем и когда; сохраните сообщения, письма и объявления. Вы можете подать бесплатную жалобу в <b>Комиссию по правам человека NYC</b>, а для дел вне города есть штатные (Отдел по правам человека NY) и федеральные (HUD) варианты.</p><p>Подача бесплатна, вы можете сделать это независимо от иммиграционного статуса, и арендодателю незаконно мстить вам за отстаивание этих прав.</p>"}
};

/* ===================== Rights guides — Italiano (Italian) ===================== */
CASA_RIGHTS_I18N.it = [
  {t:"Sfratto e avvisi", s:"Cosa può e non può fare il padrone di casa", items:["Il padrone di casa non può sfrattarti da solo — solo un tribunale può, dopo una causa e l'ordine di un giudice.","Cambiare le serrature, rimuovere le tue cose o tagliare le utenze sono sfratti illegali 'fai-da-te'.","Hai diritto a un avviso scritto e a una data in tribunale dove puoi rispondere.","Molti inquilini di NYC hanno diritto a un avvocato gratuito tramite Right to Counsel."]},
  {t:"Riparazioni e abitabilità", s:"Riscaldamento, acqua calda e condizioni sicure", items:["Hai diritto al riscaldamento (1 ott–31 mag), all'acqua calda tutto l'anno e a una casa senza perdite, muffa e infestanti.","Segnala i problemi al 311 per creare un record ufficiale e attivare un'ispezione.","Puoi avviare un'azione HP nel tribunale della casa per imporre le riparazioni.","Il padrone di casa non può ritorcersi contro di te per aver chiesto riparazioni."]},
  {t:"Discriminazione", s:"Casa equa e diritti del voucher", items:["È illegale rifiutarti in base a razza, religione, origine nazionale, disabilità, stato familiare e altro.","Il padrone non può rifiutarti perché paghi con un voucher (discriminazione sulla fonte di reddito).","Puoi documentare e segnalare la discriminazione alla Commissione per i Diritti Umani di NYC.","Lo stato migratorio non è un motivo legale per negare la casa."]},
  {t:"Privacy e molestie", s:"Il tuo diritto alla pace in casa", items:["In genere il padrone deve dare un preavviso ragionevole prima di entrare nel tuo appartamento.","Le molestie — minacce, ripetuti cambi di serratura, taglio dei servizi per cacciarti — sono illegali.","Tieni un registro scritto degli episodi, con le date, come prova.","Puoi segnalare le molestie al 311 e cercare aiuto presso un'organizzazione di inquilini."]},
  {t:"Affitto e accessibilità", s:"Assistenza e i tuoi soldi", items:["I sussidi d'emergenza 'One-Shot Deal' (HRA) possono coprire gli arretrati per chi è idoneo.","Alcuni appartamenti sono ad affitto regolato, con limiti agli aumenti — verifica il tuo stato.","Fare domanda di assistenza è gratis; non pagare mai per accedere a un programma pubblico.","Le lotterie per case accessibili sono gestite da NYC Housing Connect."]},
  {t:"Diritti costituzionali (federali)", s:"La Costituzione, il Bill of Rights e gli emendamenti", items:["La Costituzione USA e il Bill of Rights proteggono tutti nel Paese, compresi i non cittadini.","Hai diritto alla libertà di parola, a praticare qualsiasi religione e a protestare pacificamente (1° Emendamento).","Hai diritto a restare in silenzio e a non rispondere alle domande della polizia (5° Emendamento).","Hai diritto al giusto processo e a pari protezione di legge (14° Emendamento)."]},
  {t:"Diritti dello Stato di New York", s:"Tutele per inquilini, lavoratori e consumatori", items:["New York aggiunge tutele oltre la legge federale per inquilini, lavoratori e consumatori.","È illegale discriminare in casa, lavoro o luoghi pubblici in base a caratteristiche protette — inclusi fonte di reddito e stato migratorio.","I lavoratori hanno diritto al salario minimo, ai congedi per malattia retribuiti e a condizioni sicure.","NYC ha alcune delle tutele locali dei diritti umani più forti del Paese."]},
  {t:"Diritti degli immigrati", s:"I tuoi diritti indipendentemente dallo stato", items:["Hai dei diritti indipendentemente dal tuo stato migratorio.","Hai diritto a restare in silenzio e non devi aprire la porta senza un mandato firmato da un giudice.","Non firmare nulla che non capisci — chiedi prima di parlare con un avvocato.","È disponibile aiuto legale gratuito e riservato; cercarlo non può essere usato contro di te."]},
  {t:"Diritti di inquilini e casa", s:"Sfratto, riparazioni e regolazione dell'affitto", items:["Non puoi essere sfrattato senza andare in tribunale — solo un giudice può ordinarlo.","Hai diritto a riscaldamento, acqua calda e riparazioni, e a segnalare problemi senza ritorsioni.","Molti inquilini hanno diritto a un avvocato gratuito nel tribunale della casa (Right to Counsel).","Gli inquilini ad affitto regolato hanno diritti di rinnovo e limiti agli aumenti."]}
];

/* ===================== Rights guides — Français (French) ===================== */
CASA_RIGHTS_I18N.fr = [
  {t:"Expulsion et avis", s:"Ce que le propriétaire peut et ne peut pas faire", items:["Le propriétaire ne peut pas vous expulser lui-même — seul un tribunal le peut, après une procédure et l'ordre d'un juge.","Changer les serrures, retirer vos affaires ou couper les services sont des expulsions illégales « par soi-même ».","Vous avez droit à un avis écrit et à une date d'audience où vous pouvez répondre.","Beaucoup de locataires de NYC ont droit à un avocat gratuit via Right to Counsel."]},
  {t:"Réparations et habitabilité", s:"Chauffage, eau chaude et conditions sûres", items:["Vous avez droit au chauffage (1 oct–31 mai), à l'eau chaude toute l'année et à un logement sans fuites, moisissure ni nuisibles.","Signalez les problèmes au 311 pour créer un dossier officiel et déclencher une inspection.","Vous pouvez engager une action HP au tribunal du logement pour imposer les réparations.","Le propriétaire ne peut pas exercer de représailles parce que vous demandez des réparations."]},
  {t:"Discrimination", s:"Logement équitable et droits liés au bon", items:["Il est illégal de vous refuser sur la base de la race, la religion, l'origine, le handicap, la situation familiale, etc.","Le propriétaire ne peut pas vous refuser parce que vous payez avec un bon (discrimination sur la source de revenu).","Vous pouvez documenter et signaler la discrimination à la Commission des droits de l'homme de NYC.","Le statut migratoire n'est pas un motif légal pour refuser un logement."]},
  {t:"Vie privée et harcèlement", s:"Votre droit à la tranquillité chez vous", items:["En général, le propriétaire doit donner un préavis raisonnable avant d'entrer dans votre logement.","Le harcèlement — menaces, changements répétés de serrures, coupure des services pour vous chasser — est illégal.","Tenez un journal écrit des incidents, avec les dates, comme preuve.","Vous pouvez signaler le harcèlement au 311 et demander l'aide d'une organisation de locataires."]},
  {t:"Loyer et accessibilité", s:"Aide et votre argent", items:["Les aides d'urgence « One-Shot Deal » (HRA) peuvent couvrir les arriérés de loyer pour les personnes éligibles.","Certains logements sont à loyer régulé, avec des limites d'augmentation — vérifiez votre statut.","Demander une aide est gratuit ; ne payez jamais pour accéder à un programme public.","Les loteries de logements abordables sont gérées via NYC Housing Connect."]},
  {t:"Droits constitutionnels (fédéraux)", s:"La Constitution, la Déclaration des droits et les amendements", items:["La Constitution américaine et la Déclaration des droits protègent tout le monde dans le pays, y compris les non-citoyens.","Vous avez droit à la liberté d'expression, à pratiquer toute religion et à manifester pacifiquement (1er Amendement).","Vous avez le droit de garder le silence et de ne pas répondre à la police (5e Amendement).","Vous avez droit à une procédure équitable et à une égale protection de la loi (14e Amendement)."]},
  {t:"Droits de l'État de New York", s:"Protections des locataires, travailleurs et consommateurs", items:["New York ajoute des protections au-delà de la loi fédérale pour les locataires, travailleurs et consommateurs.","Il est illégal de discriminer dans le logement, l'emploi ou les lieux publics selon des traits protégés — y compris la source de revenu et le statut migratoire.","Les travailleurs ont droit au salaire minimum, aux congés maladie payés et à des conditions sûres.","NYC a parmi les protections locales des droits humains les plus fortes du pays."]},
  {t:"Droits des immigrés", s:"Vos droits quel que soit le statut", items:["Vous avez des droits quel que soit votre statut migratoire.","Vous avez le droit de garder le silence et n'êtes pas obligé d'ouvrir votre porte sans un mandat signé par un juge.","Ne signez rien que vous ne comprenez pas — demandez d'abord à parler à un avocat.","Une aide juridique gratuite et confidentielle existe ; y recourir ne peut être retenu contre vous."]},
  {t:"Droits des locataires et du logement", s:"Expulsion, réparations et régulation du loyer", items:["Vous ne pouvez pas être expulsé sans passer par le tribunal — seul un juge peut l'ordonner.","Vous avez droit au chauffage, à l'eau chaude et aux réparations, et à signaler des problèmes sans représailles.","Beaucoup de locataires ont droit à un avocat gratuit au tribunal du logement (Right to Counsel).","Les locataires à loyer régulé ont des droits de renouvellement et des limites d'augmentation."]}
];

/* ===================== Rights guides — Deutsch (German) ===================== */
CASA_RIGHTS_I18N.de = [
  {t:"Räumung und Mitteilungen", s:"Was ein Vermieter darf und nicht darf", items:["Ein Vermieter kann Sie nicht selbst räumen — nur ein Gericht kann das, nach einem Verfahren und richterlicher Anordnung.","Schlösser austauschen, Ihre Sachen entfernen oder Versorgung abstellen sind illegale Räumungen in Eigenregie.","Sie haben Anspruch auf eine schriftliche Mitteilung und einen Gerichtstermin, an dem Sie antworten können.","Viele Mieter in NYC haben über Right to Counsel Anspruch auf einen kostenlosen Anwalt."]},
  {t:"Reparaturen und Bewohnbarkeit", s:"Heizung, Warmwasser und sichere Verhältnisse", items:["Sie haben Anrecht auf Heizung (1. Okt–31. Mai), ganzjährig Warmwasser und eine Wohnung ohne Lecks, Schimmel und Ungeziefer.","Melden Sie Probleme dem 311, um einen amtlichen Eintrag zu schaffen und eine Inspektion auszulösen.","Sie können beim Wohnungsgericht eine HP-Klage einreichen, um Reparaturen zu erzwingen.","Ein Vermieter darf sich nicht dafür rächen, dass Sie Reparaturen verlangen."]},
  {t:"Diskriminierung", s:"Faires Wohnen und Gutschein-Rechte", items:["Es ist illegal, Sie wegen Rasse, Religion, Herkunft, Behinderung, Familienstand u. a. abzulehnen.","Vermieter dürfen Sie nicht ablehnen, weil Sie mit einem Gutschein zahlen (Diskriminierung nach Einkommensquelle).","Sie können Diskriminierung dokumentieren und der NYC Commission on Human Rights melden.","Der Aufenthaltsstatus ist kein rechtlicher Grund, Wohnraum zu verweigern."]},
  {t:"Privatsphäre und Belästigung", s:"Ihr Recht auf Ruhe zu Hause", items:["In der Regel muss ein Vermieter vor Betreten Ihrer Wohnung angemessen ankündigen.","Belästigung — Drohungen, wiederholtes Aussperren, Abstellen von Diensten, um Sie zu vertreiben — ist illegal.","Führen Sie als Beweis ein schriftliches Protokoll der Vorfälle mit Daten.","Sie können Belästigung dem 311 melden und Hilfe bei einer Mieterorganisation suchen."]},
  {t:"Miete und Bezahlbarkeit", s:"Hilfe und Ihr Geld", items:["Notfall-Zuschüsse „One-Shot Deal“ (HRA) können Mietrückstände für Berechtigte abdecken.","Manche Wohnungen sind mietreguliert, mit Grenzen für Erhöhungen — prüfen Sie Ihren Status.","Hilfe zu beantragen ist kostenlos; zahlen Sie nie für den Zugang zu einem öffentlichen Programm.","Lotterien für bezahlbaren Wohnraum laufen über NYC Housing Connect."]},
  {t:"Verfassungsrechte (Bund)", s:"Verfassung, Bill of Rights und Zusätze", items:["Die US-Verfassung und die Bill of Rights schützen alle im Land, auch Nicht-Staatsbürger.","Sie haben das Recht auf freie Rede, jede Religion auszuüben und friedlich zu protestieren (1. Zusatzartikel).","Sie haben das Recht zu schweigen und Polizeifragen nicht zu beantworten (5. Zusatzartikel).","Sie haben das Recht auf ein faires Verfahren und gleichen Schutz durch das Gesetz (14. Zusatzartikel)."]},
  {t:"Rechte des Staates New York", s:"Schutz für Mieter, Arbeitnehmer und Verbraucher", items:["New York ergänzt den Schutz über das Bundesrecht hinaus für Mieter, Arbeitnehmer und Verbraucher.","Diskriminierung bei Wohnen, Arbeit oder öffentlichen Orten nach geschützten Merkmalen ist illegal — auch Einkommensquelle und Aufenthaltsstatus.","Arbeitnehmer haben Anspruch auf Mindestlohn, bezahlten Krankenurlaub und sichere Bedingungen.","NYC hat einen der stärksten lokalen Menschenrechtsschutze des Landes."]},
  {t:"Rechte von Eingewanderten", s:"Ihre Rechte unabhängig vom Status", items:["Sie haben Rechte, unabhängig von Ihrem Aufenthaltsstatus.","Sie haben das Recht zu schweigen und müssen Ihre Tür ohne richterlich unterzeichneten Beschluss nicht öffnen.","Unterschreiben Sie nichts, was Sie nicht verstehen — bitten Sie zuerst um ein Gespräch mit einem Anwalt.","Kostenlose, vertrauliche Rechtshilfe ist verfügbar; sie zu suchen darf nicht gegen Sie verwendet werden."]},
  {t:"Mieter- und Wohnrechte", s:"Räumung, Reparaturen und Mietregulierung", items:["Sie können nicht ohne Gericht geräumt werden — nur ein Richter kann es anordnen.","Sie haben Anrecht auf Heizung, Warmwasser und Reparaturen und darauf, Probleme ohne Vergeltung zu melden.","Viele Mieter haben Anspruch auf einen kostenlosen Anwalt im Wohnungsgericht (Right to Counsel).","Mietregulierte Mieter haben Verlängerungsrechte und Grenzen für Mieterhöhungen."]}
];

/* ===================== Rights guides — 中文 (Chinese) ===================== */
CASA_RIGHTS_I18N.zh = [
  {t:"驱逐与通知", s:"房东能做和不能做的", items:["房东不能自己驱逐您——只有法院在案件和法官命令后才能。","换锁、搬走您的物品或切断公用事业是非法的'自助'驱逐。","您有权获得书面通知和可以回应的开庭日期。","许多纽约租户通过 Right to Counsel 有资格获得免费律师。"]},
  {t:"维修与宜居", s:"暖气、热水和安全条件", items:["您有权获得暖气（10月1日–5月31日）、全年热水，以及没有漏水、霉菌和害虫的家。","向311举报问题以建立官方记录并触发检查。","您可以在住房法庭提起 HP 诉讼以强制维修。","房东不能因您要求维修而报复。"]},
  {t:"歧视", s:"公平住房与租房券权利", items:["因种族、宗教、原国籍、残疾、家庭状况等拒绝您是非法的。","房东不能因您用券付款而拒绝您（收入来源歧视）。","您可以记录并向纽约市人权委员会举报歧视。","移民身份不是拒绝住房的合法理由。"]},
  {t:"隐私与骚扰", s:"您在家中的安宁权", items:["房东进入您的公寓前通常必须给予合理通知。","骚扰——威胁、反复换锁、切断服务把您赶走——是非法的。","保留事件的书面记录和日期作为证据。","您可以向311举报骚扰并向租户组织求助。"]},
  {t:"租金与可负担", s:"援助与您的钱", items:["紧急'一次性补助'（HRA）可为符合条件者支付欠租。","有些公寓是租金稳定的，加租有限制——核实您的状态。","申请援助免费；切勿为获取公共项目付费。","可负担住房抽签通过 NYC Housing Connect 进行。"]},
  {t:"宪法权利（联邦）", s:"宪法、权利法案与修正案", items:["美国宪法和权利法案保护国内所有人，包括非公民。","您有言论自由、信仰任何宗教和和平抗议的权利（第一修正案）。","您有保持沉默、不回答警方提问的权利（第五修正案）。","您有正当程序和法律平等保护的权利（第十四修正案）。"]},
  {t:"纽约州权利", s:"租户、工人和消费者保护", items:["纽约在联邦法之外为租户、工人和消费者增加保护。","在住房、工作或公共场所因受保护特征歧视是非法的——包括收入来源和移民身份。","工人有权获得最低工资、带薪病假和安全条件。","纽约市有全国最强的地方人权保护之一。"]},
  {t:"移民权利", s:"无论身份的您的权利", items:["无论您的移民身份如何，您都有权利。","您有保持沉默的权利，没有法官签署的令状不必开门。","不要签署您不理解的任何文件——先要求与律师交谈。","有免费、保密的法律帮助；寻求它不能被用来对付您。"]},
  {t:"租户与住房权利", s:"驱逐、维修与租金管制", items:["不经法院您不能被驱逐——只有法官能下令。","您有权获得暖气、热水和维修，并可举报问题而不受报复。","许多租户在住房法庭有资格获得免费律师（Right to Counsel）。","租金稳定的租户有续约权和加租限制。"]}
];

/* ===================== Rights guides — Kreyòl Ayisyen (Haitian Creole) ===================== */
CASA_RIGHTS_I18N.ht = [
  {t:"Degèpisman ak avi", s:"Sa yon pwopriyetè ka ak pa ka fè", items:["Yon pwopriyetè pa ka degèpi w pou kont li — se sèlman yon tribinal ki ka, apre yon ka ak yon lòd jij.","Chanje seri, retire bagay ou, oswa koupe sèvis se degèpisman ilegal 'pa men l'.","Ou gen dwa a yon avi alekri ak yon dat tribinal kote ou ka reponn.","Anpil lokatè NYC kalifye pou yon avoka gratis atravè Right to Counsel."]},
  {t:"Reparasyon ak abitabilite", s:"Chofaj, dlo cho, ak kondisyon san danje", items:["Ou gen dwa a chofaj (1 okt–31 me), dlo cho tout ane a, ak yon kay san dlo k ap koule, mwazi, ak ensèk.","Rapòte pwoblèm bay 311 pou kreye yon dosye ofisyèl epi deklanche yon enspeksyon.","Ou ka pote yon aksyon HP nan tribinal lojman pou fòse reparasyon.","Yon pwopriyetè pa ka fè reprezay paske w mande reparasyon."]},
  {t:"Diskriminasyon", s:"Lojman jis ak dwa bon", items:["Li ilegal pou rejte w sou baz ras, relijyon, orijin nasyonal, andikap, sitiyasyon fanmi, elatriye.","Pwopriyetè pa ka rejte w paske w peye ak yon bon (diskriminasyon sou sous revni).","Ou ka dokimante epi rapòte diskriminasyon bay Komisyon Dwa Moun NYC.","Estati imigrasyon se pa yon rezon legal pou refize lojman."]},
  {t:"Vi prive ak asèlman", s:"Dwa ou a lapè lakay ou", items:["Anjeneral yon pwopriyetè dwe bay yon avi rezonab anvan li antre nan apatman w.","Asèlman — menas, fèmen seri repete, koupe sèvis pou pouse w soti — ilegal.","Kenbe yon dosye alekri sou ensidan yo, ak dat, kòm prèv.","Ou ka rapòte asèlman bay 311 epi chèche èd nan yon òganizasyon lokatè."]},
  {t:"Lwaye ak abòdabilite", s:"Asistans ak lajan ou", items:["Sibvansyon ijans 'One-Shot Deal' (HRA) ka kouvri lwaye an reta pou moun ki kalifye.","Kèk apatman gen lwaye estabilize, ak limit sou ogmantasyon — verifye estati w.","Aplike pou asistans gratis; pa janm peye pou jwenn yon pwogram piblik.","Lotri lojman abòdab fèt atravè NYC Housing Connect."]},
  {t:"Dwa konstitisyonèl (federal)", s:"Konstitisyon an, Bill of Rights ak amannman", items:["Konstitisyon Etazini ak Bill of Rights pwoteje tout moun nan peyi a, ki gen ladan non-sitwayen.","Ou gen dwa a libète lapawòl, pratike nenpòt relijyon, epi pwoteste pasifikman (1ye Amannman).","Ou gen dwa pou rete an silans epi pa reponn kesyon lapolis (5yèm Amannman).","Ou gen dwa a pwosesis jis ak pwoteksyon egal devan lalwa (14yèm Amannman)."]},
  {t:"Dwa Eta New York", s:"Pwoteksyon lokatè, travayè ak konsomatè", items:["New York ajoute pwoteksyon pi lwen pase lwa federal pou lokatè, travayè ak konsomatè.","Li ilegal pou diskrimine nan lojman, travay, oswa kote piblik sou baz karakteristik pwoteje — ki gen ladan sous revni ak estati imigrasyon.","Travayè gen dwa a salè minimòm, konje maladi peye, ak kondisyon san danje.","NYC gen kèk nan pwoteksyon dwa moun lokal ki pi fò nan peyi a."]},
  {t:"Dwa imigran", s:"Dwa ou kèlkeswa estati w", items:["Ou gen dwa kèlkeswa estati imigrasyon w.","Ou gen dwa pou rete an silans, e ou pa oblije louvri pòt ou san yon manda yon jij siyen.","Pa siyen anyen ou pa konprann — mande pou pale ak yon avoka anvan.","Gen èd legal gratis e konfidansyèl; chèche l pa ka itilize kont ou."]},
  {t:"Dwa lokatè ak lojman", s:"Degèpisman, reparasyon ak règleman lwaye", items:["Yo pa ka degèpi w san ale nan tribinal — se sèlman yon jij ki ka bay lòd la.","Ou gen dwa a chofaj, dlo cho, ak reparasyon, epi pou rapòte pwoblèm san reprezay.","Anpil lokatè kalifye pou yon avoka gratis nan tribinal lojman (Right to Counsel).","Lokatè ak lwaye estabilize gen dwa renouvèlman ak limit sou ogmantasyon."]}
];

/* ===================== Rights guides — বাংলা (Bengali) ===================== */
CASA_RIGHTS_I18N.bn = [
  {t:"উচ্ছেদ ও নোটিশ", s:"বাড়িওয়ালা যা পারে ও পারে না", items:["বাড়িওয়ালা নিজে আপনাকে উচ্ছেদ করতে পারে না — কেবল আদালত পারে, মামলা ও বিচারকের আদেশের পর।","তালা বদলানো, জিনিস সরানো বা ইউটিলিটি বন্ধ করা অবৈধ 'স্ব-সহায়ক' উচ্ছেদ।","আপনার লিখিত নোটিশ ও জবাব দেওয়ার আদালতের তারিখের অধিকার আছে।","অনেক NYC ভাড়াটিয়া Right to Counsel-এর মাধ্যমে বিনামূল্যে আইনজীবীর যোগ্য।"]},
  {t:"মেরামত ও বসবাসযোগ্যতা", s:"হিট, গরম জল ও নিরাপদ পরিবেশ", items:["আপনার হিট (১ অক্টো–৩১ মে), সারা বছর গরম জল, এবং ফুটো, ছত্রাক ও পোকামুক্ত বাড়ির অধিকার আছে।","সমস্যা 311-এ জানান যাতে সরকারি রেকর্ড তৈরি হয় ও পরিদর্শন হয়।","মেরামতে বাধ্য করতে আপনি হাউজিং কোর্টে HP মামলা করতে পারেন।","মেরামত চাওয়ার জন্য বাড়িওয়ালা প্রতিশোধ নিতে পারে না।"]},
  {t:"বৈষম্য", s:"ন্যায্য আবাসন ও ভাউচার অধিকার", items:["জাতি, ধর্ম, জাতীয় উৎস, প্রতিবন্ধকতা, পরিবার অবস্থা ইত্যাদির ভিত্তিতে প্রত্যাখ্যান অবৈধ।","ভাউচার দিয়ে পেমেন্ট করায় বাড়িওয়ালা আপনাকে প্রত্যাখ্যান করতে পারে না (আয়ের উৎস বৈষম্য)।","আপনি বৈষম্য নথিভুক্ত করে NYC মানবাধিকার কমিশনে জানাতে পারেন।","অভিবাসন অবস্থা আবাসন অস্বীকারের আইনি কারণ নয়।"]},
  {t:"গোপনীয়তা ও হয়রানি", s:"নিজের বাড়িতে শান্তির অধিকার", items:["সাধারণত বাড়িওয়ালাকে আপনার অ্যাপার্টমেন্টে ঢোকার আগে যুক্তিসঙ্গত নোটিশ দিতে হয়।","হয়রানি — হুমকি, বারবার তালা বদল, সেবা বন্ধ করে তাড়ানো — অবৈধ।","প্রমাণ হিসেবে ঘটনার তারিখসহ লিখিত নথি রাখুন।","আপনি 311-এ হয়রানি জানাতে ও ভাড়াটিয়া সংস্থার সাহায্য নিতে পারেন।"]},
  {t:"ভাড়া ও সাশ্রয়", s:"সহায়তা ও আপনার অর্থ", items:["জরুরি 'One-Shot Deal' অনুদান (HRA) যোগ্যদের বকেয়া ভাড়া কভার করতে পারে।","কিছু অ্যাপার্টমেন্ট ভাড়া-স্থিতিশীল, বৃদ্ধিতে সীমা আছে — আপনার অবস্থা যাচাই করুন।","সহায়তার আবেদন বিনামূল্যে; সরকারি প্রোগ্রামে ঢুকতে কখনো অর্থ দেবেন না।","সাশ্রয়ী আবাসন লটারি NYC Housing Connect-এর মাধ্যমে চলে।"]},
  {t:"সাংবিধানিক অধিকার (ফেডারেল)", s:"সংবিধান, অধিকার বিল ও সংশোধনী", items:["মার্কিন সংবিধান ও অধিকার বিল দেশের সবাইকে রক্ষা করে, অ-নাগরিকসহ।","আপনার বাকস্বাধীনতা, যেকোনো ধর্ম পালন ও শান্তিপূর্ণ প্রতিবাদের অধিকার আছে (১ম সংশোধনী)।","আপনার নীরব থাকার ও পুলিশের প্রশ্নের উত্তর না দেওয়ার অধিকার আছে (৫ম সংশোধনী)।","আপনার ন্যায্য প্রক্রিয়া ও আইনের সমান সুরক্ষার অধিকার আছে (১৪তম সংশোধনী)।"]},
  {t:"নিউইয়র্ক রাজ্যের অধিকার", s:"ভাড়াটিয়া, শ্রমিক ও ভোক্তা সুরক্ষা", items:["নিউইয়র্ক ভাড়াটিয়া, শ্রমিক ও ভোক্তাদের জন্য ফেডারেল আইনের বাইরে সুরক্ষা যোগ করে।","সুরক্ষিত বৈশিষ্ট্যের ভিত্তিতে আবাসন, কাজ বা পাবলিক স্থানে বৈষম্য অবৈধ — আয়ের উৎস ও অভিবাসন অবস্থাসহ।","শ্রমিকদের ন্যূনতম মজুরি, বেতনসহ অসুস্থতা ছুটি ও নিরাপদ পরিবেশের অধিকার আছে।","NYC-তে দেশের অন্যতম শক্তিশালী স্থানীয় মানবাধিকার সুরক্ষা আছে।"]},
  {t:"অভিবাসীর অধিকার", s:"অবস্থা নির্বিশেষে আপনার অধিকার", items:["আপনার অভিবাসন অবস্থা যাই হোক, আপনার অধিকার আছে।","আপনার নীরব থাকার অধিকার আছে, এবং বিচারক-স্বাক্ষরিত পরোয়ানা ছাড়া দরজা খুলতে হবে না।","যা বোঝেন না তা স্বাক্ষর করবেন না — আগে আইনজীবীর সাথে কথা বলতে চান।","বিনামূল্যে, গোপন আইনি সাহায্য আছে; তা চাওয়া আপনার বিরুদ্ধে ব্যবহার করা যাবে না।"]},
  {t:"ভাড়াটিয়া ও আবাসন অধিকার", s:"উচ্ছেদ, মেরামত ও ভাড়া নিয়ন্ত্রণ", items:["আদালতে না গিয়ে আপনাকে উচ্ছেদ করা যায় না — কেবল বিচারক আদেশ দিতে পারেন।","আপনার হিট, গরম জল ও মেরামতের অধিকার আছে, এবং প্রতিশোধ ছাড়া সমস্যা জানানোর অধিকার।","অনেক ভাড়াটিয়া হাউজিং কোর্টে বিনামূল্যে আইনজীবীর যোগ্য (Right to Counsel)।","ভাড়া-স্থিতিশীল ভাড়াটিয়াদের নবায়ন অধিকার ও ভাড়া বৃদ্ধির সীমা আছে।"]}
];

/* ===================== Rights guides — Русский (Russian) ===================== */
CASA_RIGHTS_I18N.ru = [
  {t:"Выселение и уведомления", s:"Что арендодатель может и не может", items:["Арендодатель не может выселить вас сам — только суд, после дела и решения судьи.","Смена замков, вынос вещей или отключение коммуникаций — незаконное 'самовольное' выселение.","Вы имеете право на письменное уведомление и дату суда, где можете ответить.","Многие арендаторы NYC имеют право на бесплатного адвоката через Right to Counsel."]},
  {t:"Ремонт и пригодность жилья", s:"Отопление, горячая вода и безопасные условия", items:["Вы имеете право на отопление (1 окт–31 мая), горячую воду круглый год и жильё без протечек, плесени и вредителей.","Сообщайте о проблемах в 311, чтобы создать официальную запись и вызвать проверку.","Вы можете подать иск HP в жилищный суд, чтобы добиться ремонта.","Арендодатель не может мстить вам за просьбу о ремонте."]},
  {t:"Дискриминация", s:"Справедливое жильё и права на ваучер", items:["Незаконно отказывать вам по признаку расы, религии, происхождения, инвалидности, семейного положения и др.","Арендодатель не может отказать из-за оплаты ваучером (дискриминация по источнику дохода).","Вы можете задокументировать и сообщить о дискриминации в Комиссию по правам человека NYC.","Иммиграционный статус — не законная причина отказа в жилье."]},
  {t:"Приватность и преследование", s:"Ваше право на покой дома", items:["Обычно арендодатель должен заранее разумно уведомить перед входом в вашу квартиру.","Преследование — угрозы, повторные смены замков, отключение услуг, чтобы выжить вас — незаконно.","Ведите письменный журнал случаев с датами как доказательство.","Вы можете сообщить о преследовании в 311 и обратиться в организацию арендаторов."]},
  {t:"Аренда и доступность", s:"Помощь и ваши деньги", items:["Экстренные гранты 'One-Shot Deal' (HRA) могут покрыть задолженность по аренде для подходящих.","Некоторые квартиры с регулируемой арендой, с лимитами на повышение — проверьте свой статус.","Подача на помощь бесплатна; никогда не платите за доступ к государственной программе.","Лотереи доступного жилья проводятся через NYC Housing Connect."]},
  {t:"Конституционные права (федеральные)", s:"Конституция, Билль о правах и поправки", items:["Конституция США и Билль о правах защищают всех в стране, включая неграждан.","Вы имеете право на свободу слова, исповедание любой религии и мирный протест (1-я поправка).","Вы имеете право молчать и не отвечать на вопросы полиции (5-я поправка).","Вы имеете право на надлежащую процедуру и равную защиту по закону (14-я поправка)."]},
  {t:"Права штата Нью-Йорк", s:"Защита арендаторов, работников и потребителей", items:["Нью-Йорк добавляет защиту сверх федерального закона для арендаторов, работников и потребителей.","Незаконно дискриминировать в жилье, работе или общественных местах по защищённым признакам — включая источник дохода и иммиграционный статус.","Работники имеют право на минимальную оплату, оплачиваемый больничный и безопасные условия.","У NYC одни из сильнейших местных правозащитных гарантий в стране."]},
  {t:"Права иммигрантов", s:"Ваши права независимо от статуса", items:["У вас есть права независимо от иммиграционного статуса.","Вы имеете право молчать и не обязаны открывать дверь без ордера, подписанного судьёй.","Не подписывайте то, что не понимаете — сначала попросите поговорить с адвокатом.","Доступна бесплатная конфиденциальная юрпомощь; обращение за ней не может быть использовано против вас."]},
  {t:"Права арендаторов и жильё", s:"Выселение, ремонт и регулирование аренды", items:["Вас нельзя выселить без суда — только судья может это предписать.","Вы имеете право на отопление, горячую воду и ремонт, а также сообщать о проблемах без мести.","Многие арендаторы имеют право на бесплатного адвоката в жилищном суде (Right to Counsel).","Арендаторы с регулируемой арендой имеют право на продление и лимиты на повышение."]}
];

/* ===================== Kreyòl Ayisyen (Haitian Creole) — summaries ===================== */
CASA_SUM_I18N.ht = {
  type:{title:"Sa sanble yon Avi pou Korije (Notice to Cure).", tag:"⏳ Ijan · 10 jou",
    plain:"Dapre sa ou dekri, pwopriyetè a ba ou yon <b>Avi pou Korije</b> — yon papye ki di ou kraze yon règ nan kontra ou. Se <b>pa</b> yon degèpisman. Se premye etap yon pwosesis, e ou gen tan ak opsyon.",
    reassure:"Yon avi se pa yon degèpisman. Ou gen dwa, e gen moun ki fè sa gratis chak jou. An nou ale yon etap alafwa.",
    facts:[["📅","<b>Ou gen apeprè 10 jou</b> pou reponn oswa korije pwoblèm nan."],["⚖️","<b>Sa se pa yon lòd degèpisman.</b> Se sèlman yon jij ki ka bay sa, apre yon ka nan tribinal."],["🆓","<b>Ou ka kalifye pou yon avoka gratis</b> atravè Right to Counsel NYC la."]],
    deep:"<p>Yon <b>Avi pou Korije</b> se yon avètisman alekri, se pa yon lòd tribinal. Pwopriyetè a deklare ou kraze yon 'obligasyon enpòtan' nan kontra a — pa egzanp yon bèt san otorizasyon, moun anplis k ap viv la, oswa bri. Avi a dwe ba ou yon delè (anjeneral 10 jou) pou korije pwoblèm nan.</p><p>Si ou korije pwoblèm nan nan delè a, zafè a anjeneral fini la. Si ou pa fè l, pwochen etap pwopriyetè a se yon <b>Avi Terminezon</b>, e se sèlman apre sa li ka kòmanse yon ka nan tribinal lojman. Menm lè sa a, ou jwenn yon dat tribinal ak yon chans pou reponn — anyen pa rive otomatikman.</p><p>Bagay ki pi enpòtan yo: kenbe avi a, pa demenaje, epi rele yon avoka oswa liy lokatè gratis touswit pou yon moun revize mo egzak yo avè w.</p>"},
  evict:{title:"Fè fas ak yon avi oswa degèpisman.", tag:"⏳ Ijan",
    plain:"Resevwa yon avi fè pè, men se <b>kòmansman</b> yon pwosesis — se pa fen an. Anyen pa rive nan yon sèl nwit, e ou gen pwoteksyon reyèl.",
    reassure:"Yo pa ka retire w san yon ka nan tribinal ak yon lòd jij. Ou gen tan. An nou jwenn pwochen etap ou.",
    facts:[["📅","<b>Delè yo enpòtan</b> — men rate youn raman se fen an. Aji vit, pa nan panik."],["⚖️","<b>Se sèlman yon tribinal</b> ki ka bay yon lòd degèpisman, janmen pwopriyetè a dirèkteman."],["🆓","<b>Èd legal gratis</b> egziste egzakteman pou sa."]],
    deep:"<p>Yon degèpisman nan NYC se yon pwosesis legal ak plizyè etap, e yon lokatè gen dwa pou yo tande l nan chak etap. Li anjeneral kòmanse ak yon avi alekri, apre yon petisyon nan tribinal, apre yon odyans kote ou ka prezante pa w la. Yon pwopriyetè <b>pa ka</b> chanje seri, retire bagay ou, oswa koupe sèvis pou fòse w soti — sa se yon degèpisman ilegal 'pa men l'.</p><p>Se sèlman yon marshal vil la, ak yon manda jij, ki ka egzekite yon degèpisman, e ou resevwa avètisman alekri anvan pwen sa a. Nan nenpòt etap ou ka mande plis tan, prezante defans (tankou reparasyon ki nesesè oswa papye ki pa kòrèk), epi mande yon avoka gratis.</p><p>Aji bonè ba ou plis opsyon — pi move bagay la se inyore papye yo epi rate yon dat tribinal.</p>"},
  rent:{title:"An reta sou lwaye.", tag:"💵 Gen èd disponib",
    plain:"Pran reta sou lwaye se youn nan sitiyasyon ki pi komen nan NYC — e gen <b>pwogram espesifik</b> ki fèt pou ede, ki gen ladan sibvansyon ijans 'one-shot deal'.",
    reassure:"Dwe lwaye pa vle di pèdi kay ou. Anpil moun ratrape ak èd yo pa t konnen egziste. An nou jwenn li.",
    facts:[["💰","<b>One-Shot Deal (HRA)</b> ka kouvri lwaye an reta nan yon ijans."],["📝","<b>Ou aplike atravè ACCESS HRA</b> — defansè yo ka ede w fè l."],["🛡️","<b>Aplike ka kanpe</b> kèk etap degèpisman. Li vo lapèn fè l bonè."]],
    deep:"<p>Si ou an reta sou lwaye, <b>Asistans Ijans ('One-Shot Deal')</b> vil la atravè HRA ka peye reta pou moun ki kalifye, sitou lè ou ka montre w ap kapab kontinye peye apre. Ou aplike sou ACCESS HRA, e yon travayè sosyal revize sitiyasyon w.</p><p>Lòt chemen ka anpile anwo: sibvansyon reta nan men òganizasyon san bi likratif, akò pèman ak pwopriyetè a, e — si yon ka deja depoze — pwogram ki konekte w ak yon avoka gratis. Dokimante revni w, kantite ou dwe a, ak nenpòt difikilte (pèdi travay, bòdwo medikal) ranfòse yon aplikasyon.</p><p>Kle a se kòmanse anvan dèt la grandi. Menm yon solisyon pasyèl ka kanpe yon ka pou l pa monte.</p>"},
  unsafe:{title:"Kondisyon lavi ki pa an sekirite.", tag:"🛠️ Devwa pwopriyetè a",
    plain:"Chofaj, dlo cho, ak reparasyon san danje se <b>dwa legal ou</b> — se pa favè. Pwopriyetè ou dwe bay yo, e vil la ka egzije sa.",
    reassure:"Ou pa oblije viv konsa, e mande reparasyon se dwa ou. Rapòte l pa ka fè yo degèpi w legalman.",
    facts:[["🔥","<b>Sezon chofaj</b> (1 okt–31 me) egzije tanperati minimòm fiks."],["📞","<b>Rele 311</b> pou depoze yon plent epi kreye yon dosye ofisyèl."],["🚫","<b>Reprezay ilegal</b> — yon pwopriyetè pa ka pini w paske w rapòte."]],
    deep:"<p>Chak lokatè gen dwa a yon kay ki ka viv ladan l — sa yo rele <b>garanti abitabilite</b>. Sa vle di chofaj ak dlo cho k ap mache, pa gen dlo k ap koule ni mwazi, plonbri k ap mache, ak san ensèk. Pandan sezon chofaj (1 okt–31 me) pwopriyetè yo dwe kenbe apatman yo nan tanperati minimòm fiks lajounen kou lannwit.</p><p>Lè w rapòte kondisyon yo bay 311, vil la kreye yon dosye epi ka voye yon enspektè, ki ka bay vyolasyon kont pwopriyetè a. Dosye sa a gen anpil fòs — li sipòte w si gen yon dezakò, e li ka sipòte yon 'ka reparasyon' (yon aksyon HP) ou pote nan tribinal lojman pou fòse reparasyon.</p><p>Li ilegal pou yon pwopriyetè fè reprezay — monte lwaye, refize renouvle, oswa menase degèpisman — paske w mande reparasyon oswa rele 311.</p>"},
  shelter:{title:"Ou bezwen yon kote ki an sekirite.", tag:"🏠 Dwa a refij",
    plain:"Nan Vil Nouyòk, ou gen yon <b>dwa legal a refij</b>. Pèsonn pa ta dwe dòmi nan lari aswè a, e gen moun ki gen travay pou ede w kounye a menm.",
    reassure:"Ou gen dwa a yon kote ki an sekirite aswè a. Ou pa yon chay — èd sa a egziste egzakteman pou moman sa a.",
    facts:[["🛏️","<b>NYC gen yon dwa legal a refij</b> pou moun ki bezwen l."],["📍","<b>PATH (Bronks)</b> se sant admisyon pou fanmi ak timoun — louvri 24/7."],["📞","<b>Rele 311</b> nenpòt lè pou yo konekte w ak admisyon."]],
    deep:"<p>Vil Nouyòk se youn nan sèl kote nan peyi a ki gen yon <b>dwa legal a refij</b> — sa vle di vil la dwe bay yon kabann pou moun ki bezwen youn. Ou pa bezwen pwouve estati imigrasyon pou chèche refij ijans.</p><p>Fanmi ak timoun pase pa <b>PATH</b> nan Bronks pou admisyon; granmoun pou kont yo itilize sant admisyon deziyen, e 311 ka dirije w nan bon kote a nenpòt lè. Pote nenpòt ID ak dokiman ou genyen, men mank papye pa ta dwe anpeche yo wè w.</p><p>Si w ap kouri kite vyolans, gen refij konfidansyèl separe pou vyolans domestik — di admisyon an oswa liy lan epi y ap dirije w an sekirite. Refij se yon pwen depa vè lojman estab, ak travayè sosyal ki ka ede ak pwochen etap.</p>"},
  affordable:{title:"Chèche lojman abòdab.", tag:"🏗️ Etap pa etap",
    plain:"Lojman abòdab nan NYC pase sitou pa <b>lotri ak lis datant</b>. Li mande pasyans, men antre non w bonè se demach ki pi enpòtan an — e aplike gratis.",
    reassure:"Li ka santi l dousman, men chak aplikasyon se yon chans reyèl. Enskri jodi a mete w nan konkou a. An nou kòmanse.",
    facts:[["🎟️","<b>NYC Housing Connect</b> bay lis lotri apatman abòdab ou ka aplike pou yo."],["📋","<b>NYCHA ak Section 8</b> gen lis datant — antre ladan yo bonè se sa ki pi enpòtan."],["🆓","<b>Aplike toujou gratis.</b> Pa janm peye yon frè pou antre nan yon lotri lojman."]],
    deep:"<p>Pifò lojman abòdab nan NYC bay atravè <b>NYC Housing Connect</b>, sit lotri ofisyèl vil la. Ou kreye yon pwofil ak gwosè fwaye w ak revni w, apre ou aplike pou lis ou kalifye yo. Seleksyon an fèt pa lotri ak nimewo dosye, kidonk aplike pou anpil lis avèk tan amelyore chans ou.</p><p>Apa de sa, <b>NYCHA</b> (lojman piblik) ak bon <b>Section 8</b> itilize lis datant ki long — lè yo louvri, enskri touswit, paske pozisyon depann de dat. Kenbe enfòmasyon kontak ou ajou pou w pa rate yon lèt.</p><p>Veye eskwokri: lotri lejitim toujou gratis, pa janm mande pèman pou 'kenbe' yon apatman, e pa garanti yon inite pou yon frè.</p>"},
  dv:{title:"Sekirite ou an premye.", tag:"🛟 Èd konfidansyèl · 24/7",
    plain:"Si y ap fè w mal oswa menase w lakay ou, ou pa oblije fè fas ak sa pou kont ou. Gen moun disponib <b>kounye a menm, nenpòt lè</b>, ki ka ede w jwenn yon kote ki an sekirite epi fè yon plan — an prive e gratis.",
    reassure:"Ou merite an sekirite. Sèvis sa yo konfidansyèl, gratis, e disponib 24/7 — ki gen ladan èd kèlkeswa estati imigrasyon.",
    facts:[["📞","<b>Liy 24 èdtan NYC la</b> ka jwenn refij ijans epi ede w planifye: 1-800-621-HOPE."],["🤫","<b>Li konfidansyèl.</b> Ou pa oblije bay non w pou jwenn èd oswa konsèy."],["🏠","<b>Refij ijans VD</b> egziste nan tout senk awondisman yo, ak plas pou timoun."]],
    deep:"<p>Si w ap viv vyolans domestik oswa vyolans ki baze sou sèks, sekirite w se priyorite a — e Vil Nouyòk gen sèvis konfidansyèl dedye egzakteman pou sa. Liy 24 èdtan an (1-800-621-HOPE) ka konekte w ak refij ijans pou vyolans domestik, ede w fè yon plan sekirite, epi lye w ak konsèy ak èd legal, tout gratis e nan plizyè lang.</p><p>Sèvis sa yo separe de sistèm refij nòmal la epi yo rete konfidansyèl pou pwoteje kote w ye. Ou pa bezwen pataje estati imigrasyon w, e sivivan yo gen pwoteksyon lojman espesifik — ki gen ladan dwa a pwogram adrès konfidansyèl.</p><p>Si w nan danje imedya, rele 911. Sinon, liy lan ka pale sou opsyon w yo nan ritm pa w — pa gen presyon pou pran okenn desizyon anvan w pare.</p>"},
  discrimination:{title:"Sa ka ilegal — e ou ka aji.", tag:"⚖️ Ou gen dwa",
    plain:"Si yon pwopriyetè refize w, anbete w, oswa trete w diferan poutèt ki moun ou ye — ras ou, relijyon, estati imigrasyon, andikap, gen timoun, oswa itilize yon bon Section 8 — sa se <b>diskriminasyon ilegal</b> nan NYC, e ou ka depoze yon plent gratis.",
    reassure:"Ou pa oblije jis aksepte l. Depoze yon plent gratis, e itilize yon bon oswa estati imigrasyon w yo tou de pwoteje.",
    facts:[["🛡️","<b>Sous revni pwoteje</b> — pwopriyetè pa ka rejte w paske w itilize yon bon Section 8."],["📝","<b>Depoze gratis</b> atravè Komisyon Dwa Moun NYC la."],["🌐","<b>Gen opsyon eta ak federal tou</b> si ka w deyò pòte NYC."]],
    deep:"<p>NYC gen kèk nan lwa lojman jis ki pi fò nan peyi a. Yon pwopriyetè, koutye, oswa bilding pa ka refize w, fè w peye plis, oswa trete w diferan poutèt ras, koulè, relijyon, orijin nasyonal, estati imigrasyon, andikap, laj, sèks, oryantasyon seksyèl, oswa si w gen timoun. Yo pa ka rejte w tou paske w itilize yon bon lojman — sa rele <b>diskriminasyon sou sous revni</b>, e li ilegal.</p><p>Si sa rive, ekri sa yo te di, kiyès ki te di l, ak kilè; sere mesaj, imel, ak anons. Ou ka depoze yon plent gratis ak <b>Komisyon Dwa Moun NYC</b>, e pou ka deyò vil la gen opsyon eta (Divizyon Dwa Moun NY) ak federal (HUD).</p><p>Depoze gratis, ou ka fè l kèlkeswa estati imigrasyon, e li ilegal pou yon pwopriyetè fè reprezay paske w fè valè dwa sa yo.</p>"}
};

/* ===================== 中文 (Chinese) — summaries ===================== */
CASA_SUM_I18N.zh = {
  type:{title:"这看起来像一份整改通知（Notice to Cure）。", tag:"⏳ 时间紧迫 · 10天",
    plain:"根据您的描述，您的房东给了您一份<b>整改通知（Notice to Cure）</b>——一份声称您违反了租约规则的文件。这<b>不是</b>驱逐。它是一个过程的第一步，您有时间和选择。",
    reassure:"通知不是驱逐。您有权利，每天都有人免费帮人做这件事。让我们一步一步来。",
    facts:[["📅","<b>您大约有10天</b>来回应或解决问题。"],["⚖️","<b>这不是驱逐令。</b>只有法官在法庭案件后才能下令。"],["🆓","<b>您可能有资格获得免费律师</b>，通过纽约的 Right to Counsel。"]],
    deep:"<p><b>整改通知</b>是一份书面警告，不是法院命令。您的房东声称您违反了租约的'重大义务'——例如未经批准的宠物、额外的同住者或噪音。通知必须给您一段时间（通常10天）来纠正或'整改'问题。</p><p>如果您在规定时间内纠正问题，事情通常就此结束。如果不纠正，房东的下一步是<b>终止通知</b>，之后才能在住房法庭提起留置案件。即使那样，您也会有开庭日期和回应机会——什么都不会自动发生。</p><p>最重要的做法：保留通知、不要搬走，并立即致电免费的租户律师或热线，让人帮您审阅确切的措辞。</p>"},
  evict:{title:"面临通知或驱逐。", tag:"⏳ 时间紧迫",
    plain:"收到通知令人害怕，但这是一个过程的<b>开始</b>——不是结束。不会一夜之间发生，您有真正的保护。",
    reassure:"没有法庭案件和法官的命令，您不会被赶走。您有时间。让我们找到您的下一步。",
    facts:[["📅","<b>截止日期很重要</b>——但错过一个很少是终点。尽快行动，不要恐慌。"],["⚖️","<b>只有法院</b>能下令驱逐，房东绝不能直接驱逐。"],["🆓","<b>免费法律帮助</b>正是为此而存在。"]],
    deep:"<p>纽约的驱逐是一个有多个步骤的法律程序，租户在每一步都有被听取的权利。它通常从书面通知开始，然后是法院申请，再是您可以陈述己方的听证会。房东<b>不能</b>换锁、搬走您的东西或切断公用事业来强行赶您走——那是非法的'自助'驱逐。</p><p>只有持法官令状的市法警才能执行驱逐，在那之前您会收到书面警告。在任何阶段您都可以要求更多时间、提出抗辩（如需要维修或文件不当），并申请免费律师。</p><p>尽早行动给您最多选择——最糟糕的是忽视文件并错过开庭日期。</p>"},
  rent:{title:"拖欠房租。", tag:"💵 有帮助可用",
    plain:"拖欠房租是纽约最常见的情况之一——有<b>专门的项目</b>来帮助，包括紧急'一次性补助'（one-shot deal）。",
    reassure:"欠租不意味着失去家。许多人靠他们不知道的帮助赶上了。让我们找到它。",
    facts:[["💰","<b>一次性补助（HRA）</b>可在紧急情况下支付欠租。"],["📝","<b>您通过 ACCESS HRA 申请</b>——倡导者可以帮您。"],["🛡️","<b>申请可以暂停</b>一些驱逐步骤。值得尽早做。"]],
    deep:"<p>如果您拖欠房租，市里的<b>紧急援助（'一次性补助'）</b>通过 HRA 可为符合条件的人支付欠租，尤其是当您能证明今后能跟上时。您在 ACCESS HRA 上申请，社工会审查您的情况。</p><p>其他途径可以叠加：非营利组织的欠租补助、与房东的付款协议，以及——如果已经立案——为您对接免费律师的项目。记录您的收入、欠款金额和任何困难（失业、医疗账单）会增强申请。</p><p>关键是在债务增长前开始。即使部分解决也能阻止案件升级。</p>"},
  unsafe:{title:"不安全的居住条件。", tag:"🛠️ 房东的责任",
    plain:"暖气、热水和安全维修是您的<b>法定权利</b>——不是恩惠。您的房东必须提供，市里可以强制执行。",
    reassure:"您不必这样生活，要求维修是您的权利。举报不会让您被合法驱逐。",
    facts:[["🔥","<b>供暖季</b>（10月1日–5月31日）要求规定的最低温度。"],["📞","<b>拨打311</b>提交投诉并建立官方记录。"],["🚫","<b>报复是非法的</b>——房东不能因您举报而惩罚您。"]],
    deep:"<p>每位租户都有权拥有可居住的家——即<b>宜居保证</b>。这意味着有正常的暖气和热水、没有漏水或霉菌、管道正常、没有害虫。供暖季（10月1日–5月31日）房东必须昼夜将公寓保持在规定的最低温度。</p><p>当您向311举报状况时，市里会建立记录并可派检查员，检查员可能对房东开出违规。该记录很有力——如有争议它会支持您，并可支持您在住房法庭提起的'维修案'（HP诉讼）以强制维修。</p><p>房东因您要求维修或拨打311而报复——加租、拒绝续约或威胁驱逐——是非法的。</p>"},
  shelter:{title:"您需要一个安全的地方。", tag:"🏠 庇护权",
    plain:"在纽约市，您有<b>法定的庇护权</b>。今晚没有人应该睡在街上，有些人的工作就是现在帮助您。",
    reassure:"您有权今晚有一个安全的地方。您不是负担——这种帮助正是为这一刻而存在。",
    facts:[["🛏️","<b>纽约对有需要者有法定庇护权。</b>"],["📍","<b>PATH（布朗克斯）</b>是有孩子家庭的接收中心——24/7开放。"],["📞","<b>拨打311</b>任何时候都可对接接收。"]],
    deep:"<p>纽约市是全国少数拥有<b>法定庇护权</b>的地方之一——意味着市里必须为有需要的人提供床位。您无需证明移民身份即可寻求紧急庇护。</p><p>有孩子的家庭通过布朗克斯的<b>PATH</b>办理接收；单身成年人使用指定接收中心，311任何时候都能为您指引到正确的地方。带上您拥有的任何身份证件和文件，但缺少证件不应阻止您被接待。</p><p>如果您正在逃离暴力，有单独的保密家暴庇护所——告诉接收处或热线，他们会安全地为您安排。庇护旨在成为通往稳定住房的起点，有社工帮助下一步。</p>"},
  affordable:{title:"寻找可负担住房。", tag:"🏗️ 一步一步来",
    plain:"纽约的可负担住房主要通过<b>抽签和候补名单</b>。需要耐心，但尽早登记您的名字是最重要的一步——而且申请免费。",
    reassure:"可能感觉很慢，但每次申请都是真正的机会。今天登记就让您进入竞争。让我们开始。",
    facts:[["🎟️","<b>NYC Housing Connect</b>列出您可申请的可负担公寓抽签。"],["📋","<b>NYCHA 和 Section 8</b>有候补名单——尽早进入最重要。"],["🆓","<b>申请始终免费。</b>切勿为进入住房抽签付费。"]],
    deep:"<p>纽约大多数可负担住房通过市里的官方抽签网站<b>NYC Housing Connect</b>发放。您用家庭人数和收入创建一个档案，然后申请符合条件的房源。选择按抽签和登记号进行，所以长期申请多个房源能提高几率。</p><p>另外，<b>NYCHA</b>（公共住房）和<b>Section 8</b>券使用很长的候补名单——开放时立即登记，因为位置取决于日期。保持联系信息最新，以免错过信件。</p><p>当心骗局：合法抽签始终免费，绝不会要求付费来'保留'公寓，也不会收费保证给房。</p>"},
  dv:{title:"您的安全是第一位的。", tag:"🛟 保密帮助 · 24/7",
    plain:"如果您在家中受到伤害或威胁，您不必独自面对。<b>现在，任何时候</b>都有人可以帮您找到安全的地方并制定计划——私密且免费。",
    reassure:"您应当安全。这些服务保密、免费、24/7可用——包括不论移民身份的帮助。",
    facts:[["📞","<b>纽约24小时热线</b>可找紧急庇护并帮您规划：1-800-621-HOPE。"],["🤫","<b>它是保密的。</b>您无需提供姓名即可获得帮助或建议。"],["🏠","<b>紧急家暴庇护所</b>遍布五个区，有儿童空间。"]],
    deep:"<p>如果您正经历家庭暴力或基于性别的暴力，您的安全是首要的——纽约市有专门的保密服务正是为此。24小时热线（1-800-621-HOPE）可为您对接紧急家暴庇护、帮您制定安全计划，并联系咨询和法律帮助，全部免费且有多种语言。</p><p>这些服务独立于常规庇护系统，并保密以保护您的位置。您无需透露移民身份，幸存者有特定的住房保护——包括获得保密地址项目的权利。</p><p>如果您处于即时危险中，请拨打911。否则，热线可按您的节奏讲解您的选择——在您准备好之前没有压力做任何决定。</p>"},
  discrimination:{title:"这可能是非法的——您可以行动。", tag:"⚖️ 您有权利",
    plain:"如果房东因您是谁而拒绝、骚扰或区别对待您——您的种族、宗教、移民身份、残疾、有孩子或使用 Section 8 券——那在纽约是<b>非法歧视</b>，您可以免费投诉。",
    reassure:"您不必默默接受。投诉免费，使用券和您的移民身份都受保护。",
    facts:[["🛡️","<b>收入来源受保护</b>——房东不能因您使用 Section 8 券而拒绝您。"],["📝","<b>投诉免费</b>，通过纽约市人权委员会。"],["🌐","<b>还有州和联邦选项</b>，如果您的案件超出纽约市范围。"]],
    deep:"<p>纽约市有全国最强的公平住房法之一。房东、经纪人或楼宇不能因您的种族、肤色、宗教、原国籍、移民身份、残疾、年龄、性别、性取向或是否有孩子而拒绝您、多收费或区别对待您。他们也不能因您使用住房券而拒绝您——那叫<b>收入来源歧视</b>，是非法的。</p><p>如果发生这种情况，写下说了什么、谁说的、何时；保存短信、电邮和房源信息。您可以向<b>纽约市人权委员会</b>免费投诉，对于市外案件有州（纽约州人权司）和联邦（HUD）选项。</p><p>投诉免费，不论移民身份都可进行，房东因您主张这些权利而报复是非法的。</p>"}
};
