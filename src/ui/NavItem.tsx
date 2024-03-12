import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Item {
  children: ReactNode;
  href: string;
}

export const NavItem = ({ children, href }: Item) => {
  return (
    <li>
      <Link to={href}>{children}</Link>
    </li>
  );
};
