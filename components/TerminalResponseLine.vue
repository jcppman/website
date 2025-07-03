<script setup lang="ts">
import type { Response } from "~/components/terminal-types";

defineProps<{
  response: Response;
}>();
</script>

<template>
  <span>
    <template v-for="(content, index) in response" :key="index">
      <template v-if="typeof content === 'string'">
        {{ content }}
      </template>
      <TerminalLink v-else :link="content.link" @click="content.onClick" :external="content.external">
        {{ content.text }}
      </TerminalLink>
    </template>
  </span>
</template>
