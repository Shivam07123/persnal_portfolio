import React from 'react'

function Service() {
  return (
      <section className="services" id="services">
        <h2 className="heading">
          Our <span>Services</span>
        </h2>
        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Web Development</h3>
            <p>
              Built a dock management platform and e-commerce app using Spring
              Boot and Angular.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i className="bx bxs-paint"></i>
            <h3>UI Design</h3>
            <p>
              Designed responsive and modern interfaces in Angular and React.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i className="bx bxs-pencil"></i>
            <h3>Documentation</h3>
            <p>
              Created Swagger, Postman test collections, and integrated Email
              OTP systems.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>
  )
}

export default Service;