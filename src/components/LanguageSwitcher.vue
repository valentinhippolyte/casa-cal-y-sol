<template>
  <div class="relative inline-block text-left">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 text-sm focus:outline-none hover:cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-globe-icon lucide-globe"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
      <span class="capitalize">{{ locale }}</span>
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <ul class="py-1 text-sm">
        <li
          v-for="lang in ['en', 'fr', 'es']"
          :key="lang"
          @click="selectLanguage(lang)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
        >
          <span class="capitalize">{{ lang }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const isOpen = ref(false);

const flagMap = {
  en: "🇬🇧",
  fr: "🇫🇷",
  es: "🇪🇸",
};

const selectLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem("lang", lang);
  isOpen.value = false;
};
</script>
