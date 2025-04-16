<template>
  <div id="contact" class="min-h-screen p-6 md:p-12 lg:px-[10%] lg:py-16 pt-24 bg-[#151e18]">
    <!-- Header -->
    <h1 class="text-[#FF6B00] text-3xl md:text-5xl mb-10 text-center" data-aos="fade-down" style="font-family: 'Sarpanch', sans-serif;">
      CONTACT US
    </h1>

    <div class="max-w-6xl mx-auto">
      <div class="bg-[#1a2820]/50 backdrop-blur-sm rounded-xl p-8 md:p-12" data-aos="fade-up">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <!-- Contact Form -->
          <div class="space-y-6">
            <form @submit="handleSubmit">
              <!-- Success Message -->
              <div v-if="showSuccess" class="mb-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-500">
                Message sent successfully!
              </div>
              
              <!-- Error Message -->
              <div v-if="showError" class="mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-500">
                Failed to send message. Please try again.
              </div>

              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_template" value="table">
              
              <!-- Name Input -->
              <div class="relative">
                <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <i class="material-icons text-[#E5C4A8]">person</i>
                </div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  required
                  class="w-full bg-[#151e18] text-[#E5C4A8] rounded-lg pl-12 pr-4 py-3 border border-[#E5C4A8]/30 focus:border-[#E5C4A8] focus:outline-none placeholder-[#E5C4A8]/50"
                  style="font-family: 'Quicksand', sans-serif;"
                />
              </div>

              <!-- Email Input -->
              <div class="relative mt-4">
                <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <i class="material-icons text-[#E5C4A8]">mail</i>
                </div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  required
                  class="w-full bg-[#151e18] text-[#E5C4A8] rounded-lg pl-12 pr-4 py-3 border border-[#E5C4A8]/30 focus:border-[#E5C4A8] focus:outline-none placeholder-[#E5C4A8]/50"
                  style="font-family: 'Quicksand', sans-serif;"
                />
              </div>

              <!-- Message Input -->
              <div class="mt-4">
                <textarea 
                  name="message"
                  placeholder="Message" 
                  rows="6" 
                  required
                  class="w-full bg-[#151e18] text-[#E5C4A8] rounded-lg px-4 py-3 border border-[#E5C4A8]/30 focus:border-[#E5C4A8] focus:outline-none placeholder-[#E5C4A8]/50 resize-none"
                  style="font-family: 'Quicksand', sans-serif;"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full mt-4 bg-[#FF6B00] hover:bg-[#FF6B00]/90 disabled:bg-[#FF6B00]/50 text-white py-3 rounded-lg transition-colors duration-300"
                style="font-family: 'Sarpanch', sans-serif;"
              >
                {{ isSubmitting ? 'SENDING...' : 'SUBMIT' }}
              </button>
            </form>
          </div>

          <!-- Illustration and Social Links -->
          <div class="space-y-8">
            <img 
              src="../assets/contactimage.svg" 
              alt="Contact Illustration" 
              class="w-full max-w-md mx-auto"
            />
            
            <!-- Social Media Links -->
            <div class="flex justify-center gap-6">
              <a href="#" class="text-[#E5C4A8] hover:text-[#FF6B00] transition-colors duration-300">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" class="text-[#E5C4A8] hover:text-[#FF6B00] transition-colors duration-300">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="text-[#E5C4A8] hover:text-[#FF6B00] transition-colors duration-300">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                </svg>
              </a>
              <a href="#" class="text-[#E5C4A8] hover:text-[#FF6B00] transition-colors duration-300">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/>
                </svg>
              </a>
              <a href="#" class="text-[#E5C4A8] hover:text-[#FF6B00] transition-colors duration-300">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
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

// Add Google Icons stylesheet
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Form handling
const isSubmitting = ref(false);
const showSuccess = ref(false);
const showError = ref(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  isSubmitting.value = true;
  showError.value = false;
  
  const form = e.target;
  const formData = new FormData(form);
  
  try {
    const response = await fetch('https://formsubmit.co/ajax/zvisuals.zxc@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData))
    });
    
    if (response.ok) {
      showSuccess.value = true;
      form.reset();
      setTimeout(() => {
        showSuccess.value = false;
      }, 5000);
    } else {
      showError.value = true;
    }
  } catch (error) {
    showError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: false
  });
});
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

input::placeholder, textarea::placeholder {
  color: #E5C4A8;
  opacity: 0.5;
}

input:focus::placeholder, textarea:focus::placeholder {
  opacity: 0.3;
}
</style>

