import TopicNav from "../topic-nav";
export default function BiologyIntro() {
    return (
      <>             
                <h1 className="subject-heading">Biology</h1>
                <TopicNav previous="/biology/" next="/biology/" />
                <p className="content-para">
                    Biology is the branch of science that studies living things. 
                    The word ‘biology’ is derived from two Greek words: ‘bios’ which means 
                    life, and ‘logos’ which means study. Biology therefore means the study 
                    of life or of living things.
                </p>
                <h2 className="content-h2">Branches of Biology</h2>
                <ol className="content-ol">
                    <li>
                        i.	Botany (study of plants)
                    </li>
                    <li>
                        ii.	Zoology (study of animals)
                    </li>
                    <li>
                        iii.	Morphology (study of the external features of living things)
                    </li>
                    <li>
                        iv.	Anatomy (study of internal structure of living things)
                    </li>
                    <li>
                        v.	Physiology (Study of how living things function)
                    </li>
                    <li>
                        vi.	Ecology (study of the relationships between living things 
                        and their environment),
                    </li>
                    <li>
                        vii. Genetics (Study of how living things inherit characters from 
                        their parents) etc.
                    </li>
                </ol>               
              <TopicNav previous="/biology/" next="/biology/" />

      </>
    );
  }
  
