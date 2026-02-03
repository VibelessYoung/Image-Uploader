import React from "react";

function Progress({ value = 0, file }) {
  if (!file) return null;

  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className="mt-4">
      {/* Background */}
      <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
        {/* Fill */}
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-pink-500
                     transition-[width] duration-300 ease-out"
          style={{ width: `${safeValue}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="text-right text-xs text-white/70 mt-1">{safeValue}%</p>
    </div>
  );
}

export default Progress;
