<template>
  <div class="flex justify-start w-full bg-white rounded-full border border-gray-200 h-8">
    <div class="flex-initial pointer-events-none text-gray-900 opacity-30 text-2xl mt-0.5 ml-2">
      <span class="i-mdi-search text-gray-400"></span>
    </div>
    <form class="w-full">
      <input
        type="text"
        placeholder="Search"
        v-model="search"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full placeholder-gray-400 text-gray-500 border-transparent focus:border-transparent focus:ring-0 h-7 rounded-full"
      />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
</script>

<style></style>
