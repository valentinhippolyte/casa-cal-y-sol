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
      class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
      :class="isMenuOpen ? 'top-[80px] opacity-100' : 'top-[-400px] opacity-0'"
    >
      <li class="mx-4 my-6 md:my-0 text-xl hover:text-cyan-500 duration-200">
        <RouterLink to="/">Home</RouterLink>
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
</script>
