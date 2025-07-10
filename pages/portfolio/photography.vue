<script lang="ts" setup>
import { useElementVisibility } from '@vueuse/core';
const loader = ref<HTMLElement>();
const loaderVisible = useElementVisibility(loader);
const PAGE_SIZE = 10;

const loading = ref(false);
const hasMore = ref(true);

function getPhotos(c?: string) {
  let query = queryCollection('photography');
  if (c) {
    console.log('query with cursor', c);
    query = query.where('cursor', '<', c);
  }
  return query
    .order('cursor', 'DESC')
    .limit(PAGE_SIZE).all();
}

const { data: initialPhotos } = await useAsyncData('photography', () => getPhotos());

if (!initialPhotos.value || initialPhotos.value.length < PAGE_SIZE) {
  hasMore.value = false;
}

const photos = ref(initialPhotos.value || []);

watchEffect(() => {
  console.log('photos', photos.value);
})

watch([loaderVisible, photos], async () => {
  if (!loaderVisible.value || !photos.value || photos.value.length === 0 || loading.value) {
    return;
  }

  const lastCursor = photos.value[photos.value.length - 1].cursor;
  try {
    const newPhotos = await getPhotos(lastCursor);
    photos.value.push(...newPhotos);
    if (newPhotos.length < PAGE_SIZE) {
      hasMore.value = false;
    }
  } finally {
    loading.value = false;
  }
}, { immediate: false });

definePageMeta({
  layout: 'back',
})
</script>
<template>
  <div class="sm:p-4">
    <TerminalHeader title="Photography" showBackButton />
    <div class="flex flex-col items-stretch justify-start">
      <p class="text-bright text-center my-6">
        Gears: Sony A6700 & Richo GR3X
      </p>
      <div class="grid justify-center photo-grid gap-2">
        <GalleryItem v-for="photo in photos" :key="photo.id" :item="photo" />
        <div ref="loader"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.photo-grid {
  grid-template-columns: repeat(auto-fill, 400px);
}
</style>
