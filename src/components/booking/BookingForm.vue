<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-lg font-montserrat">
      <div class="flex flex-col items-center justify-center mb-4">
        <div class="h-1.5 w-18 bg-app-red mb-3"></div>
        <h2 class="text-2xl font-roca-light mb-4">
          {{ t("booking.form.title") }}
        </h2>
      </div>

      <AlertMessage :message="alertMessage" :type="alertType" />

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
                <option v-for="n in 7" :key="n" :value="n">
                  {{ n }}
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
                <option v-for="n in childrenOptions" :key="n" :value="n">
                  {{ n }}
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
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { createBooking } from "../../services/apiService.js";
import AlertMessage from "../booking/AlertMessage.vue";

const { t } = useI18n();

const formData = ref({
  lastName: "",
  firstName: "",
  email: "",
  arrivalDate: "",
  departureDate: "",
  adults: 1,
  children: 0,
});
// 👇 max children = 8 - adults
const childrenOptions = computed(() => {
  const count = 7 - formData.value.adults;
  return Array.from({ length: count + 1 }, (_, i) => i);
});

const handleSubmit = async () => {
  alertMessage.value = "";
  try {
    const response = await createBooking(formData.value);

    if (response.status >= 200 && response.status < 300) {
      alertType.value = "success";
      alertMessage.value = t("booking.form.successMessage");
    } else if (response.status >= 400 && response.status < 500) {
      alertType.value = "error";
      alertMessage.value = t("booking.form.errorMessage");

      console.warn("Client error:", response.data?.validation_messages);
    } else if (response.status >= 500) {
      alertType.value = "error";
      alertMessage.value = t("booking.form.serverError");
      console.error("Server error:", response.data);
    }
  } catch (error) {
    console.error("Network or unexpected error:", error);
    alertType.value = "error";
    alertMessage.value = t("booking.form.serverError");
  }
};

const alertMessage = ref("");
const alertType = ref("success");
</script>
