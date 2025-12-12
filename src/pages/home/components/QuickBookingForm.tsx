import React from "react";
import { Search, Calendar, Clock, CalendarIcon } from "lucide-react";
import Input from "../../../components/common/Input";

const QuickBookingForm: React.FC = () => {
  return (
    <div className="relative animate-fadeInUp delay-200">
      <div className="relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
          <h3 className="text-2xl font-bold text-stone-900">Đặt lịch nhanh</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Chuyên khoa
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Tìm chuyên khoa..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-xl focus:border-rose-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Ngày khám
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                <Input
                  icon={<CalendarIcon />}
                  type="date"
                  className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-xl focus:border-rose-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-semibold text-stone-700 mb-2"
                htmlFor="appointment-time"
              >
                Giờ khám
              </label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                <select
                  id="appointment-time"
                  className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-xl focus:border-rose-500 focus:outline-none transition-colors appearance-none"
                >
                  <option>08:00 - 09:00</option>
                  <option>09:00 - 10:00</option>
                  <option>10:00 - 11:00</option>
                  <option>14:00 - 15:00</option>
                  <option>15:00 - 16:00</option>
                </select>
              </div>
            </div>

            <button className="w-full py-4 bg-linear-to-r from-rose-500 to-orange-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Xác nhận đặt lịch
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-200 rounded-full opacity-60 blur-2xl animate-float"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-200 rounded-full opacity-60 blur-2xl" />
    </div>
  );
};

export default QuickBookingForm;
