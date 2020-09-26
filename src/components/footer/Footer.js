import React from "react";
import { Link } from "react-router-dom";

import ComboLink from "./ComboLink";
import MenuLinks from "./MenuLinks";
import Location from "./Location";
import Contact from "./Contact";

const Footer = () => (
  <div id="footer">
    <ComboLink />
    <MenuLinks />
    <Location />
    <Contact />
    <Link to="/about">About</Link>
  </div>
);

export default Footer;
