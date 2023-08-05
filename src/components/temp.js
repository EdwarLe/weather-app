export const handleChangeMeasurement = (setTypeMeasurement) => {
  setTypeMeasurement((typeMeasurement) =>
    typeMeasurement != "metric" ? "metric" : "imperial"
  );
};

export const bgImgWeather = {
  801: "/images/fewClouds.webp",
  802: "/images/fewClouds.webp",

  803: "/images/brokenClouds.webp",

  804: "/images/overcastClouds.webp",

  800: "/images/clearSky.webp",

  600: "/images/snow.webp",
  601: "/images/snow.webp",
  602: "/images/snow.webp",
  611: "/images/snow.webp",
  612: "/images/snow.webp",
  613: "/images/snow.webp",
  615: "/images/snow.webp",
  616: "/images/snow.webp",
  620: "/images/snow.webp",
  621: "/images/snow.webp",
  622: "/images/snow.webp",

  504: "/images/extremeRain.webp",
  511: "/images/extremeRain.webp",
  520: "/images/extremeRain.webp",
  521: "/images/extremeRain.webp",
  522: "/images/extremeRain.webp",
  531: "/images/extremeRain.webp",

  500: "/images/moderateRain.webp",
  501: "/images/moderateRain.webp",
  502: "/images/moderateRain.webp",
  503: "/images/moderateRain.webp",

  200: "/images/thunderstorm.webp",
  201: "/images/thunderstorm.webp",
  202: "/images/thunderstorm.webp",
  210: "/images/thunderstorm.webp",
  211: "/images/thunderstorm.webp",
  212: "/images/thunderstorm.webp",
  221: "/images/thunderstorm.webp",
  230: "/images/thunderstorm.webp",
  231: "/images/thunderstorm.webp",
  232: "/images/thunderstorm.webp",
};
