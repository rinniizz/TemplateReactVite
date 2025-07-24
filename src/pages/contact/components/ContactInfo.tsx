import { FiMail, FiPhone, FiMapPin, FiClock, FiMessageCircle } from 'react-icons/fi'

const ContactInfo = () => {
  return (
    <div className="container-custom animate-slide-in">
      <div className="card h-full">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📞 ข้อมูลการติดต่อ
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <FiMail className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">อีเมล</h3>
                <p className="text-gray-600">support@reacttemplate.com</p>
                <p className="text-gray-600">info@reacttemplate.com</p>
                <p className="text-sm text-gray-500 mt-1">ตอบกลับภายใน 24 ชั่วโมง</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <FiPhone className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">โทรศัพท์</h3>
                <p className="text-gray-600">+66 2 123 4567</p>
                <p className="text-gray-600">+66 8 1234 5678</p>
                <p className="text-sm text-gray-500 mt-1">จันทร์-ศุกร์ 9:00-18:00</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <FiMapPin className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ที่อยู่</h3>
                <p className="text-gray-600">
                  123 ถนนเทคโนโลยี<br />
                  แขวงนวัตกรรม เขตพัฒนา<br />
                  กรุงเทพมหานคร 10110
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FiClock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">เวลาทำการ</h3>
                <div className="text-gray-600 space-y-1">
                  <p>จันทร์ - ศุกร์: 9:00 - 18:00</p>
                  <p>เสาร์: 9:00 - 12:00</p>
                  <p>อาทิตย์: ปิด</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              💬 ช่องทางการติดต่ออื่นๆ
            </h3>
            
            <div className="space-y-3">
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
              >
                <FiMessageCircle className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="font-medium text-gray-900">Discord Community</div>
                  <div className="text-sm text-gray-600">สำหรับคำถามและการสนทนา</div>
                </div>
              </a>

              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-xl">📝</span>
                <div>
                  <div className="font-medium text-gray-900">GitHub Issues</div>
                  <div className="text-sm text-gray-600">สำหรับรายงานปัญหาหรือแนะนำฟีเจอร์</div>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-start space-x-3">
              <span className="text-yellow-600 text-xl">💡</span>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-1">เคล็ดลับ</h4>
                <p className="text-sm text-yellow-700">
                  ก่อนติดต่อเรา แนะนำให้ตรวจสอบ FAQ หรือเอกสารประกอบก่อน 
                  อาจจะมีคำตอบที่คุณต้องการอยู่แล้ว!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
