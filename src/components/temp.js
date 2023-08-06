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
