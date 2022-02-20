const convertToInt = (value: number | undefined): number => {
  return value ? Math.round(value) : 0;
};

const getMetricAbbr = (metric: string): string => {
  return metric === 'celsius' ? '°C' : '°F';
};

const convertCelsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

const getFullTemperature = (
  temperature: number,
  temperatureMetric: string
): string => {
  const abbr = getMetricAbbr(temperatureMetric);

  if (temperatureMetric === 'fahrenheit') {
    const fahrenheitTemp = convertCelsiusToFahrenheit(temperature);
    return `${convertToInt(fahrenheitTemp)} ${abbr}`;
  }
  return `${convertToInt(temperature)} ${abbr}`;
};

export { getFullTemperature };
