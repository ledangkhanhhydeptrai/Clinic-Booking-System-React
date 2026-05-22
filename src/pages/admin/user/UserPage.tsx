import React, { useState } from "react";
import {
  Search,
  Phone,
  Calendar,
  Filter,
  UserPlus,
  UserCheck,
  Users
} from "lucide-react";
import { PatientProps, useUser } from "../../../features/user/useUser";
import GlobalStyles from "../doctor/components/GlobalStyles";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map(w => w[0].toUpperCase())
    .join("");
}

const UserPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: patientsData = [] } = useUser();

  const totalPatients = patientsData.length;

  const newPatients = patientsData.filter(patient => {
    const today = new Date().toDateString();
    return new Date(patient.dob).toDateString() === today;
  }).length;

  const treatingPatients = totalPatients - newPatients;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  };

  const filteredPatients = patientsData.filter(
    (patient: PatientProps) =>
      patient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-cyan-50">
      <GlobalStyles />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Manrope:wght@400;500;600&display=swap');

        .up-root { font-family: 'Manrope', sans-serif; }
        .up-serif { font-family: 'Playfair Display', serif; }

        .up-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          border: 0.5px solid rgba(0,0,0,0.08);
        }

        .up-patient-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .up-patient-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(24, 95, 165, 0.12);
        }

        .up-stat-card {
          transition: transform 0.18s ease;
        }
        .up-stat-card:hover {
          transform: translateY(-2px);
        }

        .up-search-input:focus {
          border-color: #185FA5 !important;
          box-shadow: 0 0 0 3px rgba(24,95,165,0.1);
        }

        .up-btn-primary {
          transition: opacity 0.15s ease, transform 0.15s ease;
        }
        .up-btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .up-btn-primary:active { transform: scale(0.98); }

        .up-view-btn {
          transition: background 0.15s ease;
        }
        .up-view-btn:hover { background: #0C447C !important; }

        @keyframes upFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .up-fade-up { animation: upFadeUp 0.5s ease both; }
        .up-fade-up-1 { animation: upFadeUp 0.5s 0.05s ease both; }
        .up-fade-up-2 { animation: upFadeUp 0.5s 0.1s ease both; }
      `}</style>

      <div className="up-root px-6 py-12">
        {/* ── Header ── */}
        <div className="mb-8 up-fade-up">
          <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
            <div>
              <h1 className="up-serif text-4xl sm:text-5xl font-bold text-slate-800 mb-1">
                Danh sách bệnh nhân
              </h1>
              <p className="text-slate-500 text-base">
                Quản lý thông tin và hồ sơ bệnh nhân
              </p>
            </div>
            <button className="up-btn-primary flex items-center gap-2 bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm">
              <UserPlus size={16} />
              Thêm bệnh nhân
            </button>
          </div>

          {/* Search bar */}
          <div className="up-card rounded-2xl p-4 shadow-sm">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Tìm theo tên hoặc số điện thoại..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="up-search-input w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white/60 outline-none transition-all"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 bg-white/60 hover:border-blue-400 hover:bg-blue-50 transition-all">
                <Filter size={15} />
                Lọc
              </button>
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 up-fade-up-1">
          <div className="up-card up-stat-card rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
              <Users size={20} className="text-blue-700" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wide">
                Tổng bệnh nhân
              </div>
              <div className="up-serif text-3xl font-bold text-blue-800 leading-none">
                {totalPatients}
              </div>
            </div>
          </div>

          <div className="up-card up-stat-card rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
              <UserCheck size={20} className="text-emerald-700" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wide">
                Đang điều trị
              </div>
              <div className="up-serif text-3xl font-bold text-emerald-800 leading-none">
                {treatingPatients}
              </div>
            </div>
          </div>

          <div className="up-card up-stat-card rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <UserPlus size={20} className="text-amber-700" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wide">
                Mới nhập viện
              </div>
              <div className="up-serif text-3xl font-bold text-amber-800 leading-none">
                {newPatients}
              </div>
            </div>
          </div>
        </div>

        {/* ── Patient Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 up-fade-up-2">
          {filteredPatients.map((patient: PatientProps) => {
            const initials = getInitials(patient.fullName);

            return (
              <div
                key={patient.id}
                className="up-card up-patient-card rounded-2xl overflow-hidden shadow-sm cursor-pointer"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-black/5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold up-serif">
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-800 text-sm truncate">
                      {patient.fullName}
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      ID: {patient.id.slice(0, 8)}...
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-5 py-3 space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone size={14} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                        Số điện thoại
                      </div>
                      <div className="text-sm font-semibold text-slate-700">
                        {patient.phone}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                      <Calendar size={14} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                        Ngày sinh
                      </div>
                      <div className="text-sm font-semibold text-slate-700">
                        {formatDate(patient.dob)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-5 pb-4 pt-1">
                  <button className="up-view-btn w-full py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Empty state ── */}
        {filteredPatients.length === 0 &&
          <div className="text-center py-24 up-fade-up">
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-slate-100 flex items-center justify-center">
              <Search size={36} className="text-slate-300" />
            </div>
            <h3 className="up-serif text-2xl font-bold text-slate-600 mb-2">
              Không tìm thấy bệnh nhân
            </h3>
            <p className="text-slate-400 text-sm">
              Thử tìm kiếm với từ khóa khác
            </p>
          </div>}
      </div>
    </div>
  );
};

export default UserPage;
