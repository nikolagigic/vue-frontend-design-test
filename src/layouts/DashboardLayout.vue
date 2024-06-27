<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import MobileNavBar from '@/components/MobileNavBar.vue'
import UserInfo from '@/components/UserInfo.vue'
</script>

<template>
  <div class="hidden grid-cols-4 sm:grid">
    <NavBar />
    <div class="col-span-2 h-screen w-full">
      <RouterView />
    </div>
    <UserInfo />
  </div>
  <div class="relative w-full sm:hidden">
    <div class="absolute right-0 top-0">
      <UserInfo />
    </div>
    <RouterView />
    <div class="sticky bottom-0">
      <MobileNavBar />
    </div>
  </div>
</template>
