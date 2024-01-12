import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <section
      id="privacyPolicy"
      className="bg-darkPurple text-white border-b-[0.0625rem] border-b-grey"
    >
      <div>
        <div>
          {/* Privacy policy header */}
          <div className="text-center lg:text-left mb-[2.86rem] md:mb-[4.25rem]">
            <h2 className="text-[1.25rem] md:text-[2rem] font-bold leading-[133%] mb-[0.38rem] md:mb-[1rem]">
              Privacy Policy and <br />
              <span className="text-secondary">Terms</span>
            </h2>
            <p className="text-[0.75rem] leading-[229.167%] md:text-[0.875rem] md:leading-[196.429%]">
              Last updated on September 12, 2023
            </p>
            <p>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          {/* Privacy policy main */}
          <div>
            <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
            </p>
            <h3>Licensing Policy</h3>
            <ul>
                <li>The Standard License grants you a non-exclusive right to navigate and register for our event</li>
                <li>You are licensed to use the item available at any free source sites, for your project developement</li>
            </ul>
            <Link
              to="/"
              className="btn-gradient w-[9.5rem] h-[2.92731rem] md:w-[10.75rem] md:h-[3.3125rem] mx-auto"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Privacy policy image */}
        <div></div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
