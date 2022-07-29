import styled from "styled-components";
import NavMenu from "./NavMenu";
import logo from "../assets/logo.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.img``;

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <NavMenu />
    </Container>
  );
};

export default Header;
