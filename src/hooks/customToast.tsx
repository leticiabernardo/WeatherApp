import { useToast } from '@chakra-ui/react';

export function useCustomToast() {
  const toast = useToast({
    duration: 9000,
    variant: 'solid',
    isClosable: true,
    position: 'bottom',
    containerStyle: {
      width: '400px',
    },
  });

  return toast;
}
