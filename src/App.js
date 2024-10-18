import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/css/materialize.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skills from "./components/pages/skills/Skills";
import Experiences from "./components/pages/experiences/Experiences";
import Educations from "./components/pages/educations/Educations";
import Portfolios from "./components/pages/portfolios/Portfolios";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/skills" element={Skills} />
          <Route path="/experiences" element={Experiences} />
          <Route path="/educations" element={Educations} />
          <Route path="/portfolios" element={Portfolios} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
