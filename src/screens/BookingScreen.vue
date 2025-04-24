<template>
  <div class="flex flex-col items-center">
    <h2 class="text-2xl font-roca-light mb-8 mt-10">
      {{ t("booking.title") }}
    </h2>
    <Calendar />

    <BookingForm />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import BookingForm from "../components/booking/BookingForm.vue";
import Calendar from "../components/booking/Calendar.vue";

const { t } = useI18n();
</script>
