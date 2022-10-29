import { Outlet } from "react-router-dom"
function Mathematics() {
    return (
      <>
            <div className="row subject-content">
              <div className="col25">
                <h2>Topics</h2>
                <ul>
                  <li>Introduction</li>
                  <li>Indices</li>
                  <li>Logarithms</li>
                  <li>Surds</li>
                  <li>Linear Equations</li>
                  <li>Quadratic Equations</li>
                  <li>Circle Theory</li>
                  <li>Trigonometric Ratios</li>
                  <li>Longitude and Latitude</li>
                </ul>
              </div>
              <div className="col75">
                <Outlet/>
                
              </div>
            </div>

      </>
    );
  }
  
  export default Mathematics;
  