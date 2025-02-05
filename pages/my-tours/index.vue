<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold mb-8">My Travel Itineraries</h1>

    <div v-if="pending" class="text-center py-8">Loading...</div>

    <div v-else-if="error" class="text-red-500 text-center py-8">
      {{ error }}
    </div>

    <div v-else-if="!itineraries?.length" class="text-center py-8">
      No itineraries found. Start planning your trip!
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="itinerary in itineraries"
        :key="itinerary.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">
            {{ itinerary.trip_plan.location }}
          </h2>
          <p class="text-gray-600 mb-4">
            {{ formatDate(itinerary.start_date) }} -
            {{ formatDate(itinerary.end_date) }}
          </p>
          <div class="flex justify-between items-center">
            <NuxtLink
              :to="`/my-tours/${itinerary.id}`"
              class="text-blue-600 hover:text-blue-800"
            >
              View Details
            </NuxtLink>
            <button
              @click="handleDelete(itinerary.id)"
              class="text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getItineraries, deleteItinerary } = useItinerary();

const {
  data: itineraries,
  pending,
  error,
  refresh,
} = await useAsyncData("itineraries", () => getItineraries());

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

const handleDelete = async (id: string) => {
  try {
    await deleteItinerary(id);
    refresh();
  } catch (e) {
    console.error("Error deleting itinerary:", e);
  }
};
</script>
