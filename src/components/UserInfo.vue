<script setup lang="ts"></script>

<template>
  <main class="flex w-full justify-end p-5">
    <button class="group relative h-14 w-14 overflow-hidden rounded-full">
      <div
        class="absolute hidden h-full w-full bg-black/50 group-hover:block group-active:bg-black/30"
      />
      <img src="/user-image.png" />
      <div
        class="absolute right-2 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-dark-basics-accent-red p-1 text-xs font-bold text-white"
      >
        8
      </div>
    </button>
  </main>
</template>
