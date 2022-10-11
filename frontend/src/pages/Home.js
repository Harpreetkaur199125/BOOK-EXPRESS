import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Banner from '../components/Banner';
import BookList from '../components/BookList';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
// This is to fetch books 
  useEffect(() => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

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
    <div>
      <Banner />
      <Container>
        <SectionHeader>
          <SectionTitle>Books</SectionTitle>
          <AddBookLink to='add-book'>Publish Book</AddBookLink>
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
  border-radius: 4px;
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
