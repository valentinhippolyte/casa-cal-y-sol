<!-- components/LegendItem.vue -->
<template>
  <div class="flex items-center space-x-2">
    <component :is="icon" class="w-6 h-6 text-app-red" />
    <span class="text-sm font-montserrat">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  label: String,
});
</script>
