<template>
  <div
    v-if="message"
    :class="[
      'p-4 rounded-md mb-6 text-sm font-medium font-montserrat',
      type === 'success'
        ? 'bg-green-100 text-green-800'
        : 'bg-red-100 text-red-800',
    ]"
  >
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: String,
  type: {
    type: String,
    default: "success", // 'error' or 'success'
  },
});
</script>
