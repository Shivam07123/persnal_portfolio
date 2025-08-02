import React, { useState } from "react";

function Profile() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="home" id="home">
      <div className="home-content">
        {/* === Static Header === */}
        <div className="intro-header">
          <h3>Hello, It's Me</h3>
          <h1>Shivam Harimkar</h1>
          <h3>
            And I'm a <span className="multiple-text">Full Stack Developer</span>
          </h3>
        </div>

        {/* === Short Description === */}
        <p className="fw-bold">
          Welcome to my portfolio! I build robust and responsive web applications using{" "}
          <strong>Java, Spring Boot, Angular, and React</strong>. Let’s build something impactful together!
        </p>

        {/* === Expandable Content === */}
        {showMore && (
          <div className="extended-content fw-bold">
            <p>
              I’m a passionate and results-driven <strong>Full Stack Developer</strong> with 1+ years
              of hands-on experience in designing, developing, and deploying robust web applications.
              Skilled in both frontend and backend technologies, I specialize in building scalable and
              user-centric solutions using <strong>Java, Spring Boot, Angular, React, and MySQL</strong>.
              My expertise includes crafting RESTful APIs, integrating JWT-based authentication,
              managing stateful UI interactions, and developing responsive interfaces. I’ve contributed
              to enterprise-level projects including dock management systems, e-commerce platforms, and
              secure authentication workflows. I take pride in writing clean, maintainable code and
              collaborating effectively with cross-functional teams. My goal is to bridge the gap between
              business needs and technical implementation, delivering impactful digital experiences.
            </p>
          </div>
        )}

        {/* === Read More Button === */}
        <a
          className="btn read-more-btn"
          style={{ cursor: "pointer", marginTop: "1rem" }}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Read More"}
        </a>

        {/* === Social Media Icons === */}
        <div className="social-media">
          <a href="mailto:shivamharimkar7@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-gmail"></i>
          </a>
          <a href="https://github.com/Shivam07123" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.instagram.com/__shivam_07___?igsh=eG1odWF5bXppajE0">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/in/shivam-harimkar-235009298">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        {/* === Resume Download === */}
        <a
          href={`${process.env.PUBLIC_URL}/assets/cv.pdf`}
          className="btn"
          download="ShivamHarimkar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "1rem" }}
        >
          <i className="bx bx-download" style={{ marginRight: "6px" }}></i>
          My Resume
        </a>
      </div>

      {/* === Profile Image === */}
      <div className="home-img">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/profile.jpeg`}
          alt="profile"
        />
      </div>
    </section>
  );
}

export default Profile;
