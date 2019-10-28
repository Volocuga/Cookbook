import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'reactstrap';

import Logo from '../../assets/img/logo.svg';
import style from './Header.module.scss';

const Header = () => (
  <>
    <header className={style.root}>
      <Container>
        <Navbar light className="py-3">
          <Link to="/" className={style.logo}>
            <img src={Logo} alt="logo" width={50} />
            Cookbook
          </Link>
          <Nav className="ml-auto" navbar>
            <Link className="btn btn-info" to="/create">
              Create
            </Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
    <div className={style.pseudoHeader} />
  </>
);

export default Header;
