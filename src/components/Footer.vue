<template>
  <footer class="bg-[#1a2820] text-white py-16 px-6 md:px-12 lg:px-[10%]">
    <div class="max-w-7xl mx-auto">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Logo and Description -->
        <div class="space-y-6">
          <div class="flex items-center">
            <img src="../assets/logo.svg" loading="lazy" alt="Money Trees Logo" class="h-10 w-10 mr-3" />
            <span class="text-2xl font-bold" style="font-family: 'Sarpanch', sans-serif;">Money Trees</span>
          </div>
          <p class="text-gray-400" style="font-family: 'Quicksand', sans-serif;">
            Delivering high-quality digital solutions and online services across multiple industries in the Philippines and beyond.
          </p>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-4" style="font-family: 'Sarpanch', sans-serif;">Services</h3>
          <ul class="space-y-2 text-gray-400" style="font-family: 'Quicksand', sans-serif;">
            <li><a href="#services" class="hover:text-[#FF6B00] transition-colors">IT Services</a></li>
            <li><a href="#services" class="hover:text-[#FF6B00] transition-colors">Marketing Services</a></li>
            <li><a href="#products" class="hover:text-[#FF6B00] transition-colors">Products</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-lg font-semibold mb-4" style="font-family: 'Sarpanch', sans-serif;">Company</h3>
          <ul class="space-y-2 text-gray-400" style="font-family: 'Quicksand', sans-serif;">
            <li><a href="#about" class="hover:text-[#FF6B00] transition-colors">About Us</a></li>
            <li><a href="#team" class="hover:text-[#FF6B00] transition-colors">Meet the Team</a></li>
            <li><a href="#partners" class="hover:text-[#FF6B00] transition-colors">Partners</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="text-lg font-semibold mb-4" style="font-family: 'Sarpanch', sans-serif;">Support</h3>
          <ul class="space-y-2 text-gray-400" style="font-family: 'Quicksand', sans-serif;">
            <li><a href="#contact" class="hover:text-[#FF6B00] transition-colors">Contact Us</a></li>
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">mail</span>
              <span>info@moneytrees.com</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">call</span>
              <span>+63 912 345 6789</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <!-- Copyright -->
          <p class="text-gray-400 text-sm" style="font-family: 'Quicksand', sans-serif;">
            © 2024 Money Trees Company. All rights reserved.
          </p>
          <!-- Social Links -->
          <div class="flex gap-6">
            <a href="#" class="text-gray-400 hover:text-[#FF6B00] transition-colors">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-[#FF6B00] transition-colors">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-[#FF6B00] transition-colors">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-[#FF6B00] transition-colors">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-[#FF6B00] transition-colors">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional script needed
</script>

<style scoped>
a {
  display: inline-block;
  transition: all 0.3s ease;
}

a:hover {
  transform: translateX(5px);
}
</style>
