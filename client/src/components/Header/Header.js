import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';
import Logo from '../../assets/img/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <header>
      <Navbar color="light" light expand="md">
        <Link to="/">
          <img src={Logo} alt="logo" width={50} />
        </Link>
        <NavItem>Cookbook</NavItem>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Link className="btn btn-info" to="/create">
              Create
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
