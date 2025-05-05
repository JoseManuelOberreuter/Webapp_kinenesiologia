<template>
  <section class="cta-section">
    <div class="container px-5">
      <div class="row gx-5 justify-content-center">
        <div class="col-xxl-8">
          <div class="cta-container">
            <div class="cta-content">
              <h2 class="cta-title">¿Listo para comenzar tu tratamiento?</h2>
              <p class="cta-text">Agenda tu hora ahora y comienza tu camino hacia una mejor salud y bienestar.</p>
              <router-link to="/contacto" class="cta-button">
                Agendar hora
                <i class="bi bi-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaSection'
}
</script>

<style scoped>
.cta-section {
  padding-bottom: 3rem;
  background: #f8fafc;
}

.cta-container {
  background: linear-gradient(135deg, #1d4ed8, #3b82f6);
  border-radius: 24px;
  padding: 4rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: white;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.cta-text {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: #1d4ed8;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  color: #1d4ed8;
}

.cta-button i {
  transition: transform 0.3s ease;
}

.cta-button:hover i {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .cta-container {
    padding: 3rem 2rem;
  }

  .cta-title {
    font-size: 2rem;
  }

  .cta-text {
    font-size: 1rem;
  }

  .cta-button {
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
  }
}
</style> 