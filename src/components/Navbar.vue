<template>
  <nav ref="navbar" class="fixed top-0 w-screen max-w-full flex flex-row items-center justify-between px-2 md:px-[5%] py-2 pt-3 bg-[#151e18]/45 backdrop-blur-sm transition-transform duration-300 z-50" style="font-family: 'Sarpanch', sans-serif;">
    <!-- Logo and Brand Name -->
    <div class="flex items-center font-bold text-gray-100 cursor-pointer" @click="scrollToTop">
      <img src="../assets/logo.svg" loading="lazy" alt="Logo" class="h-8 w-8 md:h-13 md:w-13 mr-2" />
      <span class="hidden xl:inline text-2xl">Money Trees</span>
    </div>
    <!-- Navigation Links -->
    <div class="flex-1 flex justify-center">
      <ul class="flex flex-row space-x-2 md:space-x-10 items-center">
        <li><a href="#products" @click.prevent="scrollToSection('products')" class="text-gray-100 text-xs md:text-base tracking-wider hover:text-orange-300">PRODUCTS</a></li>
        <li><a href="#services" @click.prevent="scrollToSection('services')" class="text-gray-100 text-xs md:text-base tracking-wider hover:text-orange-300">SERVICES</a></li>
        <li class="relative group">
          <a href="#about" 
             @click.prevent="toggleDropdown" 
             class="text-gray-100 text-xs md:text-base tracking-wider hover:text-orange-300 flex items-center gap-1"
             :class="{ 'text-orange-300': isDropdownOpen }">
            ABOUT US
            
          </a>
          <!-- Dropdown Menu -->
          <div class="absolute left-0 mt-2 bg-[#223329]/95 backdrop-blur-sm py-2 min-w-[160px] rounded-lg shadow-lg z-50 border border-[#151e18]/30 transition-all duration-300"
               :class="{ 'opacity-100 visible': isDropdownOpen, 'opacity-0 invisible pointer-events-none': !isDropdownOpen }">
            <div class="absolute h-2 w-full -top-2"></div>
            <a href="#about" 
               @click.prevent="handleDropdownClick('about')" 
               class="block px-4 py-2 text-gray-100 hover:text-orange-300 hover:bg-[#151e18]/30 text-sm transition-colors">
              Who we are
            </a>
            <a href="#team" 
               @click.prevent="handleDropdownClick('team')" 
               class="block px-4 py-2 text-gray-100 hover:text-orange-300 hover:bg-[#151e18]/30 text-sm transition-colors">
              Meet the team
            </a>
          </div>
        </li>
        <li><a href="#partners" @click.prevent="scrollToSection('partners')" class="text-gray-100 text-xs md:text-base tracking-wider hover:text-orange-300">PARTNERS</a></li>
      </ul>
    </div>
    <!-- Work with Us -->
    <div class="hidden xl:block text-gray-100 text-xl font-semibold cursor-pointer hover:text-orange-300" @click="scrollToSection('contact')">
      Work with Us
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navbar = ref(null);
let lastScrollY = 0;
const isDropdownOpen = ref(false);

const toggleDropdown = (event) => {
  event.stopPropagation();
  isDropdownOpen.value = !isDropdownOpen.value;
};

const handleDropdownClick = (sectionId) => {
  scrollToSection(sectionId);
  isDropdownOpen.value = false;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
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
    isDropdownOpen.value = false;
  }
  
  lastScrollY = currentScrollY;
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.group')) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
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

/* Custom breakpoint for xl at 985px */
@media (min-width: 985px) {
  .xl\:inline {
    display: inline;
  }
  .xl\:block {
    display: block;
  }
}

/* Hide at smaller screens */
@media (max-width: 984px) {
  .hidden {
    display: none;
  }
}

/* Improve mobile responsiveness */
@media (max-width: 768px) {
  nav {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  ul {
    gap: 0.25rem;
  }
  
  li {
    white-space: nowrap;
  }
}
</style>
