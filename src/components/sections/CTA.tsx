import { Link } from 'react-router-dom'
import { FiArrowRight, FiGithub } from 'react-icons/fi'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main CTA */}
          <div className="card bg-gradient-to-br from-primary-600 to-accent-600 text-white mb-12">
            <div className="card-body p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                พร้อมเริ่มต้นแล้วหรือยัง?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                ดาวน์โหลดเทมเพลตและเริ่มสร้างเว็บแอปที่ยอดเยี่ยมได้เลยวันนี้
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="btn bg-white text-primary-600 hover:bg-gray-100 btn-lg flex items-center space-x-2 group"
                >
                  <span>เริ่มต้นเลย</span>
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 btn-lg flex items-center space-x-2"
                >
                  <FiGithub className="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card card-hover animate-slide-in">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  เอกสารครบถ้วน
                </h3>
                <p className="text-gray-600 text-sm">
                  มีเอกสารและตัวอย่างการใช้งานที่ครบถ้วน เข้าใจง่าย
                </p>
              </div>
            </div>

            <div className="card card-hover animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  เริ่มต้นได้ทันที
                </h3>
                <p className="text-gray-600 text-sm">
                  คลอนโปรเจกต์และรันได้เลย ไม่ต้องตั้งค่าซับซ้อน
                </p>
              </div>
            </div>

            <div className="card card-hover animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛠️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ปรับแต่งได้ง่าย
                </h3>
                <p className="text-gray-600 text-sm">
                  โครงสร้างที่ยืดหยุ่น ปรับแต่งได้ตามความต้องการ
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 card animate-bounce-in">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                อัพเดทข่าวสารล่าสุด
              </h3>
              <p className="text-gray-600 mb-6">
                รับข่าวสารเกี่ยวกับการอัพเดทใหม่ๆ และเทคนิคการพัฒนา
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="กรอกอีเมลของคุณ"
                    className="form-input rounded-r-none border-r-0"
                  />
                  <button className="btn btn-primary rounded-l-none px-6">
                    สมัคร
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  เราไม่แชร์อีเมลของคุณให้กับบุคคลที่สาม
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
