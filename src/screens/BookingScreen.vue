<template>
  <Motion
    :initial="{ opacity: 0, y: 30 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.5 }"
  >
    <div class="flex flex-col items-center">
      <h2 class="text-2xl font-roca-light mb-8 mt-10">
        {{ t("booking.title") }}
      </h2>
      <SeasonCards />
      <Calendar />
      <AvaibilityCalendar />

      <BookingForm />
    </div>
  </Motion>
</template>

<script setup>
import { Motion } from "@motionone/vue";
import { useI18n } from "vue-i18n";
import AvaibilityCalendar from "../components/booking/AvaibilityCalendar.vue";
import BookingForm from "../components/booking/BookingForm.vue";
import Calendar from "../components/booking/Calendar.vue";
import SeasonCards from "../components/booking/SeasonCards.vue";

const { t } = useI18n();
</script>
