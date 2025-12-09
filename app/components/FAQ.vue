<template>
  <section id="faq" class="section faq">
    <div class="container">
      <div class="section-heading">
        <div class="badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          คำถามที่พบบ่อย
        </div>
        <h2>ข้อสงสัยเกี่ยวกับ JR Pass</h2>
        <p>รวมคำตอบสำหรับคำถามยอดนิยมที่นักท่องเที่ยวมักถาม</p>
      </div>

      <div class="faq-list">
        <div 
          v-for="(item, index) in faqs" 
          :key="index" 
          class="faq-item"
          :class="{ 'active': activeIndex === index }"
        >
          <button class="faq-header" @click="toggle(index)">
            <span>{{ item.question }}</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2"
              class="faq-icon"
            >
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
          <Transition name="accordion">
            <div v-if="activeIndex === index" class="faq-body">
              <p>{{ item.answer }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = ref([
  {
    question: 'JR Pass คืออะไร?',
    answer: 'JR Pass หรือ Japan Rail Pass เป็นบัตรโดยสารพิเศษที่ออกให้เฉพาะนักท่องเที่ยวต่างชาติ สามารถใช้เดินทางไม่จำกัดเที่ยวบนรถไฟสาย JR ทั่วญี่ปุ่น รวมถึง Shinkansen (bullet train) ที่เลือกได้'
  },
  {
    question: 'ควรซื้อ JR Pass ล่วงหน้ากี่วัน?',
    answer: 'แนะนำให้ซื้อล่วงหน้าอย่างน้อย 2-3 สัปดาห์ก่อนเดินทาง เพื่อให้มีเวลาในการจัดส่ง Exchange Order มาถึงบ้านคุณ และเผื่อเวลาสำหรับปัญหาที่อาจเกิดขึ้น'
  },
  {
    question: 'JR Pass ใช้กับ Shinkansen ได้ทุกขบวนหรือไม่?',
    answer: 'JR Pass สามารถใช้ได้กับ Shinkansen ส่วนใหญ่ ยกเว้น Nozomi และ Mizuho ซึ่งเป็นขบวนที่เร็วที่สุด หากต้องการใช้ขบวนเหล่านี้ต้องจ่ายเพิ่ม'
  },
  {
    question: 'JR Pass คุ้มค่าหรือไม่?',
    answer: 'ขึ้นอยู่กับแผนการเดินทางของคุณ หากคุณวางแผนเดินทางไกลหลายครั้ง เช่น Tokyo-Osaka-Kyoto-Hiroshima Pass จะคุ้มค่ามาก แต่หากเดินทางเฉพาะในเมืองเดียว อาจไม่คุ้ม'
  },
  {
    question: 'สามารถจองที่นั่ง Shinkansen ล่วงหน้าได้ไหม?',
    answer: 'ได้ครับ สามารถจองที่นั่งได้ฟรีไม่จำกัดครั้งที่ JR Ticket Office หรือผ่านตู้จองตั๋วอัตโนมัติ แนะนำให้จองล่วงหน้าในช่วงเทศกาลหรือวันหยุดยาว'
  },
  {
    question: 'ซื้อจากเว็บไหนดีที่สุด?',
    answer: 'แต่ละเว็บมีข้อดีต่างกัน JapanAllPass เน้นความเชี่ยวชาญและบริการ, KKday มีโปรโมชั่นบ่อย, Klook มีระบบ Points สะสม แนะนำให้เปรียบเทียบราคาก่อนตัดสินใจ'
  }
])
</script>

<style scoped>
.faq {
  background: var(--gradient-radial);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: var(--glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: var(--transition-normal);
}

.faq-item:hover {
  border-color: var(--primary-light);
}

.faq-item.active {
  border-color: var(--accent);
}

.faq-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  color: var(--white);
  transition: var(--transition-normal);
}

.faq-header:hover {
  color: var(--accent);
}

.faq-icon {
  color: var(--text-muted);
  flex-shrink: 0;
  transition: var(--transition-normal);
}

.faq-item.active .faq-icon {
  transform: rotate(45deg);
  color: var(--accent);
}

.faq-body {
  padding: 0 24px 20px;
}

.faq-body p {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--text-muted);
}

/* Accordion Transition */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
