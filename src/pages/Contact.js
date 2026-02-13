import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-wrapper">
          <div className="row">

            {/* LEFT SECTION */}
            <div className="col-md-5">
              <div className="contact-info">
                <h2>Get in touch</h2>
                <p>
                  We'd love to hear from you. Please fill out the form or contact
                  us using the information below.
                </p>

                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h6>Address</h6>
                    <p>
                      123 Business Avenue, Suite 100 <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h6>Phone</h6>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h6>Email</h6>
                    <p>contact@company.com</p>
                  </div>
                </div>

                <div className="social-links">
                  <span>Follow Us</span>
                  <div>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-md-7">
              <div className="contact-form">
                <h2>Send us a message</h2>

                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <label>First Name</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <label>Email</label>
                  <input type="email" className="form-control" />

                  <label>Subject</label>
                  <input type="text" className="form-control" />

                  <label>Message</label>
                  <textarea rows="4" className="form-control"></textarea>

                  <button type="submit" className="btn-submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
