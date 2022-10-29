import "./App.css";
import Nav from "./Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Subjects from "./pages/Subjects";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { Route, Routes } from "react-router-dom";
import Mathematics from "./pages/mathematics/Mathematics";
import MathematicsIntro from "./pages/mathematics/MathematicsIntro";
import Physics from "./pages/physics/Physics";
import Chemistry from "./pages/chemistry/Chemistry";
import Biology from "./pages/biology/Biology";
import Government from "./pages/government/Government";
import Commerce from "./pages/commerce/Commerce";
import Economics from "./pages/economics/Economics";
import EnglishLanguage from "./pages/englishLanguage/EnglishLanguage";
import CivicEducation from "./pages/civicEducation/CivicEducation";


function App() {
  
  return (
    <>
    <Nav/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/subjects" element={<Subjects/>} />
        <Route path="/mathematics" element={<Mathematics/>} >
          <Route path="/" element={<MathematicsIntro />} />
        </Route>
        <Route path="/physics" element={<Physics/>} />
        <Route path="/chemistry" element={<Chemistry/>} />
        <Route path="/biology" element={<Biology/>} />
        <Route path="/government" element={<Government/>} />
        <Route path="/commerce" element={<Commerce/>} />
        <Route path="/economics" element={<Economics/>} />
        <Route path="/englishlanguage" element={<EnglishLanguage/>} />
        <Route path="/civicEducation" element={<CivicEducation/>} />
      </Routes>
      <Footer/>
  
    </div>
    </>
  );
}

export default App;
