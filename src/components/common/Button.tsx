import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      className="w-full bg-linear-to-br from-teal-500 to-cyan-600 text-white 
  font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-teal-500/30
  hover:shadow-xl hover:shadow-teal-500/40 hover:-translate-y-0.5
  active:translate-y-0 transition-all duration-200
  disabled:opacity-60 disabled:cursor-not-allowed
  disabled:hover:translate-y-0 flex items-center justify-center gap-2"
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Đang xử lý...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
