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
          <img src="../assets/partners/Booklyph.svg" alt="Booklyph" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/BRB.svg" alt="BRB" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Clockify.svg" alt="Clockify" class="partner-logo grayscale" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Confluence.svg" alt="Confluence" class="partner-logo grayscale" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Cookiebro.svg" alt="Cookiebro" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Exodus.svg" alt="Exodus" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Git.svg" alt="Git" class="partner-logo grayscale" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Hostinger.svg" alt="Hostinger" class="partner-logo grayscale" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Jira.svg" alt="Jira" class="partner-logo grayscale" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Moss.svg" alt="Moss" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/MST.svg" alt="MST" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Revest360.svg" alt="Revest360" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Swift.svg" alt="Swift" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Tailwind.svg" alt="Tailwind" class="partner-logo grayscale" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Tiwalgo.svg" alt="Tiwalgo" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/UB.svg" alt="UB" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/UC.svg" alt="UC" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
        </div>
        <!-- Duplicate Set for Seamless Loop -->
        <div class="slide-content">
          <img src="../assets/partners/Booklyph.svg" alt="Booklyph" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/BRB.svg" alt="BRB" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Clockify.svg" alt="Clockify" class="partner-logo grayscale" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Confluence.svg" alt="Confluence" class="partner-logo grayscale" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Cookiebro.svg" alt="Cookiebro" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Exodus.svg" alt="Exodus" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Git.svg" alt="Git" class="partner-logo grayscale" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Hostinger.svg" alt="Hostinger" class="partner-logo grayscale" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Jira.svg" alt="Jira" class="partner-logo grayscale" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Moss.svg" alt="Moss" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/MST.svg" alt="MST" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Revest360.svg" alt="Revest360" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Swift.svg" alt="Swift" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Tailwind.svg" alt="Tailwind" class="partner-logo grayscale" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/Tiwalgo.svg" alt="Tiwalgo" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/UB.svg" alt="UB" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
          <img src="../assets/partners/UC.svg" alt="UC" class="partner-logo" loading="lazy" width="270" height="270" fetchpriority="low" />
        </div>
      </div>
    </div>
  </div>
</template>

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
  height: 16.875rem;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;
}

.partner-logo:hover {
  filter: grayscale(0);
}

@media (min-width: 768px) {
  .partner-logo {
    height: 16.875rem;
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

.grayscale {
  filter: grayscale(1);
  transition: filter 0.3s ease;
}
.grayscale:hover {
  filter: grayscale(0);
}
</style>
