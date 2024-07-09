<template>
  <div>
    <div>I'm protected! Session data: {{ data }}</div>
    <v-btn class="rounded-xl shadow-xl p-2 m-2" @click="signOut()">
      sign out
    </v-btn>
  </div>
</template>

<script setup>
definePageMeta({ layout: false });
const { data, signOut } = useAuth();
</script>
