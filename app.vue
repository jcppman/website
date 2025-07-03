<template>
  <div class="h-screen p-4 bg-screen">
    <NuxtRouteAnnouncer />
    <FlipableCard :flipped="isFlipped">
      <template #front>
        <TerminalWindow :title="terminalTitle" class="m-x-auto w-300 max-w-[90vw] max-h-full min-w-[375px]">
          <TheTerminal />
        </TerminalWindow>
      </template>
      <template #back>
        <TerminalWindow :title="terminalTitle" class="m-x-auto w-300 max-w-[90vw] max-h-full min-w-[375px]">
          <NuxtPage />
        </TerminalWindow>
      </template>
    </FlipableCard>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()

const isFlipped = computed(() => {
  return route.path !== '/'
})

const terminalTitle = computed(() => {
  switch (route.path) {
    case '/':
      return '~/Workspace'
    case '/contact':
      return '~/contact.sh'
    default:
      if (route.path.startsWith('/portfolio/')) {
        const section = route.params.section as string
        return `~/portfolio/${section}/`
      }
      return '~/Workspace'
  }
})
</script>
