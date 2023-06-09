import React from 'react';
import './Nav.css';
import companyLogo from '../icons_assets/Logo.svg';




function Nav() { 
  return ( 
    <ul>
      <img src={companyLogo} alt="Little Lemon logo"/>
      <li><a href="/home">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Menu">Menu</a></li>
      <li><a href="#Reservations">Reservations</a></li>
      <li><a href="#OrderOnline">Order Online</a></li>
      <li><a href="#Login">Login</a></li>
    </ul>
  ) 
} 

export default Nav;
