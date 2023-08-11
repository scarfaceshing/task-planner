import axios from 'axios'
const API_URL = 'https://63906a8d65ff41831112cdd1.mockapi.io/api/v1'

import { useTasksStore } from '~/store/tasks'

export default defineNuxtPlugin((nuxtApp) => {
  const tasksStore = useTasksStore()
  const { loadTasks } = tasksStore

  const fetchTasks = async (param: string = '?sortBy=sort') => {
    const response = await axios.get(`${API_URL}/tasks${param}`)
    loadTasks(response.data)
    return response
  }

  const createTask = async (task: string) => {
    const response = await axios.post(`${API_URL}/tasks`, {
      title: task,
      created_at: Date().toString(),
      is_done: false,
      is_important: false,
      sort: 1,
      id: Math.floor(Math.random() * 10000)
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

  nuxtApp.provide('fetchTasks', (param: string) => fetchTasks(param))
  nuxtApp.provide('updateTask', (task: any) => updateTask(task))
  nuxtApp.provide('removeTask', (id: number) => removeTask(id))
  nuxtApp.provide('createTask', (task: string) => createTask(task))
})
