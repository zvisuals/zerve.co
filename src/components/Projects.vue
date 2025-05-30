<template>
  <div id="projects" class="min-h-screen p-6 md:p-12 lg:px-[10%] lg:py-16 pt-32 projects-bg">
    <!-- Header -->
    <h1 class="text-[#1de9b6] text-3xl md:text-5xl mb-10 text-center" data-aos="fade-down" style="font-family: 'Sarpanch', sans-serif;">
      PROJECTS
    </h1>

    <!-- Featured Projects Carousel -->
    <div class="mb-16" data-aos="fade-up" data-aos-delay="200">
      <!-- Header with Navigation -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-white text-2xl md:text-3xl" style="font-family: 'Sarpanch', sans-serif;">
          Featured Projects
        </h2>
        
        <!-- Navigation Arrows (Top Right) -->
        <div class="flex gap-2">
          <button 
            @click="prevSlide"
            class="bg-[#1de9b6]/80 text-white p-2 rounded-full hover:bg-[#1de9b6] transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            @click="nextSlide"
            class="bg-[#1de9b6]/80 text-white p-2 rounded-full hover:bg-[#1de9b6] transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="relative w-full">
        <!-- Carousel Container -->
        <div class="overflow-hidden rounded-xl">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="(project, index) in featuredProjects" 
              :key="index"
              class="w-full flex-shrink-0"
            >
              <div class="bg-[#182B33]/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#334b3a]">
                <div class="grid md:grid-cols-2 gap-8 items-center">
                  <div class="order-2 md:order-1">
                    <div class="aspect-video rounded-lg overflow-hidden">
                      <img 
                        :src="project.image" 
                        :alt="project.title"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div class="order-1 md:order-2 space-y-4">
                    <h3 class="text-[#1de9b6] text-2xl md:text-3xl font-bold" style="font-family: 'Sarpanch', sans-serif;">
                      {{ project.title }}
                    </h3>
                    <p class="text-white text-lg leading-relaxed" style="font-family: 'Quicksand', sans-serif;">
                      {{ project.description }}
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="tech in project.technologies" 
                        :key="tech"
                        class="px-3 py-1 bg-[#1de9b6]/20 text-[#1de9b6] rounded-full text-sm"
                        style="font-family: 'Quicksand', sans-serif;"
                      >
                        {{ tech }}
                      </span>
                    </div>
                    <div class="flex gap-4">
                      <button class="bg-[#1de9b6] text-white px-6 py-2 rounded-lg hover:bg-[#1de9b6]/90 transition-all duration-300" style="font-family: 'Sarpanch', sans-serif;">
                        View Project
                      </button>
                      <button class="border border-[#1de9b6] text-[#1de9b6] px-6 py-2 rounded-lg hover:bg-[#1de9b6] hover:text-white transition-all duration-300" style="font-family: 'Sarpanch', sans-serif;">
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <div class="flex justify-center mt-6 gap-2">
          <button 
            v-for="(project, index) in featuredProjects" 
            :key="index"
            @click="currentSlide = index"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              currentSlide === index ? 'bg-[#1de9b6]' : 'bg-white/30'
            ]"
          ></button>
        </div>
      </div>
    </div>

    <!-- All Projects Grid -->
    <div data-aos="fade-up" data-aos-delay="400">
      <h2 class="text-white text-2xl md:text-3xl mb-8 text-center" style="font-family: 'Sarpanch', sans-serif;">
        All Projects
      </h2>
      
      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-6 py-2 rounded-full transition-all duration-300',
            selectedCategory === category 
              ? 'bg-[#1de9b6] text-white' 
              : 'bg-[#182B33]/50 text-white hover:bg-[#1de9b6]/20'
          ]"
          style="font-family: 'Sarpanch', sans-serif;"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="index"
          class="card-container cursor-pointer h-full"
          data-aos="fade-up" 
          :data-aos-delay="index * 100"
          @click="openProjectModal(project)"
        >
          <div ref="projectCards" class="project-card bg-[#182B33]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-[#334b3a] hover:border-[#1de9b6] transition-all duration-300 h-full flex flex-col">
            <div class="aspect-video relative overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-4 right-4">
                <span class="bg-[#1de9b6] text-white px-3 py-1 rounded-full text-sm" style="font-family: 'Quicksand', sans-serif;">
                  {{ project.category }}
                </span>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-[#1de9b6] text-xl mb-2 font-bold" style="font-family: 'Sarpanch', sans-serif;">
                {{ project.title }}
              </h3>
              <p class="text-white text-sm mb-4 flex-1" style="font-family: 'Quicksand', sans-serif;">
                {{ project.shortDescription }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.technologies.slice(0, 3)" 
                  :key="tech"
                  class="px-2 py-1 bg-[#1de9b6]/20 text-[#1de9b6] rounded text-xs"
                  style="font-family: 'Quicksand', sans-serif;"
                >
                  {{ tech }}
                </span>
                <span 
                  v-if="project.technologies.length > 3"
                  class="px-2 py-1 bg-white/20 text-white rounded text-xs"
                  style="font-family: 'Quicksand', sans-serif;"
                >
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
              <div class="flex gap-2">
                <button class="flex-1 bg-[#1de9b6] text-white py-2 rounded-lg hover:bg-[#1de9b6]/90 transition-all duration-300 text-sm" style="font-family: 'Sarpanch', sans-serif;">
                  View Details
                </button>
                <button class="px-4 border border-[#1de9b6] text-[#1de9b6] py-2 rounded-lg hover:bg-[#1de9b6] hover:text-white transition-all duration-300 text-sm" style="font-family: 'Sarpanch', sans-serif;">
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <div v-if="selectedProject" 
         class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
         @click="closeProjectModal">
      <div class="relative bg-[#182B33] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
           @click.stop>
        <button @click="closeProjectModal" 
                class="absolute top-4 right-4 text-white hover:text-[#1de9b6] text-2xl cursor-pointer hover:shadow-[0_0_10px_rgba(255,107,0,0.5)] active:scale-95 transition-all duration-300 z-[10000]"
                style="font-family: 'Sarpanch', sans-serif;">
          ✕
        </button>
        <div class="p-6 md:p-8">
          <div class="aspect-video rounded-lg overflow-hidden mb-6">
            <img :src="selectedProject.image" 
                 :alt="selectedProject.title"
                 class="w-full h-full object-cover" />
          </div>
          <div class="space-y-4">
            <h2 class="text-[#1de9b6] text-3xl md:text-4xl" style="font-family: 'Sarpanch', sans-serif;">
              {{ selectedProject.title }}
            </h2>
            <p class="text-white text-lg leading-relaxed" style="font-family: 'Quicksand', sans-serif;">
              {{ selectedProject.description }}
            </p>
            <div class="space-y-2">
              <h3 class="text-[#1de9b6] text-lg font-semibold" style="font-family: 'Sarpanch', sans-serif;">Technologies Used:</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in selectedProject.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-[#1de9b6]/20 text-[#1de9b6] rounded-full text-sm"
                  style="font-family: 'Quicksand', sans-serif;"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            <div class="flex gap-4 pt-4">
              <button class="bg-[#1de9b6] text-white px-6 py-3 rounded-lg hover:bg-[#1de9b6]/90 transition-all duration-300" style="font-family: 'Sarpanch', sans-serif;">
                View Live Demo
              </button>
              <button class="border border-[#1de9b6] text-[#1de9b6] px-6 py-3 rounded-lg hover:bg-[#1de9b6] hover:text-white transition-all duration-300" style="font-family: 'Sarpanch', sans-serif;">
                View Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Carousel state
const currentSlide = ref(0);

// Filter state
const selectedCategory = ref('All');
const selectedProject = ref(null);

// Project cards refs
const projectCards = ref([]);

// Categories
const categories = ['All', 'Web Development', 'Mobile App', 'E-commerce', 'Dashboard'];

// Featured projects data
const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard. Built with modern technologies for optimal performance and user experience.',
    image: new URL('../assets/homebg.svg', import.meta.url).href,
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe API']
  },
  {
    title: 'Healthcare Management System',
    description: 'A complete healthcare management platform designed for clinics and hospitals. Features patient records, appointment scheduling, billing, and telemedicine capabilities.',
    image: new URL('../assets/homebg.svg', import.meta.url).href,
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io']
  },
  {
    title: 'Real Estate Portal',
    description: 'Modern real estate platform connecting buyers, sellers, and agents. Includes property listings, virtual tours, mortgage calculators, and advanced search filters.',
    image: new URL('../assets/homebg.svg', import.meta.url).href,
    technologies: ['Next.js', 'PostgreSQL', 'AWS', 'Mapbox']
  }
];

// All projects data
const allProjects = [
  {
    title: 'Corporate Website',
    shortDescription: 'Modern corporate website with CMS integration and responsive design.',
    description: 'A sophisticated corporate website featuring content management system, responsive design, and SEO optimization. Built for a leading technology company with focus on performance and user experience.',
    category: 'Web Development',
    image: new URL('../assets/homebg.svg', import.meta.url).href,
    technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Strapi']
  },
  {
    title: 'Mobile Banking App',
    shortDescription: 'Secure mobile banking application with biometric authentication.',
    description: 'A comprehensive mobile banking solution with advanced security features, real-time transactions, and intuitive user interface. Supports multiple payment methods and financial services.',
    category: 'Mobile App',
    image: new URL('../assets/homebg.svg', import.meta.url).href,
    technologies: ['React Native', 'Firebase', 'Biometric API', 'Encryption']
  },
  {
    title: 'Online Marketplace',
    shortDescription: 'Multi-vendor marketplace with advanced seller tools and analytics.',
    description: 'A robust online marketplace platform supporting multiple vendors, advanced analytics, payment processing, and comprehensive seller tools. Features include inventory management and customer support.',
    category: 'E-commerce',
    image: new URL('../assets/homebg.svg', import.meta.url).href,
    technologies: ['Laravel', 'Vue.js', 'Redis', 'PayPal API']
  },
  {
    title: 'Analytics Dashboard',
    shortDescription: 'Real-time analytics dashboard with interactive charts and reports.',
    description: 'A powerful analytics dashboard providing real-time insights, interactive charts, and comprehensive reporting capabilities. Designed for data-driven decision making.',
    category: 'Dashboard',
    image: new URL('../assets/homebg.svg', import.meta.url).href,
    technologies: ['React', 'D3.js', 'Node.js', 'InfluxDB']
  },
  {
    title: 'Restaurant Management',
    shortDescription: 'Complete restaurant management system with POS integration.',
    description: 'An all-in-one restaurant management solution featuring POS integration, inventory tracking, staff management, and customer relationship tools.',
    category: 'Web Development',
    image: new URL('../assets/homebg.svg', import.meta.url).href,
    technologies: ['PHP', 'MySQL', 'jQuery', 'Bootstrap']
  },
  {
    title: 'Fitness Tracking App',
    shortDescription: 'Mobile fitness app with workout plans and progress tracking.',
    description: 'A comprehensive fitness tracking application with personalized workout plans, progress monitoring, nutrition tracking, and social features for motivation.',
    category: 'Mobile App',
    image: new URL('../assets/homebg.svg', import.meta.url).href,
    technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit']
  }
];

// Computed properties
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return allProjects;
  }
  return allProjects.filter(project => project.category === selectedCategory.value);
});

// Methods
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % featuredProjects.length;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? featuredProjects.length - 1 : currentSlide.value - 1;
};

const openProjectModal = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = 'hidden';
};

const closeProjectModal = () => {
  selectedProject.value = null;
  document.body.style.overflow = '';
};

// Auto-play carousel
let carouselInterval;

onMounted(() => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: false
  });

  // Auto-play carousel
  carouselInterval = setInterval(() => {
    nextSlide();
  }, 5000);

  // Card tilt effect
  const handleTilt = (event, element) => {
    if (!element) return;
    const card = element;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * 8;
    const tiltY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${-tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const resetTilt = (element) => {
    if (!element) return;
    element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  // Add event listeners to project cards
  projectCards.value.forEach(card => {
    if (card) {
      card.addEventListener('mousemove', (e) => handleTilt(e, card));
      card.addEventListener('mouseleave', () => resetTilt(card));
    }
  });
});

// Cleanup
const cleanup = () => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
};

// Pause auto-play on hover
const pauseCarousel = () => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
};

const resumeCarousel = () => {
  carouselInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};
</script>

<style scoped>
.projects-bg {
  background: #0A1924;
  background: linear-gradient(0deg, rgba(10, 25, 36, 1) 0%, rgba(22, 46, 51, 1) 50%, rgba(10, 25, 36, 1) 100%);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

.card-container {
  perspective: 2000px;
}

.project-card {
  transform: perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1);
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
  will-change: transform;
}

.project-card:hover {
  box-shadow: 0 12px 32px 0 rgba(255, 107, 0, 0.25), 0 8px 24px 0 rgba(0,0,0,0.25), 0 1.5px 6px 0 rgba(255, 107, 0, 0.15), 0 0.5px 2px 0 rgba(0,0,0,0.10);
}

/* Carousel hover effects */
.carousel-container:hover {
  /* Pause auto-play on hover if needed */
}
</style> 