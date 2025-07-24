const MapSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📍 ที่ตั้งของเรา
            </h2>
            <p className="text-xl text-gray-600">
              สำนักงานหลักของเราตั้งอยู่ในใจกลางย่านเทคโนโลยี
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="card">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-gray-500">
                      แผนที่แบบโต้ตอบจะแสดงที่นี่
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      (Google Maps หรือ OpenStreetMap)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    🏢 ข้อมูลสำนักงาน
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">ที่อยู่</h4>
                      <p className="text-gray-600 text-sm">
                        123 ถนนเทคโนโลยี<br />
                        แขวงนวัตกรรม เขตพัฒนา<br />
                        กรุงเทพมหานคร 10110
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">การเดินทาง</h4>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>🚇 BTS: สถานีนวัตกรรม (ทางออก 3)</p>
                        <p>🚌 รถประจำทาง: สาย 25, 40, 185</p>
                        <p>🚗 รถยนต์: มีที่จอดรถ 50 คัน</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">สิ่งอำนวยความสะดวก</h4>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>☕ ร้านกาแฟในอาคาร</p>
                        <p>🏪 ร้านสะดวกซื้อ</p>
                        <p>🍽️ โรงอาหาร</p>
                        <p>🏧 ตู้ ATM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-green-50 border border-green-200">
                <div className="card-body">
                  <h3 className="text-lg font-bold text-green-800 mb-3">
                    🕐 เวลาที่สะดวกในการติดต่อ
                  </h3>
                  
                  <div className="space-y-2 text-sm text-green-700">
                    <div className="flex justify-between">
                      <span>จันทร์ - ศุกร์</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>เสาร์</span>
                      <span>9:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>อาทิตย์</span>
                      <span>ปิด</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-100 rounded border border-green-200">
                    <p className="text-sm text-green-700">
                      💡 <strong>เคล็ดลับ:</strong> แนะนำให้นัดหมายล่วงหน้า
                      เพื่อให้เราได้เตรียมความพร้อมในการให้คำปรึกษา
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    📱 ดาวน์โหลดแผนที่
                  </h3>
                  
                  <div className="space-y-2">
                    <button className="w-full btn btn-outline btn-sm">
                      📥 ดาวน์โหลด PDF แผนที่
                    </button>
                    <button className="w-full btn btn-outline btn-sm">
                      📍 เปิดใน Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Landmarks */}
          <div className="mt-12 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🏛️ สถานที่ใกล้เคียง
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">🏬</div>
                <div className="font-medium text-gray-900">ห้างสรรพสินค้า</div>
                <div className="text-sm text-gray-600">200 เมตร</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">🏥</div>
                <div className="font-medium text-gray-900">โรงพยาบาล</div>
                <div className="text-sm text-gray-600">500 เมตร</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">🏦</div>
                <div className="font-medium text-gray-900">ธนาคาร</div>
                <div className="text-sm text-gray-600">100 เมตร</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">🍜</div>
                <div className="font-medium text-gray-900">ร้านอาหาร</div>
                <div className="text-sm text-gray-600">50 เมตร</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
