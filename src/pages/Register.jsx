import Header from "../components/Header";
import programmer from "../assets/images/register/programmer.svg";
// import programmerSm from "../assets/images/register/programmer-sm.svg";

const Register = () => {
  return (
    <>
      <Header />
      <main>
        <section id="register" className="relative bg-darkPurple text-white pr-[4.12rem] pl-[4.19rem] pt-[4.12rem] pb-[1.15rem]">
          <div className="relative flex flex-col md:flex-row">
            <div className="register-image-container">
              <img src={programmer} alt="Programmer on a chair" />
            </div>
            <div className="">
            {/* Form header */}
              <div className="form-header">
                <h2 className="absolute -top-[3rem] left-0 md:static text-secondary text-[1.3rem] md:text-[2rem] font-semibold leading-normal">Register</h2>
                <p></p>
                {/* <img src={part_of_move} alt="People moving" /> */}
                <h3>CREATE YOUR ACCOUNT</h3>
              </div>
              <form action="">
                <div className="form-row">
                  <div className="input-box">
                    <label htmlFor="teamName">Team&apos;s Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter the name of your group"
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="projectTopic">Project Topic</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="What is your group project topic"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-box">
                    <label htmlFor="category">Category</label>
                    <select
                      name="category"
                      id="category"
                      className="form-input"
                    >
                      <option value="">Select your category</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <label htmlFor="groupSize">Group Size</label>
                    <select
                      name="groupSize"
                      id="groupSize"
                      className="form-input"
                    >
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
                <p className="confirm">
                  Please review your registration details before submitting
                </p>
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
            {/* <div className="flare">
              <img src={Purple_Lens_Flare} alt="" />
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
