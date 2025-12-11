import { Phone, Stethoscope, User } from "lucide-react";
import { useParams } from "react-router-dom";
import { useDoctor } from "../../../../features/doctor/useDoctors";

export default function DoctorPageById() {
  const { id } = useParams<{ id: string }>();

  // Simulate API call
  const { data: doctor, isLoading } = useDoctor(id);
  if (!id) return <div>Doctor ID không hợp lệ</div>;
  if (isLoading || !doctor) {
    return (
      <div className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-32 h-32 bg-teal-200 rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 p-4 sm:p-8 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@400;500;700&display=swap');
        
        body {
          font-family: 'DM Sans', sans-serif;
        }
        
        .doctor-name {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .card-enter {
          animation: cardEnter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .badge-float {
          animation: badgeFloat 3s ease-in-out infinite;
        }
        
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.1));
          border-radius: 24px;
          padding: 2px;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, #14b8a6, #06b6d4, #0ea5e9);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        
        .avatar-glow {
          box-shadow: 0 0 60px rgba(20, 184, 166, 0.4),
                      0 0 120px rgba(6, 182, 212, 0.2);
        }
        
        .info-card {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.85);
        }
        
        .icon-bounce:hover {
          animation: iconBounce 0.5s ease;
        }
        
        @keyframes iconBounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2) rotate(5deg); }
        }
        
        .shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          to {
            left: 100%;
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-sm font-medium text-teal-600 tracking-widest uppercase mb-2">
            Thông Tin Bác Sĩ
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Card */}
        <div className="gradient-border card-enter">
          <div className="info-card rounded-[22px] p-8 sm:p-12">
            {/* Avatar Section */}
            <div className="flex flex-col items-center mb-10">
              <div className="relative badge-float">
                <div className="w-40 h-40 rounded-full bg-linear-to-br from-teal-400 via-cyan-400 to-blue-400 p-1 avatar-glow">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <User
                      className="w-20 h-20 text-teal-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute -bottom-2 -right-2 bg-linear-to-r from-emerald-400 to-teal-400 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg shimmer">
                  AVAILABLE
                </div>
              </div>

              {/* Name */}
              <h2 className="doctor-name text-5xl sm:text-6xl font-bold text-gray-900 mt-8 mb-2 text-center">
                BS. {doctor.name}
              </h2>

              {/* ID Badge */}
              <div className="text-xs text-gray-400 font-mono bg-gray-100 px-3 py-1 rounded-full mt-2">
                ID: {doctor.id.slice(0, 8)}...
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {/* Specialty Card */}
              <div className="group bg-linear-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-teal-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500 rounded-xl p-3 icon-bounce">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mb-1">
                      Chuyên Khoa
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {doctor.specialty}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 rounded-xl p-3 icon-bounce">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">
                      Điện Thoại
                    </p>
                    <a
                      href={`tel:${doctor.phone}`}
                      className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {doctor.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button className="flex-1 bg-linear-to-r from-teal-500 to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                Đặt Lịch Khám
              </button>
              <button className="flex-1 bg-white text-teal-600 font-semibold py-4 px-8 rounded-xl border-2 border-teal-500 hover:bg-teal-50 transition-all duration-300 hover:scale-105 transform">
                Xem Thông Tin Chi Tiết
              </button>
            </div>

            {/* Footer Note */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500 italic">
                "Chăm sóc sức khỏe của bạn là ưu tiên hàng đầu của chúng tôi"
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
