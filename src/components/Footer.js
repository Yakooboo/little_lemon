import React from 'react';
import './Footer.css';
import companyLogo from '../icons_assets/Logo.svg';


function Footer() { 
  return ( 
<div class="footer">
    <img src={companyLogo} alt="Little Lemon logo"/>
    <ul class="foot_nav">
      <li><a href="/home">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Menu">Menu</a></li>
      <li><a href="#Reservations">Reservations</a></li>
      <li><a href="#OrderOnline">Order Online</a></li>
      <li><a href="#Login">Login</a></li>
    </ul>
    <ul class="Contact">
      <li>Address</li>
      <li>Phone</li>
      <li>Mail</li>
    </ul>
    <ul class="SocialMedia">
      <li>Address</li>
      <li>Phone</li>
      <li>Mail</li>
    </ul>
</div>
  ) 
} 

export default Footer;
