const FormLanguage = ({ setLanguage, language }) => {
  const handleLanguage = () => {
    language === "en" ? setLanguage("es") : setLanguage("en");
  };

  return (
    <form className="flex gap-2 bg-white/50 text-slate-950 p-1 rounded-md dark:bg-black/50 dark:text-white border">
      <label htmlFor="lang"> {language === "en" ? "Language" : "Idioma"}</label>
      <select
        name="laguages"
        id="lang"
        onChange={handleLanguage}
        className="bg-white/0 text-slate-950 outline-none hover:bg-white/50 rounded-md dark:bg-black/0 dark:text-white hover:dark:bg-slate-950/50 cursor-pointer"
      >
        <option value="en" className="bg-cyan-500 dark:bg-slate-950">
          🇺🇸
        </option>

        <option value="es" className="bg-cyan-500 dark:bg-slate-950">
          🇪🇸
        </option>
      </select>
    </form>
  );
};
export default FormLanguage;
