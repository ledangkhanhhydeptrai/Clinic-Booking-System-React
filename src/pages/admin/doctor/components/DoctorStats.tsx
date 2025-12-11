interface DoctorStatsProps {
  totalDoctors: number;
  totalSpecialties: number;
  filteredCount: number;
}

export default function DoctorStats({
  totalDoctors,
  totalSpecialties,
  filteredCount
}: DoctorStatsProps) {
  const stats = [
    {
      label: "Tổng bác sĩ",
      value: totalDoctors,
      icon: "👨‍⚕️",
      color: "blue"
    },
    {
      label: "Chuyên khoa",
      value: totalSpecialties,
      icon: "📋",
      color: "emerald"
    },
    {
      label: "Đang hiển thị",
      value: filteredCount,
      icon: "🔍",
      color: "purple"
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="glass-effect rounded-xl p-4 card-hover shimmer-border"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
              <p className={`text-2xl font-bold text-${stat.color}-600`}>
                {stat.value}
              </p>
            </div>
            <div className="text-3xl">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}