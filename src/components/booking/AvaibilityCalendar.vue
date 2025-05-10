<template>
  <div>
    <div class="flex flex-col items-center">
      <div class="h-1.5 w-18 bg-app-red mb-3"></div>
      <h2 class="text-2xl font-roca-light mb-4">
        {{ t("booking.calendar.title") }}
      </h2>
    </div>

    <div v-if="loading" class="text-gray-500">
      {{ t("booking.calendar.loading") }}
    </div>
    <div v-else-if="error" class="text-red-500">
      {{ t("booking.calendar.error") }}
    </div>
    <div v-else>
      <!-- Boutons navigation mois -->
      <div class="flex items-center justify-center space-x-4 mb-4">
        <button
          @click="prevMonth"
          class="px-4 py-2 bg-transparent hover:cursor-pointer text-app-red text-2xl font-montserrat"
        >
          &lt;
        </button>
        <div class="text-lg font-semibold font-montserrat">
          {{ months[currentMonth] }} {{ currentYear }}
        </div>
        <button
          @click="nextMonth"
          class="px-4 py-2 bg-transparent hover:cursor-pointer text-app-red text-2xl font-montserrat"
        >
          &gt;
        </button>
      </div>

      <!-- Mobile : 1 seul mois -->
      <div class="block md:hidden">
        <CalendarMonth
          :year="currentYear"
          :month="currentMonth"
          :bookings="bookings"
        />
      </div>

      <!-- Desktop : 2 mois -->
      <div class="hidden md:flex md:space-x-8">
        <CalendarMonth
          :year="currentYear"
          :month="currentMonth"
          :bookings="bookings"
        />
        <CalendarMonth
          :year="currentMonth === 11 ? currentYear + 1 : currentYear"
          :month="(currentMonth + 1) % 12"
          :bookings="bookings"
        />
      </div>

      <!-- Légende -->
      <CalendarLegend class="mt-8" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useMonths } from "../../utils/months.js";
import CalendarMonth from "../booking/CalendarMonth.vue";
import CalendarLegend from "./CalendarLegend.vue";

const { getMonths } = useMonths();

const months = computed(() => getMonths()); // pour l'affichage dans le bouton du mois

const { t } = useI18n();

const bookings = ref([]);
const loading = ref(true);
const error = ref(false);

const now = new Date();
const currentYear = ref(now.getFullYear());
const currentMonth = ref(now.getMonth());

async function fetchBookings() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/booked-dates`
    );
    if (!response.ok) {
      throw new Error("Erreur API");
    }
    bookings.value = await response.json();
  } catch (err) {
    console.error("Erreur fetch bookings:", err);
    error.value = true;
  } finally {
    loading.value = false;
  }
}

// --- Fonctions navigation
function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
}

onMounted(() => {
  fetchBookings();
});
</script>
