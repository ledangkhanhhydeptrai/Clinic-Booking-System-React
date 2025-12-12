import { Search, SearchIcon } from "lucide-react";
import React from "react";
import Input from "../../../../components/common/Input";
import Label from "../../../../components/common/Label";

interface DoctorFiltersProps {
  searchTerm: string;
  filterSpecialty: string;
  specialties: string[];
  onSearchChange: (value: string) => void;
  onSpecialtyChange: (value: string) => void;
}

const DoctorFilters: React.FC<DoctorFiltersProps> = ({
  searchTerm,
  filterSpecialty,
  specialties,
  onSearchChange,
  onSpecialtyChange
}) => {
  return (
    <div className="glass-effect rounded-2xl p-6 shadow-lg animate-fade-in">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <Input
            icon={<SearchIcon size={18} />}
            type="text"
            placeholder="Tìm kiếm theo tên, chuyên khoa, số điện thoại..."
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
          />
        </div>
        <div className="relative">
          <Label htmlFor="specialty-filter">Lọc theo chuyên khoa</Label>
          <select
            id="specialty-filter"
            name="specialty"
            title="Filter by specialty"
            value={filterSpecialty}
            onChange={e => onSpecialtyChange(e.target.value)}
            className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
          >
            <option value="all">Tất cả chuyên môn</option>
            {specialties.map(specialty =>
              <option value={specialty} key={specialty}>
                {specialty}
              </option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DoctorFilters;
