<!-- src/components/CalendarMonth.vue -->
<template>
  <div class="w-full">
    <h3 class="text-xl font-semibold mb-2 text-center">
      {{ monthName }} {{ year }}
    </h3>
    <div class="grid grid-cols-7 gap-2">
      <!-- Jours vides pour aligner le début -->
      <div
        v-for="n in firstDayOfMonth"
        :key="'empty-' + n"
        class="h-16 border"
      ></div>

      <!-- Les jours -->
      <div
        v-for="day in daysInMonth"
        :key="day.date"
        class="border h-16 flex items-center justify-center"
        :class="{
          'bg-gray-400 text-white': isReserved(day.date),
        }"
      >
        {{ day.day }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const props = defineProps({
  year: Number,
  month: Number,
  bookings: Array,
});

// Pour l'affichage du nom du mois
const monthName = computed(() => {
  return months[props.month] || "";
});

// Génère les jours du mois
const daysInMonth = computed(() => {
  const days = [];
  const daysCount = new Date(props.year, props.month + 1, 0).getDate();
  for (let i = 1; i <= daysCount; i++) {
    const date = new Date(props.year, props.month, i);
    days.push({
      day: i,
      date: date.toISOString().split("T")[0],
    });
  }
  return days;
});

// Calcule quel jour commence le mois (0 = dimanche, 1 = lundi, etc.)
const firstDayOfMonth = computed(() => {
  const d = new Date(props.year, props.month, 1);
  return d.getDay();
});

function isReserved(dateStr) {
  return props.bookings.some((booking) => {
    const start = new Date(booking.start);
    const end = new Date(booking.end);
    const target = new Date(dateStr);
    return target >= start && target < end; // Inclus start, exclus end
  });
}
</script>
