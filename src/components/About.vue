<template>
  <div id="about" class="min-h-screen p-6 md:p-12 lg:px-[10%] lg:py-16 pt-24">
    <!-- Header -->
    <h1 class="text-[#FF6B00] text-3xl md:text-5xl mb-10 text-center" data-aos="fade-down" style="font-family: 'Sarpanch', sans-serif;">
      ABOUT US
    </h1>

    <!-- Who We Are Section -->
    <div id="who-we-are" class="space-y-10 md:space-y-16 scroll-mt-24">
      <!-- First Section -->
      <div data-aos="fade-right" class="bg-[#223329]/50 rounded-xl p-6 md:p-8 backdrop-blur-sm">
        <h2 class="text-[#FF6B00] text-3xl md:text-4xl mb-3" style="font-family: 'Sarpanch', sans-serif;">
          WHO WE ARE
        </h2>
        <p class="text-white text-xl md:text-2xl leading-relaxed font-medium" style="font-family: 'Quicksand', sans-serif;">
          In response to changing market trends, Money Trees Company has shifted its business focus from consumer goods trading to
          web app development and online services. The company is dedicated to producing high-quality digital solutions that cater to
          various client needs across multiple industries.
        </p>
      </div>

      <!-- Second Section -->
      <div data-aos="fade-left" class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div class="order-2 md:order-1">
          <img 
            src="../assets/meeting-image.svg" 
            alt="Team Meeting" 
            class="w-full h-auto max-w-[50%] mx-auto hover-tilt-right transition-transform duration-300 rounded-lg" 
            loading="lazy"
            width="800"
            height="500"
            fetchpriority="low"
          />
        </div>
        <div class="order-1 md:order-2">
          <p class="text-white text-xl md:text-2xl leading-relaxed mb-4 font-medium" style="font-family: 'Quicksand', sans-serif;">
            With a focus on innovation and scalability, Money Trees Company is actively involved in multiple projects, both
            ongoing and future, ensuring continuous growth and adaptability in the ever-evolving digital landscape. Through
            strategic collaborations and cutting-edge technology, the company remains committed to delivering user-friendly
            and impactful online services in the Philippines and beyond.
          </p>
          <button @click="scrollToSection('contact')" class="bg-[#FF6B00] text-white px-8 py-3 rounded-lg hover:bg-[#FF6B00]/90 transition-all duration-300 text-xl cursor-pointer hover:shadow-[0_0_15px_rgba(255,107,0,0.7)] active:scale-95" style="font-family: 'Sarpanch', sans-serif;">
            CONTACT US
          </button>
        </div>
      </div>
    </div>

    <!-- Vision Section -->
    <div class="card-container mt-16" data-aos="fade-right">
      <div ref="visionCard" class="tilt-card bg-[#223329]/50 rounded-xl p-4 md:p-6 backdrop-blur-sm border-2 border-[#151e18]/30 shadow-[0_4px_8px_rgba(0,20,0,0.5)]">
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div class="space-y-3">
            <h2 class="text-[#FF6B00] text-3xl md:text-4xl" style="font-family: 'Sarpanch', sans-serif;">
              VISION
            </h2>
            <p class="text-white text-lg md:text-3xl leading-relaxed font-medium" style="font-family: 'Quicksand', sans-serif;">
              To be a leading provider of innovative, scalable, and user-centric digital solutions that empower businesses and communities in the Philippines and across the globe.
            </p>
          </div>
          <div class="flex items-center justify-center h-[370px]">
            <div class="w-full h-full max-w-[25%] rounded-lg overflow-hidden">
              <img 
                src="../assets/vision-image.svg" 
                alt="Vision" 
                class="w-full h-full object-contain" 
                loading="lazy"
                width="400"
                height="400"
                fetchpriority="low"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="card-container mt-8" data-aos="fade-left">
      <div ref="missionCard" class="tilt-card bg-[#223329]/50 rounded-xl p-4 md:p-6 backdrop-blur-sm border-2 border-[#151e18]/30 shadow-[0_4px_8px_rgba(0,20,0,0.5)]">
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div class="order-2 md:order-1 flex items-center justify-center h-[370px]">
            <div class="w-full h-full max-w-[25%] rounded-lg overflow-hidden">
              <img 
                src="../assets/mission-image.svg" 
                alt="Mission" 
                class="w-full h-full object-contain" 
                loading="lazy"
                width="400"
                height="400"
                fetchpriority="low"
              />
            </div>
          </div>
          <div class="order-1 md:order-2 space-y-3">
            <h2 class="text-[#FF6B00] text-3xl md:text-4xl" style="font-family: 'Sarpanch', sans-serif;">
              MISSION
            </h2>
            <p class="text-white text-lg md:text-3xl leading-relaxed font-medium" style="font-family: 'Quicksand', sans-serif;">
              Money Trees Company is committed to delivering high-quality web applications and online services tailored to the evolving needs of diverse industries. Through continuous innovation, strategic collaboration, and a passion for technology, we strive to create impactful solutions that drive growth, efficiency, and digital transformation.
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

const visionCard = ref(null);
const missionCard = ref(null);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 80; // Approximate navbar height
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: 'smooth'
    });
  }
};

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

  // Vision Card
  if (visionCard.value) {
    visionCard.value.addEventListener('mousemove', (e) => handleTilt(e, visionCard.value));
    visionCard.value.addEventListener('mouseleave', () => resetTilt(visionCard.value));
  }

  // Mission Card
  if (missionCard.value) {
    missionCard.value.addEventListener('mousemove', (e) => handleTilt(e, missionCard.value));
    missionCard.value.addEventListener('mouseleave', () => resetTilt(missionCard.value));
  }
});
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

.card-container {
  perspective: 2000px;
  max-width: 100%;
}

.tilt-card {
  transform: perspective(1000px) rotateX(0) rotateY(0);
  transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
}

.scroll-mt-24 {
  scroll-margin-top: 6rem;
}

/* Prevent any horizontal overflow */
:deep(*) {
  max-width: 100vw;
  box-sizing: border-box;
}
</style>
