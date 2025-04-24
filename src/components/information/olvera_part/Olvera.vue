<template>
  <div class="flex flex-col-reverse lg:flex-row">
    <!-- Bloc image -->
    <div class="w-full lg:w-1/2 p-8 lg:p-20 flex items-center justify-center">
      <img
        src="../../../assets/images/map_olvera.png"
        class="rounded-md w-full h-auto object-cover"
      />
    </div>

    <!-- Bloc texte + légende -->
    <div class="w-full lg:w-1/2 px-6 py-8 flex flex-col justify-center">
      <!-- Texte -->
      <p class="text-md font-montserrat mb-6">
        <span class="text-md font-montserrat font-bold">
          {{ t("information.olvera.title") }}
        </span>
        <br />
        {{ t("information.olvera.text") }}
      </p>

      <!-- Légende -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-4">
        <LegendItem
          :icon="ShoppingCart"
          :label="t('information.olvera.legend.1')"
        />
        <LegendItem
          :icon="Croissant"
          :label="t('information.olvera.legend.2')"
        />
        <LegendItem :icon="Beer" :label="t('information.olvera.legend.3')" />
        <LegendItem :icon="Apple" :label="t('information.olvera.legend.4')" />
        <LegendItem :icon="View" :label="t('information.olvera.legend.5')" />
        <LegendItem :icon="Ham" :label="t('information.olvera.legend.6')" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Apple,
  Beer,
  Croissant,
  Ham,
  ShoppingCart,
  View,
} from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import LegendItem from "../olvera_part/LegendItem.vue";

const { t } = useI18n();
</script>
