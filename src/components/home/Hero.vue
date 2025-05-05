<template>
  <header>
    <div class="container px-3 px-sm-5">
      <div class="row gx-3 gx-sm-5 align-items-center">
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
            <div class="profile-backdrop">
              <div class="profile-image">
                <img src="@/assets/images/paulaaraya.png" alt="Paula Araya" loading="eager" />
              </div>
              <div class="profile-circle-1"></div>
              <div class="profile-circle-2"></div>
            </div>
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
  padding: 1rem 0 3rem;
  background: #ffffff;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  margin-top: 70px; /* Altura aproximada del navbar */
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
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

/* Profile Section - New Design */
.profile-container {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 2rem;
  max-width: 450px;
  margin-left: auto;
}

.profile-backdrop {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(59, 130, 246, 0.25);
  z-index: 2;
  background: linear-gradient(45deg, #1d4ed8, #3b82f6);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.profile-circle-1, 
.profile-circle-2 {
  position: absolute;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  z-index: 1;
}

.profile-circle-1 {
  width: 200px;
  height: 200px;
  top: -30px;
  right: 0;
  background: rgba(96, 165, 250, 0.15);
}

.profile-circle-2 {
  width: 150px;
  height: 150px;
  bottom: -20px;
  left: 10px;
}

/* Responsive */
@media (max-width: 991px) {
  header {
    padding: 2rem 0 3rem;
    text-align: center;
    min-height: auto;
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
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }

  .profile-image {
    width: 280px;
    height: 280px;
  }
}

@media (max-width: 768px) {
  header {
    padding: 2rem 0 2rem;
    margin-top: 60px;
  }
  
  .main-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .service-badge {
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    margin-bottom: 0;
  }

  .btn-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  
  .isapres-badge {
    font-size: 1rem;
    margin: 1.25rem 0;
  }
  
  .profile-image {
    width: 240px;
    height: 240px;
  }
  
  .profile-circle-1 {
    width: 160px;
    height: 160px;
  }
  
  .profile-circle-2 {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 576px) {
  header {
    padding: 1.5rem 0 1.5rem;
    margin-top: 56px;
  }
  
  .main-title {
    font-size: 2.25rem;
    margin-bottom: 1.25rem;
  }
  
  .badge-container {
    margin-bottom: 1rem;
  }
  
  .service-badge {
    font-size: 0.7rem;
    padding: 0.4rem 0.75rem;
    letter-spacing: 0.25px;
  }
  
  .isapres-badge {
    font-size: 0.9rem;
    margin: 1rem 0;
  }
  
  .btn-container {
    margin-top: 1.5rem;
    gap: 0.5rem;
  }
  
  .btn {
    width: 100%;
    font-size: 0.9rem;
    padding: 0.7rem 1.25rem;
  }
  
  .btn-container {
    flex-direction: column;
  }
  
  .profile-container {
    padding: 0.5rem;
  }
  
  .profile-image {
    width: 220px;
    height: 220px;
  }
  
  .profile-circle-1 {
    width: 140px;
    height: 140px;
    top: -20px;
  }
  
  .profile-circle-2 {
    width: 100px;
    height: 100px;
    bottom: -15px;
  }
}

@media (max-width: 400px) {
  header {
    padding: 1rem 0 1rem;
  }
  
  .main-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .profile-image {
    width: 200px;
    height: 200px;
  }
  
  .profile-circle-1 {
    width: 120px;
    height: 120px;
    top: -15px;
  }
  
  .profile-circle-2 {
    width: 80px;
    height: 80px;
  }
}
</style> 