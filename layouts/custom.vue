<script setup>
useSeoMeta({
  title: "Travel",
  description: "AI based travel planner",
  ogTitle: "Travel",
  ogDescription: "AI based travel planner",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "Travel",
  twitterDescription: "AI based travel planner",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
<template>
  <slot />
</template>
