<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <h1 class="text-h3 text-center q-mb-md text-weight-bold animate-fadeInDown">
          <span class="text-gradient-primary">Certificates</span> & Achievements
        </h1>
        <p class="text-center text-grey-5 q-mb-xl animate-fadeInUp" style="animation-delay: 0.1s">
          Professional certifications and courses completed
        </p>
        <q-timeline color="primary" layout="comfortable" class="certificates-timeline">
          <q-timeline-entry
            title="Full Stack Web Development"
            subtitle="Coursera - Meta • December 2024"
            icon="school"
            color="primary"
            class="timeline-entry animate-fadeInUp"
            style="animation-delay: 0.2s"
          >
            <div class="glass-strong q-pa-md rounded-lg">
              <p class="text-grey-4 q-mb-md">
                Completed the Meta Front-End Developer Professional Certificate, covering HTML, CSS, JavaScript, React, and UI/UX design principles.
              </p>
              <div class="row q-gutter-xs q-mb-sm">
                <q-chip dense size="sm" color="primary" text-color="white">HTML/CSS</q-chip>
                <q-chip dense size="sm" color="primary" text-color="white">JavaScript</q-chip>
                <q-chip dense size="sm" color="primary" text-color="white">React</q-chip>
                <q-chip dense size="sm" color="primary" text-color="white">UI/UX</q-chip>
              </div>
              <q-btn 
                outline 
                color="primary" 
                label="View Certificate" 
                icon-right="launch" 
                size="sm"
                href="#"
                target="_blank"
              />
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="AWS Certified Cloud Practitioner"
            subtitle="Amazon Web Services • November 2024"
            icon="cloud"
            color="secondary"
            class="timeline-entry animate-fadeInUp"
            style="animation-delay: 0.3s"
          >
            <div class="glass-strong q-pa-md rounded-lg">
              <p class="text-grey-4 q-mb-md">
                Validated overall understanding of the AWS Cloud platform, including basic security and compliance aspects, and shared security model.
              </p>
              <div class="row q-gutter-xs q-mb-sm">
                <q-chip dense size="sm" color="secondary" text-color="white">AWS</q-chip>
                <q-chip dense size="sm" color="secondary" text-color="white">Cloud Computing</q-chip>
                <q-chip dense size="sm" color="secondary" text-color="white">Security</q-chip>
              </div>
              <q-btn 
                outline 
                color="secondary" 
                label="View Certificate" 
                icon-right="launch" 
                size="sm"
                href="#"
                target="_blank"
              />
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Python for Everybody"
            subtitle="University of Michigan • October 2024"
            icon="code"
            color="accent"
            class="timeline-entry animate-fadeInUp"
            style="animation-delay: 0.4s"
          >
            <div class="glass-strong q-pa-md rounded-lg">
              <p class="text-grey-4 q-mb-md">
                Gained proficiency in Python programming, data structures, and web scraping.
              </p>
              <div class="row q-gutter-xs q-mb-sm">
                <q-chip dense size="sm" color="accent" text-color="white">Python</q-chip>
                <q-chip dense size="sm" color="accent" text-color="white">Data Structures</q-chip>
                <q-chip dense size="sm" color="accent" text-color="white">Web Scraping</q-chip>
              </div>
              <q-btn 
                outline 
                color="accent" 
                label="View Certificate" 
                icon-right="launch" 
                size="sm"
                href="#"
                target="_blank"
              />
            </div>
          </q-timeline-entry>
        </q-timeline>

      </div>
    </div>
  </q-page>
</template>

<script setup>
useHead({
  title: 'Certificates - Henry Portfolio'
})
</script>

<style lang="scss" scoped>
.text-gradient-primary {
  background: linear-gradient(135deg, #00E5FF 0%, #7C4DFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.certificates-timeline {
  :deep(.q-timeline__dot) {
    box-shadow: 0 0 20px rgba(0, 229, 255, 0.5);
  }

  :deep(.q-timeline__subtitle) {
    color: #9e9e9e;
    font-size: 0.875rem;
  }
}

.timeline-entry {
  opacity: 0;
  
  :deep(.q-timeline__content) {
    transition: all 0.3s ease;

    &:hover {
      transform: translateX(10px);
    }
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
  .certificates-timeline {
    :deep(.q-timeline__entry) {
      padding-bottom: 2rem;
    }
  }
}

@media (max-width: 768px) {
  .certificates-timeline {
    :deep(.q-timeline) {
      padding: 0;
    }
    
    :deep(.q-timeline__dot) {
      box-shadow: 0 0 15px rgba(0, 229, 255, 0.4);
    }
    
    :deep(.q-timeline__subtitle) {
      font-size: 0.75rem;
      line-height: 1.4;
    }
    
    :deep(.q-timeline__title) {
      font-size: 1.1rem;
      line-height: 1.3;
    }
  }
  
  .glass-strong {
    padding: 1rem !important;
  }
  
  .timeline-entry {
    :deep(.q-timeline__content) {
      &:hover {
        transform: translateX(5px);
      }
    }
  }
}

@media (max-width: 600px) {
  .certificates-timeline {
    :deep(.q-timeline__subtitle) {
      font-size: 0.7rem;
    }
    
    :deep(.q-timeline__title) {
      font-size: 1rem;
    }
    
    :deep(.q-timeline__entry) {
      padding-bottom: 1.5rem;
    }
  }
  
  .glass-strong {
    padding: 0.875rem !important;
    
    p {
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
  
  :deep(.q-chip) {
    font-size: 0.65rem !important;
    padding: 2px 6px !important;
  }
  
  :deep(.q-btn) {
    font-size: 0.8rem !important;
    padding: 6px 12px !important;
  }
}

@media (max-width: 480px) {
  .certificates-timeline {
    :deep(.q-timeline__subtitle) {
      font-size: 0.65rem;
    }
    
    :deep(.q-timeline__title) {
      font-size: 0.95rem;
    }
  }
  
  .glass-strong {
    padding: 0.75rem !important;
    
    p {
      font-size: 0.85rem;
    }
  }
  
  :deep(.row.q-gutter-xs) {
    gap: 4px !important;
  }
}
</style>
