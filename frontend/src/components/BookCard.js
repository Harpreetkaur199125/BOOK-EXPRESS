import styled from 'styled-components';
import { BsBookmark } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useNavigate } from 'react-router-dom';

const BookCard = ({ book, showStatus }) => {
  const [author, setAuthor] = useState(null);
  const { user } = useAuth0();
  const navigate = useNavigate();

  //
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

  // load book authors
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
      <Link to={`books/${book._id}`}>
        <img src={book.cover_image} alt='' />
      </Link>

      {/* show wishlist button after author has been fetched */}
      {author?.name && (
        <WishListButton title='Wishlist this book' onClick={handleWishlist}>
          <BsBookmark />
        </WishListButton>
      )}

      <div>
        <h3>{book.title}</h3>
        {/* if author is same as the logged in user, then show loggedin user's name */}
        <p>
          {book.author === user?.sub
            ? user?.name || user?.nickname
            : author?.name}
        </p>

        {/* status is for whether we want to show subscription status or not */}
        {showStatus && (
          <SubscribeButton onClick={handleSubscribe}>
            {book.subscribedBy.includes(user?.sub) ? 'Subscribed' : 'Subscribe'}
          </SubscribeButton>
        )}
      </div>
    </Card>
  );
};

export default BookCard;

const Card = styled.div`
  width: 100%;
  min-width: 200px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  img {
    /* aspect-ratio: 3/4; */

    /* max-width: 200px; */
    max-height: 200px;
    border-radius: 4px;
    margin-bottom: 1em;
  }

  a {
    text-decoration: none;
  }

  div {
    flex: 1;
    padding: 0 1em 1em 1em;
    word-wrap: break-word;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  :hover {
    box-shadow: 0 0 10px #ccc;
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
  display: block;
  width: 100%;
  background-color: #6143e1;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  margin-top: 0.5em;
  cursor: pointer;
  border-radius: 4px;

  :hover {
    background-color: blue;
  }
`;
