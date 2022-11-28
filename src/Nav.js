import { useState } from "react";
import { Link } from "react-router-dom";
function Nav() {

  const [showNav, setShowNav] = useState(false);
  const [showSubjectList, setShowSubjectList] = useState(false)
  
  const menuToggle = () => setShowNav(prev => !showNav);

  const toggleSubjectDropDown = () => {
    setShowSubjectList(prev => !showSubjectList);
    console.log("showSubjectList: ", showSubjectList)}
    return (
      <>
      <nav className="navbar">
        <Link to="/" className="logo">StudiRepo</Link>
          <ul className="nav-list">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <li>
              <span className="subject-drop-down" onClick={toggleSubjectDropDown}>Subjects</span>
            </li>
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
    <div className="subject-list-drop-down" style={{ display:showSubjectList?"block":"none" }}>
      <button onClick={toggleSubjectDropDown}>X</button>
      <ul>
        <li><Link to="/mathematics/" onClick={toggleSubjectDropDown}>Mathematics</Link></li>
        <li><Link to="/physics/" onClick={toggleSubjectDropDown}>Physics</Link></li>
        <li><Link to="/chemistry/" onClick={toggleSubjectDropDown}>Chemistry</Link></li>
        <li><Link to="/biology/" onClick={toggleSubjectDropDown}>Biology</Link></li>
        <li><Link to="/economics/" onClick={toggleSubjectDropDown}>Economics</Link></li>
        <li><Link to="/commerce/" onClick={toggleSubjectDropDown}>Commerce</Link></li>
        <li><Link to="/government/" onClick={toggleSubjectDropDown}>Government</Link></li>
        <li><Link to="/civiceducation/" onClick={toggleSubjectDropDown}>Civic Education</Link></li>
        <li><Link to="/generalknowledge/" onClick={toggleSubjectDropDown}>General Knowledge</Link></li>
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
  
