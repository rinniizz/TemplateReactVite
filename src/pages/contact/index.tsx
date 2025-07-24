import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import MapSection from './components/MapSection'
import FAQSection from './components/FAQSection'

const ContactPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ติดต่อ<span className="text-gradient">เรา</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              มีคำถามหรือต้องการความช่วยเหลือ? เราพร้อมให้บริการและตอบทุกข้อสงสัยของคุณ
              ไม่ว่าจะเป็นเรื่องเทคนิคหรือการใช้งาน
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 section-padding">
        <ContactInfo />
        <ContactForm />
      </div>

      <FAQSection />
      <MapSection />
    </div>
  )
}

export default ContactPage
