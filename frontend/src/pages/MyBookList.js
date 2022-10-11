import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BookList from '../components/BookList';

const MyBookList = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const [bookList, setBookList] = useState([]);
  const [isBooksLoading, setIsBooksLoading] = useState(true);

  useEffect(() => {
    setIsBooksLoading(true);
    if (user) {
      fetch(`/api/users/subscribed/${user.sub}`)
        .then((res) => res.json())
        .then((data) => {
          setBookList(data.subscribedList);
          setIsBooksLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (!isAuthenticated) {
    return <p>Please login</p>;
  }

  return (
    <Container>
      <SectionTitle>
        <UserName>{user.name}</UserName>'s subscriptions
      </SectionTitle>
      {isBooksLoading ? (
        'Loading books...'
      ) : (
        <BookList books={bookList} showStatus={false} />
      )}
    </Container>
  );
};

export default MyBookList;

const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  margin: 0.5em 0;
`;

const UserName = styled.span`
  color: blue;
`;
