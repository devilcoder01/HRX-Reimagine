import React from 'react'
import "./createacount.css"

function CreateAccount() {
  return (
    <div className="main-logbox">
      <div className='loginbox'>
        <div className="right-headbox">
          <div className="login-logo">
            <img src="https://hrxbrand.com/img/MicrosoftHRX.0fe18b05.png" alt="HRX Logo" />
            <div className="login-subtitle">#KEEPGOING</div>
          </div>
          <div className="login-middle">India's biggest fitness community</div>
          {/* <div className="register_link">
            <div>New to our Community?</div>
            <a href="">Click here to Register</a>
          </div> */}
          <div className="login_sign">
            <div>or Sign in with</div>
            <div className="signlogo">
              <img src="src/assets/google.svg" alt="Google" />
              <img src="src/assets/facebook.svg" alt="Facebook" />
            </div>
          </div>
        </div>
        <div className="left-headbox">
          <h1>Create Account</h1>
          <form action="">
            <div className="form-section">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" id="firstName1" name="firstName1" placeholder="First Name" />
                  {/* <label htmlFor="firstName1">First Name</label> */}
                </div>
                <div className="form-group">
                  <input type="text" id="lastName1" name="lastName1" placeholder="Last Name" />
                  {/* <label htmlFor="lastName1">Last Name</label> */}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" id="phone1" name="phone1" placeholder="Phone" />
                  {/* <label htmlFor="phone1">Phone</label> */}
                </div>
                <div className="form-group">
                  <input type="text" id="otp1" name="otp1" placeholder="OTP" />
                  {/* <label htmlFor="otp1">OTP</label> */}
                </div>
              </div>
              <div className="form-row big-row">
                <div className="form-group">
                  <input type="email" id="email1" name="email1" placeholder="Email" />
                  {/* <label htmlFor="email1">Email</label> */}
                </div>
              </div>
              <div className="form-row big-row">
                <div className="form-group">
                  <input type="password" id="password1" name="password1" placeholder="Password" />
                  {/* <label htmlFor="password1">Password</label> */}
                </div>
              </div>
              <div className="form-row big-row">
                <div className="form-group">
                  <input type="password" id="confirmPassword1" name="confirmPassword1" placeholder="Confirm Password" />
                  {/* <label htmlFor="confirmPassword1">Confirm Password</label> */}
                </div>
              </div>
            </div>
            <div className="form-btn"><button>Register</button></div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default CreateAccount
