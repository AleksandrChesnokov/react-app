import React from "react";
import { NavItem } from "../../../ui/NavItem.tsx";

interface MenuItem {
  title: string;
  href: string;
}

export const HeaderMenu = () => {
  const navItems: MenuItem[] = [
    { title: "Календарь", href: "/calendar" },
    { title: "Форма", href: "/form" },
  ];

  const liItems = navItems.map((item, index) => (
    <NavItem key={index} href={item.href}>
      {item.title}
    </NavItem>
  ));

  return (
    <nav className="menu">
      <ul>{liItems}</ul>
    </nav>
  );
};
