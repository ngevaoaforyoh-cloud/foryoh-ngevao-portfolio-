import React from 'react';
import { GrMail } from 'react-icons/gr';
import { FaPhoneAlt } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <h4>Designed &amp; developed by Ngevao Foryoh</h4>
    <h4>© {new Date().getFullYear()} Ngevao Foryoh</h4>
    <div className="footerLinks">
      <a href="mailto:ngevaoaforyoh@gmail.com" aria-label="Email Ngevao Foryoh"><GrMail /></a>
      <a href="tel:+23279633366" aria-label="Call Ngevao Foryoh"><FaPhoneAlt /></a>
    </div>
  </footer>
);

export default Footer;
