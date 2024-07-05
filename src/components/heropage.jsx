import React from 'react'
import "./heropage.css"

function Heropage() {
  return (
    <div className="heropage-ct">
      <div className="box-hero">
        <div className="box-container">
          <div className="box-l">
            <div className="box-text">
              <h2>Gear Up For Greatness</h2>
            </div>
            <div className="box-j-btn">
              <span><button className='bt-jt'><h4>Join Now</h4></button></span>
              <span className="bt-jt-cir">
                <div className="bt-child-cir"></div>
              </span>

            </div>
            <div className="box-trac">
              <div className="bx-c">
                <div className='c-tx'>1000+</div>
                <div className="c-subtxt">Comunity Member</div>
              </div>
              <div className="bx-c">
                <div className='c-tx'>40+</div>
                <div className="c-subtxt">Fitness Program</div>
              </div>
              <div className="bx-c">
                <div className='c-tx'>150+</div>
                <div className="c-subtxt">Fitness Channel</div>
              </div>
            </div>

          </div>
          <div className="box-r">
            {/* <video autoPlay={true} muted loop>
              <source src="src\assets\Brands.mp4" type="video/mp4" />

            </video> */}
          </div>
        </div>

        <div className="hf-circle-1"></div>
        <div className="hf-circle-2"></div>
        <div className="bx-bubble"></div>
      </div>
      <div className="big-explor-cir">
        <div className="child-exp-cir"></div>
      </div>

    </div>
  )
}

export default Heropage