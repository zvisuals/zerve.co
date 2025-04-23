<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Home from './components/Home.vue';
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Products from './components/Products.vue';
import Partners from './components/Partners.vue';
import Team from './components/Team.vue';
import ContactUs from './components/ContactUs.vue';
import Services from './components/Services.vue';
import Footer from './components/Footer.vue';

const showScrollButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const handleScroll = () => {
  showScrollButton.value = window.scrollY > window.innerHeight;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="relative">
    <!-- Texture Overlay -->
    <div class="fixed inset-0 pointer-events-none z-[1] texture-overlay"></div>

    <!-- Scroll to Top Button -->
    <button 
      @click="scrollToTop" 
      class="fixed bottom-8 right-8 z-[9999] p-2 rounded-full opacity-40 hover:opacity-100 transition-all duration-300 text-[#FF6B00] transform"
      :class="{ 'translate-y-[200%]': !showScrollButton, 'translate-y-0': showScrollButton }"
      style="filter: drop-shadow(0 0 10px rgba(255, 107, 0, 0.3));"
    >
      <span class="material-symbols-outlined text-4xl">keyboard_double_arrow_up</span>
    </button>

    <Navbar />
    <Home />
    <Products />
    <Services />
    <About />
    <Partners />
    <Team />
    <ContactUs />
    <Footer />
  </div>
</template>

<style scoped>
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-5px) scale(1.1);
}

/* Ensure button is always on top */
.z-\[9999\] {
  z-index: 9999;
}

/* Texture overlay styles */
.texture-overlay {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.05;
  mix-blend-mode: overlay;
}
</style>
