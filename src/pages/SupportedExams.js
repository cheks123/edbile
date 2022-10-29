import neco from "./images/neco.jpeg";
import waec from "./images/waec.png";
import jamb from "./images/jamb.png";
function SupportedExams() {
    return (
            <div className="row available-subjects">
                
                <h2>Supported Examinations</h2>
                        <div className="col3 exam">
                            <img className="exam-logo" src={jamb} alt="JAMB logo"/>
                        </div>
                        <div className="col3 exam">
                            <img className="exam-logo" src={waec} alt="WAEC logo"/>
                        </div>
                        <div className="col3 exam">
                            <img className="exam-logo" src={neco} alt="NECO logo"/>
                        </div> 
                   
            </div>

    );
}

export default SupportedExams;
