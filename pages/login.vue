<template>
  <div
    class="min-h-screen bg-cover bg-center relative"
    style="background-image: url('/img/login.jpg')"
  >
    <div
      class="absolute inset-0 bg-gradient-to-t from-gray-500 to-transparent"
    ></div>
    <div
      class="relative flex flex-col items-center justify-center min-h-screen"
    >
      <div class="text-center rounded-lg max-w-sm mb-6 text-white">
        <h1 class="text-8xl font-bold mb-4 font-imperial tracking-wider">
          Reflectify
        </h1>
        <div class="flex flex-col mt-10 font-gaegu text-2xl">
          <p class="flex justify-start">Personal Reflections,</p>
          <p class="flex justify-end">Shared Connections</p>
        </div>
      </div>
      <!-- Buttons container -->
      <div class="flex flex-col items-center mt-10 font-gaegu text-2xl">
        <button
          class="w-full h-20 border-2 mb-4 py-4 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-800 flex items-center justify-center"
        >
          Log in with Google
        </button>
        <button
          class="w-full h-20 border-2 py-4 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-800 flex items-center justify-center"
        >
          Log in with Facebook
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>

<style scoped>
/*  */
</style>
