<template>
  <section class="about-section">
    <div class="container px-3 px-sm-5">
      <div class="row gx-3 gx-sm-5 justify-content-center">
        <div class="col-xxl-8 col-lg-10">
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
              <a href="https://instagram.com/kine.paularaya" target="_blank" class="social-link" aria-label="Instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@paula.kineadomicilio" target="_blank" class="social-link" aria-label="TikTok">
                <i class="bi bi-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
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

@media (max-width: 991px) {
  .about-container {
    padding: 2.5rem;
  }
  
  .section-title {
    font-size: 2.25rem;
  }
  
  .about-text {
    font-size: 1.05rem;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  
  .about-container {
    padding: 2rem;
    margin: 0 0.5rem;
    border-radius: 20px;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .section-title::after {
    width: 50px;
    height: 3px;
    bottom: -8px;
  }

  .about-text {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }
  
  .about-content {
    margin-top: 1.5rem;
  }

  .social-links {
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
  
  .social-link {
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
    padding: 0.85rem;
    border-radius: 10px;
  }
}

@media (max-width: 576px) {
  .about-section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .about-container {
    padding: 1.5rem;
    margin: 0;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
  
  .section-title {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }
  
  .section-title::after {
    width: 40px;
    height: 3px;
  }
  
  .about-text {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .diplomas-list li {
    font-size: 0.95rem;
    margin-bottom: 0.65rem;
    padding-left: 1.25rem;
  }
  
  .highlight-text {
    padding: 0.15rem 0.25rem;
  }
  
  .social-links {
    gap: 1.25rem;
    margin-top: 2rem;
  }
  
  .social-link {
    font-size: 1.35rem;
    width: 45px;
    height: 45px;
    padding: 0.75rem;
  }
}

@media (max-width: 400px) {
  .about-container {
    padding: 1.25rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .about-text, .diplomas-list li {
    font-size: 0.9rem;
  }
  
  .social-link {
    font-size: 1.25rem;
    width: 40px;
    height: 40px;
    padding: 0.65rem;
  }
  
  .social-links {
    gap: 1rem;
  }
}
</style> 