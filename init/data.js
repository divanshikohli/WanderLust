const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Trending",
  },

  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Rooms",
  },

  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },

  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Iconic Cities",
  },

  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Domes",
  },

  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Boats",
  },

  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Camping",
  },

  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Rooms",
  },

  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Arctic",
  },

  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a safari lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Farms",
  },

  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in Amsterdam.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Iconic Cities",
  },

  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Boats",
  },

  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in a historic castle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles",
  },

  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
  },

  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Boats",
  },

  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this Aspen chalet.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },

  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Trending",
  },

  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
  },

  {
    title: "Art Deco Apartment in Miami",
    description:
      "Stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1670963964797-942df1804579",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "Rooms",
  },

  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Domes",
  },
];

module.exports = { data: sampleListings };