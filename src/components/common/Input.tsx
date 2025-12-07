import React, { type InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}
const Input: React.FC<InputProps> = ({ icon, className, ...props }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        {...props}
        className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 transition-all ${
          className || ""
        }`}
      />
    </div>
  );
};

export default Input;
