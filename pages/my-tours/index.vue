<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl p-10 mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-gray-900">
        My Travel Itineraries
      </h1>

      <div v-if="pending" class="flex justify-center items-center py-12">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"
        ></div>
      </div>

      <div
        v-else-if="error"
        class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8"
        role="alert"
      >
        <p class="font-bold">Error</p>
        <p>{{ error }}</p>
      </div>

      <div v-else-if="!itineraries?.length" class="text-center py-12">
        <p class="text-xl text-gray-600 mb-4">
          No itineraries found. Start planning your next adventure!
        </p>
        <NuxtLink
          to="/discover"
          class="inline-block bg-primary/80 text-white px-6 py-3 rounded-lg hover:bg-primary transition duration-300"
        >
          Plan a Trip
        </NuxtLink>
      </div>

      <TransitionGroup
        v-else
        name="list"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="(itinerary, index) in itineraries"
          :key="itinerary.id"
          class="bg-white rounded-xl shadow-xl hover:shadow-lg transition-all duration-500 overflow-hidden group relative"
        >
          <!-- Delete Button -->
          <button
            @click.prevent="confirmDelete(itinerary.id)"
            class="absolute top-3 right-3 z-10 size-8 rounded-full bg-white/50 hover:bg-red-600 transition-colors duration-200 opacity-0 group-hover:opacity-100"
          >
            <Icon name="heroicons:trash" class="size-5 mt-1 text-black" />
          </button>

          <NuxtLink :to="`/my-tours/${itinerary.id}`" class="block">
            <!-- Image Section -->
            <div class="relative h-48 overflow-hidden">
              <NuxtImg
                :src="getFirstPlaceImage(itinerary)"
                :alt="itinerary.trip_plan.location"
                class="w-full h-full object-cover group-hover:scale-125 transition-all duration-500 cursor-pointer"
                :placeholder="`/img/placeholder${index + 1}.png`"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
              >
                <div class="p-6">
                  <h2 class="text-2xl font-bold text-white mb-2">
                    {{ itinerary.trip_plan.location }}
                  </h2>
                </div>
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-6">
              <!-- Info Badges -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                >
                  🗓️
                  {{
                    getDurationInDays(itinerary.start_date, itinerary.end_date)
                  }}
                  Days
                </span>
                <span
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-50 text-amber-700"
                >
                  💰 {{ itinerary.trip_plan.budget }}
                </span>
                <span
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 text-green-700"
                >
                  👥 {{ itinerary.trip_plan.group_size }}
                </span>
              </div>

              <!-- Trip Details -->
              <div class="space-y-2">
                <div class="flex items-center text-gray-600">
                  <Icon name="heroicons:calendar" class="w-5 h-5 mr-2" />
                  <span>{{
                    formatDateRange(itinerary.start_date, itinerary.end_date)
                  }}</span>
                </div>

                <!-- Hotel Preview -->
                <div class="flex items-center text-gray-600">
                  <Icon name="heroicons:home" class="w-5 h-5 mr-2" />
                  <span>{{ getFirstHotelName(itinerary) }}</span>
                </div>

                <!-- Places Count -->
                <div class="flex items-center text-gray-600">
                  <Icon name="heroicons:map-pin" class="w-5 h-5 mr-2" />
                  <span
                    >{{ itinerary.trip_plan.places_to_visit.length }} Places to
                    Visit</span
                  >
                </div>
              </div>

              <!-- View Details Link -->
              <div
                class="mt-4 flex items-center text-primary/80 hover:text-primary transition-colors font-medium"
              >
                <span>View Itinerary</span>
                <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-1" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </TransitionGroup>

      <!-- Delete Confirmation Modal -->
      <Modal v-model="showDeleteModal">
        <template #header>
          <h3 class="text-lg font-medium text-gray-900">Confirm Deletion</h3>
        </template>
        <template #body>
          <p>
            Are you sure you want to delete this itinerary? This action cannot
            be undone.
          </p>
        </template>
        <template #footer>
          <button
            @click="cancelDelete"
            class="mr-3 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            @click="handleDelete"
            :disabled="isDeleting"
            class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            <span
              v-if="isDeleting"
              class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
            ></span>
            {{ isDeleting ? "Deleting..." : "Delete" }}
          </button>
        </template>
      </Modal>

      <div
        v-if="showToast"
        class="fixed bottom-4 right-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-lg"
        role="alert"
      >
        <div class="flex">
          <div class="py-1">
            <Icon
              name="heroicons:exclamation-circle"
              class="h-6 w-6 text-red-500 mr-4"
            />
          </div>
          <div>
            <p class="font-bold">Error</p>
            <p>{{ toastMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useItinerary } from "~/composables/useItinerary";

const { getItineraries, deleteItinerary } = useItinerary();

const {
  data: itineraries,
  pending,
  error,
  refresh,
} = await useAsyncData("itineraries", () => getItineraries(), {
  watch: [() => useRoute().fullPath],
});

const showDeleteModal = ref(false);
const itineraryToDelete = ref<string | null>(null);
const isDeleting = ref(false);
const showToast = ref(false);
const toastMessage = ref("");

// const toast = useToast();

// toast.success("Itinerary deleted successfully");
// toast.error("Failed to delete itinerary");

const formatDateRange = (start: string, end: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const startDate = new Date(start).toLocaleDateString(undefined, options);
  const endDate = new Date(end).toLocaleDateString(undefined, options);
  return `${startDate} - ${endDate}`;
};

const getFirstPlaceImage = (itinerary: any) => {
  const firstPlace = itinerary.trip_plan.places_to_visit[0];
  return firstPlace?.image_url;
};

const confirmDelete = async (id: string) => {
  itineraryToDelete.value = id;
  showDeleteModal.value = true;
};

const cancelDelete = () => {
  showDeleteModal.value = false;
  itineraryToDelete.value = null;
};

const showError = (message: string) => {
  toastMessage.value = message;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 5000);
};

const getDurationInDays = (start: string, end: string) => {
  const diffTime = Math.abs(
    new Date(end).getTime() - new Date(start).getTime()
  );
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const getFirstHotelName = (itinerary: any) => {
  return itinerary.trip_plan.hotel?.options[0]?.name || "Hotel to be decided";
};

const handleDelete = async () => {
  if (!itineraryToDelete.value) return;

  try {
    isDeleting.value = true;
    await deleteItinerary(itineraryToDelete.value);
    await refresh();
    showDeleteModal.value = false;
    itineraryToDelete.value = null;
  } catch (e) {
    console.error("Error deleting itinerary:", e);
    showError("Failed to delete itinerary. Please try again.");
  } finally {
    isDeleting.value = false;
  }
};

// Error handling for data fetching
watch(error, (newError) => {
  if (newError) {
    console.error("Error fetching itineraries:", newError);
    showError("Failed to load itineraries. Please refresh the page.");
  }
});
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* Smooth transition for delete button */
.group:hover .opacity-0 {
  transition: opacity 0.2s ease-in-out;
}
</style>
