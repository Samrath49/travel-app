<template>
  <footer
    class="w-full flex md:justify-center justify-between items-center flex-col border-t border-slate-400/5 drop-shadow-2xl p-4 bg-mainBg"
  >
    <div
      class="w-full flex sm:flex-row animate-fade-in-down flex-col justify-between items-center my-4"
    >
      <div class="flex flex-[0.5] justify-center items-center">
        <NuxtLink
          to="/"
          aria-label="Travel"
          title="Travel"
          class="inline-flex items-center"
        >
          <NuxtImg src="/icons/logo.svg" alt="Travel" class="w-20 h-16" />
        </NuxtLink>
      </div>

      <div
        class="flex flex-1 justify-evenly items-center antialiased flex-wrap sm:mt-0 mt-5 w-full"
      >
        <NuxtLink
          v-for="item in LINK_ITEMS"
          :key="item.path"
          :to="item.path"
          class="text-xl font-inter font-normal text-gray-800 hover:text-primary transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>

    <div
      class="sm:w-[90%] h-[1px] animate-fade-in-down w-full bg-slate-400/40 mt-5"
    ></div>

    <div
      class="sm:w-[90%] w-full flex justify-between animate-fade-in-down items-center mt-3"
    >
      <div
        class="w-full grid grid-cols-1 py-5 px-10 text-xl lg:grid-cols-3 md:grid-cols-3"
      >
        <p
          class="text-slate-800 text-center font-medium py-2 text-sm lg:text-left lg:text-base md:text-left md:text-base"
        >
          &copy; {{ currentYear }}, All rights reserved
        </p>

        <div class="flex items-center mt-1 py-2 space-x-5 justify-center">
          <a
            href="https://twitter.com/chauhansamrath"
            target="_blank"
            title="Twitter"
            class="transition ease-in-out delay-120 text-slate-800 hover:-translate-y-1 hover:scale-125 hover:text-btnBorder duration-300"
          >
            <Icon name="mdi:twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/samrath49/"
            target="_blank"
            title="LinkedIn"
            class="transition ease-in-out delay-120 text-slate-800 hover:-translate-y-1 hover:scale-125 hover:text-btnBorder duration-300"
          >
            <Icon name="mdi:linkedin" />
          </a>
          <a
            href="https://github.com/samrath49"
            target="_blank"
            title="Github"
            class="transition ease-in-out delay-120 text-slate-800 hover:-translate-y-1 hover:scale-125 hover:text-btnBorder duration-300"
          >
            <Icon name="mdi:github" />
          </a>
        </div>

        <div
          class="text-center text-sm py-2 lg:text-right lg:text-base md:text-right md:text-base"
        >
          <p class="text-slate-800 font-medium">
            Made with ❤️ by
            <a
              href="https://github.com/samrath49"
              target="_blank"
              class="font-raj font-semibold tracking-wide hoverEffect"
              >Samrath Chauhan</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { LINK_ITEMS } from "~/constants";

const currentYear = new Date().getFullYear();
</script>
