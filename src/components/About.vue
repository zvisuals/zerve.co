<template>
  <div id="about" class="min-h-screen about-bg">
    <div class="flex h-screen">
      <!-- Left Sidebar-like Section -->
      <div class="w-1/3 bg-[#182B33]/80 backdrop-blur-sm border-r border-[#334b3a] flex flex-col justify-center items-center p-8 sticky top-0">
        <div class="text-center space-y-8">
          <!-- Profile Section -->
          <div class="space-y-4">
            <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#0094b5]">
              <img src="../assets/logo.svg" alt="Profile" class="w-full h-full object-cover" />
            </div>
            <h1 class="text-[#0291a1] text-3xl font-bold" style="font-family: 'Sarpanch', sans-serif;">
              ABOUT ME
            </h1>
            <p class="text-white/80 text-sm" style="font-family: 'Quicksand', sans-serif;">
              My Portfolio as a Designer
            </p>
          </div>

          <!-- Navigation Menu -->
          <div class="space-y-4">
            <button 
              @click="scrollToContent('introduction')"
              :class="['w-full text-left px-4 py-2 rounded-lg transition-all duration-300', activeSection === 'introduction' ? 'bg-[#0094b5] text-white' : 'text-white/70 hover:text-white hover:bg-[#0094b5]/20']"
              style="font-family: 'Quicksand', sans-serif;"
            >
              Introduction
            </button>
            <button 
              @click="scrollToContent('education')"
              :class="['w-full text-left px-4 py-2 rounded-lg transition-all duration-300', activeSection === 'education' ? 'bg-[#0094b5] text-white' : 'text-white/70 hover:text-white hover:bg-[#0094b5]/20']"
              style="font-family: 'Quicksand', sans-serif;"
            >
              Education
            </button>
            <button 
              @click="scrollToContent('experience')"
              :class="['w-full text-left px-4 py-2 rounded-lg transition-all duration-300', activeSection === 'experience' ? 'bg-[#0094b5] text-white' : 'text-white/70 hover:text-white hover:bg-[#0094b5]/20']"
              style="font-family: 'Quicksand', sans-serif;"
            >
              Experience
            </button>
            <button 
              @click="scrollToContent('skills')"
              :class="['w-full text-left px-4 py-2 rounded-lg transition-all duration-300', activeSection === 'skills' ? 'bg-[#0094b5] text-white' : 'text-white/70 hover:text-white hover:bg-[#0094b5]/20']"
              style="font-family: 'Quicksand', sans-serif;"
            >
              Skills
            </button>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center gap-4 pt-8">
            <a href="#" class="text-white/60 hover:text-[#0094b5] transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
              </svg>
            </a>
            <a href="#" class="text-white/60 hover:text-[#0094b5] transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/>
              </svg>
            </a>
            <a href="#" class="text-white/60 hover:text-[#0094b5] transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Content Area (Scrollable) -->
      <div class="w-2/3 overflow-y-auto" ref="contentArea">
        <div class="p-8 space-y-16">
          <!-- Introduction Section -->
          <section id="introduction" class="min-h-screen flex items-center">
            <div class="space-y-6">
              <h2 class="text-[#0094b5] text-4xl font-bold mb-6" style="font-family: 'Sarpanch', sans-serif;">
                Introduction
              </h2>
              <p class="text-white text-lg leading-relaxed" style="font-family: 'Quicksand', sans-serif;">
                Hello! I'm a passionate web developer and designer with expertise in creating modern, user-friendly digital experiences. 
                With a strong background in both front-end and back-end development, I specialize in building responsive websites 
                and web applications that not only look great but also perform exceptionally well.
              </p>
              <p class="text-white text-lg leading-relaxed" style="font-family: 'Quicksand', sans-serif;">
                My journey in web development started several years ago, and since then, I've been dedicated to staying up-to-date 
                with the latest technologies and best practices. I believe in creating solutions that are not just visually appealing 
                but also accessible, performant, and maintainable.
              </p>
              <div class="grid grid-cols-2 gap-6 mt-8">
                <div class="bg-[#182B33]/50 p-6 rounded-lg backdrop-blur-sm">
                  <h3 class="text-[#0094b5] text-xl font-semibold mb-2" style="font-family: 'Sarpanch', sans-serif;">Frontend</h3>
                  <p class="text-white/80" style="font-family: 'Quicksand', sans-serif;">Vue.js, React, HTML5, CSS3, JavaScript</p>
                </div>
                <div class="bg-[#182B33]/50 p-6 rounded-lg backdrop-blur-sm">
                  <h3 class="text-[#0094b5] text-xl font-semibold mb-2" style="font-family: 'Sarpanch', sans-serif;">Backend</h3>
                  <p class="text-white/80" style="font-family: 'Quicksand', sans-serif;">Node.js, Laravel, PHP, MySQL</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Education Section -->
          <section id="education" class="min-h-screen flex items-center">
            <div class="w-full space-y-8">
              <h2 class="text-[#0094b5] text-4xl font-bold" style="font-family: 'Sarpanch', sans-serif;">
                Education
              </h2>
              
              <!-- Education Item 1 -->
              <div class="flex gap-6 bg-[#182B33]/50 p-6 rounded-lg backdrop-blur-sm">
                <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-[#0094b5] flex-shrink-0">
                  <img src="../assets/logo.svg" alt="University Logo" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1">
                  <h3 class="text-[#0094b5] text-xl font-semibold" style="font-family: 'Sarpanch', sans-serif;">
                    University of the Immaculate Conception
                  </h3>
                  <p class="text-white/80 mb-2" style="font-family: 'Quicksand', sans-serif;">
                    Bachelor of Science in Information Technology
                  </p>
                  <p class="text-white text-sm leading-relaxed" style="font-family: 'Quicksand', sans-serif;">
                    Focused on web development, database management, and software engineering. 
                    Graduated with honors and completed several projects involving modern web technologies.
                  </p>
                </div>
              </div>

              <!-- Education Item 2 -->
              <div class="flex gap-6 bg-[#182B33]/50 p-6 rounded-lg backdrop-blur-sm">
                <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-[#0094b5] flex-shrink-0">
                  <img src="../assets/logo.svg" alt="University Logo" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1">
                  <h3 class="text-[#0094b5] text-xl font-semibold" style="font-family: 'Sarpanch', sans-serif;">
                    University of Southeastern Philippines
                  </h3>
                  <p class="text-white/80 mb-2" style="font-family: 'Quicksand', sans-serif;">
                    Computer Science Foundation
                  </p>
                  <p class="text-white text-sm leading-relaxed" style="font-family: 'Quicksand', sans-serif;">
                    Built a strong foundation in computer science principles, algorithms, and programming fundamentals 
                    that continue to guide my development approach today.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Experience Section -->
          <section id="experience" class="min-h-screen flex items-center">
            <div class="w-full space-y-8">
              <h2 class="text-[#0094b5] text-4xl font-bold" style="font-family: 'Sarpanch', sans-serif;">
                Experience
              </h2>
              
              <div class="space-y-6">
                <div class="bg-[#182B33]/50 p-6 rounded-lg backdrop-blur-sm">
                  <h3 class="text-[#0094b5] text-xl font-semibold mb-2" style="font-family: 'Sarpanch', sans-serif;">
                    Senior Web Developer
                  </h3>
                  <p class="text-white/80 mb-4" style="font-family: 'Quicksand', sans-serif;">
                    Money Trees Company • 2022 - Present
                  </p>
                  <p class="text-white leading-relaxed" style="font-family: 'Quicksand', sans-serif;">
                    Leading development of complex web applications and managing a team of developers. 
                    Responsible for architecture decisions, code reviews, and ensuring best practices across all projects.
                  </p>
                </div>

                <div class="bg-[#182B33]/50 p-6 rounded-lg backdrop-blur-sm">
                  <h3 class="text-[#0094b5] text-xl font-semibold mb-2" style="font-family: 'Sarpanch', sans-serif;">
                    Full Stack Developer
                  </h3>
                  <p class="text-white/80 mb-4" style="font-family: 'Quicksand', sans-serif;">
                    Tech Solutions Inc. • 2020 - 2022
                  </p>
                  <p class="text-white leading-relaxed" style="font-family: 'Quicksand', sans-serif;">
                    Developed and maintained multiple client projects using modern web technologies. 
                    Collaborated with design teams to implement pixel-perfect user interfaces.
                  </p>
                </div>

                <div class="bg-[#182B33]/50 p-6 rounded-lg backdrop-blur-sm">
                  <h3 class="text-[#0094b5] text-xl font-semibold mb-2" style="font-family: 'Sarpanch', sans-serif;">
                    Junior Developer
                  </h3>
                  <p class="text-white/80 mb-4" style="font-family: 'Quicksand', sans-serif;">
                    StartUp Digital • 2019 - 2020
                  </p>
                  <p class="text-white leading-relaxed" style="font-family: 'Quicksand', sans-serif;">
                    Started my professional journey building responsive websites and learning industry best practices. 
                    Gained experience in version control, testing, and agile development methodologies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Skills Section -->
          <section id="skills" class="min-h-screen flex items-center">
            <div class="w-full space-y-8">
              <h2 class="text-[#0094b5] text-4xl font-bold" style="font-family: 'Sarpanch', sans-serif;">
                Skills & Expertise
              </h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-6">
                  <h3 class="text-white text-xl font-semibold" style="font-family: 'Sarpanch', sans-serif;">
                    Technical Skills
                  </h3>
                  
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between mb-2">
                        <span class="text-white" style="font-family: 'Quicksand', sans-serif;">Vue.js</span>
                        <span class="text-[#0094b5]">95%</span>
                      </div>
                      <div class="w-full bg-[#182B33] rounded-full h-2">
                        <div class="bg-[#0094b5] h-2 rounded-full" style="width: 95%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-2">
                        <span class="text-white" style="font-family: 'Quicksand', sans-serif;">React</span>
                        <span class="text-[#0094b5]">90%</span>
                      </div>
                      <div class="w-full bg-[#182B33] rounded-full h-2">
                        <div class="bg-[#0094b5] h-2 rounded-full" style="width: 90%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-2">
                        <span class="text-white" style="font-family: 'Quicksand', sans-serif;">Laravel</span>
                        <span class="text-[#0094b5]">88%</span>
                      </div>
                      <div class="w-full bg-[#182B33] rounded-full h-2">
                        <div class="bg-[#0094b5] h-2 rounded-full" style="width: 88%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-2">
                        <span class="text-white" style="font-family: 'Quicksand', sans-serif;">Node.js</span>
                        <span class="text-[#0094b5]">85%</span>
                      </div>
                      <div class="w-full bg-[#182B33] rounded-full h-2">
                        <div class="bg-[#0094b5] h-2 rounded-full" style="width: 85%"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="space-y-6">
                  <h3 class="text-white text-xl font-semibold" style="font-family: 'Sarpanch', sans-serif;">
                    Design Skills
                  </h3>
                  
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between mb-2">
                        <span class="text-white" style="font-family: 'Quicksand', sans-serif;">UI/UX Design</span>
                        <span class="text-[#0094b5]">92%</span>
                      </div>
                      <div class="w-full bg-[#182B33] rounded-full h-2">
                        <div class="bg-[#0094b5] h-2 rounded-full" style="width: 92%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-2">
                        <span class="text-white" style="font-family: 'Quicksand', sans-serif;">Figma</span>
                        <span class="text-[#0094b5]">90%</span>
                      </div>
                      <div class="w-full bg-[#182B33] rounded-full h-2">
                        <div class="bg-[#0094b5] h-2 rounded-full" style="width: 90%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-2">
                        <span class="text-white" style="font-family: 'Quicksand', sans-serif;">Adobe Creative Suite</span>
                        <span class="text-[#0094b5]">85%</span>
                      </div>
                      <div class="w-full bg-[#182B33] rounded-full h-2">
                        <div class="bg-[#0094b5] h-2 rounded-full" style="width: 85%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-2">
                        <span class="text-white" style="font-family: 'Quicksand', sans-serif;">Responsive Design</span>
                        <span class="text-[#0094b5]">95%</span>
                      </div>
                      <div class="w-full bg-[#182B33] rounded-full h-2">
                        <div class="bg-[#0094b5] h-2 rounded-full" style="width: 95%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const contentArea = ref(null);
const activeSection = ref('introduction');

const scrollToContent = (sectionId) => {
  const element = document.getElementById(sectionId);
  const container = contentArea.value;
  
  if (element && container) {
    const elementTop = element.offsetTop - container.offsetTop;
    container.scrollTo({
      top: elementTop - 50, // Small offset for better positioning
      behavior: 'smooth'
    });
  }
};

const handleScroll = () => {
  if (!contentArea.value) return;
  
  const container = contentArea.value;
  const sections = ['introduction', 'education', 'experience', 'skills'];
  const scrollTop = container.scrollTop;
  
  // Find which section is currently in view
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section) {
      const sectionTop = section.offsetTop - container.offsetTop;
      if (scrollTop >= sectionTop - 200) { // 200px offset for better detection
        activeSection.value = sections[i];
        break;
      }
    }
  }
};

onMounted(() => {
  // Add scroll listener to content area
  if (contentArea.value) {
    contentArea.value.addEventListener('scroll', handleScroll);
  }
  
  // Set initial active section
  activeSection.value = 'introduction';
});

onUnmounted(() => {
  // Clean up scroll listener
  if (contentArea.value) {
    contentArea.value.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style scoped>
.about-bg {
  background: #0A1924;
  background: linear-gradient(0deg, rgba(10, 25, 36, 1) 0%, rgba(22, 46, 51, 1) 50%, rgba(10, 25, 36, 1) 100%);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Custom scrollbar for content area */
.w-2\/3::-webkit-scrollbar {
  width: 8px;
}

.w-2\/3::-webkit-scrollbar-track {
  background: rgba(24, 43, 51, 0.3);
  border-radius: 4px;
}

.w-2\/3::-webkit-scrollbar-thumb {
  background: rgba(0, 120, 110, 0.6);
  border-radius: 4px;
}

.w-2\/3::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 118, 125, 0.8);
}

/* Smooth scrolling behavior */
.w-2\/3 {
  scroll-behavior: smooth;
}

/* Section spacing */
section {
  scroll-margin-top: 2rem;
}

/* Progress bar animations */
.bg-\[#0094b5\] {
  transition: width 0.8s ease-in-out;
}

/* Hover effects for navigation buttons */
button:hover {
  transform: translateX(4px);
}

/* Social links hover effects */
a svg {
  transition: all 0.3s ease;
}

a:hover svg {
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .flex {
    flex-direction: column;
  }
  
  .w-1\/3, .w-2\/3 {
    width: 100%;
  }
  
  .sticky {
    position: relative;
  }
  
  .h-screen {
    height: auto;
    min-height: 100vh;
  }
}

/* Prevent any horizontal overflow */
:deep(*) {
  box-sizing: border-box;
}
</style>
