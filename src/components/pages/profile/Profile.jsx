import ImgProfile from "../../../images/my-profile-image.jpg";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light activator">
          <img src={ImgProfile} alt="Amir Dhahri" />
          <Link className="btn-floating halfway-fab waves-effect waves-light red activator">
            <span className="material-symbols-outlined">more_vert</span>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            React Developer
          </span>
          <p>Full Stack Web Developer</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Follow Me
            <span className="material-symbols-outlined ml-10">close</span>
          </span>
          <p className="d-flex justify-content-space-between align-item-center mt-10">
            <i className="fab fa-facebook-f grey-text text-darken-4 social_style"></i>
            <i className="fab fa-twitter grey-text text-darken-4 social_style"></i>
            <i className="fab fa-google-plus-g grey-text text-darken-4 social_style"></i>
            <i className="fab fa-instagram grey-text text-darken-4 social_style"></i>
            <i className="fab fa-pinterest grey-text text-darken-4 social_style"></i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
