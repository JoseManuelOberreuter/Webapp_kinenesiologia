<template>
  <section class="cta-section">
    <div class="container px-3 px-sm-5">
      <div class="row gx-3 gx-sm-5 justify-content-center">
        <div class="col-xxl-8 col-lg-10">
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
  position: relative;
  overflow: hidden;
}

.cta-container::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(rgba(255, 255, 255, 0.15), transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  justify-content: center;
  gap: 0.5rem;
  background: white;
  color: #1d4ed8;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  color: #1d4ed8;
}

.cta-button i {
  transition: transform 0.3s ease;
}

.cta-button:hover i {
  transform: translateX(5px);
}

@media (max-width: 991px) {
  .cta-container {
    padding: 3.5rem 3rem;
  }
  
  .cta-title {
    font-size: 2.25rem;
  }
  
  .cta-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .cta-section {
    padding-bottom: 2.5rem;
  }
  
  .cta-container {
    padding: 3rem 2rem;
    margin: 0 0.5rem;
    border-radius: 20px;
  }

  .cta-title {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  .cta-text {
    font-size: 1rem;
    margin-bottom: 1.75rem;
  }

  .cta-button {
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 576px) {
  .cta-section {
    padding-bottom: 2rem;
  }
  
  .cta-container {
    padding: 2.5rem 1.5rem;
    margin: 0;
    border-radius: 16px;
  }
  
  .cta-title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  
  .cta-text {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  
  .cta-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
    width: 100%;
  }
}

@media (max-width: 400px) {
  .cta-container {
    padding: 2rem 1.25rem;
  }
  
  .cta-title {
    font-size: 1.5rem;
  }
  
  .cta-text {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
  
  .cta-button {
    padding: 0.7rem 1.25rem;
    font-size: 0.9rem;
  }
}
</style> 