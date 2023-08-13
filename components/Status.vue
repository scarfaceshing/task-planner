<template>
  <div class="grid grid-flow-col auto-cols-max">
    <div class="bg-gray-200 my-auto rounded-full w-8 h-8 mr-2">
      <span :class="props.icon" class="text-2xl mt-1 ml-1 text-gray-500"></span>
    </div>
    <div class="pt-2 w-32">
      <div>
        <p class="text-sm text-gray-800 font-normal">{{ props.title }}</p>
      </div>
      <div class="bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div :class="`bg-${props.color}`" class="h-1.5 rounded-full" :style="`width:${props.percent}%`"></div>
      </div>
    </div>
    <div :class="`text-${props.color}`" class="mt-auto mb-3 pl-2 text-sm">{{ props.percent }}%</div>
  </div>
</template>

<script setup>
const props = defineProps(['icon', 'title', 'percent', 'color'])
</script>

<style></style>
