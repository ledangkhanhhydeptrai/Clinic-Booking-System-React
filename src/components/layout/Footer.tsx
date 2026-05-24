import React from "react";
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send
} from "lucide-react";
import Button from "../common/Button";

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-linear-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
      {/* Main Footer Content */}
      <div className="mt-1 px-1 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2.5 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-linear-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                  HealthCare+
                </span>
                <span className="text-[9px] text-stone-400 tracking-wide">
                  Your Health Partner
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Chăm sóc sức khỏe toàn diện cho bạn và gia đình với đội ngũ y bác
              sĩ chuyên nghiệp, tận tâm.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-3">
              <a
                href="/"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-linear-to-br hover:from-rose-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="/"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-linear-to-br hover:from-rose-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="/"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-linear-to-br hover:from-rose-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 group"
              >
                <Twitter className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="/"
                aria-label="Youtube"
                className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-linear-to-br hover:from-rose-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 group"
              >
                <Youtube className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center">
              <span className="w-1 h-5 bg-linear-to-b from-rose-500 to-orange-500 rounded-full mr-2" />
              Liên kết nhanh
            </h3>
            <ul className="space-y-3">
              {[
                "Trang chủ",
                "Về chúng tôi",
                "Dịch vụ",
                "Bác sĩ",
                "Tin tức",
                "Liên hệ"
              ].map(item =>
                <li key={item}>
                  <a
                    href="/"
                    className="text-stone-400 hover:text-rose-400 text-sm transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-linear-to-r from-rose-500 to-orange-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full" />
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center">
              <span className="w-1 h-5 bg-linear-to-b from-rose-500 to-orange-500 rounded-full mr-2" />
              Dịch vụ
            </h3>
            <ul className="space-y-3">
              {[
                "Đặt lịch khám",
                "Tư vấn trực tuyến",
                "Xét nghiệm",
                "Khám tổng quát",
                "Chăm sóc răng miệng",
                "Sức khỏe tim mạch"
              ].map(item =>
                <li key={item}>
                  <a
                    href="/"
                    className="text-stone-400 hover:text-rose-400 text-sm transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-linear-to-r from-rose-500 to-orange-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full" />
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center">
              <span className="w-1 h-5 bg-linear-to-b from-rose-500 to-orange-500 rounded-full mr-2" />
              Liên hệ
            </h3>

            {/* Contact Details */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span className="text-stone-400">
                  123 Đường ABC, Quận 1, TP.HCM
                </span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span className="text-stone-400">1900 xxxx</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span className="text-stone-400">info@healthcare.vn</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span className="text-stone-400">
                  T2-T6: 8:00 - 20:00<br />
                  T7-CN: 8:00 - 17:00
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">
                Đăng ký nhận tin
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email của bạn"
                  className="w-full px-4 py-2.5 pr-11 bg-stone-800 border border-stone-700 rounded-lg text-white text-sm placeholder-stone-500 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all"
                  required
                />
                <Button
                  isLoading={false}
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-linear-to-br from-rose-500 to-orange-500 rounded-md flex items-center justify-center hover:shadow-lg transition-all duration-300"
                >
                  <Send className="w-4 h-4 text-white" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-400 text-sm text-center md:text-left">
              © 2024 HealthCare+. Tất cả quyền được bảo lưu.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <a
                href="/"
                className="text-stone-400 hover:text-rose-400 text-sm transition-colors"
              >
                Chính sách bảo mật
              </a>
              <a
                href="/"
                className="text-stone-400 hover:text-rose-400 text-sm transition-colors"
              >
                Điều khoản sử dụng
              </a>
              <a
                href="/"
                className="text-stone-400 hover:text-rose-400 text-sm transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="h-1 bg-linear-to-r from-rose-500 via-orange-500 to-rose-500" />
    </footer>
  );
};

export default Footer;
