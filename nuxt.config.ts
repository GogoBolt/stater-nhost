export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      /**
       * Configuration de Nhost via des variables d'environnement.
       *
       * Ces variables proviennent :
       * - de vos fichiers .env  (développement)
       * - de vos fichiers .env.production (production)
       *
       * Elles permettent de configurer l'accès aux différents services Nhost.
       */
      nhostSubdomain: process.env.NUXT_PUBLIC_NHOST_SUBDOMAIN ||
        (process.env.NODE_ENV === 'production' ? 'mon-sous-domaine-prod' : 'local'),
      nhostBackendUrl: process.env.NUXT_PUBLIC_NHOST_BACKEND_URL ||
        (process.env.NODE_ENV === 'production'
          ? 'https://api.monprojet.com/v1/graphql'
          : 'http://localhost:1337/v1/graphql'),
      nhostAuthUrl: process.env.NUXT_PUBLIC_NHOST_AUTH_URL ||
        (process.env.NODE_ENV === 'production'
          ? 'https://api.monprojet.com/v1/auth'
          : 'http://localhost:1337/v1/auth'),
      nhostStorageUrl: process.env.NUXT_PUBLIC_NHOST_STORAGE_URL ||
        (process.env.NODE_ENV === 'production'
          ? 'https://api.monprojet.com/v1/storage'
          : 'http://localhost:1337/v1/storage'),
      nhostFunctionsUrl: process.env.NUXT_PUBLIC_NHOST_FUNCTIONS_URL ||
        (process.env.NODE_ENV === 'production'
          ? 'https://api.monprojet.com/v1/functions'
          : 'http://localhost:1337/v1/functions'),
      nhostDashboardUrl: process.env.NUXT_PUBLIC_NHOST_DASHBOARD_URL ||
        (process.env.NODE_ENV === 'production'
          ? 'https://dashboard.monprojet.com'
          : 'http://localhost:1337'),
      nhostMailhogUrl: process.env.NUXT_PUBLIC_NHOST_MAILHOG_URL ||
        (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8025'),
      nhostRegion: process.env.NUXT_PUBLIC_NHOST_REGION ||
        (process.env.NODE_ENV === 'production' ? 'ma-region-prod' : 'local'),
      nhostPostgresUrl: process.env.NUXT_PUBLIC_NHOST_POSTGRES_URL ||
        (process.env.NODE_ENV === 'production'
          ? 'postgres://postgres:postgres@db.monprojet.com:5432/production'
          : 'postgres://postgres:postgres@localhost:5432/local')
    }
  },

  app: {
    head: {
      title: process.env.APP_TITLE ||
        (process.env.NODE_ENV === 'production'
          ? 'Nom de l\'Appli Prod'
          : 'Nom de l\'Appli Dev'),
      meta: [
        { name: 'description', content: process.env.APP_DESCRIPTION || 'Description de l\'appli Nhost.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: process.env.APP_TITLE ||
            (process.env.NODE_ENV === 'production'
              ? 'Nom de l\'Appli Prod'
              : 'Nom de l\'Appli Dev') },
        { property: 'og:description', content: process.env.APP_DESCRIPTION || 'Description de l\'appli Nhost.' },
        { property: 'og:image', content: process.env.APP_LOGO || '/logo.png' },
        { property: 'og:url', content: process.env.BASE_URL ||
            (process.env.NODE_ENV === 'production'
              ? 'https://monprojet.com'
              : 'http://localhost:3000') }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: process.env.APP_LOGO || '/favicon.ico' }
      ]
    }
  },

  // Pour configurer le serveur en mode développement (Nuxt 3 utilise "devServer" au lieu de "server")
  devServer: {
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST || '0.0.0.0'
  },

  plugins: ['~/plugins/nhost.js'],
  compatibilityDate: '2025-02-18'
})