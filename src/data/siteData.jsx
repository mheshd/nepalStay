export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Rooms", path: "/rooms" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export const rooms = [
  {
    slug: "himalayan-view-suite",
    name: "Himalayan View Suite",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    description:
      "Wake up to sweeping mountain views, warm wood interiors, and a private balcony above the valley.",
    details:
      "A spacious suite built for travelers who want comfort after long mountain days. Includes a king bed, private balcony, reading corner, ensuite bath, hot shower, breakfast, and panoramic Himalayan views.",
    features: [
      "King bed",
      "Private balcony",
      "Breakfast included",
      "Mountain panorama",
    ],
  },
  {
    slug: "kathmandu-garden-room",
    name: "Kathmandu Garden Room",
    price: "$85",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    description:
      "A calm city escape with handcrafted details, soft linens, and easy access to cultural landmarks.",
    details:
      "A refined room near Kathmandu cultural routes with quiet garden-facing windows, handmade decor, premium bedding, workspace, fast WiFi, and easy transport support.",
    features: ["Queen bed", "Garden view", "Fast WiFi", "City access"],
  },
  {
    slug: "lakeside-retreat",
    name: "Lakeside Retreat",
    price: "$105",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description:
      "Relax near Pokhara with spacious comfort, fresh breakfasts, and tranquil views after every adventure.",
    details:
      "A peaceful Pokhara-style stay for slow mornings and adventure evenings. Enjoy lake-inspired interiors, fresh breakfast, terrace seating, guided activity support, and restful privacy.",
    features: [
      "Terrace seating",
      "Fresh breakfast",
      "Tour support",
      "Peaceful location",
    ],
  },
];

export const services = [
  {
    slug: "wif",
    title: "WiFi",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
    description:
      "Reliable high-speed internet for planning trips, remote work, and staying connected.",
    detail:
      "Stay connected across NepalStay properties with fast WiFi in rooms, lounges, and common work areas. Ideal for digital nomads, families, and travelers coordinating treks or city tours.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18.75h.008v.008H12v-.008Z"
      />
    ),
  },
  {
    slug: "swimming-pool",
    title: "Swimming Pool",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    description:
      "Cool off after sightseeing with peaceful pool areas at selected partner stays.",
    detail:
      "Selected NepalStay hotels include clean pool spaces with loungers, mountain air, and relaxed service so you can recharge after city walks, lake days, or trail adventures.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18.75c1.5 0 1.5-1.5 3-1.5s1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5M2.25 21c1.5 0 1.5-1.5 3-1.5s1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5M7.5 15.75V4.5a2.25 2.25 0 0 1 4.5 0v1.875M12 9H7.5"
      />
    ),
  },
  {
    slug: "restaurant",
    title: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80",
    description:
      "Enjoy Nepali flavors, warm breakfasts, and fresh local ingredients.",
    detail:
      "Our restaurant partners serve comforting Nepali meals, international favorites, herbal teas, and energizing breakfasts for early departures and slow mornings alike.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v18m-5.25-18v6A2.25 2.25 0 0 0 9 11.25h3m5.25-8.25v18M15 3v7.5a2.25 2.25 0 0 0 2.25 2.25h0"
      />
    ),
  },
  {
    slug: "spa",
    title: "Spa",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
    description:
      "Restore your body with calm treatments after long walks and high-altitude travel.",
    detail:
      "Book massage and wellness treatments at selected stays, including herbal therapies, quiet relaxation rooms, and recovery-focused care after trekking or sightseeing.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21c-3.866 0-7-3.134-7-7 0-2.625 1.447-4.914 3.586-6.111A7.48 7.48 0 0 1 12 3a7.48 7.48 0 0 1 3.414 4.889A6.993 6.993 0 0 1 19 14c0 3.866-3.134 7-7 7Zm0 0c0-4.5-3-7.5-7-7.5m7 7.5c0-4.5 3-7.5 7-7.5"
      />
    ),
  },
  {
    slug: "mountain-view",
    title: "Mountain View",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80",
    description:
      "Choose rooms and terraces with unforgettable views of Nepal landscapes.",
    detail:
      "From sunrise balconies to wide terrace viewpoints, NepalStay helps you find properties where the mountains are part of the daily rhythm.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 20.25 7.5-13.5 4.5 8.25 2.25-3.75 5.25 9H2.25Zm6.75-7.5 1.5-2.25 1.5 2.25"
      />
    ),
  },
  {
    slug: "free-parking",
    title: "Free Parking",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    description:
      "Easy parking options for road trips, private transfers, and family travel.",
    detail:
      "Selected NepalStay properties include free parking or arranged nearby parking, making arrivals easier for guests traveling by private vehicle or hired car.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 21V3h6a4.5 4.5 0 0 1 0 9h-6m0 0h6"
      />
    ),
  },
];

export const testimonials = [
  {
    name: "Aarav Sharma",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    review:
      "NepalStay arranged a flawless mountain escape. The room, view, and hospitality were even better than the photos.",
  },
  {
    name: "Maya Chen",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    review:
      "Beautiful design, kind staff, and thoughtful booking support. It made our first Nepal trip feel effortless.",
  },
  {
    name: "Liam Carter",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    review:
      "From Kathmandu to Pokhara, every stay felt curated. I would book with NepalStay again in a heartbeat.",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
];
