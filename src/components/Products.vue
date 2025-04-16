<template>
  <div id="products" class="min-h-screen p-6 md:p-12 lg:px-[10%] lg:py-16 pt-24">
    <!-- Header -->
    <h1 class="text-[#FF6B00] text-5xl md:text-7xl mb-10 md:mb-16" style="font-family: 'Sarpanch', sans-serif;">
      PRODUCTS
    </h1>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      <!-- First 8 products in rows of 4 -->
      <template v-for="i in 8" :key="i">
        <div class="card-container cursor-pointer" data-aos="fade-up" :data-aos-delay="((i-1) % 4) * 100" @click="openModal(i)">
          <div :ref="`card${i}`" class="product-card group relative bg-[#223329]/50 rounded-xl overflow-hidden backdrop-blur-sm border-2 border-[#151e18]/30 shadow-[0_4px_8px_rgba(0,20,0,0.5)]">
            <div class="aspect-[16/9] relative overflow-hidden">
              <img :src="productImages[i]" :alt="`Product ${i}`" class="w-full h-full object-cover object-center transform group-hover:-translate-y-4 transition-transform duration-500 ease-out" />
            </div>
            <div class="p-4 md:p-6">
              <h2 class="text-[#FF6B00] text-xl md:text-2xl mb-3" style="font-family: 'Sarpanch', sans-serif;">
                Product Title {{ i }}
              </h2>
              <p class="text-white text-sm md:text-base leading-relaxed font-medium" style="font-family: 'Quicksand', sans-serif;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </template>

      <!-- Last 2 products centered -->
      <div class="lg:col-span-2 lg:col-start-2">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <template v-for="i in 2" :key="i+8">
            <div class="card-container cursor-pointer" data-aos="fade-up" :data-aos-delay="(i-1) * 100" @click="openModal(i+8)">
              <div :ref="`card${i+8}`" class="product-card group relative bg-[#223329]/50 rounded-xl overflow-hidden backdrop-blur-sm border-2 border-[#151e18]/30 shadow-[0_4px_8px_rgba(0,20,0,0.5)]">
                <div class="aspect-[16/9] relative overflow-hidden">
                  <img :src="productImages[i+8]" :alt="`Product ${i+8}`" class="w-full h-full object-cover object-center transform group-hover:-translate-y-4 transition-transform duration-500 ease-out" />
                </div>
                <div class="p-4 md:p-6">
                  <h2 class="text-[#FF6B00] text-xl md:text-2xl mb-3" style="font-family: 'Sarpanch', sans-serif;">
                    Product Title {{ i+8 }}
                  </h2>
                  <p class="text-white text-sm md:text-base leading-relaxed font-medium" style="font-family: 'Quicksand', sans-serif;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Product Modal -->
    <div v-if="selectedProduct" 
         class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
         @click="closeModal">
      <div class="relative bg-[#223329] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
           @click.stop>
        <button @click="closeModal" 
                class="absolute top-4 right-4 text-white hover:text-[#FF6B00] text-2xl"
                style="font-family: 'Sarpanch', sans-serif;">
          ✕
        </button>
        <div class="grid md:grid-cols-2 gap-8 p-6 md:p-8">
          <div class="aspect-[4/3] relative overflow-hidden rounded-lg">
            <img :src="productImages[selectedProduct]" 
                 :alt="`Product ${selectedProduct}`"
                 class="w-full h-full object-cover object-center" />
          </div>
          <div class="space-y-4">
            <h2 class="text-[#FF6B00] text-3xl md:text-4xl" style="font-family: 'Sarpanch', sans-serif;">
              Product Title {{ selectedProduct }}
            </h2>
            <div class="space-y-4 text-white" style="font-family: 'Quicksand', sans-serif;">
              <p class="text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis arcu et mi tincidunt, at tincidunt mi tempor. 
                Curabitur at eros at odio posuere laoreet.
              </p>
              <div class="space-y-2">
                <h3 class="text-[#FF6B00] text-lg font-semibold">Key Features:</h3>
                <ul class="list-disc list-inside space-y-1">
                  <li>Feature 1: High-quality materials</li>
                  <li>Feature 2: Innovative design</li>
                  <li>Feature 3: Long-lasting durability</li>
                  <li>Feature 4: Easy maintenance</li>
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

const selectedProduct = ref(null);
const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const card4 = ref(null);
const card5 = ref(null);
const card6 = ref(null);
const card7 = ref(null);
const card8 = ref(null);
const card9 = ref(null);
const card10 = ref(null);

// Import all product images
const productImages = {};
for (let i = 1; i <= 10; i++) {
  productImages[i] = new URL(`../assets/products/product${i}.svg`, import.meta.url).href;
}

const openModal = (productId) => {
  selectedProduct.value = productId;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedProduct.value = null;
  document.body.style.overflow = '';
};

onMounted(() => {
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

  // Add event listeners to all cards
  [
    card1.value, card2.value, card3.value, card4.value, card5.value,
    card6.value, card7.value, card8.value, card9.value, card10.value
  ].forEach(card => {
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

.product-card {
  transform: perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1);
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
  will-change: transform;
}

.product-card:hover {
  transform: perspective(1000px) rotateX(0) rotateY(0) scale3d(1.02, 1.02, 1.02);
}
</style>
