<template>
  <div>
    <ul class="text-gray-500">
      <li
        v-for="menu in props.menus_a"
        :key="menu"
        class="flex justify-between py-2 px-3 rounded-md rounded-md"
        :class="{ 'bg-slate-200/50 text-blue-500': menu.isSelected }"
      >
        <div class="flex space-x-5 text-sm">
          <span v-if="menu.isSelected" :class="menu.icon" class="mt-1 text-2xl"></span>
          <span v-else :class="menu.icon" class="mt-1 text-2xl text-gray-400"></span>
          <p class="my-auto">{{ menu.title }}</p>
        </div>
        <template v-if="menu.isSelected">
          <span class="i-mdi-chevron-right text-xl my-auto text-end"></span>
        </template>
      </li>
    </ul>
    <div class="border-b pb-4 mb-4"></div>
    <ul>
      <li
        v-for="menu in props.menus_b"
        :key="menu"
        class="flex justify-between py-2 px-3 rounded-md py-2 px-3 rounded-md text-sm"
        :class="{ 'bg-slate-200/50 text-blue-500': menu.isSelected }"
      >
        <div class="flex space-x-5">
          <span v-if="menu.isSelected" :class="menu.icon" class="mt-1 text-2xl"></span>
          <span v-else :class="menu.icon" class="mt-1 text-2xl text-gray-400"></span>
          <p class="my-auto text-gray-500">
            {{ menu.title }}
            <span v-if="menu.pending" class="bg-red-400 ml-2 rounded-sm px-1.5 text-white text-sm">2</span>
          </p>
        </div>
        <template v-if="menu.isSelected">
          <span class="i-mdi-chevron-right text-xl my-auto text-end"></span>
        </template>
      </li>
    </ul>
    <div class="mt-2 text-sm">
      <div class="text-sm text-gray-400">Copyright 2018 - 2023. All Rights Reserved</div>
      <div class="text-blue-700 text-sm">
        <a class="hover:underline">Terms of Use</a> &nbsp;<a class="hover:underline">Privacy Policy</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['menus_a', 'menus_b'])
</script>

<style></style>
