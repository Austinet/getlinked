// import React from 'react'
import Header from "../../components/Header/Header";
import programmer from "../../assets/images/register/programmer.png";
import part_of_move from "../../assets/images/register/part_of_move.png";
import Purple_Lens_Flare from "../../assets/images/register/Purple_Lens_Flare.png";

import './register.css'

const Register = () => {
  return (
    <>
      <Header />
      <main>
        <section id="register">
          <div className="register-container w-80">
            <div className="register-image-container">
              <img src={programmer} alt="Programmer on a chair" />
            </div>
            <div className="register-form-container">
              <div className="form-header">
                <h2>Register</h2>
                <img src={part_of_move} alt="People moving" />
                <h3>CREATE YOUR ACCOUNT</h3>
              </div>
              <form action="">
                <div className="form-row">
                  <div className="input-box">
                    <label htmlFor="teamName">Team&apos;s Name</label>
                    <input type="text" className="form-input" placeholder="Enter the name of your group"/>
                  </div>
                  <div className="input-box">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-input" placeholder="Enter your phone number"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-input" placeholder="Enter your email address"/>
                  </div>
                  <div className="input-box">
                    <label htmlFor="projectTopic">Project Topic</label>
                    <input type="text" className="form-input" placeholder="What is your group project topic"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-box">
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" className="form-input">
                      <option value="">Select your category</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <label htmlFor="groupSize">Group Size</label>
                    <select name="groupSize" id="groupSize" className="form-input">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
                <p className="confirm">Please review your registration details before submitting</p>
                <div className="form-checkbox">
                  <span className="checkbox"></span>
                  {/* <input type="checkbox" /> */}
                  <label htmlFor="termsCondition">
                    I agree with the event terms and conditions and privacy
                    policy
                  </label>
                </div>
                <button type="submit">Register Now</button>
              </form>
            </div>
            <div className="flare">
              <img src={Purple_Lens_Flare} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
