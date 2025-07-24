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
            
            <button className="btn btn-outline btn-lg flex items-center space-x-2">
              <FiPlay className="w-5 h-5" />
              <span>ดูตัวอย่าง</span>
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold">⚡</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
                <p className="text-sm text-gray-600">Vite HMR</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-bold">📱</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Responsive</h3>
                <p className="text-sm text-gray-600">Mobile First</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold">🎨</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Beautiful UI</h3>
                <p className="text-sm text-gray-600">Tailwind CSS</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-gray-500 mb-6 font-medium">POWERED BY</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                  alt="React" 
                  className="w-8 h-8"
                />
                <span className="font-medium text-gray-700">React</span>
              </div>
              <div className="flex items-center space-x-2">
                <img 
                  src="https://vitejs.dev/logo.svg" 
                  alt="Vite" 
                  className="w-8 h-8"
                />
                <span className="font-medium text-gray-700">Vite</span>
              </div>
              <div className="flex items-center space-x-2">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                  alt="TypeScript" 
                  className="w-8 h-8"
                />
                <span className="font-medium text-gray-700">TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
                  alt="Tailwind CSS" 
                  className="w-8 h-8"
                />
                <span className="font-medium text-gray-700">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
