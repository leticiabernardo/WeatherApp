import { Box, Button } from '@chakra-ui/react';

const LanguageSwitcher = () => {
  return (
    <Box as="span" padding="0 4px 4px" color="#a9a9a9">
      <Button variant="link" color="white">
        EN
      </Button>
      |
      <Button variant="link" color="white">
        PT
      </Button>
    </Box>
  );
};

export default LanguageSwitcher;
