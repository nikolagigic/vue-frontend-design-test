<script setup lang="ts">
import NavLink from './NavLink.vue'
import {
  TicketIcon,
  VideoCameraIcon,
  UserIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/vue/24/solid'
</script>

<template>
  <nav class="flex flex-col space-y-4 p-9">
    <NavLink to="/contests" text="Contests" :Icon="TicketIcon" />
    <NavLink to="/shows" text="Shows" :Icon="VideoCameraIcon" />
    <NavLink to="/hosts" text="Hosts" :Icon="UserIcon" />
    <NavLink to="/threads" text="Threads" :Icon="ChatBubbleLeftRightIcon" />
  </nav>
</template>
