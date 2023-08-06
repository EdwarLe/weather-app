const FormSearchCity = ({
  setSearchCity,
  setSearchEmpty,
  updateSearchCity,
  setWeatherInfo,
  success,
}) => {
  const handleCitySearch = (e) => {
    e.preventDefault();
    const valueSearched = e.target.btnCitySearch.value;
    updateSearchCity(valueSearched);

    valueSearched.length === 0 ? setSearchEmpty(true) : setSearchEmpty(false);
  };

  const resetLocation = (e) => {
    e.target.parentElement.reset();
    setWeatherInfo(navigator.geolocation.getCurrentPosition(success));
    setSearchCity(null);
  };

  return (
    <form
      onSubmit={handleCitySearch}
      className="rounded-xl overflow-hidden max-w-full grid grid-rows-2 grid-cols-2 min-[400px]:grid-cols-[60%_20%_20%] min-[400px]:grid-rows-none"
    >
      <input
        id="btnCitySearch"
        className="py-2 px-4 text-center col-span-2 min-[400px]:col-span-1 dark:bg-slate-950"
        type="text"
        placeholder="Type the city..."
        autoComplete="off"
      />
      <button className="bg-slate-950 py-2 px-4 flex justify-center items-center text-white dark:bg-sky-700">
        Search
      </button>
      <a
        onClick={resetLocation}
        className="bg-slate-800 py-3 px-4 text-white cursor-pointer flex justify-center w-full dark:bg-sky-400"
      >
        Clear
      </a>
    </form>
  );
};
export default FormSearchCity;
