<template>
  <div class="flex flex-col items-center">
    <div class="h-1.5 w-18 bg-app-red mt-10 mb-3"></div>
    <h2 class="text-2xl font-roca-light mb-8">
      {{ t("home.characteristic.title") }}
    </h2>

    <!-- Première ligne -->
    <div class="flex flex-wrap justify-center max-w-6xl w-full px-4 mb-8">
      <div
        class="w-1/2 lg:w-1/4 flex flex-col items-center text-center mb-6"
        v-for="(item, i) in firstLine"
        :key="'ligne1-' + i"
      >
        <component
          :is="item.icon"
          class="w-16 h-16 lg:w-20 lg:h-20 text-app-red mb-2"
          :stroke-width="1"
        />
        <span class="text-sm font-montserrat">{{ item.label }}</span>
      </div>
    </div>

    <!-- Deuxième ligne -->
    <div class="flex flex-wrap justify-center max-w-6xl w-full px-4">
      <div
        class="w-1/2 lg:w-1/5 flex flex-col items-center text-center mb-6"
        v-for="(item, i) in secondLine"
        :key="'ligne2-' + i"
      >
        <component
          :is="item.icon"
          class="w-16 h-16 lg:w-20 lg:h-20 text-app-red mb-2"
          :stroke-width="1"
        />
        <span class="text-sm font-montserrat">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Bath,
  Bed,
  DoorClosed,
  House,
  Sun,
  ThermometerSnowflake,
  User,
  WavesLadder,
  Wifi,
} from "lucide-vue-next";

import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const firstLine = computed(() => [
  { icon: House, label: t("home.characteristic.icone.house") },
  { icon: User, label: t("home.characteristic.icone.people") },
  { icon: DoorClosed, label: t("home.characteristic.icone.bed") },
  { icon: Bed, label: t("home.characteristic.icone.door") },
]);

const secondLine = computed(() => [
  { icon: Bath, label: t("home.characteristic.icone.bath") },
  { icon: Sun, label: t("home.characteristic.icone.sun") },
  { icon: WavesLadder, label: t("home.characteristic.icone.pool") },
  { icon: ThermometerSnowflake, label: t("home.characteristic.icone.cold") },
  { icon: Wifi, label: t("home.characteristic.icone.wifi") },
]);
</script>
