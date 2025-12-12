import React from "react";
import { Heart, Star, User, Award, ChevronRight } from "lucide-react";

const SpecialtiesSection: React.FC = () => {
  const specialties = [
    {
      name: "Tim mạch",
      icon: Heart,
      patients: "2,500+",
      color: "bg-rose-100 text-rose-700"
    },
    {
      name: "Nha khoa",
      icon: Star,
      patients: "3,200+",
      color: "bg-amber-100 text-amber-700"
    },
    {
      name: "Da liễu",
      icon: User,
      patients: "1,800+",
      color: "bg-emerald-100 text-emerald-700"
    },
    {
      name: "Nội khoa",
      icon: Award,
      patients: "4,100+",
      color: "bg-blue-100 text-blue-700"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
            Chuyên khoa
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mt-6 mb-4">
            Các chuyên khoa nổi bật
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, idx) => (
            <div
              key={idx}
              className="specialty-card group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <div
                className={`w-14 h-14 ${specialty.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <specialty.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                {specialty.name}
              </h3>
              <p className="text-stone-600 text-sm mb-3">
                {specialty.patients} bệnh nhân
              </p>
              <div className="flex items-center text-rose-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                Xem chi tiết
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
