import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Stethoscope,
  CheckCircle,
  ArrowRight,
  Sparkles,
  X,
  CalendarRange
} from "lucide-react";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
interface FormData {
  patientId: string;
  doctorId: string;
  appointmentDate: string;
  appointmentTime: string;
  status: "PENDING" | "CONFIRMED" | "DONE";
  scheduleId: string;
}

export default function FormAppointment({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    patientId: "3fa85f64-5717-4562-b3fc-2c963f66afa6", // Auto-filled if logged in
    doctorId: "",
    appointmentDate: "",
    appointmentTime: "",
    status: "PENDING",
    scheduleId: ""
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data - replace with actual API calls
  const doctors = [
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "Dr. Nguyễn Văn A",
      specialty: "Tim mạch",
      avatar: "👨‍⚕️"
    },
    {
      id: "4fa85f64-5717-4562-b3fc-2c963f66afa7",
      name: "Dr. Trần Thị B",
      specialty: "Da liễu",
      avatar: "👩‍⚕️"
    },
    {
      id: "5fa85f64-5717-4562-b3fc-2c963f66afa8",
      name: "Dr. Lê Minh C",
      specialty: "Nội khoa",
      avatar: "👨‍⚕️"
    },
    {
      id: "6fa85f64-5717-4562-b3fc-2c963f66afa9",
      name: "Dr. Phạm Hồng D",
      specialty: "Nhi khoa",
      avatar: "👩‍⚕️"
    }
  ];

  const availableTimes = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00"
  ];

  const handleChange = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      // Show success message or redirect
    }, 2000);
  };

  const isStepComplete = (step: number) => {
    if (step === 1) return formData.doctorId !== "";
    if (step === 2) return formData.appointmentDate !== "";
    if (step === 3) return formData.appointmentTime !== "";
    return false;
  };

  const canProceed = () => {
    if (currentStep === 1) return formData.doctorId !== "";
    if (currentStep === 2) return formData.appointmentDate !== "";
    if (currentStep === 3) return formData.appointmentTime !== "";
    return false;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-violet-50 via-purple-50 to-fuchsia-50 py-12 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');
        
        * {
          font-family: 'Poppins', -apple-system, sans-serif;
        }

        .code {
          font-family: 'Fira Code', monospace;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-slide-in-up {
          animation: slideInUp 0.5s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .doctor-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .doctor-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px -10px rgba(139, 92, 246, 0.3);
        }

        .doctor-card.selected {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
          color: white;
          box-shadow: 0 20px 40px -10px rgba(139, 92, 246, 0.5);
        }

        .time-slot {
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .time-slot:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px -4px rgba(139, 92, 246, 0.25);
        }

        .time-slot.selected {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
          color: white;
          box-shadow: 0 8px 20px -4px rgba(139, 92, 246, 0.4);
        }

        .shimmer {
          background: linear-gradient(90deg, #f3f4f6 0px, #e5e7eb 50%, #f3f4f6 100%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .step-indicator {
          transition: all 0.3s ease;
        }

        .step-indicator.active {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
        }

        .step-indicator.completed {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
        }

        .gradient-border {
          position: relative;
          background: white;
          border-radius: 1.5rem;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          padding: 2px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7, #ec4899);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <Button
          isLoading={false}
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 transition"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">
              Đặt lịch khám nhanh chóng
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Đặt lịch hẹn
          </h1>
          <p className="text-lg text-gray-600">
            Chọn bác sĩ và thời gian phù hợp với bạn
          </p>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-slide-in-up">
          {[
            { num: 1, label: "Chọn bác sĩ", icon: Stethoscope },
            { num: 2, label: "Chọn ngày", icon: Calendar },
            { num: 3, label: "Chọn giờ", icon: Clock }
          ].map((step, index) => {
            const StepIcon = step.icon;
            const isActive = currentStep === step.num;
            const isCompleted =
              currentStep > step.num || isStepComplete(step.num);

            return (
              <React.Fragment key={step.num}>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`step-indicator w-14 h-14 rounded-full flex items-center justify-center font-semibold text-lg ${
                      isActive
                        ? "active"
                        : isCompleted
                        ? "completed"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <StepIcon className="w-6 h-6" />
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      isActive || isCompleted
                        ? "text-purple-600"
                        : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < 2 && (
                  <div
                    className={`w-16 h-1 rounded-full -mt-20px transition-all ${
                      isCompleted
                        ? "bg-linear-to-r from-emerald-500 to-emerald-600"
                        : "bg-gray-200"
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Form Card */}
        <div className="gradient-border animate-scale-in">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative z-10">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Choose Doctor */}
              {currentStep === 1 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <Stethoscope className="w-7 h-7 text-purple-600" />
                    Chọn bác sĩ
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Chọn bác sĩ bạn muốn đặt lịch khám
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {doctors.map((doctor) => (
                      <div
                        key={doctor.id}
                        onClick={() => handleChange("doctorId", doctor.id)}
                        className={`doctor-card p-6 rounded-2xl border-2 ${
                          formData.doctorId === doctor.id
                            ? "selected border-transparent"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{doctor.avatar}</div>
                          <div className="flex-1">
                            <h3
                              className={`font-semibold text-lg mb-1 ${
                                formData.doctorId === doctor.id
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {doctor.name}
                            </h3>
                            <p
                              className={`text-sm ${
                                formData.doctorId === doctor.id
                                  ? "text-purple-100"
                                  : "text-gray-600"
                              }`}
                            >
                              {doctor.specialty}
                            </p>
                          </div>
                          {formData.doctorId === doctor.id && (
                            <CheckCircle className="w-6 h-6 text-white" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Choose Date */}
              {currentStep === 2 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <Calendar className="w-7 h-7 text-purple-600" />
                    Chọn ngày khám
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Chọn ngày bạn muốn đến khám
                  </p>

                  <div className="max-w-md mx-auto">
                    <Input
                      icon={<CalendarRange />}
                      type="date"
                      value={formData.appointmentDate}
                      onChange={(e) =>
                        handleChange("appointmentDate", e.target.value)
                      }
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                      required
                    />

                    {formData.appointmentDate && (
                      <div className="mt-6 p-6 bg-purple-50 rounded-2xl animate-scale-in">
                        <p className="text-sm text-purple-600 font-medium mb-1">
                          Ngày đã chọn
                        </p>
                        <p className="text-xl font-semibold text-purple-900">
                          {new Date(
                            formData.appointmentDate
                          ).toLocaleDateString("vi-VN", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Choose Time */}
              {currentStep === 3 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <Clock className="w-7 h-7 text-purple-600" />
                    Chọn giờ khám
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Chọn khung giờ phù hợp với bạn
                  </p>

                  <div className="mb-8">
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleChange("appointmentTime", time)}
                          className={`time-slot px-4 py-4 rounded-xl border-2 font-semibold transition-all ${
                            formData.appointmentTime === time
                              ? "selected border-transparent"
                              : "border-gray-200 bg-white text-gray-700 hover:border-purple-300"
                          }`}
                        >
                          <div className="code text-sm">{time}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.appointmentTime && (
                    <div className="p-6 bg-linear-to-br from-purple-50 to-fuchsia-50 rounded-2xl border-2 border-purple-200 animate-scale-in">
                      <h3 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                        Thông tin đặt lịch
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Bác sĩ:</span>
                          <span className="font-semibold text-gray-900">
                            {
                              doctors.find((d) => d.id === formData.doctorId)
                                ?.name
                            }
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Chuyên khoa:</span>
                          <span className="font-semibold text-gray-900">
                            {
                              doctors.find((d) => d.id === formData.doctorId)
                                ?.specialty
                            }
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Ngày khám:</span>
                          <span className="font-semibold text-gray-900 code">
                            {new Date(
                              formData.appointmentDate
                            ).toLocaleDateString("vi-VN")}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Giờ khám:</span>
                          <span className="font-semibold text-gray-900 code">
                            {formData.appointmentTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all"
                  >
                    ← Quay lại
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    disabled={!canProceed()}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                      canProceed()
                        ? "bg-linear-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Tiếp tục
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canProceed() || isSubmitting}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                      canProceed() && !isSubmitting
                        ? "bg-linear-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Đang xử lý...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Xác nhận đặt lịch
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 animate-slide-in-up">
          {[
            { icon: "⚡", title: "Nhanh chóng", desc: "Chỉ 3 bước đơn giản" },
            { icon: "🔒", title: "An toàn", desc: "Bảo mật thông tin" },
            {
              icon: "✅",
              title: "Xác nhận ngay",
              desc: "Nhận thông báo tức thì"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
