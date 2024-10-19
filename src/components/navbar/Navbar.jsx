import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="light-blue darken-4 p-sticky t-0 z-index-999">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                My Resume
              </Link>
              <Link
                to="/"
                data-target="side-nav"
                className="sidenav-trigger d-flex align-items-center justify-content-space-between"
              >
                <span className="material-symbols-outlined">menu</span>
                <span className="ml-5">menu</span>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/" className="d-flex align-items-center">
                    <i className="fas fa-home"></i>
                    <span className="ml-5">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className="d-flex align-items-center">
                    <i className="fas fa-copy"></i>
                    <span className="ml-5">Skills</span>
                  </Link>
                </li>
                <li>
                  <Link to="/experiences" className="d-flex align-items-center">
                    <i className="fas fa-id-badge"></i>
                    <span className="ml-5">Experiences</span>
                  </Link>
                </li>
                <li>
                  <Link to="/educations" className="d-flex align-items-center">
                    <i className="fas fa-graduation-cap"></i>
                    <span className="ml-5">Educations</span>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolios" className="d-flex align-items-center">
                    <i className="fas fa-address-card"></i>
                    <span className="ml-5">Portfolios</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="side-nav">
          <li>
            <Link to="/" className="d-flex align-items-center">
              <i className="fas fa-home"></i>
              <span className="ml-5">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/skills" className="d-flex align-items-center">
              <i className="fas fa-copy"></i>
              <span className="ml-5">Skills</span>
            </Link>
          </li>
          <li>
            <Link to="/experiences" className="d-flex align-items-center">
              <i className="fas fa-id-badge"></i>
              <span className="ml-5">Experiences</span>
            </Link>
          </li>
          <li>
            <Link to="/educations" className="d-flex align-items-center">
              <i className="fas fa-graduation-cap"></i>
              <span className="ml-5">Educations</span>
            </Link>
          </li>
          <li>
            <Link to="/portfolios" className="d-flex align-items-center">
              <i className="fas fa-address-card"></i>
              <span className="ml-5">Portfolios</span>
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
export default Navbar;
