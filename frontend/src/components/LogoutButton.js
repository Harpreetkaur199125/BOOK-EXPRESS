import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const LogoutButton = () => {
  const { logout } = useAuth0();

  // on clicking logout button, redirect to origin/root url
  return (
    <Button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;

const Button = styled.button`
  background-color: #fff;
  color: #6143e1;
  padding: 0.5em 1em;
  border: none;
  font-size: 1em;
  margin-left: 1em;
  cursor: pointer;
  border-radius: 4px;
`;
