import React from "react";
import {
  HeartPulse,
  Brain,
  Stethoscope,
  Baby,
  Activity,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Khám tổng quát",
    description:
      "Kiểm tra sức khỏe định kỳ và tư vấn tình trạng sức khỏe toàn diện.",
    icon: Stethoscope
  },
  {
    title: "Tim mạch",
    description: "Theo dõi và điều trị các bệnh lý liên quan đến tim mạch.",
    icon: HeartPulse
  },
  {
    title: "Thần kinh",
    description: "Khám và tư vấn các vấn đề về thần kinh và não bộ.",
    icon: Brain
  },
  {
    title: "Nhi khoa",
    description: "Dịch vụ chăm sóc sức khỏe dành cho trẻ em và trẻ sơ sinh.",
    icon: Baby
  },
  {
    title: "Xét nghiệm",
    description:
      "Hệ thống xét nghiệm hiện đại với kết quả nhanh chóng và chính xác.",
    icon: Activity
  },
  {
    title: "Bảo hiểm y tế",
    description: "Hỗ trợ thanh toán và tư vấn quyền lợi bảo hiểm y tế.",
    icon: ShieldCheck
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-r from-rose-500 via-pink-500 to-orange-400 text-white pt-32 pb-24">
        {/* GRID BACKGROUND */}
        <div
          className="
            absolute inset-0
            bg-[repeating-linear-gradient(0deg,transparent,transparent_39px,rgba(255,255,255,0.03)_39px,rgba(255,255,255,0.03)_40px),repeating-linear-gradient(90deg,transparent,transparent_39px,rgba(255,255,255,0.03)_39px,rgba(255,255,255,0.03)_40px)]
          "
        />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6">
            <HeartPulse className="w-5 h-5" />
            <span className="text-sm font-medium">
              Dịch vụ chăm sóc sức khỏe hiện đại
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Dịch vụ y tế chất lượng cao
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-white/90 leading-relaxed">
            HealthCare+ cung cấp hệ thống đặt lịch khám bệnh nhanh chóng, chuyên
            nghiệp và thuận tiện giúp người dùng dễ dàng tiếp cận dịch vụ y tế.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* TITLE */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-4">
              OUR SERVICES
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-5">
              Dịch vụ nổi bật
            </h2>

            <p className="max-w-2xl mx-auto text-slate-600 text-lg">
              Hệ thống hỗ trợ nhiều chuyên khoa và dịch vụ khám chữa bệnh dành
              cho mọi đối tượng người dùng.
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    bg-white
                    rounded-4xl
                    p-8
                    border border-slate-100
                    shadow-sm
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-linear-to-br
                      from-rose-100
                      to-orange-100
                      flex items-center justify-center
                      mb-6
                      group-hover:scale-110
                      transition-transform
                    "
                  >
                    <Icon className="w-8 h-8 text-rose-600" />
                  </div>

                  {/* CONTENT */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* BUTTON */}
                  <button
                    className="
                      inline-flex items-center gap-2
                      text-rose-600
                      font-semibold
                      hover:gap-3
                      transition-all
                    "
                  >
                    Xem thêm
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div
            className="
              relative overflow-hidden
              rounded-[40px]
              bg-linear-to-r from-slate-900 to-slate-800
              px-8 py-14 lg:px-16
              text-center text-white
            "
          >
            {/* GRID */}
            <div
              className="
                absolute inset-0
                bg-[repeating-linear-gradient(0deg,transparent,transparent_39px,rgba(255,255,255,0.03)_39px,rgba(255,255,255,0.03)_40px),repeating-linear-gradient(90deg,transparent,transparent_39px,rgba(255,255,255,0.03)_39px,rgba(255,255,255,0.03)_40px)]
              "
            />

            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold mb-5">
                Đặt lịch khám ngay hôm nay
              </h2>

              <p className="max-w-2xl mx-auto text-slate-300 text-lg mb-8">
                Trải nghiệm hệ thống đặt lịch khám bệnh hiện đại, nhanh chóng và
                tiện lợi với HealthCare+.
              </p>

              <button
                className="
                  px-7 py-4
                  rounded-2xl
                  bg-linear-to-r
                  from-rose-500
                  to-orange-400
                  hover:opacity-90
                  font-semibold
                  shadow-lg shadow-rose-500/20
                  transition-all
                "
              >
                Đặt lịch ngay
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
