<template>
  <div>
    <Navbar />
    <Hero />
    <AboutSection />
    <LocationsSection />
    <CtaSection />
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import Hero from '@/components/home/Hero.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import LocationsSection from '@/components/home/LocationsSection.vue'
import CtaSection from '@/components/home/CtaSection.vue'
import Footer from '@/components/layout/Footer.vue'
import WhatsAppButton from '@/components/common/WhatsAppButton.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Hero,
    AboutSection,
    LocationsSection,
    CtaSection,
    Footer,
    WhatsAppButton
  }
}
</script>

<style scoped>
/* Any additional styles specific to the Home view can go here */
</style> 