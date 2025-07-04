<template>
  <div class="mb-6">
    <div class="flex items-start">
      <span class="text-prompt">{{ label }}=</span>
      <span class="text-bright mx-2">"""</span>
    </div>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      :name="name"
      :required="required"
      :rows="rows"
      :placeholder="placeholder"
      class="w-full m-2 mr-4 p-2 bg-transparent text-bright focus:outline-none focus:text-prompt border border-transparent focus:border-line rounded transition-colors resize-none"
      :class="[
        hasError ? 'text-error border-error' : '',
        textareaClass
      ]"
    ></textarea>
    <div class="text-bright">"""</div>
    <div class="mt-1 ml-0 text-error font-mono text-sm min-h-[1.25rem]">
      <span v-if="errorMessage"># ERROR: {{ errorMessage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  modelValue: string
  name?: string
  required?: boolean
  rows?: number
  placeholder?: string
  hasError?: boolean
  errorMessage?: string
  textareaClass?: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

withDefaults(defineProps<Props>(), {
  required: false,
  rows: 6,
  placeholder: 'Write your message here.\nYou can write multiple lines.',
  hasError: false,
  errorMessage: '',
  textareaClass: ''
})

defineEmits<Emits>()
</script>
