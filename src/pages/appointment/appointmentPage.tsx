import React from "react";
import {
  Calendar,
  Clock,
  User,
  XCircle,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import {
  AppointmentStatus,
  useAppointment
} from "../../features/appointment/useAppointment";
import FormAppointment from "./components/FormAppointment";
import Button from "../../components/common/Button";

export default function AppointmentPage() {
  // Mock data - replace with actual API call
  const { data: appointments = [] } = useAppointment();
  const [filter, setFilter] = React.useState("ALL");
  const [showForm, setShowForm] = React.useState<boolean>(false); // state mở form
  const getStatusConfig = (status: AppointmentStatus) => {
    const configs = {
      PENDING: {
        label: "Chờ xác nhận",
        color: "bg-amber-50 text-amber-700 border-amber-200",
        icon: AlertCircle,
        iconColor: "text-amber-500"
      },
      CONFIRMED: {
        label: "Đã xác nhận",
        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
        icon: CheckCircle,
        iconColor: "text-emerald-500"
      },
      DONE: {
        label: "Thành công",
        color: "bg-rose-50 text-rose-700 border-rose-200",
        icon: XCircle,
        iconColor: "text-rose-500"
      }
    };
    return configs[status] || configs.PENDING;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const filteredAppointments =
    filter === "ALL"
      ? appointments
      : appointments.filter((apt) => apt.status === filter);

  const upcomingCount = appointments.filter(
    (apt) => apt.status === "PENDING" || apt.status === "CONFIRMED"
  ).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        
        * {
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .mono {
          font-family: 'Space Mono', monospace;
        }

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .filter-btn {
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          transform: scale(1.02);
        }

        .status-badge {
          animation: fadeIn 0.3s ease-out;
        }

        .bg-pattern {
          background-image: 
            radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.05) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(59, 130, 246, 0.05) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(147, 51, 234, 0.05) 0px, transparent 50%);
        }
      `}</style>

      {/* Header */}
      <div className="bg-pattern animate-fade-in">
        <div className="">
          <div className="mt-8 flex justify-end">
            <Button
              isLoading={false}
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              + Đặt lịch mới
            </Button>
          </div>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-5xl font-bold text-slate-900 tracking-tight">
              Lịch hẹn của tôi
            </h1>
            <div className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-full shadow-sm border border-slate-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700 mono">
                {upcomingCount} lịch sắp tới
              </span>
            </div>
          </div>
          <p className="text-slate-600 text-lg">
            Quản lý và theo dõi các cuộc hẹn khám bệnh của bạn
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mt-10 mb-10">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-2 inline-flex gap-2">
          {[
            { key: "ALL", label: "Tất cả", count: appointments.length },
            {
              key: "PENDING",
              label: "Chờ xác nhận",
              count: appointments.filter((a) => a.status === "PENDING").length
            },
            {
              key: "CONFIRMED",
              label: "Đã xác nhận",
              count: appointments.filter((a) => a.status === "CONFIRMED").length
            },
            {
              key: "DONE",
              label: "Đã hủy",
              count: appointments.filter((a) => a.status === "DONE").length
            }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`filter-btn px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                filter === tab.key
                  ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tab.label}
              <span
                className={`ml-2 mono text-xs ${
                  filter === tab.key ? "text-blue-100" : "text-slate-400"
                }`}
              >
                ({tab.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Appointments List */}
      <div className="">
        {filteredAppointments.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-700 mb-2">
              Không có lịch hẹn
            </h3>
            <p className="text-slate-500">
              Chưa có lịch hẹn nào trong danh mục này
            </p>
          </div>
        ) : (
          <div className="grid gap-5">
            {filteredAppointments.map((appointment) => {
              const statusConfig = getStatusConfig(appointment.status);
              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={appointment.id}
                  className="card-hover animate-slide-up bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                            <User className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-slate-900 mb-1">
                              {appointment.doctorName}
                            </h3>
                            <p className="text-slate-500 font-medium">
                              {appointment.specialty}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`status-badge flex items-center gap-2 px-4 py-2 rounded-full border ${statusConfig.color}`}
                      >
                        <StatusIcon
                          className={`w-4 h-4 ${statusConfig.iconColor}`}
                        />
                        <span className="font-medium text-sm">
                          {statusConfig.label}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium mb-1">
                            Ngày khám
                          </p>
                          <p className="text-sm font-semibold text-slate-900 mono">
                            {formatDate(appointment.appointmentDate)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 font-medium mb-1">
                            Giờ khám
                          </p>
                          <p className="text-sm font-semibold text-slate-900 mono">
                            {appointment.appointmentTime}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 mono">ID:</span>
                        <span className="text-xs text-slate-600 mono font-medium">
                          {appointment.id.slice(0, 8)}...
                        </span>
                      </div>

                      <div className="flex gap-3">
                        {appointment.status === "PENDING" && (
                          <>
                            <button className="px-5 py-2.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl font-medium text-sm transition-all hover:shadow-md border border-red-200">
                              Hủy lịch
                            </button>
                            <button className="px-5 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium text-sm transition-all hover:shadow-lg">
                              Xác nhận
                            </button>
                          </>
                        )}
                        {appointment.status === "CONFIRMED" && (
                          <button className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium text-sm transition-all border border-slate-200">
                            Xem chi tiết
                          </button>
                        )}
                        {appointment.status === "DONE" && (
                          <button className="px-5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-medium text-sm transition-all border border-blue-200">
                            Đặt lại
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setShowForm(false)} // click overlay để đóng
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] p-6 md:p-12 overflow-y-auto animate-scale-in relative"
            onClick={(e) => e.stopPropagation()} // tránh click trong form bị đóng
          >
            <FormAppointment onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
