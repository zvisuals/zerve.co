<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<script setup>
// No props or logic needed
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 200px;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FF6B00;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style> 