<template>
  <!-- Bottom Navigation Bar -->
  <nav ref="navbar" class="navbar-container z-20 bg-[#0a232e]/60 rounded-full px-12 py-4 flex gap-12 text-white shadow-2xl backdrop-blur-xl border border-white/10">
    <a href="#home" @click.prevent="scrollToSection('home')" class="nav-link active" style="font-family: 'Quicksand', sans-serif;">HOME</a>
    <div class="nav-divider"></div>
    <a href="#about" @click.prevent="scrollToSection('about')" class="nav-link" style="font-family: 'Quicksand', sans-serif;">ABOUT ME</a>
    <div class="nav-divider"></div>
    <a href="#work" @click.prevent="scrollToSection('work')" class="nav-link" style="font-family: 'Quicksand', sans-serif;">WORK</a>
    <div class="nav-divider"></div>
    <a href="#services" @click.prevent="scrollToSection('services')" class="nav-link" style="font-family: 'Quicksand', sans-serif;">SERVICES</a>
    <div class="nav-divider"></div>
    <a href="#webflow" @click.prevent="scrollToSection('webflow')" class="nav-link" style="font-family: 'Quicksand', sans-serif;">WEBFLOW EXPERT</a>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navbar = ref(null);

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

const handleScroll = () => {
  if (!navbar.value) return;
  
  const homeSection = document.getElementById('home');
  if (!homeSection) return;
  
  const homeHeight = homeSection.offsetHeight;
  const scrollY = window.scrollY;
  
  // Position where navbar should be when static (near bottom of home section)
  const navbarStaticPosition = homeHeight - 120; // 120px from bottom of home section
  
  // When navbar reaches top of viewport, make it sticky
  const stickyPoint = navbarStaticPosition - scrollY;
  
  if (stickyPoint <= 16) { // 16px = 1rem from top
    // Navbar has reached the top - make it sticky
    navbar.value.style.position = 'fixed';
    navbar.value.style.top = '1rem';
    navbar.value.style.bottom = 'auto';
    navbar.value.style.transform = 'translateX(-50%)';
  } else {
    // Navbar behaves like static content - moves with page scroll
    navbar.value.style.position = 'absolute';
    navbar.value.style.top = `${navbarStaticPosition}px`;
    navbar.value.style.bottom = 'auto';
    navbar.value.style.transform = 'translateX(-50%)';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Initial position
  if (navbar.value) {
    navbar.value.style.bottom = '1.5rem';
    navbar.value.style.top = 'auto';
  }
  // Initial scroll check
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar-container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}

.nav-link {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
}

.nav-link:hover {
  color: #1de9b6;
  transform: translateY(-1px);
}

.nav-link.active {
  color: #1de9b6;
  font-weight: 700;
}

.nav-divider {
  width: 1px;
  height: 20px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent);
  align-self: center;
}

/* Enhanced glass effect */
nav {
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  background: rgba(10, 35, 46, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  nav {
    gap: 2rem;
    padding: 0.75rem 2rem;
  }
  
  .nav-link {
    font-size: 0.85rem;
  }
  
  .nav-divider {
    height: 16px;
  }
}

@media (max-width: 640px) {
  nav {
    gap: 1rem;
    padding: 0.5rem 1rem;
  }
  
  .nav-link {
    font-size: 0.75rem;
  }
  
  .nav-divider {
    height: 14px;
  }
}
</style>
