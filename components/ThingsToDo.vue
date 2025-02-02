<template>
  <section id="things-u-need" class="things-you-need text-center">
    <div class="container mx-auto px-6 lg:px-16">
      <!-- Section Heading -->
      <div class="flex flex-col lg:flex-row items-center justify-center">
        <div class="lg:w-2/3">
          <h1
            class="text-[45px] sm:text-[55px] lg:text-[60px] font-bold leading-tight"
          >
            Things you need <span class="text-primary">to do</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-500 pt-3">
            We ensure that you’ll embark on a perfectly planned,<br
              class="hidden lg:block"
            />
            safe vacation at a price you can afford.
          </p>
        </div>
        <!-- Section Icon -->
        <div class="hidden md:block">
          <img src="/icons/Things-icon.png" alt="icon" class="image-left" />
        </div>
      </div>

      <!-- Steps Cards -->
      <ul class="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <li
          v-for="(step, index) in steps"
          :key="index"
          class="card floating-card w-[23rem] h-[260px] rounded-[3%] p-6 text-left"
          :class="step.bgClass"
        >
          <img :src="step.icon" class="card-icon-top mt-4" :alt="step.title" />
          <div class="mt-4">
            <h4 class="text-lg font-bold">{{ step.title }}</h4>
            <p class="text-gray-500 text-[19px] mt-1">{{ step.description }}</p>
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
