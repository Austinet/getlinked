import Header from "../components/Header";
import programmer from "../assets/images/register/programmer.svg";
import move from "../assets/images/register/move.svg";

const Register = () => {
  return (
    <>
      <Header />
      <main>
        <section
          id="register"
          className="relative bg-darkPurple text-white pr-[3rem] pl-[3rem] pt-[4.12rem] pb-[1.15rem]"
        >
          <div className="relative flex flex-col md:flex-row">
            <div className="register-image-container">
              <img src={programmer} alt="Programmer on a chair" />
            </div>
            <div className="md:w-1/2">
              {/* Form header */}
              <div className="mb-[1.44rem] md:mb-[2.06rem]">
                <h2 className="absolute -top-[3rem] left-0 md:static text-secondary text-[1.3rem] md:text-[2rem] font-semibold leading-normal">
                  Register
                </h2>

                <div className="flex items-end gap-[0.5rem] mt-[1.44rem] mb-[0.44rem]">
                  <p className="text-[0.75rem] md:text-[0.875rem] leading-normal">Be part of this movement!</p>
                  <img src={move} alt="People moving" className="w-[60px] md:w-auto mb-[0.5rem]"/>
                </div>
                <h3 className="text-[1.25rem] md:text-[1.5rem] font-normal leading-normal">CREATE YOUR ACCOUNT</h3>
              </div>
              <form action="" className="register">
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="teamName">Team&apos;s Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter the name of your group"
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="projectTopic">Project Topic</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="What is your group project topic"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="category">Category</label>
                    <select
                      name="category"
                      id="category"
                      className="form-input"
                    >
                      <option value="">Select your category</option>
                    </select>
                  </div>
                  <div className="form-col">
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
                <p className="text-[#FF26B9] text-[0.75rem] mb-[0.75rem] md:mb-[1.06rem] italic">
                  Please review your registration details before submitting
                </p>
                <div className="flex items-center gap-[0.5rem]">
                  {/* <span className="checkbox"></span> */}
                  <input type="checkbox" id="termsCondition" className=""/>
                  <label htmlFor="termsCondition" className="text-[0.625rem] md:text-[0.75rem]">
                    I agree with the event terms and conditions and privacy
                    policy
                  </label>
                </div>
                <button type="submit" className="w-[10.75rem] md:w-full h-[3.3125rem] mx-auto mt-[0.88rem] md:mt-[1.38rem] rounded-[0.25rem] pink-bg text-white flex items-center justify-center">Register Now</button>
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
