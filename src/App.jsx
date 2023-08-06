import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import { bgImgWeather } from "./components/temp";
import Loader from "./components/Loader";
import DarkMode from "./components/DarkMode";
import ModalErrorEmptyCitySearch from "./components/ModalErrorEmptyCitySearch";
import FormSearchCity from "./components/FormSearchCity";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [typeMeasurement, setTypeMeasurement] = useState("metric");
  const [searchCity, setSearchCity] = useState(null);
  const [searchEmpty, setSearchEmpty] = useState(false);
  const [language, setLanguage] = useState("es");

  const API_KEY = "2927d2b080299fce6de576324ebf243f";

  const validateCitySearch = searchCity === null ? weatherInfo : searchCity;

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const URL_MAIN = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${typeMeasurement}&lang=${language}`;

    getDataWeather(URL_MAIN, setWeatherInfo);
  };

  const imgBgSave = bgImgWeather[validateCitySearch?.weather[0].icon];

  const updateSearchCity = (valueSearched) => {
    const URL_CITY = `https://api.openweathermap.org/data/2.5/weather?q=${valueSearched}&appid=${API_KEY}&units=${typeMeasurement}`;

    getDataWeather(URL_CITY, setSearchCity);
  };

  const getDataWeather = (url, set) => {
    axios
      .get(url)
      .then(({ data }) => set(data))
      .catch((err) => {
        err.request.status === 400 ? setSearchEmpty(true) : console.log(err);
        err.request.status === 404 ? setSearchEmpty(true) : console.log(err);
      });
  };

  useEffect(() => {
    searchCity === null
      ? navigator.geolocation.getCurrentPosition(success)
      : updateSearchCity(searchCity?.name);
  }, [typeMeasurement]);

  return (
    <main
      className={`${imgBgSave} bg-cover bg-center min-h-screen text-black flex justify-around flex-col items-center p-4 font-Lato relative dark:text-white`}
    >
      <form></form>
      <Loader />
      <DarkMode />
      <FormSearchCity
        setSearchCity={setSearchCity}
        setSearchEmpty={setSearchEmpty}
        updateSearchCity={updateSearchCity}
        setWeatherInfo={setWeatherInfo}
        success={success}
      />
      <ModalErrorEmptyCitySearch
        searchEmpty={searchEmpty}
        setSearchEmpty={setSearchEmpty}
      />
      <Weather
        typeMeasurement={typeMeasurement}
        setTypeMeasurement={setTypeMeasurement}
        validateCitySearch={validateCitySearch}
      />
    </main>
  );
}

export default App;
