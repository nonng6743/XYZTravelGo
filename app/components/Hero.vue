<template>
  <section class="hero">
    <!-- Background Effects -->
    <div class="hero-bg">
      <div class="bg-gradient"></div>
      <div class="bg-pattern"></div>
      <div class="bg-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
    </div>

    <div class="container">
      <div class="hero-content">
        <!-- Badge -->
        <div class="hero-badge animate-fade-in-up" style="animation-delay: 0.1s">
          <span class="badge-dot"></span>
          เปรียบเทียบราคาจาก 3 ผู้ให้บริการชั้นนำ
        </div>

        <!-- Heading -->
        <h1 class="hero-title animate-fade-in-up" style="animation-delay: 0.2s">
          ค้นหา <span class="highlight">Pass รถไฟญี่ปุ่น</span><br />
          ในราคาที่ดีที่สุด
        </h1>

        <!-- Description -->
        <p class="hero-description animate-fade-in-up" style="animation-delay: 0.3s">
          เปรียบเทียบราคา JR Pass และ Pass รถไฟญี่ปุ่นจาก JapanAllPass, KKday และ Klook 
          เพื่อให้คุณได้ราคาที่คุ้มค่าที่สุดสำหรับการเดินทาง
        </p>

        <!-- CTA Buttons -->
        <div class="hero-buttons animate-fade-in-up" style="animation-delay: 0.4s">
          <a href="#compare" class="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            เริ่มเปรียบเทียบ
          </a>
          <a href="#providers" class="btn btn-outline">
            ดูผู้ให้บริการ
          </a>
        </div>

        <!-- Stats -->
        <div class="hero-stats animate-fade-in-up" style="animation-delay: 0.5s">
          <div class="stat">
            <span class="stat-value">3</span>
            <span class="stat-label">ผู้ให้บริการ</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-value">20+</span>
            <span class="stat-label">ประเภท Pass</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-value">ฟรี</span>
            <span class="stat-label">ไม่มีค่าใช้จ่าย</span>
          </div>
        </div>
      </div>

      <!-- Hero Image / Card -->
      <div class="hero-visual animate-fade-in-up" style="animation-delay: 0.6s">
        <div class="visual-card">
          <div class="provider-logos">
            <div class="provider-logo">
              <div class="logo-circle japanallpass">
                <span>JAP</span>
              </div>
              <span class="provider-name">JapanAllPass</span>
            </div>
            <div class="provider-logo">
              <div class="logo-circle kkday">
                <span>KK</span>
              </div>
              <span class="provider-name">KKday</span>
            </div>
            <div class="provider-logo">
              <div class="logo-circle klook">
                <span>K</span>
              </div>
              <span class="provider-name">Klook</span>
            </div>
          </div>
          <div class="card-content">
            <div class="sample-product">
              <span class="product-badge">ยอดนิยม</span>
              <h4>JR Pass 7 วัน</h4>
              <p>ทั่วประเทศญี่ปุ่น</p>
              <div class="price-compare">
                <span class="best-price">฿13,500</span>
                <span class="savings">ประหยัดสูงสุด ฿1,200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span>เลื่อนลง</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 120px 0 80px;
  overflow: hidden;
}

/* Background Effects */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 80% 80% at 20% 20%, rgba(107, 91, 154, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse 60% 60% at 80% 80%, rgba(196, 169, 98, 0.15) 0%, transparent 50%);
}

.bg-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.bg-orbs {
  position: absolute;
  inset: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: float 8s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(107, 91, 154, 0.3);
  top: -10%;
  left: -10%;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: rgba(196, 169, 98, 0.2);
  bottom: 10%;
  right: 5%;
  animation-delay: 2s;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: rgba(139, 123, 179, 0.2);
  top: 50%;
  left: 50%;
  animation-delay: 4s;
}

/* Content */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 10;
}

.hero-content {
  max-width: 600px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--glass-light);
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.875rem;
  color: var(--text-light);
  margin-bottom: 24px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
}

.highlight {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-muted);
  margin-bottom: 32px;
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 24px 0;
  border-top: 1px solid var(--border);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--white);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border);
}

/* Visual Card */
.hero-visual {
  position: relative;
}

.visual-card {
  background: var(--glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 32px;
  box-shadow: var(--shadow-lg);
}

.provider-logos {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.provider-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.logo-circle {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--white);
}

.logo-circle.japanallpass {
  background: linear-gradient(135deg, #E53935 0%, #C62828 100%);
}

.logo-circle.kkday {
  background: linear-gradient(135deg, #FF6B00 0%, #E55500 100%);
}

.logo-circle.klook {
  background: linear-gradient(135deg, #FF5722 0%, #E64A19 100%);
}

.provider-name {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.card-content {
  text-align: center;
}

.sample-product {
  position: relative;
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
}

.product-badge {
  display: inline-block;
  padding: 4px 12px;
  background: var(--gradient-accent);
  color: var(--primary-dark);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 100px;
  margin-bottom: 12px;
}

.sample-product h4 {
  font-size: 1.25rem;
  margin-bottom: 4px;
}

.sample-product p {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.price-compare {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.best-price {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
}

.savings {
  font-size: 0.875rem;
  color: #4CAF50;
  font-weight: 500;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.75rem;
  animation: float 2s ease-in-out infinite;
}

.scroll-mouse {
  width: 24px;
  height: 40px;
  border: 2px solid var(--text-muted);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: var(--text-muted);
  border-radius: 2px;
  animation: scrollWheel 1.5s ease-in-out infinite;
}

@keyframes scrollWheel {
  0%, 100% { opacity: 1; transform: translateY(0); }
  50% { opacity: 0.3; transform: translateY(8px); }
}

/* Responsive */
@media (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-stats {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 100px 0 60px;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .hero-stats {
    flex-wrap: wrap;
    gap: 24px;
  }
  
  .stat-divider {
    display: none;
  }
  
  .provider-logos {
    gap: 16px;
  }
}
</style>
