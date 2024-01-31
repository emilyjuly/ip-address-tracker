export default defineNuxtConfig({
    modules: [
        'nuxt-primevue',
        'nuxt3-leaflet',
        '@pinia/nuxt',
    ],
    css: [
        '~/assets/css/main.css'
    ],
    runtimeConfig: {
        public: {
            API_KEY_IP: process.env.API_KEY_IP,
            API_KEY_GEO: process.env.API_KEY_GEO
        }
    }
})

