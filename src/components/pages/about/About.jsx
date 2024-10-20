const About = () => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h6 className="mb-10">
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
          <div className="row mt-10">
            <div className="col s12 m6 l6 xl6">
              <p className="my-10">
                <strong>Address:</strong> 123 Lorem
              </p>
              <p className="my-10">
                <strong>Email:</strong> amirdhahri01@gmail.com
              </p>
              <p className="my-10">
                <strong>Phone:</strong> 92367697
              </p>
            </div>
            <div className="col s12 m6 l6 xl6">
              <p className="my-10">
                <strong>Main Language</strong> - Arabic
              </p>
              <p className="my-10">
                <strong>Second Language</strong> - English
              </p>
              <p className="my-10">
                <strong>Third Language</strong> - Frensh
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
