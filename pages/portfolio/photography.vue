<script lang="ts" setup>
const route = useRoute()
const { data: photos } = await useAsyncData(route.path, () => {
  return queryCollection('photography').order('date', 'DESC').all();
})

definePageMeta({
  layout: 'back',
})
</script>

<template>
  <div class="p-4">
    <TerminalHeader title="Music Portfolio" showBackButton />
    <div class="flex flex-col gap-2">
    </div>
  </div>
</template>
