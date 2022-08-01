import styled from "styled-components";
import NavMenu from "./NavMenu";
import logo from "../assets/logo.svg";
import iconMenu from "../assets/icon-menu.svg";
import iconCloseMenu from "../assets/icon-close-menu.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 3rem;
`;

export const Logo = styled.img`
  width: 5.5rem;
  transform: translateY(0.175rem);
  margin: 0 4rem 0 0;
`;

export const MenuIcon = styled.img`
  margin-left: auto;
`;

const Header = ({ mobile }) => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      {mobile ? <MenuIcon src={iconMenu} alt="menu-open-icon" /> : <NavMenu />}
    </Container>
  );
};

export default Header;
