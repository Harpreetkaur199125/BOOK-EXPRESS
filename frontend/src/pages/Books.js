import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BookList from '../components/BookList';
import { useSearchQuery } from '../context.js/SearchContext';

const Books = () => {
  const [books, setBooks] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true); 
  const { state } = useSearchQuery();
  const { query } = state;
// if query search exist search book otherwise fetch all books 
  useEffect(() => {
    if (query) {
      fetch(`/api/books?search=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setBooks(data.books);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      fetch('/api/books')
        .then((res) => res.json())
        .then((data) => {
          setBooks(data.books);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [query]);

  if (isLoading) {
    return (
      <Loading>
        <img
          src='https://thumbs.gfycat.com/BlandMildDungbeetle-size_restricted.gif'
          alt=''
        />
      </Loading>
    );
  }

  return (
    <Container>
      <BookList books={books} showStatus={true} />
    </Container>
  );
};
export default Books;

const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 2em auto;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;

  img {
    width: 50%;
    max-width: 120px;
  }
`;
