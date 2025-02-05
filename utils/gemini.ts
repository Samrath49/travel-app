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
            text: "Generate a trip plan for the following data: Location - London, UK. 7 Day(s) and 6 Night(s), from Wed Feb 05 2025 05:32:26 GMT+0530 (India Standard Time) to Wed Feb 12 2025 05:32:26 GMT+0530 (India Standard Time), for a group size of couple (2 people), with a luxury Budget. Include Flight Details, Flight Price with Booking URL, a list of hotel options with Hotel Name, Hotel Address, Price, Hotel Image URL, Geo Coordinates, Rating, Description, and Places to visit nearby with Place Name, Place Details, Place Image URL, Geo Coordinates, Ticket Price, Time to Travel to each of the location. Make sure you give this plan in JSON format.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```\n{  "trip_plan": {  "dates": {    "end": "2025-02-11T22:45:00Z",    "start": "2025-02-04T22:45:00Z"  },  "hotel": {    "options": [      {        "name": "The Savoy",        "price": "£1000 per night",        "rating": 4.8,        "address": "Strand, London WC2R 0EZ, United Kingdom",        "image_url": "https://www.thesavoylondon.com/images/default-source/hotel-images/the-savoy-exterior-600x338.jpg?sfvrsn=0",        "description": "Luxury hotel on the Strand, offering iconic views and world-class amenities.",        "geo_coordinates": {          "latitude": 51.5073,          "longitude": -0.1277        }      },      {        "name": "The Dorchester",        "price": "£1200 per night",        "rating": 4.9,        "address": "39 Park Ln, Mayfair, London W1K 1QA, United Kingdom",        "image_url": "https://dynamic-media.cdn.cnn.com/api/v1/image/313267_dorchester_hotel_exterior.jpg?q=x_0,y_0,h_800,w_1200,c_crop",        "description": "Elegant hotel in Mayfair, with a spa, award-winning restaurants, and stylish rooms.",        "geo_coordinates": {          "latitude": 51.5086,          "longitude": -0.1502        }      }    ]  },  "budget": "Luxury",  "duration": "7 Days and 6 Nights",  "location": "London, UK",  "group_size": "Couple (2 people)",  "flight_details": {    "price": "₹150000",    "airline": "British Airways",    "booking_url": "https://www.britishairways.com/",    "arrival_city": "London",    "arrival_date": "2025-02-05",    "arrival_time": "02:00 PM",    "flight_number": "BA145",    "departure_city": "Delhi",    "departure_date": "2025-02-04",    "departure_time": "10:00 AM"  },  "places_to_visit": [    {      "name": "Buckingham Palace",      "details": "The official residence of the British monarch. Witness the Changing of the Guard ceremony.",      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Buckingham_Palace_Exterior.jpg/1200px-Buckingham_Palace_Exterior.jpg",      "ticket_price": "Varies depending on the season and tour",      "time_to_travel": "30 minutes from The Savoy",      "geo_coordinates": {        "latitude": 51.5014,        "longitude": -0.1419      }    },    {      "name": "Tower of London",      "details": "Historic castle, fortress, and former royal palace. Explore its history and the Crown Jewels.",      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tower_of_London_%282017%29.jpg/1280px-Tower_of_London_%282017%29.jpg",      "ticket_price": "£30",      "time_to_travel": "45 minutes from Buckingham Palace",      "geo_coordinates": {        "latitude": 51.508,        "longitude": -0.0761      }    },    {      "name": "British Museum",      "details": "World-renowned museum housing artifacts from across the globe, including the Rosetta Stone.",      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/British_Museum_Entrance.jpg/1200px-British_Museum_Entrance.jpg",      "ticket_price": "Free (with donations)",      "time_to_travel": "20 minutes from Tower of London",      "geo_coordinates": {        "latitude": 51.5199,        "longitude": -0.1269      }    },    {      "name": "Houses of Parliament & Big Ben",      "details": "Iconic symbol of London. Take a guided tour of the Palace of Westminster.",      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Palace_of_Westminster_from_South_Bank_2007.jpg/1280px-Palace_of_Westminster_from_South_Bank_2007.jpg",      "ticket_price": "Varies depending on the tour",      "time_to_travel": "15 minutes from British Museum",      "geo_coordinates": {        "latitude": 51.5033,        "longitude": -0.1275      }    },    {      "name": "London Eye",      "details": "Giant Ferris wheel offering panoramic views of the city.",      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Eye_2014.jpg/1280px-London_Eye_2014.jpg",      "ticket_price": "£30",      "time_to_travel": "10 minutes from Houses of Parliament",      "geo_coordinates": {        "latitude": 51.5033,        "longitude": -0.1195      }    }  ]}}\n```',
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
