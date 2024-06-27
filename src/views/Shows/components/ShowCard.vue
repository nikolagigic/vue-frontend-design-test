<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import CoinAward from '@/components/CoinAward.vue'
import { EyeIcon } from '@heroicons/vue/24/outline'
import { type ShowProps } from '../types'

defineProps<ShowProps>()
</script>

<template>
  <div
    class="h-60 w-[230px] shrink-0 rounded-[24px] bg-gradient-to-tr from-[#6CADDE]/0 to-[#6CADDE]/100 p-[1px]"
  >
    <div class="h-full w-full space-y-2 rounded-[24px] bg-gray-900">
      <div class="relative">
        <img :src="thumbnail" class="h-[150px] w-[230px]" />
        <div class="absolute right-0 top-2">
          <CoinAward :coins="10" />
        </div>
        <div
          v-if="live"
          class="absolute left-4 top-3 flex items-center space-x-2 rounded-md bg-dark-basics-accent-red px-2"
        >
          <div class="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          <span class="text-sm font-medium">LIVE</span>
        </div>
      </div>
      <div class="flex flex-col space-y-5 px-3.5">
        <div class="flex w-full justify-between">
          <h5 class="text-white">{{ title }}</h5>
          <div class="flex items-center space-x-1 text-sm font-bold text-dark-basics-accent-red">
            <EyeIcon class="h-5 w-5" />
            <span>{{ watchers }}</span>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <UserCircleIcon class="h-5 w-5 text-white" />
          <span class="text-sm font-medium">{{ cast }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
