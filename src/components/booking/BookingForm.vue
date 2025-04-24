<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px] font-montserrat">
      <form @submit.prevent="handleSubmit">
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="firstName" class="mb-3 block text-base font-medium">
                {{ t("booking.form.fistName") }}
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                v-model="formData.firstName"
                required
                class="w-full rounded-md border bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label
                for="departureDate"
                class="mb-3 block text-base font-medium"
              >
                {{ t("booking.form.lastName") }}
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                v-model="formData.lastName"
                required
                class="w-full rounded-md border bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div class="mb-5">
          <label for="email" class="mb-3 block text-base font-medium">
            {{ t("booking.form.email") }}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="formData.email"
            required
            class="w-full rounded-md border bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md"
          />
        </div>
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="arrivalDate" class="mb-3 block text-base font-medium">
                {{ t("booking.form.arrivalDate") }}
              </label>
              <input
                type="date"
                name="arrivalDate"
                id="arrivalDate"
                v-model="formData.arrivalDate"
                required
                class="w-full rounded-md border bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label
                for="departureDate"
                class="mb-3 block text-base font-medium"
              >
                {{ t("booking.form.departureDate") }}
              </label>
              <input
                type="date"
                name="departureDate"
                id="departureDate"
                v-model="formData.departureDate"
                required
                class="w-full rounded-md border bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="adults" class="mb-3 block text-base font-medium">
                {{ t("booking.form.number_adults") }}
              </label>
              <select
                name="adults"
                id="adults"
                v-model="formData.adults"
                required
                class="w-full rounded-md border bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md"
              >
                <option v-for="n in 9" :key="n" :value="n - 1">
                  {{ n - 1 }}
                </option>
              </select>
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="children" class="mb-3 block text-base font-medium">
                {{ t("booking.form.number_children") }}
              </label>
              <select
                name="children"
                id="children"
                v-model="formData.children"
                required
                class="w-full rounded-md border bg-white py-3 px-6 text-base font-medium outline-none focus:shadow-md"
              >
                <option v-for="n in 8" :key="n" :value="n - 1">
                  {{ n - 1 }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <button
            class="hover:shadow-form w-full rounded-md bg-app-red py-3 px-8 text-center text-base font-semibold text-white outline-none cursor-pointer font-montserrat"
            type="submit"
          >
            {{ t("booking.form.button") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { createBooking } from "../../services/apiService.js";

const { t } = useI18n();

const formData = ref({
  lastName: "",
  firstName: "",
  email: "",
  arrivalDate: "",
  departureDate: "",
  adults: 0,
  children: 0,
});

const handleSubmit = async () => {
  try {
    const response = await createBooking(formData.value);
    console.log("Réservation succed:", response);
    alert("Reservation done!");
  } catch (error) {
    console.error("Error during the reservation:", error);
    alert("Error during the reservation.");
  }
};
</script>
