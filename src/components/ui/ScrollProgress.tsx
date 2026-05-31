"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(percent);
    };

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="h-12 w-12 rounded-full border border-slate-300 bg-white shadow flex items-center justify-center text-xs font-semibold">
        {Math.round(progress)}%
      </div>
    </div>
  );
}