<template>
  <div id="partners" class="p-6 md:p-12 lg:px-[10%] lg:py-16 pt-24">
    <!-- Header -->
    <h1 class="text-[#FF6B00] text-3xl md:text-5xl mb-10 text-center" data-aos="fade-down" data-aos-delay="100" style="font-family: 'Sarpanch', sans-serif;">
      PARTNERS
    </h1>

    <!-- Partners Slider Container -->
    <div class="relative overflow-hidden">
      <!-- Slider Track -->
      <div class="slider-track">
        <!-- First Set -->
        <div class="slide-content">
          <img src="../assets/partners/partner1.svg" alt="Partner 1" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner2.svg" alt="Partner 2" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner3.svg" alt="Partner 3" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner4.svg" alt="Partner 4" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner5.svg" alt="Partner 5" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner6.svg" alt="Partner 6" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner7.svg" alt="Partner 7" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner8.svg" alt="Partner 8" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner9.svg" alt="Partner 9" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner10.svg" alt="Partner 10" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
        </div>
        <!-- Duplicate Set for Seamless Loop -->
        <div class="slide-content">
          <img src="../assets/partners/partner1.svg" alt="Partner 1" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner2.svg" alt="Partner 2" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner3.svg" alt="Partner 3" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner4.svg" alt="Partner 4" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner5.svg" alt="Partner 5" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner6.svg" alt="Partner 6" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner7.svg" alt="Partner 7" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner8.svg" alt="Partner 8" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner9.svg" alt="Partner 9" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
          <img src="../assets/partners/partner10.svg" alt="Partner 10" class="partner-logo" loading="lazy" width="200" height="80" fetchpriority="low" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No complex logic needed
</script>

<style scoped>
.slider-track {
  display: flex;
  width: max-content;
  animation: scroll 50s linear infinite;
}

.slide-content {
  display: flex;
  align-items: center;
  gap: 6rem;
  padding: 0 3rem;
}

.partner-logo {
  height: 5rem;
  width: auto;
  object-fit: contain;
  filter: grayscale(1);
  transition: all 0.3s ease;
}

.partner-logo:hover {
  filter: grayscale(0);
}

@media (min-width: 768px) {
  .partner-logo {
    height: 6rem;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.slider-track:hover {
  animation-play-state: paused;
}
</style>
