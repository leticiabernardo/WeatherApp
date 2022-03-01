/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render, cleanup, waitFor } from '@testing-library/react';
import Weathers from '../index';

const current: app.CurrentWeather = {
  date: 1645452000,
  pressure: 25,
  humidity: 7,
  wind_speed: 80,
  weather: 'Clear' as app.WeatherName,
  temperature: 27,
  fullTemperature: '27 °C',
  location: 'Ceará',
};

const daily: app.DailyWeathers[] = [
  {
    date: 1645452000,
    pressure: 25,
    humidity: 7,
    wind_speed: 80,
    weather: 'Clear',
    temp: {
      min: 23,
      max: 32,
    },
  },
];

const temperatureMeasurementUnit: app.MeasurementUnit = 'celsius';
const weathers: app.WeatherResponse = { current, daily };

class MockDate extends Date {
  constructor() {
    super('2020-05-14T11:47:10Z');
  }
}

describe('weathers render', () => {
  afterEach(cleanup);

  test('render the component', async () => {
    // @ts-ignore
    global.Date = MockDate;
    const { container } = await waitFor(() =>
      render(
        <Weathers
          weathers={weathers}
          temperatureMeasurementUnit={temperatureMeasurementUnit}
        />
      )
    );
    expect(container).toMatchSnapshot();
  });
});
