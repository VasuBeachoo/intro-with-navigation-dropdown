import styled from "styled-components";

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  user-select: none;
  background-color: var(--Almost-Black);
  color: var(--Almost-White);
  border: 0.125rem solid var(--Almost-Black);
  border-radius: 0.5rem;
  padding: 0.65rem 1.15rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    background-color: var(--Almost-White);
    color: var(--Almost-Black);
  }
`;

export default Button;
