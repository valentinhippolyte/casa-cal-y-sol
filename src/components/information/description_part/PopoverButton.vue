<template>
  <div
    class="absolute flex flex-col"
    :style="{
      top: isDesktop ? topLg || top : top,
      left: isDesktop ? leftLg || left : left,
    }"
  >
    <!-- Titres affichés en desktop, horizontalement -->
    <div v-if="isDesktop" class="hidden lg:flex gap-2 mb-1">
      <span class="text-md font-montserrat">
        <slot name="title" />
      </span>
    </div>

    <div class="relative group">
      <!-- Bouton + -->
      <div class="flex flex-row">
        <button
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
          :class="[
            'rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:cursor-pointer border-1 font-montserrat text-sm leading-none mr-auto',
            isGlobal
              ? 'bg-app-red border-app-red text-white'
              : 'bg-app-bg border-app-yellow text-app-yellow',
          ]"
        >
          {{ isGlobal ? "i" : "+" }}
        </button>
      </div>

      <!-- Popover desktop -->
      <div
        v-if="isHovered"
        class="hidden lg:block font-montserrat absolute top-8 left-1/2 transform -translate-x-1/2 bg-white border border-app-red p-2 rounded-md shadow-lg w-60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <slot name="content" />
      </div>

      <!-- Popover mobile/tablette -->
      <div
        v-if="isHovered"
        class="block lg:hidden font-montserrat fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-app-red p-2 rounded-md shadow-lg w-64 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
        :class="isGlobal ? 'bg-app-red' : ''"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const isHovered = ref(false);
const isDesktop = ref(false);

onMounted(() => {
  const checkScreen = () => {
    isDesktop.value = window.innerWidth >= 1024;
  };
  checkScreen();
  window.addEventListener("resize", checkScreen);

  onBeforeUnmount(() => {
    window.removeEventListener("resize", checkScreen);
  });
});

defineProps({
  top: { type: String, required: true },
  left: { type: String, required: true },
  topLg: { type: String, default: null },
  leftLg: { type: String, default: null },
  isGlobal: { type: String, default: "" },
});
</script>
