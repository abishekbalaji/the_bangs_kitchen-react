import React from "react";
import { Link } from "react-router-dom";

import ComboLink from "./ComboLink";
import MenuLinks from "./MenuLinks";
import Location from "./Location";
import Contact from "./Contact";
import MenuLink from "./MenuLink"; // For mobile

const Footer = () => (
  <div id="footer" className="footer__container">
    <div className="footer__contents--web">
      <div className="footer__combo-and-about">
        <Link className="footer__about" to="/about">About</Link>
        <ComboLink />
      </div>
      <MenuLinks />
      <Location />
      <Contact />
    </div>
    <div className="footer__contents--mobile">
      <div className="footer__content-links">
        <ComboLink />
        <MenuLink />
        <Link to="/about" className="footer__content-link">
          About
        </Link>
      </div>
      <div className="footer__get-in-touch">
        <Location />
        <Contact />
      </div>
    </div>
  </div>
);

export default Footer;
