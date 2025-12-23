

export default function RunningBanner() {
  return (
    <div className="text-xs relative w-full overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-red-600 py-1.5 shadow-lg" style={{ fontWeight: "bold" }}>
      {/* Animated scrolling container */}
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Repeat content 3 times for seamless loop */}
        {[...Array(3)].map((_, index) =>
        <div key={index} className="flex items-center space-x-8 px-8">
            <span className="text-white font-bold text-sm tracking-wide" style={{ color: "rgb(17, 24, 39)" }}>
              🛡️ Professional Security Solutions
            </span>
            <span className="text-yellow-300 font-extrabold text-sm">
              ⭐ SIRA Certified Security Services in UAE
            </span>
            <span className="text-white font-bold text-sm tracking-wide">
              🔒 Protecting What Matters Most
            </span>
            <span className="text-yellow-300 font-extrabold text-sm">
              🏆 DEFENCE FORCE SECURITY SERVICES L.L.C
            </span>
            <span className="text-white font-bold text-sm tracking-wide">
              ✓ SIRA-certified company with licensed guards and supervisors
            </span>
            <span className="text-yellow-300 text-lg">•</span>
          </div>
        )}
      </div>

    </div>);

}