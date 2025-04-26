<template>
  <div class="absolute" :style="{ top, left }">
    <div class="relative group">
      <!-- Bouton + -->
      <button
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        class="bg-app-yellow text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md"
      >
        +
      </button>

      <!-- Popover desktop (lg+) -->
      <div
        v-if="isHovered"
        class="hidden lg:block font-montserrat absolute top-8 left-1/2 transform -translate-x-1/2 bg-white border border-app-red p-2 rounded-md shadow-lg w-48 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <slot name="content" />
      </div>

      <!-- Popover mobile/tablette (jusqu'à lg) -->
      <div
        v-if="isHovered"
        class="block lg:hidden font-montserrat fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-app-red p-2 rounded-md shadow-lg w-64 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isHovered = ref(false);

defineProps({
  top: {
    type: String,
    required: true,
  },
  left: {
    type: String,
    required: true,
  },
});
</script>
