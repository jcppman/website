<script lang="ts" setup>
defineProps<{
  title: string;
}>();
defineSlots<{
  default: any;
  footer: any;
}>()
</script>
<template>
  <div class="bg-screen border-2 border-line rounded-lg flex flex-col text-[10px] md:text-[12px]">
    <div class="bg-chrome rounded-t-lg border-b border-line flex flex-row items-center justify-between">
      <div class="flex items-center gap-2 pl-2">
        <div class="control bg-success"></div>
        <div class="control bg-warning"></div>
        <div class="control bg-error"></div>
      </div>
      <div class="text-center">{{title}}</div>
      <div class="flex items-center gap-2 pr-2 opacity-0">
        <div class="control bg-success"></div>
        <div class="control bg-warning"></div>
        <div class="control bg-error"></div>
      </div>
    </div>
    <div class="px-4 pt-2 overflow-y-auto terminal-text">
      <slot />
    </div>
    <div class="px-4 pb-2"><slot name="footer" /></div>
  </div>
</template>

<style scoped>
.control {
  @apply w-3 h-3 rounded-full;
}
.terminal-text {
}
</style>
