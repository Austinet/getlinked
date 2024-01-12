import { Link } from "react-router-dom";
import curve from "../assets/images/home/curve.svg";
import star from "../assets/images/home/star.svg";
import starGrey from "../assets/images/home/star-grey.svg";
import lightBulb from "../assets/images/home/light-bulb.svg";
import chain from "../assets/images/home/chain.svg";
import blast from "../assets/images/home/blast.svg";
import flare from "../assets/images/home/purple-flare-header.svg";
import virtualR from "../assets/images/home/virtualR.svg";
import virtualMan from "../assets/images/home/virtual-screen.png";

const Hero = () => {
  return (
    <section
      id="banner"
      className="bg-darkPurple text-white pt-[1.94rem] border-b-[0.0625rem] border-b-grey md:min-h-[50.81rem]"
    >
      {/* Banner wrapper */}
      <div className="max-w-[90.0675rem] lg:ml-auto">
        {/* Banner header */}
        <div className="text-center lg:text-right mb-[2.5rem] md:mr-[3.44rem] flex flex-col items-end w-fit mx-auto">
          <h2 className="italic font-Montserrat font-bold md:text-[2.25rem]">
            Igniting a Revolution in HR innovation
          </h2>
          <img
            src={curve}
            alt="curve"
            className="md:ml-auto w-[7.1875rem] md:w-auto"
          />
        </div>
        {/* Banner container */}
        <div className="flex flex-col lg:flex-row gap-[1.64rem] lg:gap-0 relative">
          {/* Banner details */}
          <div className="text-center lg:text-left px-[3.56rem] lg:pr-0 lg:pl-[1rem] lg:mt-[5.19rem]">
            {/* Star */}
            <div className="absolute top-[-0.62rem] left-[7.5rem] lg:top-[-4.19rem] lg:left-[4.56rem]">
              <img src={star} alt="A star" className="w-[0.625rem] md:w-auto" />
            </div>

            <h1 className="font-bold font-Clash text-[2rem] md:text-[4.2rem] lg:text-[5rem] leading-tight mb-[0.56rem]">
              getlinked
              <span className="relative ">
                Tech
                {/* Bulb */}
                <div className="absolute top-[-1rem] right-[1.2rem] md:top-[-3rem] md:right-[2rem]">
                  <img
                    src={lightBulb}
                    alt="A light bulb"
                    className="w-[1.125rem] md:w-auto"
                  />
                </div>
              </span>{" "}
              <br />
              Hackathon
              <span className="relative">
                <span className="text-secondary">1.0</span>
                <div className="absolute top-0 right-[-3.5rem] md:right-[-9rem] inline-flex">
                <img
                  src={chain}
                  alt="A chain"
                  className="w-[2.0498rem] md:w-auto"
                />
                <img
                  src={blast}
                  alt="blast"
                  className="w-[1.3824rem] md:w-auto"
                />
                </div>
               
              </span>
            </h1>
            <p className="text-[0.8125rem] md:text-[1.25rem] leading-[166%] mb-[1.5rem] max-w-[32.625rem] mx-auto lg:mx-0">
              Participate in getlined tech Hacathon 2023 stand a chance to win a
              Big prize
            </p>
            <Link
              to="/register"
              className="btn-gradient w-[9.5rem] h-[2.92731rem] md:w-[10.75rem] md:h-[3.3125rem] mx-auto lg:mx-0"
            >
              Register
            </Link>

            {/* Countdown */}
            <div>
              <ul className="flex justify-center lg:justify-start gap-[0.88rem] mt-[0.89rem] md:mt-[4.81rem]">
                <li>
                  <span className="countdown">00</span>
                  <span className="countdown-indicator">H</span>
                </li>
                <li>
                  <span className="countdown">00</span>
                  <span className="countdown-indicator">M</span>
                </li>
                <li>
                  <span className="countdown">00</span>
                  <span className="countdown-indicator">S</span>
                </li>
              </ul>
            </div>
            {/* <img src={countdown} alt="Countdown" /> */}
          </div>
          {/* Banner image */}
          <div className="relative">
            <img
              src={virtualMan}
              alt="Man wearing smart glasses touching virtual screen"
            />
            <img
              src={virtualR}
              alt="Virtual screen"
              className="absolute top-0 left-0 w-full h-[90%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
