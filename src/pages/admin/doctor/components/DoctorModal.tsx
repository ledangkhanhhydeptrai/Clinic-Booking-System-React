import React from "react";
import Button from "../../../../components/common/Button";
import { PhoneCall, Stethoscope, User, X } from "lucide-react";
import Label from "../../../../components/common/Label";
import Input from "../../../../components/common/Input";
import type { DataDoctor } from "../../../../features/doctor/useDoctors";
export default function DoctorModal({
  isOpen,
  editingDoctor,
  name,
  setName,
  specialty,
  setSpecialty,
  phone,
  setPhone,
  onClose,
  onSubmit
}: {
  isOpen: boolean;
  editingDoctor: DataDoctor | null;
  name: string;
  setName: (value: string) => void;
  specialty: string;
  setSpecialty: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-effect rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 glass-effect">
          <h2 className="text-2xl font-display font-bold text-slate-900">
            {editingDoctor ? "Sửa thông tin bác sĩ" : "Thêm bác sĩ mới"}
          </h2>
          <Button
            onClick={onClose}
            isLoading={false}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-slate-500" />
          </Button>
        </div>
        <div className="p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <Label htmlFor="modal-name">Họ và tên *</Label>
              <Input
                icon={
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                }
                id="modal-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập họ và tên"
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
              />
            </div>
            <div>
              <Label htmlFor="modal-specialty">Chuyên khoa *</Label>
              <Input
                icon={
                  <Stethoscope
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                }
                id="modal-specialty"
                type="text"
                required
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                placeholder="Nhập chuyên khoa"
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
              />
            </div>
            <div>
              <Label htmlFor="modal-phone">Số điện thoại *</Label>
              <Input
                icon={
                  <PhoneCall
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                }
                id="modal-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Nhập số điện thoại"
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                isLoading={false}
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all duration-300 font-semibold"
              >
                Hủy
              </Button>
              <Button
                type="submit"
                isLoading={false}
                className="flex-1 px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/30"
              >
                {editingDoctor ? "Cập nhật" : "Thêm bác sĩ"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
