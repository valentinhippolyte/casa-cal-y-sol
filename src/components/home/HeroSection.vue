<template>
  <div class="relative h-[calc(100vh-84px)] overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="../../assets/images/breakfast.jpg"
        alt="Background Image"
        class="object-cover object-[35%_center] lg:object-center w-full h-full"
      />
      <div class="absolute inset-0 bg-black opacity-40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 h-full flex items-center justify-center">
      <div
        class="flex flex-col lg:flex-row items-center lg:justify-center text-white text-center lg:text-left px-6 max-w-6xl w-full"
      >
        <!-- Logo -->
        <img
          src="../../assets/Logo_beige.svg"
          alt="Logo"
          class="w-40 lg:w-64 mb-6 lg:mb-0"
        />

        <!-- Text -->
        <div class="lg:ml-12 flex flex-col justify-center h-full lg:h-auto">
          <h2
            class="text-4xl lg:text-6xl font-roca font-bold uppercase tracking-widest mb-2"
          >
            {{ t("home.welcome") }}
          </h2>
          <h1
            class="text-4xl lg:text-6xl font-roca font-bold tracking-wide mb-2"
          >
            CASA CAL Y SOL
          </h1>
          <h3
            class="text-lg lg:text-2xl font-montserrat font-medium tracking-wider"
          >
            {{ t("home.subtitle") }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
