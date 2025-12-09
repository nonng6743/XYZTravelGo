<template>
  <section id="providers" class="section providers">
    <div class="container">
      <div class="section-heading">
        <div class="badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          ผู้ให้บริการ
        </div>
        <h2>พันธมิตรที่เชื่อถือได้</h2>
        <p>เราเปรียบเทียบราคาจาก 3 ผู้ให้บริการชั้นนำที่ได้รับความไว้วางใจจากนักท่องเที่ยวทั่วโลก</p>
      </div>

      <div class="providers-grid">
        <div v-for="provider in providers" :key="provider.name" class="provider-card">
          <div class="provider-icon" :class="provider.class">
            {{ provider.abbr }}
          </div>
          <h3>{{ provider.name }}</h3>
          <p>{{ provider.description }}</p>
          <div class="provider-features">
            <div v-for="feature in provider.features" :key="feature" class="feature-tag">
              {{ feature }}
            </div>
          </div>
          <a :href="provider.url" target="_blank" class="provider-link">
            เยี่ยมชมเว็บไซต์
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const providers = ref([
  {
    name: 'JapanAllPass',
    abbr: 'JAP',
    class: 'japanallpass',
    description: 'ผู้เชี่ยวชาญด้าน JR Pass โดยเฉพาะ พร้อมบริการจัดส่งถึงบ้าน',
    url: 'https://japanallpass.com',
    features: ['ผู้เชี่ยวชาญ JR Pass', 'ส่งถึงบ้าน', 'รองรับภาษาไทย']
  },
  {
    name: 'KKday',
    abbr: 'KK',
    class: 'kkday',
    description: 'แพลตฟอร์มท่องเที่ยวชั้นนำจากไต้หวัน ครอบคลุมทั่วเอเชีย',
    url: 'https://kkday.com',
    features: ['แพลตฟอร์มใหญ่', 'โปรโมชั่นบ่อย', 'หลากหลายทางเลือก']
  },
  {
    name: 'Klook',
    abbr: 'K',
    class: 'klook',
    description: 'แพลตฟอร์มจอง Activities และ Transport อันดับ 1 ของเอเชีย',
    url: 'https://klook.com',
    features: ['App ใช้ง่าย', 'Points สะสม', 'รีวิวมากมาย']
  }
])
</script>

<style scoped>
.providers {
  position: relative;
}

.providers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.provider-card {
  background: var(--glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  transition: var(--transition-normal);
}

.provider-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary-light);
  box-shadow: var(--shadow-lg);
}

.provider-icon {
  width: 72px;
  height: 72px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--white);
  margin: 0 auto 24px;
}

.provider-icon.japanallpass {
  background: linear-gradient(135deg, #E53935 0%, #C62828 100%);
}

.provider-icon.kkday {
  background: linear-gradient(135deg, #FF6B00 0%, #E55500 100%);
}

.provider-icon.klook {
  background: linear-gradient(135deg, #FF5722 0%, #E64A19 100%);
}

.provider-card h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.provider-card p {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 20px;
  line-height: 1.6;
}

.provider-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
}

.feature-tag {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.75rem;
  color: var(--text-light);
}

.provider-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  font-weight: 500;
  font-size: 0.875rem;
}

.provider-link:hover {
  gap: 12px;
}

@media (max-width: 1024px) {
  .providers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .providers-grid {
    grid-template-columns: 1fr;
  }
}
</style>
