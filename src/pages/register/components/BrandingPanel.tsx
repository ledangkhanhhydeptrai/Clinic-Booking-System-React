export default function BrandingPanel() {
  const features = [
    { icon: "📅", text: "Đặt lịch hẹn trực tuyến 24/7" },
    { icon: "👨‍⚕️", text: "Kết nối với bác sĩ chuyên khoa" },
    { icon: "📱", text: "Quản lý hồ sơ sức khỏe điện tử" }
  ];

  return (
    <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-teal-600 via-cyan-600 to-blue-600 p-12 flex-col justify-between relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-16">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
            <svg
              className="w-7 h-7 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              MediCare
            </h1>
            <p className="text-cyan-100 text-sm">Booking System</p>
          </div>
        </div>

        {/* Welcome message */}
        <div className="mb-12">
          <h2 className="text-white text-4xl font-bold mb-4 leading-tight">
            Chăm sóc sức khỏe
            <br />
            của bạn, mọi lúc
            <br />
            mọi nơi
          </h2>
          <p className="text-cyan-50 text-lg leading-relaxed">
            Đặt lịch khám nhanh chóng, theo dõi sức khỏe dễ dàng với hệ thống
            quản lý phòng khám hiện đại.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-white">
              <span className="text-2xl">{feature.icon}</span>
              <span className="text-cyan-50">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="relative z-10 text-cyan-100 text-sm">
        © 2024 MediCare. Tất cả quyền được bảo lưu.
      </div>

      {/* Decorative circle */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
}
