<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :target="external ? '_blank' : undefined"
    :type="to ? undefined : type"
    :disabled="disabled || loading"
    :class="[
      'text-bright bg-transparent hover:bg-selection hover:text-prompt transition-colors focus:outline-none focus:ring-2 focus:ring-prompt focus:ring-offset-2 focus:ring-offset-screen disabled:opacity-50 disabled:cursor-not-allowed font-mono',
      size === 'sm' ? '' : 'px-6 py-2'
    ]"
  >
    [ {{loading ? loadingText : text}} ]
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'
interface Props {
  text: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  external?: boolean
  size?: 'sm' | 'md'
  to?: string
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  loading: false,
  loadingText: 'LOADING...',
  size: 'md'
})
</script>
