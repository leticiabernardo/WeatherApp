import { useToast } from '@chakra-ui/react';

export function useCustomToast() {
  const toast = useToast({
    status: 'error',
    duration: 9000,
    variant: 'solid',
    isClosable: true,
    position: 'bottom',
  });

  return toast;
}
