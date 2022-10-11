import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <Container>
      <Header>
        <Avatar src={user.picture} alt={user.name} />
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </Header>
    </Container>
  ) : (
    <p>Not authenticated</p>
  );
};

export default Profile;

const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  gap: 1em;
  align-items: center;
  padding: 1em 0;
`;

const Avatar = styled.img`
  width: 84px;
  height: 84px;
`;
