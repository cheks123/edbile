import TopicNav from "../topic-nav";

export default function Changes() {
    return (
      <>             
                <h1>Changes</h1>
                <div className="subject-navigation">
                  <TopicNav previous="/chemistry/mixtures" next="/chemistry/changes" />
                </div>

                <p>Mathematics is an essential subject that has application in all fields of life.
                  It is one of the compulsory subjects in the Nigerian curriculum. Without passing 
                  mathematics, it is impossible for a student to gain admission into the university. 
                  Students should therefore put in there best in ensuring that they have a good grasp 
                  of the subject in other to be able to make progress in their academics.
                </p>
                <p>On this platform, let us work on the following topics with you:</p>
                <ul>
                  <li>Indices</li>
                  <li>Logarithms</li>
                  <li>Surds</li>
                  <li>Linear Equations</li>
                  <li>Quadratic Equations</li>
                  <li>Circle Theory</li>
                  <li>Trigonometric Ratios</li>
                  <li>Longitude and Latitude</li>
                </ul>
                <div className="subject-navigation">
                    <TopicNav previous="/chemistry/mixtures" next="/chemistry/changes" />
                </div>

      </>
    );
  }
  