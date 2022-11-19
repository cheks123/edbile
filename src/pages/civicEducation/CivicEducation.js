  import "../subject.css";
  import { Outlet, Link } from "react-router-dom";
  import { useState } from "react";
  
  
  
  export default function CivicEducation() {
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
                    <li><Link to="/civiceducation/">Introduction</Link></li>
                  </ul>
                </div>
                <div className="col25 mobile-side-bar" style={{maxWidth:showSideBar?"100%":"0%"}}>
                  <h2>Topics</h2>
                  <ul>
                    <li><Link to="/civiceducation/" onClick={toTop}>Introduction</Link></li>
                    
                  </ul>
                </div>
                
                <div className="col75 subject-outlet">
                  <Outlet/>
                  
                </div>
              </div>
              <div className="fab-icon" onClick={toggleSideNav}>. . .</div>
  
  
        </>
      );
    }
    
    
