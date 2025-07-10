<script lang="ts" setup>
defineProps<{
  title: string;
}>();
defineSlots<{
  default: any;
}>()
</script>
<template>
  <div class="sm:shadow-card bg-screen sm:border-2 sm:border-line rounded-lg flex flex-col text-md">
    <div class="hidden sm:flex bg-chrome rounded-t-lg border-b border-line flex flex-row items-center justify-between py-2">
      <div class="flex items-center gap-2 pl-2">
        <div class="control bg-error"></div>
        <div class="control bg-warning"></div>
        <div class="control bg-success"></div>
      </div>
      <div class="text-center">{{title}}</div>
      <div class="flex items-center gap-2 pr-2 opacity-0">
        <div class="control bg-success"></div>
        <div class="control bg-warning"></div>
        <div class="control bg-error"></div>
      </div>
    </div>
    <div class="sm:px-2 pb-2 overflow-x-hidden overflow-y-auto terminal-text">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.control {
  @apply w-3 h-3 rounded-full;
}
</style>
