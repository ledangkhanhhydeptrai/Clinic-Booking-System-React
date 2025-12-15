import React from "react";
import {
  Calendar,
  Plus,
  Search,
  Clock,
  X,
  Stethoscope,
  CalendarIcon,
  TimerIcon,
  CheckCircleIcon
} from "lucide-react";
import {
  ScheduleProps,
  useSchedule
} from "../../../features/schedule/useSchedule";
import { useDoctor } from "../../../features/doctor/useDoctors";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import Select from "../../../components/common/Select";
import Label from "../../../components/common/Label";
import { NotificationProps } from "../../../notification/Notification";
import { Alert, Snackbar } from "@mui/material";
import SlideTransitions from "../../../slide/SlideTransition";
import ErrorIcon from "@mui/icons-material/Error";
export default function ScheduleAdminPage() {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [workDate, setWorkDate] = React.useState<string>("");
  const [startTime, setStartTime] = React.useState<string>("");
  const [endTime, setEndTime] = React.useState<string>("");
  const [notification, setNotification] = React.useState<NotificationProps>({
    open: false,
    message: "",
    severity: "success"
  });
  const { data: schedule = [], createSchedule } = useSchedule();
  const { data: doctor = [] } = useDoctor();
  const doctorOptions = doctor.map((d) => ({
    label: `${d.name} - ${d.specialty}`,
    value: d.id
  }));
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  };
  const handleClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };
  const formatTime = (timeStr: string, workDateStr: string) => {
    const date = new Date(`${workDateStr}T${timeStr}`);
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      createSchedule(
        { doctorId: selectedDoctorId, workDate, startTime, endTime },
        {
          onSuccess: () => {
            setNotification({
              open: true,
              message: "Tạo thời gian biểu thành công",
              severity: "success"
            });
          },
          onError: (err) => {
            console.log("Tạo thời gian biểu thất bại", err);
          }
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const getDurationFormatted = (schedule: ScheduleProps): string => {
    const [startH, startM] = schedule.startTime.split(":").map(Number);
    const [endH, endM] = schedule.endTime.split(":").map(Number);

    const durationMinutes = endH * 60 + endM - (startH * 60 + startM);
    if (durationMinutes <= 0) return "0h 0m";

    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    return `${hours}h ${minutes}m`;
  };

  const filteredschedule = schedule.filter((sch: ScheduleProps) => {
    const doctors = doctor.find((d) => d.id === sch.doctorId);
    return doctors?.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const [selectedDoctorId, setSelectedDoctorId] = React.useState<string>("");
  // const handleDelete = (id: string) => {
  //   setschedule(schedule.filter((s) => s.id !== id));
  // };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .schedule-card {
          transition: all 0.2s ease;
        }
        
        .schedule-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Quản lý lịch làm việc</h1>
                <p className="text-blue-100 text-sm">
                  Hệ thống quản lý ca làm việc bác sĩ
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5" />
              Thêm lịch
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-10">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm bác sĩ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 shadow-sm"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-sm text-gray-600 mb-1">Tổng ca làm việc</div>
            <div className="text-2xl font-bold text-gray-900">
              {schedule.length}
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-sm text-gray-600 mb-1">Hôm nay</div>
            <div className="text-2xl font-bold text-blue-600">
              {
                schedule.filter((s) => {
                  const today = new Date();
                  const workDate = new Date(s.workDate);
                  return workDate.toDateString() === today.toDateString();
                }).length
              }
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-sm text-gray-600 mb-1">Bác sĩ</div>
            <div className="text-2xl font-bold text-purple-600">
              {Object.keys(doctor).length}
            </div>
          </div>
        </div>

        {/* schedule List */}
        <div className="space-y-3">
          {filteredschedule.map((schedule) => {
            const doctorInfo = doctor.find((d) => d.id === schedule.doctorId);
            if (!doctorInfo) {
              return (
                <div className="schedule-card bg-white rounded-xl p-5 shadow-sm border border-red-100">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-red-700">
                        Không tìm thấy thông tin bác sĩ
                      </h3>
                      <p className="text-sm text-red-600">
                        ID: {schedule.doctorId}
                      </p>
                    </div>
                    {/* <Button
                      isLoading={false}
                      onClick={() => handleDelete(schedule.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </Button> */}
                  </div>
                </div>
              );
            }
            return (
              <div
                key={schedule.id}
                className="schedule-card bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      {/* Date Badge */}
                      <div className="shrink-0 text-center bg-linear-to-br from-blue-50 to-purple-50 rounded-lg px-3 py-2 border border-blue-100">
                        <div className="text-xs text-gray-600 mb-1">
                          {formatDate(schedule.workDate)}
                        </div>
                        <div className="text-lg font-bold text-blue-600">
                          {getDurationFormatted(schedule)}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">ca làm</div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 rounded-full"></div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {doctorInfo.name}
                          </h3>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold">
                            {doctorInfo.specialty}
                          </span>
                        </div>

                        <div className="ml-5 flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">
                              {formatTime(
                                schedule.startTime,
                                schedule.workDate
                              )}{" "}
                              -{" "}
                              {formatTime(schedule.endTime, schedule.workDate)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  {/* <Button
                    isLoading={false}
                    onClick={() => handleDelete(schedule.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </Button> */}
                </div>
              </div>
            );
          })}

          {filteredschedule.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">
                Không tìm thấy lịch làm việc
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Thêm lịch làm việc
              </h2>
              <Button
                isLoading={false}
                onClick={() => setShowModal(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="doctorId">Chọn bác sĩ</Label>
                <Select
                  id="doctorId"
                  placeholder="-- Chọn bác sĩ --"
                  options={doctorOptions}
                  value={selectedDoctorId}
                  onChange={(e) => setSelectedDoctorId(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="WorkDate">Ngày làm việc</Label>
                <Input
                  icon={<CalendarIcon size={18} />}
                  type="date"
                  onChange={(e) => setWorkDate(e.target.value)}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="StartTime">Giờ bắt đầu</Label>
                  <Input
                    icon={<TimerIcon size={18} />}
                    type="time"
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <Label htmlFor="EndTime">Giờ kết thúc</Label>
                  <Input
                    onChange={(e) => setEndTime(e.target.value)}
                    icon={<TimerIcon size={18} />}
                    type="time"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-5 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Lưu lịch làm việc
              </button>
            </form>
          </div>
        </div>
      )}
      <Snackbar
        open={notification.open}
        onClose={handleClose}
        TransitionComponent={SlideTransitions}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={4000}
      >
        <Alert
          onClose={handleClose}
          severity={notification.severity}
          variant="filled"
          iconMapping={{
            success: <CheckCircleIcon fontSize="small" />,
            error: <ErrorIcon fontSize="small" />
          }}
          sx={{
            width: "100%",
            bgcolor:
              notification.severity === "success" ? "#4caf50" : "#f44336",
            color: "white",
            fontWeight: "bold",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
            px: 2,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 1
          }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
