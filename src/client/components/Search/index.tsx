import { memo, useState } from 'react';
import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { useAppContext } from '@/client/Context';
import { ReactComponent as IconSearch } from '@/assets/images/icon-search.svg';
import { ReactComponent as IconGeolocation } from '@/assets/images/icon-map.svg';

interface Props {
  fetchWeathers: (search: string) => void;
  setSearch: (search: string) => void;
}

const Search = ({ fetchWeathers, setSearch }: Props): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchClick = () => {
    fetchWeathers(searchValue);
    setSearch(searchValue);
  };

  return (
    <div className="search">
      <InputGroup size="md">
        <InputLeftElement background="transparent">
          <Button
            h="1.75rem"
            size="sm"
            variant="link"
            color="white"
            _focus={{ outline: 'none' }}
          >
            <IconGeolocation fill="white" width="20px" height="20px" />
          </Button>
        </InputLeftElement>
        <Input
          placeholder="Nome da cidade..."
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
          >
            <IconSearch fill="white" width="20px" height="20px" />
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};

const MemoizedSearch = memo(Search, () => {
  return true;
});

const SearchWrapper = (): JSX.Element => {
  const { fetchWeathers, setSearch } = useAppContext();

  return <MemoizedSearch fetchWeathers={fetchWeathers} setSearch={setSearch} />;
};

export default SearchWrapper;
