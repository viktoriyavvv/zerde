<script setup lang="ts">
import { computed } from "vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import { useRoute } from "vue-router";

const layout = computed(() => {
  return useRoute().meta.layout || DefaultLayout;
});
</script>

<template>
  <component>
    <router-view />
  </component>
</template>

<style>
body {
  background-color: #f5f6fa;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
