import { render, cleanup, waitFor } from '@testing-library/react';
import { useDynamicSVGImport } from '../asyncSVG';

function TestComponent({ name }: { name: string }) {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name);
  if (loading) {
    return <div>loading</div>;
  }
  if (SvgIcon) return <SvgIcon />;

  return <div>{error?.message}</div>;
}

describe('hook async svg test', () => {
  afterEach(cleanup);

  test('should return a component', async () => {
    const { container } = await waitFor(() =>
      render(<TestComponent name="icon-search.svg" />)
    );

    expect(container).toMatchSnapshot();
  });

  test('should return error', async () => {
    const { container } = await waitFor(() =>
      render(<TestComponent name="icon-search.error" />)
    );

    expect(container).toMatchSnapshot();
  });
});
