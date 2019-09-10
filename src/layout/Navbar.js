import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../node_modules/fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/react-bootstrap/dist/react-bootstrap";
import {
  Button,
  NavDropdown,
  Nav,
  Form,
  FormControl
} from "../../node_modules/react-bootstrap";
const Navbar = props => {
  const { branding } = props;
  return (
    <React.Fragment>
      {/* <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> */}
    </React.Fragment>
  );
};

export default Navbar;
