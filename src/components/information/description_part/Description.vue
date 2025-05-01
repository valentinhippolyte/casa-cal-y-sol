<template>
  <div
    class="bg-app-bg flex flex-col justify-center items-center w-full px-4 pb-10 lg:pb-35"
  >
    <div class="h-1.5 w-18 bg-app-red mt-10 mb-3"></div>
    <div>
      <h2 class="text-2xl font-roca-light mb-4 text-center">
        {{ t("information.description.title") }}
      </h2>
    </div>
    <div class="relative w-full max-w-2xl">
      <img
        :src="imageUrls.house_description_desktop.src"
        :alt="imageUrls.house_description_desktop.alt"
        class="w-full max-w-2xl hidden lg:block"
      />
      <img
        :src="imageUrls.house_description_mobile.src"
        :alt="imageUrls.house_description_mobile.alt"
        class="w-full max-w-2xl block lg:hidden"
      />

      <!-- Popover living_room button  -->
      <PopoverButton top="72%" left="11%" topLg="77%" leftLg="-15%">
        <template #title
          >{{ t("information.description.living_room_button.1.title") }} <br />
          {{ t("information.description.living_room_button.2.title") }}
        </template>
        <template #content>
          <p>
            <span class="font-bold"
              >{{
                t("information.description.living_room_button.1.title")
              }}:</span
            >
            {{ t("information.description.living_room_button.1.text") }}
          </p>
          <p>
            <span class="font-bold"
              >{{
                t("information.description.living_room_button.2.title")
              }}:</span
            >
            {{ t("information.description.living_room_button.2.text") }}
          </p>
        </template>
      </PopoverButton>

      <!-- Popover kitchen button  -->
      <PopoverButton top="70%" left="45%" topLg="100%" leftLg="43%">
        <template #title
          >{{ t("information.description.kitchen_button.1.title") }} <br />
          {{ t("information.description.kitchen_button.2.title") }}<br />
          {{ t("information.description.kitchen_button.3.title") }}
        </template>
        <template #content>
          <p>
            <span class="font-bold"
              >{{ t("information.description.kitchen_button.1.title") }}:</span
            >
            {{ t("information.description.kitchen_button.1.text") }}
          </p>
          <p>
            <span class="font-bold"
              >{{ t("information.description.kitchen_button.2.title") }}:</span
            >
            {{ t("information.description.kitchen_button.2.text") }}
          </p>
          <p>
            <span class="font-bold"
              >{{ t("information.description.kitchen_button.3.title") }}:</span
            >
            {{ t("information.description.kitchen_button.3.text") }}
          </p>
        </template>
      </PopoverButton>

      <!-- Popover patio button  -->
      <PopoverButton top="70%" left="83%" topLg="64%" leftLg="102%">
        <template #title
          >{{ t("information.description.patio_button.title") }} <br />
        </template>
        <template #content>
          <p>
            {{ t("information.description.patio_button.text") }}
          </p>
        </template>
      </PopoverButton>

      <!-- Popover first_floor button  -->
      <PopoverButton top="40%" left="40%" topLg="39%" leftLg="-24%">
        <template #title>
          {{ t("information.description.first_floor_button.1.title") }} <br />
          {{ t("information.description.first_floor_button.2.title") }} <br />
          {{ t("information.description.first_floor_button.3.desktop") }}
        </template>
        <template #content>
          <p>
            <span class="font-bold"
              >{{
                t("information.description.first_floor_button.1.title")
              }}:</span
            >
            {{ t("information.description.first_floor_button.1.text") }}
          </p>
          <p>
            <span class="font-bold"
              >{{
                t("information.description.first_floor_button.2.title")
              }}:</span
            >
            {{ t("information.description.first_floor_button.2.text") }}
          </p>
          <p>
            <span class="font-bold"
              >{{
                t("information.description.first_floor_button.3.title")
              }}:</span
            >
            {{ t("information.description.first_floor_button.3.text") }}
          </p>
          <p>
            <span class="font-bold"
              >{{
                t("information.description.first_floor_button.4.title")
              }}:</span
            >
            {{ t("information.description.first_floor_button.4.text") }}
          </p>
          <p>
            <span class="font-bold"
              >{{
                t("information.description.first_floor_button.5.title")
              }}:</span
            >
            {{ t("information.description.first_floor_button.5.text") }}
          </p>
        </template>
      </PopoverButton>

      <!-- Popover terrace1 button  -->
      <PopoverButton top="48%" left="81%" topLg="41%" leftLg="103%">
        <template #title
          >{{ t("information.description.terrace1_button.title") }} <br />
        </template>
        <template #content>
          <p>
            {{ t("information.description.terrace1_button.text") }}
          </p>
        </template>
      </PopoverButton>

      <!-- Popover pool button  -->
      <PopoverButton top="25%" left="78%" topLg="4%" leftLg="94%">
        <template #title
          >{{ t("information.description.pool_button.title") }} <br />
        </template>
        <template #content>
          <p>
            {{ t("information.description.pool_button.text") }}
          </p>
        </template>
      </PopoverButton>

      <!-- Popover rooftop button  -->
      <PopoverButton top="17%" left="25%" topLg="0%" leftLg="-9%">
        <template #title
          >{{ t("information.description.rooftop_button.title") }} <br />
        </template>
        <template #content>
          <p>
            {{ t("information.description.rooftop_button.text") }}
          </p>
        </template>
      </PopoverButton>

      <!-- Popover global button  -->
      <PopoverButton
        top="0%"
        left="90% "
        topLg="-15%"
        leftLg="100%"
        isGlobal="true"
      >
        <template #content>
          <p>
            {{ t("information.description.global_button.1") }}
          </p>
          <p>
            {{ t("information.description.global_button.2") }}
          </p>
          <p>
            {{ t("information.description.global_button.3") }}
          </p>
        </template>
      </PopoverButton>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrls } from "../../../assets/images/images.js";
import PopoverButton from "./PopoverButton.vue";

const { t } = useI18n();
</script>
