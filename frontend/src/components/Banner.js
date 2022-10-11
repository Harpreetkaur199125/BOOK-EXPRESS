import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Banner = () => {
  return (
    <BannerImage>
      <BannerContainer>
        <div>
          <h1>BookExpress</h1>
          <p>For all the book lovers</p>
          <ButtonLink to='books'>Explore Books</ButtonLink>
        </div>
        <img src='/books.png' alt='' />
      </BannerContainer>
    </BannerImage>
  );
};
export default Banner;

const BannerImage = styled.div`
  width: 100%;
  min-height: fit-content;
  position: relative;
  background-color: #6143e1;
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  div {
    flex: 1;
  }

  h1 {
    color: #fff;
    font-size: 4em;
  }
  p {
    color: #ccc;
    margin-bottom: 1em;
  }

  img {
    flex: 1;
    width: 50%;
    max-width: 240px;
    display: block;
    object-fit: cover;
  }
`;

const ButtonLink = styled(Link)`
  background-color: #fff;
  color: #6143e1;
  padding: 0.5em 1.5em;
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  font-weight: bold;
`;
