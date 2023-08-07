export const handleChangeMeasurement = (setTypeMeasurement) => {
  setTypeMeasurement((typeMeasurement) =>
    typeMeasurement != "metric" ? "metric" : "imperial"
  );
};

export const bgImgWeather = {
  "02d": "bg-[url('/images/fewClouds.webp')]",
  "02n": "bg-[url('/images/fewCloudsN.webp')]",

  "03d": "bg-[url('/images/brokenClouds.webp')]",
  "03n": "bg-[url('/images/brokenCloudsN.webp')]",

  "04d": "bg-[url('/images/overcastClouds.webp')]",
  "04n": "bg-[url('/images/overcastCloudsN.webp')]",

  "01d": "bg-[url('/images/clearSky.webp')]",
  "01n": "bg-[url('/images/clearSkyN.webp')]",

  "13d": "bg-[url('/images/snow.webp')]",
  "13n": "bg-[url('/images/snowN.webp')]",

  "10d": "bg-[url('/images/moderateRain.webp')]",
  "10n": "bg-[url('/images/moderateRainN.webp')]",

  "09d": "bg-[url('/images/extremeRain.webp')]",
  "09n": "bg-[url('/images/extremeRainN.webp')]",

  "11d": "bg-[url('/images/thunderstorm.webp')]",
  "11n": "bg-[url('/images/thunderstormN.webp')]",
};

export const iconWeather = {
  "02d": "/images/sunCloud.png",
  "02n": "/images/moonCloud.png",

  "03d": "/images/twoClouds.png",
  "03n": "/images/twoClouds.png",

  "04d": "/images/threeClouds.png",
  "04n": "/images/threeClouds.png",

  "01d": "/images/sun.png",
  "01n": "/images/moon.png",

  "13d": "/images/snowBlue.png",
  "13n": "/images/snowBlue.png",

  "10d": "/images/lightRain.png",
  "10n": "/images/lightRain.png",

  "09d": "/images/sunRain.png",
  "09n": "/images/moonRain.png",

  "11d": "/images/thunderCloud.png",
  "11n": "/images/thunderCloud.png",
};
