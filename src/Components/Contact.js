import React from 'react'

function Contact() {
  return (
     <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>
        <form
          action="mailto:shivamharimkar7@gmail.com"
          method="post"
          encType="text/plain"
        >
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
  )
}

export default Contact;