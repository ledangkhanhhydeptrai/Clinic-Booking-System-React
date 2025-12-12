import React from "react";
import { Heart, Search, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dropdown-enter {
          animation: slideDown 0.2s ease-out;
        }
        
        .search-glow {
          box-shadow: 0 0 0 4px rgba(244, 63, 94, 0.08);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-stone-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <div className="flex items-center space-x-2.5 shrink-0">
              <div className="w-9 h-9 bg-linear-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-linear-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent leading-none">
                  HealthCare+
                </span>
                <span className="text-[9px] text-stone-500 tracking-wide leading-none mt-0.5">
                  Your Health Partner
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-0.5 flex-1 justify-center mx-8">
              {[
                { name: "Trang chủ", href: "#" },
                { name: "Đặt lịch", href: "#" },
                { name: "Bác sĩ", href: "#" },
                { name: "Chuyên khoa", href: "#" },
                { name: "Liên hệ", href: "#" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3.5 py-2 text-[15px] text-stone-700 hover:text-rose-600 font-medium transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-linear-to-r from-rose-600 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full"></span>
                </a>
              ))}
            </nav>

            {/* Right Side - Search, Login, Register */}
            <div className="hidden lg:flex items-center space-x-2.5">
              {/* Search Bar */}
              <div
                className={`relative transition-all duration-300 ${
                  isSearchFocused ? "w-72" : "w-60"
                }`}
              >
                <Search
                  className={`absolute left-3.5 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] transition-colors ${
                    isSearchFocused ? "text-rose-500" : "text-stone-400"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Tìm bác sĩ, chuyên khoa..."
                  className={`w-full pl-10 pr-3.5 py-2 text-[14px] border rounded-lg focus:outline-none transition-all duration-300 ${
                    isSearchFocused
                      ? "border-rose-500 search-glow bg-white"
                      : "border-stone-300 bg-white"
                  }`}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>

              {/* Login Button */}
              <button
                onClick={() => navigate("/auth")}
                className="px-4 py-2 text-[14px] text-stone-700 hover:text-rose-600 font-semibold transition-colors duration-200 whitespace-nowrap"
              >
                Đăng nhập
              </button>

              {/* Register Button */}
              <button className="px-5 py-2 text-[14px] bg-white text-rose-600 border-2 border-rose-600 rounded-lg font-semibold hover:bg-rose-50 transition-all duration-200 whitespace-nowrap">
                Đăng ký
              </button>

              {/* Book Appointment Button (Primary CTA) */}
              <button className="px-5 py-2 text-[14px] bg-linear-to-r from-rose-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-md transition-all duration-200 whitespace-nowrap">
                Đặt lịch ngay
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-stone-200 bg-white dropdown-enter">
              {/* Mobile Search */}
              <div className="mb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Tìm bác sĩ, chuyên khoa..."
                    className="w-full pl-10 pr-4 py-2.5 text-[14px] border border-stone-300 rounded-lg focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-100 bg-white"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-1 mb-3">
                {[
                  "Trang chủ",
                  "Đặt lịch khám",
                  "Bác sĩ",
                  "Chuyên khoa",
                  "Liên hệ"
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2.5 text-[15px] text-stone-700 hover:bg-rose-50 hover:text-rose-600 rounded-lg font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Mobile Auth Buttons */}
              <div className="space-y-2 pt-3 border-t border-stone-200">
                <button className="w-full px-4 py-2.5 text-[14px] text-stone-700 hover:text-rose-600 font-semibold border border-stone-300 rounded-lg hover:border-rose-300 hover:bg-rose-50 transition-all">
                  Đăng nhập
                </button>
                <button className="w-full px-4 py-2.5 text-[14px] bg-white text-rose-600 border-2 border-rose-600 rounded-lg font-semibold hover:bg-rose-50 transition-all">
                  Đăng ký
                </button>
                <button className="w-full px-4 py-2.5 text-[14px] bg-linear-to-r from-rose-500 to-orange-500 text-white rounded-lg font-semibold transition-all">
                  Đặt lịch ngay
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[72px]"></div>
    </>
  );
};

export default Header;
