import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NaviagtionBar>
      <Container>
        <Logo to='/'>
          <h1>Bookwish</h1>
        </Logo>

        <NavLinks>
          <li>
            <Link to='wishlist'>Wishlist</Link>
          </li>
          <li>
            <Link to='my-booklist'>My Reading List</Link>
          </li>
          <li>
            <LoginButton to='login'>Login</LoginButton>
          </li>
          <li>
            <SignupButton to='signup'>Signup</SignupButton>
          </li>
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

const LoginButton = styled(Link)``;

const SignupButton = styled(Link)`
  background-color: #6143e1 !important;
  color: #fff;
`;
