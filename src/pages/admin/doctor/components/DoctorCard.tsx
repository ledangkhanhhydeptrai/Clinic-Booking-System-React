import React from "react";
import type { DataDoctor } from "../../../../features/doctor/doctorSaga";
import Button from "../../../../components/common/Button";
import { Edit2, MoreVertical, Phone, TrashIcon } from "lucide-react";
interface DoctorCardProps {
  doctor: DataDoctor;
  onEdit: (doctor: DataDoctor) => void;
  onDelete: (id: string) => void;
}
const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  onEdit,
  onDelete
}) => {
  const getAvatarUrl = (id: string) => {
    const seed = id.charCodeAt(0) % 70;
    return `https://i.pravatar.cc/150?img=${seed}`;
  };
  const getSpecialtyColor = (specialty: string) => {
    const colors = [
      "bg-blue-100 text-blue-700 border-blue-200",
      "bg-purple-100 text-purple-700 border-purple-200",
      "bg-emerald-100 text-emerald-700 border-emerald-200",
      "bg-amber-100 text-amber-700 border-amber-200",
      "bg-rose-100 text-rose-700 border-rose-200",
      "bg-cyan-100 text-cyan-700 border-cyan-200"
    ];
    const index =
      specialty.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      colors.length;
    return colors[index];
  };
  return (
    <div className="glass-effect rounded-2xl p-6 shadow-lg card-hover animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="relative">
            <img
              src={getAvatarUrl(doctor.id)}
              alt={doctor.name}
              className="w-16 h-16 rounded-xl object-cover ring-4 ring-white shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {doctor.name}
            </h3>
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${getSpecialtyColor(
                doctor.specialty
              )}`}
            >
              {doctor.specialty}
            </div>
          </div>
        </div>
        <Button
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          isLoading={false}
          onClick={() => {}}
        >
          <MoreVertical size={18} className="text-slate-400" />
        </Button>
      </div>
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <Phone size={16} className="text-slate-400 shrink-0" />
          <span>{doctor.phone}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={() => onEdit(doctor)}
          isLoading={false}
          className="flex-1 items-center justify-center px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium"
        >
          <Edit2 size={16} /> Sửa
        </Button>
        <Button
          onClick={() => onDelete(doctor.id)}
          isLoading={false}
          className="flex-1 items-center justify-center px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium"
        >
          <TrashIcon size={16} />
          Xóa
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
