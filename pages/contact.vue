<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <h1 class="text-h3 text-center q-mb-md text-weight-bold animate-fadeInDown">
          Get In <span class="text-gradient-primary">Touch</span>
        </h1>
        <p class="text-center text-grey-5 q-mb-xl animate-fadeInUp" style="animation-delay: 0.1s">
          Let's work together on your next project
        </p>

        <!-- Contact Form -->
        <q-card class="glass-strong q-mb-xl rounded-xl animate-fadeInUp" style="animation-delay: 0.2s">
          <q-card-section>
            <div class="text-h6 q-mb-md text-weight-medium">Send me a message</div>
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input
                filled
                v-model="name"
                label="Your Name"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please enter your name']"
                color="primary"
                class="custom-input"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <q-input
                filled
                v-model="email"
                label="Your Email"
                type="email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please enter your email']"
                color="primary"
                class="custom-input"
              >
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>

              <q-input
                filled
                v-model="message"
                label="Message"
                type="textarea"
                rows="5"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please enter a message']"
                color="primary"
                class="custom-input"
              >
                <template v-slot:prepend>
                  <q-icon name="chat" />
                </template>
              </q-input>

              <div class="row justify-end">
                <q-btn 
                  label="Send Message" 
                  type="submit" 
                  color="primary" 
                  unelevated
                  rounded
                  icon-right="send" 
                  class="q-px-xl"
                  size="lg"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>

        <!-- Contact Information -->
        <div class="row q-col-gutter-md q-mb-xl">
          <div class="col-12 col-sm-6 animate-fadeInUp" style="animation-delay: 0.3s">
            <q-card class="glass-strong full-height rounded-lg">
              <q-card-section class="text-center">
                <q-icon name="mail" size="48px" color="primary" class="q-mb-md" />
                <div class="text-h6 text-weight-medium q-mb-xs">Email</div>
                <div class="text-grey-5">henrylouist@gmail.com</div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-sm-6 animate-fadeInUp" style="animation-delay: 0.35s">
            <q-card class="glass-strong full-height rounded-lg">
              <q-card-section class="text-center">
                <q-icon name="location_on" size="48px" color="secondary" class="q-mb-md" />
                <div class="text-h6 text-weight-medium q-mb-xs">Location</div>
                <div class="text-grey-5">Cordova Norte, Tigbauan, Iloilo</div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Social Links -->
        <div class="text-center animate-fadeInUp" style="animation-delay: 0.4s">
          <h2 class="text-h5 text-grey-5 q-mb-md text-weight-medium">Connect with me</h2>
          <div class="social-buttons-container row justify-center q-gutter-md">
            <q-btn 
              round 
              unelevated
              color="grey-9"
              icon="fab fa-github" 
              href="https://github.com/Louie-cmd22" 
              target="_blank"
              size="lg"
              class="social-btn"
            >
              <q-tooltip>GitHub</q-tooltip>
            </q-btn>
            <q-btn 
              round 
              unelevated
              style="background: #0077b5"
              icon="fab fa-linkedin" 
              href="https://www.linkedin.com/in/henry-louis-tamon-a4abb5301" 
              target="_blank"
              size="lg"
              class="social-btn"
            >
              <q-tooltip>LinkedIn</q-tooltip>
            </q-btn>
            <q-btn 
              round 
              unelevated
              style="background: #1877F2"
              icon="fab fa-facebook" 
              href="https://www.facebook.com/henry.louis.tamon" 
              target="_blank"
              size="lg"
              class="social-btn"
            >
              <q-tooltip>Facebook</q-tooltip>
            </q-btn>
            <q-btn 
              round 
              unelevated
              style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
              icon="fab fa-instagram" 
              href="https://www.instagram.com/_henrylws/" 
              target="_blank"
              size="lg"
              class="social-btn"
            >
              <q-tooltip>Instagram</q-tooltip>
            </q-btn>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const name = ref(null)
const email = ref(null)
const message = ref(null)

function onSubmit () {
  $q.notify({
    color: 'positive',
    textColor: 'white',
    icon: 'check_circle',
    message: 'Message sent successfully! I\'ll get back to you soon.',
    position: 'top'
  })
  
  // Reset form
  name.value = null
  email.value = null
  message.value = null
}

useHead({
  title: 'Contact - Henry Portfolio'
})
</script>

<style lang="scss" scoped>
.text-gradient-primary {
  background: linear-gradient(135deg, #00E5FF 0%, #7C4DFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.custom-input {
  :deep(.q-field__control) {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
    }
  }

  :deep(.q-field__control:focus-within) {
    background: rgba(255, 255, 255, 0.08);
  }

  :deep(.q-field__native) {
    color: white;
  }

  :deep(.q-field__label) {
    color: rgba(255, 255, 255, 0.7);
  }
}

.social-buttons-container {
  flex-wrap: wrap;
  align-items: center;
  
  :deep(.q-btn) {
    flex-shrink: 0;
  }
}

.social-btn {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  min-width: 56px !important;
  width: 56px !important;
  height: 56px !important;
  border-radius: 50% !important;
  padding: 0 !important;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }
}

.animate-fadeInUp {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-fadeInDown {
  opacity: 0;
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
  .custom-input {
    :deep(.q-field__control) {
      border-radius: 10px;
    }
  }
}

@media (max-width: 768px) {
  .custom-input {
    :deep(.q-field__control) {
      border-radius: 8px;
    }
    
    :deep(.q-field__label) {
      font-size: 0.9rem;
    }
  }
  
  .social-btn {
    &:hover {
      transform: translateY(-3px) scale(1.05);
    }
  }
  
  :deep(.q-card-section) {
    padding: 1.25rem;
  }
  
  :deep(.text-h6) {
    font-size: 1.15rem;
  }
}

@media (max-width: 600px) {
  .q-page {
    padding: 0.75rem !important;
  }
  
  .custom-input {
    :deep(.q-field__control) {
      border-radius: 8px;
    }
    
    :deep(.q-field__label) {
      font-size: 0.875rem;
    }
    
    :deep(.q-field__native) {
      font-size: 0.9rem;
    }
  }
  
  :deep(.q-card) {
    margin-bottom: 1.5rem !important;
  }
  
  :deep(.q-card-section) {
    padding: 1rem;
  }
  
  :deep(.text-h6) {
    font-size: 1.1rem;
    margin-bottom: 1rem !important;
  }
  
  // Only apply full width to form submit button, not social buttons
  :deep(.q-btn:not(.social-btn)) {
    width: 100% !important;
  }
  
  .social-btn {
    margin: 0.25rem !important;
    min-width: 48px !important;
    width: 48px !important;
    height: 48px !important;
  }
  
  :deep(.q-icon[size="48px"]) {
    font-size: 40px !important;
  }
}

@media (max-width: 480px) {
  .q-page {
    padding: 0.5rem !important;
  }
  
  :deep(.text-h3) {
    font-size: 1.75rem !important;
  }
  
  :deep(.text-h5) {
    font-size: 1.05rem !important;
  }
  
  :deep(.text-h6) {
    font-size: 1rem;
  }
  
  .custom-input {
    :deep(.q-field__label) {
      font-size: 0.85rem;
    }
    
    :deep(.q-field__native) {
      font-size: 0.875rem;
    }
    
    :deep(textarea) {
      min-height: 100px !important;
    }
  }
  
  :deep(.q-card-section) {
    padding: 0.875rem;
  }
  
  :deep(.q-icon[size="48px"]) {
    font-size: 36px !important;
  }
  
  .social-btn {
    min-width: 48px !important;
    width: 48px !important;
    height: 48px !important;
    margin: 0.25rem !important;
  }
  
  :deep(.row.q-gutter-md) {
    gap: 0.5rem !important;
  }
}

@media (max-width: 360px) {
  :deep(.text-h3) {
    font-size: 1.5rem !important;
  }
  
  .social-btn {
    min-width: 40px !important;
    width: 40px !important;
    height: 40px !important;
    
    :deep(.q-icon) {
      font-size: 20px !important;
    }
  }
}
</style>
