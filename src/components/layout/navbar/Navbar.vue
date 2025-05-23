<template>
  <nav
    class="p-5 bg-app-bg shadow flex items-center justify-between lg:grid lg:grid-cols-3 relative z-20"
    role="navigation"
    aria-label="Main Navigation"
  >
    <!-- Mobile : Burger + Logo + BookButton -->
    <div class="flex items-center justify-between w-full lg:hidden">
      <!-- Burger -->
      <button class="text-3xl" @click="toggleMenu" aria-label="Toggle menu">
        <!-- Menu icon -->
        <Menu class="w-6 h-6 hover:cursor-pointer" v-if="!isMenuOpen" />
        <!-- Close icon -->
        <X class="w-6 h-6 hover:cursor-pointer" v-if="isMenuOpen" />
      </button>

      <!-- Logo centré -->
      <RouterLink
        :to="localeHomePath"
        aria-label="Home"
        class="absolute left-1/2 transform -translate-x-1/2"
      >
        <img
          class="h-13"
          :src="imageUrls.logo.src"
          :alt="t('alt_images.logo')"
          loading="eager"
        />
      </RouterLink>

      <!-- Book now -->
      <BookButton />
    </div>

    <!-- Desktop : Logo + texte à gauche -->
    <div class="hidden lg:flex items-center">
      <RouterLink
        :to="localeHomePath"
        aria-label="Home"
        class="flex items-center"
      >
        <img
          class="h-13"
          :src="imageUrls.logo.src"
          :alt="t('alt_images.logo')"
          loading="eager"
        />
        <h1 class="text-app-red font-roca ml-4 text-2xl leading-6">
          CASA <br />
          CAL Y SOL
        </h1>
      </RouterLink>
    </div>

    <!-- Desktop : NavLinks au centre -->
    <ul
      class="hidden lg:flex justify-center gap-8 font-montserrat text-md z-40"
    >
      <li v-for="(link, index) in navLinks" :key="index">
        <RouterLink :to="localePath(link.to)" :aria-label="link.ariaLabel">
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>

    <!-- Desktop : Lang + Book à droite avec trait -->
    <div class="hidden lg:flex items-center justify-end gap-4">
      <LanguageSwitcher />
      <div class="h-6 w-px bg-gray-300"></div>
      <BookButton />
    </div>

    <!-- Mobile menu déroulant -->
    <transition
      name="fade-slide"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <ul
        v-show="isMenuOpen"
        class="lg:hidden absolute top-[80px] left-0 w-full bg-app-bg shadow-md z-30 flex flex-col gap-4 p-6 text-md font-montserrat"
      >
        <li
          v-for="(link, index) in navLinks"
          :key="index"
          @click="toggleMenu(true)"
        >
          <RouterLink :to="localePath(link.to)" :aria-label="link.ariaLabel">{{
            link.label
          }}</RouterLink>
        </li>

        <!-- Switcher de langue (mobile only) -->
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

import { imageUrls } from "../../../assets/images/images.js";
import BookButton from "./BookButton.vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";

import { Menu, X } from "lucide-vue-next";

const { t } = useI18n();
const isMenuOpen = ref(false);

const localePath = (path) => {
  const route = useRoute();
  return `/${route.params.locale}${path}`;
};
const route = useRoute();

const localeHomePath = computed(() => `/${route.params.locale || "fr"}`);

const toggleMenu = (forceClose = false) => {
  isMenuOpen.value = !forceClose ? false : !isMenuOpen.value;
};

const navLinks = computed(() => [
  { label: t("navbar.home"), to: "/", ariaLabel: "Home" },
  {
    label: t("navbar.information"),
    to: "/information",
    ariaLabel: "Information",
  },
  { label: t("navbar.gallery"), to: "/gallery", ariaLabel: "Gallery" },
  { label: t("navbar.comments"), to: "/comments", ariaLabel: "Comments" },
]);
</script>
