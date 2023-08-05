export const handleChangeMeasurement = (setTypeMeasurement) => {
  setTypeMeasurement((typeMeasurement) =>
    typeMeasurement != "metric" ? "metric" : "imperial"
  );
};

export const bgImgWeather = {
  801: "bg-[url('/images/fewClouds.webp')]",
  802: "bg-[url('/images/fewClouds.webp')]",

  803: "bg-[url('/images/brokenClouds.webp')]",

  804: "bg-[url('/images/overcastClouds.webp')]",

  800: "bg-[url('/images/clearSky.webp')]",

  600: "bg-[url('/images/snow.webp')]",
  601: "bg-[url('/images/snow.webp')]",
  602: "bg-[url('/images/snow.webp')]",
  611: "bg-[url('/images/snow.webp')]",
  612: "bg-[url('/images/snow.webp')]",
  613: "bg-[url('/images/snow.webp')]",
  615: "bg-[url('/images/snow.webp')]",
  616: "bg-[url('/images/snow.webp')]",
  620: "bg-[url('/images/snow.webp')]",
  621: "bg-[url('/images/snow.webp')]",
  622: "bg-[url('/images/snow.webp')]",

  504: "bg-[url('/images/extremeRain.webp')]",
  511: "bg-[url('/images/extremeRain.webp')]",
  520: "bg-[url('/images/extremeRain.webp')]",
  521: "bg-[url('/images/extremeRain.webp')]",
  522: "bg-[url('/images/extremeRain.webp')]",
  531: "bg-[url('/images/extremeRain.webp')]",

  500: "bg-[url('/images/moderateRain.webp')]",
  501: "bg-[url('/images/moderateRain.webp')]",
  502: "bg-[url('/images/moderateRain.webp')]",
  503: "bg-[url('/images/moderateRain.webp')]",

  200: "bg-[url('/images/thunderstorm.webp')]",
  201: "bg-[url('/images/thunderstorm.webp')]",
  202: "bg-[url('/images/thunderstorm.webp')]",
  210: "bg-[url('/images/thunderstorm.webp')]",
  211: "bg-[url('/images/thunderstorm.webp')]",
  212: "bg-[url('/images/thunderstorm.webp')]",
  221: "bg-[url('/images/thunderstorm.webp')]",
  230: "bg-[url('/images/thunderstorm.webp')]",
  231: "bg-[url('/images/thunderstorm.webp')]",
  232: "bg-[url('/images/thunderstorm.webp')]",
};
