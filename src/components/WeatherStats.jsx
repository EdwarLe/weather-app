const WeatherStats = ({ weatherInfo, src, typeMeassure }) => {
  return (
    <article className="grid grid-cols-[0.5fr_1fr] place-items-center">
      <div>
        <img className="h-5" src={src} alt="" />
      </div>
      <span className="text-sm">{weatherInfo} {typeMeassure}</span>
    </article>
  );
};
export default WeatherStats;
