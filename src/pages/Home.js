import AvailableSubjects from "./AvailableSubjects";
import SupportedExams from "./SupportedExams";
import Testimonials from "./Testimonials";

function Home() {
    window.scrollTo(0,0)
    return (
        <>
            <div className="banner">
            <h1 className="bannerh1">Welcome to StudiRepo</h1>
            </div>
            
            <AvailableSubjects/>
            <SupportedExams/>
            <Testimonials/>
             
        </>
    );
}

export default Home;
