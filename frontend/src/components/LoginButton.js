import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;

const Button = styled.button`
  background-color: #6143e1;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  font-size: 1em;
  margin-left: 1em;
  cursor: pointer;
`;
