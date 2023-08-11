import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasksStore', () => {
  const stateTasksStore = ref({})

  function loadTasks(tasks: any) {
    stateTasksStore.value = tasks
  }
  return { loadTasks, stateTasksStore }
})
