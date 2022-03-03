import { Container } from '@chakra-ui/react';

type WrapperProps = {
  children: React.ReactNode;
  backgroundImage?: string;
};

const defaultProps = {
  backgroundImage: undefined,
};

const DefaultWrapper = ({ children, backgroundImage }: WrapperProps) => {
  return (
    <Container
      maxW="100%"
      width="100%"
      height="100%"
      backgroundImage={backgroundImage ? `url(${backgroundImage})` : undefined}
      backdropFilter="contrast(80%)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      _after={{
        bgColor: 'rgba(0,0,0,0.3)',
        position: 'fixed',
        zIndex: '2',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'block',
        content: '""',
      }}
      display={{ base: 'inline-table', lg: 'block' }}
      padding="0px"
    >
      <Container
        maxW="1100px"
        mx="auto"
        width="100%"
        height={{ base: 'auto', lg: '100%' }}
        zIndex="100"
        position="relative"
      >
        {children}
      </Container>
    </Container>
  );
};

DefaultWrapper.defaultProps = defaultProps;
export default DefaultWrapper;
