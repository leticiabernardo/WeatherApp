export function getCityOrTown(
  location: app.GeoCodeComponents
): string | undefined {
  if (location?.city) return location.city;
  if (location?.town) return location.town;
  return undefined;
}

export function getWeatherLocation(
  searchLocation: app.GeoCodeComponents,
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
