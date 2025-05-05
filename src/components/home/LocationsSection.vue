<template>
  <section class="locations-section">
    <div class="container px-3 px-sm-5">
      <div class="row gx-3 gx-sm-5 justify-content-center">
        <div class="col-xxl-8 col-lg-10">
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
                <img src="@/assets/images/comunassantiago.png" alt="comunas disponibles a domicilio" class="map-image" loading="lazy">
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
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.locations-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  border-radius: 2px;
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
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.note-text {
  color: #6b7280;
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

@media (max-width: 991px) {
  .locations-container {
    padding: 2.5rem;
  }
  
  .locations-title {
    font-size: 2.25rem;
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
    max-width: 350px;
  }
  
  .locations-text {
    font-size: 1.05rem;
  }
}

@media (max-width: 768px) {
  .locations-section {
    padding-bottom: 2.5rem;
  }
  
  .locations-container {
    padding: 2rem;
    margin: 0 0.5rem;
    border-radius: 20px;
  }

  .locations-title {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
  
  .locations-title::after {
    width: 50px;
    height: 3px;
    bottom: -8px;
  }

  .map-image {
    max-width: 300px;
    border-radius: 10px;
  }
  
  .locations-text {
    font-size: 1rem;
  }

  .comuna-item {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
  
  .locations-content {
    gap: 1.5rem;
  }
  
  .locations-text-content {
    gap: 1.25rem;
  }
}

@media (max-width: 576px) {
  .locations-section {
    padding-bottom: 2rem;
  }
  
  .locations-container {
    padding: 1.5rem;
    margin: 0;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
  
  .locations-title {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }
  
  .locations-title::after {
    width: 40px;
    height: 3px;
  }
  
  .locations-text {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .comunas-list {
    gap: 0.5rem;
    margin: 0.75rem 0;
  }
  
  .comuna-item {
    font-size: 0.85rem;
    padding: 0.35rem 0.7rem;
    border-radius: 5px;
  }
  
  .map-image {
    max-width: 100%;
    border-radius: 8px;
  }
  
  .note-text {
    font-size: 0.85rem;
  }
  
  .locations-text-content {
    gap: 1rem;
  }
}

@media (max-width: 400px) {
  .locations-container {
    padding: 1.25rem;
  }
  
  .locations-title {
    font-size: 1.5rem;
  }
  
  .locations-text {
    font-size: 0.9rem;
  }
  
  .comuna-item {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
}
</style> 