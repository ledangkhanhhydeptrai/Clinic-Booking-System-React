import React from "react";
import {
  ShieldCheck,
  CalendarPlus,
  BookOpen,
  Search,
  CalendarDays,
  UserCheck,
  ClipboardList,
  Check,
  CalendarClock,
  Clock
} from "lucide-react";

const GuidePage: React.FC = () => {
  return (
    <div className="bg-[#f0ede8] min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1c1b18] px-6 py-16 md:px-10">
        {/* grid background */}
        <div className="absolute inset-0 opacity-100" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="max-w-xl">
            {/* badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              <span className="text-xs tracking-wide text-white/70">
                Hướng dẫn sử dụng hệ thống
              </span>
            </div>

            {/* title */}
            <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Đặt lịch khám
              <br />
              <span className="text-[#f97c6b]">nhanh chóng</span>
              <br />
              và dễ dàng
            </h1>

            {/* subtitle */}
            <p className="mb-8 max-w-md text-sm leading-7 text-white/50">
              HealthCare+ giúp bạn quản lý lịch khám, đặt lịch trực tuyến và
              theo dõi thông tin sức khỏe một cách tiện lợi.
            </p>

            {/* buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-xl bg-[#b83a2e] px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#a33428]">
                <CalendarPlus className="h-4 w-4" />
                Bắt đầu ngay
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white">
                <BookOpen className="h-4 w-4" />
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#b83a2e]">
              Quy trình sử dụng
            </p>

            <h2 className="mb-3 text-3xl font-semibold text-[#1c1b18]">
              Chỉ với vài bước đơn giản
            </h2>

            <p className="max-w-xl text-sm leading-7 text-[#7a7770]">
              Hệ thống được thiết kế tối ưu để người dùng có thể thao tác nhanh
              chóng và dễ hiểu.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                title: "Tìm kiếm dịch vụ",
                desc: "Tìm bác sĩ, chuyên khoa hoặc dịch vụ phù hợp với nhu cầu của bạn.",
                icon: <Search className="h-5 w-5 text-[#b83a2e]" />
              },
              {
                number: "02",
                title: "Đặt lịch khám",
                desc: "Chọn ngày giờ phù hợp và đặt lịch khám trực tuyến nhanh chóng.",
                icon: <CalendarDays className="h-5 w-5 text-[#b83a2e]" />
              },
              {
                number: "03",
                title: "Xác nhận lịch hẹn",
                desc: "Hệ thống gửi thông báo xác nhận lịch hẹn qua tài khoản của bạn.",
                icon: <UserCheck className="h-5 w-5 text-[#b83a2e]" />
              },
              {
                number: "04",
                title: "Theo dõi lịch khám",
                desc: "Quản lý lịch hẹn, xem trạng thái và lịch sử khám bệnh dễ dàng.",
                icon: <ClipboardList className="h-5 w-5 text-[#b83a2e]" />
              }
            ].map((step, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-[#e8e4dd] bg-white p-6 transition hover:border-[#c8c4bc]"
              >
                <div className="mb-4 text-4xl font-semibold leading-none text-[#f0ede8]">
                  {step.number}
                </div>

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#fce8e6]">
                  {step.icon}
                </div>

                <h3 className="mb-2 text-sm font-semibold text-[#1c1b18]">
                  {step.title}
                </h3>

                <p className="text-sm leading-6 text-[#7a7770]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES + DASHBOARD */}
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#b83a2e]">
              Tính năng nổi bật
            </p>

            <h2 className="mb-4 text-3xl font-semibold leading-tight text-[#1c1b18]">
              Hệ thống quản lý
              <br />
              chăm sóc sức khỏe hiện đại
            </h2>

            <p className="mb-8 max-w-lg text-sm leading-7 text-[#7a7770]">
              Nền tảng giúp người dùng đặt lịch, theo dõi lịch hẹn và quản lý
              thông tin y tế thuận tiện hơn.
            </p>

            <div className="space-y-3">
              {[
                "Đặt lịch khám trực tuyến 24/7",
                "Quản lý lịch hẹn cá nhân",
                "Theo dõi trạng thái lịch khám",
                "Bảo mật thông tin người dùng",
                "Giao diện dễ sử dụng trên mọi thiết bị",
                "Hỗ trợ nhanh chóng và tiện lợi"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-[#e8e4dd] bg-white px-4 py-3 transition hover:border-[#d0ccc4]"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eaf3de]">
                    <Check className="h-4 w-4 text-[#3b6d11]" />
                  </div>

                  <span className="text-sm text-[#3a3834]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="rounded-3xl border border-[#e8e4dd] bg-white p-6 shadow-sm">
            {/* header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-[#1c1b18]">
                  Dashboard
                </h3>

                <p className="mt-1 text-sm text-[#a8a49d]">
                  Quản lý lịch hẹn thông minh
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fce8e6]">
                <CalendarClock className="h-6 w-6 text-[#b83a2e]" />
              </div>
            </div>

            {/* stats */}
            <div className="mb-6 grid grid-cols-3 gap-3">
              {[
                { number: "3", label: "Lịch sắp tới" },
                { number: "12", label: "Đã khám" },
                { number: "1", label: "Chờ xác nhận" }
              ].map((stat, index) => (
                <div key={index} className="rounded-xl bg-[#f8f6f3] p-4">
                  <div className="text-2xl font-semibold text-[#1c1b18]">
                    {stat.number}
                  </div>

                  <div className="mt-1 text-xs text-[#a8a49d]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* appointments */}
            <div className="space-y-3">
              {[
                {
                  title: "Khám tổng quát",
                  info: "Thứ 2 · 08:00 AM · BS. Minh Tuấn",
                  status: "Đã xác nhận",
                  statusClass: "bg-[#eaf3de] text-[#3b6d11] border-[#c0dd97]"
                },
                {
                  title: "Tim mạch",
                  info: "Thứ 4 · 02:00 PM · BS. Lan Anh",
                  status: "Chờ xác nhận",
                  statusClass: "bg-[#faeeda] text-[#854f0b] border-[#fac775]"
                },
                {
                  title: "Nha khoa định kỳ",
                  info: "Thứ 6 · 10:30 AM · BS. Hải Nam",
                  status: "Sắp tới",
                  statusClass: "bg-[#e6f1fb] text-[#185fa5] border-[#b5d4f4]"
                }
              ].map((appt, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl border border-[#ede9e0] bg-[#f8f6f3] p-4"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-[#1c1b18]">
                      {appt.title}
                    </h4>

                    <div className="mt-1 flex items-center gap-1 text-xs text-[#a8a49d]">
                      <Clock className="h-3 w-3" />
                      {appt.info}
                    </div>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${appt.statusClass}`}
                  >
                    {appt.status}
                  </span>
                </div>
              ))}
            </div>

            {/* button */}
            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#b83a2e] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#a33428]">
              <CalendarPlus className="h-4 w-4" />
              Đặt lịch khám ngay
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidePage;
