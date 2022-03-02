import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tooltip,
} from '@chakra-ui/react';
import { ReactComponent as IconSearch } from '@/assets/images/icon-search.svg';
import { ReactComponent as IconGeolocation } from '@/assets/images/icon-map.svg';
import { sanitizeString } from '@/helpers/strings';
import { useCustomToast } from '@/hooks/customToast';

interface SearchProps {
  setSearch: (search: string) => void;
}

const Search = ({ setSearch }: SearchProps): JSX.Element => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const toast = useCustomToast();

  const handleSearchClick = () => {
    const place = sanitizeString(searchValue);
    if (place === '') return;
    setSearch(place);
  };

  const handleGeolocationClick = () => {
    toast({
      title: t('Searching for your geolocation...'),
      status: 'info',
    });
    if (!('geolocation' in navigator)) {
      toast({
        title: t('Geolocation is not supported by your browser'),
        status: 'error',
      });
      return;
    }
    navigator.geolocation.getCurrentPosition(function (position): void {
      if (position?.coords?.latitude && position?.coords?.longitude) {
        const coords = [
          position.coords.latitude,
          position.coords.longitude,
        ].join(',');
        setSearch(coords);
      }
    });
  };

  return (
    <div>
      <InputGroup size="md">
        <InputLeftElement background="transparent">
          <Tooltip
            label={t('Click here to use your current location')}
            aria-label="geolocation"
            hasArrow
            placement="left"
          >
            <Button
              h="1.75rem"
              size="sm"
              variant="link"
              color="white"
              _focus={{ outline: 'none' }}
              onClick={handleGeolocationClick}
              data-testid="geolocation-button"
            >
              <IconGeolocation fill="white" width="20px" height="20px" />
            </Button>
          </Tooltip>
        </InputLeftElement>
        <Input
          placeholder={t('city, state or country...')}
          outline="none"
          color="white"
          fontWeight="bold"
          _focus={{
            outline: 'none',
            backdropFilter: 'blur(9px)',
          }}
          _placeholder={{ color: '#a9a9a9' }}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              handleSearchClick();
            }
          }}
        />
        <InputRightElement width="3rem">
          <Button
            h="1.75rem"
            size="sm"
            variant="link"
            color="white"
            _focus={{ outline: 'none' }}
            onClick={handleSearchClick}
            data-testid="search-button"
          >
            <IconSearch fill="white" width="20px" height="20px" />
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};

export default Search;
