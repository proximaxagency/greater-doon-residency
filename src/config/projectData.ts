export interface ProjectData {
  projectName: string;
  projectNameHindi: string;
  tagline: string;
  taglineHindi: string;
  subTagline: string;
  subTaglineHindi: string;
  developerName: string;
  marketingPartner: string;
  primaryPhone: string;
  secondaryPhone: string;
  whatsappNumber: string;
  location: string;
  locationHindi: string;
  plotSizes: string;
  plotSizesHindi: string;
  roadWidth: string;
  roadWidthHindi: string;
  projectStatus: "ACTIVE" | "LAUNCHED" | "COMING SOON";
  basePricePerSqFt: number;
  developmentChargesPerSqFt: number;
  registrationCharges: number;
  bookingPercentage: number;
  totalPlots: number;
  availablePlots: number;
  lastUpdated: string;
  offer: {
    active: boolean;
    title: string;
    titleHindi: string;
    description: string;
    descriptionHindi: string;
    validity: string;
    discountPerSqFt: number;
  };
}

export const INITIAL_PROJECT_DATA: ProjectData = {
  projectName: "GREATER DOON RESIDENCY",
  projectNameHindi: "ग्रेटर दून रेसीडेंसी",
  tagline: "Every Family Deserves a Better Living",
  taglineHindi: "हर परिवार का सपना, बेहतर जीवन अपना",
  subTagline: "A thoughtfully planned residential plotted development in Bhagwanpur, Haridwar.",
  subTaglineHindi: "भगवानपुर, हरिद्वार में एक विचारपूर्वक नियोजित आवासीय प्लॉट विकास परियोजना।",
  developerName: "H.N. Corporate Private Limited",
  marketingPartner: "R.A.M. / Real Asset Management",
  primaryPhone: "8679020404",
  secondaryPhone: "",
  whatsappNumber: "918679020404", // With country code for WhatsApp link
  location: "Bhagwanpur, Haridwar, Uttarakhand",
  locationHindi: "भगवानपुर, हरिद्वार, उत्तराखंड",
  plotSizes: "Approx. 355–630 sq. ft.",
  plotSizesHindi: "लगभग ३५५–६३० वर्ग फुट",
  roadWidth: "30 Feet Wide Roads",
  roadWidthHindi: "३० फीट चौड़ी सड़कें",
  projectStatus: "LAUNCHED",
  basePricePerSqFt: 2334,
  developmentChargesPerSqFt: 888,
  registrationCharges: 45000,
  bookingPercentage: 10,
  totalPlots: 120,
  availablePlots: 45,
  lastUpdated: "2026-08-09",
  offer: {
    active: true,
    title: "Special Launch Offer",
    titleHindi: "विशेष लॉन्च ऑफर",
    description: "Save ₹100 per sq. ft. on booking amount for the first 25 plots.",
    descriptionHindi: "पहले २५ प्लॉटों की बुकिंग पर ₹१०० प्रति वर्ग फुट की बचत करें।",
    validity: "2026-08-31",
    discountPerSqFt: 100,
  }
};

export interface FAQItem {
  id: string;
  question: string;
  questionHindi: string;
  answer: string;
  answerHindi: string;
}

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Greater Doon Residency?",
    questionHindi: "ग्रेटर दून रेसीडेंसी क्या है?",
    answer: "Greater Doon Residency is a private residential plotted development project by H.N. Corporate Private Limited, strategically located in Bhagwanpur, Haridwar.",
    answerHindi: "ग्रेटर दून रेसीडेंसी एच.एन. कॉरपोरेट प्राइवेट लिमिटेड द्वारा विकसित भगवानपुर, हरिद्वार में स्थित एक निजी आवासीय प्लॉट विकास परियोजना है।"
  },
  {
    id: "faq-2",
    question: "Where is the project located?",
    questionHindi: "यह परियोजना कहां स्थित है?",
    answer: "The project is located in Bhagwanpur, Haridwar, Uttarakhand, offering excellent connectivity to Roorkee, Dehradun, and nearby industrial and academic hubs.",
    answerHindi: "यह परियोजना भगवानपुर, हरिद्वार, उत्तराखंड में स्थित है, जो रुड़की, देहरादून और आसपास के औद्योगिक व शैक्षणिक केंद्रों से बेहतरीन कनेक्टिविटी प्रदान करती है।"
  },
  {
    id: "faq-3",
    question: "Who is the developer of this project?",
    questionHindi: "इस परियोजना का डेवलपर कौन है?",
    answer: "The project is developed by H.N. Corporate Private Limited. The strategic development and marketing partner is R.A.M. (Real Asset Management).",
    answerHindi: "इस परियोजना का विकास एच.एन. कॉरपोरेट प्राइवेट लिमिटेड द्वारा किया जा रहा है। इसके रणनीतिक विकास और विपणन भागीदार आर.ए.एम. (रियल एसेट मैनेजमेंट) हैं।"
  },
  {
    id: "faq-4",
    question: "What plot sizes are available?",
    questionHindi: "प्लॉट के कौन से आकार उपलब्ध हैं?",
    answer: "Plots are available in multiple sizes ranging from approximately 355 sq. ft. to 630 sq. ft. details can be verified with our sales office.",
    answerHindi: "प्लॉट विभिन्न आकारों में उपलब्ध हैं, जो लगभग ३५५ वर्ग फुट से ६३० वर्ग फुट तक हैं। अधिक जानकारी हमारे बिक्री कार्यालय से सत्यापित की जा सकती है।"
  },
  {
    id: "faq-5",
    question: "What infrastructure is planned for the project?",
    questionHindi: "परियोजना के लिए किस बुनियादी ढांचे की योजना बनाई गई है?",
    answer: "Planned infrastructure includes 30 feet wide internal roads, a dedicated rainwater drainage system, electricity infrastructure, water supply connectivity, and a secure gated entry.",
    answerHindi: "नियोजित बुनियादी ढांचे में ३० फीट चौड़ी आंतरिक सड़कें, जल निकासी प्रणाली, बिजली बुनियादी ढांचा, जलापूर्ति और एक सुरक्षित गेटेड प्रवेश द्वार शामिल हैं।"
  },
  {
    id: "faq-6",
    question: "Are roads within the project developed?",
    questionHindi: "क्या परियोजना के भीतर सड़कें विकसित हैं?",
    answer: "Yes, the main internal roads are designed to be 30 feet wide and construction is actively in progress as part of our phased development timeline.",
    answerHindi: "हाँ, मुख्य आंतरिक सड़कें ३० फीट चौड़ी बनाई जा रही हैं और हमारे चरणबद्ध विकास कार्यक्रम के हिस्से के रूप में निर्माण कार्य सक्रिय रूप से प्रगति पर है।"
  },
  {
    id: "faq-7",
    question: "What is the current project status?",
    questionHindi: "परियोजना की वर्तमान स्थिति क्या है?",
    answer: "The project is currently LAUNCHED and site development (road leveling and utility integration) is actively underway.",
    answerHindi: "परियोजना वर्तमान में लॉन्च हो चुकी है और साइट का विकास (सड़क समतलीकरण और उपयोगिता एकीकरण) सक्रिय रूप से चल रहा है।"
  },
  {
    id: "faq-8",
    question: "What is the RERA status of the project?",
    questionHindi: "परियोजना की रेरा (RERA) स्थिति क्या है?",
    answer: "The project documentation has been structured and submitted/is being updated. Prospective buyers are advised to review the regulatory documents available at our office.",
    answerHindi: "परियोजना के दस्तावेज तैयार कर लिए गए हैं और जमा किए जा रहे हैं। भावी खरीदारों को सलाह दी जाती है कि वे हमारे कार्यालय में उपलब्ध नियामक दस्तावेजों की समीक्षा करें।"
  },
  {
    id: "faq-9",
    question: "Is PMAY applicable to this project?",
    questionHindi: "क्या इस परियोजना में पीएमएवाई (PMAY) लागू है?",
    answer: "PMAY (Pradhan Mantri Awas Yojana) benefits may be available to eligible beneficiaries subject to applicable government rules, eligibility criteria, and approval. Greater Doon Residency does not guarantee subsidy sanction.",
    answerHindi: "पीएमएवाई (प्रधानमंत्री आवास योजना) के लाभ पात्र लाभार्थियों को लागू सरकारी नियमों, पात्रता मानदंडों और अनुमोदन के अधीन उपलब्ध हो सकते हैं। ग्रेटर दून रेसीडेंसी सब्सिडी की मंजूरी की गारंटी नहीं देता है।"
  },
  {
    id: "faq-10",
    question: "Who is eligible for PMAY benefits?",
    questionHindi: "पीएमएवाई लाभों के लिए कौन पात्र है?",
    answer: "Generally, first-time home buyers with household incomes within specific brackets (EWS/LIG categories) who do not own a pucca house anywhere in India may qualify, subject to institutional verification.",
    answerHindi: "आम तौर पर, पहली बार घर खरीदने वाले जिनकी पारिवारिक आय विशिष्ट श्रेणियों (ईडब्ल्यूएस/एलआईजी श्रेणी) के भीतर है और जिनके पास भारत में कहीं भी पक्का घर नहीं है, वे संस्थागत सत्यापन के अधीन पात्र हो सकते हैं।"
  },
  {
    id: "faq-11",
    question: "Does buying a plot guarantee PMAY subsidy?",
    questionHindi: "क्या प्लॉट खरीदने से पीएमएवाई सब्सिडी की गारंटी मिलती है?",
    answer: "No. The purchase of a plot does not guarantee PMAY benefits. Approval depends entirely on meeting the central/state eligibility norms and banking evaluation.",
    answerHindi: "नहीं। प्लॉट खरीदने मात्र से पीएमएवाई लाभ की गारंटी नहीं मिलती है। मंजूरी पूरी तरह से केंद्र/राज्य के पात्रता नियमों और बैंकिंग मूल्यांकन पर निर्भर करती है।"
  },
  {
    id: "faq-12",
    question: "What are the development charges?",
    questionHindi: "विकास शुल्क क्या हैं?",
    answer: "Development charges cover internal road laying, drainage, and electricity conduits. They are currently estimated at ₹888 per sq. ft. and are billed along with the plot pricing.",
    answerHindi: "विकास शुल्क में आंतरिक सड़क निर्माण, जल निकासी और बिजली लाइनें शामिल हैं। वर्तमान में यह ₹८८८ प्रति वर्ग फुट है और प्लॉट की कीमत के साथ बिल किया जाता है।"
  },
  {
    id: "faq-13",
    question: "What is the payment plan?",
    questionHindi: "भुगतान योजना क्या है?",
    answer: "We offer a structured payment timeline: 10% on Booking/Registration, followed by staged milestone payments linked to site development and registry preparation.",
    answerHindi: "हम एक संरचित भुगतान समय-सीमा प्रदान करते हैं: बुकिंग/पंजीकरण पर १०%, और उसके बाद साइट विकास और रजिस्ट्री तैयारी से जुड़े चरणबद्ध भुगतान।"
  },
  {
    id: "faq-14",
    question: "How can I book a site visit?",
    questionHindi: "मैं साइट विज़िट कैसे बुक कर सकता हूँ?",
    answer: "You can book a site visit by filling out the form on our website, calling us at +91 8395000606, or clicking the WhatsApp link for instant coordination.",
    answerHindi: "आप हमारी वेबसाइट पर फॉर्म भरकर, हमें +91 8395000606 पर कॉल करके, या त्वरित समन्वय के लिए व्हाट्सएप लिंक पर क्लिक करके साइट विजिट बुक कर सकते हैं।"
  },
  {
    id: "faq-15",
    question: "What documents should I verify before booking?",
    questionHindi: "बुकिंग करने से पहले मुझे किन दस्तावेजों की जांच करनी चाहिए?",
    answer: "We believe in transparency. Before booking, you are welcome to inspect our land registration papers, permission certificates, layout plan approvals, and identity documents in our office.",
    answerHindi: "हम पारदर्शिता में विश्वास करते हैं। बुकिंग से पहले, आप हमारे कार्यालय में हमारे भूमि पंजीकरण कागजात, अनुमति प्रमाण पत्र, लेआउट योजना अनुमोदन और पहचान दस्तावेजों का निरीक्षण कर सकते हैं।"
  }
];

export interface ConnectivityItem {
  id: string;
  destination: string;
  destinationHindi: string;
  distance: string;
  time: string;
  timeHindi: string;
}

export const CONNECTIVITY_LIST: ConnectivityItem[] = [
  {
    id: "conn-1",
    destination: "Bhagwanpur Market",
    destinationHindi: "भगवानपुर बाजार",
    distance: "2.5 km",
    time: "approx. 5 mins",
    timeHindi: "लगभग ५ मिनट"
  },
  {
    id: "conn-2",
    destination: "National Highway (NH-73 Bypass)",
    destinationHindi: "राष्ट्रीय राजमार्ग (NH-73 बाईपास)",
    distance: "8.0 km",
    time: "approx. 10 mins",
    timeHindi: "लगभग १० मिनट"
  },
  {
    id: "conn-3",
    destination: "Roorkee Railway Station",
    destinationHindi: "रुड़की रेलवे स्टेशन",
    distance: "12.0 km",
    time: "approx. 15 mins",
    timeHindi: "लगभग १५ मिनट"
  },
  {
    id: "conn-4",
    destination: "Roorkee Civil Hospital",
    destinationHindi: "रुड़की सिविल अस्पताल",
    distance: "14.0 km",
    time: "approx. 18 mins",
    timeHindi: "लगभग १८ मिनट"
  },
  {
    id: "conn-5",
    destination: "IIT Roorkee Campus",
    destinationHindi: "आईआईटी रुड़की परिसर",
    distance: "15.0 km",
    time: "approx. 20 mins",
    timeHindi: "लगभग २० मिनट"
  },
  {
    id: "conn-6",
    destination: "Jolly Grant Airport (Dehradun)",
    destinationHindi: "जॉली ग्रांट हवाई अड्डा (देहरादून)",
    distance: "78.0 km",
    time: "approx. 90 mins",
    timeHindi: "लगभग ९० मिनट"
  }
];

export interface ApprovalDocument {
  id: string;
  name: string;
  nameHindi: string;
  type: string;
  typeHindi: string;
  authority: string;
  authorityHindi: string;
  refNumber: string;
  date: string;
  status: "VERIFIED" | "DOCUMENT AVAILABLE" | "APPLICATION SUBMITTED" | "PENDING" | "SUBJECT TO ELIGIBILITY";
  relevance: string;
  relevanceHindi: string;
}

export const APPROVALS_LIST: ApprovalDocument[] = [
  {
    id: "doc-1",
    name: "Affordable Plotted Housing Registration",
    nameHindi: "किफायती प्लॉटेड आवास पंजीकरण",
    type: "Development Permission",
    typeHindi: "विकास अनुमति",
    authority: "Competent District Authority",
    authorityHindi: "सक्षम जिला प्राधिकरण",
    refNumber: "HN-GDR/2026/AUTH-089",
    date: "2026-02-14",
    status: "DOCUMENT AVAILABLE",
    relevance: "Permission granted for the layout and planned residential plotted development scheme.",
    relevanceHindi: "लेआउट और नियोजित आवासीय प्लॉट विकास योजना के लिए अनुमति दी गई है।"
  },
  {
    id: "doc-2",
    name: "Land Use Verification & Registry",
    nameHindi: "भूमि उपयोग सत्यापन और रजिस्ट्री",
    type: "Land Ownership Record (Khatauni)",
    typeHindi: "भूमि स्वामित्व रिकॉर्ड (खतौनी)",
    authority: "Revenue Department, Haridwar",
    authorityHindi: "राजस्व विभाग, हरिद्वार",
    refNumber: "KHATAUNI-2025/BHP-9801",
    date: "2025-11-20",
    status: "VERIFIED",
    relevance: "Factual ownership registry clear titles held by H.N. Corporate Private Limited.",
    relevanceHindi: "एच.एन. कॉरपोरेट प्राइवेट लिमिटेड के पास भू-स्वामित्व के स्पष्ट और विवाद रहित दस्तावेज उपलब्ध हैं।"
  },
  {
    id: "doc-3",
    name: "Project Layout Plan Approval",
    nameHindi: "परियोजना लेआउट योजना स्वीकृति",
    type: "Approved Layout Plan Map",
    typeHindi: "स्वीकृत लेआउट योजना मानचित्र",
    authority: "Town Planning Committee",
    authorityHindi: "नगर नियोजन समिति",
    refNumber: "MAP-APP/HRD/2026/776",
    date: "2026-04-05",
    status: "DOCUMENT AVAILABLE",
    relevance: "Approvals for the internal road width (30ft) and open green areas.",
    relevanceHindi: "३० फीट की आंतरिक सड़कों और खुले हरित क्षेत्रों के लिए मानचित्र का अनुमोदन।"
  },
  {
    id: "doc-4",
    name: "RERA Registration Filing",
    nameHindi: "रेरा पंजीकरण फाइलिंग",
    type: "RERA Registration status",
    typeHindi: "रेरा पंजीकरण स्थिति",
    authority: "Uttarakhand RERA Board",
    authorityHindi: "उत्तराखंड रेरा बोर्ड",
    refNumber: "RERA-APPL-UK/2026-00451",
    date: "2026-05-18",
    status: "APPLICATION SUBMITTED",
    relevance: "Application under active validation and registration sequence.",
    relevanceHindi: "सक्रिय सत्यापन और पंजीकरण अनुक्रम के तहत आवेदन प्रक्रियाधीन है।"
  }
];

export interface SiteProgressMilestone {
  id: string;
  title: string;
  titleHindi: string;
  date: string;
  dateHindi: string;
  status: "COMPLETED" | "IN PROGRESS" | "PLANNED";
  description: string;
  descriptionHindi: string;
}

export const PROGRESS_MILESTONES: SiteProgressMilestone[] = [
  {
    id: "prog-1",
    title: "Project Announcement & Clearing",
    titleHindi: "परियोजना घोषणा और सफाई",
    date: "January 2026",
    dateHindi: "जनवरी २०२६",
    status: "COMPLETED",
    description: "Initial land acquisition complete and site clearing finalized.",
    descriptionHindi: "प्रारंभिक भूमि अधिग्रहण पूरा हुआ और साइट की सफाई का काम पूरा कर लिया गया है।"
  },
  {
    id: "prog-2",
    title: "Boundary Wall Construction",
    titleHindi: "सीमा दीवार निर्माण",
    date: "March 2026",
    dateHindi: "मार्च २०२६",
    status: "COMPLETED",
    description: "External boundary walls and structural markers completed around development area.",
    descriptionHindi: "विकास क्षेत्र के चारों ओर बाहरी सीमा दीवारों और संरचनात्मक चिह्नों का निर्माण पूरा हुआ।"
  },
  {
    id: "prog-3",
    title: "Entrance Gate & Security Cabin",
    titleHindi: "प्रवेश द्वार और सुरक्षा केबिन",
    date: "June 2026",
    dateHindi: "जून २०२६",
    status: "IN PROGRESS",
    description: "Architectural entrance arch structural columns are being cast on site.",
    descriptionHindi: "साइट पर वास्तुकला प्रवेश मेहराब के संरचनात्मक खंभों की ढलाई का कार्य किया जा रहा है।"
  },
  {
    id: "prog-4",
    title: "Road Sub-Grade Preparation",
    titleHindi: "सड़क उप-ग्रेड तैयारी",
    date: "August 2026",
    dateHindi: "अगस्त २०२६",
    status: "IN PROGRESS",
    description: "Earthwork leveling and gravel bedding for the 30-feet wide road layout.",
    descriptionHindi: "३० फीट चौड़ी सड़क लेआउट के लिए मिट्टी समतलीकरण और बजरी बिछाने का कार्य जारी है।"
  },
  {
    id: "prog-5",
    title: "Drainage Infrastructure",
    titleHindi: "जल निकासी बुनियादी ढांचा",
    date: "October 2026",
    dateHindi: "अक्टूबर २०२६",
    status: "PLANNED",
    description: "Installation of concrete drains along major internal roads.",
    descriptionHindi: "प्रमुख आंतरिक सड़कों के किनारे कंक्रीट नालियों की स्थापना की जाएगी।"
  },
  {
    id: "prog-6",
    title: "Plot Marking & Possession",
    titleHindi: "प्लॉट चिन्हांकन और कब्जा",
    date: "December 2026",
    dateHindi: "दिसंबर २०२६",
    status: "PLANNED",
    description: "Demarcation of individual plots, layout handovers, and ownership registries.",
    descriptionHindi: "व्यक्तिगत भूखंडों का चिन्हांकन, लेआउट सौंपना और मालिकाना हक की रजिस्ट्रियां की जाएंगी।"
  }
];
