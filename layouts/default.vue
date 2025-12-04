<template>
  <q-layout view="hHh lpR fFf">
    <!-- Enhanced Header with Backdrop Blur -->
    <q-header class="header-glass">
      <q-toolbar class="q-py-sm">
        <q-btn 
          dense 
          flat 
          round 
          icon="menu" 
          @click="toggleLeftDrawer"
          class="q-mr-sm"
        />

        <q-toolbar-title class="text-weight-bold">
          <span class="logo-text">Henry</span><span class="text-primary">.dev</span>
        </q-toolbar-title>

        <!-- Desktop Navigation -->
        <q-tabs 
          v-if="$q.screen.gt.sm" 
          shrink 
          stretch 
          indicator-color="primary"
          active-color="primary"
          class="desktop-nav"
        >
          <q-route-tab to="/" label="Home" class="nav-tab" />
          <q-route-tab to="/skills" label="Skills" class="nav-tab" />
          <q-route-tab to="/projects" label="Projects" class="nav-tab" />
          <q-route-tab to="/certificates" label="Certificates" class="nav-tab" />
          <q-route-tab to="/contact" label="Contact" class="nav-tab" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <!-- Enhanced Mobile Drawer -->
    <q-drawer 
      v-model="leftDrawerOpen" 
      side="left" 
      overlay 
      behavior="mobile" 
      class="drawer-glass"
      :width="280"
    >
      <q-scroll-area class="fit">
        <!-- Drawer Header -->
        <div class="q-pa-lg text-center">
          <div class="text-h5 text-weight-bold q-mb-sm">
            Henry<span class="text-primary">.dev</span>
          </div>
          <div class="text-caption text-grey-5">Computer Science Student</div>
        </div>

        <q-separator class="q-mx-lg" style="opacity: 0.2;" />

        <!-- Navigation Items -->
        <q-list padding class="q-mt-md">
          <q-item 
            clickable 
            v-ripple 
            to="/" 
            active-class="active-nav-item"
            class="nav-item rounded-borders q-mx-sm q-mb-xs"
          >
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
          </q-item>

          <q-item 
            clickable 
            v-ripple 
            to="/skills" 
            active-class="active-nav-item"
            class="nav-item rounded-borders q-mx-sm q-mb-xs"
          >
            <q-item-section avatar>
              <q-icon name="code" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Skills</q-item-label>
            </q-item-section>
          </q-item>

          <q-item 
            clickable 
            v-ripple 
            to="/projects" 
            active-class="active-nav-item"
            class="nav-item rounded-borders q-mx-sm q-mb-xs"
          >
            <q-item-section avatar>
              <q-icon name="work" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Projects</q-item-label>
            </q-item-section>
          </q-item>

          <q-item 
            clickable 
            v-ripple 
            to="/certificates" 
            active-class="active-nav-item"
            class="nav-item rounded-borders q-mx-sm q-mb-xs"
          >
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Certificates</q-item-label>
            </q-item-section>
          </q-item>

          <q-item 
            clickable 
            v-ripple 
            to="/contact" 
            active-class="active-nav-item"
            class="nav-item rounded-borders q-mx-sm q-mb-xs"
          >
            <q-item-section avatar>
              <q-icon name="mail" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Contact</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-separator class="q-mx-lg q-my-lg" style="opacity: 0.2;" />

        <!-- Social Links in Drawer -->
        <div class="q-px-lg q-pb-lg">
          <div class="text-caption text-grey-5 q-mb-md">Connect with me</div>
          <div class="row q-gutter-sm">
            <q-btn 
              round 
              flat
              icon="fab fa-github" 
              href="https://github.com/Louie-cmd22" 
              target="_blank"
              size="sm"
            />
            <q-btn 
              round 
              flat
              icon="fab fa-linkedin" 
              href="https://www.linkedin.com/in/henry-louis-tamon-a4abb5301" 
              target="_blank"
              size="sm"
            />
            <q-btn 
              round 
              flat
              icon="fab fa-facebook" 
              href="https://www.facebook.com/henry.louis.tamon" 
              target="_blank"
              size="sm"
            />
            <q-btn 
              round 
              flat
              icon="fab fa-instagram" 
              href="https://www.instagram.com/_henrylws/" 
              target="_blank"
              size="sm"
            />
          </div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
      <slot />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="footer-glass">
      <div class="q-pa-md">
        <div class="row items-center justify-between footer-content">
          <div class="col-12 col-md-auto text-center text-md-left q-mb-sm q-mb-md-none">
            <div class="text-caption text-grey-5">
              © 2025 Henry.dev • Built with Nuxt & Quasar
            </div>
          </div>
          <div class="col-12 col-md-auto">
            <!-- Social icons (GitHub, LinkedIn, Facebook, Instagram) -->
            <div class="row justify-center justify-md-end items-center q-gutter-xs q-mb-sm q-mb-md-none">
              <q-btn 
                flat 
                dense 
                round 
                icon="fab fa-github" 
                href="https://github.com/Louie-cmd22" 
                target="_blank"
                size="sm"
              />
              <q-btn 
                flat 
                dense 
                round 
                icon="fab fa-linkedin" 
                href="https://www.linkedin.com/in/henry-louis-tamon-a4abb5301" 
                target="_blank"
                size="sm"
              />
              <q-btn 
                flat 
                dense 
                round 
                icon="fab fa-facebook" 
                href="https://www.facebook.com/henry.louis.tamon" 
                target="_blank"
                size="sm"
              />
              <q-btn 
                flat 
                dense 
                round 
                icon="fab fa-instagram" 
                href="https://www.instagram.com/_henrylws/" 
                target="_blank"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style lang="scss" scoped>
// Header Styling
.header-glass {
  background: rgba(10, 10, 10, 0.8) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.logo-text {
  font-size: 1.2rem;
  letter-spacing: -0.5px;
}

// Desktop Navigation
.desktop-nav {
  .nav-tab {
    text-transform: none;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    
    &:hover {
      color: #00E5FF;
    }
  }
}

// Mobile Drawer
.drawer-glass {
  background: rgba(15, 15, 15, 0.95) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-item {
  transition: all 0.3s ease;
  margin: 2px 0;
  
  &:hover {
    background: rgba(0, 229, 255, 0.1);
  }
}

.active-nav-item {
  background: rgba(0, 229, 255, 0.15) !important;
  color: #00E5FF !important;
  
  .q-icon {
    color: #00E5FF;
  }
}

// Footer Styling
.footer-glass {
  background: rgba(10, 10, 10, 0.8) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.3);
}

// Responsive Design
@media (max-width: 1024px) {
  .desktop-nav {
    .nav-tab {
      font-size: 0.9rem;
      padding: 8px 12px;
    }
  }
}

@media (max-width: 768px) {
  .header-glass {
    :deep(.q-toolbar) {
      padding: 8px 12px;
      min-height: 56px;
    }
  }
  
  .logo-text {
    font-size: 1.1rem;
  }
  
  .footer-glass {
    .footer-content {
      padding: 0.5rem 0;
    }
    
    :deep(.text-caption) {
      font-size: 0.75rem;
    }
  }
}

@media (max-width: 600px) {
  .header-glass {
    :deep(.q-toolbar) {
      padding: 6px 10px;
      min-height: 52px;
    }
  }
  
  .logo-text {
    font-size: 1rem;
  }
  
  :deep(.q-toolbar-title) {
    font-size: 1rem;
  }
  
  .drawer-glass {
    :deep(.q-drawer__content) {
      padding: 0;
    }
  }
  
  .footer-glass {
    .footer-content {
      flex-direction: column;
      gap: 0.75rem;
      align-items: center !important;
    }
    
    :deep(.text-caption) {
      font-size: 0.7rem;
    }
    
    :deep(.q-btn) {
      width: 36px !important;
      height: 36px !important;
      font-size: 0.875rem !important;
    }
    
    :deep(.row.q-gutter-xs) {
      gap: 6px !important;
    }
  }
}

@media (max-width: 480px) {
  .header-glass {
    :deep(.q-toolbar) {
      padding: 6px 8px;
      min-height: 50px;
    }
  }
  
  .logo-text {
    font-size: 0.95rem;
  }
  
  :deep(.q-btn[dense]) {
    padding: 6px;
  }
  
  .drawer-glass {
    max-width: 260px !important;
    
    :deep(.text-h5) {
      font-size: 1.15rem;
    }
    
    :deep(.text-caption) {
      font-size: 0.7rem;
    }
    
    :deep(.q-item) {
      padding: 10px 12px;
    }
    
    :deep(.q-item-label) {
      font-size: 0.9rem;
    }
  }
  
  .footer-glass {
    :deep(.q-pa-md) {
      padding: 8px !important;
    }
    
    :deep(.text-caption) {
      font-size: 0.65rem;
      text-align: center;
    }
    
    :deep(.q-btn) {
      width: 34px !important;
      height: 34px !important;
      font-size: 0.8rem !important;
    }
  }
}

@media (max-width: 360px) {
  .logo-text {
    font-size: 0.9rem;
  }
  
  .drawer-glass {
    max-width: 240px !important;
  }
  
  .footer-glass {
    :deep(.q-btn) {
      width: 32px !important;
      height: 32px !important;
    }
  }
}
</style>
