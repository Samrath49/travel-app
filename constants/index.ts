export const COMPANION_OPTIONS = [
  {
    id: "solo",
    title: "Just Me",
    description: "Perfect for a journey of self-discovery",
    size: "1 person",
    icon: "✈️",
  },
  {
    id: "couple",
    title: "A Couple",
    description: "Ideal for romantic getaways",
    size: "2 people",
    icon: "🥂",
  },
  {
    id: "family",
    title: "Family",
    description: "Create memories with your loved ones",
    size: "3-5 people",
    icon: "🏠",
  },
  {
    id: "friends",
    title: "Friends",
    description: "Adventures with your squad",
    size: "4+ people",
    icon: "⛵",
  },
] as const;

export const BUDGET_OPTIONS = [
  {
    id: "cheap",
    title: "Cheap",
    description: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: "moderate",
    title: "Moderate",
    description: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: "luxury",
    title: "Luxury",
    description: "Don't worry about cost",
    icon: "💎",
  },
] as const;

export const LINK_ITEMS = [
  { label: "Discover", path: "/discover" },
  { label: "My Tours", path: "/my-tours" },
] as const;

export const THINGS_TO_DO_STEPS = [
  {
    title: "Sign up",
    description:
      "Completes all the work associated with planning and processing",
    icon: "/icons/Things-icon-1.png",
    bgClass: "card-signup",
  },
  {
    title: "Worth of money",
    description:
      "After successful access then book from exclusive deals & pricing",
    icon: "/icons/Things-icon-2.png",
    bgClass: "card-worth",
  },
  {
    title: "Exciting travel",
    description: "Start and explore a wide range of exciting travel experience",
    icon: "/icons/Things-icon-3.png",
    bgClass: "card-exciting",
  },
] as const;

export const AI_PROMPT =
  "Generate a trip plan for the following data: Location - {location}. {totalDays} Day(s) and {totalNights} Night(s), from {start} to {end}, for a group size of {travelers}, with a {budget} Budget. Include Flight Details, Flight Price with Booking URL, a list of hotel options with Hotel Name, Hotel Address, Price, Hotel Image URL, Geo Coordinates, Rating, Description, and Places to visit nearby with Place Name, Place Details, Place Image URL, Geo Coordinates, Ticket Price, Time to Travel to each of the location. Make sure you give this plan in JSON format.";

export const CHAT_HISTORY = [
  {
    role: "user",
    parts: [
      {
        text: "Generate a trip plan for the following data: Location - Osaka, Japan. 3 Day(s) and 2 Night(s), from Tue Feb 04 2025 14:44:51 GMT+0530 (India Standard Time) to Fri Feb 07 2025 14:44:51 GMT+0530 (India Standard Time), for a group size of Family (4 people), with a Cheap Budget. Include Flight Details, Flight Price with Booking URL, a list of hotel options with Hotel Name, Hotel Address, Price, Hotel Image URL, Geo Coordinates, Rating, Description, and Places to visit nearby with Place Name, Place Details, Place Image URL, Geo Coordinates, Ticket Price, Time to Travel to each of the location. Make sure you give this plan in JSON format.",
      },
    ],
  },
  {
    role: "model",
    parts: [
      {
        text: '```json\n{\n  "trip_plan": {\n    "location": "Osaka, Japan",\n    "duration": "3 Days and 2 Nights",\n    "group_size": "Family (4 people)",\n    "budget": "Cheap",\n    "flight_details": {\n      "airline": "This section requires specific flight details, which are not available in the prompt.  Please provide flight information to populate this section.",\n      "flight_number": null,\n      "departure_city": null,\n      "arrival_city": null,\n      "departure_date": "2025-02-04",\n      "arrival_date": "2025-02-04",\n      "departure_time": null,\n      "arrival_time": null,\n      "price": null,\n      "booking_url": null\n    },\n    "hotel": {\n      "options": [\n        {\n          "name": "Hotel Shin-Imamiya",\n          "address": "1-2-11 Taishi, Nishinari-ku, Osaka, 557-0002, Japan",\n          "price": "¥8,000 per night (Family Room)",\n          "image_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/a4/3b/69/exterior.jpg?w=900&h=-1&s=1",\n          "geo_coordinates": {\n            "latitude": 34.6505,\n            "longitude": 135.5044\n          },\n          "rating": 3.0,\n          "description": "A budget-friendly hotel in the Shin-Imamiya area, offering simple rooms and convenient access to transportation."\n        },\n        {\n          "name": "Imazato Guest House",\n          "address": "2-1-21, Imazato, Higashinari-ku, Osaka, 537-0014, Japan",\n          "price": "¥7,000 per night (Family Room)",\n          "image_url": "https://media-cdn.expedia.com/media/content/shared/images/carousel/Imazato-Guest-House-Osaka-20700281.jpg",\n          "geo_coordinates": {\n            "latitude": 34.6695,\n            "longitude": 135.5339\n          },\n          "rating": 3.5,\n          "description": "A cozy guesthouse with a friendly atmosphere, offering affordable accommodation and a communal kitchen."\n        }\n      ]\n    },\n    "places_to_visit": [\n      {\n        "name": "Osaka Castle",\n        "details": "A iconic castle with museum, beautiful park, and amazing history.",\n        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Osaka_Castle_from_the_southwest.jpg/1280px-Osaka_Castle_from_the_southwest.jpg",\n        "geo_coordinates": {\n          "latitude": 34.6872,\n          "longitude": 135.5261\n        },\n        "ticket_price": "¥600",\n        "time_to_travel": "30 minutes from Hotel Shin-Imamiya by subway"\n      },\n      {\n        "name": "Dotonbori",\n        "details": "A vibrant entertainment district known for its bright lights, street food, and Glico Running Man sign.",\n        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Dotonbori_Osaka_Japan01.jpg/1280px-Dotonbori_Osaka_Japan01.jpg",\n        "geo_coordinates": {\n          "latitude": 34.6685,\n          "longitude": 135.5012\n        },\n        "ticket_price": "Free (food and activities cost extra)",\n        "time_to_travel": "20 minutes from Osaka Castle by subway"\n      },\n      {\n        "name": "Shinsekai",\n        "details": "A retro district with a nostalgic atmosphere, known for its Tsutenkaku Tower and kushikatsu (deep-fried skewers).",\n        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shinsekai_Tsutenkaku_Osaka_Japan01.jpg/1280px-Shinsekai_Tsutenkaku_Osaka_Japan01.jpg",\n        "geo_coordinates": {\n          "latitude": 34.6517,\n          "longitude": 135.5079\n        },\n        "ticket_price": "¥900 (Tsutenkaku Tower)",\n        "time_to_travel": "10 minutes from Dotonbori by subway"\n      },\n      {\n        "name": "Universal Studios Japan",\n        "details": "A theme park with many movie-themed attractions and rides.",\n        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Universal_Studios_Japan_logo.svg/1200px-Universal_Studios_Japan_logo.svg.png",\n        "geo_coordinates": {\n          "latitude": 34.6653,\n          "longitude": 135.4322\n        },\n        "ticket_price": "¥8,200 (1-day pass)",\n        "time_to_travel": "40 minutes from Hotel Shin-Imamiya by train"\n      }\n    ]\n  }\n}\n```',
      },
    ],
  },
  {
    role: "user",
    parts: [
      {
        text: "Generate a trip plan for the following data: Location - Lucknow, Uttar Pradesh, India. 3 Day(s) and 2 Night(s), for a group size of Couple (2 people), with a Luxury Budget. Include Flight Details, Flight Price with Booking URL, a list of hotel options with Hotel Name, Hotel Address, Price, Hotel Image URL, Geo Coordinates, Rating, Description, and Places to visit nearby with Place Name, Place Details, Place Image URL, Geo Coordinates, Ticket Price, Time to Travel to each of the location. Make sure you give this plan in JSON format.",
      },
    ],
  },
  {
    role: "model",
    parts: [
      {
        text: '```json\n{\n  "trip_plan": {\n    "location": "Lucknow, Uttar Pradesh, India",\n    "duration": "3 Days and 2 Nights",\n    "group_size": "Couple (2 people)",\n    "budget": "Luxury",\n    "flight_details": {\n      "airline": "IndiGo",\n      "flight_number": "6E-6241",\n      "departure_city": "Delhi",\n      "arrival_city": "Lucknow",\n      "departure_date": "2023-11-17",\n      "arrival_date": "2023-11-17",\n      "departure_time": "10:00 AM",\n      "arrival_time": "11:15 AM",\n      "price": "₹5,000",\n      "booking_url": "https://www.goindigo.in/"\n    },\n    "hotel": {\n      "options": [\n        {\n          "name": "The Grand Hyatt Lucknow",\n          "address": "Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",\n          "price": "₹15,000 per night",\n          "image_url": "https://www.hyatt.com/en-US/hotel/india/the-grand-hyatt-lucknow/lukhg/media/hotel-images/gallery/room-exterior.jpg",\n          "geo_coordinates": {\n            "latitude": 26.8374,\n            "longitude": 80.9450\n          },\n          "rating": 4.5,\n          "description": "A luxurious 5-star hotel with world-class amenities, stunning views, and a prime location in Lucknow."\n        },\n        {\n          "name": "The Leela Palace Lucknow",\n          "address": "Sarojini Naidu Marg, Hazratganj, Lucknow, Uttar Pradesh 226001",\n          "price": "₹12,000 per night",\n          "image_url": "https://www.theleela.com/images/hotels/lucknow/leela-palace-lucknow-hotel-exterior.jpg",\n          "geo_coordinates": {\n            "latitude": 26.8479,\n            "longitude": 80.9387\n          },\n          "rating": 4.0,\n          "description": "A heritage hotel offering a blend of luxury and traditional Indian architecture, located in the heart of the city."\n        }\n      ]\n    },\n    "places_to_visit": [\n      {\n        "name": "Bada Imambara",\n        "details": "A magnificent 18th-century Shia mosque with a sprawling complex and a labyrinthine maze.",\n        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bada_Imambara_Lucknow_%282%29.jpg/1280px-Bada_Imambara_Lucknow_%282%29.jpg",\n        "geo_coordinates": {\n          "latitude": 26.8488,\n          "longitude": 80.9409\n        },\n        "ticket_price": "₹50",\n        "time_to_travel": "15 minutes from The Grand Hyatt Lucknow"\n      },\n      {\n        "name": "Chota Imambara",\n        "details": "A beautiful 19th-century mausoleum known for its intricate architecture and decorative interiors.",\n        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Chota_Imambara_Lucknow.jpg/1280px-Chota_Imambara_Lucknow.jpg",\n        "geo_coordinates": {\n          "latitude": 26.8488,\n          "longitude": 80.9409\n        },\n        "ticket_price": "₹30",\n        "time_to_travel": "5 minutes from Bada Imambara"\n      },\n      {\n        "name": "Rumi Darwaza",\n        "details": "An impressive gateway built in the 18th century, known for its grand architecture and historical significance.",\n        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rumi_Darwaza_Lucknow_%283%29.jpg/1280px-Rumi_Darwaza_Lucknow_%283%29.jpg",\n        "geo_coordinates": {\n          "latitude": 26.8492,\n          "longitude": 80.9405\n        },\n        "ticket_price": "Free",\n        "time_to_travel": "10 minutes from Chota Imambara"\n      },\n      {\n        "name": "Husainabad Baradari",\n        "details": "A beautiful garden palace with a central pavilion, offering a peaceful escape and scenic views.",\n        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Baradari%2C_Lucknow.jpg/1280px-Baradari%2C_Lucknow.jpg",\n        "geo_coordinates": {\n          "latitude": 26.8492,\n          "longitude": 80.9405\n        },\n        "ticket_price": "₹20",\n        "time_to_travel": "15 minutes from Rumi Darwaza"\n      },\n      {\n        "name": "British Residency",\n        "details": "A historical complex that played a significant role in the Indian Rebellion of 1857, offering insights into Lucknow\'s colonial past.",\n        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/British_Residency_Lucknow.jpg/1280px-British_Residency_Lucknow.jpg",\n        "geo_coordinates": {\n          "latitude": 26.8488,\n          "longitude": 80.9409\n        },\n        "ticket_price": "₹40",\n        "time_to_travel": "20 minutes from Husainabad Baradari"\n      }\n    ]\n  }\n}\n```',
      },
    ],
  },
];
