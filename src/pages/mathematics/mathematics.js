import "../subject.css";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";



export default function Mathematics() {
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
                  <li><Link to="/mathematics/">Introduction</Link></li>
                  <li><Link to="/mathematics/indices">Indices</Link></li>
                  <li><Link to="/mathematics/logarithms">Logarithms</Link></li>
                  <li><Link to="/mathematics/surds">Surds</Link></li>
                  <li><Link to="/mathematics/linear-equations">Linear Equations</Link></li>
                  
                </ul>
              </div>
              <div className="col25 mobile-side-bar" style={{maxWidth:showSideBar?"100%":"0%"}}>
                <h2>Topics</h2>
                <ul>
                  <li><Link to="/mathematics/" onClick={toTop}>Introduction</Link></li>
                  <li><Link to="/mathematics/indices" onClick={toTop}>Indices</Link></li>
                  <li><Link to="/mathematics/logarithms" onClick={toTop}>Logarithms</Link></li>
                  <li><Link to="/mathematics/surds" onClick={toTop}>Surds</Link></li>
                  <li><Link to="/mathematics/linear-equations" onClick={toTop}>Linear Equations</Link></li>
                  
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
  
  