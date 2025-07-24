const TeamSection = () => {
  const team = [
    {
      name: 'Frontend Developer',
      role: 'React Specialist',
      description: 'เชี่ยวชาญด้าน React, TypeScript และ Modern Frontend Development',
      avatar: '👨‍💻',
      skills: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      name: 'UI/UX Designer',
      role: 'Design Lead',
      description: 'รับผิดชอบการออกแบบ UI/UX และ Design System',
      avatar: '👩‍🎨',
      skills: ['Figma', 'Design Systems', 'User Experience']
    },
    {
      name: 'DevOps Engineer',
      role: 'Infrastructure',
      description: 'จัดการ CI/CD, Deployment และ Performance Optimization',
      avatar: '👨‍🔧',
      skills: ['Docker', 'CI/CD', 'Performance']
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              👥 ทีมพัฒนา
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ทีมนักพัฒนาที่มีประสบการณ์และหลงใหลในการสร้างเครื่องมือที่ดี
              เพื่อช่วยเหลือชุมชนนักพัฒนา
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <div 
                key={index}
                className="card card-hover animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-body text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-primary-600 font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Community Section */}
          <div className="card bg-gradient-to-r from-primary-600 to-accent-600 text-white animate-bounce-in">
            <div className="card-body p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                🌟 เข้าร่วมชุมชน
              </h3>
              <p className="text-xl text-primary-100 mb-6">
                เราเปิดกว้างสำหรับการมีส่วนร่วม ไม่ว่าจะเป็นการแจ้งปัญหา การแนะนำฟีเจอร์ 
                หรือการ contribute code
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn bg-white text-primary-600 hover:bg-gray-100 btn-md"
                >
                  📝 Contribute
                </a>
                <a 
                  href="https://discord.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 btn-md"
                >
                  💬 Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
