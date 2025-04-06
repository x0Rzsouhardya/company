import {  FaFacebookSquare, FaGlobeAmericas, FaInstagram } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import React from 'react';
import "../style/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo or Company Name */}
        <div className="footer-brand">
          <h2>F Standard</h2>
          <p>Building the future, today.</p>
          <div className='footerProfile'><img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743596947/image_jcricc.png" alt="" /></div>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/services">Services</a></li>
            <li><a href="#/whyFstandard">Why FStandard</a></li>
            <li><a href="#/blog">Blog</a></li>
            <li><a href="#/company">Company</a></li>
            <li><a href="#/ourApp">Our App</a></li>
            <li><a href="#/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right: Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#"><div className='iconTheme'><div className='icon'><FaGlobeAmericas /></div><p>Website</p></div></a>
            <a href="#"><div className='iconTheme'><div className='icon'><FaFacebookSquare /></div><p>Facebook</p></div></a>
            <a href="#"><div className='iconTheme'><div className='icon'><FaInstagram /></div><p>Instagram</p></div></a>
            <a href="#"><div className='iconTheme'><div className='icon'><BsTwitterX /></div><p>Twitter</p></div></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} F Standard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
