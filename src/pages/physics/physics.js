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
                  <li><Link to="/physics/">Introduction</Link></li>
                  <li><Link to="/physics/motion">Motion</Link></li>
                  <li><Link to="/physics/expansion">Expansion</Link></li>
                  <li><Link to="/physics/vectors-scalars">Vector and Scalar</Link></li>
                  <li><Link to="/physics/heat-transfer">Heat Transfer</Link></li>
                </ul>
              </div>
              <div className="col25 mobile-side-bar" style={{maxWidth:showSideBar?"100%":"0%"}}>
                <h2>Topics</h2>
                <ul>
                  <li><Link to="/physics/" onClick={toTop}>Introduction</Link></li>
                  <li><Link to="/physics/motion" onClick={toTop}>Motion</Link></li>
                  <li><Link to="/physics/expansion" onClick={toTop}>Expansion</Link></li>
                  <li><Link to="/physics/vectors-scalars" onClick={toTop}>Vector and Scalar</Link></li>
                  <li><Link to="/physics/heat-transfer" onClick={toTop}>Heat Transfer</Link></li>
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