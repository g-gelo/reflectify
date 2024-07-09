<template>
  <div class="mt-20">
    <div
      v-if="route.params.nav === 'Community'"
      class="mt-20 flex justify-center m-4"
    >
      <PostCard />
    </div>
    <div
      v-else-if="route.params.nav === 'My Space'"
      class="mt-20 flex justify-center m-4"
    >
      <PostCard />
    </div>
    <button
      class="fixed bottom-4 right-4 rounded-full bg-white flex justify-center items-center shadow-lg hover:bg-gray-100 active:bg-gray-200 transition duration-200"
    >
      <img src="/icons/plus.svg" alt="post" class="size-14 p-2" />
    </button>
  </div>
</template>

<script setup>
definePageMeta({ auth: false });

const route = useRoute();
</script>

<style scoped>
/*  */
</style>
