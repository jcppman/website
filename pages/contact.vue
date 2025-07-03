<template>
  <div class="terminal-text">
    <div class="text-center text-body max-w-2xl mx-auto">
      <h1 class="text-3xl mb-6 text-bright">Contact Information</h1>
      <div class="space-y-6 text-left">
        <div class="space-y-2">
          <h2 class="text-xl text-accent">Email</h2>
          <p class="text-body">chriest.yu@example.com</p>
        </div>
        <div class="space-y-2">
          <h2 class="text-xl text-accent">Social Media</h2>
          <div class="space-y-1">
            <p class="text-body">
              <a href="https://github.com/jcppman" target="_blank" class="text-link hover:underline">
                GitHub: github.com/jcppman
              </a>
            </p>
            <p class="text-body">
              <a href="https://instagram.com/chriest.yu" target="_blank" class="text-link hover:underline">
                Instagram: @chriest.yu
              </a>
            </p>
            <p class="text-body">
              <a href="https://linkedin.com/in/chriestyu" target="_blank" class="text-link hover:underline">
                LinkedIn: linkedin.com/in/chriestyu
              </a>
            </p>
          </div>
        </div>
        <div class="space-y-2">
          <h2 class="text-xl text-accent">Availability</h2>
          <p class="text-body">Open for new opportunities and collaborations</p>
        </div>
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
// Contact page content
</script>
