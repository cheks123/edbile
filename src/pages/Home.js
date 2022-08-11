import AvailableSubjects from "./AvailableSubjects";
import SupportedExams from "../SupportedExams";

function Home() {
    return (
        <>
            <div className="banner">
            <h1 className="bannerh1">Welcome to EdMobile</h1>
            </div>
            <AvailableSubjects />
            <SupportedExams/>

        </>
    );
}

export default Home;
