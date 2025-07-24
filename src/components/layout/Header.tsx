import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiHome, FiUser, FiMail } from 'react-icons/fi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'หน้าแรก', icon: FiHome },
    { path: '/about', label: 'เกี่ยวกับ', icon: FiUser },
    { path: '/contact', label: 'ติดต่อ', icon: FiMail },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold text-gradient"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span>React Template</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="btn btn-outline btn-sm"
              onClick={() => {
                console.log('Login button clicked!')
                alert('ระบบเข้าสู่ระบบกำลังพัฒนา')
              }}
            >
              เข้าสู่ระบบ
            </button>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => {
                console.log('Register button clicked!')
                alert('ระบบสมัครสมาชิกกำลังพัฒนา')
              }}
            >
              สมัครสมาชิก
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                <button 
                  className="w-full btn btn-outline btn-md"
                  onClick={() => {
                    setIsMenuOpen(false)
                    console.log('Mobile login button clicked!')
                    alert('ระบบเข้าสู่ระบบกำลังพัฒนา')
                  }}
                >
                  เข้าสู่ระบบ
                </button>
                <button 
                  className="w-full btn btn-primary btn-md"
                  onClick={() => {
                    setIsMenuOpen(false)
                    console.log('Mobile register button clicked!')
                    alert('ระบบสมัครสมาชิกกำลังพัฒนา')
                  }}
                >
                  สมัครสมาชิก
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
