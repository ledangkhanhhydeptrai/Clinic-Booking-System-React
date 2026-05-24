import React from "react";
import {
  Heart,
  Search,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  CalendarPlus,
  Stethoscope,
  Users,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import Button from "../common/Button";
import { logout } from "../../features/auth/authSlice";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const navItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Hướng dẫn", path: "/guide" },
    { name: "Dịch vụ", path: "/services" },
    { name: "Liên hệ", path: "/contact" }
  ];

  // Stats hiển thị trong mobile menu
  const quickStats = [
    { icon: Users, label: "120+ bác sĩ" },
    { icon: CalendarPlus, label: "Đặt lịch nhanh" },
    { icon: Clock, label: "Chờ ≤ 15 phút" },
    { icon: ShieldCheck, label: "Uy tín & An toàn" }
  ];

  return (
    <>
      {/* MAIN HEADER */}
      <header
        className={`fixed top-px left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_14px_rgba(0,0,0,0.06)] border-b border-stone-200/60"
            : "bg-white border-b border-stone-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="h-[66px] flex items-center justify-between gap-4">
            {/* LOGO */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2.5 cursor-pointer group shrink-0"
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-[9px] bg-rose-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <Heart
                    className="w-[17px] h-[17px] text-white"
                    fill="white"
                  />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-white" />
              </div>
              <div>
                <h1 className="text-[16.5px] font-semibold text-stone-900 tracking-tight leading-none">
                  HealthCare+
                </h1>
                <p className="text-[10.5px] text-stone-400 uppercase tracking-wider mt-0.5">
                  Clinic Booking
                </p>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-0 flex-1 justify-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className="relative px-3.5 py-1.5 text-[13.5px] font-normal text-stone-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-all duration-150"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              {/* 24/7 pill */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-700 font-medium whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Hỗ trợ 24/7
              </div>

              {/* SEARCH */}
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Tìm dịch vụ..."
                  className="w-44 pl-[30px] pr-3 py-[7px] text-[13px] bg-stone-50 border border-stone-200 rounded-[9px] text-stone-700 placeholder:text-stone-400 focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 focus:w-52 transition-all duration-200"
                />
              </div>

              {/* BOOKING CTA — dùng CalendarPlus */}
              <button
                onClick={() => navigate("/user/schedule")}
                className="flex items-center gap-1.5 px-4 py-[7.5px] bg-rose-700 hover:bg-rose-800 hover:-translate-y-px active:translate-y-0 text-white rounded-[9px] text-[13px] font-medium transition-all duration-150 whitespace-nowrap"
              >
                <CalendarPlus className="w-3.5 h-3.5" />
                Đặt lịch
              </button>

              <div className="w-px h-[18px] bg-stone-200 mx-1" />

              {/* USER */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center gap-1.5 pl-[5px] pr-2.5 py-[5px] border border-stone-200 rounded-full bg-stone-50 hover:border-stone-300 hover:bg-white transition-all"
                  >
                    <div className="w-[27px] h-[27px] rounded-full bg-rose-100 flex items-center justify-center">
                      <span className="text-[11.5px] font-semibold text-rose-700">
                        {user.username?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-[13px] font-medium text-stone-700">
                      {user.username}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${
                        isUserDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-lg shadow-stone-100/80 border border-stone-100 overflow-hidden py-1">
                      <div className="px-4 py-2.5 border-b border-stone-50">
                        <p className="text-[13px] font-medium text-stone-800">
                          {user.username}
                        </p>
                        <p className="text-[11.5px] text-stone-400 mt-0.5">
                          Thành viên
                        </p>
                      </div>
                      <button
                        onClick={() => navigate("/user/profile")}
                        className="w-full text-left px-4 py-2.5 text-[13px] text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                      >
                        Hồ sơ cá nhân
                      </button>
                      <button
                        onClick={() => navigate("/user/appointments")}
                        className="w-full text-left px-4 py-2.5 text-[13px] text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                      >
                        Lịch hẹn của tôi
                      </button>
                      <div className="my-1 border-t border-stone-100" />
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2.5 text-[13px] text-rose-600 hover:bg-rose-50 transition-colors"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button
                    isLoading={false}
                    onClick={() => navigate("/auth")}
                    className="px-3 py-[7px] text-[13px] font-medium text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-all"
                  >
                    Đăng nhập
                  </Button>
                  <button
                    onClick={() => navigate("/auth/register")}
                    className="px-3.5 py-[7px] text-[13px] font-medium text-rose-700 border border-rose-200 hover:bg-rose-700 hover:text-white hover:border-rose-700 rounded-[9px] transition-all duration-150 whitespace-nowrap"
                  >
                    Đăng ký
                  </button>
                </div>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-stone-600" />
              ) : (
                <Menu className="w-5 h-5 text-stone-600" />
              )}
            </button>
          </div>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className="lg:hidden pb-5 pt-3 border-t border-stone-100">
              <div className="relative mb-3">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Tìm dịch vụ..."
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-400"
                />
              </div>

              <div className="space-y-0.5">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      navigate(item.path);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2.5 rounded-lg hover:bg-rose-50 text-sm text-stone-600 hover:text-rose-700 transition-all"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* QUICK STATS — dùng Users, CalendarPlus, Clock, ShieldCheck */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {quickStats.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-2 bg-stone-50 border border-stone-100 rounded-xl"
                  >
                    <Icon className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span className="text-[12px] text-stone-500">{label}</span>
                  </div>
                ))}
              </div>

              {/* BOOKING CTA — dùng CalendarPlus */}
              <button
                onClick={() => {
                  navigate("/user/schedule");
                  setIsMenuOpen(false);
                }}
                className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 bg-rose-700 text-white text-sm font-medium rounded-xl hover:bg-rose-800 transition-colors"
              >
                <CalendarPlus className="w-4 h-4" />
                Đặt lịch ngay
              </button>

              {/* CONSULT SHORTCUT — dùng Stethoscope */}
              <button
                onClick={() => {
                  navigate("/services");
                  setIsMenuOpen(false);
                }}
                className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 border border-stone-200 text-stone-600 text-sm font-medium rounded-xl hover:bg-stone-50 transition-colors"
              >
                <Stethoscope className="w-4 h-4" />
                Xem dịch vụ khám
              </button>

              <div className="mt-4 pt-4 border-t border-stone-100">
                {user ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => navigate("/user/profile")}
                      className="w-full px-4 py-2.5 border border-stone-200 text-stone-700 text-sm rounded-xl hover:bg-stone-50 transition-colors"
                    >
                      Hồ sơ cá nhân
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2.5 border border-rose-200 text-rose-600 text-sm rounded-xl hover:bg-rose-50 transition-colors"
                    >
                      Đăng xuất
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <button
                      onClick={() => navigate("/auth")}
                      className="w-full px-4 py-2.5 border border-stone-200 text-stone-700 text-sm rounded-xl hover:bg-stone-50 transition-colors"
                    >
                      Đăng nhập
                    </button>
                    <button
                      onClick={() => navigate("/auth/register")}
                      className="w-full px-4 py-2.5 bg-rose-700 text-white text-sm rounded-xl hover:bg-rose-800 transition-colors"
                    >
                      Đăng ký
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* SPACER — bù cho announcement bar (37px) + header (66px) */}
      <div className="h-[103px]" />
    </>
  );
};

export default Header;
