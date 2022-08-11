import "./App.css";
import Nav from "./Nav";
import Banner from "./Banner";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Subjects from "./pages/Subjects";
import Home from "./pages/Home";

function App() {
  let Component;
  switch(window.location.pathname){
    case "/":
      Component = Home;
      break;
    case "/edbile":
      Component = Home;
      break;
    case "/home":
      Component = Home;
      break;
    case "/about":
      Component = About;
      break;
    case "/contact":
      Component = Contact;
      break;
    case "/subjects":
      Component = Subjects;
      break;
  }
  return (
    <>
      <Nav/>
      <div className="container">
        <Component/>
      </div>

    </>
  );
}

export default App;
