import React from "react";
import {
  Search,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  MoreVertical,
  Edit2,
  Trash2,
  X,
  UserPlus
} from "lucide-react";
import Button from "../../../components/common/Button";

export default function DoctorPage() {
  const [doctors] = React.useState([
    {
      id: 1,
      name: "Nguyễn Văn An",
      specialty: "Tim mạch",
      experience: "15 năm",
      phone: "0901234567",
      email: "nvan.an@hospital.vn",
      location: "Phòng khám A - Tầng 3",
      status: "active",
      patients: 245,
      rating: 4.8,
      avatar: "https://i.pravatar.cc/150?img=12",
      nextAvailable: "14:00 - Hôm nay"
    },
    {
      id: 2,
      name: "Trần Thị Bình",
      specialty: "Nhi khoa",
      experience: "12 năm",
      phone: "0912345678",
      email: "tran.binh@hospital.vn",
      location: "Phòng khám B - Tầng 2",
      status: "active",
      patients: 312,
      rating: 4.9,
      avatar: "https://i.pravatar.cc/150?img=5",
      nextAvailable: "09:00 - Mai"
    },
    {
      id: 3,
      name: "Lê Hoàng Cường",
      specialty: "Chấn thương chỉnh hình",
      experience: "10 năm",
      phone: "0923456789",
      email: "le.cuong@hospital.vn",
      location: "Phòng khám C - Tầng 4",
      status: "busy",
      patients: 189,
      rating: 4.7,
      avatar: "https://i.pravatar.cc/150?img=33",
      nextAvailable: "16:30 - Hôm nay"
    },
    {
      id: 4,
      name: "Phạm Thị Dung",
      specialty: "Da liễu",
      experience: "8 năm",
      phone: "0934567890",
      email: "pham.dung@hospital.vn",
      location: "Phòng khám D - Tầng 2",
      status: "active",
      patients: 276,
      rating: 4.9,
      avatar: "https://i.pravatar.cc/150?img=9",
      nextAvailable: "10:00 - Mai"
    },
    {
      id: 5,
      name: "Võ Minh Đức",
      specialty: "Thần kinh",
      experience: "18 năm",
      phone: "0945678901",
      email: "vo.duc@hospital.vn",
      location: "Phòng khám E - Tầng 5",
      status: "offline",
      patients: 198,
      rating: 4.8,
      avatar: "https://i.pravatar.cc/150?img=15",
      nextAvailable: "Thứ 2 - 08:00"
    },
    {
      id: 6,
      name: "Hoàng Thị Em",
      specialty: "Sản phụ khoa",
      experience: "14 năm",
      phone: "0956789012",
      email: "hoang.em@hospital.vn",
      location: "Phòng khám F - Tầng 3",
      status: "active",
      patients: 334,
      rating: 4.9,
      avatar: "https://i.pravatar.cc/150?img=20",
      nextAvailable: "13:00 - Hôm nay"
    }
  ]);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterSpecialty, setFilterSpecialty] = React.useState("all");
  const [filterStatus, setFilterStatus] = React.useState("all");
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [editingDoctor, setEditingDoctor] = React.useState<typeof doctors[0] | null>(null);

  const specialties = [
    "Tất cả",
    "Tim mạch",
    "Nhi khoa",
    "Chấn thương chỉnh hình",
    "Da liễu",
    "Thần kinh",
    "Sản phụ khoa"
  ];
  
  const statuses = [
    { value: "all", label: "Tất cả", color: "gray" },
    { value: "active", label: "Đang hoạt động", color: "emerald" },
    { value: "busy", label: "Đang bận", color: "amber" },
    { value: "offline", label: "Ngoại tuyến", color: "slate" }
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      filterSpecialty === "all" || doctor.specialty === filterSpecialty;
    const matchesStatus =
      filterStatus === "all" || doctor.status === filterStatus;
    return matchesSearch && matchesSpecialty && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      active: "bg-emerald-100 text-emerald-700 border-emerald-200",
      busy: "bg-amber-100 text-amber-700 border-amber-200",
      offline: "bg-slate-100 text-slate-600 border-slate-200"
    };
    return colors[status] || colors.offline;
  };

  const getStatusDot = (status: string) => {
    const colors: { [key: string]: string } = {
      active: "bg-emerald-500",
      busy: "bg-amber-500",
      offline: "bg-slate-400"
    };
    return colors[status] || colors.offline;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'DM Sans', sans-serif;
        }
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .animate-slide-in {
          animation: slideInFromTop 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-fade-in {
          animation: fadeInScale 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        
        .shimmer-border {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer 3s infinite;
        }
        
        .status-badge {
          position: relative;
          overflow: hidden;
        }
        
        .status-badge::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          transition: left 0.5s;
        }
        
        .status-badge:hover::after {
          left: 100%;
        }
      `}</style>

      {/* Header Section */}
      <div className="glass-effect border-b border-slate-200/50 animate-slide-in sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">
                Quản lý Bác sĩ
              </h1>
              <p className="text-slate-600 text-sm">
                Hệ thống quản lý và theo dõi đội ngũ y bác sĩ
              </p>
            </div>
            <Button
            isLoading={false}
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
            >
              <UserPlus size={20} />
              <span className="font-semibold">Thêm bác sĩ</span>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-4 gap-4">
            {[
              {
                label: "Tổng bác sĩ",
                value: doctors.length,
                color: "blue",
                icon: "👨‍⚕️"
              },
              {
                label: "Đang hoạt động",
                value: doctors.filter((d) => d.status === "active").length,
                color: "emerald",
                icon: "✅"
              },
              {
                label: "Đang bận",
                value: doctors.filter((d) => d.status === "busy").length,
                color: "amber",
                icon: "⏳"
              },
              {
                label: "Tổng bệnh nhân",
                value: doctors.reduce((sum, d) => sum + d.patients, 0),
                color: "purple",
                icon: "👥"
              }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass-effect rounded-xl p-4 card-hover shimmer-border"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                    <p className={`text-2xl font-bold text-${stat.color}-600`}>
                      {stat.value}
                    </p>
                  </div>
                  <div className="text-3xl">{stat.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="glass-effect rounded-2xl p-6 shadow-lg animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative col-span-1 md:col-span-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Tìm kiếm bác sĩ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Specialty Filter */}
            <div className="relative">
              <label htmlFor="specialty-filter" className="sr-only">
                Lọc theo chuyên khoa
              </label>
              <select
                id="specialty-filter"
                value={filterSpecialty}
                onChange={(e) => setFilterSpecialty(e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="all">Tất cả chuyên khoa</option>
                {specialties.slice(1).map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <label htmlFor="status-filter" className="sr-only">
                Lọc theo trạng thái
              </label>
              <select
                id="status-filter"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
              >
                {statuses.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor, idx) => (
            <div
              key={doctor.id}
              className="glass-effect rounded-2xl p-6 shadow-lg card-hover animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Doctor Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="relative">
                    <img
                      src={doctor.avatar}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-xl object-cover ring-4 ring-white shadow-md"
                    />
                    <div
                      className={`absolute -bottom-1 -right-1 w-5 h-5 ${getStatusDot(
                        doctor.status
                      )} rounded-full border-2 border-white`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {doctor.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-blue-600">
                        {doctor.specialty}
                      </span>
                    </div>
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border status-badge ${getStatusColor(
                        doctor.status
                      )}`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${getStatusDot(
                          doctor.status
                        )}`}
                      />
                      {statuses.find((s) => s.value === doctor.status)?.label}
                    </div>
                  </div>
                </div>
                <Button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" isLoading={false}>
                  <MoreVertical size={18} className="text-slate-400" />
                </Button>
              </div>

              {/* Doctor Info */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Award size={16} className="text-slate-400 shrink-0" />
                  <span>Kinh nghiệm: {doctor.experience}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin size={16} className="text-slate-400 shrink-0" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Phone size={16} className="text-slate-400 shrink-0" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Mail size={16} className="text-slate-400 shrink-0" />
                  <span className="truncate">{doctor.email}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-linear-to-br from-blue-50 to-blue-100/50 rounded-xl p-3 border border-blue-200/50">
                  <p className="text-xs text-blue-600 mb-1">Bệnh nhân</p>
                  <p className="text-xl font-bold text-blue-700">
                    {doctor.patients}
                  </p>
                </div>
                <div className="bg-linear-to-br from-amber-50 to-amber-100/50 rounded-xl p-3 border border-amber-200/50">
                  <p className="text-xs text-amber-600 mb-1">Đánh giá</p>
                  <p className="text-xl font-bold text-amber-700">
                    ⭐ {doctor.rating}
                  </p>
                </div>
              </div>

              {/* Next Available */}
              <div className="bg-slate-50 rounded-xl p-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-slate-500" />
                  <span className="text-slate-600">Khả dụng:</span>
                  <span className="font-semibold text-slate-900">
                    {doctor.nextAvailable}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  onClick={() => setEditingDoctor(doctor)}
                  isLoading={false}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105"
                >
                  <Edit2 size={16} />
                  Sửa
                </Button>
                <Button isLoading={false} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all duration-300 font-medium border-2 border-red-200 hover:scale-105">
                  <Trash2 size={16} />
                  Xóa
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-20 glass-effect rounded-2xl">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl font-semibold text-slate-600 mb-2">
              Không tìm thấy bác sĩ
            </p>
            <p className="text-slate-500">
              Thử thay đổi bộ lọc hoặc tìm kiếm của bạn
            </p>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || editingDoctor) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 glass-effect">
              <h2 className="text-2xl font-display font-bold text-slate-900">
                {editingDoctor ? "Sửa thông tin bác sĩ" : "Thêm bác sĩ mới"}
              </h2>
              <Button
              isLoading={false}
                onClick={() => {
                  setShowAddModal(false);
                  setEditingDoctor(null);
                }}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X size={24} className="text-slate-500" />
              </Button>
            </div>

            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Họ và tên
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      defaultValue={editingDoctor?.name}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-specialty" className="block text-sm font-semibold text-slate-700 mb-2">
                      Chuyên khoa
                    </label>
                    <select
                      id="modal-specialty"
                      defaultValue={editingDoctor?.specialty}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                    >
                      {specialties.slice(1).map((specialty) => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      defaultValue={editingDoctor?.phone}
                      placeholder="0901234567"
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      defaultValue={editingDoctor?.email}
                      placeholder="email@hospital.vn"
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-experience" className="block text-sm font-semibold text-slate-700 mb-2">
                      Kinh nghiệm
                    </label>
                    <input
                      id="modal-experience"
                      type="text"
                      defaultValue={editingDoctor?.experience}
                      placeholder="10 năm"
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-status" className="block text-sm font-semibold text-slate-700 mb-2">
                      Trạng thái
                    </label>
                    <select
                      id="modal-status"
                      defaultValue={editingDoctor?.status}
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                    >
                      {statuses.slice(1).map((status) => (
                        <option key={status.value} value={status.value}>
                          {status.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-location" className="block text-sm font-semibold text-slate-700 mb-2">
                    Địa điểm làm việc
                  </label>
                  <input
                    id="modal-location"
                    type="text"
                    defaultValue={editingDoctor?.location}
                    placeholder="Phòng khám A - Tầng 3"
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    isLoading={false}
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingDoctor(null);
                    }}
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
      )}
    </div>
  );
}