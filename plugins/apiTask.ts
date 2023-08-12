import axios from 'axios'
const API_URL = 'https://63906a8d65ff41831112cdd1.mockapi.io/api/v1'

import { useTasksStore } from '~/store/tasks'
import { useUsersStore } from '~/store/users'

export default defineNuxtPlugin((nuxtApp) => {
  const tasksStore = useTasksStore()
  const usersStore = useUsersStore()

  const { loadTasks } = tasksStore
  const { loadUsers } = usersStore

  const fetchTasks = async (param: string = 'sortBy=sort') => {
    const response = await axios.get(`${API_URL}/tasks?${param}`)
    loadTasks(response.data)
    return response
  }

  const createTask = async (task: string) => {
    const response = await axios.post(`${API_URL}/tasks`, {
      title: task,
      is_done: false,
      is_important: false
    })

    return response
  }

  const removeTask = async (id: number) => {
    const response = await axios.delete(`${API_URL}/tasks/${id}`)
    return response
  }

  const updateTask = async (task: any) => {
    const response = await axios.put(`${API_URL}/tasks/${task.id}`, task)
    return response
  }

  const fetchUsers = async (param: string = '') => {
    const response = await axios.get(`${API_URL}/users${param}`)
    loadUsers(response.data)
    return response
  }

  nuxtApp.provide('fetchUsers', (param: string) => fetchUsers(param))
  nuxtApp.provide('fetchTasks', (param: string) => fetchTasks(param))
  nuxtApp.provide('updateTask', (task: any) => updateTask(task))
  nuxtApp.provide('removeTask', (id: number) => removeTask(id))
  nuxtApp.provide('createTask', (task: string) => createTask(task))
})
