<template>
  <div class="container mx-auto px-4">
    <div
      class="grid grid-cols-1 gap-8 items-center lg:grid-cols-2 text-justify"
    >
      <div>
        <h2 class="text-2xl font-semibold">
          {{ t("information.history.title1") }}
        </h2>
        <p class="mt-4 text-lg">
          {{ t("information.history.text1") }}
        </p>
      </div>

      <div class="hidden lg:block">
        <img
          src="../assets/images/village_view.jpg"
          alt="Vue du village"
          class="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>

    <div>
      <p class="mt-4 text-lg text-justify">
        {{ t("information.history.text2") }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
