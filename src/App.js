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
import Indices from "./pages/mathematics/indices";
import Surds from "./pages/mathematics/surds";
import Logarithms from "./pages/mathematics/logarithms";
import LinearEquations from "./pages/mathematics/linear-equations";
import TrigonometricRatios from "./pages/mathematics/trigonometric-ratios";

import Physics from "./pages/physics/physics";
import PhysicsIntro from "./pages/physics/physics-intro";
import VectorsScalars from "./pages/physics/vectors-scalars";
import Expansion from "./pages/physics/expansion";
import HeatTransfer from "./pages/physics/heat-transfer";
import Motion from "./pages/physics/motion";



import Chemistry from "./pages/chemistry/chemistry";
import ChemistryIntro from "./pages/chemistry/chemistry-intro";
import Mixtures from "./pages/chemistry/mixtures";
import Changes from "./pages/chemistry/changes";
import Elements from "./pages/chemistry/elements";
import Compounds from "./pages/chemistry/compounds";

import Biology from "./pages/biology/Biology";
import Government from "./pages/government/Government";
import Commerce from "./pages/commerce/Commerce";
import Economics from "./pages/economics/Economics";
import EnglishLanguage from "./pages/englishLanguage/EnglishLanguage";
import CivicEducation from "./pages/civicEducation/CivicEducation";
import CivicEducationIntro from "./pages/civicEducation/civic-education-intro";
import GovernmentIntro from "./pages/government/government-intro";









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
          <Route path="/mathematics/" element={<MathematicsIntro />} />
          <Route path="/mathematics/indices" element={<Indices />} />
          <Route path="/mathematics/logarithms" element={<Logarithms />} />
          <Route path="/mathematics/surds" element={<Surds />} />
          <Route path="/mathematics/linear-equations" element={<LinearEquations />} />
          <Route path="/mathematics/trigonometric-ratios" element={<TrigonometricRatios />} />
        </Route>

        <Route path="/physics" element={<Physics/>} >
          <Route path="/physics/" element={<PhysicsIntro />} />
          <Route path="/physics/vectors-scalars" element={<VectorsScalars />} />
          <Route path="/physics/expansion" element={<Expansion />} />
          <Route path="/physics/heat-transfer" element={<HeatTransfer />} />
           <Route path="/physics/motion" element={<Motion />} />
        </Route>

        <Route path="/chemistry" element={<Chemistry/>}>
          <Route path="/chemistry/" element={<ChemistryIntro />} />
          <Route path="/chemistry/elements" element={<Elements />} />
          <Route path="/chemistry/compounds" element={<Compounds />} />
          <Route path="/chemistry/mixtures" element={<Mixtures />} />
          <Route path="/chemistry/changes" element={<Changes />} />
        </Route>
        <Route path="/biology" element={<Biology/>} />
        <Route path="/government" element={<Government/>}>
          <Route path="/government/" element={<GovernmentIntro />} />
        </Route>
        <Route path="/commerce" element={<Commerce/>} />
        <Route path="/economics" element={<Economics/>} />
        <Route path="/englishlanguage" element={<EnglishLanguage/>} />
        <Route path="/civiceducation" element={<CivicEducation/>} >
          <Route path="/civiceducation/" element={<CivicEducationIntro />} />

        </Route>
      </Routes>
      <Footer/>
  
    </div>
    </>
  );
}

export default App;
