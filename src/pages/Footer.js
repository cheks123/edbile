
function Footer() {
    return (
            <footer>
                <div className="row">
                        <div className="col3">
                            <h3>Materials</h3>
                            <ul>
                                <li>Past questions</li>
                                <li>Exam syllabus</li>
                                <li>Lesson notes</li>
                                <li>Quiz</li>
                            </ul>
                        </div>
                        <div className="col3">
                            <h3>Socials</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Linkedin</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div className="col3">
                            <h3>Links</h3>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Subjects</li>
                            </ul>
                        </div>
                </div>
                <div className="row copyright">
                    <p>(c) Copyright {new Date().getFullYear()}; All right reserved.</p>
                </div>



                        
                   
            </footer>

    );
}

export default Footer;
