import { Link } from "react-router-dom";

let TopicNav = (props) =>{
  window.scrollTo(0,0)
    return(
      <div className="subject-navigation">
        <Link to={props.previous} className="previous">&lt;&lt;</Link>
        <Link to={props.next} className="next">&gt;&gt;</Link>
      </div>
    )
  }

  export default TopicNav;