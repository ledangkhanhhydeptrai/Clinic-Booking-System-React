export default function MedicalDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating medical cross */}
      <div className="absolute top-20 left-10 opacity-5">
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-teal-600">
          <rect x="45" y="15" width="30" height="90" fill="currentColor" rx="4"/>
          <rect x="15" y="45" width="90" height="30" fill="currentColor" rx="4"/>
        </svg>
      </div>
      
      {/* Heartbeat line */}
      <svg className="absolute top-40 right-0 w-96 h-32 opacity-5" viewBox="0 0 400 100">
        <path 
          d="M 0 50 L 100 50 L 120 20 L 140 80 L 160 50 L 400 50" 
          stroke="#0d9488" 
          strokeWidth="4" 
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Pills decoration */}
      <div className="absolute bottom-20 right-20 opacity-5">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="30" cy="30" r="25" fill="#06b6d4"/>
          <circle cx="70" cy="70" r="20" fill="#14b8a6"/>
        </svg>
      </div>
    </div>
  )
}