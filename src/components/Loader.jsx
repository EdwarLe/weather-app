import { useEffect, useState } from "react";

const Loader = () => {
  const [loaderPage, setLoaderPage] = useState(true);

  const circles = "h-8 w-8 rounded-full";

  useEffect(() => {
    setTimeout(() => {
      setLoaderPage(false);
    }, 3000);
  }, []);
  return (
    loaderPage && (
      <div className="min-h-screen absolute bg-slate-900 w-full z-10 flex justify-center items-center gap-12">
        <div className={`${circles} bg-yellow-600 animate-ping`}></div>
        <div className={`${circles} bg-yellow-600 animate-ping200`}></div>
        <div className={`${circles} bg-yellow-600 animate-ping400`}></div>
      </div>
    )
  );
};
export default Loader;
