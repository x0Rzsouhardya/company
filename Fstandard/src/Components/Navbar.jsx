import React, { useState } from 'react';
import "../style/Navbar.css";
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <a href="#/">
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743596947/image_jcricc.png" alt="logo" />
        </a>
      </div>

      <div className='middleNav'>
        <a href="#/services"><li>Services</li></a>
        <a href="#/whyFstandard"><li>Why FStandard</li></a>
        <a href="#/blog"><li>Blog</li></a>
        <a href="#/company"><li>Company</li></a>
        <a href="#/contact"><li>Contact</li></a>
      </div>

      <div className='app'>
        <a href="#/ourApp"><p>Our App</p></a>
      </div>

      <div className='menu-icon' onClick={toggleDrawer}>
        {drawerOpen ? <IoMdClose /> : <IoMdMenu />}
      </div>

      <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
      <div className='logo'>
        <a href="#/">
          <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1743596947/image_jcricc.png" alt="logo" />
        </a>
      </div>
        <a href="#/services" onClick={toggleDrawer}>Services</a>
        <a href="#/whyFstandard" onClick={toggleDrawer}>Why FStandard</a>
        <a href="#/blog" onClick={toggleDrawer}>Blog</a>
        <a href="#/ourApp" onClick={toggleDrawer}>Our App</a>
        <a href="#/company" onClick={toggleDrawer}>Company</a>
        <a href="#/contact" onClick={toggleDrawer}>Contact</a>
        
      </div>
    </div>
  );
};

export default Navbar;
