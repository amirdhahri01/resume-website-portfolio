const About = () => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong className="text-uppercase">About me</strong>
          </h6>
          <p className="grey-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            minima quod molestias numquam, cumque eveniet delectus dolore
            laborum molestiae quis possimus eos dignissimos cupiditate ipsam
            sunt doloremque commodi adipisci quasi?
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong className="text-uppercase">Personal info</strong>
          </h6>
          <div className="row mt">
            <div className="col s12 m6 l6 xl6">
              <p>
                <strong>Address:</strong> 123 Lorem
              </p>
              <p>
                <strong>Email:</strong> test@yahoo.com
              </p>
              <p>
                <strong>Phone:</strong> 123 456 7898
              </p>
            </div>
            <div className="col s12 m6 l6 xl6">
              <p>
                <strong>Main Language</strong> - English
              </p>
              <p>
                <strong>Second Language</strong> - Spanish
              </p>
              <p>
                <strong>Third Language</strong> - Chinese
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
