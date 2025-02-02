<template>
  <section id="get-started" class="py-section">
    <div class="container mx-auto px-6 lg:px-16">
      <!-- Hero Content -->
      <div class="flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 text-center lg:text-left mt-10">
          <h1 class="text-[50px] sm:text-[65px] lg:text-[75px] font-bold">
            Get started your exciting
            <span class="text-primary">journey</span> with us.
          </h1>
          <p class="text-lg sm:text-xl lg:text-2xl text-gray-500 mt-5">
            A Team of experienced tourism professionals will<br
              class="hidden lg:block"
            />
            provide you with the best advice and tips for your<br
              class="hidden lg:block"
            />
            desire place.
          </p>
          <a href="#" class="btn-discover inline-block mt-6">Discover now</a>
        </div>

        <!-- Hero Images -->
        <div class="relative lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="/img/Main.png"
            class="img-fluid mx-auto"
            alt="main-img-background"
          />
          <img
            src="/img/Background-main.png"
            class="overlay-image absolute top-0 left-0"
            alt="main-img"
          />
        </div>
      </div>

      <!-- Floating Search Card -->
      <div class="flex justify-center mt-16">
        <div
          class="floating-card w-full md:w-3/4 lg:w-2/3 p-6 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div
            v-for="(item, index) in searchOptions"
            :key="index"
            class="flex flex-col text-center md:text-left"
          >
            <div class="flex items-center justify-center md:justify-start">
              <h6 class="text-lg font-semibold">{{ item.title }}</h6>
              <svg
                class="ml-2 svg-right-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="text-gray-500 text-sm">{{ item.subtitle }}</p>
          </div>
          <div class="flex justify-center md:justify-end">
            <button class="explore-btn">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const searchOptions = [
  { title: "Location", subtitle: "Where are you going" },
  { title: "Date", subtitle: "When you will go" },
  { title: "Guest", subtitle: "Number of guest" },
];
</script>
