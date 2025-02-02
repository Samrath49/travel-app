<template>
  <header class="bg-bg-special">
    <!-- Desktop Navigation -->
    <nav class="container mx-auto px-4 pt-0 md:pt-8 h-20">
      <div class="flex items-center justify-between h-full">
        <!-- Logo -->
        <div class="flex-shrink-0 pt-5">
          <NuxtLink to="/">
            <NuxtImg src="/icons/logo.svg" alt="Logo" class="h-12" />
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="text-xl font-inter font-normal text-gray-800 hover:text-primary transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Auth Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <button
            class="btn-login font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Login
          </button>
          <button
            class="btn-signup font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Sign up
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Icon
            :name="isOpen ? 'ph:x-bold' : 'ph:list-bold'"
            class="size-6 text-gray-800"
          />
        </button>
      </div>
    </nav>

    <!-- Mobile Sidebar -->
    <div
      v-show="isOpen"
      class="fixed inset-0 z-50 md:hidden"
      @click="isOpen = false"
    >
      <!-- Overlay -->
      <div class="fixed inset-0 bg-black/60"></div>

      <!-- Sidebar -->
      <div
        class="fixed top-0 right-0 w-64 pt-6 h-full bg-white transform transition-transform duration-200"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
        @click.stop
      >
        <!-- Close Button -->
        <button
          @click="isOpen = false"
          class="absolute top-6 px-2 py-1 right-4 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close menu"
        >
          <Icon
            name="ph:x-bold"
            class="size-6 relative top-[3px] text-gray-800"
          />
        </button>

        <div class="p-5 pt-14">
          <!-- Mobile Menu Items -->
          <div class="space-y-4">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              class="block text-lg font-semibold text-gray-800 hover:text-primary transition-colors"
              @click="isOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </div>

          <!-- Mobile Auth Buttons -->
          <div class="mt-8 space-y-4">
            <button
              class="btn-login w-full font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Login
            </button>
            <button
              class="btn-signup w-full font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const isOpen = ref(false);

const menuItems = [
  { label: "Destination", path: "/destination" },
  { label: "Tour", path: "/tour" },
];
</script>
