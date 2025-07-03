<script setup lang="ts">
const props = defineProps<{
  link?: string;
  external?: boolean;
  to?: string;
}>();
defineEmits(['click'])

const handleClick = () => {
  if (props.to) {
    navigateTo(props.to);
  }
}
</script>
<template>
  <a
    v-if="link"
    class="text-link cursor-pointer"
    :target="external ? '_blank' : undefined"
    :href="link"
  ><slot /></a>
  <a 
    v-else-if="to"
    class="text-link cursor-pointer" 
    @click.prevent="handleClick"
  ><slot /></a>
  <a v-else class="text-link cursor-pointer" @click.prevent="$emit('click')"><slot /></a>
</template>
