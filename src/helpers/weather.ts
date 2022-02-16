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
