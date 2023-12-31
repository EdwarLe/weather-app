import WeatherStats from "./WeatherStats";
import countryList from "./../assets/slim-2.json";
import { handleChangeMeasurement } from "./utils/temp";
import { iconWeather } from "./utils/temp";

const Weather = ({
  typeMeasurement,
  setTypeMeasurement,
  validateCitySearch,
  updateSearchCity,
  language,
}) => {
  const countryFound = (country) => {
    return country.alpha === validateCitySearch?.sys.country;
  };

  const countryName = countryList.find(countryFound);

  return (
    <section className="grid gap-4 max-w-[400px] w-full place-items-center sm:max-w-[600px]">
      <h3 className="text-center text-xl text-slate-950 font-bold bg-white/50 p-2 rounded-xl dark:bg-black/50 dark:text-white">
        {validateCitySearch.name}, {countryName.name}
      </h3>
      <section className="grid gap-4 w-full place-items-center sm:grid-cols-[auto_auto]">
        <section className="bg-white/50 rounded-3xl w-full grid grid-cols-[auto_auto] place-items-center h-40 grid-rows-[auto_auto] sm:h-72 dark:bg-black/50 min-[400px]:h-56">
          <h4 className="col-span-2 pt-4 capitalize">
            {validateCitySearch.weather[0].description}
          </h4>
          <span className="text-7xl font-extralight px-4 min-[400px]:text-8xl">
            {typeMeasurement === "metric"
              ? `${Math.floor(validateCitySearch.main.temp)}°C`
              : `${Math.floor(validateCitySearch.main.temp)}°F`}
          </span>
          <div className="w-3/4 min-[400px]:w-full pr-2">
            <img
              src={`${iconWeather[validateCitySearch.weather[0].icon]}`}
              alt="" className="mr-1-0"
            />
          </div>
        </section>
        <section className="bg-white/50 rounded-3xl grid grid-cols-3 divide-x-2 divide-slate-600/50 py-6 w-full sm:grid-rows-3 sm:grid-cols-1 sm:h-72 sm:divide-y-2 sm:divide-x-0 dark:bg-black/50">
          <WeatherStats
            validateCitySearch={validateCitySearch.wind.speed}
            src={"/images/wind.png"}
            typeMeassure={typeMeasurement === "metric" ? `m/s` : `mph`}
          />

          <WeatherStats
            validateCitySearch={validateCitySearch.main.humidity}
            src={"/images/humidity.png"}
            typeMeassure={"%"}
          />

          <WeatherStats
            validateCitySearch={validateCitySearch.main.pressure}
            src={"/images/pressure.png"}
            typeMeassure={"hPa"}
          />
        </section>
      </section>
      <button
        onClick={() =>
          handleChangeMeasurement(setTypeMeasurement, updateSearchCity)
        }
        className="bg-white rounded-full w-40 py-2 text-blue-800 dark:bg-slate-950 dark:text-white hover:bg-slate-950 hover:text-white transition-colors hover:dark:bg-sky-700 border"
      >
        {language === "en"
          ? typeMeasurement === "metric"
            ? `Change to °F`
            : `Change to °C`
          : typeMeasurement === "metric"
          ? `Cambiar a °F`
          : `Cambiar a °C`}
      </button>
    </section>
  );
};
export default Weather;
