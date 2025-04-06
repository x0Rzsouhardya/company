import React from 'react'
import "../style/Company.css"

const Company = () => {
  return (
    <>
    <section className="companyHero">
  <div className="heroContent">
    <h1>About F Standard</h1>
    <p>Empowering businesses with reliable facility management for over two decades. We're not just a service provider — we’re your trusted partner in excellence.</p>
  </div>
  <div className="heroImage">
    <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743596947/image_jcricc.png" alt="F Standard Team" />
  </div>
</section>
     
<section className="missionVision">
  <div className="missionBox">
    <h2>Our Mission</h2>
    <p>To deliver exceptional facility management services that support the operational goals of our clients, while fostering a clean, safe, and productive environment.</p>
  </div>
  <div className="visionBox">
    <h2>Our Vision</h2>
    <p>To be the most trusted and innovative facility services partner in India, recognized for our integrity, people-first approach, and sustainable practices.</p>
  </div>
</section>

<section className="coreValues">
  <h2>Our Core Values</h2>
  <ul>
    <li><strong>Integrity:</strong> We do the right thing, always.</li>
    <li><strong>Excellence:</strong> We strive for the highest quality in every task.</li>
    <li><strong>Accountability:</strong> We take ownership and deliver what we promise.</li>
    <li><strong>Innovation:</strong> We embrace change and drive smart solutions.</li>
    <li><strong>Teamwork:</strong> We grow together through collaboration.</li>
  </ul>
</section>

<section className="founderMessage">
  <h2>Message from Our Founder</h2>
  <p>
    "At F Standard, we believe in building lasting relationships—not just contracts. Our journey started over 23 years ago with a simple vision: deliver excellence, every day. That passion still drives our team today."
  </p>
  <p><em>- [Your Founder’s Name], Founder & CEO</em></p>
</section>

<section className="ourTeam">
  <h2>Meet the Team</h2>
  <div className="teamGrid">
    {/* Repeat this block for each team member */}
    <div className="teamMember">
      <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743766559/ChatGPT_Image_Apr_4_2025_05_05_16_PM_rguf4m.png" alt="Team Member" />
      <h4>John Doe</h4>
      <p>Operations Manager</p>
    </div>
    <div className="teamMember">
      <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743766559/ChatGPT_Image_Apr_4_2025_05_05_16_PM_rguf4m.png" alt="Team Member" />
      <h4>John Doe</h4>
      <p>Operations Manager</p>
    </div>
    <div className="teamMember">
      <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743766559/ChatGPT_Image_Apr_4_2025_05_05_16_PM_rguf4m.png" alt="Team Member" />
      <h4>John Doe</h4>
      <p>Operations Manager</p>
    </div>
    <div className="teamMember">
      <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743766559/ChatGPT_Image_Apr_4_2025_05_05_16_PM_rguf4m.png" alt="Team Member" />
      <h4>John Doe</h4>
      <p>Operations Manager</p>
    </div>
    <div className="teamMember">
      <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743766559/ChatGPT_Image_Apr_4_2025_05_05_16_PM_rguf4m.png" alt="Team Member" />
      <h4>John Doe</h4>
      <p>Operations Manager</p>
    </div>
    
  </div>
</section>

<section className="timeline">
  <h2>Our Journey</h2>
  <ul>
    <li><strong>2001:</strong> F Standard was founded</li>
    <li><strong>2005:</strong> Expanded into healthcare sector</li>
    <li><strong>2015:</strong> Crossed 1000+ employees</li>
    <li><strong>2024:</strong> Serving 100+ clients nationwide</li>
  </ul>
</section>


    </>
  )
}

export default Company