<script setup lang="ts">
defineProps<{
  link?: string;
  external?: boolean;
}>();
defineEmits(['click'])
</script>
<template>
  <a
    v-if="link"
    class="text-link cursor-pointer"
    :target="external ? '_blank' : undefined"
    :href="link"
  ><slot /></a>
  <a v-else class="text-link cursor-pointer" @click.prevent="$emit('click')"><slot /></a>
</template>
