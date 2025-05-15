<template>
  <div id="techstack" class="p-6 md:p-12 lg:px-[10%] lg:py-16 pt-24 relative techstack-bg">
    <div class="relative z-[1]">
      <h1 class="text-[#FF6B00] text-3xl md:text-5xl mb-10 text-center" style="font-family: 'Sarpanch', sans-serif;">
        TECHSTACK
      </h1>
      <div class="grid md:grid-cols-3 gap-4 md:gap-6">
        <div class="card-container h-full" v-for="name in techNames" :key="name">
          <div class="tilt-card bg-[#223329]/50 backdrop-blur-sm rounded-xl p-4 border border-[#334b3a] h-full flex flex-col items-center justify-center">
            <div class="aspect-square mb-2 max-w-[100px] mx-auto flex items-center justify-center">
              <!-- Image placeholder -->
            </div>
            <h3 class="text-[#FF6B00] text-lg mb-1 text-center" style="font-family: 'Sarpanch', sans-serif;">{{ name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const techNames = [
  'Tamagui',
  'Solito',
  'Routing Video Tutorials',
  'Expo',
  'Next.js',
  'TanStack Query',
  'Zustand',
  'Vue.js',
  'Laravel',
  'MySQL',
  'React',
  'React Native',
  'Tailwind',
  'Expo Go',
  'Vuetify',
  'Pinia',
  'Quill Editor',
  'Vite'
];
</script>

<style scoped>
.card-container {
  perspective: 2000px;
}
.tilt-card {
  transform: perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1);
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
  will-change: transform;
}
.tilt-card:hover {
  transform: perspective(1000px) rotateX(0) rotateY(0) scale3d(1.02, 1.02, 1.02);
}
.techstack-bg {
    background: #091C1A;
    background: linear-gradient(179deg, rgba(9, 28, 26, 1) 0%, rgba(22, 36, 28, 1) 50%, rgba(21, 30, 24, 1) 100%);
    }
</style> 