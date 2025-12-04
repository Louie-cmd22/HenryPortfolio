<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 text-center q-mb-md text-weight-bold animate-fadeInDown">
          My <span class="text-gradient-primary">Projects</span>
        </h1>
        <p class="text-center text-grey-5 q-mb-xl animate-fadeInUp" style="animation-delay: 0.1s">
          A showcase of my recent work and accomplishments
        </p>

        <div class="row q-col-gutter-lg">
          <div v-for="(project, index) in projects" :key="project.id" class="col-12 col-sm-6 col-md-4">
            <q-card 
              class="glass-strong full-height column project-card"
              :style="{ animationDelay: (0.2 + index * 0.1) + 's' }"
            >

              <!-- Card Content -->
              <q-card-section class="q-pt-md col">
                <div class="text-h6 text-weight-bold q-mb-sm">{{ project.title }}</div>
                
                <!-- Tech Stack Tags -->
                <div class="row q-gutter-xs q-mb-sm">
                  <q-chip 
                    v-for="tech in project.techStack" 
                    :key="tech"
                    dense
                    size="sm"
                    class="tech-tag"
                    text-color="grey-3"
                  >
                    {{ tech }}
                  </q-chip>
                </div>

                <div class="text-grey-4 text-body2" style="line-height: 1.6;">
                  {{ project.description }}
                </div>
              </q-card-section>

              <!-- Card Actions -->
              <q-card-actions class="q-px-md q-pb-md">
                <q-btn 
                  unelevated
                  color="primary" 
                  icon="visibility" 
                  label="Demo"
                  :href="project.demo" 
                  target="_blank"
                  class="col action-btn"
                  no-caps
                />
                <q-btn 
                  outline
                  color="primary" 
                  icon="code" 
                  label="Code"
                  :href="project.repo" 
                  target="_blank"
                  class="col action-btn"
                  no-caps
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup>
useHead({
  title: 'Projects - Henry Portfolio'
})

const projects = [
  {
    id: 1,
    title: 'Farm Management Optimization Platform (Under Development)',
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    techStack: ['Vue.js', 'Python', 'Firebase'],
    description: 'An agricultural decision support platform prototype that uses an optimization algorithm to help corn farmers optimize fertilizer composition and planting density for maximum yield and profit.',
    demo: '#',
    repo: '#',
    featured: true
  }
]
</script>

<style lang="scss" scoped>
.text-gradient-primary {
  background: linear-gradient(135deg, #00E5FF 0%, #7C4DFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-card {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 229, 255, 0.4);

    .project-image {
      transform: scale(1.05);
    }
  }
}

.project-image-container {
  position: relative;
  overflow: hidden;
}

.project-image {
  transition: transform 0.5s ease;
}

.featured-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
}

.tech-tag {
  background: rgba(0, 229, 255, 0.15);
  border: 1px solid rgba(0, 229, 255, 0.3);
  font-size: 0.7rem;
  font-weight: 500;
}

.action-btn {
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
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

// Responsive Design
@media (max-width: 1024px) {
  .project-card {
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-8px);
    }
  }
}

@media (max-width: 768px) {
  .project-card {
    border-radius: 14px;
    
    &:hover {
      transform: translateY(-6px);
    }
  }
  
  :deep(.q-card-section) {
    padding: 1rem;
  }
  
  :deep(.text-h6) {
    font-size: 1.1rem;
  }
  
  :deep(.text-body2) {
    font-size: 0.9rem;
  }
  
  .tech-tag {
    font-size: 0.65rem;
  }
}

@media (max-width: 600px) {
  .q-page {
    padding: 0.75rem !important;
  }
  
  .project-card {
    border-radius: 12px;
    margin-bottom: 1rem;
    
    &:hover {
      transform: translateY(-4px);
    }
  }
  
  :deep(.q-card-section) {
    padding: 0.875rem;
  }
  
  :deep(.text-h6) {
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }
  
  :deep(.text-body2) {
    font-size: 0.875rem;
    line-height: 1.5;
  }
  
  .tech-tag {
    font-size: 0.6rem;
    padding: 2px 6px;
  }
  
  .q-card-actions {
    flex-direction: column;
    gap: 8px;
    padding: 0.75rem !important;
    
    .action-btn {
      width: 100%;
      font-size: 0.9rem;
    }
  }
  
  :deep(.row.q-gutter-xs) {
    gap: 4px !important;
  }
}

@media (max-width: 480px) {
  .q-page {
    padding: 0.5rem !important;
  }
  
  :deep(.text-h3) {
    font-size: 1.75rem !important;
  }
  
  .project-card {
    border-radius: 10px;
  }
  
  :deep(.q-card-section) {
    padding: 0.75rem;
  }
  
  :deep(.text-h6) {
    font-size: 1rem;
  }
  
  :deep(.text-body2) {
    font-size: 0.85rem;
  }
  
  .tech-tag {
    font-size: 0.55rem;
  }
  
  .q-card-actions {
    padding: 0.625rem !important;
    gap: 6px;
    
    .action-btn {
      font-size: 0.85rem;
      padding: 8px 12px !important;
    }
  }
}

@media (max-width: 360px) {
  :deep(.text-h3) {
    font-size: 1.5rem !important;
  }
  
  :deep(.text-h6) {
    font-size: 0.95rem;
  }
}

</style>
