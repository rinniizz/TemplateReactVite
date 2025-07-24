const MissionSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🎯 พันธกิจของเรา
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                เราต้องการช่วยให้นักพัฒนาสามารถเริ่มต้นโปรเจกต์ React ได้อย่างรวดเร็ว
                ด้วยโครงสร้างที่ดี เครื่องมือที่ทันสมัย และ best practices ที่ถูกต้อง
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                เราเชื่อว่าการมีเทมเพลตที่ดีจะช่วยให้นักพัฒนาสามารถโฟกัสไปที่การสร้าง
                ฟีเจอร์ที่สำคัญได้ทันที แทนที่จะต้องมาเสียเวลาตั้งค่าพื้นฐาน
              </p>
            </div>

            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="card bg-gradient-to-br from-primary-50 to-accent-50">
                <div className="card-body">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    💡 วิสัยทัศน์
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      ให้ทุกคนเข้าถึงเครื่องมือการพัฒนาที่ดีที่สุด
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      ลดเวลาในการ setup โปรเจกต์ใหม่
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      ส่งเสริมการใช้ best practices
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      สร้างชุมชนนักพัฒนาที่แข็งแกร่ง
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
