import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection:React.FC = () => {
  const testimonials = [
    {
      name: "Nguyễn Thị Mai",
      role: "Bệnh nhân",
      text: "Đặt lịch rất dễ dàng, bác sĩ tận tâm và chu đáo. Tôi rất hài lòng với dịch vụ tại đây.",
      rating: 5
    },
    {
      name: "Trần Văn Nam",
      role: "Bệnh nhân",
      text: "Hệ thống đặt lịch tiện lợi, không phải chờ đợi lâu. Phòng khám sạch sẽ và hiện đại.",
      rating: 5
    },
    {
      name: "Lê Thị Hoa",
      role: "Bệnh nhân",
      text: "Đội ngũ y bác sĩ chuyên nghiệp, thái độ thân thiện. Tôi sẽ giới thiệu cho bạn bè.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
            Đánh giá
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mt-6 mb-4">
            Bệnh nhân nói gì về chúng tôi
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="testimonial-card p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-stone-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-stone-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;