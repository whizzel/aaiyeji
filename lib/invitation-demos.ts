/**
 * Invitation demo content — a shared, typed schema.
 * Add a new sample by appending a record here and creating its gallery artwork;
 * the route /demo/[slug] and the homepage showcase pick it up automatically.
 *
 * ALL names, families, venues and dates below are fictional sample content.
 * Dates are kept in the future relative to the site's first release (Nov 2026).
 */

export type DemoTheme = "royal" | "floral" | "minimal";

export interface DemoEvent {
  id: string;
  name: string;
  nameRegional?: string;
  dateISO: string; // includes +05:30 offset
  timeLabel: string;
  description: string;
  location?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface FamilySide {
  label: string;
  labelRegional?: string;
  names: string[];
  note?: string;
}

export interface InvitationDemo {
  slug: string;
  theme: DemoTheme;
  styleName: string;
  styleDescription: string;
  seo: { title: string; description: string };
  couple: {
    names: string;
    namesRegional?: string;
    short: string;
  };
  welcome: {
    eyebrow: string;
    line: string;
    lineRegional?: string;
  };
  greeting: {
    en: string;
    regional?: string;
    languageLabel: string; // e.g. "हिन्दी" — shown on the language toggle
  };
  message: { en: string; regional?: string };
  hashtag: string;
  families: FamilySide[];
  familiesNote?: string;
  story: { title: string; titleRegional?: string; paragraphs: string[] };
  events: DemoEvent[];
  mainEventId: string;
  venue: { name: string; address: string; mapQuery: string };
  gallery: GalleryItem[];
}

export const invitationDemos: InvitationDemo[] = [
  {
    slug: "royal",
    theme: "royal",
    styleName: "The Heritage",
    styleDescription:
      "Deep wine, antique gold and an architectural frame — a regal welcome for a classic Indian wedding.",
    seo: {
      title: "Aarohi & Vihaan — The Heritage",
      description:
        "A royal heritage wedding invitation sample by Aaiyeji: bilingual welcome, five functions, countdown, RSVP demo and personalised family greeting.",
    },
    couple: {
      names: "Aarohi & Vihaan",
      namesRegional: "आरोही संग विहान",
      short: "A · V",
    },
    welcome: {
      eyebrow: "The Rathore–Deshmukh families",
      line: "With the blessings of our elders, we invite you to celebrate with us.",
      lineRegional: "बड़ों के आशीर्वाद से, हम आपको इस उत्सव में सादर आमंत्रित करते हैं।",
    },
    greeting: {
      en: "You are warmly invited",
      regional: "आपको सादर आमंत्रित करते हैं",
      languageLabel: "हिन्दी",
    },
    message: {
      en: "Two families, one celebration. Join us as Aarohi and Vihaan begin their journey together — with haldi laughter, mehendi colours, a night of sangeet, and a wedding under the lamps of the haveli.",
      regional:
        "दो परिवार, एक उत्सव। हल्दी की हँसी, मेहंदी के रंग, संगीत की रात और हवेली के दीपों तले विवाह — आरोही और विहान के नए सफ़र की शुरुआत में हमारे साथ शामिल हों।",
    },
    hashtag: "#AarohiWedsVihaan",
    families: [
      {
        label: "The bride’s family",
        labelRegional: "वधू का परिवार",
        names: ["Smt. Sunita & Shri Ramesh Deshmukh", "Pune, Maharashtra"],
        note: "Aarohi is their eldest daughter.",
      },
      {
        label: "The groom’s family",
        labelRegional: "वर का परिवार",
        names: ["Smt. Padma & Shri Vikram Rathore", "Jodhpur, Rajasthan"],
        note: "Vihaan is their youngest son.",
      },
    ],
    story: {
      title: "How it began",
      titleRegional: "शुरुआत कैसे हुई",
      paragraphs: [
        "A shared table at a friend’s mehendi in Jaipur, an argument about the best gulab jamun in the city, and a monsoon evening that ran far past its last train — that is how Aarohi and Vihaan began.",
        "Four years, two cities and countless chai stops later, they are coming home to celebrate — with every person who made the journey theirs.",
      ],
    },
    events: [
      {
        id: "haldi",
        name: "Ganesh Puja & Haldi",
        nameRegional: "गणेश पूजा एवं हल्दी",
        dateISO: "2027-02-10T10:00:00+05:30",
        timeLabel: "10:00 am onwards",
        description: "A bright morning of blessings, turmeric and marigolds in the haveli courtyard.",
        location: "Amrapali Haveli — courtyard",
      },
      {
        id: "mehendi",
        name: "Mehendi",
        nameRegional: "मेहंदी",
        dateISO: "2027-02-11T16:00:00+05:30",
        timeLabel: "4:00 pm onwards",
        description: "Intricate cones, cool shade and slow afternoon music on the terrace.",
        location: "Amrapali Haveli — terrace",
      },
      {
        id: "sangeet",
        name: "Sangeet",
        nameRegional: "संगीत",
        dateISO: "2027-02-11T19:30:00+05:30",
        timeLabel: "7:30 pm onwards",
        description: "Both families, one dance floor. Bring your best step — rehearsals are optional.",
        location: "Amrapali Haveli — darbar lawn",
      },
      {
        id: "wedding",
        name: "The Wedding",
        nameRegional: "विवाह",
        dateISO: "2027-02-12T19:30:00+05:30",
        timeLabel: "Muhurat at 7:30 pm",
        description: "Vows under the lamps, followed by dinner in the garden.",
        location: "Amrapali Haveli — mandap garden",
      },
      {
        id: "reception",
        name: "Reception",
        nameRegional: "रिसेप्शन",
        dateISO: "2027-02-13T19:00:00+05:30",
        timeLabel: "7:00 pm onwards",
        description: "An evening of introductions, photographs and a very long dessert table.",
        location: "Amrapali Haveli — banquet hall",
      },
    ],
    mainEventId: "wedding",
    venue: {
      name: "Amrapali Haveli",
      address: "Heritage Lane, Jaipur, Rajasthan 302001",
      mapQuery: "Jaipur, Rajasthan",
    },
    gallery: [
      {
        src: "/images/demos/royal-mandap.svg",
        alt: "Line-art illustration of a wedding mandap framed by an ogee arch",
        caption: "The mandap, drawn for the occasion",
      },
      {
        src: "/images/demos/royal-marigold.svg",
        alt: "Illustration of hanging marigold strands in gold and amber",
        caption: "Marigolds for the haldi morning",
      },
      {
        src: "/images/demos/royal-paisley.svg",
        alt: "Fine gold paisley line art on deep wine",
        caption: "A paisley from the family archive",
      },
    ],
  },
  {
    slug: "floral",
    theme: "floral",
    styleName: "The Garden",
    styleDescription:
      "Ivory paper, blush petals and soft green — a warm morning celebration under the flowers.",
    seo: {
      title: "Meera & Arjun — The Garden",
      description:
        "A soft garden wedding invitation sample by Aaiyeji: Marathi-English welcome, ceremony timeline, countdown and a clearly-labelled demo RSVP.",
    },
    couple: {
      names: "Meera & Arjun",
      namesRegional: "मीरा आणि अर्जुन",
      short: "M · A",
    },
    welcome: {
      eyebrow: "The Kulkarni & Joshi families",
      line: "Come for the flowers, stay for the food — we can’t wait to see you.",
      lineRegional: "फुलांसाठी या, जेवणासाठी थांबा — तुमची वाट पाहतो आहोत.",
    },
    greeting: {
      en: "You are warmly invited",
      regional: "तुम्हाला मनापासून आमंत्रण",
      languageLabel: "मराठी",
    },
    message: {
      en: "A garden, a morning, and the two of us saying yes. Meera and Arjun are getting married among the ferns and fairy lights — and the celebration wouldn’t be complete without you in it.",
      regional:
        "एक बाग, एक सकाळ, आणि आम्ही दोघे होकार देत आहोत. नेचे आणि दिव्यांच्या साक्षीने मीरा आणि अर्जुन लग्नगाठ बांधत आहेत — तुमच्याशिवाय हा सोहळा अपूर्ण आहे.",
    },
    hashtag: "#MeeraAndArjun",
    families: [
      {
        label: "The bride’s family",
        labelRegional: "वधूचे कुटुंब",
        names: ["Smt. Ashwini & Shri Mohan Kulkarni", "Pune, Maharashtra"],
        note: "Meera grew up three lanes away from the garden.",
      },
      {
        label: "The groom’s family",
        labelRegional: "वराचे कुटुंब",
        names: ["Smt. Neela & Shri Prakash Joshi", "Nashik, Maharashtra"],
        note: "Arjun still claims his mother’s puran poli is unbeatable.",
      },
    ],
    story: {
      title: "A slow-bloom kind of love",
      titleRegional: "हळूहळू बहरलेलं प्रेम",
      paragraphs: [
        "They met over a borrowed book that was never returned, bonded over filter coffee and a shared hatred of early alarms, and fell in love somewhere between a trek gone wrong and a monsoon spent reading.",
        "The garden felt right for the wedding: Meera’s grandmother planted its first fern decades ago, and some things deserve to come full circle.",
      ],
    },
    events: [
      {
        id: "haldi",
        name: "Haldi",
        nameRegional: "हळदी",
        dateISO: "2026-12-18T10:00:00+05:30",
        timeLabel: "10:00 am onwards",
        description: "Sunshine, turmeric and a playlist the neighbours will hear.",
        location: "The Fernhouse Gardens — lawn",
      },
      {
        id: "mehendi",
        name: "Mehendi evening",
        nameRegional: "मेहंदी",
        dateISO: "2026-12-18T17:00:00+05:30",
        timeLabel: "5:00 pm onwards",
        description: "Henna, fairy lights and cutting chai as the sun goes down.",
        location: "The Fernhouse Gardens — pergola",
      },
      {
        id: "wedding",
        name: "The Garden Wedding",
        nameRegional: "विवाह सोहळा",
        dateISO: "2026-12-20T11:00:00+05:30",
        timeLabel: "11:00 am sharp",
        description: "A morning ceremony under the fern arch, followed by a long, lazy lunch.",
        location: "The Fernhouse Gardens — fern arch",
      },
      {
        id: "brunch",
        name: "Farewell brunch",
        nameRegional: "निरोप brunch",
        dateISO: "2026-12-21T11:30:00+05:30",
        timeLabel: "11:30 am onwards",
        description: "Leftover stories, fresh dosas and one last group photo.",
        location: "The Fernhouse Gardens — verandah",
      },
    ],
    mainEventId: "wedding",
    venue: {
      name: "The Fernhouse Gardens",
      address: "Fernhouse Lane, Baner, Pune, Maharashtra 411045",
      mapQuery: "Baner, Pune, Maharashtra",
    },
    gallery: [
      {
        src: "/images/demos/floral-wreath.svg",
        alt: "Illustration of a blush and sage flower wreath on ivory",
        caption: "The wreath that inspired the invite",
      },
      {
        src: "/images/demos/floral-fern-arch.svg",
        alt: "Line-art garden arch covered in ferns and small blossoms",
        caption: "The fern arch, where they’ll say yes",
      },
      {
        src: "/images/demos/floral-petals.svg",
        alt: "Scattered blush petals with fine sage stems",
        caption: "Petals for the morning aisle",
      },
    ],
  },
  {
    slug: "minimal",
    theme: "minimal",
    styleName: "The Modern",
    styleDescription:
      "Quiet typography, warm neutrals and generous space — for couples who love the essentials.",
    seo: {
      title: "Sara & Kabir — The Modern",
      description:
        "A modern minimal wedding invitation sample by Aaiyeji: clean typography, a three-event timeline, countdown, share and add-to-calendar.",
    },
    couple: {
      names: "Sara & Kabir",
      short: "S · K",
    },
    welcome: {
      eyebrow: "Together with their families",
      line: "Small ceremony. Big feelings. We’d love you there.",
    },
    greeting: {
      en: "You are warmly invited",
      languageLabel: "English",
    },
    message: {
      en: "Sara and Kabir are getting married by the sea — an afternoon ceremony, a long dinner, and dancing until the playlist runs out. No fuss, no formalities; just the people they love most.",
    },
    hashtag: "#SaraAndKabir",
    families: [
      {
        label: "The bride’s family",
        names: ["Maria & Denis D’Souza", "Bandra, Mumbai"],
        note: "Sara is their only daughter.",
      },
      {
        label: "The groom’s family",
        names: ["Ritu & Anil Mehta", "Bengaluru, Karnataka"],
        note: "Kabir is their eldest son.",
      },
    ],
    story: {
      title: "The short version",
      paragraphs: [
        "A delayed flight, the last two seats together, and a conversation that outlasted the turbulence. Three years of Sunday crosswords and shared playlists later, they decided to make it official — somewhere with salt in the air.",
        "They kept the guest list small and the feelings large. This invitation is exactly that: everything you need, nothing you don’t.",
      ],
    },
    events: [
      {
        id: "dinner",
        name: "Welcome dinner",
        dateISO: "2027-01-23T19:30:00+05:30",
        timeLabel: "7:30 pm",
        description: "A relaxed table for everyone arriving early. Wear something breezy.",
        location: "Casa Serena — pool deck",
      },
      {
        id: "ceremony",
        name: "The ceremony",
        dateISO: "2027-01-24T16:30:00+05:30",
        timeLabel: "4:30 pm",
        description: "Vows at golden hour, facing the water. Dinner follows on the lawn.",
        location: "Casa Serena — sea lawn",
      },
      {
        id: "afterparty",
        name: "The afterparty",
        dateISO: "2027-01-24T21:00:00+05:30",
        timeLabel: "9:00 pm till late",
        description: "One playlist, no requests. Comfortable shoes recommended.",
        location: "Casa Serena — the loft",
      },
    ],
    mainEventId: "ceremony",
    venue: {
      name: "Casa Serena",
      address: "Serena Path, Assagao, Goa 403507",
      mapQuery: "Assagao, Goa",
    },
    gallery: [
      {
        src: "/images/demos/minimal-rings.svg",
        alt: "Two overlapping thin-line rings in wine and gold",
        caption: "Two circles, one story",
      },
      {
        src: "/images/demos/minimal-coast.svg",
        alt: "Minimal line art of a coastline with a palm and low sun",
        caption: "The view they chose",
      },
      {
        src: "/images/demos/minimal-arch-sun.svg",
        alt: "A fine arch with a rising sun, drawn in warm neutrals",
        caption: "Golden hour, framed",
      },
    ],
  },
];

export function getInvitationDemo(slug: string): InvitationDemo | undefined {
  return invitationDemos.find((d) => d.slug === slug);
}

export function getMainEvent(demo: InvitationDemo): DemoEvent {
  return demo.events.find((e) => e.id === demo.mainEventId) ?? demo.events[0];
}
