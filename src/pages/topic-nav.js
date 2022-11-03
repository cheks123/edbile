import { Link } from "react-router-dom";

let TopicNav = (props) =>{
    return(
      <>
        <Link to={props.previous} className="previous">&lt;&lt;</Link>
        <Link to={props.next} className="next">&gt;&gt;</Link>
      </>
    )
  }

  export default TopicNav;