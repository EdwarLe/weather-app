import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [typeMeasurement, setTypeMeasurement] = useState("metric");

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const API_KEY = "2927d2b080299fce6de576324ebf243f";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${typeMeasurement}`;

    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  const handleChangeMeasurement = () => {
    if (typeMeasurement !== "metric") {
      setTypeMeasurement("metric");
    } else {
      setTypeMeasurement("imperial");
    }
  };

  const bgImgWeather = () => {
    const weatherId = 800; /*weatherInfo?.weather[0].id*/
    let bg = "";
    if (weatherId === 801) bg = "fewClouds";
    if (weatherId === 803) bg = "brokenClouds";
    if (weatherId === 804) bg = "overcastClouds";
    if (weatherId === 800) bg = "clearSky";
    if (weatherId >= 600 && weatherId <= 622) bg = "snow";
    if (weatherId >= 504 && weatherId <= 531) bg = "extremeRain";
    if (weatherId >= 500 && weatherId <= 503) bg = "moderateRain";
    if (weatherId >= 200 && weatherId <= 232) bg = "thunderstorm";

    return bg;
  };

  console.log(bgImgWeather());

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [typeMeasurement]);

  return (
    <main
      className={`bg-[url("/images/${bgImgWeather()}.webp")] min-h-screen text-black flex justify-center items-center p-4 font-Lato`}
    >
      <Weather
        weatherInfo={weatherInfo}
        handleChangeMeasurement={handleChangeMeasurement}
        typeMeasurement={typeMeasurement}
      />
    </main>
  );
}

export default App;
