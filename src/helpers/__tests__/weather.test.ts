import { getWeatherLocation } from '@/helpers/weather';

describe('weather helper - get weather short location', () => {
  it('should return short city location', () => {
    const searchLocation = {
      country: 'Brasil',
      country_code: 'BR',
      state: 'São Paulo',
      state_code: 'SP',
      city: 'Campos do Jordão',
    };
    const expected = 'Campos do Jordão SP';

    const shortLocation = getWeatherLocation(searchLocation);
    expect(shortLocation).toEqual(expected);
  });

  it('should return short town location', () => {
    const searchLocation = {
      country: 'Brasil',
      country_code: 'BR',
      state: 'São Paulo',
      state_code: 'SP',
      town: 'Marília',
    };
    const expected = 'Marília SP';

    const shortLocation = getWeatherLocation(searchLocation);
    expect(shortLocation).toEqual(expected);
  });

  it('should return short state location', () => {
    const searchLocation = {
      country: 'Brasil',
      country_code: 'BR',
      state: 'São Paulo',
      state_code: 'SP',
    };
    const expected = 'São Paulo';

    const shortLocation = getWeatherLocation(searchLocation);
    expect(shortLocation).toEqual(expected);
  });
});

describe('weather helper - get weather long location', () => {
  const type = 'long';
  it('should return short long location', () => {
    const searchLocation = {
      country: 'Brasil',
      country_code: 'BR',
      state: 'Rio Grande do Sul',
      state_code: 'RS',
      city: 'Caxias do Sul',
    };
    const expected = 'Caxias do Sul - RS - Brasil';

    const shortLocation = getWeatherLocation(searchLocation, type);
    expect(shortLocation).toEqual(expected);
  });

  it('should return short long location', () => {
    const searchLocation = {
      country: 'Brasil',
      country_code: 'BR',
      state: 'Rio Grande do Sul',
      state_code: 'RS',
      town: 'Gramado',
    };
    const expected = 'Gramado - RS - Brasil';

    const shortLocation = getWeatherLocation(searchLocation, type);
    expect(shortLocation).toEqual(expected);
  });

  it('should return long state location', () => {
    const searchLocation = {
      country: 'Brasil',
      country_code: 'BR',
      state: 'Santa Catarina',
      state_code: 'SC',
    };
    const expected = 'Santa Catarina - Brasil';

    const shortLocation = getWeatherLocation(searchLocation, type);
    expect(shortLocation).toEqual(expected);
  });

  it('should return long country location', () => {
    const searchLocation = {
      country: 'Brasil',
      country_code: 'BR',
    };
    const expected = 'Brasil';

    const shortLocation = getWeatherLocation(searchLocation, type);
    expect(shortLocation).toEqual(expected);
  });
});
