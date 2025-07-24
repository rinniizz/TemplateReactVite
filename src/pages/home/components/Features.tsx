import { FiCode, FiZap, FiShield, FiLayers, FiSmartphone, FiGlobe } from 'react-icons/fi'

const Features = () => {
  const features = [
    {
      icon: FiZap,
      title: 'เร็วแสง',
      description: 'Vite HMR ทำให้การพัฒนารวดเร็วและมีประสิทธิภาพ',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: FiCode,
      title: 'TypeScript Ready',
      description: 'Type safety และ IntelliSense ที่สมบูรณ์แบบ',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: FiLayers,
      title: 'Component-Based',
      description: 'โครงสร้าง components ที่เป็นระเบียบและใช้ซ้ำได้',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: FiSmartphone,
      title: 'Responsive Design',
      description: 'ใช้งานได้ดีบนทุกอุปกรณ์ จากมือถือถึงเดสก์ท็อป',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: FiShield,
      title: 'Best Practices',
      description: 'มาพร้อมกับ ESLint, Prettier และ best practices',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: FiGlobe,
      title: 'Modern Stack',
      description: 'เทคโนโลยีล่าสุดที่อุตสาหกรรมใช้กัน',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ทำไมต้องเลือก <span className="text-gradient">React Template</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              เราได้รวบรวมเครื่องมือและเทคโนโลยีที่ดีที่สุดมาให้คุณ 
              เพื่อให้คุณเริ่มต้นโปรเจกต์ได้ทันที
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div 
                  key={index}
                  className="card card-hover animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-body text-center">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Code Example */}
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                เริ่มต้นใช้งานง่ายๆ
              </h3>
              <p className="text-gray-600">
                เพียงไม่กี่คำสั่งก็สามารถเริ่มต้นได้เลย
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-left overflow-x-auto max-w-2xl mx-auto">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">Terminal</span>
              </div>
              <div className="text-green-400 font-mono text-sm">
                <div className="mb-2">
                  <span className="text-gray-400">$</span> git clone your-repo/react-template.git
                </div>
                <div className="mb-2">
                  <span className="text-gray-400">$</span> cd react-template
                </div>
                <div className="mb-2">
                  <span className="text-gray-400">$</span> npm install
                </div>
                <div>
                  <span className="text-gray-400">$</span> npm run dev
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
