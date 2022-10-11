import { createContext, useContext, useReducer } from 'react';

const INITIAL_STATE = {
  query: '',
};

// Search context is used
// for the search query param
// to bo accessible
// throughout our app

const SearchContext = createContext();

const reducers = (state, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT_CHANGE':
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchQuery = () => useContext(SearchContext);
