import styled from 'styled-components';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div>
      {books.length > 0 ? (
        <List>
          {books.map((book) => (
            <BookCard book={book} key={book._id} />
          ))}
        </List>
      ) : (
        <p>No Books found!</p>
      )}
    </div>
  );
};

export default BookList;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
`;
