// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword
declare module app {
  // get weather one call
  export interface Weather {
    id: number;
    main: WeatherName;
    description: string;
    icon: string;
  }

  export interface CurrentWeatherForecast {
    dt?: number;
    temp?: number;
    pressure: number;
    humidity: number;
    wind_speed: number;
    weather: Weather[];
  }

  export interface DailyWeatherForecast {
    dt: number;
    temp: Temperature;
    pressure: number;
    humidity: number;
    wind_speed: number;
    weather: Weather[];
  }
  export interface WeatherOneCallResponse {
    current: CurrentWeatherForecast;
    daily: DailyWeatherForecast[];
  }

  export interface WeatherResponse {
    current: CurrentWeather;
    daily: DailyWeathers[];
  }

  export interface Temperature {
    min: number;
    max: number;
  }

  type MeasurementUnit = 'celsius' | 'fahrenheit';

  type WeatherName =
    | 'Clear'
    | 'Clouds'
    | 'Thunderstorm'
    | 'Drizzle'
    | 'Rain'
    | 'Snow'
    | 'Mist'
    | 'Smoke'
    | 'Haze'
    | 'Dust'
    | 'Fog'
    | 'Sand'
    | 'Ash'
    | 'Squall'
    | 'Tornado';

  export interface CurrentWeather {
    date?: number;
    pressure?: number;
    humidity?: number;
    wind_speed?: number;
    weather: WeatherName;
    temperature?: number;
    fullTemperature?: string;
    location?: string;
  }

  export interface DailyWeathers {
    date?: number;
    pressure?: number;
    humidity?: number;
    wind_speed?: number;
    weather: WeatherName;
    temp: Temperature;
  }

  // geocode
  export interface Geocode {
    results: GeoCodeResult[];
    total_results: number;
  }

  export interface GeoCodeResult {
    components: GeoCodeComponents;
    confidence: number;
    geometry: Geometry;
  }

  export interface GeoCodeComponents {
    country: string;
    country_code: string;
    state: string;
    state_code: string;
    city?: string;
    town?: string;
  }

  export interface Geometry {
    lat: number;
    lng: number;
  }

  // bing image background
  export interface BingBackgroundImage {
    value: BingImage[];
  }

  export interface BingImage {
    contentUrl: string;
    width: number;
    height: number;
  }

  export interface Background {
    background?: string;
  }
}

declare module '*.gif' {
  const content: string;
  export default content;
}
