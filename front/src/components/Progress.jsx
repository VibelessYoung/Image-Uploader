import React from "react";

function Progress({ value }) {
  return (
    <div className="mt-4">
      {/* Background */}
      <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden">
        {/* Fill */}
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-pink-500
                     transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="text-right text-xs text-white/70 mt-1">{value}%</p>
    </div>
  );
}

export default Progress;
