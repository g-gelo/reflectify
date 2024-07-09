<template>
  <div>
    Prisma ORM Data from the database, received
    {{ examples?.length || 0 }} records:
    <pre>{{ examples }}</pre>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
const { data: examples } = useFetch("/api/example");
</script>
