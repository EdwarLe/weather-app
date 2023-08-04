const Weather = ({ weatherInfo }) => {
  return (
    <section className="grid gap-7">
      <h1 className="text-center text-3xl">{weatherInfo?.name}</h1>
      <section className="">
        <h4>{weatherInfo?.weather[0].description}</h4>
        <span>{weatherInfo?.main.temp}°K</span>
        <div>
          <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png`} alt="" />
        </div>
      </section>
      <section>
        <article>
            <div>
                <img src="" alt="" />
            </div>
            <span>{weatherInfo?.wind.speed} m/s</span>
        </article>
        <article>
            <div>
                <img src="" alt="" />
            </div>
            <span>{weatherInfo?.main.humidity}%</span>
        </article>
        <article>
            <div>
                <img src="" alt="" />
            </div>
            <span>{weatherInfo?.main.pressure} hPa</span>
        </article>
      </section>
    </section>
  );
};
export default Weather;
