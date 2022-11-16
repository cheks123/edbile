import { useState } from "react";
import { Link } from "react-router-dom";
function Nav() {

  const [showNav, setShowNav] = useState(false);
  const [showSubjectList, setShowSubjectList] = useState(false)
  
  const menuToggle = () => setShowNav(prev => !showNav);

  const toggleSubjectDropDown = () => {setShowSubjectList(prev => !showSubjectList);
  console.log(showSubjectList)}
    return (
      <>
      <nav className="navbar">
        <Link to="/" className="logo">StudiRepo</Link>
          <ul className="nav-list">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <li><span className="subject-drop-down" onClick={toggleSubjectDropDown}>Subjects</span></li>
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
          <li><span className="subject-drop-down" onClick={toggleSubjectDropDown}>Subjects</span></li>
        </ul>
    </nav>
    <div className="subject-list-drop-down" style={{maxHeight:showSubjectList?"auto":"0%"}}>
      <ul>
        <li>Mathematics</li>
        <li>English Language</li>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>Biology</li>
        <li>Government</li>
        <li>Economics</li>
        <li>Commerce</li>
      </ul>
    </div>
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
  