<script setup lang="ts">
defineProps<{
  flipped?: boolean;
}>();

defineSlots<{
  front: any;
  back: any;
}>();
</script>

<template>
  <div class="flipable-card-container">
    <div class="flipable-card" :class="{ 'flipped': flipped }">
      <div class="card-face card-front">
        <slot name="front" />
      </div>
      <div class="card-face card-back">
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.flipable-card-container {
  perspective: 1000px;
  width: 100%;
  height: 100%;
}

.flipable-card {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
}

.flipable-card.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.card-front {
  z-index: 2;
}

.card-back {
  transform: rotateY(180deg);
  z-index: 1;
}
</style>