<template>
  <div class="flex flex-col items-center px-4">
    <div class="h-1.5 w-18 bg-app-red mt-10 mb-3"></div>
    <h2 class="text-2xl font-roca-light mb-8 text-center">
      {{ t("information.regulations.title") }}
    </h2>

    <div
      class="flex flex-col lg:flex-row lg:items-start justify-between gap-y-12 lg:gap-y-0 lg:gap-x-12 max-w-7xl w-full mb-10"
    >
      <!-- Section 1 -->
      <div class="flex flex-col items-center text-center max-w-xs">
        <Plane class="w-8 h-8 text-app-red mb-2" stroke-width="1" />
        <h3 class="text-md font-montserrat font-bold mb-3">
          {{ t("information.regulations.rules.1.title") }}
        </h3>
        <p class="text-md font-montserrat text-left">
          {{ t("information.regulations.rules.1.text.1") }} <br />
          {{ t("information.regulations.rules.1.text.2") }}
        </p>
      </div>

      <!-- Section 2 -->
      <div class="flex flex-col items-center text-center max-w-xs">
        <ListChecks class="w-8 h-8 text-app-red mb-2" stroke-width="1" />
        <h3 class="text-md font-montserrat font-bold mb-3">
          {{ t("information.regulations.rules.2.title") }}
        </h3>
        <p class="text-md font-montserrat text-left">
          {{ t("information.regulations.rules.2.text") }}
        </p>
      </div>

      <!-- Section 3 -->
      <div class="flex flex-col items-center text-center max-w-xs">
        <Ban class="w-8 h-8 text-app-red mb-2" stroke-width="1" />
        <h3 class="text-md font-montserrat font-bold mb-3">
          {{ t("information.regulations.rules.3.title") }}
        </h3>
        <p class="text-md font-montserrat text-left">
          {{ t("information.regulations.rules.3.text.1") }}<br />
          {{ t("information.regulations.rules.3.text.2") }}<br />
          {{ t("information.regulations.rules.3.text.3") }}<br />
          {{ t("information.regulations.rules.3.text.4") }}
        </p>
      </div>

      <!-- Section 4 -->
      <div class="flex flex-col items-center text-center max-w-xs">
        <Frown class="w-8 h-8 text-app-red mb-2" stroke-width="1" />
        <h3 class="text-md font-montserrat font-bold mb-3">
          {{ t("information.regulations.rules.4.title") }}
        </h3>
        <p class="text-md font-montserrat text-left">
          {{ t("information.regulations.rules.4.text.1") }}<br />
          {{ t("information.regulations.rules.4.text.2") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
