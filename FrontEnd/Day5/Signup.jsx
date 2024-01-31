import './Signup.css';
const RegistrationForm = () => {
  return (
    <div className='abhi8'>
    <div className="container8">
      <div className="title8">Registration</div>
      <div className="content8">
        <form className='ruba'action="#">
          <div className="user-details8">
            <div className="input-box8">
              <span className="details8">Full Name</span>
              <input type="text" placeholder="Enter your name" required className="input-field8" />
            </div>
            <div className="input-box8">
              <span className="details8">Username</span>
              <input type="text" placeholder="Enter your username" required className="input-field8" />
            </div>
            <div className="input-box8">
              <span className="details8">Email</span>
              <input type="text" placeholder="Enter your email" required className="input-field8" />
            </div>
            <div className="input-box8">
              <span className="details8">Phone Number</span>
              <input type="text" placeholder="Enter your number" required className="input-field8" />
            </div>
            <div className="input-box8">
              <span className="details8">Password</span>
              <input type="text" placeholder="Enter your password" required className="input-field8" />
            </div>
            <div className="input-box8">
              <span className="details8">Confirm Password</span>
              <input type="text" placeholder="Confirm your password" required className="input-field8" />
            </div>
          </div>
          {/* <div className="gender-details8">
            <input type="radio" name="gender8" id="dot-18" className="radio-btn8" />
            <input type="radio" name="gender8" id="dot-28" className="radio-btn8" />
            <input type="radio" name="gender8" id="dot-38" className="radio-btn8" />
            <span className="gender-title8">Gender</span>
            <div className="category8">
              <label htmlFor="dot-18" className="dot-label8">
                <span className="dot8 one"></span>
                <span className="gender8">Male</span>
              </label>
              <label htmlFor="dot-28" className="dot-label8">
                <span className="dot8 two"></span>
                <span className="gender8">Female</span>
              </label>
              <label htmlFor="dot-38" className="dot-label8">
                <span className="dot8 three"></span>
                <span className="gender8">Prefer not to say</span>
              </label>
            </div>
          </div> */}
          <div className="button8">
            <button  type="submit" value="Register" className="register-btn8" >Signup</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default RegistrationForm;
