<template>
  <div class="mb-3">
    <div class="flex items-center">
      <span class="text-prompt">{{ label }}=</span>
      <span class="text-bright mx-2">"</span>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :type="type"
        :name="name"
        :required="required"
        :placeholder="placeholder"
        class="flex-1 bg-transparent focus:outline-none focus:text-prompt border-b border-transparent focus:border-line transition-colors"
        :class="[
          hasError ? 'text-error border-error' : 'text-bright',
          inputClass
        ]"
      />
      <span class="text-bright">"</span>
    </div>
    <div class="mt-1 ml-0 text-error font-mono text-sm min-h-[1.25rem]">
      <span v-if="errorMessage"># ERROR: {{ errorMessage }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  modelValue: string
  type?: 'text' | 'email' | 'password' | 'tel' | 'url'
  name?: string
  required?: boolean
  placeholder?: string
  hasError?: boolean
  errorMessage?: string
  inputClass?: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
  placeholder: '__________',
  hasError: false,
  errorMessage: '',
  inputClass: ''
})

defineEmits<Emits>()
</script>