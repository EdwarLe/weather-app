import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import { bgImgWeather } from "./components/temp";
import Loader from "./components/Loader";
import DarkMode from "./components/DarkMode";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [typeMeasurement, setTypeMeasurement] = useState("metric");
  const [searchCity, setsearchCity] = useState(null);

  const API_KEY = "2927d2b080299fce6de576324ebf243f";

  const validateCitySearch = searchCity === null ? weatherInfo : searchCity;

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const URL_MAIN = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${typeMeasurement}`;

    getDataWeather(URL_MAIN, setWeatherInfo);
  };

  const imgBgSave = bgImgWeather[validateCitySearch?.weather[0].icon];

  const handleCitySearch = (e) => {
    e.preventDefault();
    const valueSearched = e.target.btnCitySearch.value;
    updateSearchCity(valueSearched);
  };

  const updateSearchCity = (valueSearched) => {
    const URL_CITY = `https://api.openweathermap.org/data/2.5/weather?q=${valueSearched}&appid=${API_KEY}&units=${typeMeasurement}`;

    getDataWeather(URL_CITY, setsearchCity);
  };

  const getDataWeather = (url, set) => {
    axios
      .get(url)
      .then(({ data }) => set(data))
      .catch((err) => console.log(err));
  };

  const resetLocation = (e) => {
    e.target.parentElement.reset();
    setWeatherInfo(navigator.geolocation.getCurrentPosition(success));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [typeMeasurement]);

  return (
    <main
      className={`${imgBgSave} bg-cover bg-center min-h-screen text-black flex justify-around flex-col items-center p-4 font-Lato relative dark:text-white`}
    >
      <Loader />
      <DarkMode />
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
      <Weather
        typeMeasurement={typeMeasurement}
        setTypeMeasurement={setTypeMeasurement}
        validateCitySearch={validateCitySearch}
      />
    </main>
  );
}

export default App;
