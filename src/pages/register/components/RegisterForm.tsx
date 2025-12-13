import React from "react";
import InputField from "./InputField";
interface RegisterProps {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  fullName: string;
  setFullName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  dob: string;
  setDob: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
  isLoading: boolean;
  onSubmit: (e:React.FormEvent<HTMLFormElement>) => Promise<void>;
}
export default function RegisterForm({
  username,
  setUsername,
  password,
  setPassword,
  fullName,
  setFullName,
  phone,
  setPhone,
  dob,
  setDob,
  confirmPassword,
  setConfirmPassword,
  isLoading,
  onSubmit
}: RegisterProps) {
  const [errors, setErrors] = React.useState<{
    username: string;
    fullName: string;
    phone: string;
    password: string;
    confirmPassword: string;
    dob: string;
  }>({
    username: "",
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: ""
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <InputField
        label="Nhập tên"
        type="text"
        name="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          if (errors.username) {
            setErrors({ ...errors, username: "" });
          }
        }}
        placeholder="nguyenvana"
        icon={
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        }
        error={errors.username}
      />
      {/* Full Name */}
      <InputField
        label="Họ và tên"
        type="text"
        name="fullName"
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
          if (errors.fullName) {
            setErrors({ ...errors, fullName: "" });
          }
        }}
        placeholder="Nguyễn Văn A"
        icon={
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        }
        error={errors.fullName}
      />

      {/* Phone Number */}
      <InputField
        label="Số điện thoại"
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
          if (errors.phone) {
            setErrors({ ...errors, phone: "" });
          }
        }}
        placeholder="0912345678"
        icon={
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        }
        error={errors.phone}
      />

      {/* Date of Birth */}
      <InputField
        label="Ngày sinh"
        type="date"
        name="dateOfBirth"
        value={dob}
        onChange={(e) => {
          setDob(e.target.value);
          if (errors.dob) {
            setErrors({ ...errors, dob: "" });
          }
        }}
        placeholder="Nhập ngày sinh"
        icon={
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        }
        error={errors.dob}
      />

      {/* Password */}
      <InputField
        label="Mật khẩu"
        type="password"
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (errors.password) {
            setErrors({ ...errors, password: "" });
          }
        }}
        placeholder="Tối thiểu 8 ký tự"
        error={errors.password}
        icon={
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        }
      />

      {/* Confirm Password */}
      <InputField
        label="Xác nhận mật khẩu"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          if (errors.confirmPassword) {
            setErrors({ ...errors, confirmPassword: "" });
          }
        }}
        placeholder="Nhập lại mật khẩu"
        icon={
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        }
        error={errors.confirmPassword}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-linear-to-r from-teal-600 to-cyan-600 text-white font-bold py-4 px-6 rounded-xl hover:from-teal-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-teal-200 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-teal-600/30 flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Đang xử lý...</span>
          </>
        ) : (
          <>
            <span>Đăng ký tài khoản</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
