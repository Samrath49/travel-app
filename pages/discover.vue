<script setup>
import { ref, computed, onMounted } from "vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import { BUDGET_OPTIONS, COMPANION_OPTIONS } from "~/constants";

definePageMeta({
  middleware: "auth",
});

const config = useRuntimeConfig();

const autocompleteInput = ref(null);
const predictions = ref([]);
let autocompleteService = null;
const emit = defineEmits(["place-selected"]);
const destination = ref("");
const selectedBudget = ref("");
const selectedCompanion = ref("");
const dateRange = ref({
  start: new Date(),
  end: new Date(),
});

const masks = {
  input: "MMM DD, YYYY",
};

const maxDate = computed(() => {
  if (!dateRange.value.start) return null;
  const maxDate = new Date(dateRange.value.start);
  maxDate.setDate(maxDate.getDate() + 6);
  return maxDate;
});

const tripDuration = computed(() => {
  if (!dateRange.value.start || !dateRange.value.end) return 0;
  const start = new Date(dateRange.value.start);
  const end = new Date(dateRange.value.end);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return +diffDays;
});

const generateTrip = () => {
  console.log({
    destination: destination.value,
    dates: {
      start: dateRange.value.start,
      end: dateRange.value.end,
    },
    duration: tripDuration.value,
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
        destination.value = {
          name: place.name,
          address: place.formatted_address,
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
        };

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

      <!-- Date Range Input -->
      <div class="mb-8">
        <label class="block text-lg font-medium text-gray-900 mb-3">
          When are you planning your trip?
        </label>
        <div class="relative">
          <DatePicker
            v-model="dateRange"
            :min-date="new Date()"
            :max-date="maxDate"
            :masks="masks"
            is-range
            class="w-full"
          >
            <template #default="{ inputValue, inputEvents }">
              <div class="flex items-center gap-2">
                <div class="relative flex-1">
                  <input
                    :value="inputValue.start"
                    v-on="inputEvents.start"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Start date"
                    readonly
                  />
                </div>
                <span class="text-gray-500">to</span>
                <div class="relative flex-1">
                  <input
                    :value="inputValue.end"
                    v-on="inputEvents.end"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="End date"
                    readonly
                  />
                </div>
              </div>
            </template>
          </DatePicker>
        </div>
        <p class="mt-2 text-sm text-gray-600" v-if="tripDuration">
          Trip duration: {{ tripDuration }} days
        </p>
      </div>

      <!-- Budget Selection -->
      <div class="mb-8">
        <h2 class="text-lg font-medium text-gray-900 mb-3">
          What is Your Budget?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="budget in BUDGET_OPTIONS"
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
            v-for="companion in COMPANION_OPTIONS"
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

<style>
.vc-container {
  --vc-bg-selected: theme("colors.primary");
  --vc-border-radius: 0.5rem;
  font-family: inherit;
  border: 1px solid #ffefd7;
  border-radius: 0.5rem;
}

.vc-day-content {
  font-weight: 500;
}

.vc-highlight {
  background-color: theme("colors.primary");
}

.vc-highlight-base-start,
.vc-highlight-base-end {
  background-color: theme("colors.primary");
}

.vc-day:hover .vc-day-content {
  background-color: #ffa879;
}
</style>
