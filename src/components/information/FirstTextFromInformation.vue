<template>
  <div class="flex flex-col-reverse lg:flex-row px-6 lg:px-20">
    <!-- Bloc image avec padding sur grand écran -->
    <div class="w-full lg:w-1/2 p-8 flex items-center justify-center">
      <img
        src="../../assets/images/village_view.jpg"
        class="rounded-md w-full h-auto object-cover max-w-[500px]"
        alt="village view"
      />
    </div>

    <!-- Bloc texte -->
    <div class="w-full lg:w-1/2 py-8 flex flex-col justify-center">
      <div class="h-1.5 w-18 bg-app-red mb-3"></div>
      <h2 class="text-2xl font-roca-light mb-4">
        {{ t("information.firstText.title") }}
      </h2>
      <p class="text-md font-montserrat mb-4 leading-relaxed">
        {{ t("information.firstText.text") }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
