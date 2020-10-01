import React from "react";

const Contact = () => (
  <div className="footer__contact">
    <h1 className="footer__contact__title">Contact Us</h1>
    <div className="footer__contact__content__container">
      <p className="footer__contact__content">Phone</p>
      <p className="footer__contact__content">Email</p>
      <p className="footer__contact__content">Whatsapp</p>
    </div>
    <div className="footer__contact__social-media__container">
      <span className="footer__contact__social-media"><a href="#" target="_blank"><i className="fab fa-facebook contact-icons"></i></a></span>
      <span className="footer__contact__social-media"><a href="#" target="_blank"><i className="fab fa-instagram contact-icons"></i></a></span>
      <span className="footer__contact__social-media"><a href="#" target="_blank"><i className="fab fa-twitter contact-icons"></i></a></span>
    </div>
  </div>
);

export default Contact;
