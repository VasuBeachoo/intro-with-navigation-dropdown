import styled from "styled-components";
import NavMenu, { Links, Btns } from "./NavMenu";

export const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 15rem;
  min-height: 100vh;
  background-color: var(--White);
  z-index: 3;
`;

export const MobileNavMenu = styled(NavMenu)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2.15rem;
  width: 100%;
  padding: 6.75rem 1.75rem 0;

  ${Links} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
    width: 100%;
  }

  ${Btns} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.15rem;
    width: 100%;
  }
`;

const MobileNav = ({ mobile }) => {
  return (
    <MobileContainer>
      <MobileNavMenu mobile={mobile} />
    </MobileContainer>
  );
};

export default MobileNav;
