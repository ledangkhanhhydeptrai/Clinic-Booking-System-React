import React from "react";
import {
  Calendar,
  Clock,
  Search,
  ChevronRight,
  CalendarCheck,
  Loader2,
  Stethoscope,
  TrendingUp
} from "lucide-react";
import { useSchedule } from "../../features/schedule/useSchedule";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

export default function SchedulePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("");
  const { data: schedules = [], isLoading } = useSchedule();

  const displaySchedules = React.useMemo(() => {
    if (searchQuery) {
      return schedules.filter(
        (s) =>
          s.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.specialty.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return schedules;
  }, [schedules, searchQuery]);

  const getAvailabilityConfig = (bookedSlots: number, totalSlots: number) => {
    const percentage = (bookedSlots / totalSlots) * 100;
    if (bookedSlots === totalSlots)
      return {
        badge: "bg-rose-50 text-rose-600 border-rose-200",
        bar: "bg-rose-400",
        label: "Đã đầy"
      };
    if (percentage >= 80)
      return {
        badge: "bg-amber-50 text-amber-600 border-amber-200",
        bar: "bg-amber-400",
        label: `Còn ${totalSlots - bookedSlots} slot`
      };
    if (percentage > 0)
      return {
        badge: "bg-blue-50 text-blue-600 border-blue-200",
        bar: "bg-blue-400",
        label: `Còn ${totalSlots - bookedSlots} slot`
      };
    return {
      badge: "bg-emerald-50 text-emerald-600 border-emerald-200",
      bar: "bg-emerald-400",
      label: "Còn trống"
    };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
          <p className="text-slate-600 font-medium">
            Đang tải lịch làm việc...
          </p>
          <p className="text-slate-400 text-sm mt-1">
            Vui lòng chờ trong giây lát
          </p>
        </div>
      </div>
    );
  }

  const totalBooked = displaySchedules.reduce((s, r) => s + r.bookedSlots, 0);
  const totalFree = displaySchedules.reduce(
    (s, r) => s + (r.totalSlots - r.bookedSlots),
    0
  );
  const totalDoctors = new Set(displaySchedules.map((s) => s.doctorId)).size;

  const stats = [
    {
      label: "Tổng ca làm",
      value: displaySchedules.length,
      icon: CalendarCheck,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      trend: "+2 hôm nay"
    },
    {
      label: "Bác sĩ",
      value: totalDoctors,
      icon: Stethoscope,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      trend: "Đang hoạt động"
    },
    {
      label: "Đã đặt",
      value: totalBooked,
      icon: Clock,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      trend: `${Math.round((totalBooked / (totalBooked + totalFree || 1)) * 100)}% lấp đầy`
    },
    {
      label: "Còn trống",
      value: totalFree,
      icon: TrendingUp,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      trend: "Slot khả dụng"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── HEADER ── */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Lịch làm việc
                </h1>
                <p className="text-xs text-slate-400 mt-0.5">
                  Quản lý lịch trình bác sĩ
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="relative w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm bác sĩ, chuyên khoa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-1 py-8">
        {/* ── STATS ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-10 h-10 ${stat.iconBg} rounded-xl flex items-center justify-center`}
                >
                  <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
                <span className="text-[11px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">
                  {stat.trend}
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── EMPTY STATE ── */}
        {displaySchedules.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm py-20 flex flex-col items-center">
            <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mb-4">
              <Calendar className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              Không có lịch làm việc
            </h3>
            <p className="text-sm text-slate-400">
              {searchQuery
                ? "Không tìm thấy kết quả phù hợp"
                : "Chưa có lịch nào được tạo"}
            </p>
          </div>
        ) : (
          /* ── SCHEDULE LIST ── */
          <div className="grid gap-4">
            {displaySchedules.map((schedule) => {
              const avail = getAvailabilityConfig(
                schedule.bookedSlots,
                schedule.totalSlots
              );
              const fillPct = Math.round(
                (schedule.bookedSlots / schedule.totalSlots) * 100
              );
              const isCancelled = schedule.scheduleStatus === "CANCELLED";

              return (
                <div key={schedule.id}>
                  {/* Coloured left accent */}
                  <div className="flex">
                    <div
                      className={`w-1.5 shrink-0 ${
                        isCancelled
                          ? "bg-slate-300"
                          : fillPct === 100
                            ? "bg-rose-400"
                            : fillPct >= 80
                              ? "bg-amber-400"
                              : "bg-blue-500"
                      }`}
                    />

                    <div className="flex-1 p-5">
                      <div className="flex items-start gap-5">
                        {/* Date badge */}
                        <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 bg-linear-to-b from-blue-500 to-indigo-600 rounded-2xl text-white shadow-lg shadow-blue-200 shrink-0">
                          <span className="text-[10px] font-semibold uppercase tracking-widest opacity-80">
                            {schedule.workDate?.split("-")[1] &&
                              new Date(schedule.workDate).toLocaleDateString(
                                "vi-VN",
                                { month: "short" }
                              )}
                          </span>
                          <span className="text-2xl font-bold leading-none">
                            {new Date(schedule.workDate).getDate()}
                          </span>
                        </div>

                        {/* Main info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div>
                              <div className="flex items-center gap-2 mb-0.5">
                                <h3 className="text-base font-bold text-slate-900 truncate">
                                  {schedule.doctorName}
                                </h3>
                                {isCancelled && (
                                  <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-600 border border-rose-200 shrink-0">
                                    Đã huỷ
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-500">
                                  {schedule.specialty}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                <span className="text-xs text-slate-400 font-mono">
                                  #{schedule.doctorId.substring(0, 8)}
                                </span>
                              </div>
                            </div>

                            {!isCancelled && (
                              <span
                                className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold border ${avail.badge}`}
                              >
                                {avail.label}
                              </span>
                            )}
                          </div>

                          {/* Time + progress */}
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <div className="flex items-center gap-1.5 text-slate-700">
                              <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                              <span className="text-sm font-semibold">
                                {schedule.startTime} – {schedule.endTime}
                              </span>
                            </div>

                            <div className="flex items-center gap-2.5">
                              <div className="w-28 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${avail.bar} rounded-full transition-all duration-500`}
                                />
                              </div>
                              <span className="text-xs text-slate-500">
                                {schedule.bookedSlots}/{schedule.totalSlots}{" "}
                                slots
                              </span>
                            </div>
                          </div>

                          {/* Actions */}
                          {!isCancelled && (
                            <div className="flex gap-2">
                              <Button
                                isLoading={false}
                                onClick={() => navigate("/user/appointment")}
                                className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-200 rounded-xl text-sm font-medium transition-all"
                              >
                                <CalendarCheck className="w-4 h-4" />
                                Xem lịch hẹn
                              </Button>
                              <Button
                                isLoading={false}
                                className="flex items-center gap-1.5 px-4 py-2 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl text-sm font-medium shadow-md shadow-blue-200 transition-all"
                              >
                                Chi tiết
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
