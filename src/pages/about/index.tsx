import TeamSection from './components/TeamSection'
import MissionSection from './components/MissionSection'
import TechStack from './components/TechStack'
import StatsSection from './components/StatsSection'

const AboutPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              เกี่ยวกับ <span className="text-gradient">React Template</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              เราสร้างเทมเพลตนี้เพื่อช่วยให้นักพัฒนาสามารถเริ่มต้นโปรเจกต์ได้อย่างรวดเร็ว
              พร้อมกับเครื่องมือและมาตรฐานที่ดีที่สุด
            </p>
          </div>
        </div>
      </section>

      <MissionSection />
      <TechStack />
      <StatsSection />
      <TeamSection />
    </div>
  )
}

export default AboutPage
