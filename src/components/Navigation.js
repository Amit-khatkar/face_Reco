import React, { Component } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

const Navigation = () => {
    return (
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/dashboard">Face Reco</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
    </Nav>
    <Navbar.Brand href="/login">Log out</Navbar.Brand>
      </Navbar>
    );
}
export default Navigation;
