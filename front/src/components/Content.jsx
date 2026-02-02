import React from "react";

const images = [
  "https://picsum.photos/600/600?1",
  "https://picsum.photos/600/600?2",
  "https://picsum.photos/600/600?3",
  "https://picsum.photos/600/600?4",
  "https://picsum.photos/600/600?5",
  "https://picsum.photos/600/600?6",
  "https://picsum.photos/600/600?7",
  "https://picsum.photos/600/600?8",
];

function Content() {
  return (
    <div className="px-4 py-10 mx-auto bg-gradient-to-br from-zinc-900 via-slate-900 to-black">
      {/* Grid */}
      <div
        className="
          grid grid-cols-2 
          sm:grid-cols-3 
          lg:grid-cols-4 
          gap-4
        "
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="
              group relative aspect-square overflow-hidden
              rounded-2xl bg-white/10
              shadow-lg
            "
          >
            {/* Image */}
            <img
              src={src}
              alt=""
              className="
                w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0 
                bg-black/0 group-hover:bg-black/40
                transition-colors duration-300
              "
            />

            {/* Icon / Text */}
            <div
              className="
                absolute inset-0 
                flex items-center justify-center
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              <span className="text-white text-sm font-semibold">VIEW</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
