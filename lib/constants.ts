// Event Information
export const EVENT_INFO = {
  title: "MAMA CONCERT 2026",
  subtitle: "Join us for an unforgettable worship!",
  date: "November 21, 2026",
  year: 2026,
  venue: {
    name: "Metro Convention Centre",
    address: "255 Front St W, Toronto, ON M5V 2W6",
    fullAddress: "255 Front St W, Toronto, ON M5V 2W6",
    googleMapsUrl: "https://maps.google.com/?q=255+Front+St+W,+Toronto,+ON+M5V+2W6",
  },
  timing: {
    doorsOpen: "6:00 PM",
    eventStart: "7:00 PM",
  },
  contact: {
    phone: "(437) 232-4417 / (437)388-6384",
    email: "info@mamaconcert.com",
  },
  ticketUrl: "https://form.typeform.com/to/Ij072pJa?typeform-source=helicon-dinosaur-2nx4.squarespace.com",
  livestreamUrl: "https://youtube.com/hopraise/live",
};

// Featured Artists
export const FEATURED_ARTISTS = [
  {
    id: 1,
    name: "Pastor Wilson Bugembe",
    image: "/images/event-img/channels4_profile.jpg", // Man singing/concert
    bio: "Pastor and gospel artist from Uganda",
  },
  {
    id: 2,
    name: "Pastor Rev Judith Babirye",
    image: "/images/event-img/judith.jpeg", // Singer
    bio: "Renowned gospel artist and pastor Victory International Church in Canada",
  },
  {
    id: 3,
    name: "Levixone",
    image: "/images/event-img/Lev.jpg", // Man praying/worship
    bio: "Gospel artist and songwriter from Uganda",
  },
  {
    id: 4,
    name: "Esther and Ezekiel",
    image: "/images/event-img/Esther-and-Ezekiel.webp", // Man singing
    bio: "Dynamic gospel duo",
  },

  // {
  //   id: 6,
  //   name: "Pastor Tope Akinsiku",
  //   shortName: "PTA",
  //   image: "./images/event-img/artist6.jpg", // Woman speaker
  //   bio: "Passionate worship minister",
  // },
];

// Event Features
export const EVENT_FEATURES = [
  { id: 1, text: "Get Your Ticket Now", icon: "ticket" },
  { id: 2, text: "Shared Cars", icon: "bus" },
  { id: 3, text: "Kids & Family Seating", icon: "users" },
  { id: 4, text: "Livestream Access", icon: "video" },
  { id: 5, text: "Doors Open 6 PM", icon: "clock" },
];

// Shuttle Routes
export const JOINED_MOVEMENT = [
  {
    id: 1,
    name: "Waterloo",
    pickupLocations: [
      "Conestoga Mall - 550 King St N, Waterloo",
      "Pickup Time: 3:30 PM",
    ],
    details: "Shared Car service from Waterloo region",
  },
  {
    id: 2,
    name: "Hamilton",
    pickupLocations: [
      "Limeridge Mall - 999 Upper Wentworth St, Hamilton",
      "Pickup Time: 4:00 PM",
    ],
    details: "Shared Car service from Hamilton",
  },
  {
    id: 3,
    name: "Scarborough",
    pickupLocations: [
      "Scarborough Town Centre - 300 Borough Dr",
      "Pickup Time: 4:30 PM",
    ],
    details: "Shared Car service from Scarborough",
  },
  {
    id: 4,
    name: "North York + Etobicoke",
    pickupLocations: [
      "Yorkdale Mall - 3401 Dufferin St",
      "Sherway Gardens - 25 The West Mall",
      "Pickup Time: 4:30 PM",
    ],
    details: "Shared Car service from North York and Etobicoke",
  },
  {
    id: 5,
    name: "Brampton",
    pickupLocations: [
      "Bramalea City Centre - 25 Peel Centre Dr",
      "Pickup Time: 4:45 PM",
    ],
    details: "Shared Car service from Brampton",
  },
  {
    id: 6,
    name: "Downtown Toronto",
    pickupLocations: [
      "Union Station - 65 Front St W",
      "Pickup Time: 5:00 PM",
    ],
    details: "Shared Car service from Downtown Toronto",
  },
  {
    id: 7,
    name: "Mississauga",
    pickupLocations: [
      "Square One Shopping Centre - 100 City Centre Dr",
      "Pickup Time: 5:15 PM",
    ],
    details: "Shared Car  service from Mississauga",
  },
  {
    id: 8,
    name: "Whitby + Don Mills",
    pickupLocations: [
      "Whitby Mall - 1615 Dundas St E, Whitby",
      "Fairview Mall - 1800 Sheppard Ave E",
      "Pickup Time: 3:45 PM / 4:45 PM",
    ],
    details: "Shared Car service from Whitby and Don Mills",
  },
];

// FAQ Data
export const FAQ_DATA = [
  {
    id: 1,
    question: "what Is the fee for the Concert?",
    answer:
      "its just CAD $100 per ticket. However, we encourage attendees to register in advance as tickets are limited and available on a first-come, first-served basis.",
  },
  {
    id: 2,
    question: "How do I get free transportation?",
    answer:
     "There is no free transportation but there will be shared cars from various locations. Please refer to the 'Shared Transportation' section on our website for details on pickup locations and times.",
  },
  {
    id: 3,
    question: "Can I bring my children?",
    answer:
      "Absolutely! Mama Concert is a family-friendly event. We have dedicated Kids & Family Seating areas. Children of all ages are welcome to join us in worship.",
  },
  {
    id: 4,
    question: "Is parking available?",
    answer:
      "Yes, parking is available at Metro Toronto Convention Centre. However, spaces are limited"
    },
  {
    id: 5,
    question: "What time should I arrive?",
    answer:
      "Doors open at 6:00 PM and the Concert starts at 7:00 PM. We recommend arriving early to get good seats and soak in the pre-service atmosphere.",
  },
  {
    id: 6,
    question: "Is the event accessible for people with disabilities?",
    answer:
      "Yes, The Metro Toronto Convention Centre is fully accessible. We have wheelchair-accessible entrances, seating, and facilities. If you have specific accessibility needs, please contact us in advance.",
  },
  {
    id: 7,
    question: "Can I watch online if I can't attend in person?",
    answer:
      "Yes! The event will be livestreamed on our YouTube channel. Visit youtube.com/mamaconcert/live on 28th November to join us virtually from anywhere in the world.",
  },
  {
    id: 8,
    question: "Will there be press or media coverage?",
    answer:
      "We welcome media coverage! For press inquiries and media credentials, please contact our communications team in advance.",
  },
  {
    id: 9,
    question: "Can I volunteer at the event?",
    answer:
      "Yes! We'd love to have you serve with us. Visit our volunteer page to sign up and learn about available opportunities.",
  },
];

// Social Media Links
export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/mamaconcert",
  twitter: "https://twitter.com/victoryintchurch",
  facebook: "https://facebook.com/victoryintchurchcanada",
  instagram: "https://instagram.com/victoryintchurchcanada",
};

// Navigation Links
export const NAV_LINKS = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Artists", href: "/artists" },
  { id: 3, label: "Schedule", href: "/schedule" },
  { id: 4, label: "Transportation", href: "/transportation" },
  { id: 5, label: "Get Tickets", href: EVENT_INFO.ticketUrl, external: true },
  { id: 6, label: "Volunteer", href: "/volunteer" },
];

// Footer Links
export const FOOTER_SECTIONS = [
  {
    id: 1,
    title: "Register",
    links: [
      { id: 1, label: "Get Your Ticket", href: EVENT_INFO.ticketUrl, external: true },
    ],
  },
  {
    id: 2,
    title: "More Info",
    links: [
      { id: 1, label: "FAQs", href: "/" },
      { id: 2, label: "Share Event", href: "#share" },
      { id: 3, label: "Contact Us", href: "#contact" },
    ],
  },
  {
    id: 3,
    title: "Mama Concert Resources",
    links: [
      { id: 1, label: "Get Involved", href: "#volunteer" },
      { id: 2, label: "Transportation", href: "#transportation" },
      { id: 3, label: "Livestream", href: EVENT_INFO.livestreamUrl, external: true },
    ],
  },
];
