<template>
  <section id="compare" class="section pass-comparison">
    <div class="container">
      <!-- Section Header -->
      <div class="section-heading">
        <div class="badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
          </svg>
          เปรียบเทียบราคา
        </div>
        <h2>เลือก Pass ที่ใช่สำหรับคุณ</h2>
        <p>เปรียบเทียบราคาจาก 3 ผู้ให้บริการชั้นนำ เพื่อหาข้อเสนอที่ดีที่สุด</p>
      </div>

      <!-- Pass Cards -->
      <div class="pass-grid">
        <div v-for="pass in passes" :key="pass.id" class="pass-card">
          <div class="pass-header">
            <span v-if="pass.popular" class="popular-badge">ยอดนิยม</span>
            <h3>{{ pass.name }}</h3>
            <p class="pass-description">{{ pass.description }}</p>
          </div>

          <div class="pass-body">
            <div class="price-comparison">
              <div 
                v-for="provider in pass.prices" 
                :key="provider.name" 
                class="provider-price"
                :class="{ 'best-deal': provider.isBest }"
              >
                <div class="provider-info">
                  <div class="provider-logo" :class="provider.class">
                    {{ provider.abbr }}
                  </div>
                  <span class="provider-name">{{ provider.name }}</span>
                </div>
                <div class="price-info">
                  <span class="price">฿{{ provider.price.toLocaleString() }}</span>
                  <span v-if="provider.isBest" class="best-tag">ราคาดีที่สุด</span>
                </div>
              </div>
            </div>

            <div class="pass-features">
              <div v-for="feature in pass.features" :key="feature" class="feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>

          <div class="pass-footer">
            <a :href="pass.bestLink" class="btn btn-primary" target="_blank">
              ซื้อจาก {{ pass.bestProvider }}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="comparison-cta">
        <p>ต้องการความช่วยเหลือในการเลือก Pass?</p>
        <a href="#faq" class="btn btn-outline">ดูคำถามที่พบบ่อย</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const passes = ref([
  {
    id: 1,
    name: 'JR Pass 7 วัน',
    description: 'สำหรับเดินทางทั่วประเทศญี่ปุ่น',
    popular: true,
    bestProvider: 'JapanAllPass',
    bestLink: 'https://japanallpass.com',
    prices: [
      { name: 'JapanAllPass', abbr: 'JAP', class: 'japanallpass', price: 13500, isBest: true },
      { name: 'KKday', abbr: 'KK', class: 'kkday', price: 14200, isBest: false },
      { name: 'Klook', abbr: 'K', class: 'klook', price: 14500, isBest: false },
    ],
    features: [
      'ใช้ได้กับรถไฟ JR ทุกสาย',
      'รวม Shinkansen (ยกเว้น Nozomi/Mizuho)',
      'บัส JR และเรือข้ามฟาก JR',
    ]
  },
  {
    id: 2,
    name: 'JR Pass 14 วัน',
    description: 'เหมาะสำหรับการเดินทางระยะยาว',
    popular: false,
    bestProvider: 'KKday',
    bestLink: 'https://kkday.com',
    prices: [
      { name: 'JapanAllPass', abbr: 'JAP', class: 'japanallpass', price: 21900, isBest: false },
      { name: 'KKday', abbr: 'KK', class: 'kkday', price: 21500, isBest: true },
      { name: 'Klook', abbr: 'K', class: 'klook', price: 22200, isBest: false },
    ],
    features: [
      'ใช้ได้กับรถไฟ JR ทุกสาย',
      'รวม Shinkansen (ยกเว้น Nozomi/Mizuho)',
      'คุ้มค่าสำหรับทริปยาว',
    ]
  },
  {
    id: 3,
    name: 'JR Pass 21 วัน',
    description: 'ครอบคลุมการเดินทางครบทุกภูมิภาค',
    popular: false,
    bestProvider: 'Klook',
    bestLink: 'https://klook.com',
    prices: [
      { name: 'JapanAllPass', abbr: 'JAP', class: 'japanallpass', price: 28500, isBest: false },
      { name: 'KKday', abbr: 'KK', class: 'kkday', price: 28800, isBest: false },
      { name: 'Klook', abbr: 'K', class: 'klook', price: 27900, isBest: true },
    ],
    features: [
      'ใช้ได้กับรถไฟ JR ทุกสาย',
      'รวม Shinkansen (ยกเว้น Nozomi/Mizuho)',
      'เหมาะสำหรับนักเดินทางระยะยาว',
    ]
  },
  {
    id: 4,
    name: 'Hokkaido Pass 4 วัน',
    description: 'เฉพาะภูมิภาค Hokkaido',
    popular: false,
    bestProvider: 'JapanAllPass',
    bestLink: 'https://japanallpass.com',
    prices: [
      { name: 'JapanAllPass', abbr: 'JAP', class: 'japanallpass', price: 7900, isBest: true },
      { name: 'KKday', abbr: 'KK', class: 'kkday', price: 8200, isBest: false },
      { name: 'Klook', abbr: 'K', class: 'klook', price: 8500, isBest: false },
    ],
    features: [
      'ใช้ได้กับ JR Hokkaido ทุกสาย',
      'รวม Shinkansen Hokkaido',
      'เหมาะสำหรับเที่ยว Sapporo, Hakodate',
    ]
  },
  {
    id: 5,
    name: 'Kansai Pass 3 วัน',
    description: 'เฉพาะภูมิภาค Kansai',
    popular: true,
    bestProvider: 'KKday',
    bestLink: 'https://kkday.com',
    prices: [
      { name: 'JapanAllPass', abbr: 'JAP', class: 'japanallpass', price: 4500, isBest: false },
      { name: 'KKday', abbr: 'KK', class: 'kkday', price: 4200, isBest: true },
      { name: 'Klook', abbr: 'K', class: 'klook', price: 4400, isBest: false },
    ],
    features: [
      'ใช้ได้กับ JR West ในเขต Kansai',
      'เข้าถึง Osaka, Kyoto, Nara',
      'รวมสนามบิน Kansai',
    ]
  },
  {
    id: 6,
    name: 'Tokyo Wide Pass 3 วัน',
    description: 'เฉพาะภูมิภาค Tokyo และรอบๆ',
    popular: false,
    bestProvider: 'Klook',
    bestLink: 'https://klook.com',
    prices: [
      { name: 'JapanAllPass', abbr: 'JAP', class: 'japanallpass', price: 4100, isBest: false },
      { name: 'KKday', abbr: 'KK', class: 'kkday', price: 4000, isBest: false },
      { name: 'Klook', abbr: 'K', class: 'klook', price: 3900, isBest: true },
    ],
    features: [
      'เข้าถึง Mt. Fuji, Nikko, Karuizawa',
      'รวม Shinkansen บางสาย',
      'เหมาะสำหรับ day trip จาก Tokyo',
    ]
  },
])
</script>

<style scoped>
.pass-comparison {
  background: var(--gradient-radial);
}

.pass-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 60px;
}

.pass-card {
  background: var(--glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  transition: var(--transition-normal);
  display: flex;
  flex-direction: column;
}

.pass-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary-light);
  box-shadow: var(--shadow-lg);
}

.pass-header {
  padding: 24px;
  border-bottom: 1px solid var(--border);
  position: relative;
}

.popular-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 12px;
  background: var(--gradient-accent);
  color: var(--primary-dark);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 100px;
}

.pass-header h3 {
  font-size: 1.25rem;
  margin-bottom: 4px;
}

.pass-description {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.pass-body {
  padding: 24px;
  flex: 1;
}

.price-comparison {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.provider-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  transition: var(--transition-fast);
}

.provider-price.best-deal {
  background: rgba(196, 169, 98, 0.1);
  border: 1px solid rgba(196, 169, 98, 0.3);
}

.provider-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.provider-logo {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.75rem;
  color: var(--white);
}

.provider-logo.japanallpass {
  background: linear-gradient(135deg, #E53935 0%, #C62828 100%);
}

.provider-logo.kkday {
  background: linear-gradient(135deg, #FF6B00 0%, #E55500 100%);
}

.provider-logo.klook {
  background: linear-gradient(135deg, #FF5722 0%, #E64A19 100%);
}

.provider-name {
  font-size: 0.875rem;
  color: var(--text-light);
}

.price-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

.price {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--white);
}

.best-tag {
  font-size: 0.625rem;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pass-features {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.feature svg {
  color: var(--accent);
  flex-shrink: 0;
}

.pass-footer {
  padding: 20px 24px;
  border-top: 1px solid var(--border);
}

.pass-footer .btn {
  width: 100%;
  font-size: 0.875rem;
}

.comparison-cta {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.comparison-cta p {
  font-size: 1rem;
  color: var(--text-muted);
}

/* Responsive */
@media (max-width: 1024px) {
  .pass-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .pass-grid {
    grid-template-columns: 1fr;
  }
}
</style>
