import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import SearchBar from './SearchBar';

const Navbar = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <NaviagtionBar>
      <Container>
        <Logo to='/'>
          <h1>
            Book<span style={{ color: '#6143e1' }}>Express</span>
          </h1>
        </Logo>

        <SearchBar />

        <NavLinks>
          <li>
            <Link to='wishlist'>Wishlist</Link>
          </li>
          <li>
            <Link to='my-booklist'>My Reading List</Link>
          </li>
          {isLoading ? (
            <Loading
              alt=''
              src='https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif'
            />
          ) : isAuthenticated ? (
            <>
              <li>
                <Link to='profile'>Profile</Link>
              </li>
              <li>
                <LogoutButton />
              </li>
            </>
          ) : (
            <LoginButton />
          )}
        </NavLinks>
      </Container>
    </NaviagtionBar>
  );
};

export default Navbar;

const NaviagtionBar = styled.nav`
  padding: 1em 0;
  box-shadow: 0 0 10px #ccc;
  a {
    text-decoration: none;
  }
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1000;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #6143e1;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    margin-left: 1em;
    padding: 0.5em;
  }
`;

const Loading = styled.img`
  width: 96px;
`;
