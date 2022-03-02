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
const loading: app.Loader = { all: false, geocode: false };
const currentLocation = 'Recife, Pernambuco, Brasil';

class MockDate extends Date {
  constructor() {
    super('2020-05-14T11:47:10Z');
  }
}

describe('weathers render', () => {
  afterEach(cleanup);

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => {
        return {
          matches: false,
          addListener: () => {},
          removeListener: () => {},
        };
      },
    });

    Object.defineProperty(window, 'getComputedStyle', {
      value: () => {
        return {
          getPropertyValue: () => {},
        };
      },
    });
  });

  test('render the component with the weathers data', async () => {
    // @ts-ignore
    global.Date = MockDate;
    const { container } = await waitFor(() =>
      render(
        <Weathers
          weathers={weathers}
          temperatureMeasurementUnit={temperatureMeasurementUnit}
          loading={loading}
          currentLocation={currentLocation}
        />
      )
    );
    expect(container).toMatchSnapshot();
  });

  test('render the component without the weathers data', async () => {
    // @ts-ignore
    global.Date = MockDate;
    const { container } = await waitFor(() =>
      render(
        <Weathers
          weathers={undefined}
          temperatureMeasurementUnit={temperatureMeasurementUnit}
          loading={loading}
          currentLocation={currentLocation}
        />
      )
    );
    expect(container).toMatchSnapshot();
  });

  test('render the component loading all data', async () => {
    const isLoading = { all: true, geocode: true };
    // @ts-ignore
    global.Date = MockDate;
    const { container } = await waitFor(() =>
      render(
        <Weathers
          weathers={undefined}
          temperatureMeasurementUnit={temperatureMeasurementUnit}
          loading={isLoading}
          currentLocation={currentLocation}
        />
      )
    );
    expect(container).toMatchSnapshot();
  });

  test('render the component loading the geocode data', async () => {
    const isLoading = { all: false, geocode: true };
    // @ts-ignore
    global.Date = MockDate;
    const { container } = await waitFor(() =>
      render(
        <Weathers
          weathers={weathers}
          temperatureMeasurementUnit={temperatureMeasurementUnit}
          loading={isLoading}
          currentLocation={currentLocation}
        />
      )
    );
    expect(container).toMatchSnapshot();
  });
});
