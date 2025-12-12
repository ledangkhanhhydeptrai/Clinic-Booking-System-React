import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-rose-500 to-orange-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Sẵn sàng chăm sóc sức khỏe của bạn?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Đặt lịch khám với bác sĩ ngay hôm nay và trải nghiệm dịch vụ chăm sóc
          sức khỏe tốt nhất
        </p>
        <button className="px-10 py-4 bg-white text-rose-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all">
          Đặt lịch ngay
        </button>
      </div>
    </section>
  );
};

export default CTASection;
