import { useState } from "react";
import Progress from "./Progress";
import axios from "axios";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setProgress(0);

    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 12;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }
      setProgress(Math.floor(value));
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("هیچ فایلی انتخاب نشده");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setError(null);
      setProgress(0);
      setUploading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/upload",
        formData,
        {
          timeout: 20000,
          onUploadProgress: (progressEvent) => {
            if (!progressEvent.total) return;

            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );

            setProgress(percent);
          },
        },
      );

      console.log("Upload success:", response.data);
      setSuccess("فایل با موفقیت آپلود شد ✅");
    } catch (err) {
      if (!err.response) {
        setError("اتصال به سرور برقرار نشد 🌐");
        return;
      }

      const status = err.response.status;
      if (status === 413) {
        setError("حجم فایل بیش از حد مجازه");
      } else if (status === 422) {
        setError("فرمت فایل معتبر نیست");
      } else if (status >= 500) {
        setError("خطای داخلی سرور");
      } else {
        setError("آپلود ناموفق بود");
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-1/2 p-32 flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-slate-900 to-black">
      <form
        onSubmit={handleSubmit}
        className="w-[380px] p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.7)] animate-fadeIn"
      >
        <h1 className="text-white text-2xl font-bold text-center mb-6">
          UPLOAD PICTURE
        </h1>

        {/* Upload Box */}
        <label
          className="flex flex-col items-center justify-center gap-3 
                     border-2 border-dashed border-white/30 
                     rounded-2xl p-6 cursor-pointer
                     hover:border-indigo-400 hover:bg-white/5
                     transition-all duration-300"
        >
          <svg
            className="w-12 h-12 text-indigo-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16v-8m0 0L8 8m4-4 4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
            />
          </svg>

          <p className="text-white/80 text-sm">click or drop a file here...</p>

          <input
            name="image"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
          />
        </label>

        {/* File name */}
        {file && (
          <p className="text-white text-sm mt-4 truncate">📄 {file.name}</p>
        )}

        {/* Progress Bar */}
        {file && progress > 0 && <Progress value={progress} file={file} />}

        {/* Button */}
        <button
          className="w-full mt-6 py-3 rounded-xl
                     bg-gradient-to-r from-indigo-500 to-pink-500
                     text-white font-semibold
                     hover:scale-[1.02] active:scale-95
                     transition-transform duration-200"
        >
          SEND🚀
        </button>
        {error && (
          <p className="mt-3 text-sm text-red-400 text-center">{error}</p>
        )}

        {success && (
          <p className="mt-3 text-sm text-green-400 text-center">{success}</p>
        )}
      </form>
    </div>
  );
}

export default FileUpload;
