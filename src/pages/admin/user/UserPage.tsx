import React, { useState } from "react";
import { Search, Phone, Calendar, User, Filter } from "lucide-react";
import { PatientProps, useUser } from "../../../features/user/useUser";
import GlobalStyles from "../doctor/components/GlobalStyles";

const UserPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: patientsData = [] } = useUser();

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

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-12 animate-slide-in-left">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="header-title text-5xl font-bold text-slate-800 mb-2">
                Danh Sách Bệnh Nhân
              </h1>
              <p className="text-slate-600 text-lg">
                Quản lý thông tin và hồ sơ bệnh nhân
              </p>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="glass-effect rounded-3xl p-6 shadow-lg">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên hoặc số điện thoại..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/50"
                />
              </div>
              <button className="px-6 py-3 border-2 border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 bg-white/50">
                <Filter size={20} className="text-slate-600" />
                <span className="font-medium text-slate-700">Lọc</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="glass-effect rounded-2xl p-6 shadow-md animate-fade-in-up">
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {filteredPatients.length}
            </div>
            <div className="text-slate-600 font-medium">Tổng Bệnh Nhân</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 shadow-md animate-fade-in-up">
            <div className="text-3xl font-bold text-emerald-600 mb-1">24</div>
            <div className="text-slate-600 font-medium">Hôm Nay</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 shadow-md animate-fade-in-up">
            <div className="text-3xl font-bold text-amber-600 mb-1">12</div>
            <div className="text-slate-600 font-medium">Đang Chờ</div>
          </div>
        </div>

        {/* Patients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map((patient: PatientProps) => (
            <div
              key={patient.id}
              className="patient-card card-hover glass-effect rounded-3xl p-6 shadow-md cursor-pointer animate-fade-in-up"
            >
              {/* Patient Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                  <User size={28} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg text-slate-800 truncate">
                    {patient.fullName}
                  </h3>
                  <span className="text-sm text-slate-500">
                    ID: {patient.id.slice(0, 8)}...
                  </span>
                </div>
              </div>

              {/* Patient Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Phone size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">
                      Số điện thoại
                    </div>
                    <div className="font-medium text-slate-800">
                      {patient.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Calendar size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">
                      Ngày sinh
                    </div>
                    <div className="font-medium text-slate-800">
                      {formatDate(patient.dob)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full mt-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                Xem Chi Tiết
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPatients.length === 0 && (
          <div className="text-center py-20 animate-fade-in-up">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
              <Search size={40} className="text-slate-400" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-700 mb-2">
              Không tìm thấy bệnh nhân
            </h3>
            <p className="text-slate-500">Thử tìm kiếm với từ khóa khác</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
