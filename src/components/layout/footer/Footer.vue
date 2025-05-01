<template>
  <footer class="bg-app-red shadow-sm p-6 text-white">
    <div class="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-12">
      <div class="flex flex-col gap-8">
        <div class="sm:text-left lg:col-span-1">
          <h3 class="text-xl font-roca-light">{{ t("footer.title1") }}</h3>

          <p
            class="mt-4 flex items-center justify-start text-white gap-2 text-sm"
          >
            <MapPin class="w-5 h-5 text-white" />
            {{ t("footer.address") }}
          </p>

          <a
            href="mailto:casacalysol@gmail.com"
            class="mt-4 flex items-center justify-start text-white underline gap-2 hover:cursor-pointer text-sm"
            aria-label="Email"
          >
            <Mail class="w-5 h-5 text-white" />
            casacalysol@gmail.com
          </a>

          <p
            class="mt-4 flex items-center justify-start text-sm text-white gap-2"
          >
            <Save class="w-5 h-5 text-white" />
            {{ t("footer.registration") }} VFT/CA/07621
          </p>
        </div>
        <div>
          <h3 class="text-xl font-roca-light">{{ t("footer.title3") }}</h3>

          <a
            href="https://www.facebook.com/profile.php?id=61550858274141"
            target="_blank"
            class="mt-4 flex items-center justify-start text-white underline gap-2 hover:cursor-pointer text-sm"
            aria-label="Facebook"
          >
            <img
              :src="imageUrls.facebook.src"
              :alt="imageUrls.facebook.alt"
              class="size-7"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <div class="lg:col-span-2 flex flex-col">
        <h3 class="text-xl font-roca-light">{{ t("footer.title2") }}</h3>
        <Maps
          class="w-full min-h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-md mt-4"
        />
      </div>
    </div>

    <div class="text-center mt-6">
      <div class="h-0.5 w-18 bg-white mt-10 mb-3 mx-auto"></div>
      <p class="text-sm text-white">&copy; 2025 Casa Cal y Sol.</p>
    </div>
  </footer>
</template>

<script setup>
import { Mail, MapPin, Save } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import { imageUrls } from "../../../assets/images/images.js";
import Maps from "./Maps.vue";

const { t } = useI18n();
</script>
