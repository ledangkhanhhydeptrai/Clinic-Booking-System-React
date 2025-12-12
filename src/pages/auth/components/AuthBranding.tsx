import { useNavigate } from "react-router-dom";

export default function AuthBranding() {
  const navigate = useNavigate();
  return (
    <div className="hidden lg:block space-y-8">
      {/* Logo and title */}
      <div className="animate-slide-in">
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30 heartbeat">
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
          <div onClick={() => navigate("/")}>
            <h2 className="text-3xl font-bold text-slate-800">
              HealthCare Plus
            </h2>
            <p className="text-teal-600 font-medium">
              Clinic Management System
            </p>
          </div>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
          Hệ thống quản lý phòng khám hiện đại, giúp bạn dễ dàng đặt lịch khám,
          quản lý hồ sơ bệnh án và theo dõi sức khỏe một cách toàn diện.
        </p>
      </div>

      {/* Feature cards */}
      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 animate-fade-in-up delay-100 float-gentle">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
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
                Thông tin bệnh nhân được mã hóa và bảo vệ theo tiêu chuẩn HIPAA
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 animate-fade-in-up delay-200 float-gentle">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
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

        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 animate-fade-in-up delay-300 float-gentle">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
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
                Quản lý hồ sơ bệnh án điện tử, xem kết quả xét nghiệm mọi lúc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
