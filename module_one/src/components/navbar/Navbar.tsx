import React from "react";
import { Navbar } from "react-bootstrap";

interface NavbarProps {
  Title: string;
}

const MyNavbar = ({ title: Title }): JSX.Element => {
  return (
    <Navbar>
      <a>{Title}</a>
      <a>Month 1</a>
      <a>Month 2</a>
      <a>Month 3</a>
      <a>Month 4</a>
      <a>Month 5</a>
      <a>Month 6</a>
    </Navbar>
  );
};

export default MyNavbar;
