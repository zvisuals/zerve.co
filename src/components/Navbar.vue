<template>
  <nav ref="navbar" class="fixed top-0 w-full flex flex-col md:flex-row items-center justify-between px-3 md:px-30 py-2 pt-3 bg-[#151e18]/95 backdrop-blur-sm transition-transform duration-300 z-50" style="font-family: 'Sarpanch', sans-serif;">
    <!-- Logo and Brand Name -->
    <div class="flex items-center font-bold text-gray-100 mb-2 md:mb-0">
      <img src="../assets/logo.svg" alt="Logo" class="h-10 w-10 md:h-13 md:w-13 mr-2" />
      <span class="hidden md:inline text-2xl">Money Trees</span>
    </div>
    <!-- Navigation Links -->
    <div class="w-full md:flex-1 flex justify-center mb-2 md:mb-0">
      <ul class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 w-full md:w-auto items-center">
        <li><a href="#products" @click.prevent="scrollToSection('products')" class="text-gray-100 text-sm md:text-base tracking-wider hover:text-orange-300">PRODUCTS</a></li>
        <li><a href="#services" @click.prevent="scrollToSection('services')" class="text-gray-100 text-sm md:text-base tracking-wider hover:text-orange-300">SERVICES</a></li>
        <li class="relative group">
          <a href="#about" @click.prevent="scrollToSection('about')" class="text-gray-100 text-sm md:text-base tracking-wider hover:text-orange-300">
            ABOUT US
          </a>
          <!-- Dropdown Menu -->
          <div class="absolute left-0 hidden group-hover:block mt-2 bg-[#223329]/95 backdrop-blur-sm py-2 min-w-[160px] rounded-lg shadow-lg z-50 border border-[#151e18]/30">
            <div class="absolute h-2 w-full -top-2"></div>
            <a href="#about" @click.prevent="scrollToSection('about')" 
               class="block px-4 py-2 text-gray-100 hover:text-orange-300 hover:bg-[#151e18]/30 text-sm transition-colors">
              Who we are
            </a>
            <a href="#meet-team" @click.prevent="scrollToSection('meet-team')" 
               class="block px-4 py-2 text-gray-100 hover:text-orange-300 hover:bg-[#151e18]/30 text-sm transition-colors">
              Meet the team
            </a>
          </div>
        </li>
        <li><a href="#partners" @click.prevent="scrollToSection('partners')" class="text-gray-100 text-sm md:text-base tracking-wider hover:text-orange-300">PARTNERS</a></li>
      </ul>
    </div>
    <!-- Work with Us -->
    <div class="text-gray-100 text-xl font-semibold cursor-pointer hover:text-orange-300">
      Work with Us
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navbar = ref(null);
let lastScrollY = 0;

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = navbar.value?.offsetHeight || 0;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: 'smooth'
    });
  }
};

const handleScroll = () => {
  if (!navbar.value) return;
  
  const currentScrollY = window.scrollY;
  
  // Show navbar when scrolling up or at top
  if (currentScrollY < lastScrollY || currentScrollY < 50) {
    navbar.value.style.transform = 'translateY(0)';
  } 
  // Hide navbar when scrolling down
  else if (currentScrollY > lastScrollY && currentScrollY > 50) {
    navbar.value.style.transform = 'translateY(-100%)';
  }
  
  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.group:hover .group-hover\:block {
  display: block;
}

/* Add this to create a hoverable gap between link and dropdown */
.group:hover .absolute::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 0;
  right: 0;
  height: 8px;
}
</style>
