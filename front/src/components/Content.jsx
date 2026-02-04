import React, { useEffect, useState } from "react";
import axios from "axios";

function Content() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/upload-data");
        console.log(res.data);
        setImages(res.data);
      } catch (err) {
        console.error(err);
        setError("images unloaded , something wrong !");
      }
    };

    fetchImages();
  }, []);

  if (error) {
    return (
      <p className="text-red-400 text-center text-4xl pt-6 bg-gradient-to-br from-zinc-900 via-slate-900 to-black w-full h-[220px]">
        {error}
      </p>
    );
  }

  return (
    <div className="px-4 py-10 mx-auto bg-gradient-to-br from-zinc-900 via-slate-900 to-black">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((item, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-white/10 shadow-lg"
          >
            <img
              src={`http://127.0.0.1:8000/back/images/` + item.image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm font-semibold">VIEW</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
