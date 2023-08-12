import { defineStore } from 'pinia'

export const useUsersStore = defineStore('usersStore', () => {
  const stateUsersStore = ref({})

  function loadUsers(tasks: any) {
    stateUsersStore.value = tasks
  }

  return { loadUsers, stateUsersStore }
})
