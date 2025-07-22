import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  const toggleNavbar = () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  };

  menuIcon.addEventListener("click", toggleNavbar);

  return () => {
    menuIcon.removeEventListener("click", toggleNavbar);
  };
}, []);
  return (
    <>
      {/* Header */}
      <header className="header">
        <a href="#" className="logo">Portfolio</a>
        <i className='bx bx-menu' id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Shivam Harimkar</h1>
          <h3>And I'm a <span className="multiple-text">Full Stack Developer</span></h3>
          <p>Welcome to my portfolio! I build web apps using Java, Spring Boot, Angular, and React. Let’s build something amazing together!</p>
          <div className="social-media">
            <a href="#"><i className='bx bxl-facebook'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="https://www.instagram.com/__shivam_07___?igsh=eG1odWF5bXppajE0"><i className='bx bxl-instagram'></i></a>
            <a href="#"><i className='bx bxl-youtube'></i></a>
            <a href="https://www.linkedin.com/in/shivam-harimkar-235009298"><i className='bx bxl-linkedin'></i></a>
          </div>
          <a href="/assets/cv.pdf" className="btn" download>Download CV</a>
        </div>
        <div className="home-img">
          {/* <img src="/assets/images/profile.jpeg" alt="profile" /> */}
          <img src={`${process.env.PUBLIC_URL}/assets/images/profile.jpeg`} />

        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-img">
          <img src={`${process.env.PUBLIC_URL}/assets/images/about.jpeg`} alt="about" />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Full Stack Developer</h3>
          <p>I specialize in backend (Spring Boot) and frontend (React, Angular). I've built robust projects using REST APIs, JWT, MySQL, and more.</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 className="heading">Our <span>Services</span></h2>
        <div className="services-container">
          <div className="services-box">
            <i className='bx bx-code-alt'></i>
            <h3>Web Development</h3>
            <p>Built a dock management platform and e-commerce app using Spring Boot and Angular.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className='bx bxs-paint'></i>
            <h3>UI Design</h3>
            <p>Designed responsive and modern interfaces in Angular and React.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className='bx bxs-pencil'></i>
            <h3>Documentation</h3>
            <p>Created Swagger, Postman test collections, and integrated Email OTP systems.</p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Projects</span></h2>
        <div className="portfolio-container">
          {['port1.jpg', 'port2.jpg', 'port3.jpg', 'port4.jpg', 'port5.jpg'].map((img, idx) => (
            <div className="portfolio-box" key={idx}>
              <img src={`${process.env.PUBLIC_URL}/assets/images/${img}`} alt={`portfolio-${idx}`} />
              <div className="portfolio-layer">
                <h4>Project {idx + 1}</h4>
                <p>Some description of the project goes here.</p>
                <a href="#"><i className='bx bx-link-external'></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>
        <form action="mailto:shivamharimkar7@gmail.com" method="post" encType="text/plain">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2025 by Shivam Harimkar | All Rights Reserved</p>
        </div>
        <div className="footer-iconTap">
          <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
      </footer>
    </>
  );
}

export default App;
