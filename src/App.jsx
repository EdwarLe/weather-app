import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import { bgImgWeather } from "./components/temp";

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

  const imgBgSave = bgImgWeather[weatherInfo?.weather[0].id];
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [typeMeasurement]);

  return (
    <main
      className={`bg-[url('${imgBgSave}')] min-h-screen text-black flex justify-around flex-col items-center p-4 font-Lato`}
    >
      <form className="rounded-full overflow-hidden">
        <input
          className="py-2 px-4 text-center" type="text" placeholder="Type the city..."
        />
        <button className="bg-slate-950 py-2 px-4 text-white">Search</button>
      </form>
      <Weather
        weatherInfo={weatherInfo}
        typeMeasurement={typeMeasurement}
        setTypeMeasurement={setTypeMeasurement}
      />
    </main>
  );
}

export default App;
