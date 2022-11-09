import { useState } from "react";
import { Link } from "react-router-dom";
function Nav() {

  const [showNav, setShowNav] = useState(false);
  
  const menuToggle = () => setShowNav(prev => !showNav);
    return (
      <>
      <nav className="navbar">
        <Link to="/" className="logo">StudiRepo</Link>
          <ul className="nav-list">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <li>Subjects</li>
          </ul>
          <div className="menu-icon2" onClick={menuToggle}>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            </div>
      </nav>
      <nav className="mobile-navbar">
        <ul className="mobile-nav-list" style={{maxHeight:showNav?"100%":"0%"}}>
          <CustomLink to="/" onClick={menuToggle}>Home</CustomLink>
          <CustomLink to="/about" onClick={menuToggle}>About</CustomLink>
          <CustomLink to="/contact" onClick={menuToggle}>Contact</CustomLink>
          <li>Subjects</li>
        </ul>
    </nav>
    </>
    );
  }

  
  function CustomLink({to, children, ...props}){
    const path = window.location.pathname
    

    return(
      <li className={path === to? "active":""}>
        <Link to={to} {...props}>{children}</Link>
      </li>

    )
  }
  
  export default Nav;
  