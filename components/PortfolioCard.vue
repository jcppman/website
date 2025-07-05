<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  image?: string
  description?: string
  tags?: Array<{ text: string; variant?: 'role' | 'type' | 'year' | 'artist' | 'default' }>
}

withDefaults(defineProps<Props>(), {})

</script>

<template>
  <div class="border border-gray-600/50 rounded-lg overflow-hidden flex flex-row items-center">
    <div class="p-5 flex-grow-1">
      <div class="mb-4">
        <h3 class="text-xl font-semibold text-prompt mb-2 font-mono">{{ title }}</h3>
        <p v-if="subtitle" class="text-bright text-sm font-mono">{{ subtitle }}</p>
      </div>

      <div v-if="tags && tags.length" class="flex flex-wrap gap-2 mb-4">
        <TerminalTag
          v-for="tag in tags"
          :key="tag.text"
          :text="tag.text"
          :variant="tag.variant || 'default'"
          small
        />
      </div>

      <p v-if="description" class="text-bright text-sm leading-relaxed mb-4">
        {{ description }}
      </p>

      <div class="flex gap-2 items-center">
        <slot name="actions" />
      </div>
    </div>
    <div v-if="image" class="relative h-48 w-48 overflow-hidden flex-shrink-0">
      <NuxtImg :src="image" :alt="title" class="w-full h-full object-contain" />
    </div>
  </div>
</template>
