import { FiHeart, FiGithub, FiTwitter, FiFacebook } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-xl font-bold text-gradient">React Template</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                โครงสร้าง React + Vite + Tailwind CSS ที่ทันสมัยและใช้งานง่าย 
                สำหรับการพัฒนาเว็บแอปพลิเคชันที่รวดเร็วและมีประสิทธิภาพ
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <FiFacebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">ลิงก์ด่วน</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                    หน้าแรก
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                    เกี่ยวกับเรา
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                    ติดต่อเรา
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
                    นโยบายความเป็นส่วนตัว
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">ทรัพยากร</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://reactjs.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    React Docs
                  </a>
                </li>
                <li>
                  <a 
                    href="https://vitejs.dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    Vite Docs
                  </a>
                </li>
                <li>
                  <a 
                    href="https://tailwindcss.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a 
                    href="https://typescript.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    TypeScript
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm">
              © {currentYear} React Template. สงวนลิขสิทธิ์ทุกประการ.
            </p>
            <p className="text-gray-600 text-sm flex items-center mt-2 md:mt-0">
              สร้างด้วย{' '}
              <FiHeart className="w-4 h-4 text-red-500 mx-1" />
              โดย Developer Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
