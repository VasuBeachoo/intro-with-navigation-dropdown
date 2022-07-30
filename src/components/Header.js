import styled from "styled-components";
import NavMenu from "./NavMenu";
import logo from "../assets/logo.svg";

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

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <NavMenu />
    </Container>
  );
};

export default Header;
