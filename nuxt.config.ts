// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  app: {
    head: {
      title: 'XYZTravelGo - เปรียบเทียบราคา Pass รถไฟญี่ปุ่น',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  
  css: ['~/assets/css/main.css'],
  
  modules: [],

  future: {
    compatibilityVersion: 4
  }
})
