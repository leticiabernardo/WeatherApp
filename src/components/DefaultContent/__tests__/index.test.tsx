import { render, cleanup } from '@testing-library/react';
import DefaultContent from '../index';

describe('default content render', () => {
  afterEach(cleanup);

  test('render the component', () => {
    const { container } = render(<DefaultContent />);
    expect(container).toMatchSnapshot();
  });

  test('should be able to test component', () => {
    const { getByText } = render(<DefaultContent />);
    expect(getByText('Search to get started...')).toBeDefined();
    expect(() => getByText('no exist')).toThrow();
  });
});
