import styled from 'styled-components';
import { BsBookmark } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book, showStatus }) => {
  const [author, setAuthor] = useState(null);
  const { user } = useAuth0();
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
        if (data.status === 200) navigate('/my-booklist');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(`/api/users/${book.author}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.user);
        setAuthor(data.user);
      })
      .catch((err) => console.log(err));
  }, [book.author]);

  return (
    <Card>
      <img src={book.cover_image} alt='' />
      {author?.name && (
        <WishListButton title='Wishlist this book' onClick={handleWishlist}>
          <BsBookmark />
        </WishListButton>
      )}
      <h2>{book.title}</h2>
      <p>
        {book.author === user?.sub
          ? user?.name || user?.nickname
          : author?.name}
      </p>

      {showStatus && (
        <SubscribeButton onClick={handleSubscribe}>
          {book.subscribedBy.includes(user?.sub) ? 'Subscribed' : 'Subscribe'}
        </SubscribeButton>
      )}
    </Card>
  );
};
export default BookCard;

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  img {
    aspect-ratio: 3/4;
    margin-bottom: 1em;
    max-height: 200px;
  }
`;

const WishListButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  font-size: 1.5em;
  cursor: pointer;
`;

const SubscribeButton = styled.button`
  background-color: #6143e1;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  margin-top: 0.5em;
  cursor: pointer;

  :hover {
    background-color: blue;
  }
`;
