<template>
  <div
    class="hidden absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700 h-80 overflow-auto px-2"
  >
    <div class="sticky top-0 w-full bg-white p-2">
      <div class="flex justify-start border rounded-md border-gray-200 h-8">
        <div class="flex-initial pointer-events-none text-gray-900 opacity-30 text-2xl mt-0.5 ml-1">
          <span v-if="isLoading" class="i-mdi-dots-circle animate-spin"></span>
          <span v-else class="i-mdi-search text-gray-400"></span>
        </div>
        <form class="w-full -ml-3">
          <input
            type="text"
            v-model="search"
            placeholder="Search Team Member"
            class="w-full placeholder-gray-400 text-gray-500 border-transparent focus:border-transparent focus:ring-0 rounded-md h-7"
          />
        </form>
      </div>
    </div>
    <div class="pt-2">
      <ul>
        <li
          v-for="user in users"
          :key="user"
          class="flex justify-start space-x-3 space-y-2 hover:bg-blue-200"
          @click="pickedUser(user)"
        >
          <div class="my-auto">
            <img class="w-6 h-6 rounded-full" :src="user.avatar || '/image/noimage.png'" alt="Rounded avatar" />
          </div>
          <div class="h-full pb-2">
            <p class="self-start">{{ user.name }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useUsersStore } from '~/store/users'
import { storeToRefs } from 'pinia'
import debounce from 'lodash.debounce'

const props = defineProps(['taskId'])
const emit = defineEmits(['reloadImage'])

const { $fetchUsers, $assignUser, $event } = useNuxtApp()

const usersStore = useUsersStore()
const { stateUsersStore } = storeToRefs(usersStore)

const users = ref({})
const search = ref('')
const isLoading = ref(false)

async function loadUsers() {
  await $fetchUsers()
  users.value = stateUsersStore.value
}

watch(
  search,
  debounce(async (value) => {
    isLoading.value = true
    await $fetchUsers(`?search=${value}`)
    users.value = stateUsersStore.value
    isLoading.value = false
  }, 500)
)

function pickedUser(user) {
  $assignUser(props.taskId, user)
  emit('reloadImage', props.taskId, user)
}

onMounted(
  debounce(() => {
    loadUsers()
  }, 500)
)
</script>

<style></style>
