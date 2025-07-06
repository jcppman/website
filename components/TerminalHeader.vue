<script lang="ts" setup>
defineProps<{
  title?: string;
  showBackButton?: boolean;
}>()
</script>
<template>
  <div class="text-center py-2 sm:py-4 sticky top-0 bg-screen relative">
    <TerminalLink to="/" class="text-sm absolute left-0 top-1/2 transform-translate-y-[-50%]">
      ← Back
    </TerminalLink>
    <h1 class="text-lg sm:text-4xl font-semibold text-prompt font-mono">
      {{title}}
    </h1>
  </div>
</template>
