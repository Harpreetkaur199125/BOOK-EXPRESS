import styled from 'styled-components';

const Book = () => {
  return (
    <div>
      <Container>
        <h1>Book</h1>
      </Container>
    </div>
  );
};
export default Book;

const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`;
