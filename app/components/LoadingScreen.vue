<template>
  <Transition name="fade">
    <div v-if="isLoading" class="loading-screen">
      <!-- Background Effects -->
      <div class="loading-bg">
        <div class="bg-gradient"></div>
        <div class="bg-particles">
          <span v-for="i in 20" :key="i" class="particle"></span>
        </div>
      </div>

      <!-- Loading Content -->
      <div class="loading-content">
        <div class="loading-logo-wrapper">
          <img src="/logo.jpg" alt="XYZTravelGo" class="loading-logo" />
          <div class="logo-glow"></div>
        </div>
        
        <div class="loading-text">
          <h1 class="loading-title">xyztravelgo</h1>
          <p class="loading-subtitle">เปรียบเทียบราคา Pass รถไฟญี่ปุ่น</p>
        </div>

        <div class="loading-progress">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progress + '%' }"></div>
          </div>
          <span class="progress-text">กำลังโหลด...</span>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="loading-decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  duration: {
    type: Number,
    default: 2500
  }
})

const emit = defineEmits(['complete'])

const isLoading = ref(true)
const progress = ref(0)

onMounted(() => {
  // Animate progress bar
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += Math.random() * 15 + 5
      if (progress.value > 100) progress.value = 100
    }
  }, props.duration / 10)

  // Complete loading after duration
  setTimeout(() => {
    clearInterval(interval)
    progress.value = 100
    
    setTimeout(() => {
      isLoading.value = false
      emit('complete')
    }, 500)
  }, props.duration)
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-dark);
}

/* Background */
.loading-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(107, 91, 154, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(196, 169, 98, 0.2) 0%, transparent 50%),
    var(--gradient-dark);
}

.bg-particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--accent);
  border-radius: 50%;
  opacity: 0.3;
  animation: float 4s ease-in-out infinite;
}

.particle:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
.particle:nth-child(2) { left: 20%; top: 80%; animation-delay: 0.5s; }
.particle:nth-child(3) { left: 30%; top: 40%; animation-delay: 1s; }
.particle:nth-child(4) { left: 40%; top: 60%; animation-delay: 1.5s; }
.particle:nth-child(5) { left: 50%; top: 30%; animation-delay: 2s; }
.particle:nth-child(6) { left: 60%; top: 70%; animation-delay: 0.3s; }
.particle:nth-child(7) { left: 70%; top: 50%; animation-delay: 0.8s; }
.particle:nth-child(8) { left: 80%; top: 20%; animation-delay: 1.3s; }
.particle:nth-child(9) { left: 90%; top: 60%; animation-delay: 1.8s; }
.particle:nth-child(10) { left: 15%; top: 50%; animation-delay: 2.3s; }
.particle:nth-child(11) { left: 25%; top: 10%; animation-delay: 0.2s; }
.particle:nth-child(12) { left: 35%; top: 90%; animation-delay: 0.7s; }
.particle:nth-child(13) { left: 45%; top: 15%; animation-delay: 1.2s; }
.particle:nth-child(14) { left: 55%; top: 85%; animation-delay: 1.7s; }
.particle:nth-child(15) { left: 65%; top: 35%; animation-delay: 2.2s; }
.particle:nth-child(16) { left: 75%; top: 75%; animation-delay: 0.4s; }
.particle:nth-child(17) { left: 85%; top: 45%; animation-delay: 0.9s; }
.particle:nth-child(18) { left: 95%; top: 25%; animation-delay: 1.4s; }
.particle:nth-child(19) { left: 5%; top: 65%; animation-delay: 1.9s; }
.particle:nth-child(20) { left: 50%; top: 95%; animation-delay: 2.4s; }

/* Content */
.loading-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;
}

.loading-logo-wrapper {
  position: relative;
  animation: pulse 2s ease-in-out infinite;
}

.loading-logo {
  width: 120px;
  height: 120px;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: var(--shadow-lg);
}

.logo-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(196, 169, 98, 0.4) 0%, transparent 70%);
  opacity: 0.6;
  animation: pulse 2s ease-in-out infinite;
}

.loading-text {
  animation: fadeInUp 0.8s ease 0.3s backwards;
}

.loading-title {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.loading-subtitle {
  font-size: 1.125rem;
  color: var(--text-muted);
}

.loading-progress {
  width: 280px;
  animation: fadeInUp 0.8s ease 0.6s backwards;
}

.progress-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 12px;
}

.progress-fill {
  height: 100%;
  background: var(--gradient-accent);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.875rem;
  color: var(--text-muted);
}

/* Decoration */
.loading-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.circle {
  position: absolute;
  border: 1px solid var(--border);
  border-radius: 50%;
  animation: spin 20s linear infinite;
}

.circle-1 {
  width: 400px;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
}

.circle-2 {
  width: 600px;
  height: 600px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  animation-direction: reverse;
}

.circle-3 {
  width: 800px;
  height: 800px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
