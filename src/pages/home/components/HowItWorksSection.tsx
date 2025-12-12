import React from "react";

const HowItWorksSection:React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Chọn chuyên khoa",
      desc: "Lựa chọn bác sĩ và chuyên khoa phù hợp"
    },
    {
      step: "02",
      title: "Đặt lịch hẹn",
      desc: "Chọn thời gian thuận tiện cho bạn"
    },
    {
      step: "03",
      title: "Xác nhận",
      desc: "Nhận xác nhận qua email hoặc SMS"
    },
    {
      step: "04",
      title: "Khám bệnh",
      desc: "Đến phòng khám đúng giờ hẹn"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-rose-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-white text-rose-700 rounded-full text-sm font-semibold shadow-sm">
            Quy trình đặt lịch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mt-6 mb-4">
            Chỉ 4 bước đơn giản
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-linear-to-br from-rose-500 to-orange-500 rounded-full blur-xl opacity-30"></div>
                  <div className="relative w-20 h-20 bg-linear-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-stone-600">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-linear-to-r from-rose-300 to-orange-300 transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;