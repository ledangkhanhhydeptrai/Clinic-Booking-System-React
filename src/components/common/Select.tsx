import React from "react";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  id: string;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  icon?: LucideIcon;
}

export default function Select({
  id,
  label,
  placeholder = "Chọn...",
  options,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  className = "",
  icon: Icon
}: SelectProps) {
  const labelId = `${id}-label`;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          id={labelId}
          htmlFor={id}
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon className="w-5 h-5 text-gray-400" />
          </div>
        )}

        <select
          id={id}
          aria-labelledby={label ? labelId : undefined}
          aria-label={!label ? placeholder : undefined}
          title={label ?? placeholder} // ✅ axe cần accessible name
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...(error && { "aria-invalid": "true" })} // ✅ CHUẨN ARIA
          className={`
    w-full px-4 py-2.5
    ${Icon ? "pl-10" : "pl-4"}
    pr-10 bg-white border-2
    ${error ? "border-red-500" : "border-gray-200 focus:border-blue-500"}
    rounded-xl appearance-none
  `}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDown className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
