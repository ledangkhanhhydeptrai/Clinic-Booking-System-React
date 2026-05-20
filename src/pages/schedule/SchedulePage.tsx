import React from "react";
import {
  Calendar,
  Clock,
  User,
  Search,
  ChevronRight,
  CalendarCheck,
  Loader2
} from "lucide-react";
import { useSchedule } from "../../features/schedule/useSchedule";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

export default function SchedulePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("");
  const { data: schedules = [], isLoading } = useSchedule();
  const displaySchedules = React.useMemo(
    () => {
      // Filter by search
      if (searchQuery) {
        return schedules.filter(
          s =>
            s.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.specialty.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      return schedules;
    },
    [schedules, searchQuery]
  );

  const getAvailabilityColor = (bookedSlots: number, totalSlots: number) => {
    const percentage = bookedSlots / totalSlots * 100;
    if (percentage === 0)
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (percentage < 50) return "bg-blue-50 text-blue-700 border-blue-200";
    if (percentage < 80) return "bg-amber-50 text-amber-700 border-amber-200";
    return "bg-rose-50 text-rose-700 border-rose-200";
  };

  const getAvailabilityText = (bookedSlots: number, totalSlots: number) => {
    const available = totalSlots - bookedSlots;
    if (available === totalSlots) return "Còn trống";
    if (available > 0) return `Còn ${available} slot`;
    return "Đã đầy";
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-rose-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600 font-medium">
            Đang tải lịch làm việc...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-rose-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-10">
        <div className="py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent">
                Quản lý lịch làm việc
              </h1>
              <p className="mt-1 text-slate-600">
                Lịch trình làm việc của các bác sĩ
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mt-6 flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm kiếm bác sĩ, chuyên khoa..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <CalendarCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Tổng ca làm</p>
                <p className="text-2xl font-bold text-slate-900">
                  {displaySchedules.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Bác sĩ</p>
                <p className="text-2xl font-bold text-slate-900">
                  {new Set(displaySchedules.map(s => s.doctorId)).size}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Đã đặt</p>
                <p className="text-2xl font-bold text-slate-900">
                  {displaySchedules.reduce((sum, s) => sum + s.bookedSlots, 0)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Còn trống</p>
                <p className="text-2xl font-bold text-slate-900">
                  {displaySchedules.reduce(
                    (sum, s) => sum + (s.totalSlots - s.bookedSlots),
                    0
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {displaySchedules.length === 0
          ? <div className="text-center py-16">
              <div className="w-24 h-24 bg-linear-to-br from-blue-100 to-rose-100 rounded-3xl mx-auto flex items-center justify-center mb-6">
                <Calendar className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Không có lịch làm việc
              </h3>
              <p className="text-slate-600 mb-6">
                {searchQuery
                  ? "Không tìm thấy lịch làm việc phù hợp"
                  : "Chưa có lịch làm việc nào được tạo"}
              </p>
            </div>
          : /* Schedule List */
            <div className="grid gap-6">
              {displaySchedules.map(schedule =>
                <div
                  key={schedule.id}
                  className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/60 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${schedule.scheduleStatus ===
                  "CANCELLED"
                    ? "opacity-60"
                    : ""}`}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Date Badge */}

                      {/* Doctor Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div>
                              <h3 className="text-lg font-bold text-slate-900">
                                {schedule.doctorName}
                              </h3>
                              <p className="text-sm text-slate-500">
                                {schedule.specialty}
                              </p>
                              <p className="text-xs text-slate-400 mt-1">
                                ID: {schedule.doctorId.substring(0, 12)}...
                              </p>
                            </div>
                          </div>

                          {schedule.scheduleStatus === "CANCELLED"
                            ? <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                                Đã hủy
                              </span>
                            : <span
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${getAvailabilityColor(
                                  schedule.bookedSlots,
                                  schedule.totalSlots
                                )}`}
                              >
                                {getAvailabilityText(
                                  schedule.bookedSlots,
                                  schedule.totalSlots
                                )}
                              </span>}
                        </div>

                        {/* Time and Slots Info */}
                        <div className="flex items-center gap-6 mb-4">
                          <div className="flex items-center gap-2 text-slate-700">
                            <Clock className="w-5 h-5 text-blue-500" />
                            <span className="font-semibold">
                              {schedule.startTime} - {schedule.endTime}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-linear-to-r from-blue-500 to-rose-500 rounded-full transition-all duration-300" />
                            </div>
                            <span className="text-sm text-slate-600">
                              {schedule.bookedSlots}/{schedule.totalSlots} slots
                            </span>
                          </div>
                        </div>

                        {/* Work Date Display */}
                        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg">
                          <Calendar className="w-4 h-4 text-slate-600" />
                          <span className="text-sm text-slate-700 font-medium">
                            {schedule.workDate}
                          </span>
                        </div>

                        {/* Actions */}
                        {schedule.scheduleStatus !== "CANCELLED" &&
                          <div className="flex gap-3">
                            <Button
                              isLoading={false}
                              onClick={() => navigate("/user/appointment")}
                              className="flex-1 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                              <CalendarCheck className="w-4 h-4" />
                              Xem lịch hẹn
                            </Button>
                            <Button
                              isLoading={false}
                              className="px-4 py-2.5 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-500/20"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </Button>
                          </div>}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>}
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
