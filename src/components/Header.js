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
  position: ${(props) => (props.menu ? "fixed" : "static")};
  right: 3.25rem;
  margin-left: auto;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    z-index: 4;
  }
`;

const Header = ({ mobile, menu, setMenu }) => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      {mobile ? (
        <MenuIcon
          src={menu ? iconCloseMenu : iconMenu}
          alt={menu ? "menu-close-icon" : "menu-open-icon"}
          onClick={() => setMenu(!menu)}
          menu={menu}
        />
      ) : (
        <NavMenu mobile={mobile} />
      )}
    </Container>
  );
};

export default Header;
