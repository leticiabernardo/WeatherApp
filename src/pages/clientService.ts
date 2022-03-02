import axios from 'axios';

async function getGeoCode(searchValue: string, lang: string) {
  const response = await axios.get<app.Geocode>('/api/geocode', {
    params: {
      search: searchValue,
      language: lang,
    },
  });
  return response;
}

async function getBackground(searchValue: string | undefined) {
  const response = await axios.get<app.Background>('/api/background', {
    params: {
      search: searchValue,
    },
  });

  return response;
}

async function getWeathers(
  latitude: number | undefined,
  longitude: number | undefined,
  lang: string
) {
  const response = await axios.get<app.WeatherResponse>('/api/weathers', {
    params: {
      lat: latitude,
      lon: longitude,
      lang,
    },
  });

  return response;
}

export { getGeoCode, getBackground, getWeathers };
