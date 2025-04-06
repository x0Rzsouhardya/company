import React from 'react'
import "../style/WhyFstandard.css"
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { GrServices, GrUserWorker } from 'react-icons/gr'
import { FaHandshake } from 'react-icons/fa'

const WhyFstandard = () => {
  return (
    <>
    <section className='whyFirstPara'>
      <div className='whyFirstParaArticle'>
      <h1>Why Choose F Standard?</h1>
      <p>At F Standard, we don’t just provide services—we deliver value, trust, and excellence built over 23+ years of industry experience.</p>
      </div>
      <div className='whyFirstParaImage'><img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743596947/image_jcricc.png" alt="whyFirstParaImage" /></div>
         
    </section>
    <section className="ourApproach">
  <div className="approachContent">
    <h2>Our Approach is Simple</h2>
    <p>
      Everything starts with listening and collaboration. At F Standard, our services are shaped by the real-world needs of facility and maintenance professionals—just like you.
    </p>
    <p>
      We believe in building solutions together. Your feedback, insights, and challenges directly influence how we evolve. That’s why we ensure our approach always aligns with how you work, not the other way around.
    </p>
  </div>
</section>
   <section className='card'>
   <div className="reasonsGrid">
    <div className="reasonCard">
      <div className='Experience-Icon'><RiVerifiedBadgeFill /></div>
      <h3>23+ Years of Experience</h3>
      <p>Decades of trusted service across banking, healthcare, and manufacturing sectors.</p>
    </div>

    <div className="reasonCard">
    <div className='Workforce-Icon'><GrUserWorker /></div>
      <h3>2600+ Skilled Team</h3>
      <p>Our trained professionals ensure smooth execution with precision and care.</p>
    </div>

    <div className="reasonCard">
    <div className='Service-Icon'><GrServices /></div>
      
      <h3>End-to-End Solutions</h3>
      <p>From housekeeping to technical maintenance—we manage it all under one roof.</p>
    </div>

    <div className="reasonCard">
    <div className='Client-Trust-Icon'><FaHandshake /></div>
      <h3>Trusted by Top Clients</h3>
      <p>Serving top banks, hospitals, and industries with long-standing partnerships.</p>
    </div>
    </div>
   </section>
   <section className="impactSection">
  <h2>Our Impact in Numbers</h2>
  <div className="impactGrid">
    <div className="impactCard">
      <h3>500+</h3>
      <p>Sites Managed</p>
    </div>
    <div className="impactCard">
      <h3>2600+</h3>
      <p>Team Members</p>
    </div>
    <div className="impactCard">
      <h3>96%</h3>
      <p>Client Retention Rate</p>
    </div>
    <div className="impactCard">
      <h3>&lt; 2 Hrs</h3>
      <p>Avg. Response Time</p>
    </div>
  </div>
</section>

<section className="coverageSection">
  <h2>Where We Operate</h2>
  <p className="coverageSubtitle">F Standard is proud to serve clients across multiple regions in India.</p>
  <div className="locationsGrid">
    <div className="locationItem">🟢 Delhi NCR</div>
    <div className="locationItem">🟢 Mumbai</div>
    <div className="locationItem">🟢 Kolkata</div>
    <div className="locationItem">🟢 Bengaluru</div>
    <div className="locationItem">🟢 Hyderabad</div>
    <div className="locationItem">🟢 Chennai</div>
    <div className="locationItem">🟢 Pune</div>
    <div className="locationItem">🟢 Ahmedabad</div>
  </div>
</section>

<section className="ctaSection">
  <div className="ctaContent">
    <h2>Ready to Elevate Your Facility Management?</h2>
    <p>Partner with F Standard and experience excellence, reliability, and unmatched service quality across every touchpoint.</p>
    <a href="#/contact" className="ctaButton">Get in Touch</a>
  </div>
</section>




    </>
  )
}

export default WhyFstandard