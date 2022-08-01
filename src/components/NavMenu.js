import { useState } from "react";
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
  gap: 2rem;
`;

export const LinkContainer = styled.div`
  position: relative;
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
  padding-bottom: 1.5rem;
  margin-bottom: -1.5rem;

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

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  font-size: 0.95rem;
  padding: 1.5rem 0 0 0;

  @media (min-width: 1000px) {
    position: absolute;
    min-width: 8rem;
    background-color: var(--White);
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    padding: 1.5rem;
    transform: translateY(1.5rem);
  }
`;

export const IconLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
`;

export const LinkIcon = styled.img``;

export const Btns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
`;

function renderLinks(links, mobile) {
  let key = 0;
  let dropdownKey = 1000;

  return links.map((link) => {
    if (link.dropdownLinks) {
      const [menu, setMenu] = useState(false);

      return (
        <LinkContainer
          key={key++}
          onMouseOver={mobile ? undefined : () => setMenu(true)}
          onMouseLeave={mobile ? undefined : () => setMenu(false)}
          onClick={mobile ? () => setMenu(!menu) : undefined}
        >
          <DropdownLink>
            <Link>{link.label}</Link>
            <LinkIcon
              src={menu ? iconArrowUp : iconArrowDown}
              alt={menu ? "up-arrow-icon" : "down-arrow-icon"}
            />
          </DropdownLink>
          {menu && (
            <DropdownMenu>
              {link.dropdownLinks.map((menuLink) => {
                if (menuLink.iconSrc) {
                  return (
                    <IconLink key={dropdownKey++}>
                      <LinkIcon src={menuLink.iconSrc} alt={menuLink.iconAlt} />
                      <Link>{menuLink.label}</Link>
                    </IconLink>
                  );
                } else {
                  return <Link>{menuLink.label}</Link>;
                }
              })}
            </DropdownMenu>
          )}
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

const NavMenu = ({ className, mobile }) => {
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
    <Container className={className}>
      <Links>{renderLinks(links, mobile)}</Links>
      <Btns>{renderBtns(btns)}</Btns>
    </Container>
  );
};

export default NavMenu;
