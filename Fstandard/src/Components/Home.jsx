import React, { useEffect, useState } from 'react'
import "../style/Home.css"
import { FaLongArrowAltRight } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'

const Home = () => {
  const [showThirdPara, setShowThirdPara] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThirdPara(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section className='firstPara'>
        <div className='heading'>
          <div >
            <h1>F Standard</h1>
            <h4>Integrated Facility Management Company</h4>
          </div>
          <div className='AppDownload'>
            <p>Get seamless access to all our services at your fingertips.</p>
            <button>Download Our App</button>
          </div>
        </div>
        <div className='profileImage'>
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743596947/image_jcricc.png" alt="profile" />
        </div>

      </section>
      {/* <section className='secondPara'>
       <div className="secondParaImage">
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743707141/profile_xko04z.png" alt="secondParaImage" />
        </div> 
        <div className='secondParaArticle'>
          <p>F Standard is a leading facility management company with over 23 years of experience in housekeeping, maintenance, and complete facility solutions. Backed by a strong team of 2,600+ skilled professionals, we ensure top-quality services tailored to client needs. Our well-trained workforce operates under expert supervision, delivering excellence and reliability in every project.</p>
        </div>
      </section> */}
      <section  className={`thirdPara ${showThirdPara ? 'fade-in' : 'hidden'}`}>
        <div className='thirdParaArticle'>
          <h1>Industries We Serve</h1>
          <p>Organizations across sectors trust F Standard to deliver reliable facility management, housekeeping, and maintenance solutions tailored to their unique operational needs.</p>
        </div>
        <div className='thirdParawork'>
          <div className="workapp">
            <HashLink smooth to="/services#GeneralServices">
              <div className="workName">
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743743529/image_1_y8fal1.png" alt="workName" />
                <p>General Services</p>
              </div></HashLink>
            <HashLink smooth to="/services#TechnicalServices">
              <div className="workName">
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743754384/Picture1_ra0fvu.jpg" alt="workName" />
                <p>Technical Services</p>
              </div>
            </HashLink>
            <HashLink smooth to="/services#SoftServices"><div className="workName">
              <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743754976/Picture7_wz8okv.jpg" alt="workName" />
              <p>Soft Services</p>
            </div>
            </HashLink>
            {/* <div className="workName">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743744899/image_4_pxgazl.png" alt="workName" />
              <p>General ManPower</p>
            </div>
            <div className="workName">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743744907/image_5_xlcfdf.png" alt="workName" />
              <p>Emergency Support</p>
            </div>
            <div className="workName">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743744915/image_6_iseee2.png" alt="workName" />
              <p>Equipment Rental</p>
            </div> */}
          </div>
          {/* <div className="seeMore">
            <p>See all Services</p>
            <div className='arroIcon' ><FaLongArrowAltRight /></div>
          </div> */}
        </div>
      </section>
      <section className='fourPara'>
        <h1>Empowering Businesses with Excellence</h1>
        <div className='allClient'>
          <div className="firstFourPara">
            <h3>Banks</h3>
            <div className='gridCover'>
              <div className='bankName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748184/image_7_ie753o.png" alt="bankName" />
              </div>
              <div className='bankName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748201/image_8_a5zjii.png" alt="bankName" />
              </div>
              <div className='bankName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748238/Screenshot_2025-04-04_115313_orvmow.png" alt="bankName" />
              </div>
              <div className='bankName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748213/Screenshot_2025-04-04_115146_cczoku.png" alt="bankName" />
              </div>
              <div className='bankName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748225/Screenshot_2025-04-04_115209_kkjcjy.png" alt="bankName" />
              </div>
            </div>
          </div>
          <div className="secondFourPara">
            <h3>Manufacturers</h3>
            <div className='gridCover'>
              <div className='manName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748310/Screenshot_2025-04-04_115504_uflepk.png" alt="manName" />
              </div>
              <div className='manName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748323/Screenshot_2025-04-04_115521_ilibgp.png" alt="manName" />
              </div>
              <div className='manName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748329/Screenshot_2025-04-04_115533_boirfn.png" alt="manName" />
              </div>
              <div className='manName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748343/Screenshot_2025-04-04_115549_zu86ku.png" alt="manName" />
              </div>
              <div className='manName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748353/Screenshot_2025-04-04_115604_r198et.png" alt="manName" />
              </div>
              <div className='manName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748367/Screenshot_2025-04-04_115617_akpoga.png" alt="manName" />
              </div>
              <div className='manName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748379/Screenshot_2025-04-04_115629_evpfem.png" alt="manName" />
              </div>
            </div>
          </div>
          <div className="thirdFourPara">
            <h3>Hospitals</h3>
            <div className='gridCover'>
              <div className='hosName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748259/Screenshot_2025-04-04_115740_q7upyq.png" alt="hosName" />
              </div>
              <div className='hosName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748267/Screenshot_2025-04-04_115752_n9pr94.png" alt="hosName" />
              </div>
              <div className='hosName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748276/Screenshot_2025-04-04_115805_hu9ovr.png" alt="hosName" />
              </div>
              <div className='hosName'>
                <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743748295/Screenshot_2025-04-04_115818_pzlztk.png" alt="hosName" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app-intro">
        <div className="intro-content">
          <h1>
            Introducing <span>Our App</span>
          </h1>
          <p>
            The ultimate solution for [problem it solves]. Experience efficiency like never before with seamless integration and real-time updates.
          </p>
          <div className="buttons">
            <a href="https://yourapp.com/download" className="download-btn">
              📲 Download Now
            </a>
            <a href="https://yourapp.com/learn-more" className="learn-more">
              📖 Learn More
            </a>
          </div>
        </div>
        <div className="intro-image">
          <img
            src="https://yourapp.com/app-screenshot.png"
            alt="App Preview"
          />
        </div>
      </section>
    </>

  )
}

export default Home