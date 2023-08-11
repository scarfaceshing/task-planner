<template>
  <div class="md:container md:mx-auto">
    <div class="grid grid-cols-1 md:w-3/4 md:mx-auto sm:w-full pt-8">
      <div class="grid grid-cols-1 w-full space-y-5">
        <div class="flex justify-between">
          <div>
            <h1 class="text-4xl text-left pb-5 text-gray-600 text-semibold">Task Planner</h1>
          </div>
          <div class="flex">
            <button
              type="button"
              class="text-gray-600 rounded-lg w-12 h-7 m-auto text-sm"
              :class="{ 'bg-gray-300': filterButton === 'ALL' }"
              @click="filter('ALL')"
            >
              All
            </button>
            <button
              type="button"
              class="text-gray-600 rounded-lg w-24 m-auto py-1 text-sm m-auto"
              :class="{ 'bg-gray-300': filterButton === 'IMPORTANT' }"
              @click="filter('IMPORTANT')"
            >
              Important
            </button>
            <button
              type="button"
              class="text-gray-600 rounded-lg w-12 m-auto py-1 text-sm m-auto"
              :class="{ 'bg-gray-300': filterButton === 'DONE' }"
              @click="filter('DONE')"
            >
              Done
            </button>
          </div>
        </div>
        <div class="flex">
          <TaskPlannerSearchInput v-model="search" />
        </div>
        <TaskPlannerList :data="tasksList" @removeTask="onRemove" @markImportant="markImportant" @markDone="markDone" />
      </div>
      <div class="sticky bottom-0 w-full space-y-5 align-bottom bg-slate-50 mt-10">
        <TaskPlannerInput @submit="submit" :loading="isSubmitting" />
      </div>
    </div>
  </div>
</template>

<script setup>
const HTTP_STATUS_CREATED = 201

import { ref } from 'vue'
import { useTasksStore } from '~/store/tasks'
import { storeToRefs } from 'pinia'

const { $fetchTasks, $createTask, $removeTask, $updateTask } = useNuxtApp()
const tasksStore = useTasksStore()
const { stateTasksStore } = storeToRefs(tasksStore)

const tasksList = ref({})
const isSubmitting = ref(false)
const filterButton = ref('ALL')
const search = ref('')

onMounted(() => {
  loadTaskList()
})

async function filter(value) {
  if (value === 'ALL') {
    loadTaskList()
  } else if (value === 'IMPORTANT') {
    loadTaskList('?is_important=true')
  } else if (value === 'DONE') {
    loadTaskList('?is_done=true')
  }

  filterButton.value = value
}

async function loadTaskList(param) {
  await $fetchTasks(param)
  tasksList.value = stateTasksStore.value
}

async function submit(value) {
  isSubmitting.value = true
  const response = await $createTask(value)

  if (response.status === HTTP_STATUS_CREATED) {
    loadTaskList()
    isSubmitting.value = false
  }
}

async function onRemove(id) {
  if (window.confirm(`Are you sure to delete! ${id}`)) {
    await $removeTask(id)
    loadTaskList()
  }
}

async function markImportant(task) {
  await $updateTask(task)
}

async function markDone(task) {
  await $updateTask(task)
}
</script>

<style></style>
