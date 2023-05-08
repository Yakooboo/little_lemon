import React from 'react';
import './Nav.css';
import companyLogo from './Logo.svg';





const Nav = () => (
    <div className="nav">
   <Nav
activeKey="/home"
onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
<Nav.Item>
  <Nav.Link href="/home"><img src={companyLogo} alt="Little Lemon logo"/></Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href="/home">HOME</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href="#About">ABOUT</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href="#Menu">MENU</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href="#Reservations">RESERVATIONS</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="OrderOnline">ORDER ONLINE</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="Login">LOGIN</Nav.Link>
</Nav.Item>
</Nav>
    </div>
  )
  export default Nav; 


