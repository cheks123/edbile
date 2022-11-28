import "./App.css";
import Nav from "./Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Subjects from "./pages/Subjects";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { Route, Routes } from "react-router-dom";

import Mathematics from "./pages/mathematics/mathematics";
import MathematicsIntro from "./pages/mathematics/mathematics-intro";

import Physics from "./pages/physics/physics";
import PhysicsIntro from "./pages/physics/physics-intro";



import Chemistry from "./pages/chemistry/chemistry";
import ChemistryIntro from "./pages/chemistry/chemistry-intro";

import Biology from "./pages/biology/Biology";
import Government from "./pages/government/Government";
import Commerce from "./pages/commerce/Commerce";
import CommerceIntro from "./pages/commerce/commerce-intro";
import Economics from "./pages/economics/Economics";
import CivicEducation from "./pages/civicEducation/CivicEducation";
import CivicEducationIntro from "./pages/civicEducation/civic-education-intro";
import GovernmentIntro from "./pages/government/government-intro";
import EconomicsIntro from "./pages/economics/economics-intro";
import BiologyIntro from "./pages/biology/biology-intro";
import GeneralKnowledge from "./pages/general-knowledge/general-knowledge";









export default function App() {
  
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
          <Route path="/mathematics/" element={<MathematicsIntro />} />
        </Route>

        <Route path="/physics" element={<Physics/>} >
          <Route path="/physics/" element={<PhysicsIntro />} />
        </Route>

        <Route path="/chemistry" element={<Chemistry/>}>
          <Route path="/chemistry/" element={<ChemistryIntro />} />
        </Route>
        <Route path="/biology" element={<Biology/>} >
          <Route path="/biology/" element={<BiologyIntro />} />
        </Route>
        <Route path="/government" element={<Government/>}>
          <Route path="/government/" element={<GovernmentIntro />} />
        </Route>
        <Route path="/commerce" element={<Commerce/>} >
          <Route path="/commerce/" element={<CommerceIntro/>} />
        </Route>
        <Route path="/economics" element={<Economics/>} >
        <Route path="/economics/" element={<EconomicsIntro/>} />
        </Route>
        <Route path="/generalknowledge" element={<GeneralKnowledge/>} />
        <Route path="/civiceducation" element={<CivicEducation/>} >
          <Route path="/civiceducation/" element={<CivicEducationIntro />} />

        </Route>
      </Routes>
      <Footer/>
  
    </div>
    </>
  );
}
