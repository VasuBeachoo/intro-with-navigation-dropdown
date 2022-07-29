import styled from "styled-components";
import NavMenu from "./NavMenu";
import logo from "../assets/logo.svg";

export const Container = styled.div``;

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
