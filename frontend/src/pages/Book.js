import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Book = () => {
  const { id } = useParams();
  const { user } = useAuth0();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [author, setAuthor] = useState(null);
  const navigate = useNavigate();

  const handleWishlist = () => {
    fetch(`/api/books/wishlist/${book._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user.sub }),
    })
      .then((res) => res.json())
      .then((data) => {
        // if wishlisted, naviaget to wishlist page
        if (data.status === 200) navigate('/wishlist');
      })
      .catch((err) => console.log(err));
  };

  const handleSubscribe = () => {
    fetch(`/api/books/subscribe/${book._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user.sub }),
    })
      .then((res) => res.json())
      .then((data) => {
        // if subscribed, naviagte to my booklist page
        if (data.status === 200) navigate('/my-booklist');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBook(data.book);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(true);
      });
  }, [id]);

  // load book author
  useEffect(() => {
    if (book) {
      fetch(`/api/users/${book.author}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.user);
          setAuthor(data.user);
        })
        .catch((err) => console.log(err));
    }
  }, [book]);

  // loader while fetching book data
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

  if (error) {
    return <p>Some error occured</p>;
  }

  return (
    <div>
      <Container>
        <BookDetailed>
          <img src={book.cover_image} alt='' />
          <BookInfo>
            <h2>{book.title}</h2>
            <p>{author?.name}</p>

            <CategoryList>
              {book.category.map((cat, i) => (
                <Category key={i}>{cat}</Category>
              ))}
            </CategoryList>

            <b>More Details:</b>
            <ul>
              <li>Pages: {book.pages}</li>
              <li>ISBN: {book.isbn}</li>
              <li>Release Date: {book.releaseDate}</li>
            </ul>

            <ButtonContainer>
              <WishlistButton onClick={handleWishlist}>Wishlist</WishlistButton>
              <SubscribeButton onClick={handleSubscribe}>
                Subscribe
              </SubscribeButton>
            </ButtonContainer>
          </BookInfo>
        </BookDetailed>
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

const BookDetailed = styled.div`
  width: 100%;
  margin-top: 2em;
  display: flex;
  box-shadow: 0 0 10px #ccc;
  border-radius: 6px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 320px;
    max-width: 240px;
    border-radius: 4px;
  }
`;

const BookInfo = styled.div`
  padding: 1em 2em;
  h2 {
    margin-bottom: 0.5em;
  }
  b {
    display: inline-block;
    margin-top: 1em;
  }
  ul {
    padding: 1em 1.5em;
  }
`;

const CategoryList = styled.div`
  margin-top: 1em;
  display: flex;
  gap: 8px;
`;

const Category = styled.div`
  background-color: #eeeaea;
  color: blue;
  padding: 4px 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5em;

  button {
    font-size: 1em;
  }
`;

const WishlistButton = styled.button`
  background-color: #fff;
  color: #6143e1;
  padding: 0.5em 1em;
  border: none;
  margin-top: 0.5em;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #6143e1;

  :hover {
    background-color: blue;
    color: #fff;
  }
`;

const SubscribeButton = styled.button`
  background-color: #6143e1;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  margin-top: 0.5em;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #6143e1;

  :hover {
    background-color: blue;
  }
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
