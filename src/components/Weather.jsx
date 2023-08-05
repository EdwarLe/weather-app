import WeatherStats from "./WeatherStats";
import countryList from "./../assets/slim-2.json";
import { handleChangeMeasurement } from "./temp";

const Weather = ({ weatherInfo, typeMeasurement, setTypeMeasurement }) => {
  const countryFound = (country) => {
    return country.alpha === weatherInfo?.sys.country;
  };

  const countryName = countryList.find(countryFound);

  return (
    <section className="grid gap-4 max-w-[400px] w-full place-items-center sm:max-w-[600px]">
      <h3 className="text-center text-xl text-white font-bold">
        {weatherInfo?.name}, {countryName?.name}
      </h3>
      <section className="grid gap-4 w-full place-items-center sm:grid-cols-[auto_auto]">
        <section className="bg-white/50 rounded-3xl w-full grid grid-cols-[auto_auto] place-items-center h-56 grid-rows-[auto_1fr] sm:h-72">
          <h4 className="col-span-2 pt-4 capitalize">
            {weatherInfo?.weather[0].description}
          </h4>
          <span className="text-8xl font-extralight pl-4">
            {typeMeasurement === "metric"
              ? `${Math.floor(weatherInfo?.main.temp)}°c`
              : `${Math.floor(weatherInfo?.main.temp)}°f`}
          </span>
          <div className="pr-4">
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </section>
        <section className="bg-white/50 rounded-3xl grid grid-cols-3 divide-x-2 divide-slate-600/50 py-6 w-full sm:grid-rows-3 sm:grid-cols-1 sm:h-72 sm:divide-y-2 sm:divide-x-0">
          <WeatherStats
            weatherInfo={weatherInfo?.wind.speed}
            src={"/images/wind.png"}
            typeMeassure={typeMeasurement === "metric" ? `m/s` : `mph`}
          />

          <WeatherStats
            weatherInfo={weatherInfo?.main.humidity}
            src={"/images/humidity.png"}
            typeMeassure={"%"}
          />

          <WeatherStats
            weatherInfo={weatherInfo?.main.pressure}
            src={"/images/pressure.png"}
            typeMeassure={"hPa"}
          />
        </section>
      </section>
      <button
        onClick={() => handleChangeMeasurement(setTypeMeasurement)}
        className="bg-white rounded-full w-40 py-2 text-blue-800"
      >{typeMeasurement === "metric" ? `Cambiar a °F` : `Cambiar a °C`}
      </button>
    </section>
  );
};
export default Weather;
