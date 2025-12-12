import React from "react";
import { Heart, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">
              HealthCare+
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-stone-700 hover:text-rose-600 transition-colors font-medium"
            >
              Trang chủ
            </a>
            <a
              href="#"
              className="text-stone-700 hover:text-rose-600 transition-colors font-medium"
            >
              Chuyên khoa
            </a>
            <a
              href="#"
              className="text-stone-700 hover:text-rose-600 transition-colors font-medium"
            >
              Bác sĩ
            </a>
            <a
              href="#"
              className="text-stone-700 hover:text-rose-600 transition-colors font-medium"
            >
              Về chúng tôi
            </a>
            <button onClick={()=>navigate("/auth")} className="px-5 py-2 text-stone-700 hover:text-rose-600 font-semibold transition-colors">
              Đăng nhập
            </button>
            <button className="px-6 py-2.5 bg-white text-rose-600 border-2 border-rose-600 rounded-full font-semibold hover:bg-rose-50 transition-all">
              Đăng ký
            </button>
            <button className="px-6 py-2.5 bg-linear-to-r from-rose-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
              Đặt lịch ngay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-stone-100"
          >
            {isMenuOpen
              ? <X className="w-6 h-6" />
              : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen &&
        <div className="md:hidden glass-effect border-t border-stone-200">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#"
              className="block text-stone-700 hover:text-rose-600 transition-colors font-medium"
            >
              Trang chủ
            </a>
            <a
              href="#"
              className="block text-stone-700 hover:text-rose-600 transition-colors font-medium"
            >
              Chuyên khoa
            </a>
            <a
              href="#"
              className="block text-stone-700 hover:text-rose-600 transition-colors font-medium"
            >
              Bác sĩ
            </a>
            <a
              href="#"
              className="block text-stone-700 hover:text-rose-600 transition-colors font-medium"
            >
              Về chúng tôi
            </a>
            <div className="pt-2 space-y-3">
              <button className="w-full px-6 py-2.5 text-stone-700 hover:text-rose-600 font-semibold border-2 border-stone-200 rounded-full transition-all">
                Đăng nhập
              </button>
              <button className="w-full px-6 py-2.5 bg-white text-rose-600 border-2 border-rose-600 rounded-full font-semibold hover:bg-rose-50 transition-all">
                Đăng ký
              </button>
              <button className="w-full px-6 py-2.5 bg-linear-to-r from-rose-500 to-orange-500 text-white rounded-full font-semibold">
                Đặt lịch ngay
              </button>
            </div>
          </div>
        </div>}
    </nav>
  );
};

export default Navbar;
