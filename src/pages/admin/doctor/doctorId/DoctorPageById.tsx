import {
  Phone,
  Stethoscope,
  User,
  Calendar,
  Clock,
  Building2,
  Star,
  Award
} from "lucide-react";
import { useParams } from "react-router-dom";
import { useDoctorById } from "../../../../features/doctor/useDoctors";

export default function DoctorPageById() {
  const { id } = useParams<{ id: string }>();
  const { data: doctor, isLoading } = useDoctorById(String(id));
  
  if (!id) return <div>Doctor ID không hợp lệ</div>;

  if (isLoading || !doctor) {
    return (
      <div className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-teal-200 rounded-full animate-pulse" />
          <div className="w-32 h-3 bg-teal-100 rounded-full animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 p-4 sm:p-8 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@400;500;700&display=swap');

        .dp-root { font-family: 'DM Sans', sans-serif; }
        .doctor-name { font-family: 'Cormorant Garamond', serif; }

        .card-enter {
          animation: cardEnter 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .card-enter-delay {
          animation: cardEnter 0.7s 0.1s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes cardEnter {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }

        .badge-float {
          animation: badgeFloat 3s ease-in-out infinite;
        }
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }

        .shimmer { position: relative; overflow: hidden; }
        .shimmer::before {
          content: '';
          position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
          animation: shimmer 3s infinite;
        }
        @keyframes shimmer { to { left: 100%; } }

        .icon-bounce:hover {
          animation: iconBounce 0.45s ease;
        }
        @keyframes iconBounce {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.2) rotate(5deg); }
        }

        .gradient-border {
          position: relative;
          border-radius: 24px;
          padding: 1.5px;
          background: linear-gradient(135deg, #14b8a6, #06b6d4, #0ea5e9);
        }
        .gradient-border-subtle {
          position: relative;
          border-radius: 24px;
          padding: 1.5px;
          background: linear-gradient(135deg, #5eead4, #a5f3fc, #bae6fd);
        }

        .glass-card {
          backdrop-filter: blur(18px);
          background: rgba(255, 255, 255, 0.88);
          border-radius: 22.5px;
        }

        .avatar-glow {
          box-shadow: 0 0 48px rgba(20,184,166,0.35), 0 0 96px rgba(6,182,212,0.15);
        }

        .stat-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(20,184,166,0.15);
        }

        .action-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(20,184,166,0.25);
        }
        .action-btn:active { transform: scale(0.98); }
      `}</style>

      <div className="dp-root max-w-5xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-8 card-enter">
          <p className="text-xs font-semibold text-teal-600 tracking-[.16em] uppercase mb-2">
            Thông Tin Bác Sĩ
          </p>
          <div className="w-20 h-0.5 bg-linear-to-r from-teal-400 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* ── 2-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-6 items-start">
          {/* ── LEFT: Quick-info sidebar ── */}
          <div className="gradient-border-subtle card-enter">
            <div className="glass-card p-6 flex flex-col gap-5">
              {/* Avatar */}
              <div className="flex flex-col items-center pt-2">
                <div className="relative badge-float">
                  <div className="w-28 h-28 rounded-full bg-linear-to-br from-teal-400 via-cyan-400 to-blue-400 p-[3px] avatar-glow">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <User
                        className="w-14 h-14 text-teal-500"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="shimmer absolute -bottom-1.5 -right-1.5 bg-linear-to-r from-emerald-400 to-teal-400 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md tracking-wider">
                    AVAILABLE
                  </div>
                </div>

                <h2 className="doctor-name text-3xl font-bold text-gray-900 mt-5 text-center leading-tight">
                  BS. {doctor.name}
                </h2>
                <div className="text-[11px] text-gray-400 font-mono bg-gray-100 px-3 py-1 rounded-full mt-2">
                  ID: {doctor.id.slice(0, 8)}...
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-linear-to-r from-transparent via-teal-200 to-transparent" />

              {/* Info rows */}
              <div className="flex flex-col gap-3">
                <div className="stat-card flex items-center gap-3 bg-linear-to-br from-teal-50 to-cyan-50 rounded-2xl px-4 py-3 border border-teal-100">
                  <div className="icon-bounce bg-teal-500 rounded-xl p-2.5 shrink-0">
                    <Stethoscope className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-teal-600 font-semibold uppercase tracking-wider">
                      Chuyên Khoa
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      {doctor.specialty}
                    </p>
                  </div>
                </div>

                <div className="stat-card flex items-center gap-3 bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl px-4 py-3 border border-blue-100">
                  <div className="icon-bounce bg-blue-500 rounded-xl p-2.5 shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-600 font-semibold uppercase tracking-wider">
                      Điện Thoại
                    </p>
                    <a
                      href={`tel:${doctor.phone}`}
                      className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {doctor.phone}
                    </a>
                  </div>
                </div>

                <div className="stat-card flex items-center gap-3 bg-linear-to-br from-violet-50 to-purple-50 rounded-2xl px-4 py-3 border border-violet-100">
                  <div className="icon-bounce bg-violet-500 rounded-xl p-2.5 shrink-0">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-violet-600 font-semibold uppercase tracking-wider">
                      Bệnh Viện
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      BV Chợ Rẫy
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-linear-to-r from-transparent via-teal-200 to-transparent" />

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="stat-card bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-3 border border-amber-100 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                    <span className="doctor-name text-lg font-bold text-gray-900">
                      4.9
                    </span>
                  </div>
                  <p className="text-[10px] text-amber-600 font-semibold uppercase tracking-wide">
                    Đánh Giá
                  </p>
                </div>
                <div className="stat-card bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-3 border border-emerald-100 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Award className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="doctor-name text-lg font-bold text-gray-900">
                      12
                    </span>
                  </div>
                  <p className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wide">
                    Năm KN
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Main card ── */}
          <div className="gradient-border card-enter-delay">
            <div className="glass-card p-8 sm:p-10 flex flex-col gap-8">
              {/* Greeting block */}
              <div>
                <p className="text-xs text-teal-500 font-semibold uppercase tracking-[.14em] mb-1">
                  Xin chào 👋
                </p>
                <h1 className="doctor-name text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  BS. {doctor.name}
                </h1>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  Chuyên gia {doctor.specialty} với nhiều năm kinh nghiệm điều
                  trị và chăm sóc bệnh nhân. Luôn tận tâm và chuyên nghiệp trong
                  từng ca khám.
                </p>
              </div>

              {/* Availability strip */}
              <div className="shimmer bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl px-5 py-3.5 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <p className="text-sm font-semibold text-emerald-700">
                  Đang nhận bệnh hôm nay — Thứ Hai đến Thứ Sáu, 8:00–17:00
                </p>
              </div>

              {/* Schedule grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="stat-card bg-linear-to-br from-teal-50 to-cyan-50 rounded-2xl p-5 border border-teal-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="icon-bounce bg-teal-500 rounded-xl p-2.5">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider">
                      Lịch Làm Việc
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    {["Thứ Hai – Thứ Tư", "Thứ Năm – Thứ Sáu"].map((d) => (
                      <div key={d} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                        <p className="text-sm font-medium text-gray-700">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="stat-card bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="icon-bounce bg-blue-500 rounded-xl p-2.5">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                      Giờ Khám
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    {["Sáng: 08:00 – 12:00", "Chiều: 13:30 – 17:00"].map(
                      (t) => (
                        <div key={t} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          <p className="text-sm font-medium text-gray-700">
                            {t}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="action-btn flex-1 bg-linear-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Đặt Lịch Khám
                </button>
                <button className="action-btn flex-1 bg-white text-teal-600 font-semibold py-3.5 px-6 rounded-xl border-2 border-teal-400 hover:bg-teal-50 flex items-center justify-center gap-2">
                  <Stethoscope className="w-4 h-4" />
                  Xem Chi Tiết
                </button>
              </div>

              {/* Footer note */}
              <div className="pt-2 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400 italic">
                  "Chăm sóc sức khỏe của bạn là ưu tiên hàng đầu của chúng tôi"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom dots */}
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
