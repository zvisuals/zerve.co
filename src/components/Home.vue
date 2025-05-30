<template>
    <div id="home" class="min-h-screen flex flex-col justify-center items-center relative overflow-hidden" style="background: #0A1924; background: linear-gradient(0deg, rgba(10, 25, 36, 1) 0%, rgba(22, 46, 51, 1) 50%, rgba(10, 25, 36, 1) 100%);">
    <!-- Top Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 flex items-center px-8 lg:px-20 xl:px-32 2xl:px-40 py-4 bg-[#0a1a1a]/60 backdrop-blur-md">
      <!-- Left: Logo + Digital Marketing -->
      <div class="flex items-center gap-8 min-w-0 flex-shrink-0">
        <span class="text-[#1de9b6] text-xl lg:text-2xl font-bold tracking-wide">zerve.co</span>
        
      </div>
      
      <!-- Right: Available for work + EN -->
      <div class="flex items-center gap-4 ml-auto">
        <span class="text-white/80 text-base lg:text-lg font-medium whitespace-nowrap">Digital Marketing</span>
        <!-- Available for work (animated) -->
        <div class="flex items-center bg-[#1a2f2f] rounded-full px-4 py-2 border border-[#1de9b6]/30 overflow-hidden">
          <div class="w-2 h-2 bg-[#1de9b6] rounded-full mr-3 animate-pulse"></div>
          <div class="overflow-hidden whitespace-nowrap">
            <span class="text-[#1de9b6] text-sm font-medium animate-marquee inline-block">Available for work</span>
          </div>
        </div>
        
        <!-- EN Language Selector (separate) -->
        <div class="flex items-center text-white">
          <span class="text-sm font-medium mr-1">EN</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </nav>

    <!-- Parallax Background -->
    <div class="parallax-bg absolute inset-0 w-full h-[120%] z-0">
      <img src="../assets/homebg.svg" loading="lazy" alt="Background" class="w-full h-full object-cover blur-background" />
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
    <!-- Main Content -->
    <div class="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl py-16 px-4 md:px-12">
      <!-- Left: Profile Image & Badge -->
              <div class="flex flex-col items-center md:items-start md:w-1/2 w-full mb-10 md:mb-0">
          <div class="relative">
            <img src="../assets/logo.svg" alt="Profile" class="rounded-full w-[32rem] h-[32rem] object-cover shadow-2xl border-4 border-[#0a232e]" />
          </div>
        </div>
      <!-- Right: Text Content -->
      <div class="flex flex-col items-center md:items-start md:w-1/2 w-full">
        <span class="uppercase tracking-widest text-[#1de9b6] text-sm font-semibold mb-2">Designer & Webflow Expert</span>
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-center md:text-left">
          Agency-level web<br />
          development<br />
          services at<br />
          freelancer rates
        </h1>
        <p class="text-lg md:text-xl text-[#b0bec5] mb-8 text-center md:text-left max-w-xl">
          My mission is to design and develop a website that you and your audience love.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/zerve/" target="_blank" class="flex items-center justify-center px-6 py-3 rounded-full bg-[#1de9b6] text-[#0a232e] font-semibold text-lg shadow-lg hover:bg-[#00bfae] transition">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 0 0 3.48 20.52a12 12 0 0 0 17.04-17.04zm-8.52 17.1a9.1 9.1 0 0 1-4.91-1.44l-.35-.21-3.25.85.87-3.17-.23-.33A9.13 9.13 0 1 1 12 20.58zm5.01-6.84c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.47-1.83-.15-.27-.02-.41.12-.54.13-.13.29-.34.43-.51.14-.17.18-.29.27-.48.09-.18.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/></svg>
            Happy to chat on Linkedin
          </a>
          <a href="#contact" class="flex items-center justify-center px-6 py-3 rounded-full bg-transparent border-2 border-[#1de9b6] text-[#1de9b6] font-semibold text-lg shadow-lg hover:bg-[#1de9b6] hover:text-[#0a232e] transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

let ticking = false;

const handleParallax = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      // Parallax background
      const bg = document.querySelector('.parallax-bg');
      if (bg) {
        bg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
      // Parallax content items (if any)
      ticking = false;
    });
    ticking = true;
  }
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - 80, // Account for navbar height
      behavior: 'smooth'
    });
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

#home {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  perspective: 1px;
  transform-style: preserve-3d;
  min-height: 100vh;
}

.logo-image {
  animation: glowingEffect 3s infinite;
}
.logo-image:hover {
  animation: glowingEffect 1.5s infinite;
}
@keyframes glowingEffect {
  0% { filter: drop-shadow(-30px 0 15px rgba(255, 107, 0, 0)); }
  50% { filter: drop-shadow(0 0 15px rgba(255, 107, 0, 0.4)); }
  100% { filter: drop-shadow(30px 0 15px rgba(255, 107, 0, 0)); }
}

.text-white { color: #ffffff; }

.blur-background {
  filter: blur(8px) brightness(0.4);
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 8s linear infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  nav {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .text-2xl {
    font-size: 1.25rem;
  }
  
  .text-lg {
    font-size: 0.875rem;
  }
}

</style>
