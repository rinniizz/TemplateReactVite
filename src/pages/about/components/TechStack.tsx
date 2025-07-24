const TechStack = () => {
  const technologies = [
    {
      name: 'React 18',
      description: 'ไลบรารี JavaScript สำหรับสร้าง UI ที่ทันสมัย',
      icon: '⚛️',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Vite',
      description: 'Build tool ที่รวดเร็วและมีประสิทธิภาพ',
      icon: '⚡',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      name: 'TypeScript',
      description: 'Type safety และ IntelliSense ที่สมบูรณ์',
      icon: '🔷',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
      icon: '🎨',
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      name: 'React Router',
      description: 'การจัดการ routing ที่ยืดหยุ่น',
      icon: '🛣️',
      color: 'bg-red-100 text-red-600'
    },
    {
      name: 'ESLint + Prettier',
      description: 'Code quality และ formatting',
      icon: '✨',
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🚀 เทคโนโลยีที่ใช้
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              เราเลือกใช้เทคโนโลยีที่ดีที่สุดและทันสมัยที่สุดในตอนนี้
              เพื่อให้คุณได้ประสบการณ์การพัฒนาที่ดีที่สุด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="card card-hover animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-body text-center">
                  <div className={`w-16 h-16 ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 animate-fade-in">
            <div className="card bg-gradient-to-r from-primary-600 to-accent-600 text-white">
              <div className="card-body p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  ✅ สิ่งที่คุณจะได้รับ
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔧</div>
                    <div className="font-semibold mb-1">Pre-configured</div>
                    <div className="text-sm text-primary-100">ตั้งค่าพร้อมใช้</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-2">📦</div>
                    <div className="font-semibold mb-1">Components</div>
                    <div className="text-sm text-primary-100">พร้อม UI Components</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="font-semibold mb-1">Best Practices</div>
                    <div className="text-sm text-primary-100">มาตรฐานที่ดี</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-2">📚</div>
                    <div className="font-semibold mb-1">Documentation</div>
                    <div className="text-sm text-primary-100">เอกสารครบถ้วน</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
