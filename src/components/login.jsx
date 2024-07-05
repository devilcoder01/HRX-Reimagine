import React from 'react';
import "./Login.css";

function Login() {
  return (
    <div className="lm-login-container">
      <div className='lm-login-box'>
        <div className="lm-login-left-panel">
          <div className="lm-login-brand">
            <img src="https://hrxbrand.com/img/MicrosoftHRX.0fe18b05.png" alt="HRX Logo" />
            <div className="lm-login-tagline">#KEEPGOING</div>
          </div>
          <div className="lm-login-description">India's biggest fitness community</div>

          <div className="lm-login-newuser">
            <div>New to our Community?</div>
            <div className="lm-link-btn">
              Click here to Register
            </div>
          </div>

          <div className="lm-login-alternative">
            <div>or Sign in with</div>
            <div className="lm-login-social-icons">
              <img src="src/assets/google.svg" alt="Google" />
              <img src="src/assets/facebook.svg" alt="Facebook" />
            </div>
          </div>
        </div>
        <div className="lm-login-right-panel">
          <h1>Login</h1>
          <form action="">
            <div className="lm-login-form-container">
              <div className="lm-login-form-row lm-login-form-row-full">
                <div className="lm-login-form-field">
                  <input type="email" id="email" name="email" placeholder="Email" />
                </div>
              </div>
              <div className="lm-login-form-row lm-login-form-row-full">
                <div className="lm-login-form-field">
                  <input type="password" id="password" name="password" placeholder="Password" />
                </div>
              </div>
            </div>
            <div className="lm-login-submit-button"><button type="submit">Login</button></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;