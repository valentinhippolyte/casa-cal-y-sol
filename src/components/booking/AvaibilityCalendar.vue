<!-- src/components/Calendar.vue -->
<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Calendrier des réservations</h2>

    <div v-if="loading" class="text-gray-500">Chargement du calendrier...</div>
    <div v-else-if="error" class="text-red-500">Erreur de chargement</div>
    <div v-else>
      <ul class="space-y-2">
        <li v-for="booking in bookings" :key="booking.start">
          Réservé du {{ formatDate(booking.start) }} au
          {{ formatDate(booking.end) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const bookings = ref([]);
const loading = ref(true);
const error = ref(false);

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

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR");
}

onMounted(() => {
  fetchBookings();
});
</script>
