import React from "react";
import { useDispatch } from "react-redux";
import { useLogin } from "../../features/auth/useAuth";
import { setToken } from "../../features/auth/authSlice";

const AuthPage: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const loginMutation = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate(
      { username, password },
      {
        onSuccess: (data) => dispatch(setToken(data.data.token))
      }
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          14% {
            transform: scale(1.1);
          }
          28% {
            transform: scale(1);
          }
          42% {
            transform: scale(1.1);
          }
          70% {
            transform: scale(1);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }
        
        .pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        
        .heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .medical-pattern {
          background-image: 
            radial-gradient(circle at 20px 20px, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-600 { animation-delay: 0.6s; opacity: 0; }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/40 flex items-center justify-center p-4 medical-pattern relative overflow-hidden">
        {/* Decorative organic shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl"></div>

        {/* Medical cross decorations */}
        <div className="absolute top-20 left-20 w-12 h-12 opacity-5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-12 bg-teal-600"></div>
            <div className="absolute w-12 h-2 bg-teal-600"></div>
          </div>
        </div>
        <div className="absolute bottom-20 right-20 w-16 h-16 opacity-5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-16 bg-cyan-600"></div>
            <div className="absolute w-16 h-2 bg-cyan-600"></div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Branding and info */}
          <div className="hidden lg:block space-y-8">
            {/* Logo and title */}
            <div className="animate-slide-in">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30 heartbeat">
                    <svg
                      className="w-9 h-9 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="absolute -inset-1 bg-teal-500/30 rounded-2xl pulse-ring"></div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-800">
                    HealthCare Plus
                  </h2>
                  <p className="text-teal-600 font-medium">
                    Clinic Management System
                  </p>
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Hệ thống quản lý phòng khám hiện đại, giúp bạn dễ dàng đặt lịch
                khám, quản lý hồ sơ bệnh án và theo dõi sức khỏe một cách toàn
                diện.
              </p>
            </div>

            {/* Feature cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 animate-fade-in-up delay-100 float-gentle">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      Bảo mật tuyệt đối
                    </h3>
                    <p className="text-sm text-slate-600">
                      Thông tin bệnh nhân được mã hóa và bảo vệ theo tiêu chuẩn
                      HIPAA
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 animate-fade-in-up delay-200 float-gentle"
                style={{ animationDelay: "0.2s, 0.5s" }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-cyan-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      Đặt lịch nhanh chóng
                    </h3>
                    <p className="text-sm text-slate-600">
                      Đặt lịch khám online 24/7, nhận xác nhận ngay lập tức
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 animate-fade-in-up delay-300 float-gentle"
                style={{ animationDelay: "0.3s, 1s" }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      Theo dõi sức khỏe
                    </h3>
                    <p className="text-sm text-slate-600">
                      Quản lý hồ sơ bệnh án điện tử, xem kết quả xét nghiệm mọi
                      lúc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            {/* Mobile logo */}
            <div className="lg:hidden mb-8 text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-bold text-slate-800">
                    HealthCare Plus
                  </h2>
                  <p className="text-xs text-teal-600 font-medium">
                    Clinic System
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/60 p-8 md:p-10 animate-fade-in-up delay-400">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">
                  Đăng nhập hệ thống
                </h1>
                <p className="text-slate-500">
                  Vui lòng nhập thông tin để tiếp tục
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Username */}
                <div className="animate-fade-in-up delay-500">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tên đăng nhập
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Nhập tên đăng nhập"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="animate-fade-in-up delay-600">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Mật khẩu
                    </label>
                    <a
                      href="#"
                      className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      Quên mật khẩu?
                    </a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Nhập mật khẩu"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center animate-fade-in-up delay-600">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-teal-600 border-slate-300 rounded focus:ring-teal-500 focus:ring-2"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-slate-600"
                  >
                    Ghi nhớ đăng nhập
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loginMutation.isPending}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2 animate-fade-in-up delay-600"
                >
                  {loginMutation.isPending ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Đang xử lý...</span>
                    </>
                  ) : (
                    <span>Đăng nhập</span>
                  )}
                </button>

                {/* Error message */}
                {loginMutation.error && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg animate-fade-in-up">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-red-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm font-medium text-red-800">
                        {loginMutation.error.message}
                      </p>
                    </div>
                  </div>
                )}
              </form>

              {/* Divider */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-center text-sm text-slate-600">
                  Bạn là bệnh nhân mới?{" "}
                  <a
                    href="#"
                    className="font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    Đăng ký tài khoản
                  </a>
                </p>
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>SSL Encrypted</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>HIPAA Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
