<template>
  <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
    <div class="flex justify-between items-center">
      <span class="text-2xl cursor-pointer">
        <img class="h-10 inline" src="../assets/logo.png" />
        Casa Cal Y Sol
      </span>

      <!-- Burger Menu Icon -->
      <span class="text-3xl cursor-pointer mx-2 md:hidden block">
        <ion-icon
          :name="isMenuOpen ? 'close' : 'menu'"
          @click="toggleMenu"
        ></ion-icon>
      </span>
    </div>

    <ul
      class="md:flex md:items-center absolute md:relative bg-white w-full md:w-auto left-0 md:py-0 py-4 md:pl-0 pl-7 shadow-md md:shadow-none transition-all ease-in duration-200"
      :class="
        isMenuOpen
          ? 'top-[80px] opacity-100 z-50 h-screen w-full'
          : 'top-[-400px] opacity-0 z-[-1] md:opacity-100 md:static md:z-auto md:flex'
      "
    >
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        class="mx-4 my-6 md:my-0 text-xl hover:text-cyan-500 duration-200"
      >
        <RouterLink :to="link.to" @click="closeMenu">{{
          link.label
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Information", to: "/information" },
  { label: "Gallery", to: "/gallery" },
  { label: "Booking", to: "/booking" },
  { label: "Comments", to: "/comments" },
];
</script>
