import React, { useEffect } from 'react'
import "../style/Services.css"

const Services = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // small delay to wait for render
      }
    }
  }, []);
  return (
    <>
      <section className='ServiesfirstPara'>
        <div className='ServiesfirstParaArticle'>
          <h1>Our Services</h1>
          <p>At F Standard, we provide tailored solutions in facility management, housekeeping, and maintenance—ensuring your operations run smoothly and efficiently.</p>
        </div>
        <div className='ServiesservicesImage'><img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743752455/ChatGPT_Image_Apr_4_2025_12_02_14_AM_a1sm5z.png" alt="servicesImage" /></div>

      </section>
      <section id='GeneralServices' className='ServiesSecondPara'>
        <h1>General Services</h1>
        <div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743743529/image_1_y8fal1.png" alt="servies-card" />
          <p>Housekeeping, Sanitation & Fumigation</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743744878/image_2_uyjvwv.png" alt="servies-card" />
          <p>Horticulture</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743744891/image_3_vdp0gy.png" alt="servies-card" />
          <p>Total R&M (MEPCC)</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743744899/image_4_pxgazl.png" alt="servies-card" />
          <p>General ManPower</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743744907/image_5_xlcfdf.png" alt="servies-card" />
          <p>Emergency Support</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743744915/image_6_iseee2.png" alt="servies-card" />
          <p>Equipment Rental</p>
        </div>
        </div>
      </section>
      <section id='TechnicalServices' className='ServiesthirdPara'>
        <h1>Technical Services</h1>
        <div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743754384/Picture1_ra0fvu.jpg" alt="servies-card" />
          <p>Total Utility O&M & Installation</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743754394/Picture2_ttiquk.jpg" alt="servies-card" />
          <p>Green Energy Solutions</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743754407/Picture3_o5spl8.png" alt="servies-card" />
          <p>Building Management System</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743754420/Picture4_fpcaul.jpg" alt="servies-card" />
          <p>Total Carbon Credit Management</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743754437/Picture5_cnreic.jpg" alt="servies-card" />
          <p>Full Automation & Analytics Solutions</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743754449/Picture6_f9vnrd.png" alt="servies-card" />
          <p>Full Third Party Production, EPCM & Packaging</p>
        </div>
        </div>
      </section>

      <section id='SoftServices' className='ServiesfourPara'>
        <h1>Soft Services</h1>
        <div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743754976/Picture7_wz8okv.jpg" alt="servies-card" />
          <p>Canteen Services</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743754988/Picture8_oairda.jpg" alt="servies-card" />
          <p>Total Interior Design</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743755005/Picture9_hud8pj.jpg" alt="servies-card" />
          <p>Paint Solutions</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743755017/Picture10_tkz7dt.jpg" alt="servies-card" />
          <p>Total Exterior Works</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743755043/Picture11_tbz5ds.jpg" alt="servies-card" />
          <p>Signage Solutions</p>
        </div>
        <div className='servies-card'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743755055/Picture12_jmxxg4.png" alt="servies-card" />
          <p>Total Concierge Services</p>
        </div>
        </div>
      </section>

      <section className="quoteSection">
  <div className="quoteImage">
    <img
      src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743756873/ChatGPT_Image_Apr_4_2025_02_23_55_PM_c776sz.png"
      alt="Client handshake"
    />
  </div>
  <div className="quoteText">
    <h2>"Service is the rent we pay for being. It is the very purpose of life."</h2>
    <p>– Marian Wright Edelman</p>
  </div>
</section>

    </>
  )
}

export default Services