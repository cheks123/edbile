import { subjectData } from "./data";

function AvailableSubjects() {
    return (
            <>
                
                <h2>Available Subjects</h2>
                <p>We have the following subjects:</p>
                {subjectData.map((data, key) =>{
                    return (
                        <div key = {key} className="col3">
                            <h3>{ data.subject }</h3>
                            <p>{ data.description }</p>
                            <a href="/">Continue Learning</a>
                        </div>
                    )
                })}
            </>

    );
}

export default AvailableSubjects;
