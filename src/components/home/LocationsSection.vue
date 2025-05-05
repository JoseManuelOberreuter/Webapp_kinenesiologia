<template>
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
</template>

<script>
export default {
  name: 'LocationsSection'
}
</script>

<style scoped>
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

@media (max-width: 991px) {
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
</style> 