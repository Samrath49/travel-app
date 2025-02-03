<script setup>
import { ref, onMounted } from "vue";
definePageMeta({
  middleware: "auth",
});

const config = useRuntimeConfig();

const autocompleteInput = ref(null);
const predictions = ref([]);
let autocompleteService = null;
const emit = defineEmits(["place-selected"]);
const destination = ref("");
const duration = ref("");
const selectedBudget = ref("");
const selectedCompanion = ref("");

const budgetOptions = [
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
];

const companionOptions = [
  {
    id: "solo",
    title: "Just Me",
    description: "A sole traveler in exploration",
    icon: "✈️",
  },
  {
    id: "couple",
    title: "A Couple",
    description: "Two travelers in tandem",
    icon: "🥂",
  },
  {
    id: "family",
    title: "Family",
    description: "A group of fun loving adventurers",
    icon: "🏠",
  },
  {
    id: "friends",
    title: "Friends",
    description: "A bunch of thrill-seekers",
    icon: "⛵",
  },
];

const generateTrip = () => {
  // TODO: Implement trip generation logic
  console.log({
    destination: destination.value,
    duration: duration.value,
    budget: selectedBudget.value,
    companion: selectedCompanion.value,
  });
};

onMounted(() => {
  // Initialize Google Maps Autocomplete service
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${config.public.GOOGLE_PLACES_KEY}&libraries=places`;
  script.async = true;
  script.defer = true;

  script.onload = () => {
    autocompleteService = new google.maps.places.AutocompleteService();
  };

  document.head.appendChild(script);
});

const handleInput = async (event) => {
  const input = event.target.value;

  if (!input || !autocompleteService) {
    predictions.value = [];
    return;
  }

  try {
    const response = await autocompleteService.getPlacePredictions({
      input,
      types: ["geocode", "establishment"],
    });

    predictions.value = response.predictions;
  } catch (error) {
    console.error("Error fetching place predictions:", error);
    predictions.value = [];
  }
};

const handleSelect = async (prediction) => {
  const placesService = new google.maps.places.PlacesService(
    document.createElement("div")
  );

  placesService.getDetails(
    {
      placeId: prediction.place_id,
      fields: ["formatted_address", "geometry", "name"],
    },
    (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // Save the selected place data to the destination ref
        destination.value = {
          name: place.name,
          address: place.formatted_address,
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
        };

        // Update the input field with the formatted address
        autocompleteInput.value.value = place.formatted_address;
        predictions.value = [];
      }
    }
  );
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          Tell us your travel preferences 💰 🌴
        </h1>
        <p class="text-gray-600">
          Just provide some basic information, and our trip planner will
          generate a customized itinerary based on your preferences.
        </p>
      </div>

      <!-- Destination Input -->
      <div class="mb-8">
        <label
          for="destination"
          class="block text-lg font-medium text-gray-900 mb-3"
        >
          What is destination of choice?
        </label>
        <div class="relative">
          <input
            ref="autocompleteInput"
            type="text"
            placeholder="Enter destination..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            @input="handleInput"
          />
          <div
            v-if="predictions.length > 0"
            class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
          >
            <ul>
              <li
                v-for="prediction in predictions"
                :key="prediction.place_id"
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="handleSelect(prediction)"
              >
                {{ prediction.description }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Duration Input -->
      <div class="mb-8">
        <label
          for="duration"
          class="block text-lg font-medium text-gray-900 mb-3"
        >
          How many days are you planning your trip?
        </label>
        <input
          type="number"
          id="duration"
          v-model="duration"
          min="1"
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Ex: 3"
        />
      </div>

      <!-- Budget Selection -->
      <div class="mb-8">
        <h2 class="text-lg font-medium text-gray-900 mb-3">
          What is Your Budget?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="budget in budgetOptions"
            :key="budget.id"
            @click="selectedBudget = budget.id"
            :class="[
              'p-4 border rounded-lg cursor-pointer transition-all duration-200',
              selectedBudget === budget.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/20',
            ]"
          >
            <div class="flex items-center mb-2">
              <span class="text-2xl mr-2">{{ budget.icon }}</span>
              <h3 class="font-medium">{{ budget.title }}</h3>
            </div>
            <p class="text-sm text-gray-600">{{ budget.description }}</p>
          </div>
        </div>
      </div>

      <!-- Travel Companion Selection -->
      <div class="mb-12">
        <h2 class="text-lg font-medium text-gray-900 mb-3">
          Who do you plan on traveling with on your next adventure?
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="companion in companionOptions"
            :key="companion.id"
            @click="selectedCompanion = companion.id"
            :class="[
              'p-4 border rounded-lg cursor-pointer transition-all duration-200',
              selectedCompanion === companion.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/20',
            ]"
          >
            <div class="flex items-center mb-2">
              <span class="text-2xl mr-2">{{ companion.icon }}</span>
              <h3 class="font-medium">{{ companion.title }}</h3>
            </div>
            <p class="text-sm text-gray-600">{{ companion.description }}</p>
          </div>
        </div>
      </div>

      <!-- Generate Trip Button -->
      <div class="text-center">
        <button
          @click="generateTrip"
          class="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          Generate Trip
        </button>
      </div>
    </div>
  </div>
</template>
