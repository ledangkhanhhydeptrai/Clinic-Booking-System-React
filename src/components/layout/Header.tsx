import React from "react";
import {
  Heart,
  Search,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Calendar
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import Button from "../common/Button";
import { logout } from "../../features/auth/authSlice";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [isSearchFocused, setIsSearchFocused] = React.useState<boolean>(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] =
    React.useState<boolean>(false);
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(244, 63, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(244, 63, 94, 0.5);
          }
        }
        
        .dropdown-enter {
          animation: slideDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .search-active {
          box-shadow: 0 8px 24px rgba(244, 63, 94, 0.15), 0 0 0 4px rgba(244, 63, 94, 0.08);
        }
        
        .glass-header {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }
        
        .glass-header-scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(24px) saturate(200%);
          -webkit-backdrop-filter: blur(24px) saturate(200%);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
        }
        
        .brand-text {
          font-family: 'Sora', sans-serif;
          font-weight: 800;
          background: linear-gradient(135deg, #f43f5e 0%, #fb923c 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
        }
        
        .logo-icon {
          background: linear-gradient(135deg, #f43f5e 0%, #fb923c 100%);
          box-shadow: 0 8px 16px rgba(244, 63, 94, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        
        .logo-icon:hover {
          animation: float 2s ease-in-out infinite;
        }
        
        .nav-link {
          position: relative;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 80%;
          height: 3px;
          background: linear-gradient(90deg, #f43f5e, #fb923c);
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .nav-link:hover::before {
          transform: translateX(-50%) scaleX(1);
        }
        
        .search-input {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .search-input:focus {
          transform: scale(1.02);
        }
        
        .cta-button {
          background: linear-gradient(135deg, #f43f5e 0%, #fb923c 100%);
          box-shadow: 0 4px 16px rgba(244, 63, 94, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }
        
        .cta-button:hover {
          box-shadow: 0 8px 24px rgba(244, 63, 94, 0.4);
          transform: translateY(-2px);
        }
        
        .btn-secondary {
          background: white;
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
        }
        
        .btn-secondary::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #f43f5e, #fb923c);
          border-radius: 10px;
          z-index: -1;
        }
        
        .btn-secondary:hover {
          background: linear-gradient(135deg, rgba(244, 63, 94, 0.05), rgba(251, 146, 60, 0.05));
        }
        
        .user-dropdown {
          background: white;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05);
          border-radius: 16px;
        }
        
        .mobile-menu {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .sparkle-icon {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-header-scrolled" : "glass-header"
        } border-b ${scrolled ? "border-stone-200/60" : "border-stone-200/40"}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Enhanced with gradient and shadow */}
            <div className="flex items-center space-x-3 shrink-0 cursor-pointer group">
              <div className="logo-icon w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div className="flex flex-col">
                <span className="brand-text text-2xl leading-none">
                  HealthCare+
                </span>
                <span className="text-[10px] text-stone-500 tracking-wider font-medium leading-none mt-1">
                  Chăm sóc sức khỏe toàn diện
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Improved typography and spacing */}
            <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center mx-12">
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
                  className="nav-link px-4 py-3 text-[15px] text-stone-700 hover:text-rose-600 transition-all duration-300 whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right Side - Enhanced with better shadows and effects */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Enhanced Search Bar */}
              <div
                className={`relative transition-all duration-500 ${
                  isSearchFocused ? "w-80" : "w-64"
                }`}
              >
                <Search
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-300 ${
                    isSearchFocused
                      ? "text-rose-500 scale-110"
                      : "text-stone-400"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Tìm bác sĩ, chuyên khoa, dịch vụ..."
                  className={`search-input w-full pl-12 pr-4 py-3 text-[15px] border-2 rounded-xl focus:outline-none ${
                    isSearchFocused
                      ? "border-rose-400 search-active bg-white"
                      : "border-stone-200 bg-white/80 hover:bg-white hover:border-stone-300"
                  }`}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>

              {/* User Section or Auth Buttons */}
              {user ? (
                <div className="relative">
                  <Button
                    isLoading={false}
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center space-x-2 px-4 py-2.5 text-[15px] font-semibold text-stone-700 border-2 border-stone-200 rounded-xl hover:border-rose-300 hover:bg-rose-50/50 transition-all duration-300 max-w-[200px]"
                  >
                    <span className="truncate">Xin chào, {user.username}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                        isUserDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>

                  {/* Enhanced Dropdown */}
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-48 user-dropdown dropdown-enter overflow-hidden">
                      <Button
                        isLoading={false}
                        onClick={() => navigate("/profile")}
                        className="w-full text-left px-5 py-3 text-[15px] font-medium text-stone-700 hover:bg-linear-to-r hover:from-rose-50 hover:to-orange-50 transition-all duration-200"
                      >
                        Hồ sơ cá nhân
                      </Button>
                      <div className="border-t border-stone-100"></div>
                      <Button
                        onClick={handleLogout}
                        isLoading={false}
                        className="w-full text-left px-5 py-3 text-[15px] font-medium text-rose-600 hover:bg-rose-50 transition-all duration-200"
                      >
                        Đăng xuất
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Button
                    onClick={() => navigate("/auth")}
                    isLoading={false}
                    className="px-5 py-2.5 text-[15px] text-stone-700 hover:text-rose-600 font-semibold transition-all duration-300 whitespace-nowrap hover:bg-stone-50 rounded-xl"
                  >
                    Đăng nhập
                  </Button>
                  <button
                    onClick={() => navigate("/auth/register")}
                    className="btn-secondary px-5 py-2.5 text-[15px] text-rose-600 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap"
                  >
                    Đăng ký
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <Button
              isLoading={false}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 text-stone-600 hover:bg-linear-to-br hover:from-rose-50 hover:to-orange-50 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-stone-200/60 mobile-menu dropdown-enter">
              {/* Mobile Search - Enhanced */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Tìm bác sĩ, chuyên khoa..."
                    className="w-full pl-12 pr-4 py-3.5 text-[15px] border-2 border-stone-200 rounded-xl focus:border-rose-400 focus:outline-none focus:shadow-lg focus:shadow-rose-100 bg-white transition-all duration-300"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links - Enhanced */}
              <nav className="space-y-1.5 mb-4">
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
                    className="block px-4 py-3.5 text-[15px] text-stone-700 hover:bg-linear-to-r hover:from-rose-50 hover:to-orange-50 hover:text-rose-600 rounded-xl font-semibold transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Mobile Auth Buttons - Enhanced */}
              {user ? (
                <div className="space-y-2.5 pt-4 border-t border-stone-200/60">
                  <Button
                    onClick={() => navigate("/profile")}
                    isLoading={false}
                    className="w-full px-5 py-3.5 text-[15px] text-stone-700 font-semibold border-2 border-stone-200 rounded-xl hover:border-rose-300 hover:bg-rose-50/50 transition-all duration-300"
                  >
                    Hồ sơ cá nhân
                  </Button>
                  <button
                    onClick={handleLogout}
                    className="w-full px-5 py-3.5 text-[15px] text-rose-600 font-semibold border-2 border-rose-200 rounded-xl hover:bg-rose-50 transition-all duration-300"
                  >
                    Đăng xuất
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5 pt-4 border-t border-stone-200/60">
                  <Button
                    isLoading={false}
                    onClick={() => navigate("/auth")}
                    className="w-full px-5 py-3.5 text-[15px] text-stone-700 font-semibold border-2 border-stone-200 rounded-xl hover:border-rose-300 hover:bg-rose-50/50 transition-all duration-300"
                  >
                    Đăng nhập
                  </Button>
                  <Button
                    isLoading={false}
                    onClick={() => navigate("/auth/register")}
                    className="w-full px-5 py-3.5 text-[15px] text-rose-600 font-bold border-2 border-rose-400 rounded-xl hover:bg-rose-50 transition-all duration-300"
                  >
                    Đăng ký
                  </Button>
                  <button className="cta-button w-full flex items-center justify-center space-x-2 px-5 py-3.5 text-[15px] text-white rounded-xl font-bold transition-all duration-300">
                    <Calendar className="w-5 h-5" />
                    <span>Đặt lịch ngay</span>
                    <Sparkles className="sparkle-icon w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
