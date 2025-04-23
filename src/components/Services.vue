<template>
  <div id="services" class="min-h-screen p-6 md:p-12 lg:px-[10%] lg:py-16 pt-24 relative">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img src="../assets/Servicesbg.svg" alt="Services Background" class="w-full h-full object-cover" />
    </div>

    <!-- Content with higher z-index -->
    <div class="relative z-[1]">
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
          <div class="card-container h-full cursor-pointer" data-aos="fade-up" data-aos-delay="0" @click="openModal('webapp')">
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
          <div class="card-container h-full cursor-pointer" data-aos="fade-up" data-aos-delay="100" @click="openModal('mobile')">
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
          <div class="card-container h-full cursor-pointer" data-aos="fade-up" data-aos-delay="200" @click="openModal('software')">
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
          <div class="card-container h-full cursor-pointer" data-aos="fade-up" data-aos-delay="0" @click="openModal('digital')">
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
          <div class="card-container h-full cursor-pointer" data-aos="fade-up" data-aos-delay="100" @click="openModal('brand')">
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

    <!-- Service Modal -->
    <div v-if="selectedService" 
         class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
         @click="closeModal">
      <div class="relative bg-[#223329] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
           @click.stop>
        <button @click="closeModal" 
                class="absolute top-4 right-4 text-white hover:text-[#FF6B00] text-2xl cursor-pointer hover:shadow-[0_0_10px_rgba(255,107,0,0.5)] active:scale-95 transition-all duration-300"
                style="font-family: 'Sarpanch', sans-serif;">
          ✕
        </button>
        <div class="grid md:grid-cols-2 gap-8 p-6 md:p-8">
          <div class="aspect-square relative overflow-hidden rounded-lg">
            <img :src="serviceImages[selectedService]" 
                 :alt="serviceDetails[selectedService].title"
                 class="w-full h-full object-contain" />
          </div>
          <div class="space-y-4">
            <h2 class="text-[#FF6B00] text-3xl md:text-4xl" style="font-family: 'Sarpanch', sans-serif;">
              {{ serviceDetails[selectedService].title }}
            </h2>
            <div class="space-y-4 text-white" style="font-family: 'Quicksand', sans-serif;">
              <p class="text-base md:text-lg leading-relaxed">
                {{ serviceDetails[selectedService].description }}
              </p>
              <div class="space-y-2">
                <h3 class="text-[#FF6B00] text-lg font-semibold">Key Features:</h3>
                <ul class="list-disc list-inside space-y-1">
                  <li v-for="(feature, index) in serviceDetails[selectedService].features" :key="index">
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
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
const selectedService = ref(null);

// Service images
const serviceImages = {
  webapp: new URL('../assets/services/webapp.svg', import.meta.url).href,
  mobile: new URL('../assets/services/mobiledev.svg', import.meta.url).href,
  software: new URL('../assets/services/softwaredev.svg', import.meta.url).href,
  digital: new URL('../assets/services/digital.svg', import.meta.url).href,
  brand: new URL('../assets/services/socmed.svg', import.meta.url).href
};

// Service details
const serviceDetails = {
  webapp: {
    title: 'Web & App Development',
    description: 'Our web and app development services transform your ideas into powerful digital experiences. We create responsive, user-friendly applications that drive engagement and deliver results.',
    features: [
      'Custom website development',
      'E-commerce solutions',
      'Progressive Web Apps (PWAs)',
      'Cross-platform compatibility',
      'Performance optimization'
    ]
  },
  mobile: {
    title: 'Mobile Development',
    description: 'We build native and cross-platform mobile applications that provide seamless user experiences across all devices. Our mobile solutions are designed to meet the unique needs of your business.',
    features: [
      'iOS and Android development',
      'React Native applications',
      'Flutter development',
      'Mobile UI/UX design',
      'App store optimization'
    ]
  },
  software: {
    title: 'Software Development',
    description: 'Our custom software solutions streamline operations, enhance productivity, and drive innovation. We develop scalable, secure, and efficient software tailored to your specific business requirements.',
    features: [
      'Custom enterprise software',
      'API development and integration',
      'Database design and optimization',
      'Cloud-based solutions',
      'Legacy system modernization'
    ]
  },
  digital: {
    title: 'Digital Marketing',
    description: 'Our digital marketing strategies help you reach the right audience, increase brand visibility, and drive conversions. We use data-driven approaches to optimize your online presence and achieve measurable results.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) advertising',
      'Content marketing strategy',
      'Email marketing campaigns',
      'Analytics and reporting'
    ]
  },
  brand: {
    title: 'Brand Awareness and Social Media Management',
    description: 'We help you build a strong brand presence across social media platforms. Our team creates engaging content, manages your online communities, and fosters meaningful connections with your audience.',
    features: [
      'Social media strategy development',
      'Content creation and curation',
      'Community management',
      'Influencer partnerships',
      'Brand voice and messaging'
    ]
  }
};

const openModal = (serviceId) => {
  selectedService.value = serviceId;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedService.value = null;
  document.body.style.overflow = '';
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
