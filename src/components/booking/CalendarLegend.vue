<template>
  <div class="flex flex-col items-center space-y-2">
    <div class="flex flex-wrap justify-center gap-4">
      <div class="flex items-center space-x-2">
        <div
          class="w-5 h-5 rounded-md bg-app-blue border border-gray-300"
        ></div>
        <span class="text-sm font-montserrat">{{
          t("booking.calendar.legend.low")
        }}</span>
      </div>
      <div class="flex items-center space-x-2">
        <div
          class="w-5 h-5 rounded-md bg-app-yellow border border-gray-300"
        ></div>
        <span class="text-sm font-montserrat"
          >{{ t("booking.calendar.legend.high") }}
        </span>
      </div>
      <div class="flex items-center space-x-2">
        <div
          class="w-5 h-5 rounded-md bg-gray-400 border border-gray-300"
        ></div>
        <span class="text-sm font-montserrat">{{
          t("booking.calendar.legend.booked")
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
