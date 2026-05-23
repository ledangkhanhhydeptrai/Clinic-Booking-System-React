import React from "react";
import {
  Phone,
  Edit3,
  Settings,
  Shield,
  Bell,
  FileText,
  LogOut,
  User,
  CheckCircleIcon
} from "lucide-react";
import Button from "../../components/common/Button";
import ErrorIcon from "@mui/icons-material/Error";
import useProfile, {
  useUpdateProfileMutation
} from "../../features/profile/useProfile";
import ProfileEmptyState from "./components/ProfileEmptyState";
import { NotificationProps } from "../../notification/Notification";
import ProfileUpdate from "./components/ProfileUpdate";
import { Alert, Snackbar } from "@mui/material";
import SlideTransitions from "../../slide/SlideTransition";

const ProfilePage: React.FC = () => {
  const { data: profile } = useProfile();
  const { mutate, isPending } = useUpdateProfileMutation();
  const [fullName, setFullName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [notification, setNotification] = React.useState<NotificationProps>({
    open: false,
    message: "",
    severity: "success"
  });
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleCloseSnackbar = () => {
    setNotification(prev => ({
      ...prev,
      open: false
    }));
  };
  if (!profile) {
    return <ProfileEmptyState />;
  }
  const handleOpen = () => {
    setFullName(profile.fullName);
    setPhone(profile.phone);
    setIsOpen(true);
  };
  const handleSubmit = async () => {
    try {
      mutate(
        {
          id: profile.id,
          fullName,
          phone
        },
        {
          onSuccess: () => {
            setNotification({
              open: true,
              message: "Cập nhật hồ sơ thành công",
              severity: "success"
            });
            setIsOpen(false);
          },
          onError: () => {
            setNotification({
              open: true,
              message: "Cập nhật hồ sơ thất bại",
              severity: "error"
            });
          }
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="bg-linear-to-br from-stone-50 via-white to-rose-50/30 min-h-screen">
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
        
        .info-item {
          transition: all 0.3s ease;
        }
        
        .info-item:hover {
          transform: translateX(8px);
          background: linear-gradient(90deg, rgba(244, 63, 94, 0.05), transparent);
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
              <div className="avatar-wrapper w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center animate-float">
                <User className="w-20 h-20 text-amber-600" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="profile-title text-4xl md:text-5xl font-black text-stone-900 mb-2">
                  {profile.fullName}
                </h1>
                <p className="text-lg text-stone-600 font-medium">
                  @{profile.username}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={e => {
                    e.stopPropagation();
                    handleOpen();
                  }}
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
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-8">
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
                      {profile.phone}
                    </div>
                  </div>
                </div>
                <div className="info-item flex items-center space-x-3 p-3 rounded-lg">
                  <User className="w-5 h-5 text-rose-600" />
                  <div>
                    <div className="text-xs font-semibold text-stone-500">
                      ID người dùng
                    </div>
                    <div className="font-semibold text-stone-900 text-xs break-all">
                      {profile.id}
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

          {/* Right Column - Info Card */}
          <div className="lg:col-span-2">
            <div className="section-card glass-card p-8 rounded-2xl animate-fadeInUp">
              <h3 className="profile-title text-2xl font-bold text-stone-900 mb-6">
                Chi tiết tài khoản
              </h3>

              <div className="space-y-6">
                <div className="p-6 bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-100">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-blue-600 mb-2">
                        Tên đầy đủ
                      </div>
                      <div className="text-2xl font-black text-blue-900">
                        {profile.fullName}
                      </div>
                    </div>
                    <User className="w-8 h-8 text-blue-400" />
                  </div>
                </div>

                <div className="p-6 bg-linear-to-br from-rose-50 to-pink-50 rounded-xl border-2 border-rose-100">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-rose-600 mb-2">
                        Tên đăng nhập
                      </div>
                      <div className="text-2xl font-black text-rose-900">
                        @{profile.username}
                      </div>
                    </div>
                    <User className="w-8 h-8 text-rose-400" />
                  </div>
                </div>

                <div className="p-6 bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-100">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-emerald-600 mb-2">
                        Số điện thoại
                      </div>
                      <div className="text-2xl font-black text-emerald-900">
                        {profile.phone}
                      </div>
                    </div>
                    <Phone className="w-8 h-8 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Background Decorations */}
      <div className="fixed top-20 right-10 w-72 h-72 bg-linear-to-br from-rose-200/30 to-orange-200/30 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-linear-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-10" />
      {isOpen &&
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-linear-to-br from-indigo-900/60 via-slate-900/50 to-blue-900/60 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Decorative blobs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

          {/* Modal */}
          <div className="relative w-full max-w-3xl animate-fadeInUp">
            {/* Glow ring */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-500 to-blue-500 rounded-3xl blur opacity-30" />

            <div className="relative">
              <ProfileUpdate
                profile={profile}
                isLoading={isPending}
                fullName={fullName}
                setFullName={setFullName}
                phone={phone}
                setPhone={setPhone}
                onSubmit={handleSubmit}
                onClose={handleClose}
              />
            </div>
          </div>
        </div>}
      <Snackbar
        open={notification.open}
        onClose={handleCloseModal}
        TransitionComponent={SlideTransitions}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={4000}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={notification.severity}
          variant="filled"
          iconMapping={{
            success: <CheckCircleIcon fontSize="small" />,
            error: <ErrorIcon fontSize="small" />
          }}
          sx={{
            width: "100%",
            bgcolor:
              notification.severity === "success" ? "#4caf50" : "#f44336",
            color: "white",
            fontWeight: "bold",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
            px: 2,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 1
          }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProfilePage;
