import { subjectData } from "./data";
import { Link } from "react-router-dom";

function AvailableSubjects() {
    return (
            <div className="row available-subjects">
                
                <h2 >Available Subjects</h2>
                <p>We have the following subjects:</p>
                {subjectData.map((data, key) =>{
                    return (
                        <div key = {key} className="col3 subject">
                            <h3>{ data.subject }</h3>
                            <p>{ data.description }</p>
                            <Link className="continue-learning" to={ data.subject.replace(" ", "") }>Continue Learning</Link>
                        </div>
                    )
                })}
            </div>

    );
}

export default AvailableSubjects;
