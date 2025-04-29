<template>
  <div
    class="w-full p-4 rounded-2xl bg-app-bg shadow-md border border-app-red-100"
  >
    <h3
      class="text-2xl font-semibold mb-6 text-center text-app-red font-montserrat"
    >
      {{ monthName }} {{ year }}
    </h3>
    <div class="grid grid-cols-7 gap-3">
      <!-- Jours vides pour aligner -->
      <div
        v-for="n in firstDayOfMonth"
        :key="'empty-' + n"
        class="aspect-square border border-app-red-100 rounded-md bg-white"
      ></div>

      <!-- Les jours -->
      <div
        v-for="day in daysInMonth"
        :key="day.date"
        class="aspect-square flex items-center justify-center rounded-md text-lg font-montserrat border border-app-red-100 transition-colors duration-300"
        :class="{
          'bg-app-blue text-app-blue-50':
            !isReserved(day.date) && !isHighSeason(day.date),
          'bg-app-yellow text-app-yellow-50': isHighSeason(day.date),
          'bg-gray-400 text-app-red-50': isReserved(day.date),
        }"
      >
        {{ day.day }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const monthsByLocale = {
  fr: [
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
  ],
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  es: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
};

const months = computed(() => {
  return monthsByLocale[locale.value] || monthsByLocale["en"];
});

const props = defineProps({
  year: Number,
  month: Number,
  bookings: Array,
});

// Pour l'affichage du nom du mois
const monthName = computed(() => {
  return months.value[props.month] || "";
});

// Le reste de ton code ne bouge pas :
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

const firstDayOfMonth = computed(() => {
  const d = new Date(props.year, props.month, 1);
  return d.getDay();
});

function isReserved(dateStr) {
  return props.bookings.some((booking) => {
    const start = new Date(booking.start);
    const end = new Date(booking.end);
    const target = new Date(dateStr);
    return target >= start && target < end;
  });
}

function isHighSeason(dateStr) {
  const date = new Date(dateStr);

  const month = date.getMonth() + 1;
  const day = date.getDate();

  const isChristmasHighSeason =
    (month === 12 && day >= 5 && day <= 8) || (month === 12 && day >= 24);

  const isSummerHighSeason = month >= 6 && month <= 9;

  return isChristmasHighSeason || isSummerHighSeason;
}
</script>

<style scoped>
/* Style pour les différentes saisons */
.bg-red-200 {
  background-color: #f87171; /* Haute saison : rouge clair */
}

.bg-green-200 {
  background-color: #a7f3d0; /* Basse saison : vert clair */
}

.bg-gray-500 {
  background-color: #6b7280; /* Jour réservé : gris */
}

.bg-gray-400 {
  background-color: #9ca3af; /* Jour réservé mais avec un fond plus clair */
}
</style>
