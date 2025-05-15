<template>
  <div id="home" class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
    <!-- Parallax Background -->
    <div class="parallax-bg absolute inset-0 w-full h-[120%] z-0">
      <img src="../assets/MTHomeBG.svg" loading="lazy" alt="Background" class="w-full h-full object-cover" />
    </div>
    
    <!-- Firefly Video Overlay -->
    <div class="absolute inset-0 z-[1] mix-blend-screen">
      <video 
        class="w-full h-full object-cover"
        autoplay 
        loop 
        muted 
        playsinline
      >
        <source src="../assets/Fireflies.mp4" type="video/mp4">
      </video>
    </div>
    
    <!-- Content with z-index to appear above background -->
    <div class="parallax-content relative z-10 flex flex-col items-center justify-center transform">
      <!-- Logo with glow effect -->
      <div class="mb-8 parallax-item" data-speed="0.1">
        <img src="../assets/logo.svg" loading="lazy" alt="Money Trees Logo" class="logo-image w-108 h-108 mx-auto" />
      </div>
      
      <!-- Title -->
      <h1 class="text-7xl md:text-[140px] text-white mb-6 font-bold leading-none parallax-item text-center px-4" 
          style="font-family: 'Sarpanch', sans-serif;"
          data-speed="0.15">
        Money Trees
      </h1>
      
      <!-- Tagline -->
      <p class="text-xl md:text-2xl text-white tracking-wider font-medium parallax-item text-center px-4 max-w-full" 
         style="font-family: 'Quicksand', sans-serif;"
         data-speed="0.2">
        Your Growth Partner in the Digital Jungle.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

let ticking = false;
let lastScrollY = 0;

const handleParallax = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      
      // Parallax background
      const bg = document.querySelector('.parallax-bg');
      if (bg) {
        bg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }

      // Parallax content items
      const items = document.querySelectorAll('.parallax-item');
      items.forEach(item => {
        const speed = item.getAttribute('data-speed');
        const yPos = -(scrolled * speed);
        item.style.transform = `translateY(${yPos}px)`;
      });

      ticking = false;
    });

    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleParallax);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleParallax);
});
</script>

<style scoped>
.parallax-bg {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.parallax-content {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.parallax-item {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.logo-image {
  animation: glowingEffect 3s infinite;
}

.logo-image:hover {
  animation: glowingEffect 1.5s infinite;
}

@keyframes glowingEffect {
  0% {
    filter: drop-shadow(-30px 0 15px rgba(255, 107, 0, 0));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(255, 107, 0, 0.4));
  }
  100% {
    filter: drop-shadow(30px 0 15px rgba(255, 107, 0, 0));
  }
}

.text-white {
  color: #ffffff;
}

/* Ensure the background image is responsive */
#home {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  perspective: 1px;
  transform-style: preserve-3d;
}

/* Add a subtle overlay to improve text readability if needed */
#home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
</style>
