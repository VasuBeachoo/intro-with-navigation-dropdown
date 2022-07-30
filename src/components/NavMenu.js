import styled from "styled-components";
import Button from "./Button";
import iconArrowDown from "../assets/icon-arrow-down.svg";
import iconArrowUp from "../assets/icon-arrow-up.svg";
import iconTodo from "../assets/icon-todo.svg";
import iconCalendar from "../assets/icon-calendar.svg";
import iconReminders from "../assets/icon-reminders.svg";
import iconPlanning from "../assets/icon-planning.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const DropdownLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.35rem;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Link = styled.p`
  user-select: none;
  color: var(--Medium-Gray);
  opacity: 0.7;
  margin: 0;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: var(--Almost-Black);
    opacity: 1;
  }
`;

export const LinkIcon = styled.img``;

export const Btns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
`;

function renderLinks(links) {
  let key = 0;

  return links.map((link) => {
    if (link.dropdownLinks) {
      return (
        <LinkContainer key={key++}>
          <DropdownLink>
            <Link>{link.label}</Link>
            <LinkIcon src={iconArrowDown} alt="down-arrow-icon" />
          </DropdownLink>
        </LinkContainer>
      );
    } else {
      return <Link key={key++}>{link.label}</Link>;
    }
  });
}

function renderBtns(btns) {
  let key = 0;

  return btns.map((btn) => {
    switch (btn.type) {
      case "link":
        return <Link key={key++}>{btn.label}</Link>;
      case "button":
        return <Button key={key++}>{btn.label}</Button>;
      default:
        return <div key={key++}></div>;
    }
  });
}

const NavMenu = () => {
  const links = [
    {
      label: "Features",
      dropdownLinks: [
        { label: "Todo List", iconSrc: iconTodo, iconAlt: "todo-list-icon" },
        { label: "Calendar", iconSrc: iconCalendar, iconAlt: "calendar-icon" },
        {
          label: "Reminders",
          iconSrc: iconReminders,
          iconAlt: "reminders-icon",
        },
        { label: "Planning", iconSrc: iconPlanning, iconAlt: "planning-icon" },
      ],
    },
    {
      label: "Company",
      dropdownLinks: [
        { label: "History" },
        { label: "Our Team" },
        { label: "Blog" },
      ],
    },
    { label: "Careers" },
    { label: "About" },
  ];

  const btns = [
    { label: "Login", type: "link" },
    { label: "Register", type: "button" },
  ];

  return (
    <Container>
      <Links>{renderLinks(links)}</Links>
      <Btns>{renderBtns(btns)}</Btns>
    </Container>
  );
};

export default NavMenu;
