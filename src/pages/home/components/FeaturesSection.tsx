import React from "react";
import { Calendar, Award, Clock } from "lucide-react";

const FeaturesSection:React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: "Đặt lịch dễ dàng",
      desc: "Đặt lịch khám bệnh mọi lúc, mọi nơi chỉ với vài thao tác đơn giản",
      color: "from-rose-500 to-orange-500"
    },
    {
      icon: Award,
      title: "Bác sĩ chuyên nghiệp",
      desc: "Đội ngũ bác sĩ giàu kinh nghiệm, tận tâm và được đào tạo bài bản",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Clock,
      title: "Tiết kiệm thời gian",
      desc: "Không cần chờ đợi lâu, được khám đúng giờ đã hẹn",
      color: "from-orange-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mt-6 mb-4">
            Dịch vụ chăm sóc tốt nhất
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp dịch vụ y tế chất lượng cao với đội ngũ bác sĩ
            giàu kinh nghiệm
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeInUp"
            >
              <div
                className={`w-16 h-16 bg-linear-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;