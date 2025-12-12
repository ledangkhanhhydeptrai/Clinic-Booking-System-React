import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import QuickBookingForm from "./QuickBookingForm";

const HeroSection:React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 blob opacity-60 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 blob opacity-40" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInUp">
            <div className="inline-block">
              <span className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold">
                Đặt lịch nhanh chóng & Tiện lợi
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 leading-tight">
              Chăm sóc sức khỏe
              <span className="block gradient-text mt-2">Chỉ với 1 Click</span>
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed max-w-xl">
              Đặt lịch khám bệnh với các bác sĩ hàng đầu một cách nhanh chóng
              và dễ dàng. Chúng tôi kết nối bạn với đội ngũ y tế chất lượng
              cao.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-linear-to-r from-rose-500 to-orange-500 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Đặt lịch ngay</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white text-stone-700 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-stone-200">
                Tìm hiểu thêm
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-stone-600 mt-1">Bệnh nhân</div>
              </div>
              <div className="w-px h-12 bg-stone-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">200+</div>
                <div className="text-sm text-stone-600 mt-1">Bác sĩ</div>
              </div>
              <div className="w-px h-12 bg-stone-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-stone-600 mt-1">Hài lòng</div>
              </div>
            </div>
          </div>

          <QuickBookingForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;