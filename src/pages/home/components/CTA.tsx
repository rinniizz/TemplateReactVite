import { Link } from 'react-router-dom'
import { FiArrowRight, FiGithub, FiStar } from 'react-icons/fi'

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
                  onClick={() => console.log('GitHub button clicked!')}
                >
                  <FiGithub className="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

          {/* GitHub Stats */}
          <div className="card animate-bounce-in">
            <div className="card-body">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                💫 ชุมชนที่เติบโตอย่างรวดเร็ว
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
                    <span className="text-2xl font-bold text-gray-900">1.2k</span>
                  </div>
                  <div className="text-sm text-gray-600">GitHub Stars</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Downloads</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Contributors</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
