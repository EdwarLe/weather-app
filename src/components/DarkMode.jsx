import { useEffect, useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(null);

  const handleDarkMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div onClick={handleDarkMode} className="top-1 right-4 absolute">
      {/* <div className="h-6 w-6 bg-slate-950 rounded-full cursor-pointer hover:translate-x-4 active:translate-x-4"></div> */}
      <i className="bx bxs-brightness-half text-3xl text-cyan-500 transition-all duration-500 cursor-pointer hover:rotate-180 hover:text-yellow-400  dark:text-yellow-400 dark:hover:text-cyan-500"></i>
    </div>
  );
};
export default DarkMode;
