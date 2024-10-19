import { Link } from "react-router-dom";

const Educations = () => {
  return (
    <>
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong className="text-uppercase">Education</strong>
            </h6>
            <table className="striped">
              <thead>
                <tr>
                  <th>Certificate</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Web Development</td>
                  <td>Octobar 2024</td>
                  <td>
                    <Link
                      to="/details"
                      className="btn blue lighten-2 waves-effect waves-light white-text"
                    >
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Graphic Design</td>
                  <td>June 2021</td>
                  <td>
                    <Link
                      to="/details"
                      className="btn blue lighten-2 waves-effect waves-light white-text"
                    >
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Tech Gadgets</td>
                  <td>May 2020</td>
                  <td>
                    <Link
                      to="/details"
                      className="btn blue lighten-2 waves-effect waves-light white-text"
                    >
                      View
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Other</td>
                  <td>Dec 2024</td>
                  <td>
                    <Link
                      to="/details"
                      className="btn blue lighten-2 waves-effect waves-light white-text"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educations;
