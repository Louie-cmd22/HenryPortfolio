// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui'
  ],
  quasar: {
    plugins: [
      'Notify'
    ],
    extras: {
      fontIcons: ['material-icons', 'mdi-v7', 'fontawesome-v6']
    },
    iconSet: 'fontawesome-v6',
    config: {
      brand: {
        primary: '#00E5FF', // Cyan Accent
        secondary: '#7C4DFF', // Deep Purple
        accent: '#FF4081', // Pink
        dark: '#0a0a0a', // Very dark grey/black
        positive: '#00E676',
        negative: '#FF1744',
        info: '#29B6F6',
        warning: '#FFC107'
      },
      dark: true
    }
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap' }
      ]
    }
  },
  css: [
    '~/assets/css/app.scss'
  ]
})
