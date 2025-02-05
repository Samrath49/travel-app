<template>
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8">
    <!-- Loading State -->
    <div v-if="pending" class="flex justify-center items-center min-h-[60vh]">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
      ></div>
    </div>

    <!-- Error State -->
    <div
      v-else-if="error"
      class="bg-red-50 border-l-4 border-red-500 p-4 my-8"
      role="alert"
    >
      <div class="flex">
        <div class="flex-shrink-0">
          <Icon
            name="heroicons:exclamation-circle"
            class="h-5 w-5 text-red-400"
          />
        </div>
        <div class="ml-3">
          <p class="text-sm text-red-700">{{ error }}</p>
        </div>
      </div>
    </div>

    <template v-else-if="itinerary">
      <!-- Back Button -->
      <div class="mb-8">
        <NuxtLink
          to="/my-tours"
          class="inline-flex text-sm sm:text-base items-center px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <Icon name="heroicons:arrow-left" class="size-5 mr-2" />
          Back to my tours
        </NuxtLink>
      </div>

      <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <!-- Hero Section -->
        <div class="relative h-52 sm:h-64 bg-gradient-to-r from-blue-500 to-purple-600">
          <div class="absolute inset-0 bg-black/30"></div>
          <div class="absolute bottom-0 p-3 sm:p-8 text-white">
            <h1 class="text-2xl sm:text-4xl font-bold mb-2">
              {{ itinerary.trip_plan.location }}
            </h1>
            <div class="flex flex-wrap gap-2 sm:gap-3">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-black/30 backdrop-blur-sm"
              >
                🗓️ {{ itinerary.trip_plan.duration }}
              </span>
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-black/30 backdrop-blur-sm"
              >
                👥 {{ itinerary.trip_plan.group_size }}
              </span>
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-black/30 backdrop-blur-sm"
              >
                💰 {{ itinerary.trip_plan.budget }} Budget
              </span>
            </div>
          </div>
        </div>

        <div class="p-2 sm:p-8">
          <!-- Flight Details -->
          <div
            class="mb-8 pt-4 sm:mb-12"
            v-if="itinerary.trip_plan.flight_details"
          >
            <h2 class="text-xl sm:text-2xl font-bold mb-6 flex items-center">
              ✈️ Flight Details
            </h2>
            <div class="bg-slate-100 rounded-xl p-4 sm:p-6">
              <div class="grid md:grid-cols-2 gap-8">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-xs sm:text-sm text-gray-500">From</p>
                      <p class="font-semibold text-sm sm:text-base">
                        {{ itinerary.trip_plan.flight_details.departure_city }}
                      </p>
                      <p class="text-xs sm:text-sm text-gray-600">
                        {{
                          formatDate(
                            itinerary.trip_plan.flight_details.departure_date
                          )
                        }}
                      </p>
                      <p class="text-xs sm:text-sm text-gray-600">
                        {{ itinerary.trip_plan.flight_details.departure_time }}
                      </p>
                    </div>
                    <Icon
                      name="heroicons:arrow-long-right"
                      class="size-6 sm:size-8 text-gray-400"
                    />
                    <div class="text-right">
                      <p class="text-xs sm:text-sm text-gray-500">To</p>
                      <p class="font-semibold text-sm sm:text-base">
                        {{ itinerary.trip_plan.flight_details.arrival_city }}
                      </p>
                      <p class="text-xs sm:text-sm text-gray-600">
                        {{
                          formatDate(
                            itinerary.trip_plan.flight_details.arrival_date
                          )
                        }}
                      </p>
                      <p class="text-xs sm:text-sm text-gray-600">
                        {{ itinerary.trip_plan.flight_details.arrival_time }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="space-y-2 sm:space-y-3">
                  <div class="flex items-center">
                    <Icon
                      name="material-symbols:flight"
                      class="size-5 sm:size-6 text-gray-500 mr-2"
                    />
                    <span class="text-gray-600 text-sm sm:text-base">{{
                      itinerary.trip_plan.flight_details.airline
                    }}</span>
                  </div>
                  <div class="flex items-center">
                    <Icon
                      name="heroicons:ticket"
                      class="size-5 sm:size-6 text-gray-500 mr-2"
                    />
                    <span class="text-gray-600 text-sm sm:text-base"
                      >Flight
                      {{
                        itinerary.trip_plan.flight_details.flight_number
                      }}</span
                    >
                  </div>
                  <div class="flex items-center">
                    <Icon
                      name="heroicons:currency-dollar"
                      class="w-5 h-5 text-gray-500 mr-2"
                    />
                    <span class="text-gray-600 text-sm sm:text-base">{{
                      itinerary.trip_plan.flight_details.price
                    }}</span>
                  </div>
                  <a
                    v-if="itinerary.trip_plan.flight_details.booking_url"
                    :href="itinerary.trip_plan.flight_details.booking_url"
                    target="_blank"
                    class="inline-flex w-full sm:w-auto justify-center items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors mt-2"
                  >
                    <Icon name="heroicons:link" class="w-4 h-4 mr-2" />
                    Book Flight
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Hotels Section -->
          <div class="mb-8 sm:mb-12">
            <h2
              class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center"
            >
              🏨 Recommended Hotels
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div
                v-for="(hotel, index) in itinerary.trip_plan.hotel.options"
                :key="hotel.name"
                class="bg-white rounded-xl border hover:shadow-lg transition-shadow duration-300"
              >
                <NuxtImg
                  :src="hotel.image_url"
                  :alt="hotel.name"
                  class="w-full h-48 object-cover rounded-t-xl"
                  :placeholder="`/img/placeholder${index + 1}.png`"
                />
                <div class="p-3 sm:p-6">
                  <div class="flex justify-between items-start mb-4">
                    <div>
                      <h3 class="font-bold text-base sm:text-lg">
                        {{ hotel.name }}
                      </h3>
                      <p class="text-gray-600 text-sm sm:text-sm">
                        {{ hotel.address }}
                      </p>
                    </div>
                    <div
                      class="flex items-center bg-yellow-100 px-2 py-1 rounded-lg"
                    >
                      <Icon
                        name="heroicons:star"
                        class="size-3 sm:size-4 text-yellow-500 mr-1"
                      />
                      <span class="font-medium text-sm sm:text-base">{{
                        hotel.rating
                      }}</span>
                    </div>
                  </div>
                  <div class="space-y-2 sm:space-y-3">
                    <p class="font-semibold text-base sm:text-lg text-primary">
                      {{ hotel.price }}
                    </p>
                    <p class="text-gray-600 text-sm">{{ hotel.description }}</p>
                    <div class="flex w-full gap-2">
                      <a
                        :href="`https://www.google.com/maps?q=${hotel.geo_coordinates.latitude},${hotel.geo_coordinates.longitude}`"
                        target="_blank"
                        class="inline-flex w-full sm:w-auto items-center justify-center px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
                      >
                        <Icon
                          name="heroicons:map-20-solid"
                          class="size-3 sm:size-4 mr-2 text-primary"
                        />
                        View on Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Places to Visit -->
          <div>
            <h2
              class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center"
            >
              📍 Places to Visit
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="(place, index) in itinerary.trip_plan.places_to_visit"
                :key="place.name"
                class="bg-white rounded-xl border hover:shadow-lg transition-shadow duration-300"
              >
                <NuxtImg
                  :src="place.image_url"
                  :alt="place.name"
                  class="w-full h-48 object-cover rounded-t-xl"
                  :placeholder="`/img/placeholder${index + 1}.png`"
                />
                <div class="p-3 sm:p-6">
                  <h3 class="font-bold text-base sm:text-lg mb-2">
                    {{ place.name }}
                  </h3>
                  <p class="text-gray-600 text-sm mb-2 sm:mb-4">
                    {{ place.details }}
                  </p>
                  <div class="space-y-2">
                    <div class="flex items-center text-sm text-gray-600">
                      <Icon
                        name="heroicons:ticket"
                        class="size-3 sm:size-4 mr-2"
                      />
                      {{ place.ticket_price }}
                    </div>
                    <div class="flex items-center text-sm text-gray-600">
                      <Icon
                        name="heroicons:clock"
                        class="size-3 sm:size-4 mr-2"
                      />
                      {{ place.time_to_travel }}
                    </div>
                    <a
                      :href="`https://www.google.com/maps?q=${place.geo_coordinates.latitude},${place.geo_coordinates.longitude}`"
                      target="_blank"
                      class="inline-flex w-full sm:w-auto justify-center items-center px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
                    >
                      <Icon
                        name="heroicons:map-20-solid"
                        class="size-3 sm:size-4 mr-2 text-primary"
                      />
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

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

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};
</script>

<style scoped>
.gradient-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
}
</style>
