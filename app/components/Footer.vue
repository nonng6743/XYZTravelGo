<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Brand -->
        <div class="footer-brand">
          <NuxtLink to="/" class="footer-logo">
            <img src="/logo.jpg" alt="XYZTravelGo" class="logo-img" />
            <span class="logo-text">xyztravelgo</span>
          </NuxtLink>
          <p class="footer-description">
            เว็บไซต์เปรียบเทียบราคา Pass รถไฟญี่ปุ่นที่ดีที่สุด 
            ช่วยให้คุณหาข้อเสนอที่คุ้มค่าจาก JapanAllPass, KKday และ Klook
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="footer-links">
          <div class="footer-column">
            <h4>ลิงก์ด่วน</h4>
            <ul>
              <li><a href="#compare">เปรียบเทียบราคา</a></li>
              <li><a href="#providers">ผู้ให้บริการ</a></li>
              <li><a href="#faq">คำถามที่พบบ่อย</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>ประเภท Pass</h4>
            <ul>
              <li><a href="#">JR Pass ทั่วประเทศ</a></li>
              <li><a href="#">Hokkaido Pass</a></li>
              <li><a href="#">Kansai Pass</a></li>
              <li><a href="#">Tokyo Wide Pass</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>ผู้ให้บริการ</h4>
            <ul>
              <li><a href="https://japanallpass.com" target="_blank">JapanAllPass</a></li>
              <li><a href="https://kkday.com" target="_blank">KKday</a></li>
              <li><a href="https://klook.com" target="_blank">Klook</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} xyztravelgo.com - All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">นโยบายความเป็นส่วนตัว</a>
          <a href="#">ข้อกำหนดการใช้งาน</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: 80px 0 32px;
  background: rgba(26, 21, 40, 0.8);
  border-top: 1px solid var(--border);
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 60px;
  margin-bottom: 60px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.logo-img {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  object-fit: cover;
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--white);
}

.footer-description {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 24px;
  max-width: 320px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--glass-light);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-muted);
  transition: var(--transition-normal);
}

.social-link:hover {
  background: var(--primary-light);
  border-color: var(--primary-light);
  color: var(--white);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.footer-column h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-column ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-column a {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.footer-column a:hover {
  color: var(--accent);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.footer-bottom p {
  font-size: 0.8125rem;
  color: var(--text-muted);
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-bottom-links a {
  font-size: 0.8125rem;
  color: var(--text-muted);
}

.footer-bottom-links a:hover {
  color: var(--accent);
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-links {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
