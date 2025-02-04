import { GoogleGenerativeAI } from "@google/generative-ai";

export const createGeminiClient = (apiKey: string) => {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

  const chat = model.startChat({
    generationConfig,
    history: [
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
    ],
  });

  return {
    sendMessage: async (prompt: string) => {
      const result = await chat.sendMessage(prompt);
      return result.response.text();
    },
  };
};
