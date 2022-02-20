// eslint-disable-next-line @typescript-eslint/prefer-namespace-keyword
declare module app {
  // get weather one call
  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  export interface CurrentWeatherForecast {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
  }

  export interface DailyWeatherForecast {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
    clouds: number;
    pop: number;
    uvi: number;
  }

  export interface WeatherOneCallResponse {
    current: CurrentWeatherForecast;
    daily: DailyWeatherForecast[];
  }

  export interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  }

  export interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
  }

  // geocode
  export interface Geocode {
    results: GeoCodeResult[];
    total_results: number;
  }

  export interface GeoCodeResult {
    components: GeoCodeResultComponents;
    confidence: number;
    geometry: Geometry;
  }

  export interface GeoCodeResultComponents {
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
    totalEstimatedMatches: number;
    nextOffset: number;
    currentOffset: number;
    value: BingImage[];
  }

  export interface BingImage {
    contentUrl: string;
    encodingFormat: string;
    width: number;
    height: number;
  }
}

declare module '*.gif' {
  const content: string;
  export default content;
}
