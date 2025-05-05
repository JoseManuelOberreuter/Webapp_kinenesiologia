<template>
  <a href="https://wa.me/56992826286" target="_blank" class="whatsapp-button">
    <i class="bi bi-whatsapp"></i>
  </a>
</template>

<script>
export default {
  name: 'WhatsAppButton'
}
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 0 20px rgba(37, 211, 102, 0.5);
  z-index: 1000;
  animation: pulse 2s infinite;
  text-decoration: none;
  transition: all 0.3s ease;
}

.whatsapp-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(37, 211, 102, 0.8);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

@media (max-width: 768px) {
  .whatsapp-button {
    width: 50px;
    height: 50px;
    font-size: 1.75rem;
    bottom: 20px;
    right: 20px;
  }
}
</style> 