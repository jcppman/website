<script lang="ts" setup>
const route = useRoute()
const { data: musicProjects } = await useAsyncData(route.path, () => {
  return queryCollection('music').order('year', 'DESC').all();
})

const formatMusicProject = (project: any) => {
  const tags = [
    ...(project.types?.map((type: string) => ({ text: type, variant: 'blue' })) ?? []),
    ...(project.roles?.map((role: string) => ({ text: role, variant: 'green' })) ?? []),
  ]

  return {
    ...project,
    tags,
    image: project.img,
    subtitle: project.artists?.join(', ') || '',
    title: `${project.title} (${project.year})`,
  }
}

definePageMeta({
  layout: 'back',
})
</script>

<template>
  <div class="p-2 sm:p-4">
    <TerminalHeader title="Music Portfolio" showBackButton />
    <div class="flex flex-col gap-2">
      <PortfolioCard
        v-for="project in musicProjects"
        :key="project.id"
        :title="formatMusicProject(project).title"
        :subtitle="formatMusicProject(project).subtitle"
        :image="formatMusicProject(project).image"
        :tags="formatMusicProject(project).tags"
        :clickable="false"
      >
        <template #actions>
          <TerminalButton
            v-for="link in project.links"
            :key="link.url"
            :text="link.title"
            :external="true"
            size="sm"
            :to="link.url"
          />
        </template>
      </PortfolioCard>
    </div>
  </div>
</template>
