import React from 'react';
import { animate, motion } from 'framer-motion';
import './community.css';
import img1 from "/Community_Photo/1.jpg";
import img2 from "/Community_Photo/2.jpg";
import img3 from "/Community_Photo/3.jpg";
import img4 from "/Community_Photo/4.jpg";
import img5 from "/Community_Photo/5.jpg";
import img6 from "/Community_Photo/6.jpg";
import img7 from "/Community_Photo/7.jpg";
import img8 from "/Community_Photo/8.jpg";
import img9 from "/Community_Photo/9.jpg";
import img10 from "/Community_Photo/10.jpg";
import img11 from "/Community_Photo/11.jpg";


const Community = () => {

    const upwardVarient = {
        animate: {
            y: ["0%", "-100%"],
            transition: {
                repeat: Infinity,
                duration: 10,
                ease: "linear",
            }
        }
    };

    const downwardVarient = {
        animate: {
            y: ["-100%", "0%"],
            transition: {
                repeat: Infinity,
                duration: 10,
                ease: "linear"
            }
        }
    }

    return (
        <div className="community-container">
            <div className="cmnty-chd">
                <div className="community-content">
                    <h2>Meet our Enormous <span style={{ color: "#E85252" }}>Community</span></h2>
                    <p>
                        <span className="h-brand">HRX</span> is more than just a fitness brand; it's a movement. Founded by Bollywood icon Hrithik Roshan in 2013,
                        HRX embodies the spirit of pushing boundaries and achieving the extraordinary. Our community is united by
                        the passion for living life to the fullest, embracing challenges, and constantly evolving.
                    </p>
                    <p>
                        From workout enthusiasts to everyday heroes, HRX equips you with premium fitness apparel, cutting-edge gear,
                        and the motivation to unleash your potential. Join us in our mission to inspire, empower, and elevate –
                        because with HRX, you're not just wearing a brand, you're living a lifestyle of excellence.
                    </p>
                </div>

                <div className="community-slider">
                    <div className="comnty-filter">
                        <motion.div
                            className="slide-tr"
                            variants={upwardVarient}
                            animate="animate"
                            transition={{ delay: 0.5 }}
                        >
                            <img src={img1} alt="Community 1" />
                            <img src={img11} alt="Community 11" />
                            <img src={img3} alt="Community 3" />
                            <img src={img1} alt="Community 1" />
                            <img src={img11} alt="Community 11" />
                            <img src={img3} alt="Community 3" />

                        </motion.div>
                        <motion.div
                            className="slide-tr"
                            variants={downwardVarient}
                            animate="animate"
                            transition={{ delay: 0.9 }}

                        >
                            <img src={img4} alt="Community 4" />
                            <img src={img5} alt="Community 5" />
                            <img src={img6} alt="Community 6" />
                            <img src={img4} alt="Community 4" />
                            <img src={img5} alt="Community 5" />
                            <img src={img6} alt="Community 6" />


                        </motion.div>
                        <motion.div
                            className="slide-tr"
                            variants={upwardVarient}
                            animate="animate"
                            transition={{ delay: 0.1 }}
                        >

                            <img src={img7} alt="Community 7" />
                            <img src={img8} alt="Community 8" />
                            <img src={img9} alt="Community 9" />
                            <img src={img7} alt="Community 7" />
                            <img src={img8} alt="Community 8" />
                            <img src={img9} alt="Community 9" />

                        </motion.div>
                        <motion.div
                            className="slide-tr"
                            variants={downwardVarient}
                            animate="animate"
                            transition={{ delay: 0.7 }}
                        >

                            <img src={img1} alt="Community 1" />
                            <img src={img11} alt="Community 11" />
                            <img src={img3} alt="Community 3" />
                            <img src={img1} alt="Community 1" />
                            <img src={img11} alt="Community 11" />
                            <img src={img3} alt="Community 3" />

                        </motion.div>
                        <motion.div
                            className="slide-tr"
                            variants={upwardVarient}
                            animate="animate"
                            transition={{ delay: 0.2 }}
                        >

                            <img src={img4} alt="Community 4" />
                            <img src={img5} alt="Community 5" />
                            <img src={img6} alt="Community 6" />
                            <img src={img4} alt="Community 4" />
                            <img src={img5} alt="Community 5" />
                            <img src={img6} alt="Community 6" />
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Community;