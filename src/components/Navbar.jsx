import React, { useEffect, useRef, useState } from 'react';
import "./navbar.css";
import { motion, useCycle } from 'framer-motion'
import Navmenu from './navmenu';
import Login from './login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#FFFFFF"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <motion.button onClick={toggle} className='navtogglebtn'>
    <svg width="35" height="35" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
        transition={{ duration: 0.3 }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1, x: 4 },
          open: { opacity: 0, x: 0 }  // Adjust 'x' value as needed
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </motion.button>
)

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);


  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setHideNavbar(false);
      } else {
        setHideNavbar(true);
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`nav ${hideNavbar ? 'hidden' : ''}`}>
      <div className="lboss-nav">



        {/* << --- Nav bar Left Section ---- >>*/}
        <div className="nav-l">
          <img src="https://hrxbrand.com/img/MicrosoftHRX.0fe18b05.png" alt="Logo" />
        </div>


        {/* << --  Navbar Middle section -- >>*/}
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom="1000"
          className='nav-m'
        >
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>



        {/*<< ----  Right Section ---- >>*/}
        <div className="nav-r">

            <div className="nav-btn">
              <button><a href="#">Login</a></button>
            </div>
          
          <div className="cart"><FontAwesomeIcon icon={faCartShopping} /></div>
        </div>

      </div>
        <Navmenu isOpen={isOpen} />
        {/* <Login isOpen={isOpen} /> */}
    </div>
  );
};

export default Navbar;