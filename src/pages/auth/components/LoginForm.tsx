import React from "react";
import FormTrustBadge from "./FormTrustBadge";
import Input from "../../../components/common/Input";
import { FiLock, FiUser } from "react-icons/fi";

interface LoginProps {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function LoginForm({
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit
}: LoginProps) {
  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Đăng nhập hệ thống
          </h1>
          <p className="text-slate-500">Vui lòng nhập thông tin để tiếp tục</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Tên đăng nhập
            </label>
            <Input
              type="text"
              placeholder="Nhập username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="w-full px-4 py-3 border rounded-xl"
              icon={<FiUser className="text-slate-600" />}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mật khẩu</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl"
              icon={<FiLock className="text-slate-600" />}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition disabled:opacity-60"
          >
            Đăng nhập
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm">
            Bạn là bệnh nhân mới?{" "}
            <a
              href="/auth/register"
              className="text-teal-600 font-semibold hover:underline"
            >
              Đăng ký tài khoản
            </a>
          </p>
        </div>

        <FormTrustBadge />
      </div>
    </div>
  );
}
