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
        <TaskPlannerList
          :data="tasksList"
          @removeTask="onRemove"
          @markImportant="markImportant"
          @markDone="markDone"
          @sortValue="sortValue"
          @selectUser="selectUser"
        />
      </div>
      <div class="sticky bottom-0 w-full space-y-5 align-bottom bg-slate-50 mt-10">
        <TaskPlannerInput @submit="submit" :loading="isSubmitting" />
      </div>
    </div>
  </div>
</template>

<script setup>
const HTTP_STATUS_CREATED = 201

import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import debounce from 'lodash.debounce'

import { useTasksStore } from '~/store/tasks'

const { $fetchTasks, $createTask, $removeTask, $updateTask, $listen } = useNuxtApp()

const tasksStore = useTasksStore()

const { stateTasksStore } = storeToRefs(tasksStore)

const tasksList = ref({})
const isSubmitting = ref(false)
const filterButton = ref('ALL')
const search = ref('')

onMounted(
  debounce(() => {
    loadTaskList()
  }, 500)
)

async function filter(value) {
  if (value === 'ALL') {
    loadTaskList(`sortBy=sort&search=${search.value}`)
  } else if (value === 'IMPORTANT') {
    loadTaskList(`is_important=true&orderBy=sort&search=${search.value}`)
  } else if (value === 'DONE') {
    loadTaskList(`is_done=true&orderBy=sort&search=${search.value}`)
  }

  filterButton.value = value
}

async function loadTaskList(param) {
  await $fetchTasks(param)
  tasksList.value = stateTasksStore.value
}

async function submit(value) {
  console.log(value)
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

async function sortValue(data) {
  const dragItem = {
    id: data[1].id,
    sort: data[0].sort
  }

  await $updateTask(dragItem)

  const dropItem = {
    id: data[0].id,
    sort: data[1].sort
  }

  await $updateTask(dropItem)

  filter(filterButton.value)
}

function selectUser(index) {
  console.log(index)
}

$listen('task:reload', async () => {
  console.log('reload: task')
  loadTaskList(`sortBy=sort`)
})

watch(
  search,
  debounce((param) => {
    const is_important = filterButton.value == 'IMPORTANT' ? '&is_important=true' : ''
    const is_done = filterButton.value == 'DONE' ? '&is_done=true' : ''

    loadTaskList(`sortBy=sort${is_important}${is_done}&search=${param}`)
  }, 500)
)
</script>

<style></style>
