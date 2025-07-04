<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    class="px-6 py-2 border-2 border-line text-bright bg-transparent hover:bg-selection hover:text-prompt transition-colors focus:outline-none focus:ring-2 focus:ring-prompt focus:ring-offset-2 focus:ring-offset-screen disabled:opacity-50 disabled:cursor-not-allowed font-mono"
  >
    <span v-if="loading">[ {{ loadingText }} ]</span>
    <span v-else>[ {{ text }} ]</span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  text: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  loadingText?: string
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  loading: false,
  loadingText: 'LOADING...'
})
</script>