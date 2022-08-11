function Nav() {
  
    return (
      <nav className="navbar">
        <a href="/" className="logo">EdMobile</a>
          <ul>
            <CustomLink href="/home">Home</CustomLink>
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/contacts">Contacts</CustomLink>
            <CustomLink href="/subjects">Subjects</CustomLink>
          </ul>
        
      </nav>
    );
  }

  
  function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    

    return(
      <li className={path === href? "active":""}>
        <a href={href} {...props}>{children}</a>
      </li>

    )
  }
  
  export default Nav;
  