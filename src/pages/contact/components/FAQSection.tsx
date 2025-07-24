import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: 'เทมเพลตนี้ใช้งานฟรีใช่ไหม?',
      answer: 'ใช่ครับ เทมเพลตนี้เป็น open source และใช้งานฟรีสำหรับทั้งโปรเจกต์ส่วนตัวและเชิงพาณิชย์ ภายใต้ MIT License'
    },
    {
      question: 'ต้องมีความรู้อะไรบ้างในการใช้งาน?',
      answer: 'ควรมีความรู้พื้นฐานเรื่อง React, TypeScript, และ Tailwind CSS จะช่วยให้ใช้งานได้อย่างมีประสิทธิภาพ แต่เราก็มีเอกสารที่ครบถ้วนสำหรับผู้เริ่มต้นด้วย'
    },
    {
      question: 'สามารถปรับแต่งการออกแบบได้ไหม?',
      answer: 'ได้เลยครับ เทมเพลตนี้ออกแบบมาให้ปรับแต่งได้ง่าย โดยใช้ Tailwind CSS ทำให้สามารถเปลี่ยนสี ฟอนต์ หรือสไตล์ต่างๆ ได้ตามต้องการ'
    },
    {
      question: 'มีการสนับสนุนและอัพเดทไหม?',
      answer: 'มีครับ เราอัพเดทเทมเพลตนี้อย่างสม่ำเสมอ และมีทีมสนับสนุนพร้อมตอบคำถามผ่านหลายช่องทาง รวมถึง GitHub Issues และ Discord'
    },
    {
      question: 'ใช้ได้กับ Node.js เวอร์ชันไหนบ้าง?',
      answer: 'แนะนำ Node.js เวอร์ชัน 16 ขึ้นไป และ npm เวอร์ชัน 7 ขึ้นไป เพื่อประสิทธิภาพและความเสถียรที่ดีที่สุด'
    },
    {
      question: 'สามารถใช้กับ backend อื่นได้ไหม?',
      answer: 'ได้ครับ นี่เป็นเทมเพลต frontend เท่านั้น สามารถใช้กับ backend API ใดก็ได้ ไม่ว่าจะเป็น Node.js, Python, PHP หรืออื่นๆ'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ❓ คำถามที่พบบ่อย
            </h2>
            <p className="text-xl text-gray-600">
              คำตอบสำหรับคำถามที่ผู้ใช้งานถามบ่อยที่สุด
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="card card-hover animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full card-body text-left flex items-center justify-between p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <FiChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in">
            <div className="card bg-primary-50 border border-primary-200">
              <div className="card-body">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  🤔 ไม่พบคำตอบที่ต้องการ?
                </h3>
                <p className="text-gray-600 mb-4">
                  ส่งคำถามมาให้เรา เราจะตอบคำถามและอาจจะเพิ่มเข้าไปใน FAQ นี้ด้วย
                </p>
                <button className="btn btn-primary btn-md">
                  ส่งคำถาม
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
