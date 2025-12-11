import Button from "../../../../components/common/Button";
import { UserPlus } from "lucide-react";

export default function DoctorHeader({
  onAddDoctor
}: {
  onAddDoctor: () => void;
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">
          Quản lý bác sĩ
        </h1>
        <p className="text-slate-600 text-sm">
          Hệ thống quản lý và theo dõi đội ngũ y bác sĩ
        </p>
      </div>
      <Button
        isLoading={false}
        onClick={onAddDoctor}
        className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
      >
        <UserPlus size={20} />
        <span className="font-semibold">Thêm bác sĩ</span>
      </Button>
    </div>
  );
}
