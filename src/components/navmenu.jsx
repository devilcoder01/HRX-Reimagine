import React from 'react'
import "./navmenu.css"
import { motion } from 'framer-motion'


const containerVariants = {
  open: {
    width: "100vw",
    height: "100vh",
    transition: { 
      height: { duration: 0.95, ease: "easeInOut" },

    }
  },
  closed: {
    width: "100vw",
    height: "0",  // Keep height full to maintain horizontal animation
    transition: { 
      height: { duration: 0.65, ease: "easeInOut" },
 
    }
  }
};

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 }  // Delay children to start after width animation
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const menuItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 }
    }
  }
};

const Navmenu = ({ isOpen }) => {
  var elements = document.querySelectorAll('#cntr h1');
elements.forEach(function(ele) {
  ele.style.position = 'relative';
  
  // Create the border element
  var borderElement = document.createElement('div');
  borderElement.style.position = 'absolute';
  borderElement.style.top = '0';
  borderElement.style.left = '0';
  borderElement.style.height = '2px';
  borderElement.style.width = '0';
  borderElement.style.backgroundColor = 'red';
  borderElement.style.transition = 'width 0.2s ease-in';
  ele.appendChild(borderElement);

  // Mouse enter event
  ele.addEventListener('mouseenter', function() {
    ele.style.fontSize = '60px';
    ele.style.backgroundColor = 'transparent';
    ele.style.fontWeight = 'bold';
    ele.style.transition = 'font-size 0.25s ease';

    // Animate the border
    borderElement.style.width = '100%';
  });

  // Mouse leave event
  ele.addEventListener('mouseleave', function() {
    ele.style.fontSize = '';
    ele.style.backgroundColor = '';
    ele.style.fontWeight = '';
    ele.style.transition = 'all ease-out 0.251s';

    // Reset the border
    borderElement.style.width = '0';
  });
});

  return (
    <motion.div 
      id="nav-container" 
      variants={containerVariants}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div id="menu-shower" variants={menuVariants}>
        
        <motion.div id="cntr" variants={menuVariants}>
          <motion.h1 variants={menuItemVariants}>HOME</motion.h1>
          <motion.h1 variants={menuItemVariants}>COLLECTIONS</motion.h1>
          <motion.h1 variants={menuItemVariants}>HRX HUB</motion.h1>
          <motion.h1 variants={menuItemVariants}>BLOG</motion.h1>
          <motion.h1 variants={menuItemVariants}>PRESS RELEASE</motion.h1>
          <motion.h1 variants={menuItemVariants}>COMMUNITY</motion.h1>
          <motion.h1 variants={menuItemVariants}>CONNECT</motion.h1>
        </motion.div>
        {/* <div id="style">
          <div id="style1"></div>
          <div id="style2"></div>
        </div> */}
      </motion.div>
    </motion.div>
  );
};

export default Navmenu;