<template>
  <div
    class="space-y-5"
    @dragenter.prevent
    @dragover.prevent
    ref="ignoreRef"
    v-on-click-outside="onClickOutsideHandler"
  >
    <div
      class="bg-white h-100 w-full p-3 pl-4 shadow-gray-500/25 shadow-md rounded-sm flex justify-start space-x-3"
      v-for="(task, index) in data"
      draggable="true"
      @dragstart="startDrag($event, task)"
      @drop="onDrop($event, task)"
      :key="index"
    >
      <div class="flex-initial">
        <input
          type="checkbox"
          @click="markDone(task)"
          class="rounded-full outline-none text-gray-500 bg-gray-100 border-none focus:ring-0 focus:ring-offset-0"
          v-if="task.is_done"
          checked
        />
        <input
          type="checkbox"
          @click="markDone(task)"
          class="rounded-full outline-none text-gray-500 bg-gray-100 border-none focus:ring-0 focus:ring-offset-0"
          v-else
        />
      </div>
      <div class="flex-initial w-full">
        <span :class="{ 'line-through': task.is_done }" class="text-gray-600 text-sm break-all">{{ task.title }}</span>
      </div>
      <div class="flex-initial">
        <div class="flex justify-end space-x-2">
          <span @click="selectUser(index)">
            <img
              class="w-4 h-4 rounded-full"
              :src="task.assignee.avatar || '/image/noimage.png'"
              alt="Rounded avatar"
            />
          </span>
          <SelectUsers ref="user" />
          <span
            :class="{ 'i-mdi-star-outline': !task.is_important, 'i-mdi-star text-yellow-500': task.is_important }"
            class="text-gray-400 hover:text-yellow-500"
            @click="markImportant(task)"
          ></span>
          <span class="i-lucide-trash-2 text-gray-400 hover:text-red-500" @click="handleRemove(task.id)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
const props = defineProps(['data'])
const emit = defineEmits(['removeTask', 'markImportant', 'markDone', 'sortValue', 'selectUser'])

const task = ref('')
const user = ref([])
const ignoreElRef = ref()

let dragTask = {}
let dropTask = {}

function markDone(task) {
  task.is_done = !task.is_done
  emit('markDone', task)
}

function markImportant(task) {
  task.is_important = !task.is_important
  emit('markImportant', task)
}

function handleRemove(id) {
  emit('removeTask', id)
}

function startDrag(event, task) {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  dragTask = task

  let element = user.value

  element.map((i) => {
    if (i.$el.classList.contains('inline')) {
      i.$el.classList.add('hidden')
    }
  })
}

function onDrop(event, task) {
  dropTask = task
  emit('sortValue', [dragTask, dropTask])
}

function selectUser(index) {
  let element = user.value

  element.map((i) => {
    if (i.$el.classList.contains('inline')) {
      i.$el.classList.add('hidden')
    }
  })

  element = element[index].$el.classList

  if (element.contains('hidden')) {
    element.remove('hidden')
    element.add('inline')
  } else {
    element.remove('inline')
    element.add('hidden')
  }

  console.log(index)
}

const onClickOutsideHandler = [
  (ev) => {
    let element = user.value

    element.map((i) => {
      if (i.$el.classList.contains('inline')) {
        i.$el.classList.add('hidden')
      }
    })
  },
  { ignore: [ignoreElRef] }
]
</script>

<style></style>
