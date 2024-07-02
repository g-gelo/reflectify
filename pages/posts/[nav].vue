<template>
  <div class="mt-96">
    <h1>Good Morning, You are in the {{ route.params.nav }}</h1>
    <h1 v-if="route.params.nav === 'Community'">
      Show Cart number {{ route.params.nav }}
    </h1>
    <h1 v-else-if="route.params.nav === 'My Space'">
      Show Cart number {{ route.params.nav }}
    </h1>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
