<script lang="ts" setup>
import type { PhotographyCollectionItem } from '@nuxt/content';
import { NuxtImg } from '#components';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger, VisuallyHidden,
} from 'reka-ui';

defineProps<{
  item: PhotographyCollectionItem;
}>()
</script>
<template>
  <DialogRoot>
    <DialogTrigger class="">
      <NuxtImg
        :as="NuxtImg"
        class="rounded-lg shadow-md w-[400px] h-[400px] cursor-pointer object-cover"
        width="400"
        height="400"
        alt="photo"
        fix="cover"
        :src="item.img"
      />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-black opacity-70 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogClose>
        <DialogContent class="fixed w-full h-full top-0 left-0 z-40 flex flex-col items-stretch justify-center">
          <NuxtImg
            class="object-contain max-h-[95vh]"
            :src="item.img"
          />
          <VisuallyHidden>
            <DialogTitle>{{item.date}}</DialogTitle>
          </VisuallyHidden>
          <DialogDescription v-if="item.description" class="h-[5vh] bg-black flex flex-col items-center justify-center">{{item.description}}</DialogDescription>
        </DialogContent>
      </DialogClose>
    </DialogPortal>
  </DialogRoot>
</template>
