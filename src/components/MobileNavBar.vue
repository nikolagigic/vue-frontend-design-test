<script setup lang="ts">
import {
  TicketIcon,
  VideoCameraIcon,
  UserIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/vue/24/solid'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="to-dark-brand-primary/0 from-dark-brand-primary/30 bg-gradient-to-t p-2 backdrop-blur-sm"
  >
    <div class="w-full rounded-[100px] bg-gradient-to-tr from-[#6CADDE]/0 to-[#6CADDE]/100 p-[1px]">
      <div class="flex w-full justify-between rounded-[100px] bg-dark-brand-bg-main px-5 py-2.5">
        <RouterLink class="text-dark-brand-primary" to="/dashboard/contests">
          <TicketIcon class="h-6 w-6" />
        </RouterLink>
        <RouterLink class="text-dark-brand-primary" to="/dashboard/shows">
          <VideoCameraIcon class="h-6 w-6" />
        </RouterLink>
        <RouterLink class="text-dark-brand-primary" to="/dashboard/hosts">
          <UserIcon class="h-6 w-6" />
        </RouterLink>
        <RouterLink class="text-dark-brand-primary" to="/dashboard/threads">
          <ChatBubbleLeftRightIcon class="h-6 w-6" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
