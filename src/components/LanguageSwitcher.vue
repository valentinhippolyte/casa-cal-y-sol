<template>
  <form class="">
    <select
      v-model="locale"
      @change="changeLanguage(locale)"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5"
    >
      <option selected value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Espagnol</option>
    </select>
  </form>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem("lang", lang); // Sauvegarde la langue
};
</script>
