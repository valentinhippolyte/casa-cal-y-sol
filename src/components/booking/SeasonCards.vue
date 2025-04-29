<template>
  <div
    class="relative flex flex-col md:flex-row justify-center gap-10 px-6 lg:px-20 py-10"
  >
    <!-- Bouton avec bulle d'information au survol -->
    <div class="absolute top-2 right-2 z-10 group">
      <!-- Bouton ou icône -->
      <div
        class="w-6 h-6 flex items-center justify-center bg-app-red text-white rounded-full cursor-pointer text-xs font-bold font-montserrat"
        title="Infos"
      >
        i
      </div>

      <!-- Bulle visible au hover -->
      <div
        class="font-montserrat absolute right-0 mt-2 bg-white border border-gray-300 text-sm p-3 rounded-md shadow-lg w-64 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200"
      >
        <ul class="list-disc list-inside space-y-1 marker:text-app-red">
          <li>{{ t("booking.seasonCards.info.1") }}</li>
          <li>{{ t("booking.seasonCards.info.2") }}</li>
          <li>{{ t("booking.seasonCards.info.3") }}</li>
        </ul>
      </div>
    </div>

    <!-- Card 1 -->
    <div
      class="bg-app-bg shadow-lg rounded-2xl p-6 max-w-md w-full flex flex-col text-center min-h"
    >
      <div class="h-1.5 w-12 bg-app-blue mt-2 mb-4 mx-auto"></div>
      <h3 class="text-xl font-bold mb-4">
        {{ t("booking.seasonCards.low.title") }}
      </h3>

      <!-- Ce bloc va s'étendre pour pousser les <p> vers le centre -->
      <div
        class="flex-grow flex flex-col lg:justify-center justify-start items-center space-y-1"
      >
        <p class="text-md">{{ t("booking.seasonCards.low.text.1") }}</p>
        <p class="text-md">{{ t("booking.seasonCards.low.text.2") }}</p>
      </div>
    </div>

    <!-- Card 2 -->
    <div
      class="bg-app-bg shadow-lg rounded-2xl p-6 max-w-md w-full flex flex-col items-center text-center min-h-[320px] justify-center"
    >
      <div>
        <div class="h-1.5 w-12 bg-app-yellow mt-2 mb-4 mx-auto"></div>
        <h3 class="text-xl font-bold mb-4">
          {{ t("booking.seasonCards.high.title") }}
        </h3>
        <div class="flex flex-col gap-4">
          <div>
            <p class="font-medium">
              {{ t("booking.seasonCards.high.text.1.title") }}
            </p>
            <p>{{ t("booking.seasonCards.high.text.1.text.1") }}</p>
            <p>{{ t("booking.seasonCards.high.text.1.text.2") }}</p>
          </div>
          <div>
            <p class="font-medium">
              {{ t("booking.seasonCards.high.text.2.title") }}
            </p>
            <p>{{ t("booking.seasonCards.high.text.2.text.1") }}</p>
            <p>{{ t("booking.seasonCards.high.text.2.text.2") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
