<template>
  <div>
    <Navbar />
    
    <!-- Treatments Section-->
    <section class="treatments-section">
      <div class="container px-3 px-sm-5">
        <h1 class="display-5 fw-bolder text-center mb-4 mb-sm-5">
          <span class="text-gradient d-inline">Tratamientos</span>
        </h1>
        
        <div class="row g-3 g-sm-4 g-md-5">
          <!-- Rehabilitación Traumatológica -->
          <div class="col-md-6">
            <div class="treatment-card">
              <div class="treatment-icon">
                <i class="bi bi-bandaid-fill"></i>
              </div>
              <h3 class="h4 fw-bolder mb-3">Rehabilitación Traumatológica</h3>
              <p class="text-muted mb-4">
                Tratamiento especializado para lesiones músculo-esqueléticas, recuperación post-operatoria,
                y manejo del dolor crónico. Incluye terapia manual, ejercicios terapéuticos y educación preventiva.
              </p>
              <ul class="treatment-list">
                <li>Lesiones deportivas</li>
                <li>Recuperación post-quirúrgica</li>
                <li>Dolor lumbar y cervical</li>
                <li>Tendinopatías</li>
              </ul>
            </div>
          </div>

          <!-- Rehabilitación Neurológica -->
          <div class="col-md-6">
            <div class="treatment-card">
              <div class="treatment-icon">
                <i class="bi bi-activity"></i>
              </div>
              <h3 class="h4 fw-bolder mb-3">Rehabilitación Neurológica</h3>
              <p class="text-muted mb-4">
                Terapia especializada para pacientes con condiciones neurológicas, enfocada en mejorar
                la funcionalidad, el equilibrio y la independencia en actividades diarias.
              </p>
              <ul class="treatment-list">
                <li>ACV (Derrame cerebral)</li>
                <li>Parkinson</li>
                <li>Esclerosis múltiple</li>
                <li>Neuropatías periféricas</li>
              </ul>
            </div>
          </div>

          <!-- Rehabilitación Adulto Mayor -->
          <div class="col-md-6">
            <div class="treatment-card">
              <div class="treatment-icon">
                <i class="bi bi-heart-pulse-fill"></i>
              </div>
              <h3 class="h4 fw-bolder mb-3">Rehabilitación Adulto Mayor</h3>
              <p class="text-muted mb-4">
                Programa personalizado para mejorar la calidad de vida del adulto mayor,
                enfocado en mantener la independencia funcional y prevenir caídas.
              </p>
              <ul class="treatment-list">
                <li>Prevención de caídas</li>
                <li>Fortalecimiento muscular</li>
                <li>Mejora del equilibrio</li>
                <li>Actividades funcionales</li>
              </ul>
            </div>
          </div>

          <!-- Clases de Prevención -->
          <div class="col-md-6">
            <div class="treatment-card">
              <div class="treatment-icon">
                <i class="bi bi-shield-fill-check"></i>
              </div>
              <h3 class="h4 fw-bolder mb-3">Prevención de Caídas</h3>
              <p class="text-muted mb-4">
                Sesiones enfocadas en prevenir caídas y mejorar la estabilidad.
                Programa personalizado para fortalecer el equilibrio y la confianza en el movimiento.
              </p>
              <ul class="treatment-list">
                <li>Evaluación del riesgo de caídas</li>
                <li>Ejercicios de equilibrio y coordinación</li>
                <li>Fortalecimiento muscular específico</li>
                <li>Estrategias de seguridad en el hogar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <div class="container px-3 px-sm-5">
        <div class="row gx-3 gx-sm-5 justify-content-center">
          <div class="col-xxl-8 col-lg-10">
            <div class="cta-container">
              <div class="cta-content">
                <h2 class="cta-title">¿Quieres saber más sobre nuestros tratamientos?</h2>
                <p class="cta-text">Agenda una consulta inicial para evaluar tu caso y diseñar un plan de tratamiento personalizado.</p>
                <router-link to="/contacto" class="cta-button">
                  Agendar Consulta
                  <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import WhatsAppButton from '@/components/common/WhatsAppButton.vue'

export default {
  name: 'TreatmentsView',
  components: {
    Navbar,
    Footer,
    WhatsAppButton
  }
}
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.treatments-section {
  padding: 5rem 0 2rem;
  margin-top: 70px;
}

.treatment-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
}

.treatment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
}

.treatment-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.treatment-icon i {
  font-size: 1.75rem;
  color: white;
}

.treatment-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.treatment-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: #64748b;
}

.treatment-list li::before {
  content: '•';
  color: #2563eb;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.btn-primary {
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  border: none;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.1);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(37, 99, 235, 0.2);
}

/* Call to Action Section */
.cta-section {
  padding: 2rem 0 3rem;
  background: white;
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
  .treatments-section {
    padding: 4.5rem 0 2rem;
  }
  
  .treatment-card {
    padding: 1.75rem;
    border-radius: 16px;
  }
  
  .treatment-icon {
    width: 55px;
    height: 55px;
    margin-bottom: 1.25rem;
  }
  
  .cta-container {
    padding: 3.5rem 3rem;
  }
  
  .cta-title {
    font-size: 2.25rem;
  }
  
  .display-5 {
    font-size: calc(1.4rem + 1.5vw);
  }
}

@media (max-width: 768px) {
  .treatments-section {
    padding: 4rem 0 1.5rem;
    margin-top: 60px;
  }
  
  .h4 {
    font-size: 1.25rem;
  }
  
  .treatment-card {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 14px;
  }
  
  .treatment-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    margin-bottom: 1rem;
  }
  
  .treatment-icon i {
    font-size: 1.5rem;
  }
  
  .treatment-list li {
    padding-left: 1.25rem;
    margin-bottom: 0.4rem;
    font-size: 0.95rem;
  }
  
  .text-muted {
    font-size: 0.95rem;
  }
  
  .cta-section {
    padding: 1.5rem 0 2.5rem;
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
  .treatments-section {
    padding: 3.5rem 0 1rem;
    margin-top: 56px;
  }
  
  .display-5 {
    font-size: calc(1.3rem + 1vw);
  }
  
  .h4 {
    font-size: 1.15rem;
  }
  
  .treatment-card {
    padding: 1.25rem;
    border-radius: 12px;
    margin-bottom: 1.25rem;
  }
  
  .treatment-icon {
    width: 45px;
    height: 45px;
    border-radius: 10px;
  }
  
  .treatment-icon i {
    font-size: 1.35rem;
  }
  
  .text-muted {
    font-size: 0.9rem;
    margin-bottom: 0.75rem !important;
  }
  
  .treatment-list li {
    font-size: 0.9rem;
    padding-left: 1.15rem;
  }
  
  .cta-section {
    padding: 1rem 0 2rem;
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
  .treatments-section {
    padding: 3rem 0 0.75rem;
  }
  
  .display-5 {
    font-size: 1.5rem;
  }
  
  .h4 {
    font-size: 1.1rem;
  }
  
  .treatment-card {
    padding: 1rem;
  }
  
  .treatment-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 0.75rem;
  }
  
  .treatment-icon i {
    font-size: 1.25rem;
  }
  
  .text-muted {
    font-size: 0.85rem;
    margin-bottom: 0.5rem !important;
  }
  
  .treatment-list li {
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
  }
  
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