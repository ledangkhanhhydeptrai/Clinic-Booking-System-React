import React from "react";
import BrandingPanel from "./components/BrandingPanel";
import MedicalDecorations from "./components/MedicalDecorations";
import RegisterForm from "./components/RegisterForm";
import SocialLogin from "./components/SocialLogin";
import { RegisterPayload } from "../../features/register/registerSaga";
import useRegister from "../../features/register/useRegister";
import { toast } from "react-toastify";
/* ================= TYPES ================= */
type FormData = {
  username: string;
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  password: string;
  confirmPassword: string;
};

/* ================= COMPONENT ================= */
export default function RegisterPage() {
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: ""
  });
  const { register, isLoading, isSuccess } = useRegister();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: RegisterPayload = {
      username: formData.username,
      fullName: formData.fullName,
      phone: formData.phone,
      dob: new Date(formData.dob).toISOString(),
      password: formData.password
    };
    register(payload);
    if (isSuccess) {
      toast.success("Đăng ký thành công");
    }
  };

  /* ================= RENDER ================= */
  return (
    <div className="bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
      <MedicalDecorations />

      <div className="w-full max-w-6xl flex rounded-3xl overflow-hidden shadow-2xl bg-white relative my-8">
        <BrandingPanel />

        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-slate-800 mb-2">
              Tạo tài khoản mới
            </h3>
            <p className="text-slate-600">
              Đăng ký để sử dụng dịch vụ chăm sóc sức khỏe
            </p>
          </div>

          <RegisterForm
            username={formData.username}
            setUsername={(v) => setFormData((p) => ({ ...p, username: v }))}
            fullName={formData.fullName}
            setFullName={(v) => setFormData((p) => ({ ...p, fullName: v }))}
            phone={formData.phone}
            setPhone={(v) => setFormData((p) => ({ ...p, phone: v }))}
            dob={formData.dob}
            setDob={(v) => setFormData((p) => ({ ...p, dob: v }))}
            password={formData.password}
            setPassword={(v) => setFormData((p) => ({ ...p, password: v }))}
            confirmPassword={formData.confirmPassword}
            setConfirmPassword={(v) =>
              setFormData((p) => ({ ...p, confirmPassword: v }))
            }
            isLoading={isLoading}
            onSubmit={async (e) => {
              await handleSubmit(e);
            }}
          />

          <SocialLogin isRegister />
        </div>
      </div>
    </div>
  );
}
