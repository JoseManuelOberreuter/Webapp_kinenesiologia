<template>
  <div>
    <Navbar />

    <!-- Contact Section-->
    <section class="py-5">
      <div class="container px-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8">
            <div class="text-center mb-5">
              <h1 class="display-5 fw-bolder mb-0">
                <span class="text-gradient d-inline">Agenda tu Consulta</span>
              </h1>
            </div>
          </div>
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-6 col-xl-4 mb-5">
            <div class="card contact-info-card">
              <div class="card-body p-4">
                <div class="info-icon mb-4">
                  <i class="bi bi-clock"></i>
                </div>
                <div class="small fw-bolder">Horario de Atención</div>
                <div class="small text-muted">Lunes a Viernes</div>
                <div class="small text-muted mb-4">9:00 - 19:00 hrs</div>
                
                <div class="info-icon mb-4">
                  <i class="bi bi-geo-alt"></i>
                </div>
                <div class="small fw-bolder">Atención a Domicilio en:</div>
                <div class="small text-muted">Providencia, Ñuñoa, La Reina</div>
                <div class="small text-muted">Las Condes, Santiago, Peñalolen</div>
                
                <div class="info-icon mb-4 mt-4">
                  <i class="bi bi-shield-check"></i>
                </div>
                <div class="small fw-bolder">Convenios</div>
                <div class="small text-muted">Reembolso con todas las Isapres</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-8">
            <div class="card contact-form-card">
              <div class="card-body p-4">
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

/* Contact form styles */
.contact-info-card,
.contact-form-card {
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
}

.contact-info-card:hover,
.contact-form-card:hover {
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
}

.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.info-icon i {
  font-size: 1.5rem;
  color: white;
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

section {
  padding-top: 5rem;
}

@media (max-width: 768px) {
  .contact-info-card {
    margin-bottom: 2rem;
  }
}
</style> 