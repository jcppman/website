<script setup lang="ts">
const logo = `
   /\\ /\\
  ((ovo))
  ():::()
  ██████ ██   ██ ██████  ██ ███████ ███████ ████████     ██    ██ ██    ██
 ██ VVV  ██   ██ ██   ██ ██ ██      ██         ██         ██  ██  ██    ██
 ██      ███████ ██████  ██ █████   ███████    ██          ████   ██    ██
 ██      ██   ██ ██   ██ ██ ██           ██    ██           ██    ██    ██
  ██████ ██   ██ ██   ██ ██ ███████ ███████    ██           ██     ██████

`
const logoText = `
   /\\ /\\
  ((ovo))
  ():::()
 CHRIEST YU
    VVV

`
</script>
<template>
  <TerminalWindow title="~/Workspace" class="m-x-auto w-300 max-w-[90vw] max-h-full min-w-[375px]">
    <div class="logo hidden sm:block" v-html="logo"></div>
    <div class="logo sm:hidden" v-html="logoText"></div>
    <p>HELLO</p>
    <p>HELLO</p>
    <p>HELLO</p>
    <p>HELLO</p>
    <template #footer>
      💡 Try: [<TerminalLink>ls</TerminalLink>] [<TerminalLink>whoami</TerminalLink>] or type "<TerminalLink>help</TerminalLink>"
    </template>
  </TerminalWindow>
</template>
<style scoped>
.logo {
  white-space: pre;
  color: #b58900;
}
</style>
