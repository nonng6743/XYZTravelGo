<template>
  <div id="app">
    <!-- Loading Screen -->
    <LoadingScreen v-if="isLoading" :duration="2500" @complete="onLoadingComplete" />

    <!-- Main Content -->
    <Transition name="content-fade">
      <div v-if="!isLoading" class="main-content">
        <Navbar />
        <main>
          <Hero />
          <PassComparison />
          <Providers />
          <FAQ />
        </main>
        <Footer />
      </div>
    </Transition>
  </div>
</template>

<script setup>
// Meta tags for SEO
useHead({
  title: 'XYZTravelGo - เปรียบเทียบราคา Pass รถไฟญี่ปุ่น | JR Pass',
  htmlAttrs: {
    lang: 'th'
  },
  meta: [
    { name: 'description', content: 'เปรียบเทียบราคา JR Pass และ Pass รถไฟญี่ปุ่นจาก JapanAllPass, KKday และ Klook เพื่อหาข้อเสนอที่ดีที่สุดสำหรับการเดินทางในญี่ปุ่น' },
    { name: 'keywords', content: 'JR Pass, Japan Rail Pass, เปรียบเทียบราคา, JapanAllPass, KKday, Klook, รถไฟญี่ปุ่น, Shinkansen' },
    { name: 'author', content: 'XYZTravelGo' },
    { property: 'og:title', content: 'XYZTravelGo - เปรียบเทียบราคา Pass รถไฟญี่ปุ่น' },
    { property: 'og:description', content: 'เปรียบเทียบราคา JR Pass จาก 3 ผู้ให้บริการชั้นนำ หาข้อเสนอที่ดีที่สุดสำหรับการเดินทางในญี่ปุ่น' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://xyztravelgo.com' },
    { property: 'og:image', content: '/logo.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#4A3B6B' }
  ],
  link: [
    { rel: 'icon', type: 'image/jpeg', href: '/logo.jpg' }
  ]
})

const isLoading = ref(true)

const onLoadingComplete = () => {
  isLoading.value = false
}
</script>

<style>
/* Content Fade Transition */
.content-fade-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.content-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.main-content {
  min-height: 100vh;
}
</style>
