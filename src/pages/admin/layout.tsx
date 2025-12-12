import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut,
  User,
  Heart,
  Activity,
  Stethoscope,
  Pill,
  BarChart3,
  MessageSquare,
  HelpCircle
} from "lucide-react";
import Button from "../../components/common/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("doctors");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuItems = [
    {
      id: "dashboard",
      label: "Tổng quan",
      icon: LayoutDashboard,
      badge: null,
      path: "/admin/dashboard"
    },
    {
      id: "doctors",
      label: "Bác sĩ",
      icon: Stethoscope,
      badge: null,
      path: "/admin/doctor"
    },
    {
      id: "patients",
      label: "Bệnh nhân",
      icon: Users,
      badge: null,
      path: "/admin/user"
    },
    {
      id: "appointments",
      label: "Lịch hẹn",
      icon: Calendar,
      badge: null,
      path: "/admin/dashboard"
    },
    {
      id: "records",
      label: "Hồ sơ",
      icon: FileText,
      badge: null,
      path: "/admin/dashboard"
    },
    {
      id: "prescriptions",
      label: "Đơn thuốc",
      icon: Pill,
      badge: null,
      path: "/admin/dashboard"
    },
    {
      id: "lab-results",
      label: "Kết quả XN",
      icon: Activity,
      badge: null,
      path: "/admin/dashboard"
    },
    {
      id: "reports",
      label: "Báo cáo",
      icon: BarChart3,
      badge: null,
      path: "/admin/dashboard"
    }
  ];

  const bottomMenuItems = [
    {
      id: "messages",
      label: "Tin nhắn",
      icon: MessageSquare,
      badge: null
    },
    {
      id: "help",
      label: "Trợ giúp",
      icon: HelpCircle,
      badge: null
    },
    {
      id: "settings",
      label: "Cài đặt",
      icon: Settings,
      badge: null
    }
  ];
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/20 to-slate-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Archivo:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Archivo', sans-serif;
        }
        
        .font-display {
          font-family: 'Outfit', sans-serif;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-slide-top {
          animation: slideInTop 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-fade {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-pulse-subtle {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.9);
        }
        
        .menu-item {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 0;
          background: linear-gradient(180deg, #3b82f6, #2563eb);
          border-radius: 0 4px 4px 0;
          transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-item.active::before {
          height: 60%;
        }
        
        .menu-item:hover {
          transform: translateX(4px);
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2px;
          border-radius: 16px;
        }
        
        .gradient-border-inner {
          background: white;
          border-radius: 14px;
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .notification-dot {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ${
          sidebarOpen ? "w-72" : "w-20"
        } ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="h-full glass-morphism shadow-2xl flex flex-col animate-slide-left">
          {/* Logo Section */}
          <div className="p-6 border-b border-slate-200/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Heart className="text-white" size={24} />
              </div>
              {sidebarOpen && (
                <div className="animate-fade">
                  <h1 className="text-xl font-display font-bold text-slate-900">
                    MedCare
                  </h1>
                  <p className="text-xs text-slate-500">Hospital System</p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto custom-scrollbar py-6 px-3">
            <div className="space-y-1">
              {menuItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    onClick={() => {
                      setActiveMenu(item.id);
                      navigate(item.path);
                    }}
                    className={`menu-item w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                      activeMenu === item.id
                        ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                    isLoading={false}
                  >
                    <Icon
                      size={20}
                      className={`shrink-0 ${
                        activeMenu === item.id
                          ? "text-white"
                          : "text-slate-400 group-hover:text-blue-600"
                      }`}
                    />
                    {sidebarOpen && (
                      <span className="flex-1 text-left font-medium animate-fade">
                        {item.label}
                      </span>
                    )}
                    {sidebarOpen && item.badge && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold animate-fade ${
                          activeMenu === item.id
                            ? "bg-white/20 text-white"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent" />

            {/* Bottom Menu Items */}
            <div className="space-y-1">
              {bottomMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    isLoading={false}
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`menu-item w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                      activeMenu === item.id
                        ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`shrink-0 ${
                        activeMenu === item.id
                          ? "text-white"
                          : "text-slate-400 group-hover:text-blue-600"
                      }`}
                    />
                    {sidebarOpen && (
                      <span className="flex-1 text-left font-medium animate-fade">
                        {item.label}
                      </span>
                    )}
                    {sidebarOpen && item.badge && (
                      <span className="notification-dot px-2 py-0.5 bg-red-500 text-white rounded-full text-xs font-semibold animate-fade">
                        {item.badge}
                      </span>
                    )}
                  </Button>
                );
              })}
            </div>
          </nav>

          {/* User Profile Section */}
          <div className="p-4 border-t border-slate-200/50">
            <div
              className={`flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-all duration-300 cursor-pointer ${
                sidebarOpen ? "" : "justify-center"
              }`}
            >
              <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                BS
              </div>
              {sidebarOpen && (
                <div className="flex-1 animate-fade">
                  <p className="text-sm font-semibold text-slate-900">
                    Bác sĩ Nguyễn Văn A
                  </p>
                  <p className="text-xs text-slate-500">Tim mạch</p>
                </div>
              )}
              {sidebarOpen && (
                <ChevronDown
                  size={16}
                  className="text-slate-400 animate-fade"
                />
              )}
            </div>
          </div>

          {/* Toggle Sidebar Button */}
          <Button
            isLoading={false}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute -right-3 top-24 w-6 h-6 bg-white rounded-full shadow-lg border border-slate-200 items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hidden lg:flex"
          >
            {sidebarOpen ? (
              <ChevronDown size={14} className="rotate-90" />
            ) : (
              <ChevronDown size={14} className="-rotate-90" />
            )}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "lg:ml-72" : "lg:ml-20"
        }`}
      >
        {/* Header */}
        <header className="glass-morphism border-b border-slate-200/50 sticky top-0 z-30 animate-slide-top">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Left Section */}
              <div className="flex items-center gap-4">
                <Button
                  isLoading={false}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  {mobileMenuOpen ? (
                    <X size={24} className="text-slate-600" />
                  ) : (
                    <Menu size={24} className="text-slate-600" />
                  )}
                </Button>

                {/* Search Bar */}
                <div className="relative hidden md:block">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Tìm kiếm bệnh nhân, bác sĩ..."
                    className="pl-12 pr-4 py-2.5 w-96 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-3">
                {/* Quick Stats */}

                {/* Notifications */}
                <Button
                  isLoading={false}
                  className="relative p-2.5 hover:bg-slate-100 rounded-xl transition-all duration-300 group"
                >
                  <Bell
                    size={20}
                    className="text-slate-600 group-hover:text-blue-600"
                  />
                  <span className="notification-dot absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
                </Button>

                {/* User Menu */}
                <div className="relative">
                  <Button
                    isLoading={false}
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-slate-100 rounded-xl transition-all duration-300"
                  >
                    <div className="w-9 h-9 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      BS
                    </div>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform duration-300 hidden md:block ${
                        userMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>

                  {/* User Dropdown */}
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 glass-morphism rounded-xl shadow-2xl border border-slate-200 py-2 animate-fade z-auto">
                      <div className="px-4 py-3 border-b border-slate-200/50">
                        <p className="text-sm font-semibold text-slate-900">
                          Bác sĩ Nguyễn Văn A
                        </p>
                        <p className="text-xs text-slate-500">
                          bs.nguyenvana@hospital.vn
                        </p>
                      </div>
                      <Button
                        isLoading={false}
                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-100 transition-colors text-left"
                      >
                        <User size={16} className="text-slate-500" />
                        <span className="text-sm text-slate-700">
                          Hồ sơ cá nhân
                        </span>
                      </Button>
                      <Button
                        isLoading={false}
                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-100 transition-colors text-left"
                      >
                        <Settings size={16} className="text-slate-500" />
                        <span className="text-sm text-slate-700">Cài đặt</span>
                      </Button>
                      <div className="h-px bg-slate-200 my-2" />
                      <Button
                        isLoading={false}
                        onClick={() => {
                          dispatch(logout());
                          navigate("/");
                          window.location.reload();
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition-colors text-left text-red-600"
                      >
                        <LogOut size={16} />
                        <span className="text-sm font-medium">Đăng xuất</span>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main>
          <Outlet />
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden animate-fade"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
