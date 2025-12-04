<template>
  <q-page class="home-page flex flex-center overflow-hidden relative-position">
    
    <!-- Particle Background -->
    <div class="particles">
      <div class="particle" v-for="n in 20" :key="n" :style="getParticleStyle(n)"></div>
    </div>

    <div class="row items-center justify-center q-col-gutter-xl hero-container">
      
      <!-- Hexagonal Avatar Section (Right on desktop, Top on mobile) -->
      <div class="col-12 col-md-auto order-md-last order-first animate-fadeInRight flex flex-center">
        <div class="hexagon-container">
          <div class="hexagon-frame">
            <div class="hexagon-inner">
              <img src="~/assets/Portprofile.png" alt="Henry's Avatar">
            </div>
          </div>
        </div>
      </div>

      <!-- Content Section (Left on desktop, Bottom on mobile) -->
      <div class="col-12 col-md-6 order-md-first order-last animate-fadeInLeft content-section flex flex-center">
        
        <!-- Hero Text -->
        <div class="hero-text-wrapper">
          <h1 class="hero-title q-mt-none q-mb-none">
            HI, I'M <span class="text-gradient">HENRY!</span>
          </h1>
          <h1 class="hero-title q-mt-none q-mb-sm">
            WEB<span class="text-gradient-accent">DEVELOPER</span>
          </h1>
        </div>
        
        <p class="text-body1 q-mb-lg text-grey-4 hero-description">
         I am a passionate Developer focusing in Web Development and Python. I approach every project with an analytical mindset, 
         driven by the desire to solve complex technical problems and build robust, efficient applications from the ground up. I am 
         dedicated to clean code, continuous learning, and creating scalable solutions.
         </p>

        <!-- Action Buttons -->
        <div class="button-row">
          <q-btn 
            unelevated
            no-caps
            color="primary" 
            text-color="dark"
            label="My Projects" 
            to="/projects"
            icon-right="arrow_forward"
            class="cta-button cta-primary"
            size="lg"
            padding="12px 32px"
          />
          <q-btn 
            outline
            no-caps
            color="primary" 
            label="Contact Me" 
            to="/contact"
            icon-right="mail"
            class="cta-button cta-outline"
            size="lg"
            padding="12px 32px"
          />
        </div>

      </div>

    </div>

    <!-- Background Decoration -->
    <div class="absolute-bottom-right q-pa-xl opacity-deco floating-element">
      <q-icon name="code" size="200px" color="primary" />
    </div>
    <div class="absolute-top-left q-pa-xl opacity-deco floating-element" style="animation-delay: -2s">
      <q-icon name="data_object" size="150px" color="secondary" />
    </div>
  </q-page>
</template>

<script setup>
useHead({
  title: 'Home - Henry Portfolio'
})

// Generate random particle positions
const getParticleStyle = (n) => {
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${3 + Math.random() * 4}s`
  }
}
</script>

<style lang="scss" scoped>
// Page Layout
.home-page {
  padding: 20px;
  min-height: 100vh;
}

.hero-container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

// Hero Typography
.hero-text-wrapper {
  margin-bottom: 24px;
}

.hero-title {
  font-size: 5rem !important;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: white;
  text-transform: uppercase;
}

.hero-description {
  max-width: 600px;
  line-height: 1.8;
  font-size: 1rem;
}

// Text Gradients
.text-gradient {
  background: linear-gradient(135deg, #00E5FF 0%, #00BCD4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-accent {
  background: linear-gradient(135deg, #00E5FF 0%, #7C4DFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-left: 8px;
}

// Hexagonal Avatar Frame (Static - No Animations)
.hexagon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 550px;
  margin: 0 auto;
}

.hexagon-frame {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: transparent;
    border: 4px solid #00E5FF;
    clip-path: polygon(
      30% 0%, 
      70% 0%, 
      100% 30%, 
      100% 70%, 
      70% 100%, 
      30% 100%, 
      0% 70%, 
      0% 30%
    );
    box-shadow: 
      0 0 20px rgba(0, 229, 255, 0.5),
      inset 0 0 20px rgba(0, 229, 255, 0.2);
  }
}

.hexagon-inner {
  width: 480px;
  height: 480px;
  overflow: hidden;
  clip-path: polygon(
    30% 0%, 
    70% 0%, 
    100% 30%, 
    100% 70%, 
    70% 100%, 
    30% 100%, 
    0% 70%, 
    0% 30%
  );
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

// CTA Buttons
.button-row {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.cta-button {
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  border-radius: 8px;
  
  &:hover {
    transform: scale(1.05) translateY(-2px);
  }
}

.cta-primary {
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 229, 255, 0.5);
  }
}

.cta-outline {
  border: 2px solid #00E5FF;
  
  &:hover {
    background: rgba(0, 229, 255, 0.1);
    box-shadow: 0 8px 25px rgba(0, 229, 255, 0.3);
  }
}

// Background Decorations
.opacity-deco {
  opacity: 0.03;
}

// Particles
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.8), transparent);
  border-radius: 50%;
  animation: particle-float 6s infinite ease-in-out;
}

// Animations
.animate-fadeInLeft {
  opacity: 0;
  transform: translateX(-50px);
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-fadeInRight {
  opacity: 0;
  transform: translateX(50px);
  animation: fadeInRight 0.8s ease-out 0.2s forwards;
}

.floating-element {
  animation: float 6s ease-in-out infinite;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes particle-float {
  0%, 100% { 
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  50% { 
    transform: translateY(-100px) translateX(50px);
  }
}

// Responsive
@media (max-width: 1200px) {
  .hero-title {
    font-size: 4rem !important;
  }
  
  .hexagon-container {
    width: 450px;
    height: 450px;
  }
  
  .hexagon-inner {
    width: 400px;
    height: 400px;
  }
  
  .hero-description {
    font-size: 0.975rem;
  }
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem !important;
  }
  
  .hero-container {
    justify-content: center !important;
  }
  
  .content-section {
    width: 100%;
    
    .hero-text-wrapper,
    .hero-description,
    .button-row {
      width: 100%;
      text-align: center;
    }
  }
  
  .hero-description {
    margin: 0 auto 24px;
  }
  
  .button-row {
    justify-content: center;
  }
  
  .hexagon-container {
    width: 400px;
    height: 400px;
    margin-bottom: 40px;
  }
  
  .hexagon-inner {
    width: 360px;
    height: 360px;
  }
}

@media (max-width: 768px) {
  .home-page {
    padding: 16px;
  }
  
  .hero-title {
    font-size: 3rem !important;
  }
  
  .hero-description {
    font-size: 0.95rem;
    max-width: 500px;
  }

  .hexagon-container {
    width: 360px;
    height: 360px;
    margin-bottom: 40px;
  }
  
  .hexagon-inner {
    width: 320px;
    height: 320px;
  }
  
  .cta-button {
    padding: 10px 24px !important;
    font-size: 0.9rem;
  }
  
  .button-row {
    gap: 12px;
  }
  
  :deep(.q-icon[size="200px"]) {
    font-size: 150px !important;
  }
  
  :deep(.q-icon[size="150px"]) {
    font-size: 120px !important;
  }
}

@media (max-width: 600px) {
  .home-page {
    padding: 12px;
  }
  
  .hero-title {
    font-size: 2.5rem !important;
  }
  
  .hero-text-wrapper {
    margin-bottom: 20px;
  }
  
  .hero-description {
    font-size: 0.9rem;
    max-width: 100%;
    margin-bottom: 1.5rem !important;
  }
  
  .button-row {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    
    .q-btn {
      width: 100%;
    }
  }
  
  .hexagon-container {
    width: 320px;
    height: 320px;
    margin-bottom: 32px;
  }
  
  .hexagon-inner {
    width: 280px;
    height: 280px;
  }
  
  .cta-button {
    padding: 12px 20px !important;
  }
  
  :deep(.q-icon[size="200px"]) {
    font-size: 120px !important;
  }
  
  :deep(.q-icon[size="150px"]) {
    font-size: 100px !important;
  }
}

@media (max-width: 480px) {
  .home-page {
    padding: 10px;
  }
  
  .hexagon-container {
    width: 300px;
    height: 300px;
    margin-bottom: 30px;
  }
  
  .hexagon-inner {
    width: 260px;
    height: 260px;
  }
  
  .hero-title {
    font-size: 2rem !important;
  }
  
  .hero-description {
    font-size: 0.875rem;
    line-height: 1.6;
  }
  
  .cta-button {
    padding: 10px 18px !important;
    font-size: 0.875rem;
  }
  
  :deep(.q-icon[size="200px"]) {
    font-size: 100px !important;
  }
  
  :deep(.q-icon[size="150px"]) {
    font-size: 80px !important;
  }
}

@media (max-width: 360px) {
  .home-page {
    padding: 8px;
  }
  
  .hexagon-container {
    width: 260px;
    height: 260px;
    margin-bottom: 30px;
  }
  
  .hexagon-inner {
    width: 230px;
    height: 230px;
  }
  
  .hero-title {
    font-size: 1.65rem !important;
  }
  
  .hero-description {
    font-size: 0.85rem;
  }
  
  .cta-button {
    padding: 10px 16px !important;
    font-size: 0.85rem;
  }
}

</style>
