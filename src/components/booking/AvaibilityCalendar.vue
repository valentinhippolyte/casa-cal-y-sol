<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Calendrier des réservations</h2>

    <div v-if="loading" class="text-gray-500">Chargement du calendrier...</div>
    <div v-else-if="error" class="text-red-500">Erreur de chargement</div>
    <div v-else>
      <!-- Boutons navigation mois -->
      <div class="flex items-center justify-center space-x-4 mb-4">
        <button
          @click="prevMonth"
          class="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          &lt;
        </button>
        <div class="text-lg font-semibold">
          {{ months[currentMonth] }} {{ currentYear }}
        </div>
        <button
          @click="nextMonth"
          class="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
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
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { months } from "../../utils/months.js"; // pour l'affichage dans le bouton du mois
import CalendarMonth from "../booking/CalendarMonth.vue";

const bookings = ref([]);
const loading = ref(true);
const error = ref(false);

const now = new Date();
const currentYear = ref(now.getFullYear());
const currentMonth = ref(now.getMonth());

async function fetchBookings() {
  try {
    const response = await fetch("http://localhost:3000/api/booked-dates");
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
