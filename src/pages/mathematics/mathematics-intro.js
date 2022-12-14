import TopicNav from "../topic-nav";
function MathematicsIntro() {
    return (
      <>             
                <h1 className="subject-heading">Mathematics</h1>
                
                  <TopicNav previous="/mathematics/" next="/mathematics/" />
               

                <p className="content-para">
                  Mathematics is an essential subject that has application in all fields of life.
                  It is one of the compulsory subjects in the Nigerian curriculum. Students should
                  therefore put in there best in ensuring that they have a good grasp of the 
                  subject in other to be able to make progress in their academics.
                </p>
                <p>On this platform, let us work on the following topics with you:</p>
                <ol className="content-ol">
                  <li>Indices</li>
                  <li>Logarithms</li>
                  <li>Surds</li>
                  <li>Linear Equations</li>
                  <li>Quadratic Equations</li>
                  <li>Circle Theory</li>
                  <li>Trigonometric Ratios</li>
                  <li>Longitude and Latitude</li>
                </ol>
                <TopicNav previous="/mathematics/" next="/mathematics/" />
              

      </>
    );
  }
  
  export default MathematicsIntro;
  