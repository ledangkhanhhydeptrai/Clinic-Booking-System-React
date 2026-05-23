import React from "react";
import { ProfileProps } from "../../../features/profile/useProfile";

export interface UpdateProfile {
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  fullName: string;
  setFullName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  isLoading: boolean;
  profile: ProfileProps;
}

export default function ProfileUpdate({
  fullName,
  phone,
  setFullName,
  setPhone,
  onClose,
  onSubmit,
  isLoading,
  profile,
}: UpdateProfile) {
  const initials = profile.fullName
    ?.split(" ")
    .map((w) => w[0])
    .slice(-2)
    .join("")
    .toUpperCase() ?? "NT";

  return (
    <div className="flex items-center justify-center">
      <div className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 flex">

        {/* ── LEFT PANEL ── */}
        <div className="hidden md:flex w-5/12 bg-linear-to-b from-indigo-600 via-blue-600 to-blue-500 flex-col items-center justify-between p-10 relative overflow-hidden">

          {/* Decorative circles */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -right-16 w-72 h-72 rounded-full bg-white/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5" />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-5 text-center">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur ring-4 ring-white/30 flex items-center justify-center text-3xl font-bold text-white select-none">
              {initials}
            </div>
            <div>
              <p className="text-white font-bold text-xl leading-tight">{profile.fullName}</p>
            
            </div>

            {/* Stats pills */}
            <div className="flex gap-2 mt-2">
              <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium">
                ✦ Tài khoản đã xác minh
              </span>
            </div>
          </div>

          {/* Bottom note */}
          <div className="relative z-10 text-center">
            <p className="text-blue-200 text-xs leading-relaxed">
              Thông tin của bạn được<br />bảo mật và mã hoá an toàn.
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <form
          onSubmit={onSubmit}
          className="flex-1 bg-white flex flex-col justify-center px-10 py-12"
        >
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 leading-tight">
              Cập nhật hồ sơ
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Chỉnh sửa thông tin cá nhân của bạn bên dưới.
            </p>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-6">
            {/* Full name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Họ và tên
              </label>
              <div className="relative group">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </span>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nhập họ và tên đầy đủ"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent focus:bg-white transition-all"
                />
              </div>
             
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                Số điện thoại
              </label>
              <div className="relative group">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M2.25 6.338c0-1.243 1.04-2.25 2.25-2.25h1.5c.36 0 .693.163.916.444l1.872 2.34a1.125 1.125 0 01-.077 1.488l-.96.96a9.75 9.75 0 004.95 4.95l.96-.96a1.125 1.125 0 011.488-.077l2.34 1.872c.281.223.444.556.444.916v1.5c0 1.21-1.007 2.25-2.25 2.25C8.552 20.25 3.75 15.448 3.75 9.75A7.437 7.437 0 012.25 6.338z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Nhập số điện thoại"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent focus:bg-white transition-all"
                />
              </div>
              <span className="text-[11px] text-slate-400 pl-1">
                Dùng để xác minh tài khoản và nhận thông báo.
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-10">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 active:scale-[0.98] transition-all"
            >
              Huỷ bỏ
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-2 py-3 bg-linear-to-r from-indigo-500 to-blue-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-indigo-200 hover:from-indigo-600 hover:to-blue-600 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Đang lưu...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Lưu thay đổi
                </>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}