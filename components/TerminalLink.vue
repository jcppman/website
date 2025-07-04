<script setup lang="ts">
defineProps<{
  link?: string;
  external?: boolean;
  to?: string;
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
  <NuxtLink
    v-else-if="to"
    class="text-link cursor-pointer"
    :to="to"
  ><slot /></NuxtLink>
  <a v-else class="text-link cursor-pointer" @click.prevent="$emit('click')"><slot /></a>
</template>
