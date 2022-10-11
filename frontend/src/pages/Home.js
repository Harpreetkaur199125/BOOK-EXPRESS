import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BookList from '../components/BookList';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        <SectionHeader>
          <SectionTitle>Books</SectionTitle>
          <AddBookLink to='add-book'>Add Book</AddBookLink>
        </SectionHeader>
        {isLoading ? (
          'Loading books...'
        ) : (
          <BookList books={books} showStatus={true} />
        )}
      </Container>
    </div>
  );
};
export default Home;

const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.h1`
  margin: 1em 0;
`;

const AddBookLink = styled(Link)`
  background-color: #6143e1;
  color: #fff;
  padding: 0.5em 1em;
  text-decoration: none;
`;
