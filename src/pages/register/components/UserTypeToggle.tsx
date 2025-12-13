export default function UserTypeToggle({
  userType,
  onChange
}: {
  userType: string;
  onChange: (type: string) => void;
}) {
  return (
    <div className="mb-6">
      <div className="flex bg-slate-100 p-1 rounded-xl">
        <button
          type="button"
          onClick={() => onChange("patient")}
          className={`flex-1 py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 ${
            userType === "patient"
              ? "bg-white text-teal-600 shadow-md"
              : "text-slate-600 hover:text-slate-800"
          }`}
        >
          Bệnh nhân
        </button>
        <button
          type="button"
          onClick={() => onChange("staff")}
          className={`flex-1 py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 ${
            userType === "staff"
              ? "bg-white text-teal-600 shadow-md"
              : "text-slate-600 hover:text-slate-800"
          }`}
        >
          Nhân viên
        </button>
      </div>
    </div>
  );
}
