<template>
  <nav
    class="p-5 bg-white shadow lg:flex lg:items-center lg:justify-between"
    role="navigation"
    aria-label="Main Navigation"
  >
    <div class="flex justify-between items-center">
      <RouterLink to="/" class="text-2xl cursor-pointer flex items-center">
        <img
          class="h-10 inline"
          src="../assets/logo.png"
          alt="Casa Cal Y Sol Logo"
        />
        Casa Cal Y Sol
      </RouterLink>

      <!-- Burger Menu Icon -->
      <span
        class="text-3xl cursor-pointer mx-2 lg:hidden block"
        role="button"
        aria-label="Toggle menu"
      >
        <ion-icon
          :name="isMenuOpen ? 'close' : 'menu'"
          @click="toggleMenu()"
        ></ion-icon>
      </span>
    </div>

    <ul
      class="lg:flex lg:items-center absolute lg:relative bg-white w-full lg:w-auto left-0 lg:py-0 py-4 lg:pl-0 pl-7 shadow-lg lg:shadow-none transition-all ease-in duration-200"
      :class="
        isMenuOpen
          ? 'top-[80px] opacity-100 z-50 h-screen w-full'
          : 'hidden lg:flex'
      "
    >
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        class="mx-4 my-6 lg:my-0 text-xl"
      >
        <RouterLink :to="link.to" @click="toggleMenu(true)">{{
          link.label
        }}</RouterLink>
      </li>
      <LanguageSwitcher />
    </ul>
  </nav>
</template>

<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import LanguageSwitcher from "../components/LanguageSwitcher.vue";

const { t } = useI18n();

const isMenuOpen = ref(false);

const toggleMenu = (forceClose = false) => {
  isMenuOpen.value = forceClose ? false : !isMenuOpen.value;
};

// Utilisation de computed pour que la traduction change dynamiquement
const navLinks = computed(() => [
  { label: t("navbar.home"), to: "/" },
  { label: t("navbar.information"), to: "/information" },
  { label: t("navbar.gallery"), to: "/gallery" },
  { label: t("navbar.booking"), to: "/booking" },
  { label: t("navbar.comments"), to: "/comments" },
]);
</script>
