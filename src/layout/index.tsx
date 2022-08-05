import React from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Hello Layout!</header>
      <div>{children}</div>
    </div>
  );
};
