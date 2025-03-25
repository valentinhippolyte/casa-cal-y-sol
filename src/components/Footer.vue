<template>
  <footer class="bg-white shadow-sm p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
      <div class="text-center sm:text-left">
        <h3 class="text-lg font-semibold">{{ t("footer.title1") }}</h3>
        <p class="mt-2">{{ t("footer.address") }}</p>
        <a
          href="mailto:casacalysol@gmail.com"
          class="text-blue-600 hover:underline"
          >casacalysol@gmail.com</a
        >
        <p class="mt-1 text-sm text-gray-600">
          {{ t("footer.registration") }} VFT/CA/07621
        </p>
      </div>
      <div class="flex flex-col items-center sm:items-start">
        <h3 class="text-lg font-semibold">{{ t("footer.title2") }}</h3>
        <Maps
          class="w-full min-h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-md"
        />
      </div>
    </div>
    <div class="text-center mt-6">
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <p class="text-sm text-gray-600">
        &copy; 2025 Casa Caly y Sol. {{ t("footer.rights") }}.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import Maps from "./Maps.vue";

const { t } = useI18n();
</script>
