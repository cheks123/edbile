import { subjectData } from "./data";

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
                            <a className="continue-learning" href="/">Continue Learning</a>
                        </div>
                    )
                })}
            </div>

    );
}

export default AvailableSubjects;
