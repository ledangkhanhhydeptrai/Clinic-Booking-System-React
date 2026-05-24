import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
  HeartHandshake,
  ShieldCheck,
  Headphones,
  Lock,
  Map
} from "lucide-react";

const topics = ["Đặt lịch", "Tư vấn dịch vụ", "Kỹ thuật", "Khác"];

const ContactPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = React.useState("Đặt lịch");

  return (
    <div className="min-h-screen bg-[#f0ede8]">
      {/* ── HERO ── */}
      <section className="bg-[#1c1b18] pt-32 pb-14 text-center relative overflow-hidden -mt-10">
        {/* subtle grid overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_39px,rgba(255,255,255,0.03)_39px,rgba(255,255,255,0.03)_40px),repeating-linear-gradient(90deg,transparent,transparent_39px,rgba(255,255,255,0.03)_39px,rgba(255,255,255,0.03)_40px)]" />

        <div className="relative z-10 max-w-2xl mx-auto px-4">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/8 mb-5">
            <HeartHandshake className="w-[15px] h-[15px] text-[#f97c6b]" />
            <span className="text-[12px] text-white/80 tracking-wide">
              Chúng tôi luôn sẵn sàng hỗ trợ
            </span>
          </div>

          <h1 className="text-[36px] font-semibold text-white leading-tight tracking-tight mb-3 font-serif">
            Liên hệ với <span className="text-[#f97c6b]">HealthCare+</span>
          </h1>

          <p className="text-[14px] text-white/60 leading-relaxed mb-7">
            Cần hỗ trợ đặt lịch, tư vấn dịch vụ hoặc gặp sự cố? Đội ngũ của
            chúng tôi luôn sẵn sàng lắng nghe.
          </p>

          {/* chips */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {[
              { icon: Clock3, label: "Phản hồi trong 24h" },
              { icon: ShieldCheck, label: "Bảo mật thông tin" },
              { icon: Headphones, label: "Hỗ trợ 24/7" }
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-[12px] text-white/70"
              >
                <Icon className="w-3.5 h-3.5 text-emerald-300" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="px-4 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* ── LEFT: contact info ── */}
          <div className="flex flex-col gap-3">
            <div className="mb-1">
              <p className="text-[10.5px] text-rose-700 uppercase tracking-widest font-medium mb-1">
                Kênh liên hệ
              </p>
              <h2 className="text-[22px] font-semibold text-[#1c1b18] tracking-tight leading-snug font-serif">
                Thông tin liên hệ
              </h2>
              <p className="text-[13px] text-[#7a7770] leading-relaxed mt-1">
                Đội ngũ hoạt động 24/7, sẵn sàng hỗ trợ mọi vấn đề của bạn.
              </p>
            </div>

            {[
              {
                icon: Phone,
                bg: "bg-rose-50",
                color: "text-rose-700",
                title: "Hotline",
                value: "+84 987 654 321",
                hint: "Hỗ trợ đặt lịch và tư vấn"
              },
              {
                icon: Mail,
                bg: "bg-blue-50",
                color: "text-blue-700",
                title: "Email",
                value: "healthcare.support@gmail.com",
                hint: "Phản hồi trong vòng 24 giờ"
              },
              {
                icon: MapPin,
                bg: "bg-amber-50",
                color: "text-amber-700",
                title: "Địa chỉ",
                value: "123 Nguyễn Văn Linh, Q.7, TP.HCM",
                hint: "HealthCare+ Medical Center"
              },
              {
                icon: Clock3,
                bg: "bg-emerald-50",
                color: "text-emerald-700",
                title: "Giờ làm việc",
                value: "Thứ 2 – Chủ nhật",
                hint: "07:00 AM – 09:00 PM"
              }
            ].map(({ icon: Icon, bg, color, title, value, hint }) => (
              <div
                key={title}
                className="bg-white border border-[#e8e4dd] rounded-2xl p-4 flex items-start gap-3 hover:border-[#d0ccc4] transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}
                >
                  <Icon className={`w-[18px] h-[18px] ${color}`} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1c1b18]">
                    {title}
                  </p>
                  <p className="text-[13px] text-[#4a4845] mt-0.5">{value}</p>
                  <p className="text-[11.5px] text-[#a8a49d] mt-0.5">{hint}</p>
                </div>
              </div>
            ))}

            {/* map stub */}
            <div className="bg-[#e8e4dd] border border-[#dedad4] rounded-2xl h-24 flex items-center justify-center gap-2 text-[#a8a49d]">
              <Map className="w-5 h-5 text-[#c0bbb4]" />
              <span className="text-[13px]">
                Bản đồ · 123 Nguyễn Văn Linh, Q.7
              </span>
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className="bg-white border border-[#e8e4dd] rounded-2xl p-7">
            <div className="mb-5">
              <h2 className="text-[20px] font-semibold text-[#1c1b18] tracking-tight font-serif">
                Gửi tin nhắn
              </h2>
              <p className="text-[12.5px] text-[#a8a49d] mt-1 leading-relaxed">
                Để lại thông tin, chúng tôi sẽ phản hồi sớm nhất có thể.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* name + phone */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-[#5a5855]">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3 py-2.5 border border-[#e4e0d8] rounded-[10px] text-[13px] text-[#1c1b18] bg-[#faf9f7] placeholder:text-[#bbb8b2] focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-[#5a5855]">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    placeholder="0987 654 321"
                    className="w-full px-3 py-2.5 border border-[#e4e0d8] rounded-[10px] text-[13px] text-[#1c1b18] bg-[#faf9f7] placeholder:text-[#bbb8b2] focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 transition-all"
                  />
                </div>
              </div>

              {/* email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-[#5a5855]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-3 py-2.5 border border-[#e4e0d8] rounded-[10px] text-[13px] text-[#1c1b18] bg-[#faf9f7] placeholder:text-[#bbb8b2] focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 transition-all"
                />
              </div>

              {/* topic pills */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-[#5a5855]">
                  Chủ đề
                </label>
                <div className="flex gap-2 flex-wrap">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTopic(t)}
                      className={`px-3 py-1.5 rounded-full text-[12px] border transition-all ${
                        selectedTopic === t
                          ? "bg-rose-700 text-white border-rose-700"
                          : "bg-[#faf9f7] text-[#6b6860] border-[#e4e0d8] hover:border-rose-300 hover:text-rose-700"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-[#5a5855]">
                  Nội dung
                </label>
                <textarea
                  rows={5}
                  placeholder="Nhập nội dung cần hỗ trợ..."
                  className="w-full px-3 py-2.5 border border-[#e4e0d8] rounded-[10px] text-[13px] text-[#1c1b18] bg-[#faf9f7] placeholder:text-[#bbb8b2] focus:outline-none focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-100 resize-none transition-all"
                />
              </div>

              {/* submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-rose-700 hover:bg-rose-800 hover:-translate-y-px active:translate-y-0 text-white text-[13.5px] font-medium rounded-[10px] transition-all"
              >
                <Send className="w-4 h-4" />
                Gửi liên hệ
              </button>

              {/* trust note */}
              <div className="flex items-center justify-center gap-1.5 text-[11.5px] text-[#b0aca4]">
                <Lock className="w-3 h-3 text-emerald-400" />
                Thông tin của bạn được bảo mật hoàn toàn
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
