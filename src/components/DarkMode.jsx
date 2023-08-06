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
      <i className="bx bxs-brightness-half text-3xl text-cyan-500 transition-all duration-500 cursor-pointer hover:rotate-180  dark:text-yellow-400"></i>
    </div>
  );
};
export default DarkMode;
