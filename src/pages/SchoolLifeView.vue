<template>
  <HeaderCard />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderCard from "@/layouts/TheHeader.vue";

export default defineComponent({
  name: "SchoolLifePage",
  components: {
    HeaderCard,
  },
});
</script>

<style></style>
