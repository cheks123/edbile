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
                  <li><Link to="/chemistry/elements">Elements</Link></li>
                  <li><Link to="/chemistry/compounds">Compounds</Link></li>
                  <li><Link to="/chemstry/mixtures">Mixtures</Link></li>
                  <li><Link to="/chemistry/changes">Changes</Link></li>
                </ul>
              </div>
              <div className="col25 mobile-side-bar" style={{maxWidth:showSideBar?"100%":"0%"}}>
                <h2>Topics</h2>
                <ul>
                  <li><Link to="/chemistry/" onClick={toTop}>Introduction</Link></li>
                  <li><Link to="/chemistry/elements" onClick={toTop}>Elements</Link></li>
                  <li><Link to="/chemistry/compounds" onClick={toTop}>Compounds</Link></li>
                  <li><Link to="/chemistry/mixtures" onClick={toTop}>Mixture</Link></li>
                  <li><Link to="/chemistry/changes" onClick={toTop}>Changes</Link></li>
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
