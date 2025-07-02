<template>
  <div class="h-screen p-4 bg-screen">
    <NuxtRouteAnnouncer />
    <TerminalWindow title="CCC" class="m-x-auto w-300 max-w-[90vw] container max-h-full">
      <p>HELLO</p>
      <p>HELLO</p>
      <p>HELLO</p>
      <p>HELLO</p>
      <template #footer>
        💡 Try: [<span class="text-link">ls</span>] [<span class="text-link">whoami</span>] or type "<span class="text-link">help</span>"
      </template>
    </TerminalWindow>
  </div>
</template>
<script setup lang="ts">
</script>
