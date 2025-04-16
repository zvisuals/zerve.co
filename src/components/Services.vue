<template>
  <div id="services" class="min-h-screen p-6 md:p-12 lg:px-[10%] lg:py-16 pt-24">
    <!-- IT Services Section -->
    <div class="mb-24">
      <h1 class="text-[#FF6B00] text-3xl md:text-5xl mb-10 text-center" data-aos="fade-down" style="font-family: 'Sarpanch', sans-serif;">
        IT SERVICES
      </h1>
      
      <p class="text-white text-xl md:text-2xl mb-12 text-center" data-aos="fade-down" data-aos-delay="100" style="font-family: 'Quicksand', sans-serif;">
        Navigating the Digital Landscape with Expert IT Solutions and Mobile Development.
      </p>

      <div class="grid md:grid-cols-3 gap-4 md:gap-6">
        <!-- Web & App Development -->
        <div class="card-container h-full" data-aos="fade-up" data-aos-delay="0">
          <div ref="card1" class="tilt-card bg-[#223329]/50 backdrop-blur-sm rounded-xl p-4 border border-[#334b3a] hover:border-[#FF6B00] transition-all duration-300 h-full flex flex-col">
            <div class="aspect-square mb-4 max-w-[200px] mx-auto">
              <img src="../assets/services/webapp.svg" alt="Web Development" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-[#FF6B00] text-xl mb-2" style="font-family: 'Sarpanch', sans-serif;">
              Web & App Development
            </h3>
            <p class="text-white text-base" style="font-family: 'Quicksand', sans-serif;">
              From Concept to Code: Building Your Digital Identity.
            </p>
          </div>
        </div>

        <!-- Mobile Development -->
        <div class="card-container h-full" data-aos="fade-up" data-aos-delay="100">
          <div ref="card2" class="tilt-card bg-[#223329]/50 backdrop-blur-sm rounded-xl p-4 border border-[#334b3a] hover:border-[#FF6B00] transition-all duration-300 h-full flex flex-col">
            <div class="aspect-square mb-4 max-w-[200px] mx-auto">
              <img src="../assets/services/mobiledev.svg" alt="Mobile Development" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-[#FF6B00] text-xl mb-2" style="font-family: 'Sarpanch', sans-serif;">
              Mobile Development
            </h3>
            <p class="text-white text-base" style="font-family: 'Quicksand', sans-serif;">
              Navigating the Digital Landscape with Expert IT Solutions and Mobile Development.
            </p>
          </div>
        </div>

        <!-- Software Development -->
        <div class="card-container h-full" data-aos="fade-up" data-aos-delay="200">
          <div ref="card3" class="tilt-card bg-[#223329]/50 backdrop-blur-sm rounded-xl p-4 border border-[#334b3a] hover:border-[#FF6B00] transition-all duration-300 h-full flex flex-col">
            <div class="aspect-square mb-4 max-w-[200px] mx-auto">
              <img src="../assets/services/softwaredev.svg" alt="Software Development" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-[#FF6B00] text-xl mb-2" style="font-family: 'Sarpanch', sans-serif;">
              Software Development
            </h3>
            <p class="text-white text-base" style="font-family: 'Quicksand', sans-serif;">
              Elevate Your Operations with Custom Software Solutions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Marketing Services Section -->
    <div>
      <h1 class="text-[#FF6B00] text-3xl md:text-5xl mb-10 text-center" data-aos="fade-down" style="font-family: 'Sarpanch', sans-serif;">
        MARKETING SERVICES
      </h1>
      
      <p class="text-white text-xl md:text-2xl mb-12 text-center" data-aos="fade-down" data-aos-delay="100" style="font-family: 'Quicksand', sans-serif;">
        Driving Your Brand Forward in the Digital Age.
      </p>

      <div class="grid md:grid-cols-2 gap-4 md:gap-6 max-w-[800px] mx-auto">
        <!-- Digital Marketing -->
        <div class="card-container h-full" data-aos="fade-up" data-aos-delay="0">
          <div ref="card4" class="tilt-card bg-[#223329]/50 backdrop-blur-sm rounded-xl p-4 border border-[#334b3a] hover:border-[#FF6B00] transition-all duration-300 h-full flex flex-col">
            <div class="aspect-square mb-4 max-w-[200px] mx-auto">
              <img src="../assets/services/digital.svg" alt="Digital Marketing" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-[#FF6B00] text-xl mb-2" style="font-family: 'Sarpanch', sans-serif;">
              Digital Marketing
            </h3>
            <p class="text-white text-base" style="font-family: 'Quicksand', sans-serif;">
              Unlocking Growth Potential in the Digital Sphere
            </p>
          </div>
        </div>

        <!-- Brand Awareness -->
        <div class="card-container h-full" data-aos="fade-up" data-aos-delay="100">
          <div ref="card5" class="tilt-card bg-[#223329]/50 backdrop-blur-sm rounded-xl p-4 border border-[#334b3a] hover:border-[#FF6B00] transition-all duration-300 h-full flex flex-col">
            <div class="aspect-square mb-4 max-w-[200px] mx-auto">
              <img src="../assets/services/socmed.svg" alt="Brand Awareness" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-[#FF6B00] text-xl mb-2" style="font-family: 'Sarpanch', sans-serif;">
              Brand Awareness and<br/>Social Media Management
            </h3>
            <p class="text-white text-base" style="font-family: 'Quicksand', sans-serif;">
              Your Brand's Best Advocate in a Noisy Digital World.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const card4 = ref(null);
const card5 = ref(null);

onMounted(() => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: false
  });

  const handleTilt = (event, element) => {
    if (!element) return;
    
    const card = element;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * 10;
    const tiltY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${-tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const resetTilt = (element) => {
    if (!element) return;
    element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  // Add event listeners to all cards
  [card1.value, card2.value, card3.value, card4.value, card5.value].forEach(card => {
    if (card) {
      card.addEventListener('mousemove', (e) => handleTilt(e, card));
      card.addEventListener('mouseleave', () => resetTilt(card));
    }
  });
});
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

.card-container {
  perspective: 2000px;
}

.tilt-card {
  transform: perspective(1000px) rotateX(0) rotateY(0);
  transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
}
</style>
