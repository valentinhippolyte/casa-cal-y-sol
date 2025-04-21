<template>
  <footer class="bg-white shadow-sm p-6">
    <div class="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-12">
      <div class="sm:text-left lg:col-span-1">
        <h3 class="text-xl font-roca-light">{{ t("footer.title1") }}</h3>

        <p
          class="mt-4 flex items-center justify-start text-black gap-2 text-sm"
        >
          <MapPin class="w-5 h-5 text-black" />
          {{ t("footer.address") }}
        </p>

        <a
          href="mailto:casacalysol@gmail.com"
          class="mt-4 flex items-center justify-start text-black underline gap-2 hover:cursor-pointer text-sm"
        >
          <Mail class="w-5 h-5 text-black" />
          casacalysol@gmail.com
        </a>

        <p
          class="mt-4 flex items-center justify-start text-sm text-black gap-2"
        >
          <Save class="w-5 h-5 text-black" />
          {{ t("footer.registration") }} VFT/CA/07621
        </p>
      </div>

      <div class="lg:col-span-2 flex flex-col">
        <h3 class="text-xl font-roca-light">{{ t("footer.title2") }}</h3>
        <Maps
          class="w-full min-h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-md mt-4"
        />
      </div>
    </div>

    <div class="text-center mt-6">
      <div class="h-0.5 w-18 bg-app-red mt-10 mb-3 mx-auto"></div>
      <p class="text-sm text-black">&copy; 2025 Casa Caly y Sol.</p>
    </div>
  </footer>
</template>

<script setup>
import { Mail, MapPin, Save } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import Maps from "./Maps.vue";

const { t } = useI18n();
</script>
