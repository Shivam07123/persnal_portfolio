import React from "react";

function Experience() {
  return (
    <section className="skills-section py-5">
      <div className="container text-center">
        <h2 className="section-title fw-bold">Work Experience</h2>
        <p className="section-subtitle fw-bold">Professional background & contributions</p>

        <div className="row gy-4 justify-content-center">
          <div className="col-12">
            <div className="card skill-card w-100">
              <div className="card-body text-start">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/FlynautSaaS_logo.png`}
                    alt="Flynaut Logo"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                      marginRight: "15px",
                      borderRadius: "10px",
                      backgroundColor: "#fff"
                    }}
                  />
               
                  <h5 className="card-title m-0 fw-bold">
                    <i className="bi bi-briefcase-fill me-2 text-primary fw-bold"></i>
                    Software Developer – Flynaut SaaS Pvt. Ltd, Pune (05/2024 – Present)
                  </h5>
                </div>

                <h6 className="mt-3 text-muted fw-bold">
                  Project: Dock & Yard Management (Sep 2025 – Current)
                </h6>

                <p className="card-text mt-2 fw-bold" style={{ fontSize: "2rem", lineHeight: "1.3" }}>
                  <strong>Description:</strong> A robust web-based application designed to streamline dock and yard logistics,
                  enabling organizations to manage slot booking, vehicle tracking, dock utilization, and employee coordination efficiently.
                  The platform enhances operational visibility, reduces delays, and provides secure user access across multiple modules.
                </p>

                <ul className="fw-bold" style={{ fontSize: "1.5rem", paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                  <li>Designed and developed RESTful APIs using <strong>Spring Boot</strong> for employee, dock, yard, and slot management modules.</li>
                  <li>Implemented <strong>JWT-based authentication and role-based access control</strong> to secure endpoints.</li>
                  <li>Built an <strong>OTP generation & verification</strong> system via email for login and sensitive operations.</li>
                  <li>Developed a <strong>Forgot Password</strong> feature with secure email-triggered reset flow.</li>
                  <li>Integrated <strong>browser/device detection & geolocation tracking</strong> for enhanced login metadata.</li>
                  <li>Created responsive and interactive frontend using <strong>Angular</strong> with real-time slot booking UI.</li>
                  <li>Used <strong>Postman</strong> to test all API flows including login, password reset, and access logs.</li>
                  <li>Managed code using <strong>GitHub</strong> for version control in a collaborative environment.</li>
                  <li>Regularly contributed to <strong>code reviews, debugging, and performance optimization</strong> tasks.</li>
                  <li>Incorporated <strong>Swagger</strong> for live API documentation and testing during development.</li>
                  <li>Focused on <strong>clean code, modular architecture, and scalability</strong> in backend and frontend layers.</li>
                </ul>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

