<div>
<span><img width="125" height="75" src="./public/icons/logo.svg" alt="logo"></span>
</div>

# Nuxt 3 Application 

## 📌 Project Overview
Travel is an intelligent travel itinerary generator that helps users plan their trips effortlessly. Using AI, it creates personalized travel itineraries, suggesting destinations, activities, accommodations, and budgets. It is built using **Nuxt 3, TypeScript, TailwindCSS, Supabase, and Cloudflare** for SSR deployment.

## 🚀 Features
- **Landing Page**: Displays static content and an introduction to the app.
- **Authentication**: Users can **sign up / log in** using Supabase Auth.
- **Discover Page**: Users input trip details (location, budget, group size, start/end date) using Google Places API.
- **AI-Generated Itineraries**: The AI generates detailed travel plans, including:
  - Budget breakdown
  - Hotels to stay at
  - Places to visit
  - Flight details
- **Data Storage**: Itineraries are stored in **Supabase Database**.
- **Profile Page**: Users can view their account information.
- **Itinerary Management**: Users can **delete** their itineraries.
- **Fully Responsive**: Optimized for **performance, SSR, and fast loading.**

## 📁 Folder Structure
```bash
.
 |-app.vue
 |-components/  # Reusable UI components
 |-composables/  # Custom hooks (useAuth, useItinerary, useGemini)
 |-constants/  # Shared constants
 |-dist/  # Deployment assets
 |-layouts/  # Page layouts
 |-middleware/  # Authentication middleware
 |-pages/  # Nuxt pages (Landing, Discover, Login, Profile, Itinerary)
 |-plugins/  # Nuxt plugins (Toast notifications)
 |-server/  # API endpoints (Nuxt server)
 |-utils/  # Helper functions (Gemini API, Google Places)
 |-nuxt.config.ts  # Nuxt configuration
 |-tailwind.config.ts  # TailwindCSS setup
 |-tsconfig.json  # TypeScript configuration
 |-package.json  # Dependencies & scripts
 |-README.md  # Project documentation
```

## 🛠️ Tech Stack
- **Nuxt 3**
- **TypeScript**
- **TailwindCSS**
- **Supabase (Database & Authentication)**
- **Gemini AI**
- **Google Places API**
- **Cloudflare Pages & Workers**

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Samrath49/travel-app
cd travel-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create an `.env` File
```sh
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
DEMO_USER_EMAIL=your_demo_email
DEMO_USER_PASSWORD=your_demo_password
GOOGLE_PLACES_KEY=your_google_api_key
GEMINI_API_KEY=your_gemini_api_key
```

### 4️⃣ Run the Application
```sh
npm run dev
```
- Runs the app locally on `http://localhost:3000`

### 5️⃣ Build for Production
```sh
npm run build
```

### 6️⃣ Deploy to Cloudflare Pages
```sh
npx wrangler pages deploy .output/public --project-name travel-app
npx wrangler deploy .output/server
```

:star: Like the project? Star this repo — It motivates a lot!
