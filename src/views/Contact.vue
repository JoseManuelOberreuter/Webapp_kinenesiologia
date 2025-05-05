<template>
  <div>
    <Navbar />

    <!-- Contact Section-->
    <section class="contact-section">
      <div class="container px-3 px-sm-5">
        <div class="row gx-3 gx-sm-5 justify-content-center">
          <div class="col-lg-8">
            <div class="text-center mb-4 mb-sm-5">
              <h1 class="display-5 fw-bolder mb-0">
                <span class="text-gradient d-inline">Agenda tu Consulta</span>
              </h1>
            </div>
          </div>
        </div>
        <div class="row gx-3 gx-sm-5 justify-content-center">
          <div class="col-lg-6 col-xl-4 mb-4 mb-lg-0">
            <div class="card contact-info-card">
              <div class="card-body p-3 p-sm-4">
                <div class="info-item">
                  <div class="info-icon">
                    <i class="bi bi-clock"></i>
                  </div>
                  <div class="info-content">
                    <div class="fw-bolder">Horario de Atención</div>
                    <div class="text-muted">Lunes a Viernes</div>
                    <div class="text-muted">9:00 - 19:00 hrs</div>
                  </div>
                </div>
                
                <div class="info-item">
                  <div class="info-icon">
                    <i class="bi bi-geo-alt"></i>
                  </div>
                  <div class="info-content">
                    <div class="fw-bolder">Atención a Domicilio en:</div>
                    <div class="text-muted">Providencia, Ñuñoa, La Reina</div>
                    <div class="text-muted">Las Condes, Santiago, Peñalolen</div>
                  </div>
                </div>
                
                <div class="info-item">
                  <div class="info-icon">
                    <i class="bi bi-shield-check"></i>
                  </div>
                  <div class="info-content">
                    <div class="fw-bolder">Convenios</div>
                    <div class="text-muted">Reembolso con todas las Isapres</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-8">
            <div class="card contact-form-card">
              <div class="card-body p-3 p-sm-4">
                <form id="contactForm">
                  <div class="form-floating mb-3">
                    <input class="form-control" id="name" type="text" placeholder="Ingresa tu nombre"/>
                    <label for="name">Nombre completo</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input class="form-control" id="email" type="email" placeholder="ejemplo: kine.paulaaraya@gmail.com"/>
                    <label for="email">Correo electrónico</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input class="form-control" id="phone" type="tel" placeholder="+569XXXXXXXX"/>
                    <label for="phone">Teléfono</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select class="form-select" id="treatment">
                      <option value="" disabled selected>Selecciona un tratamiento</option>
                      <option value="traumatologia">Rehabilitación Traumatológica</option>
                      <option value="neurologia">Rehabilitación Neurológica</option>
                      <option value="adultomayor">Rehabilitación Adulto Mayor</option>
                      <option value="prevencion">Clases de Prevención</option>
                    </select>
                    <label for="treatment">Tipo de tratamiento</label>
                  </div>
                  <div class="form-floating mb-3">
                    <textarea class="form-control" id="message" placeholder="Ingresa tu mensaje" style="height: 10rem"></textarea>
                    <label for="message">Mensaje o consulta</label>
                  </div>
                  <div class="d-grid">
                    <button class="btn btn-primary btn-lg" type="submit">Enviar Consulta</button>
                  </div>
                </form>
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
  name: 'ContactView',
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

.contact-section {
  padding: 5rem 0 3rem;
  margin-top: 70px;
}

/* Contact form styles */
.contact-info-card,
.contact-form-card {
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
}

.contact-info-card:hover,
.contact-form-card:hover {
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-icon {
  width: 45px;
  height: 45px;
  min-width: 45px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.info-icon i {
  font-size: 1.25rem;
  color: white;
}

.info-content {
  flex: 1;
}

.form-control,
.form-select {
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
}

.form-control:focus,
.form-select:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 0.25rem rgba(37, 99, 235, 0.1);
}

.form-floating label {
  padding: 1rem;
}

.btn-primary {
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.1);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(37, 99, 235, 0.2);
}

@media (max-width: 991px) {
  .contact-section {
    padding: 4.5rem 0 2.5rem;
  }

  .contact-info-card, 
  .contact-form-card {
    border-radius: 16px;
  }
  
  .info-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 4rem 0 2rem;
    margin-top: 60px;
  }
  
  .contact-info-card {
    margin-bottom: 1.5rem;
  }

  .info-item {
    margin-bottom: 1.25rem;
  }
  
  .form-floating label {
    padding: 0.8rem 1rem;
  }
  
  .display-5 {
    font-size: calc(1.4rem + 1.5vw);
  }
  
  .form-floating > .form-control,
  .form-floating > .form-select {
    height: calc(3.2rem + 2px);
    padding: 0.8rem 1rem;
  }
  
  .form-floating > textarea.form-control {
    height: 10rem;
    min-height: 10rem;
  }
  
  .info-content .fw-bolder {
    font-size: 0.95rem;
  }
  
  .text-muted {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .contact-section {
    padding: 3.5rem 0 1.5rem;
    margin-top: 56px;
  }
  
  .contact-info-card,
  .contact-form-card {
    border-radius: 14px;
  }
  
  .info-icon {
    width: 36px;
    height: 36px;
    min-width: 36px;
    border-radius: 10px;
    margin-right: 0.75rem;
  }
  
  .info-icon i {
    font-size: 1.1rem;
  }
  
  .display-5 {
    font-size: calc(1.3rem + 1vw);
  }
  
  .form-floating {
    margin-bottom: 0.75rem !important;
  }
  
  .btn-primary {
    padding: 0.875rem;
    border-radius: 10px;
  }
}

@media (max-width: 400px) {
  .contact-section {
    padding: 3rem 0 1rem;
  }
  
  .info-item {
    margin-bottom: 1rem;
  }
  
  .info-content .fw-bolder {
    font-size: 0.9rem;
  }
  
  .text-muted {
    font-size: 0.85rem;
  }
  
  .display-5 {
    font-size: 1.5rem;
  }
  
  .btn-primary {
    font-size: 0.95rem;
  }
}
</style> 