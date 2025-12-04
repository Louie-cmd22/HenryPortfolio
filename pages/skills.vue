<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 text-center q-mb-md text-weight-bold animate-fadeInDown">
          Technical <span class="text-gradient-primary">Skills</span>
        </h1>
        <p class="text-center text-grey-5 q-mb-xl animate-fadeInUp" style="animation-delay: 0.1s">
          Technologies and tools I work with
        </p>

        <div class="skills-wrapper">
          
          <!-- Languages -->
          <div class="skill-group animate-fadeInUp" style="animation-delay: 0.2s">
            <div class="row items-center justify-center q-mb-md">
              <q-icon name="code" size="28px" color="primary" class="q-mr-sm" />
              <h3 class="text-h5 q-my-none text-primary">Languages</h3>
            </div>
            <div class="glass-strong rounded-xl skill-container">
              <div class="skills-grid">
                <div v-for="skill in languages" :key="skill.name" class="skill-chip">
                  <q-chip 
                    class="glass-chip text-weight-medium" 
                    text-color="white"
                    size="lg"
                  >
                    <q-avatar :icon="skill.icon" color="primary" text-color="white" />
                    {{ skill.name }}
                  </q-chip>
                </div>
              </div>
            </div>
          </div>

          <!-- Frameworks -->
          <div class="skill-group animate-fadeInUp" style="animation-delay: 0.3s">
            <div class="row items-center justify-center q-mb-md">
              <q-icon name="web" size="28px" color="secondary" class="q-mr-sm" />
              <h3 class="text-h5 q-my-none text-secondary">Frameworks & Libraries</h3>
            </div>
            <div class="glass-strong rounded-xl skill-container">
              <div class="skills-grid">
                <div v-for="skill in frameworks" :key="skill.name" class="skill-chip">
                  <q-chip 
                    class="glass-chip text-weight-medium" 
                    text-color="white"
                    size="lg"
                  >
                    <q-avatar :icon="skill.icon" color="secondary" text-color="white" />
                    {{ skill.name }}
                  </q-chip>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="skill-group animate-fadeInUp" style="animation-delay: 0.4s">
            <div class="row items-center justify-center q-mb-md">
              <q-icon name="construction" size="28px" color="accent" class="q-mr-sm" />
              <h3 class="text-h5 q-my-none text-accent">Tools & Platforms</h3>
            </div>
            <div class="glass-strong rounded-xl skill-container">
              <div class="skills-grid">
                <div v-for="skill in tools" :key="skill.name" class="skill-chip">
                  <q-chip 
                    class="glass-chip text-weight-medium" 
                    text-color="white"
                    size="lg"
                  >
                    <q-avatar :icon="skill.icon" color="accent" text-color="white" />
                    {{ skill.name }}
                  </q-chip>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
useHead({
  title: 'Skills - Henry Portfolio'
})

const languages = [
  { name: 'JavaScript', icon: 'code' },
  { name: 'Python', icon: 'code' },
  { name: 'SQL', icon: 'data_object' }
]

const frameworks = [
  { name: 'Vue.js', icon: 'web' },
  { name: 'Nuxt.js', icon: 'web' },
  { name: 'Quasar', icon: 'web' },
  { name: 'Vuetify', icon: 'web' }
]

const tools = [
  { name: 'Git', icon: 'terminal' },
  { name: 'Github', icon: 'terminal' },
  { name: 'Firebase', icon: 'cloud' },
  { name: 'Node.js', icon: 'dns' },
  { name: 'Restful API', icon: 'dns' }
]
</script>

<style lang="scss" scoped>
.text-gradient-primary {
  background: linear-gradient(135deg, #00E5FF 0%, #7C4DFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.skills-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.skill-group {
  opacity: 0;
  width: 100%;
  max-width: 700px; // Shorter, uniform width for all containers
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skill-container {
  width: 100%;
  padding: 2rem 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  justify-items: center;
  align-items: center;
}

.skill-chip {
  transition: transform 0.3s ease;
  width: 100%;
  display: flex;
  justify-content: center;

  &:hover {
    transform: translateY(-3px);
  }
}

.glass-chip {
  background: rgba(255, 255, 255, 0.06) !important;
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  cursor: default;
  width: 100%;
  max-width: 160px;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.12) !important;
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-fadeInDown {
  animation: fadeInDown 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Responsive
@media (max-width: 1024px) {
  .skill-group {
    max-width: 100%;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
}

@media (max-width: 768px) {
  .skill-group {
    max-width: 100%;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.75rem;
  }

  .skill-container {
    padding: 1.5rem 1rem;
  }
  
  :deep(.text-h5) {
    font-size: 1.1rem;
  }
  
  :deep(.text-h3) {
    font-size: 1.75rem;
  }
}

@media (max-width: 600px) {
  .q-page {
    padding: 0.75rem !important;
  }
  
  .skills-wrapper {
    gap: 2rem;
  }
  
  .skill-container {
    padding: 1.25rem 0.875rem;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 0.625rem;
  }
  
  .glass-chip {
    max-width: 100%;
    font-size: 0.875rem !important;
    
    :deep(.q-avatar) {
      font-size: 1.1rem !important;
    }
  }
  
  :deep(.q-icon[size="28px"]) {
    font-size: 24px !important;
  }
}

@media (max-width: 480px) {
  .q-page {
    padding: 0.5rem !important;
  }
  
  .skills-wrapper {
    gap: 1.5rem;
  }
  
  .skill-container {
    padding: 1rem 0.75rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .glass-chip {
    max-width: 100%;
    font-size: 0.85rem !important;
  }
  
  :deep(.text-h3) {
    font-size: 1.5rem !important;
  }
  
  :deep(.text-h5) {
    font-size: 1rem;
  }
  
  :deep(.q-icon[size="28px"]) {
    font-size: 22px !important;
  }
}

@media (max-width: 360px) {
  :deep(.text-h3) {
    font-size: 1.35rem !important;
  }
  
  :deep(.text-h5) {
    font-size: 0.95rem;
  }
  
  .glass-chip {
    font-size: 0.8rem !important;
  }
}

</style>
