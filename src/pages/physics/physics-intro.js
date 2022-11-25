import TopicNav from "../topic-nav";

export default function PhysicsIntro() {

    return (
      <>             
                <h1 className="subject-heading">Physics</h1>
                  <TopicNav previous="/physics/" next="/physics/motion" />
                  <p className="content-para">
                    The word ‘’PHYSICS’’ originates from the Greek word, ‘’PHYSIS’’, which means 
                    nature and natural characteristics. Physics as a body of scientific knowledge, 
                    deals with the study of events in the universe, both remote and immediate 
                    universe. In actual sense, physics deals with the behaviour of matter as 
                    well as the interaction of matter and natural forces. Physics is the study 
                    of matter in relation to energy.
                  </p>
                  <h2 className="content-h2">Importance of Physics</h2>
                  <ol className="content-ol">
                    <li>
                      1.	Physics is constantly striving to make sense of the universe. 
                      This is seen in the development of theories and new theories used for 
                      better understanding of the universe.
                    </li>
                    <li>
                      2.	When we study physics, we acquire the knowledge and skills to 
                      understand how and why natural things happen the way they do, and 
                      to make reliable predictions about their future occurrences. 
                      (e.g mirage, eclipse, earthquake, thunder,…)
                    </li>
                    <li>
                      3.	The knowledge of physics gives us a better understanding of our 
                      immediate and natural environment.
                    </li>
                    <li>
                      4.	The study of physics has enhanced the communication and the 
                      transportation world, thus, making the world a ‘’global village’’.
                    </li>
                    <li>
                      5.	Human health has been improved from the study of physics through 
                      the invention of modern medical equipment.
                    </li>
                  </ol>
                
                  <TopicNav previous="/physics/" next="/physics/motion" />
               

      </>
    );
  }
  