<script setup>
import { defineProps } from "vue";
const styles = defineProps({
  bg: {
    type: String,
    default: "bg-gray-100",
  },
});
</script>
<template>
  <div class="p-6 rounded-lg shadow-md" :class="styles.bg">
    <slot></slot>
  </div>
</template>
