<template>
  <div>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container px-5">
        <router-link class="navbar-brand" to="/">
          <span class="fw-bolder">Paula Araya Kinesiología</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-lg-0">
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

    <!-- Header-->
    <header>
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6">
            <div class="header-content">
              <div class="badge-container">
                <div class="service-badge">TRAUMATOLOGÍA · ADULTO MAYOR · NEUROLOGÍA</div>
              </div>
              <div class="isapres-badge">Reembolsable con todas las Isapres</div>
              <h1 class="main-title">
                Kinesiología a domicilio
              </h1>
              <div class="btn-container">
                <router-link to="/contacto" class="btn btn-primary">Agendar hora</router-link>
                <router-link to="/tratamientos" class="btn btn-outline">Tratamientos</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="profile-container">
              <div class="dots-left"></div>
              <div class="profile-image">
                <img src="@/assets/images/paulaaraya.png" alt="Paula Araya" />
              </div>
              <div class="dots-right"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- About Section-->
    <section class="about-section">
      <div class="container px-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-xxl-8">
            <div class="about-container">
              <h2 class="section-title">Sobre mi</h2>
              <div class="about-content">
                <p class="about-text">
                  <span class="highlight-text">Hola! Mi nombre es Paula Araya y soy Kinesióloga clínica.</span>
                </p>
                <p class="about-text">
                  Egresada de la Universidad Finis Terrae en Enero del 2017 con especialización en el área músculo esquelética y neurológica en adultos y adultos mayores (5 años de experiencia).
                </p>
                <p class="about-text">
                  <span class="highlight-text">Mi modalidad de trabajo es domicilio</span> donde llevo todos los materiales necesarios para realizar la rehabilitación. La ventaja de realizar la rehabilitación kinesiológica a domicilio conmigo es que será totalmente personalizada ya que la pauta de trabajo se definirá con la evaluación inicial.
                </p>
                <p class="about-text">
                  También realizo programas de evitación de caídas para el adulto mayor, clases que pueden ser individuales o de hasta 3 personas por sesión.
                </p>
                <p class="about-text">
                  <span class="highlight-text">Actualmente cuento con varios diplomados y cursos de especialización:</span>
                </p>
                <ul class="diplomas-list">
                  <li>Mención en Neurorrehabilitación (UFT)</li>
                  <li>Curso "Abordaje del paciente con dolor lumbar persistente" (Pontificia Universidad Católica de chile)</li>
                  <li>Certificación en IAAS</li>
                  <li>Diplomado en Kinesiología Dermatofuncional (UFT)</li>
                  <li>Certificación como terapeuta MEP</li>
                </ul>
              </div>
              <div class="social-links">
                <a href="https://instagram.com/kine.paularaya" target="_blank" class="social-link">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@paula.kineadomicilio" target="_blank" class="social-link">
                  <i class="bi bi-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Locations Section-->
    <section class="locations-section">
      <div class="container px-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-xxl-8">
            <div class="locations-container">
              <h2 class="locations-title">Comunas disponibles a domicilio</h2>
              <div class="locations-content">
                <div class="locations-text-content">
                  <p class="locations-text">Ofrecemos nuestros servicios en las siguientes comunas de Santiago:</p>
                  <div class="comunas-list">
                    <span class="comuna-item">Providencia</span>
                    <span class="comuna-item">Ñuñoa</span>
                    <span class="comuna-item">La Reina</span>
                    <span class="comuna-item">Las Condes</span>
                    <span class="comuna-item">Santiago</span>
                    <span class="comuna-item">Peñalolen</span>
                  </div>
                  <p class="note-text">Otras comunas sujetas a evaluación</p>
                </div>
                <div class="map-container">
                  <img src="@/assets/images/comunassantiago.png" alt="comunas disponibles a domicilio" class="map-image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
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
                <a href="mailto:kine.paulaaraya@gmail.com" class="footer-link">
                  <i class="bi bi-envelope"></i>
                  kine.paulaaraya@gmail.com
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
  name: 'HomeView'
}
</script>

<style scoped>
/* Navbar */
.navbar {
  padding: 0.5rem 0;
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar-brand {
  font-size: 1.25rem;
  color: #1a56db;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: #4b5563;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: #1a56db;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover {
  color: #1a56db;
  transform: translateY(-2px);
}

.nav-link:hover::after {
  width: 100%;
}

/* Header */
header {
  padding: 2rem 0 3rem;
  background: #ffffff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 4rem; /* Add margin to account for fixed navbar */
}

.header-content {
  max-width: 600px;
}

.badge-container {
  margin-bottom: 1.5rem;
}

.service-badge {
  display: inline-block;
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.isapres-badge {
  color: #6b7280;
  font-size: 1.125rem;
  margin: 1.5rem 0;
}

.main-title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1a56db;
  margin-bottom: 2rem;
}

.btn-container {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #3b82f6;
  border: none;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.btn-outline {
  border: 2px solid #3b82f6;
  color: #3b82f6;
  background: transparent;
}

.btn-outline:hover {
  background: #3b82f6;
  color: white;
  transform: translateY(-2px);
}

/* Profile Section */
.profile-container {
  position: relative;
  padding: 2rem;
  max-width: 400px;
  margin-left: auto;
}

.profile-image {
  background: linear-gradient(45deg, #1d4ed8, #3b82f6, #60a5fa);
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
}

.profile-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.dots-left,
.dots-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dots-left {
  left: 0px;
  align-items: flex-start;
}

.dots-right {
  right: 0px;
  align-items: flex-end;
}

.dots-left::before,
.dots-right::before {
  content: '';
  background-image: radial-gradient(circle, #3b82f6 1.5px, transparent 2px);
  background-size: 8px 8px;
  background-position: center;
  width: 100%;
  height: 100%;
  display: block;
}

/* About Section */
.about-section {
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: #f8fafc;
}

.about-container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a56db;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  border-radius: 2px;
}

.about-content {
  margin-top: 2rem;
}

.about-text {
  color: #4b5563;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.highlight-text {
  color: #1d4ed8;
  font-weight: 600;
  background: linear-gradient(120deg, rgba(29, 78, 216, 0.1) 0%, rgba(29, 78, 216, 0) 100%);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}

.diplomas-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.diplomas-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: #4b5563;
}

.diplomas-list li::before {
  content: '•';
  color: #1d4ed8;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.social-link {
  color: #3b82f6;
  font-size: 1.75rem;
  transition: all 0.3s ease;
  background: #f0f7ff;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
}

.social-link:hover {
  color: #1d4ed8;
  transform: translateY(-3px);
  background: #e0f2fe;
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.1);
}

/* Locations Section */
.locations-section {
  padding-bottom: 3rem;
  background: #f8fafc;
}

.locations-container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  max-width: 1000px;
  margin: 0 auto;
}

.locations-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.locations-text-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.locations-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a56db;
  margin-bottom: 0.5rem;
}

.locations-text {
  color: #4b5563;
  line-height: 1.6;
  font-size: 1.1rem;
}

.comunas-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1rem 0;
}

.comuna-item {
  background: #f0f7ff;
  color: #1d4ed8;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.comuna-item:hover {
  background: #e0f2fe;
  transform: translateY(-2px);
}

.map-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.note-text {
  color: #6b7280;
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

/* Responsive */
@media (max-width: 991px) {
  header {
    padding: 1rem 0 3rem;
    text-align: center;
  }

  .header-content {
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  .main-title {
    font-size: 3rem;
  }

  .btn-container {
    justify-content: center;
  }

  .profile-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 1rem;
  }

  .profile-image {
    max-width: 280px;
  }

  .locations-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .locations-text-content {
    order: 2;
  }

  .map-container {
    order: 1;
  }

  .map-image {
    max-width: 300px;
  }
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2.5rem;
  }

  .service-badge {
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
  }

  .btn {
    width: 100%;
    margin-bottom: 1rem;
  }

  .btn-container {
    flex-direction: column;
  }

  .about-container {
    padding: 2rem;
    margin: 0 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-text {
    font-size: 1rem;
  }

  .social-link {
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
  }

  .locations-container {
    padding: 2rem;
    margin: 0 1rem;
  }

  .locations-title {
    font-size: 2rem;
  }

  .comuna-item {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}

/* Call to Action Section */
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
</style> 