import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-primary-200 mb-6 animate-bounce-in">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-sm font-medium text-gray-700">
              🚀 React + Vite + Tailwind Ready!
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            สร้างเว็บแอปที่
            <span className="text-gradient block">ทันสมัยและรวดเร็ว</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in">
            เริ่มต้นโปรเจกต์ React ของคุณด้วยเทมเพลตที่มาพร้อมกับ 
            <strong className="text-primary-600"> Vite, TypeScript, Tailwind CSS </strong>
            และเครื่องมือที่ดีที่สุด
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <Link 
              to="/about" 
              className="btn btn-primary btn-lg flex items-center space-x-2 group"
            >
              <span>เริ่มต้นใช้งาน</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              className="btn btn-outline btn-lg flex items-center space-x-2"
              onClick={() => {
                console.log('Demo button clicked!')
                alert('ตัวอย่างการทำงานของปุ่ม!')
              }}
            >
              <FiPlay className="w-5 h-5" />
              <span>ดูตัวอย่าง</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">⚡</div>
              <div className="text-gray-900 font-semibold">Lightning Fast</div>
              <div className="text-sm text-gray-600">Vite HMR</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">📱</div>
              <div className="text-gray-900 font-semibold">Responsive</div>
              <div className="text-sm text-gray-600">Mobile First</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">🎨</div>
              <div className="text-gray-900 font-semibold">Beautiful UI</div>
              <div className="text-sm text-gray-600">Tailwind CSS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
