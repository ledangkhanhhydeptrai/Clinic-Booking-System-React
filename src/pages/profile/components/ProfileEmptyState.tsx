import React from "react";
import { UserX, RefreshCw, Home, LogIn } from "lucide-react";

import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";

const ProfileEmptyState: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-50 via-white to-rose-50/30 flex items-center justify-center p-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@700;800&family=Work+Sans:wght@400;600;700&display=swap');
        
        * {
          font-family: 'Work Sans', sans-serif;
        }
        
        .empty-title {
          font-family: 'Crimson Pro', serif;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
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
      `}</style>

      <div className="glass-card rounded-3xl p-12 max-w-2xl w-full text-center animate-scaleIn">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-linear-to-br from-rose-100 to-orange-100 rounded-full flex items-center justify-center animate-float">
              <UserX className="w-16 h-16 text-rose-600" />
            </div>
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-4 border-rose-200 opacity-20 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border-2 border-rose-300 opacity-30"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="empty-title text-4xl md:text-5xl font-black text-stone-900 mb-4 animate-fadeIn">
          Không tìm thấy hồ sơ
        </h1>

        {/* Description */}
        <p className="text-lg text-stone-600 mb-8 max-w-md mx-auto animate-fadeIn">
          Có vẻ như bạn chưa đăng nhập hoặc phiên làm việc đã hết hạn. Vui lòng
          đăng nhập để xem thông tin hồ sơ của bạn.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn">
          <Button
            isLoading={false}
            onClick={() => navigate("/auth")}
            className="btn-primary px-8 py-4 rounded-xl text-white font-bold text-lg flex items-center space-x-2"
          >
            <LogIn className="w-5 h-5" />
            <span>Đăng nhập ngay</span>
          </Button>

          <Button
            isLoading={false}
            onClick={() => navigate("/")}
            className="glass-card px-8 py-4 rounded-xl font-bold text-stone-700 hover:bg-white transition-all flex items-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Về trang chủ</span>
          </Button>
        </div>

        {/* Reload Button */}
        <div className="mt-8 pt-8 border-t border-stone-200 animate-fadeIn">
          <button
            onClick={() => window.location.reload()}
            className="text-rose-600 font-semibold hover:underline flex items-center space-x-2 mx-auto transition-all hover:scale-105"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Tải lại trang</span>
          </button>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="fixed top-20 right-10 w-72 h-72 bg-linear-to-br from-rose-200/30 to-orange-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-linear-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

// Loading State Component
export const ProfileLoadingState: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-stone-50 via-white to-rose-50/30 flex items-center justify-center p-6">
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>

      <div className="text-center">
        {/* Spinner */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-rose-200 border-t-rose-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-linear-to-br from-rose-500 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-stone-900 mb-2">
          Đang tải hồ sơ...
        </h2>
        <p className="text-stone-600">Vui lòng đợi trong giây lát</p>

        {/* Loading Skeleton */}
        <div className="mt-8 max-w-md mx-auto space-y-3">
          <div className="h-4 bg-stone-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-stone-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-stone-200 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEmptyState;
