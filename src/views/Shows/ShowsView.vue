<script setup lang="ts">
import ShowCard from './components/ShowCard.vue'
import BigShowCard from './components/BigShowCard.vue'
import { followingShows, allShows } from './mock-data'

const liveShows = followingShows.filter((show) => show.live)
const restOfShows = followingShows.filter((show) => !show.live)
</script>

<template>
  <main class="h-full w-full border-x border-gray-700/50">
    <div class="w-full overflow-hidden">
      <h3 class="p-4 uppercase"><span class="text-dark-basics-accent-red">live</span> now</h3>
      <div class="flex w-full space-x-5 overflow-auto px-4 pb-4">
        <ShowCard
          v-for="show in liveShows"
          :key="show.id"
          :id="show.id"
          :live="show.live"
          :title="show.title"
          :cast="show.cast"
          :watchers="show.watchers"
          :thumbnail="show.thumbnail"
        />
      </div>
    </div>
    <div class="w-full overflow-hidden">
      <h3 class="p-4 uppercase">following</h3>
      <div class="flex w-full space-x-5 overflow-auto px-4 pb-4">
        <ShowCard
          v-for="show in restOfShows"
          :key="show.id"
          :id="show.id"
          :live="show.live"
          :title="show.title"
          :cast="show.cast"
          :watchers="show.watchers"
          :thumbnail="show.thumbnail"
        />
      </div>
    </div>
    <div class="w-full overflow-hidden">
      <h3 class="p-4 uppercase">all shows</h3>
      <div class="flex w-full space-x-5 overflow-auto px-4 pb-4">
        <BigShowCard
          v-for="show in allShows"
          :key="show.id"
          :id="show.id"
          :live="show.live"
          :title="show.title"
          :cast="show.cast"
          :watchers="show.watchers"
          :thumbnail="show.thumbnail"
        />
      </div>
    </div>
  </main>
</template>
