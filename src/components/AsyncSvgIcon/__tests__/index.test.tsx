import { render, cleanup, waitFor } from '@testing-library/react';
import AsyncSvgIcon from '../index';

describe('default wrapper render', () => {
  afterEach(cleanup);

  test('render the component', async () => {
    const { container } = await waitFor(() =>
      render(<AsyncSvgIcon svg="teste" />)
    );
    expect(container).toMatchSnapshot();
  });
});
