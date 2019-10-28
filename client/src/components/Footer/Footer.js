import React from 'react';
import { ToastContainer } from 'react-toastify';
import style from './Footer.modile.scss';

const Footer = () => (
  <footer className={style.root}>
    <ToastContainer autoClose={4000} position="bottom-left" />
  </footer>
);

export default Footer;
