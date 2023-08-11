<template>
  <div>
    <div class="flex justify-start w-full bg-slate-100">
      <div class="flex-initial pointer-events-none text-gray-900 opacity-30 text-2xl mt-1 ml-2">
        <div v-if="!isTyping">
          <span class="i-mdi-plus"></span>
        </div>
        <div v-else-if="props.loading">
          <span class="i-mdi-dots-circle animate-spin"></span>
        </div>
        <div v-else>
          <span class="i-mdi-circle-outline"></span>
        </div>
      </div>
      <form @submit.prevent="handleSubmit" class="w-full">
        <input
          type="text"
          :placeholder="placeholder"
          @focus="onFocus"
          @blur="onBlur"
          v-model="task"
          class="block w-full text-sm text-gray-900 bg-slate-100 border-transparent focus:border-transparent focus:ring-0"
          required
        />
      </form>
    </div>
    <p class="text-left text-sm text-gray-400 mt-2">
      Press <span :class="{ 'text-red-400': !props.loading }">enter</span> to add task
    </p>
  </div>
</template>

<script setup>
const TYPING_PLACEHOLDER = 'Try typing "Submit report by Friday 3 PM"'
const DEFAULT_PLACEHOLDER = 'What\s your plan for today?'

import { ref } from 'vue'

const props = defineProps(['loading'])
const isTyping = ref(false)
const task = ref('')

const emit = defineEmits(['submit'])

const handleSubmit = (event) => {
  props.loading = true
  emit('submit', task.value)
}

const placeholder = ref(DEFAULT_PLACEHOLDER)

function onFocus() {
  isTyping.value = true
  placeholder.value = TYPING_PLACEHOLDER
}

function onBlur() {
  if (task.value) {
    isTyping.value = true
  } else {
    isTyping.value = false
  }

  placeholder.value = TYPING_PLACEHOLDER
}
</script>

<style></style>
