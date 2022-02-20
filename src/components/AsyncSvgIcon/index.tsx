import { useDynamicSVGImport } from '@/hooks/asyncSVG';

type AsyncSvgIconProps = {
  svg: string;
  options?: {
    fill: string;
    width: string;
    height: string;
  };
};

const defaultProps = {
  options: {
    fill: 'white',
    width: '35px',
    height: '35px',
  },
};

const AsyncSvgIcon = ({ svg, options }: AsyncSvgIconProps) => {
  const { SvgIcon } = useDynamicSVGImport(svg, {});

  return SvgIcon ? (
    <SvgIcon
      fill={options?.fill}
      width={options?.width}
      height={options?.height}
    />
  ) : (
    <div />
  );
};
AsyncSvgIcon.defaultProps = defaultProps;

export default AsyncSvgIcon;
