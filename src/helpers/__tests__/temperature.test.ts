import { getFullTemperature } from '@/helpers/temperature';

describe('temperature helper - get full temperature', () => {
  it('should return the full celsius temperature', () => {
    const temperature = 27;
    const metric = 'celsius';
    const expected = '27 °C';

    const fullTemperature = getFullTemperature(temperature, metric);
    expect(fullTemperature).toEqual(expected);
  });

  it('should return the full fahrenheit temperature', () => {
    const temperature = 27;
    const metric = 'fahrenheit';
    const expected = '81 °F';

    const fullTemperature = getFullTemperature(temperature, metric);
    expect(fullTemperature).toEqual(expected);
  });

  it('should return the full fahrenheit temperature', () => {
    const temperature = 0;
    const metric = 'celsius';
    const expected = '0 °C';

    const fullTemperature = getFullTemperature(temperature, metric);
    expect(fullTemperature).toEqual(expected);
  });
});
