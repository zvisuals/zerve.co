<template>
  <div id="techstack" class="p-6 md:p-12 lg:px-[10%] lg:py-16 pt-24 relative techstack-bg">
    <div class="relative z-[1]">
      <h1 class="text-[#FF6B00] text-3xl md:text-5xl mb-10 text-center" style="font-family: 'Sarpanch', sans-serif;">
        TECHSTACK
      </h1>
      <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
        <div class="card-container h-full" v-for="name in techNames" :key="name">
          <div class="tilt-card bg-[#223329]/50 backdrop-blur-sm rounded-xl p-2 sm:p-3 md:p-4 border border-[#334b3a] h-full flex flex-col items-center justify-center">
            <div class="aspect-square mb-2 max-w-[70px] sm:max-w-[80px] md:max-w-[100px] mx-auto flex items-center justify-center">
              <img v-if="techLogos[name]" :src="techLogos[name]" :alt="name + ' logo'" class="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain" />
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
  'Vuetify',
  'Pinia',
  'Quill Editor',
  'Vite'
];

const techLogos = {
  'Tamagui': new URL('../assets/techstack/Tamagui.svg', import.meta.url).href,
  'Solito': new URL('../assets/techstack/Solito.svg', import.meta.url).href,
  'Expo': new URL('../assets/techstack/Expo.svg', import.meta.url).href,
  'Next.js': new URL('../assets/techstack/Next.svg', import.meta.url).href,
  'TanStack Query': new URL('../assets/techstack/Tanstack.svg', import.meta.url).href,
  'Zustand': new URL('../assets/techstack/Zustand.svg', import.meta.url).href,
  'Vue.js': new URL('../assets/techstack/Vue.svg', import.meta.url).href,
  'Laravel': new URL('../assets/techstack/Laravel.svg', import.meta.url).href,
  'MySQL': new URL('../assets/techstack/Mysql.svg', import.meta.url).href,
  'React': new URL('../assets/techstack/React.svg', import.meta.url).href,
  'React Native': new URL('../assets/techstack/ReactNative.svg', import.meta.url).href,
  'Tailwind': new URL('../assets/techstack/Tailwind.svg', import.meta.url).href,
  'Vuetify': new URL('../assets/techstack/Vuetify.svg', import.meta.url).href,
  'Pinia': new URL('../assets/techstack/Pinia.svg', import.meta.url).href,
  'Quill Editor': new URL('../assets/techstack/Quill.svg', import.meta.url).href,
  'Vite': new URL('../assets/techstack/Vite.svg', import.meta.url).href
};
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.tilt-card:hover {
  transform: perspective(1000px) rotateX(0) rotateY(0) scale3d(1.02, 1.02, 1.02);
}
.techstack-bg {
    background: #091C1A;
    background: linear-gradient(179deg, rgba(9, 28, 26, 1) 0%, rgba(22, 36, 28, 1) 50%, rgba(21, 30, 24, 1) 100%);
    }
</style> 