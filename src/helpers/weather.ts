import { app } from 'types/types';

export function getCityOrTown(
  location: app.GeoCodeResultComponents
): string | undefined {
  if (location?.city) return location.city;
  if (location?.town) return location.town;
  return undefined;
}

export function getWeatherName(name: string) {
  switch (name) {
    case 'Clear':
      return 'Céu Limpo';
    case 'Clouds':
      return 'Nublado';
    case 'Thunderstorm':
      return 'Tempestade';
    case 'Drizzle':
      return 'Garoa';
    case 'Rain':
      return 'Chuva';
    case 'Snow':
      return 'Neve';
    case 'Mist':
      return 'Névoa';
    case 'Smoke':
      return 'Névoa';
    case 'Haze':
      return 'Neblina';
    case 'Dust':
      return 'Nuvem de poeira';
    case 'Fog':
      return 'Névoa';
    case 'Sand':
      return 'Nuvem de Areia';
    case 'Ash':
      return 'Cinzas';
    case 'Squall':
      return 'Rajada';
    case 'Tornado':
      return 'Tornado';
    default:
      return 'Nublado';
  }
}

export function getWeatherLocation(
  searchLocation: app.GeoCodeResultComponents,
  type = 'short'
): string | undefined {
  const state = searchLocation?.state;
  const country = searchLocation?.country;
  const stateCode = searchLocation?.state_code;
  const locationCity = getCityOrTown(searchLocation);

  if (locationCity) {
    if (type === 'short')
      return [locationCity, stateCode].filter(Boolean).join(' ');
    return [locationCity, stateCode, country].filter(Boolean).join(' - ');
  }

  if (state) {
    if (type === 'short') return state;
    return [state, country].filter(Boolean).join(' - ');
  }
  return country;
}
