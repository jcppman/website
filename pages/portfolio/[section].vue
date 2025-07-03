<template>
  <div class="terminal-text">
    <div class="text-center text-body max-w-2xl mx-auto">
      <h1 class="text-3xl mb-6 text-bright">{{ sectionTitle }}</h1>
      <div class="space-y-4 text-left">
        <p v-for="content in sectionContent" :key="content" class="text-body">
          {{ content }}
        </p>
      </div>
      <div class="mt-8">
        <button 
          @click="navigateTo('/')"
          class="px-6 py-2 bg-accent text-screen rounded hover:bg-opacity-80 transition-colors"
        >
          Back to Terminal
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const section = route.params.section as string;

const sectionTitle = computed(() => {
  switch (section) {
    case 'music':
      return 'Music Portfolio';
    case 'photography':
      return 'Photography Portfolio';
    case 'coding':
      return 'Coding Projects';
    default:
      return 'Portfolio';
  }
});

const sectionContent = computed(() => {
  switch (section) {
    case 'music':
      return [
        'Music production and composition work spanning multiple genres.',
        'Electronic music, ambient soundscapes, and experimental compositions.',
        'Collaborative projects with various artists and producers.'
      ];
    case 'photography':
      return [
        'Visual storytelling through photography.',
        'Portrait, landscape, and street photography.',
        'Capturing moments and emotions through the lens.'
      ];
    case 'coding':
      return [
        'Full-stack web development projects.',
        'Frontend frameworks: Vue.js, React, Angular.',
        'Backend technologies: Node.js, Python, cloud infrastructure.'
      ];
    default:
      return ['Portfolio section content'];
  }
});
</script>