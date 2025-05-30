<template>
  <div id="products" class="min-h-screen p-6 md:p-12 lg:px-[10%] lg:py-16 pt-24 products-bg">
    <!-- Header -->
    <h1 class="text-[#FF6B00] text-5xl md:text-7xl mb-10 md:mb-16" style="font-family: 'Sarpanch', sans-serif;">
      PRODUCTS
    </h1>

    <!-- Products Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      <div v-for="(product, i) in products" :key="i" class="card-container cursor-pointer h-full" data-aos="fade-up" :data-aos-delay="i * 100" @click="openModal(i)">
        <div ref="productCards" class="product-card group relative bg-[#182B33]/50 rounded-lg md:rounded-xl backdrop-blur-sm border border-[#151e18]/30 md:border-2 shadow-[0_4px_8px_rgba(0,20,0,0.5)] flex flex-col h-full min-h-[220px]">
          <div class="flex items-center justify-center product-image-container">
            <img
              :src="productImages[i]"
              :alt="product.title"
              class="product-pop-image"
            />
          </div>
          <div class="p-2 md:p-3 lg:p-4 flex flex-col flex-1 pt-6 md:pt-8 lg:pt-10">
            <h2 class="text-[#FF6B00] text-sm md:text-base lg:text-lg mb-2 font-bold" style="font-family: 'Sarpanch', sans-serif;">
              {{ product.title }}
            </h2>
            <p class="text-white text-xs md:text-sm lg:text-base leading-relaxed font-medium flex-1" style="font-family: 'Quicksand', sans-serif;">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="products.length % 3 === 2" class="hidden md:block"></div>
    </div>

    <!-- Product Modal -->
    <div v-if="selectedProduct !== null" 
         class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
         @click="closeModal">
      <div class="relative bg-[#182B33] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
           @click.stop>
        <button @click="closeModal" 
                class="absolute top-4 right-4 text-white hover:text-[#FF6B00] text-2xl cursor-pointer hover:shadow-[0_0_10px_rgba(255,107,0,0.5)] active:scale-95 transition-all duration-300 z-[10000]"
                style="font-family: 'Sarpanch', sans-serif;">
          ✕
        </button>
        <div class="grid md:grid-cols-2 gap-8 p-6 md:p-8">
          <div class="aspect-[4/3] relative overflow-hidden rounded-lg flex items-center justify-center">
            <img :src="productImages[selectedProduct]" 
                 :alt="products[selectedProduct].title"
                 class="w-full h-full object-cover object-center" />
          </div>
          <div class="space-y-4">
            <h2 class="text-[#FF6B00] text-3xl md:text-4xl" style="font-family: 'Sarpanch', sans-serif;">
              {{ products[selectedProduct].title }}
            </h2>
            <div class="space-y-4 text-white" style="font-family: 'Quicksand', sans-serif;">
              <p class="text-base md:text-lg leading-relaxed">
                {{ products[selectedProduct].description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const products = [
  {
    title: 'Scheduling & Booking Systems',
    description: 'Flexible solutions for managing appointments, reservations, and schedules—ideal for clinics, service providers, facilities, and events. Designed for both local enterprises and global operations.'
  },
  {
    title: 'Digital Library & Content Management',
    description: 'Digitize and manage books, documents, and archives with secure, searchable systems—perfect for schools, LGUs, and institutions worldwide seeking organized digital access.'
  },
  {
    title: 'Rental & Asset Management',
    description: 'Efficient tracking and automation for rental properties, vehicles, and equipment. Scalable for local businesses or international leasing and logistics operations.'
  },
  {
    title: 'Administrative & Productivity Tools',
    description: 'Boost efficiency with systems for HR, payroll, inventory, and local governance. Custom-fit for SMEs, corporations, and public sector offices across different regions.'
  },
  {
    title: 'Custom-Built Enterprise Solutions',
    description: 'Tailored software designed to meet the unique workflows and goals of businesses—whether for sales tracking, customer portals, e-commerce operations, or internal systems. Scalable for startups, SMEs, and growing enterprises in both local and international markets.'
  }
];

const selectedProduct = ref(null);
const productCards = ref([]);

// Import all product images (use first 5 images)
const productImages = [
  new URL(`../assets/products/scheduling.svg`, import.meta.url).href,
  new URL(`../assets/products/digital-library.svg`, import.meta.url).href,
  new URL(`../assets/products/rental.svg`, import.meta.url).href,
  new URL(`../assets/products/administrative.svg`, import.meta.url).href,
  new URL(`../assets/products/enterprise.svg`, import.meta.url).href
];

const openModal = (productId) => {
  selectedProduct.value = productId;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  console.log('closeModal called');
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

  // Add event listeners to all product cards
  productCards.value.forEach(card => {
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

.products-bg {
  background: #0A1924;
  background: linear-gradient(0deg, rgba(10, 25, 36, 1) 0%, rgba(22, 46, 51, 1) 50%, rgba(10, 25, 36, 1) 100%);
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
  box-shadow: 0 12px 32px 0 #427CA6, 0 8px 24px 0 rgba(0,0,0,0.25), 0 1.5px 6px 0 #427CA6, 0 0.5px 2px 0 rgba(0,0,0,0.10);
}

.product-image-container {
  padding-top: 20px;
}

.product-pop-image {
  margin-top: -40px;
  width: 140px;
  height: 140px;
  z-index: 2;
  transition: transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s;
  background: transparent;
}

.card-container:hover .product-pop-image,
.product-card:focus-within .product-pop-image {
  transform: translateY(-10%) scale(1.08) rotate(-2deg);
}

@media (min-width: 768px) {
  .product-image-container {
    padding-top: 30px;
  }
  .product-pop-image {
    margin-top: -60px;
    width: 180px;
    height: 180px;
  }
}
@media (min-width: 1024px) {
  .product-image-container {
    padding-top: 40px;
  }
  .product-pop-image {
    margin-top: -80px;
    width: 220px;
    height: 220px;
  }
}
</style>
