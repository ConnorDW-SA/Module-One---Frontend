import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const MyNavbar: React.FC = () => {
  return (
    <Navbar className="bg-dark text-light d-flex justify-content-between px-5">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/unit_one">Unit 1</Nav.Link>
      <Nav.Link href="/unit_two">Unit 2</Nav.Link>
      <Nav.Link href="/unit_three">Unit 3</Nav.Link>
    </Navbar>
  );
};

export default MyNavbar;
