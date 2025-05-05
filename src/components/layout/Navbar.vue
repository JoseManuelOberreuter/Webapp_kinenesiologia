<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container px-3 px-sm-5">
      <router-link class="navbar-brand" to="/">
        <span class="fw-bolder">Paula Araya Kinesiología</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  padding: 0.5rem 0;
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
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

/* Media queries para responsividad */
@media (max-width: 991.98px) {
  .navbar-collapse {
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
  }
  
  .nav-link {
    padding: 0.75rem 0;
  }
  
  .nav-link::after {
    bottom: 0;
    left: 0;
    transform: none;
  }
  
  .nav-link:hover::after {
    width: 50px;
  }
}

@media (max-width: 767.98px) {
  .navbar-brand {
    font-size: 1rem;
  }
  
  .container {
    padding: 0 0.75rem;
  }
}

@media (max-width: 575.98px) {
  .navbar-brand span {
    max-width: 200px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style> 