<template>
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
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
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

.social-link {
  font-size: 1.75rem;
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
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