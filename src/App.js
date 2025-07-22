import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="/shivam.jpg" alt="Shivam Harimkar" className="profile-img" />
        <h1>Shivam Harimkar</h1>
        <p>Java Full Stack Developer | Spring Boot | Angular | MySQL</p>
        <a className="resume-btn" href="/Shivam_Harimkar_Resume.pdf" download>📄 Download Resume</a>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate and skilled Full Stack Developer with 1.3+ years of experience in building robust, scalable, and efficient applications.
          I specialize in Spring Boot, Angular, MySQL, and REST APIs. Currently working at FlynautSaas Pvt. Ltd. Pune.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Dock & Yard Management</h3>
          <p><strong>Tech Stack:</strong> Java, Spring Boot, Angular, MySQL</p>
          <p>
            A web-based platform for managing dock bookings, vehicle tracking, and employee coordination.
            Features slot booking, OTP login, secure reset links, and location metadata logging.
          </p>
          <a href="https://github.com/Shivam07123/FinalEcommerceProject" target="_blank" rel="noopener noreferrer">🔗 GitHub Project</a>
        </div>

        <div className="project-card">
          <h3>E-Commerce Web Application</h3>
          <p><strong>Tech Stack:</strong> Spring Boot, Angular, MySQL</p>
          <p>
            Built a responsive e-commerce app with product listing, cart, payment flow, and JWT-secured login.
          </p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java, Spring Boot, Spring Security, Hibernate</li>
          <li>Angular, TypeScript, HTML5, CSS3, JavaScript</li>
          <li>MySQL, REST APIs, JWT, Email OTP</li>
          <li>GitHub, Postman, Maven</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>📧 shivamharimkar7@gmail.com</p>
        <p>📞 9588688128</p>
        <p>🌐 <a href="https://github.com/Shivam07123" target="_blank" rel="noopener noreferrer">GitHub: Shivam07123</a></p>
      </section>

      <footer>
        <p>© 2025 Shivam Harimkar. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
