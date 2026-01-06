// Event Information
export const EVENT_INFO = {
  title: "Open Heavens Toronto 2025",
  subtitle: "A FREE New Year's Eve Gospel Concert",
  date: "WED, DEC 31ST",
  year: 2025,
  venue: {
    name: "THE INTERNATIONAL CENTRE",
    address: "6900 AIRPORT RD, MISSISSAUGA",
    fullAddress: "6900 Airport Rd, Mississauga, ON L4V 1E8",
    googleMapsUrl: "https://maps.google.com/?q=6900+Airport+Rd,+Mississauga,+ON+L4V+1E8",
  },
  timing: {
    doorsOpen: "6:00 PM",
    eventStart: "7:00 PM",
  },
  contact: {
    phone: "(905) 624-5673",
    email: "info@openheavenstoronto.com",
  },
  ticketUrl: "https://hopevents.typeform.com/OH2025",
  livestreamUrl: "https://youtube.com/hopraise/live",
};

// Featured Artists
export const FEATURED_ARTISTS = [
  {
    id: 1,
    name: "Michael W. Smith",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop", // Man singing/concert
    bio: "Grammy Award-winning Contemporary Christian artist",
  },
  {
    id: 2,
    name: "Chevelle Franklyn",
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2670&auto=format&fit=crop", // Singer
    bio: "Reggae gospel sensation from Jamaica",
  },
  {
    id: 3,
    name: "Don Moen",
    image: "https://images.unsplash.com/photo-1525994886773-080587e124c9?q=80&w=2672&auto=format&fit=crop", // Man praying/worship
    bio: "Legendary worship leader and songwriter",
  },
  {
    id: 4,
    name: "Joe Mettle",
    image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?q=80&w=2576&auto=format&fit=crop", // Man singing
    bio: "Gospel music minister from Ghana",
  },
  {
    id: 5,
    name: "Pastor Wale Akinsiku",
    shortName: "PWA",
    image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2669&auto=format&fit=crop", // Speaker/leader
    bio: "Dynamic worship leader",
  },
  {
    id: 6,
    name: "Pastor Tope Akinsiku",
    shortName: "PTA",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2669&auto=format&fit=crop", // Woman speaker
    bio: "Passionate worship minister",
  },
];

// Event Features
export const EVENT_FEATURES = [
  { id: 1, text: "Free Admission", icon: "ticket" },
  { id: 2, text: "Free Shuttle Routes", icon: "bus" },
  { id: 3, text: "Kids & Family Seating", icon: "users" },
  { id: 4, text: "Livestream Access", icon: "video" },
  { id: 5, text: "Doors Open 6 PM", icon: "clock" },
];

// Shuttle Routes
export const SHUTTLE_ROUTES = [
  {
    id: 1,
    name: "Waterloo",
    pickupLocations: [
      "Conestoga Mall - 550 King St N, Waterloo",
      "Pickup Time: 3:30 PM",
    ],
    details: "Free shuttle service from Waterloo region",
  },
  {
    id: 2,
    name: "Hamilton",
    pickupLocations: [
      "Limeridge Mall - 999 Upper Wentworth St, Hamilton",
      "Pickup Time: 4:00 PM",
    ],
    details: "Free shuttle service from Hamilton",
  },
  {
    id: 3,
    name: "Scarborough",
    pickupLocations: [
      "Scarborough Town Centre - 300 Borough Dr",
      "Pickup Time: 4:30 PM",
    ],
    details: "Free shuttle service from Scarborough",
  },
  {
    id: 4,
    name: "North York + Etobicoke",
    pickupLocations: [
      "Yorkdale Mall - 3401 Dufferin St",
      "Sherway Gardens - 25 The West Mall",
      "Pickup Time: 4:30 PM",
    ],
    details: "Free shuttle service from North York and Etobicoke",
  },
  {
    id: 5,
    name: "Brampton",
    pickupLocations: [
      "Bramalea City Centre - 25 Peel Centre Dr",
      "Pickup Time: 4:45 PM",
    ],
    details: "Free shuttle service from Brampton",
  },
  {
    id: 6,
    name: "Downtown Toronto",
    pickupLocations: [
      "Union Station - 65 Front St W",
      "Pickup Time: 5:00 PM",
    ],
    details: "Free shuttle service from Downtown Toronto",
  },
  {
    id: 7,
    name: "Mississauga",
    pickupLocations: [
      "Square One Shopping Centre - 100 City Centre Dr",
      "Pickup Time: 5:15 PM",
    ],
    details: "Free shuttle service from Mississauga",
  },
  {
    id: 8,
    name: "Whitby + Don Mills",
    pickupLocations: [
      "Whitby Mall - 1615 Dundas St E, Whitby",
      "Fairview Mall - 1800 Sheppard Ave E",
      "Pickup Time: 3:45 PM / 4:45 PM",
    ],
    details: "Free shuttle service from Whitby and Don Mills",
  },
];

// FAQ Data
export const FAQ_DATA = [
  {
    id: 1,
    question: "Is the event really free?",
    answer:
      "Yes! Open Heavens Toronto 2025 is completely free to attend. We believe in making worship accessible to everyone. Simply register for your free ticket to secure your spot.",
  },
  {
    id: 2,
    question: "How do I get free transportation?",
    answer:
      "We offer free shuttle services from multiple locations across the GTA including Waterloo, Hamilton, Scarborough, North York, Brampton, Downtown Toronto, Mississauga, and more. Check our shuttle schedule for pickup locations and times. Shuttles must be reserved in advance.",
  },
  {
    id: 3,
    question: "Can I bring my children?",
    answer:
      "Absolutely! Open Heavens is a family-friendly event. We have dedicated Kids & Family Seating areas. Children of all ages are welcome to join us in worship.",
  },
  {
    id: 4,
    question: "Is parking available?",
    answer:
      "Yes, parking is available at The International Centre. However, spaces are limited and we highly recommend using our free shuttle service or carpooling with friends.",
  },
  {
    id: 5,
    question: "What time should I arrive?",
    answer:
      "Doors open at 6:00 PM and the event starts at 7:00 PM. We recommend arriving early to get good seats and soak in the pre-service atmosphere.",
  },
  {
    id: 6,
    question: "Is the event accessible for people with disabilities?",
    answer:
      "Yes, The International Centre is fully accessible. We have wheelchair-accessible entrances, seating, and facilities. If you have specific accessibility needs, please contact us in advance.",
  },
  {
    id: 7,
    question: "Can I watch online if I can't attend in person?",
    answer:
      "Yes! The event will be livestreamed on our YouTube channel. Visit youtube.com/hopraise/live on December 31st to join us virtually from anywhere in the world.",
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
  {
    id: 10,
    question: "What COVID-19 safety measures are in place?",
    answer:
      "We follow all current public health guidelines. Please check back closer to the event date for the most up-to-date health and safety protocols.",
  },
];

// Social Media Links
export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/hopraise",
  facebook: "https://facebook.com/ignitechurchcanada",
  instagram: "https://instagram.com/ignitechurchcanada",
};

// Navigation Links
export const NAV_LINKS = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Artists", href: "#artists" },
  { id: 3, label: "Schedule", href: "#schedule" },
  { id: 4, label: "Transportation", href: "#transportation" },
  { id: 5, label: "Get Tickets", href: EVENT_INFO.ticketUrl, external: true },
  { id: 6, label: "Volunteer", href: "#volunteer" },
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
      { id: 1, label: "FAQs", href: "#faq" },
      { id: 2, label: "Share Event", href: "/share-OH" },
      { id: 3, label: "Contact Us", href: "#contact" },
    ],
  },
  {
    id: 3,
    title: "Open Heavens Resources",
    links: [
      { id: 1, label: "Get Involved", href: "#volunteer" },
      { id: 2, label: "Transportation", href: "#transportation" },
      { id: 3, label: "Livestream", href: EVENT_INFO.livestreamUrl, external: true },
    ],
  },
];
