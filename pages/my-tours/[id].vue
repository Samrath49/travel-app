<script setup lang="ts">
const route = useRoute();
const { getItinerary } = useItinerary();

const {
  data: itinerary,
  pending,
  error,
} = await useAsyncData("itinerary", () =>
  getItinerary(route.params.id as string)
);
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div v-if="pending" class="text-center py-8">Loading...</div>

    <div v-else-if="error" class="text-red-500 text-center py-8">
      {{ error }}
    </div>

    <template v-else-if="itinerary">
      <div class="mb-8">
        <NuxtLink to="/my-tours" class="text-blue-600 hover:text-blue-800">
          ← Back to my tours
        </NuxtLink>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold mb-4">
          {{ itinerary.trip_plan.location }}
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 class="text-xl font-semibold mb-4">Trip Details</h2>
            <div class="space-y-2">
              <p>
                <strong>Duration:</strong> {{ itinerary.trip_plan.duration }}
              </p>
              <p>
                <strong>Group Size:</strong>
                {{ itinerary.trip_plan.group_size }}
              </p>
              <p><strong>Budget:</strong> {{ itinerary.trip_plan.budget }}</p>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-4">Flight Details</h2>
            <div class="space-y-2">
              <p>
                <strong>Airline:</strong>
                {{
                  itinerary?.trip_plan?.flight_details?.airline || "JET Airways"
                }}
              </p>
              <p>
                <strong>Flight:</strong>
                {{
                  itinerary?.trip_plan?.flight_details?.flight_number ||
                  "JET 123"
                }}
              </p>
              <p>
                <strong>Departure:</strong>
                {{ itinerary?.trip_plan?.flight_details?.departure_city || "" }}
              </p>
              <p>
                <strong>Arrival:</strong>
                {{ itinerary?.trip_plan?.flight_details?.arrival_city || "" }}
              </p>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Hotels</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="hotel in itinerary.trip_plan.hotel.options"
              :key="hotel.name"
              class="border rounded-lg p-4"
            >
              <h3 class="font-semibold mb-2">{{ hotel.name }}</h3>
              <p class="text-gray-600 mb-2">{{ hotel.address }}</p>
              <p class="font-medium">{{ hotel.price }}</p>
              <p class="text-sm text-gray-500">Rating: {{ hotel.rating }}/5</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-4">Places to Visit</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="place in itinerary.trip_plan.places_to_visit"
              :key="place.name"
              class="border rounded-lg overflow-hidden"
            >
              <img
                :src="place.image_url"
                :alt="place.name"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="font-semibold mb-2">{{ place.name }}</h3>
                <p class="text-sm text-gray-600 mb-2">
                  {{ place.details }}
                </p>
                <p class="text-sm">
                  <strong>Price:</strong> {{ place.ticket_price }}
                </p>
                <p class="text-sm">
                  <strong>Travel Time:</strong> {{ place.time_to_travel }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
