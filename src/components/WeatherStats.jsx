const WeatherStats = ({ validateCitySearch, src, typeMeassure }) => {
  return (
    <article className="grid grid-cols-[0.5fr_1fr] place-items-center px-2">
      <div>
        <img className="h-5 dark:invert" src={src} alt="" />
      </div>
      <span className="text-sm">
        {validateCitySearch} {typeMeassure}
      </span>
    </article>
  );
};
export default WeatherStats;
