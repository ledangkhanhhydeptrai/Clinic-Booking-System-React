import React from "react";
import {
  Calendar,
  Shield,
  Clock,
  Heart,
  Star,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  Award
} from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-stone-50 via-white to-rose-50/40 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Fraunces:wght@700;800;900&display=swap');
        
        * {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        .hero-title {
          font-family: 'Fraunces', serif;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }
        
        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-2deg);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(244, 63, 94, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(244, 63, 94, 0.6);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes rotate360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: floatReverse 7s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-rotate {
          animation: rotate360 20s linear infinite;
        }
        
        .badge-pill {
          background: linear-gradient(135deg, #f43f5e 0%, #fb923c 100%);
          box-shadow: 0 4px 16px rgba(244, 63, 94, 0.3);
        }
        
        .cta-button {
          background: linear-gradient(135deg, #f43f5e 0%, #fb923c 100%);
          box-shadow: 0 8px 24px rgba(244, 63, 94, 0.35);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .cta-button:hover {
          box-shadow: 0 12px 32px rgba(244, 63, 94, 0.45);
          transform: translateY(-3px);
        }
        
        .floating-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        
        .doctor-circle {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          box-shadow: 0 20px 60px rgba(251, 146, 60, 0.3);
        }
        
        .gradient-ring {
          background: conic-gradient(from 0deg, #f43f5e, #fb923c, #fbbf24, #34d399, #3b82f6, #f43f5e);
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.9);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-slideInLeft">
            {/* Badge */}
            <div className="inline-block">
              <div className="badge-pill inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-white text-sm font-bold animate-scaleIn">
                <Sparkles className="w-4 h-4" />
                <span>Đặt lịch nhanh chóng & Tiện lợi</span>
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-black text-stone-900 leading-[1.1] mb-6">
                Chăm sóc sức khỏe
                <br />
                <span className="bg-linear-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Chỉ với 1 Click
                </span>
              </h1>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-xl">
                Đặt lịch khám bệnh với các bác sĩ hàng đầu một cách nhanh chóng
                và dễ dàng. Chúng tôi kết nối bạn với đội ngũ y tế chất lượng
                cao.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="cta-button flex items-center space-x-2 px-8 py-4 rounded-xl text-white font-bold text-lg">
                <Calendar className="w-5 h-5" />
                <span>Đặt lịch ngay</span>
              </button>
              <button className="glass-morphism px-8 py-4 rounded-xl font-bold text-stone-700 hover:bg-white transition-all hover:scale-105">
                Tìm hiểu thêm
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="animate-scaleIn">
                <div className="text-4xl font-black bg-linear-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm font-semibold text-stone-600 mt-1">
                  Bệnh nhân
                </div>
              </div>
              <div className="animate-scaleIn">
                <div className="text-4xl font-black bg-linear-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                  200+
                </div>
                <div className="text-sm font-semibold text-stone-600 mt-1">
                  Bác sĩ
                </div>
              </div>
              <div className="animate-scaleIn">
                <div className="text-4xl font-black bg-linear-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm font-semibold text-stone-600 mt-1">
                  Hài lòng
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Design */}
          <div className="relative animate-slideInRight">
            {/* Main Circle with Doctor */}
            <div className="relative z-10 flex items-center justify-center">
              {/* Rotating Gradient Ring */}
              <div className="absolute w-[420px] h-[420px] rounded-full gradient-ring animate-rotate opacity-20"></div>

              {/* Doctor Circle */}
              <div className="relative doctor-circle w-96 h-96 rounded-full flex items-center justify-center">
                {/* Doctor Icon/Illustration */}
                <div className="text-9xl">👨‍⚕️</div>

                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-rose-500/20 to-orange-500/20 animate-pulse-glow"></div>
              </div>
            </div>

            {/* Floating Cards */}
            {/* Top Left - Appointment Card */}
            <div className="floating-card absolute -top-8 -left-8 p-4 rounded-2xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-500">
                    Lịch hẹn
                  </div>
                  <div className="text-lg font-black text-stone-900">
                    124 hôm nay
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right - Rating Card */}
            <div className="floating-card absolute -top-4 -right-4 p-4 rounded-2xl animate-float-reverse">
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                <div>
                  <div className="text-2xl font-black text-stone-900">4.9</div>
                  <div className="text-xs font-semibold text-stone-500">
                    Đánh giá
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Left - Success Rate */}
            <div className="floating-card absolute top-24 -left-12 p-4 rounded-2xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-stone-900">98%</div>
                  <div className="text-xs font-semibold text-stone-500">
                    Thành công
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Right - Quick Service */}
            <div className="floating-card absolute top-32 -right-8 p-4 rounded-2xl animate-float-reverse">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-black text-stone-900">
                    15 phút
                  </div>
                  <div className="text-xs font-semibold text-stone-500">
                    Phản hồi
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left - Doctors Available */}
            <div className="floating-card absolute bottom-20 -left-8 p-4 rounded-2xl animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-linear-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-black text-stone-900">
                    50+ BS
                  </div>
                  <div className="text-xs font-semibold text-stone-500">
                    Trực tuyến
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right - Award */}
            <div className="floating-card absolute bottom-16 -right-4 p-4 rounded-2xl animate-float-reverse">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-500">
                    Chứng nhận
                  </div>
                  <div className="text-lg font-black text-stone-900">
                    ISO 9001
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Center - Trending */}
            <div className="floating-card absolute -bottom-4 left-1/2 transform -translate-x-1/2 p-3 rounded-xl animate-float">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-bold text-stone-700">
                  +23% tuần này
                </span>
              </div>
            </div>

            {/* Shield Badge - Top Center */}
            <div className="floating-card absolute -top-12 left-1/2 transform -translate-x-1/2 p-3 rounded-full animate-float-reverse">
              <Shield className="w-8 h-8 text-rose-600" />
            </div>

            {/* Heart Badge - Bottom Far Right */}
            <div className="floating-card absolute bottom-0 right-0 p-3 rounded-full animate-float">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-rose-200/30 to-orange-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-linear-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-linear-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl -z-10"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] -z-10" />
    </div>
  );
};

export default HeroSection;
