import styled from 'styled-components';
import BookCard from './BookCard';

const BookList = ({ books, showStatus }) => {
  return (
    <div>
      {books.length > 0 ? (
        <List>
          {books.map((book) => (
            <BookCard book={book} key={book._id} showStatus={showStatus} />
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
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1em;
  margin-bottom: 2em;
`;
