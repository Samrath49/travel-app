<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
    <div class="text-center card floating-card p-10">
      <h1 class="mb-4 text-6xl font-semibold text-red-500">
        {{ error?.statusCode }}
      </h1>
      <p class="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
      <div class="animate-bounce">
        <svg
          class="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p class="mt-4 text-gray-600">
        Let's get you back
        <NuxtLink href="/" class="text-primary">home</NuxtLink>.
      </p>
    </div>
  </div>
</template>
