<template>
  <section
    id="things-u-need"
    class="section-padding things-you-need text-center"
  >
    <div class="container mx-auto px-6 lg:px-16 relative">
      <!-- Section Heading -->
      <div class="flex flex-col lg:flex-row items-center justify-center">
        <div class="lg:w-2/3">
          <h1 class="heading-small">
            Things you need <span class="text-primary">to do</span>
          </h1>
          <p class="text-base sm:text-lg text-gray-600 font-poppins pt-3">
            We ensure that you’ll embark on a perfectly planned,<br
              class="hidden lg:block"
            />
            safe vacation at a price you can afford.
          </p>
        </div>
        <!-- Section Icon -->
        <div>
          <NuxtImg
            src="/icons/Things-icon.png"
            alt="icon"
            class="image-left w-28 md:w-32"
          />
        </div>
      </div>

      <!-- Steps Cards -->
      <ul
        class="w-full flex flex-col relative z-0 md:flex-row justify-center items-center gap-6 mt-12"
      >
        <li
          v-for="(step, index) in steps"
          :key="index"
          class="card floating-card min-w-25 max-w-[23rem] md:h-64 rounded-[3%] p-6 text-left"
          :class="step.bgClass"
        >
          <NuxtImg
            :src="step.icon"
            class="card-icon-top mt-4"
            :alt="step.title"
          />
          <div class="mt-4 flex flex-col gap-2">
            <h4 class="text-xl font-poppins font-semibold">{{ step.title }}</h4>
            <p class="font-poppins font-normal text-base text-gray-600 mt-1">
              {{ step.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: "Sign up",
    description:
      "Completes all the work associated with planning and processing",
    icon: "/icons/Things-icon-1.png",
    bgClass: "card-signup",
  },
  {
    title: "Worth of money",
    description:
      "After successful access then book from exclusive deals & pricing",
    icon: "/icons/Things-icon-2.png",
    bgClass: "card-worth",
  },
  {
    title: "Exciting travel",
    description: "Start and explore a wide range of exciting travel experience",
    icon: "/icons/Things-icon-3.png",
    bgClass: "card-exciting",
  },
];
</script>
