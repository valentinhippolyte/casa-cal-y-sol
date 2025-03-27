<template>
  <div class="container mx-auto px-4 py-6">
    <h2 class="text-2xl font-bold mb-4">{{ t("booking.title") }}</h2>

    <Calendar />

    <BookingForm />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import BookingForm from "../components/BookingForm.vue";
import Calendar from "../components/Calendar.vue";

const { t, locale } = useI18n();
</script>
