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
  <div class="border border-line rounded-lg overflow-hidden flex flex-row items-center">
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
    <NuxtImg v-if="image" :src="image" :alt="title" fit="contain" width="192" height="192" class="flex-shrink-0"/>
  </div>
</template>
