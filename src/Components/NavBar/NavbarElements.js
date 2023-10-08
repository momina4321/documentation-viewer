import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`

width: 250px;
  background-color: #333;
  color: white;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  padding-top: 20px;
`;

export const NavLink = styled(Link)`
color: white;
padding: 5px 20px;
text-decoration:none;
cursor: pointer;
&.active {
	color: #000000;
  text-decoration:bold;
}
`;










