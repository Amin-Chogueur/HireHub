<script setup>
import { defineProps } from "vue";
defineProps({
  message: String,
});
</script>
<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <i class="pi pi-inbox text-gray-400 text-6xl mb-4"></i>

    <h1 class="text-6xl font-bold mb-4">{{ message }}</h1>
  </section>
</template>
