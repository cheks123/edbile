import { Outlet, Link } from "react-router-dom";
import { useState } from "react";


  

export default function Physics() {
  const [showSideBar, setShowSideBar] = useState(false)

  const toggleSideNav = () =>{
    setShowSideBar(prev => !showSideBar)
  }

 const toTop = () =>{
  toggleSideNav()
  window.scrollTo(0,0)
}
    return (
      <>
            <div className="row subject-content">
              <div className="col25 topics-side-bar">
                <h2>Topics</h2>
                <ul>
                  <li><Link to="/chemistry/">Introduction</Link></li>
                </ul>
              </div>
              <div className="col25 mobile-side-bar" style={{maxWidth:showSideBar?"100%":"0%"}}>
                <h2>Topics</h2>
                <ul>
                  <li><Link to="/chemistry/" onClick={toTop}>Introduction</Link></li>
                </ul>
              </div>
              <div className="col75">
                <Outlet/>
                
              </div>
            </div>
            <div className="fab-icon" onClick={toggleSideNav}>. . .</div>


      </>
    );
  }