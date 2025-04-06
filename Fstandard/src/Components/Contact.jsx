import React from 'react';
import "../style/Contact.css"
import { FaEarthAmericas } from 'react-icons/fa6';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Fstandard Company</h1>

      <div className="contact-grid">
        {/* Contact Form */}
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />

          <label>Email</label>
          <input type="email" placeholder="your@example.com" />

          <label>Message</label>
          <textarea placeholder="Your message..."></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Company Info */}
        <div className="contact-info">
          <h2>Fstandard Company</h2>
          <p><strong>Address:</strong><br />OM BHAISHNYA DEVI APARTMENT, GROUND FLOOR, 2 NO. DEBIGARH, PO-MADHYAMGRAM, PS-BARASAT, KOLKATA, West Bengal 700129, IN</p>
          <p><strong>Email:</strong> contact@fstandard.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>

          <h3>Business Hours</h3>
          <ul>
            <li>Monday - Friday: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 10:00 AM – 2:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>

          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#"><div className='iconTheme'><div className='icon'><FaEarthAmericas /></div><p>Website</p></div></a>
            <a href="#"><div className='iconTheme'><div className='icon'><FaFacebookSquare /></div><p>Facebook</p></div></a>
            <a href="#"><div className='iconTheme'><div className='icon'><FaInstagramSquare /></div><p>Instagram</p></div></a>
            <a href="#"><div className='iconTheme'><div className='icon'><BsTwitterX /></div><p>Twitter</p></div></a>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5741.63177866795!2d88.45785158585865!3d22.69927064638086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOM%20BHAISHNYA%20DEVI%20APARTMENT%2C%20GROUND%20FLOOR%2C%202%20NO.%20DEBIGARH%2C%20PO-MADHYAMGRAM%2C%20PS-BARASAT%2C%20KOLKATA%2C%20West%20Bengal%C2%A0700129%2C%C2%A0IN!5e1!3m2!1sen!2sin!4v1743831982424!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
