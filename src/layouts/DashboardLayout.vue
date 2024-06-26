<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import UserInfo from '@/components/UserInfo.vue'
</script>

<template>
  <div class="grid grid-cols-4">
    <NavBar />
    <div class="col-span-2 h-screen w-full">
      <RouterView />
    </div>
    <UserInfo />
  </div>
</template>
