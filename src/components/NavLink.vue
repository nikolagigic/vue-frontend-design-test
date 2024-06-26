<script setup lang="ts">
import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps<{
  to: string
  text: string
  Icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any, {}>
}>()
</script>

<template>
  <div class="flex items-center space-x-2">
    <Icon class="text-dark-brand-bg-tertiary/60 h-5 w-5" />
    <RouterLink :to="to">{{ text }}</RouterLink>
  </div>
</template>
