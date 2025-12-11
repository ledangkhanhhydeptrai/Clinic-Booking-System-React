import { Search } from "lucide-react";
import React from "react";

const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-20 glass-effect rounded-2xl">
      <div className="text-6xl mb-4">
        <Search size={18} />
      </div>
      <p className="text-xl font-semibold text-slate-600 mb-2">
        Không tìm thấy bác sĩ
      </p>
      <p className="text-slate-500">
        Thử thay đổi toàn bộ lọc hoặc tìm kiếm của bạn
      </p>
    </div>
  );
};

export default EmptyState;
