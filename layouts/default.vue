<template>
  <div>
    <header>
      <div class="flex justify-center">
        <div class="flex justify-start grow p-4">
          <img
            src="/img/login.jpg"
            alt="profile"
            class="size-10 rounded-full"
          />
        </div>
        <div class="flex justify-center grow pt-2">
          <img src="/img/logo.png" alt="logo" class="size-14" />
        </div>
        <div class="flex justify-end grow p-4">
          <img src="/icons/settings.svg" alt="settings" class="size-10" />
        </div>
      </div>
      <nav class="flex justify-around bg-gray-800 text-white py-4 fixed w-full">
        <NuxtLink
          to="/posts/Community"
          class="flex-1 text-center py-2 px-4 hover:bg-gray-700"
        >
          Community
        </NuxtLink>
        <NuxtLink
          to="/posts/My Space"
          class="flex-1 text-center py-2 px-4 hover:bg-gray-700"
        >
          My Space
        </NuxtLink>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
//
</script>

<style scoped>
/*  */
</style>
