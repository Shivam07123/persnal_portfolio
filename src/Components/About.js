import React, {useState} from "react";

function About() {
  const [showAboutMore, setShowAboutMore] = useState(false);
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/about.jpeg`}
          alt="about"
        />
      </div>
      <div className="about-content fw-bold">
        <h2 className="heading fw-bold">
          About <span>Me</span>
        </h2>
        <h3 className="fw-bold">Full Stack Developer</h3>
        <p className="fw-bold">
          I specialize in both <strong>frontend and backend development</strong>
          , bringing ideas to life through clean code and intuitive interfaces.
          {showAboutMore && (
            <div className="fw-bold">
              {" "}
              At <strong>FlynautSaas Pvt. Ltd</strong>, I contributed to major
              modules like <strong>dock management</strong>,{" "}
              <strong>JWT-secured APIs</strong>,{" "}
              <strong>OTP verification</strong>, and dynamic dashboards using{" "}
              <strong>Spring Boot</strong> and <strong>Angular</strong>. I’ve
              also worked on <strong>eCommerce platforms</strong>, integrated{" "}
              <strong>Postman-tested APIs</strong>, and implemented security
              flows like <strong>forgot password with email reset links</strong>
              . My goal is to create meaningful digital solutions that solve
              real-world problems.
            </div>
          )}
        </p>
        <a
          className="btn"
          style={{ cursor: "pointer" }}
          onClick={() => setShowAboutMore(!showAboutMore)}
        >
          {showAboutMore ? "Show Less" : "Read More"}
        </a>
      </div>
    </section>
  );
}

export default About;
