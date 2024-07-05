import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Pfooter() {
  return (
    <div className='fsection'>
      <div className="outerf1">

      
      <div className="fot-ch1">
        <div className="flsec">
          <div className="ftimg">
            <img src="https://hrxbrand.com/img/MicrosoftHRX.0fe18b05.png" alt="" />
            <div className="subtxt">#KEEPGOING</div>
          </div>
          <div className="nav-cm-logo">
            <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
            <a href=""><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
        <div className="frsec">
          <div className="fc-col">
            <div>Apparel</div>
            <div>Watches</div>
            <div>Assories</div>
            <div>Sunglass</div>
            <div>Equipment</div>
          </div>
          <div className="fc-col">
            <div>HRX Hub</div>
            <div>Workout</div>
            <div>Podcust</div>
            <div>Community</div>
          </div>
          <div className="danda"></div>
        </div>
      </div>
      <div className="fot-ch2">
        <div className="copyright">
        © Hrx-Brand 2024. All Rights Reserved.
        </div>
        <div className="fcol-1">
          <div>Terms & Condition's</div>
          <div>Terms of Use</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Pfooter