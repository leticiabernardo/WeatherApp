import { render, cleanup, fireEvent } from '@testing-library/react';
import Search from '../index';

const props = {
  setSearch: jest.fn(),
  setError: jest.fn(),
};

describe('search render', () => {
  afterEach(cleanup);

  test('render the component', () => {
    const { container } = render(<Search {...props} />);
    expect(container).toMatchSnapshot();
  });
});

describe('search component events', () => {
  afterEach(cleanup);

  test('should click button to search with empty value', async () => {
    const { container, getByTestId } = render(<Search {...props} />);
    const button = getByTestId('search-button');
    await fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });

  test('should change the value of the search field', async () => {
    const { findByPlaceholderText } = render(<Search {...props} />);
    const input = (await findByPlaceholderText(
      'city, state or country...'
    )) as HTMLInputElement;
    await fireEvent.change(input, { target: { value: 'ceara' } });

    expect(input.value).toBe('ceara');
  });

  test('should click button to search value', async () => {
    const { container, getByTestId, findByPlaceholderText } = render(
      <Search {...props} />
    );
    const input = await findByPlaceholderText('city, state or country...');
    await fireEvent.change(input, { target: { value: 'ceara' } });

    const button = getByTestId('search-button');
    await fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });

  test('should key enter press to search value', async () => {
    const { container, findByPlaceholderText } = render(<Search {...props} />);

    const input = await findByPlaceholderText('city, state or country...');
    await fireEvent.change(input, { target: { value: 'ceara' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    expect(container).toMatchSnapshot();
  });
});

describe('successfully render location (latitude and longitude) by browser', () => {
  afterEach(cleanup);

  beforeEach(() => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce(success =>
        Promise.resolve(
          success({
            coords: {
              latitude: 51.1,
              longitude: 45.3,
            },
          })
        )
      ),
      clearWatch: jest.fn(),
      watchPosition: jest.fn(),
    };

    const navigator = { geolocation: mockGeolocation };

    Object.defineProperty(window, 'navigator', {
      value: navigator,
      writable: true,
    });
  });

  test('should click the button to get the users geolocation', async () => {
    const { container, getByTestId } = render(<Search {...props} />);
    const button = getByTestId('geolocation-button');
    await fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});

describe('error to render the location (latitude and longitude) by browser', () => {
  afterEach(cleanup);

  beforeEach(() => {
    const navigator = {};

    Object.defineProperty(window, 'navigator', {
      value: navigator,
      writable: true,
    });
  });

  test('should return error when clicking button to get user location', async () => {
    const { getByTestId } = render(<Search {...props} />);
    const button = getByTestId('geolocation-button');
    await fireEvent.click(button);
  });
});
