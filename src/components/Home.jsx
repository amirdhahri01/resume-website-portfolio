import { Component } from "react";
import Navbar from "./navbar/Navbar";
import Profile from "./pages/profile/Profile";
import Skills from "./pages/skills/Skills";
import Experiences from "./pages/experiences/Experiences";
import Educations from "./pages/educations/Educations";
import Portfolios from "./pages/portfolios/Portfolios";
import About from "./pages/about/About";

class Home extends Component {
  render() {
    return (
      <>
        <section>
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col col-sm-12 col-md-3">
                <Profile />
              </div>
              <div className="col col-sm-12 col-md-9">
                <About />
                <Skills />
                <Experiences />
                <Educations />
                <Portfolios />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
