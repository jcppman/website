<script lang="ts" setup>
const route = useRoute()
const { data: projects } = await useAsyncData(route.path, () => {
  return queryCollection('videography').order('date', 'DESC').all();
})

definePageMeta({
  layout: 'back',
})
function toColorTags(tags: string[]) {
  return tags.map(tag => {
    return {
      text: tag,
      color: 'blue',
    }
  })
}
watchEffect(() => {
  console.log('proejts', projects.value);
});
</script>

<template>
  <div class="p-2 sm:p-4">
    <TerminalHeader title="Video Portfolio" showBackButton />
    <div class="flex flex-col gap-2">
      <PortfolioCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title ?? ''"
        :tags="toColorTags(project.tags)"
        :clickable="false"
      >
        <ContentRenderer :value="project" class="line-height-[2] pb-4" />
        <ScriptYouTubePlayer :video-id="project.link.videoId" trigger="visible" />
      </PortfolioCard>
    </div>
  </div>
</template>
