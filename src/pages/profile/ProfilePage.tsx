import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Edit3,
  Settings,
  Shield,
  Bell,
  Heart,
  Activity,
  Clock,
  Award,
  FileText,
  Camera,
  LogOut
} from "lucide-react";
import Button from "../../components/common/Button";

const ProfilePage: React.FC = () => {
  // Mock data from API response
  const profileData = {
    id: "8932234a-a06b-45a0-b9bd-d8077b9c7830",
    username: "ledangkhanhhydeptrai",
    fullName: "Lê Đặng Khánh Hỷ",
    phone: "0123456789",
    // Additional mock data for UI completeness
    email: "ledangkhanh@healthcare.vn",
    location: "Hồ Chí Minh, Việt Nam",
    joinDate: "01/01/2024",
    avatar: "👨‍⚕️"
  };

  const stats = [
    {
      label: "Lượt khám",
      value: "12",
      icon: Activity,
      color: "from-blue-500 to-cyan-500"
    },
    {
      label: "Đánh giá",
      value: "4.9",
      icon: Award,
      color: "from-amber-500 to-orange-500"
    },
    {
      label: "Điểm thưởng",
      value: "850",
      icon: Heart,
      color: "from-rose-500 to-pink-500"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      title: "Khám tim mạch",
      doctor: "BS. Nguyễn Văn A",
      date: "15/12/2024",
      status: "Hoàn thành"
    },
    {
      id: 2,
      title: "Tái khám nội khoa",
      doctor: "BS. Trần Thị B",
      date: "10/12/2024",
      status: "Hoàn thành"
    },
    {
      id: 3,
      title: "Khám định kỳ",
      doctor: "BS. Lê Văn C",
      date: "05/12/2024",
      status: "Đã hủy"
    }
  ];

  return (
    <div className="bg-linear-to-br from-stone-50 via-white to-rose-50/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700;800&family=Work+Sans:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Work Sans', sans-serif;
        }
        
        .profile-title {
          font-family: 'Crimson Pro', serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }
        
        .stat-card {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .stat-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .info-item {
          transition: all 0.3s ease;
        }
        
        .info-item:hover {
          transform: translateX(8px);
          background: linear-gradient(90deg, rgba(244, 63, 94, 0.05), transparent);
        }
        
        .activity-item {
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }
        
        .activity-item:hover {
          border-left-color: #f43f5e;
          background: rgba(244, 63, 94, 0.02);
          transform: translateX(4px);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #f43f5e 0%, #fb923c 100%);
          box-shadow: 0 4px 16px rgba(244, 63, 94, 0.3);
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          box-shadow: 0 8px 24px rgba(244, 63, 94, 0.4);
          transform: translateY(-2px);
        }
        
        .avatar-wrapper {
          position: relative;
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          box-shadow: 0 12px 40px rgba(251, 146, 60, 0.3);
        }
        
        .avatar-wrapper::before {
          content: '';
          position: absolute;
          inset: -4px;
          background: linear-gradient(135deg, #f43f5e, #fb923c, #fbbf24);
          border-radius: 9999px;
          z-index: -1;
          opacity: 0.5;
          animation: shimmer 3s linear infinite;
          background-size: 400% 100%;
        }
        
        .section-card {
          transition: all 0.4s ease;
        }
        
        .section-card:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }
      `}</style>

      <div className="">
        {/* Header Section */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-8 animate-fadeInUp">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Avatar */}
            <div className="relative animate-scaleIn">
              <div className="avatar-wrapper w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center text-7xl md:text-8xl animate-float">
                {profileData.avatar}
              </div>
              <Button
                isLoading={false}
                className="absolute bottom-2 right-2 w-12 h-12 bg-linear-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
              >
                <Camera className="w-5 h-5" />
              </Button>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="mb-4">
                <h1 className="profile-title text-4xl md:text-5xl font-black text-stone-900 mb-2">
                  {profileData.fullName}
                </h1>
                <p className="text-lg text-stone-600 font-medium">
                  @{profileData.username}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full font-semibold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Thành viên VIP</span>
                </span>
                <span className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-semibold text-sm">
                  <Award className="w-4 h-4" />
                  <span>Khách hàng thân thiết</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  isLoading={false}
                  className="btn-primary px-6 py-3 rounded-xl text-white font-bold flex items-center space-x-2"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Chỉnh sửa hồ sơ</span>
                </Button>
                <Button
                  isLoading={false}
                  className="glass-card px-6 py-3 rounded-xl font-bold text-stone-700 hover:bg-white transition-all"
                >
                  <Settings className="w-4 h-4 inline mr-2" />
                  Cài đặt
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Stats & Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Stats Cards */}
            <div className="space-y-4 animate-fadeInUp">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card glass-card p-6 rounded-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-black text-stone-900 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-stone-600">
                        {stat.label}
                      </div>
                    </div>
                    <div
                      className={`w-14 h-14 bg-linear-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="section-card glass-card p-6 rounded-2xl animate-fadeInUp">
              <h3 className="profile-title text-xl font-bold text-stone-900 mb-4">
                Thông tin liên hệ
              </h3>
              <div className="space-y-3">
                <div className="info-item flex items-center space-x-3 p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-rose-600" />
                  <div>
                    <div className="text-xs font-semibold text-stone-500">
                      Số điện thoại
                    </div>
                    <div className="font-semibold text-stone-900">
                      {profileData.phone}
                    </div>
                  </div>
                </div>
                <div className="info-item flex items-center space-x-3 p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-rose-600" />
                  <div>
                    <div className="text-xs font-semibold text-stone-500">
                      Email
                    </div>
                    <div className="font-semibold text-stone-900">
                      {profileData.email}
                    </div>
                  </div>
                </div>
                <div className="info-item flex items-center space-x-3 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-rose-600" />
                  <div>
                    <div className="text-xs font-semibold text-stone-500">
                      Địa chỉ
                    </div>
                    <div className="font-semibold text-stone-900">
                      {profileData.location}
                    </div>
                  </div>
                </div>
                <div className="info-item flex items-center space-x-3 p-3 rounded-lg">
                  <Calendar className="w-5 h-5 text-rose-600" />
                  <div>
                    <div className="text-xs font-semibold text-stone-500">
                      Ngày tham gia
                    </div>
                    <div className="font-semibold text-stone-900">
                      {profileData.joinDate}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="section-card glass-card p-6 rounded-2xl animate-fadeInUp">
              <h3 className="profile-title text-xl font-bold text-stone-900 mb-4">
                Hành động nhanh
              </h3>
              <div className="space-y-2">
                <Button
                  isLoading={false}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-rose-50 transition-all text-left"
                >
                  <Bell className="w-5 h-5 text-stone-700" />
                  <span className="font-semibold text-stone-900">
                    Thông báo
                  </span>
                </Button>
                <Button
                  isLoading={false}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-rose-50 transition-all text-left"
                >
                  <FileText className="w-5 h-5 text-stone-700" />
                  <span className="font-semibold text-stone-900">
                    Hồ sơ bệnh án
                  </span>
                </Button>
                <Button
                  isLoading={false}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-rose-50 transition-all text-left"
                >
                  <Shield className="w-5 h-5 text-stone-700" />
                  <span className="font-semibold text-stone-900">Bảo mật</span>
                </Button>
                <Button
                  isLoading={false}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-all text-left text-red-600"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-semibold">Đăng xuất</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Activity */}
            <div className="section-card glass-card p-8 rounded-2xl animate-slideInRight">
              <div className="flex items-center justify-between mb-6">
                <h3 className="profile-title text-2xl font-bold text-stone-900">
                  Lịch sử khám gần đây
                </h3>
                <button className="text-rose-600 font-semibold hover:underline">
                  Xem tất cả
                </button>
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="activity-item p-5 rounded-xl bg-white"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-stone-900 text-lg mb-1">
                          {activity.title}
                        </h4>
                        <p className="text-stone-600 text-sm font-medium">
                          {activity.doctor}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          activity.status === "Hoàn thành"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-stone-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{activity.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Summary */}
            <div className="section-card glass-card p-8 rounded-2xl animate-slideInRight">
              <h3 className="profile-title text-2xl font-bold text-stone-900 mb-6">
                Tổng quan sức khỏe
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-600">
                        Huyết áp
                      </div>
                      <div className="text-2xl font-black text-blue-900">
                        120/80
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-blue-700 font-medium">
                    Bình thường - Cập nhật: 15/12/2024
                  </div>
                </div>

                <div className="p-6 bg-linear-to-br from-rose-50 to-pink-50 rounded-xl border-2 border-rose-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-rose-600">
                        Nhịp tim
                      </div>
                      <div className="text-2xl font-black text-rose-900">
                        72 bpm
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-rose-700 font-medium">
                    Tốt - Cập nhật: 15/12/2024
                  </div>
                </div>

                <div className="p-6 bg-linear-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-amber-600">
                        BMI
                      </div>
                      <div className="text-2xl font-black text-amber-900">
                        22.5
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-amber-700 font-medium">
                    Lý tưởng - Cập nhật: 10/12/2024
                  </div>
                </div>

                <div className="p-6 bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-emerald-600">
                        Đường huyết
                      </div>
                      <div className="text-2xl font-black text-emerald-900">
                        95 mg/dL
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-emerald-700 font-medium">
                    Bình thường - Cập nhật: 12/12/2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
