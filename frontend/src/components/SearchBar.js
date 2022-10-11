import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSearchQuery } from '../context.js/SearchContext';

const SearchBar = () => {
  const { state, dispatch } = useSearchQuery();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    dispatch({ type: 'HANDLE_INPUT_CHANGE', payload: e.target.value });
  };

  const handleSearchBook = () => {
    navigate(`/books`);
  };

  return (
    <SearchBarWrapper>
      <SearchInput
        type='search'
        value={state.query}
        onChange={handleInputChange}
        placeholder='Search for books'
      />
      <SearchButton onClick={handleSearchBook}>Search</SearchButton>
    </SearchBarWrapper>
  );
};
export default SearchBar;

const SearchBarWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 360px;
  margin: 0 1em;
`;

const SearchInput = styled.input`
  font-size: 1em;
  padding: 0.5em;
  border-radius: 4px;
  flex: 1;
  margin-right: 0.5em;
  border: 1px solid #333;
`;

const SearchButton = styled.button`
  background-color: #6143e1;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
  border: 1px solid #6143e1;
  cursor: pointer;
`;
