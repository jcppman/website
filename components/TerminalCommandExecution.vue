<script setup lang="ts">
import TerminalResponseLine from "~/components/TerminalResponseLine.vue";
import type { Response } from "~/components/terminal-types";

interface Command {
  user: string;
  location: string;
  command: string;
  response: Response[];
}

interface Props {
  line: Command;
}

defineProps<Props>();

function prompt(user: string, location: string): string {
  return `${user}:${location}$ `;
}

</script>

<template>
  <div class="execution py-1">
    <span class="text-prompt">{{ prompt(line.user, line.location) }}</span>
    <span class="text-command"><span>{{ line.command }}</span></span>
    <template v-if="line.response.length > 0">
      <br />
      <div class="py-2 whitespace-pre-wrap line-height-[1.2]">
        <div v-for="(response, index) in line.response" :key="index" >
          <TerminalResponseLine :response="response" />
        </div>
      </div>
    </template>
  </div>
</template>
<style scoped>
.execution:last-child .text-command:after {
  content: "O";
  display: inline-block;
  color: var(--solarized-prompt);
  background-color: var(--solarized-prompt);
  animation: blink 1s step-end infinite;
}
</style>
