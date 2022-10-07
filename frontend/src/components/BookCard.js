import styled from 'styled-components';

const BookCard = ({ book }) => {
  return (
    <Card>
      <img src={book.cover_image} alt='' />
      <h3>{book.title}</h3>
    </Card>
  );
};
export default BookCard;

const Card = styled.div`
  img {
    aspect-ratio: 3/4;
    margin-bottom: 1em;
  }
`;
