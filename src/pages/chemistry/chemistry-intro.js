import TopicNav from "../topic-nav";

export default function ChemistryIntro() {
    return (
      <>             
                <h1 className="subject-heading">Chemistry</h1>
                  <TopicNav previous="/chemistry/" next="/chemistry/elements" />

                  <p className="content-para">
                    Chemistry is the study of matter: its structure, composition, properties 
                    and the changes it undergoes. Chemistry is one of the three main branches 
                    of pure science, the other two being physics and biology. The knowledge of 
                    chemistry helps us to subject matter to chemical processes thereby producing 
                    materials for our every day today use. Such materials include: soaps, detergents, 
                    hair cream, perfumes, oil, margarine and plastics among others.
                  </p>
                  <h2 className="content-h2">Branches of Chemistry</h2>
                  <p className="content-para">
                    The three main branches of chemistry are:
                  </p>
                  <ol className="content-ol">
                    <li>1. inorganic, </li>
                    <li>2. organic and </li>
                    <li>3. physical chemistry.</li>
                  </ol>
                  <h2 className="content-h2">Career Prospects in Chemistry</h2>
                  <p className="content-para">The following are the career prospects in chemistry:</p>
                  <ol className="content-ol">
                    <li>
                      (i)	Teaching services: This include those who teach in primary, secondary schools,
                      colleges of education and universities and even the laboratory assistants 
                      in schools and universities.
                    </li>
                    <li>
                      (ii)	Health service: This involves pharmacists, biochemists, chemists, 
                      nutritionists, dieticians, doctors, nurses, medical assistants, laboratory 
                      assistants and dispensers.
                    </li>
                    <li>
                      (iii)	Food processing:Food processing involves food technologists and research chemists.
                    </li>
                    <li>
                      (iv)	Petroleum and petrochemical industries –Involves application of the 
                      following people; research chemists, chemical engineers and 
                      laboratory assistants.
                    </li>
                    <li>
                      (v)	Extractive industry- This involves chemists, mining engineers and 
                      geologists.
                    </li>
                    <li>
                      (vi)	Manufacturing Industry: This involves research chemists and 
                      chemical engineers in the wide variety of manufacturing industries 
                      such as iron and steel works and cement factories.
                    </li>
                    <li>
                      (vii)	Agriculture-Involves agricultural scientists, chemists, biochemists 
                      and physiologists who engaged in research to improve the quality and yield 
                      of crops and livestocks, and to advise farmers.
                  </li>
                  <li>
                    (viii)  Forestry: Scientists engaged in research to preserve and improve 
                    forests and forestry products.
                  </li>
                  <li>
                    (vii)	Agriculture-Involves agricultural scientists, chemists, biochemists 
                    and physiologists who engaged in research to improve the quality and yield 
                    of crops and livestocks, and to advise farmers.
                  </li>
</ol>
                
                  <TopicNav previous="/chemistry/" next="/chemistry/elements" />

      </>
    );
  }
  