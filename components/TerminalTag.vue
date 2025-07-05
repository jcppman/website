<script setup lang="ts">
interface Props {
  text: string
  variant?: 'green' | 'blue' | 'purple' | 'orange' | 'default'
  small?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  small: false
})
</script>

<template>
  <span
    class="inline-block font-mono font-medium rounded text-xs uppercase tracking-wide whitespace-nowrap border transition-all duration-200"
    :class="[
      small ? 'px-1.5 py-0.5 text-xs' : 'px-2 py-1 text-sm',
      {
        'bg-green-500/10 text-green-500 border-green-500': variant === 'green',
        'bg-blue-500/10 text-blue-500 border-blue-500': variant === 'blue',
        'bg-purple-500/10 text-purple-500 border-purple-500': variant === 'purple',
        'bg-orange-500/10 text-orange-500 border-orange-500': variant === 'orange',
        'bg-gray-500/10 text-gray-500 border-gray-500': variant === 'default'
      }
    ]"
  >
    {{ text }}
  </span>
</template>
