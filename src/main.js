import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init({
  duration: 1000,
  once: false,
  offset: 100
})

// Add structured data for SEO
const addStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Money Trees",
    "url": "https://moneytrees.com",
    "logo": "https://moneytrees.com/logo.svg",
    "description": "Money Trees offers expert web app development, mobile development, software solutions, and digital marketing services to help businesses thrive in the digital landscape.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PH"
    },
    "sameAs": [
      "https://facebook.com/moneytrees",
      "https://twitter.com/moneytrees",
      "https://linkedin.com/company/moneytrees"
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

// Call the function when the app is mounted
createApp(App).mount('#app');
addStructuredData();
