<template>
  <div class="h-screen w-screen grid place-items-center">
    <div class="text-center grid grid-rows-1 space-y-2 w-full">
      <h1 class="text-4xl text-center font-semibold text-gray-600">Welcome to Task Planner</h1>
      <p class="text-center text-gray-600 text-base">
        Get things done with your day, a list that<br />refreshes every day.
      </p>
      <div class="md:w-1/2 md:ml-auto md:mr-auto sm:mx-5">
        <div class="relative pt-10">
          <TaskPlannerInput @submit="submit" :loading="isSubmitting" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const HTTP_STATUS_CREATED = 201

import { ref } from 'vue'
const { $createTask } = useNuxtApp()

const isSubmitting = ref(false)

async function submit(value) {
  isSubmitting.value = true
  const response = await $createTask(value)

  if (response.status === HTTP_STATUS_CREATED) {
    isSubmitting.value = false

    await navigateTo('/task_page')
  }
}
</script>

<style></style>
