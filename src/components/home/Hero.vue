<template>
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
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
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
}
</style> 