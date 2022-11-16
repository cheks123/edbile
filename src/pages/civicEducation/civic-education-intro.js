import TopicNav from "../topic-nav";
export default function CivicEducationIntro() {
    return (
      <>             
                <h1 className="subject-heading">Civic Education</h1>
                <div className="subject-navigation">
                  <TopicNav previous="/civiceducation/" next="/civiceducation/indices" />
                </div>

                <p>
                    The word ‘Civic ‘is a Greek word which simply means,’ citizen of a city or an 
                    area’. Civics refers to educating the citizens. Civic Education simply means 
                    educational and learning activities specifically meant to create awareness, 
                    teach right values, right attitudes and behaviour that are acceptable to the 
                    society they live in. It can also be defined as the branch of learning that 
                    enables us to understand the activities of government, our rights as citizens, 
                    the duties and responsibilities we owe to ourselves and the society at large. 
                    Civics is the study of the theoretical and practical aspects of citizenship, 
                    its rights and duties; the duties of citizens to each other as members of a 
                    political body and to the government.

                </p>
                <h2>The need for Civic Education</h2>
                <ul>
                  <li>
                    1.	It enhances people capacity to understand their roles, obligations and 
                    duties to their fellow citizens and government
                  </li>
                  <li>
                    2.	It creates awareness among citizens on the duties of  the government 
                    to the citizens
                  </li>
                  <li>
                    3.	Civic Education also generates concern for the values by which a 
                    civilized society is identified.
                    </li>
                    <li>
                      4.	.It is for public education and awareness.
                    </li>
                </ul>
                <div className="subject-navigation">
                 <TopicNav previous="/Mathematics/" next="/Mathematics/Indices" />
                </div>

      </>
    );
  }
  
