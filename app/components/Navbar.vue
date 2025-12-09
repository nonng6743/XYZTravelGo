<template>
  <header class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <!-- Logo -->
        <NuxtLink to="/" class="navbar-logo">
          <img src="/logo.jpg" alt="XYZTravelGo" class="logo-img" />
          <span class="logo-text">xyztravelgo</span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="navbar-nav">
          <a href="#compare" class="nav-link">เปรียบเทียบราคา</a>
          <a href="#providers" class="nav-link">ผู้ให้บริการ</a>
          <a href="#faq" class="nav-link">คำถามที่พบบ่อย</a>
        </nav>

        <!-- CTA Button -->
        <button class="btn btn-primary navbar-cta">
          เริ่มเปรียบเทียบ
        </button>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="toggleMenu" aria-label="Toggle menu">
          <span class="hamburger" :class="{ 'active': menuOpen }"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <div v-if="menuOpen" class="mobile-menu">
          <nav class="mobile-nav">
            <a href="#compare" class="mobile-nav-link" @click="closeMenu">เปรียบเทียบราคา</a>
            <a href="#providers" class="mobile-nav-link" @click="closeMenu">ผู้ให้บริการ</a>
            <a href="#faq" class="mobile-nav-link" @click="closeMenu">คำถามที่พบบ่อย</a>
            <button class="btn btn-primary mobile-cta" @click="closeMenu">
              เริ่มเปรียบเทียบ
            </button>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
const isScrolled = ref(false)
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition-normal);
}

.navbar.scrolled {
  background: var(--glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  padding: 12px 0;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-img {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  object-fit: cover;
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: -0.02em;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-link {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-muted);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: var(--transition-normal);
}

.nav-link:hover {
  color: var(--white);
}

.nav-link:hover::after {
  width: 100%;
}

.navbar-cta {
  padding: 10px 24px;
  font-size: 0.875rem;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--white);
  position: relative;
  transition: var(--transition-fast);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--white);
  transition: var(--transition-fast);
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

.hamburger.active {
  background: transparent;
}

.hamburger.active::before {
  top: 0;
  transform: rotate(45deg);
}

.hamburger.active::after {
  bottom: 0;
  transform: rotate(-45deg);
}

.mobile-menu {
  padding: 24px 0;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-nav-link {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--text-light);
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}

.mobile-cta {
  margin-top: 16px;
  width: 100%;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 968px) {
  .navbar-nav,
  .navbar-cta {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
}
</style>
