<template>
  <section id="get-started" class="section-padding">
    <div class="container mx-auto px-4">
      <!-- Hero Content -->
      <div class="flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 text-left mt-10">
          <h1 class="heading">
            Get started your exciting
            <span class="text-primary">journey</span> with us.
          </h1>
          <p class="description mt-5">
            A Team of experienced tourism professionals will<br
              class="hidden lg:block"
            />
            provide you with the best advice and tips for your<br
              class="hidden lg:block"
            />
            desire place.
          </p>
          <div class="flex justify-start my-5">
            <NuxtLink
              to="/discover"
              class="bg-primary flex items-center gap-1 text-white w-btn-signup font-medium text-center px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              ><Icon
                name="material-symbols:travel-explore"
                class="size-5"
              />Explore Now</NuxtLink
            >
          </div>
        </div>

        <!-- Hero Images -->
        <div class="relative lg:w-1/2 mt-10 lg:mt-0">
          <NuxtImg
            src="/img/Main.png"
            class="img-fluid mx-auto"
            alt="main-img-background"
          />
          <NuxtImg
            src="/img/Background-main.png"
            class="overlay-image absolute top-0 left-0"
            alt="main-img"
          />
        </div>
      </div>
    </div>
  </section>
</template>
