import { motion } from 'framer-motion'
import React from 'react'
import "./marque.css"
import flipkart from "/Marque_logo/flipkart.png"
import cult from "/Marque_logo/cultfit.png"
import baccarose from "/Marque_logo/baccarose.png"
import noise from "/Marque_logo/noise.png"
import myntra from "/Marque_logo/myntra.png"

function Marque() {
    return (
        <div className='marque-section'>
            <div className="outerBox">
                <section className="run-logo-marque">
                    <motion.div initial={{ x: "0" }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear", duration: 35, repeat: Infinity }} className="m-s-sc">
                        <div className="img-elem">
                            <img src={flipkart} alt="Flipkart" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={cult} alt="Cult" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={baccarose} alt="Eatfit" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={noise} alt="Noise" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={myntra} alt="Myntra" className="img-size-mrk" />
                        </div>
                    </motion.div>
                    <motion.div initial={{ x: "0" }} 
                    animate={{ x: "-100%" }} 
                    transition={{ ease: "linear", duration: 35, repeat: Infinity }} className="m-s-sc">
                        <div className="img-elem">
                            <img src={flipkart} alt="Flipkart" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={cult} alt="Cult" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={baccarose} alt="Eatfit" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={noise} alt="Noise" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={myntra} alt="Myntra" className="img-size-mrk" />
                        </div>
                    </motion.div>
                    <motion.div initial={{ x: "0" }} 
                    animate={{ x: "-100%" }} 
                    transition={{ ease: "linear", duration: 35, repeat: Infinity }} className="m-s-sc">
                        <div className="img-elem">
                            <img src={flipkart} alt="Flipkart" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={cult} alt="Cult" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={baccarose} alt="Eatfit" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={noise} alt="Noise" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={myntra} alt="Myntra" className="img-size-mrk" />
                        </div>
                    </motion.div>
                    <motion.div initial={{ x: "0" }} 
                    animate={{ x: "-100%" }} 
                    transition={{ ease: "linear", duration: 35, repeat: Infinity }} className="m-s-sc">
                        <div className="img-elem">
                            <img src={flipkart} alt="Flipkart" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={cult} alt="Cult" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={baccarose} alt="Eatfit" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={noise} alt="Noise" className="img-size-mrk" />
                        </div>
                        <div className="img-elem">
                            <img src={myntra} alt="Myntra" className="img-size-mrk" />
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    )
}

export default Marque