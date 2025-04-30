<template>
  <div>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container px-5">
        <router-link class="navbar-brand" to="/">
          <span class="fw-bolder text-primary">Paula Araya Kinesiología</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-lg-0 small fw-bolder">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tratamientos">Tratamientos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacto">Agendar hora</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

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
                    <input class="form-control" id="email" type="email" placeholder="nombre@ejemplo.com"/>
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

    <!-- Footer -->
    <footer class="footer">
      <div class="container px-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-xxl-8">
            <div class="footer-content">
              <div class="footer-brand">
                <h3 class="footer-title">Paula Araya Kinesiología</h3>
                <p class="footer-text">Kinesiología a domicilio en Santiago</p>
              </div>
              <div class="footer-contact">
                <a href="tel:+56992826286" class="footer-link">
                  <i class="bi bi-telephone"></i>
                  +56 9 9282 6286
                </a>
                <a href="mailto:contacto@paulaarayakine.cl" class="footer-link">
                  <i class="bi bi-envelope"></i>
                  contacto@paulaarayakine.cl
                </a>
              </div>
              <div class="footer-social">
                <a href="https://instagram.com/kine.paularaya" target="_blank" class="social-link">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@paula.kineadomicilio" target="_blank" class="social-link">
                  <i class="bi bi-tiktok"></i>
                </a>
              </div>
            </div>
            <div class="footer-bottom">
              <p class="copyright">© 2024 Paula Araya Kinesiología. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- WhatsApp Button -->
    <a href="https://wa.me/56992826286" target="_blank" class="whatsapp-button">
      <i class="bi bi-whatsapp"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Navbar styles */
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: #2563eb;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
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

/* WhatsApp Button */
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

/* Footer */
.footer {
  background: #1d4ed8;
  color: white;
  padding: 3rem 0 1.5rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-brand {
  text-align: center;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.footer-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-link {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 0.8;
}

.footer-link i {
  font-size: 1.2rem;
}

.footer-social {
  display: flex;
  gap: 1.5rem;
}

.footer-social .social-link {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.footer-social .social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;
  }

  .footer-content {
    gap: 1.5rem;
  }

  .footer-title {
    font-size: 1.25rem;
  }

  .footer-text {
    font-size: 0.9rem;
  }

  .footer-link {
    font-size: 0.9rem;
  }
}
</style> 