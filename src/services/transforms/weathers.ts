const MAX_WEEK_DAYS = 7;

const getWeatherMain = (curr: app.CurrentWeatherForecast): app.WeatherName => {
  if (Array.isArray(curr.weather) && curr.weather.length > 0) {
    return curr.weather[0].main;
  }
  return 'Clear';
};

const mountCurrentWeather = (
  curr: app.CurrentWeatherForecast
): app.CurrentWeather => {
  const weather: app.CurrentWeather = {
    weather: getWeatherMain(curr),
    wind_speed: curr.wind_speed || undefined,
    humidity: curr.humidity || undefined,
    pressure: curr.pressure || undefined,
    date: curr.dt,
    temperature: curr.temp || undefined,
  };

  return weather;
};

const mountNextWeathers = (
  weathers: app.DailyWeatherForecast[]
): app.DailyWeathers[] => {
  return weathers.splice(0, MAX_WEEK_DAYS).map(weather => {
    const tempAverage = (weather.temp.max + weather.temp.min) / 2;
    return {
      ...mountCurrentWeather({ ...weather, temp: tempAverage }),
      temp: {
        min: weather.temp?.min || 0,
        max: weather.temp?.max || 0,
      },
    };
  });
};

const transformWeathers = (
  weathers: app.WeatherOneCallResponse
): app.WeatherResponse => {
  return {
    current: mountCurrentWeather(weathers.current || {}),
    daily: weathers.daily?.length > 0 ? mountNextWeathers(weathers.daily) : [],
  };
};

export { transformWeathers };
