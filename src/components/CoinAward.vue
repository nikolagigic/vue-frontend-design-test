<script setup lang="ts">
defineProps({
  coins: Number
})
</script>

<template>
  <div class="relative flex items-center justify-center">
    <img src="/coin/inner.png" />
    <img src="/coin/outter.png" />
    <div class="absolute left-1.5">
      {{ coins }}
    </div>
  </div>
</template>
