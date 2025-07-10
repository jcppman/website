<template>
  <div class="h-screen p-1 sm:p-4 bg-screen relative">
    <TerminalWindow :title="terminalTitle" class="m-x-auto sm:w-[90vw] max-h-full min-w-[375px]">
      <slot />
    </TerminalWindow>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const terminalTitle = computed(() => {
  switch (route.path) {
    case '/':
      return '~/Workspace'
    case '/contact':
      return '~/contact.sh'
    default:
      if (route.path.startsWith('/portfolio/')) {
        return `~${route.path}`;
      }
      return '~/Workspace'
  }
})
</script>
