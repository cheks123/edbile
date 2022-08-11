import Banner from "../Banner"
import AvailableSubjects from "./AvailableSubjects";
import SupportedExams from "../SupportedExams";

function Home() {
    return (
        <>
            <Banner />

            <div className="row">
                <AvailableSubjects />
            </div>

            <SupportedExams/>

        </>
    );
}

export default Home;
