//get the right symbol for the weather
const useWeatherSymbol = (weatherId) => {
    const thunderStorm = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
    const drizzle = [300, 301, 302, 310, 311, 312, 313, 314, 321];
    const rain = [500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
    const snow = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
    const atmosphere = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
    const clear = [800];
    const clouds = [801, 802, 803, 804];
  
    if (thunderStorm.includes(weatherId)) {
      return {
        symbol: "ThunderSymbol",
        bg: "lightning-bg"
      };
    } else if (drizzle.includes(weatherId)) {
      return {
        symbol: "HeighRainSymbol",
        bg: "raining-bg"
      };
    } else if (rain.includes(weatherId)) {
      return {
        symbol: "LowRainSymbol",
        bg: "raining-bg"
      };
    } else if (snow.includes(weatherId)) {
      return {
        symbol: "SnowSymbol",
        bg: "snowing-bg"
      };
    } else if (atmosphere.includes(weatherId)) {
      return {
        symbol: "AtmosphereSymbol",
        bg: "fog-bg"
      };
    } else if (clear.includes(weatherId)) {
      return {
        symbol: "SunnySymbol",
        bg: "sunny-bg"
      };
    } else if (clouds.includes(weatherId)) {
      if(weatherId === 801) {
        return {
          symbol: "PartlySunnySymbol",
          bg: "cloud-bg"
        };
      }
      return{
        symbol: "CloudySymbol",
        bg: "cloud-bg"
      }
    }else{
        return {
            symbol: "",
            bg: ""
        };
    }
}

export default useWeatherSymbol;