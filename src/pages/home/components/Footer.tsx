import React from "react";
import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer:React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">HealthCare+</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Chăm sóc sức khỏe toàn diện cho bạn và gia đình với đội ngũ y bác
              sĩ chuyên nghiệp.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Dịch vụ</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Đặt lịch khám
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Tư vấn trực tuyến
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Xét nghiệm
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Khám tổng quát
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Về chúng tôi</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Đội ngũ bác sĩ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Tin tức
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-stone-400">
                <MapPin className="w-5 h-5" />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
              <li className="flex items-center gap-2 text-stone-400">
                <Phone className="w-5 h-5" />
                <span>1900 xxxx</span>
              </li>
              <li className="flex items-center gap-2 text-stone-400">
                <Mail className="w-5 h-5" />
                <span>info@healthcare.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-stone-400">
          <p>© 2024 HealthCare+. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;