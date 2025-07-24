import { Link } from 'react-router-dom'
import { FiHome, FiArrowLeft } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient">404</h1>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ไม่พบหน้าที่คุณต้องการ
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            ขออภัย หน้าที่คุณกำลังมองหาอาจถูกย้าย ลบ หรือไม่มีอยู่จริง
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="btn btn-primary btn-lg flex items-center space-x-2"
          >
            <FiHome className="w-5 h-5" />
            <span>กลับหน้าแรก</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="btn btn-outline btn-lg flex items-center space-x-2"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span>กลับหน้าก่อนหน้า</span>
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            ต้องการความช่วยเหลือ?
          </h3>
          <p className="text-gray-600 mb-4">
            หากคุณคิดว่านี่เป็นข้อผิดพลาด กรุณาติดต่อทีมสนับสนุนของเรา
          </p>
          <Link 
            to="/contact" 
            className="btn btn-secondary btn-md"
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
