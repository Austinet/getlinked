import { Link } from "react-router-dom";
import curve from "../assets/images/home/curve.svg";
import virtualR from "../assets/images/home/virtualR.svg";
import virtualMan from "../assets/images/home/virtual-screen.png";

const Hero = () => {
  return (
    <section
      id="banner"
      className="bg-darkPurple text-white pt-[2rem] border-b-[0.0625rem] border-b-grey md:min-h-[50.81rem]"
    >
      <div className="banner-wrapper">
        {/* Banner header */}
        <div className="text-center md:text-right mb-[3.62rem] md:mb-[2.5rem] md:mr-[3.44rem] flex flex-col items-end w-fit mx-auto">
          <h2 className="italic font-bold md:text-[2.25rem]">
            Igniting a Revolution in HR innovation
          </h2>
          <img
            src={curve}
            alt="curve"
            className="md:ml-auto w-[7.1875rem] md:w-auto"
          />
        </div>
        {/* Banner container */}
        <div className="flex flex-col md:flex-row gap-[1.64rem]">
          {/* Banner details */}
          <div className="text-center md:text-left px-[3.56rem]">
            <h1 className="font-bold text-[2rem] md:text-[5rem] leading-normal mb-[0.56rem]">
              getlinked Tech <br />
              Hackathon <span className="text-secondary">1.0</span>
            </h1>
            <p className="text-[0.8125rem] md:text-[1.25rem] leading-[166%] mb-[1.5rem] max-w-[32.625rem]">
              Participate in getlined tech Hacathon 2023 stand a chance to win a
              Big prize
            </p>
            <Link
              to="/register"
              className="btn-gradient w-[9.5rem] h-[2.92731rem] md:w-[10.75rem] md:h-[3.3125rem] mx-auto md:mx-0"
            >
              Register
            </Link>

            {/* Countdown */}
            <div>
              <ul className="flex justify-center md:justify-start gap-[0.88rem] mt-[0.89rem] md:mt-[4.81rem]">
                <li>
                  <span className="text-[3rem] leading-[133%]">00</span>
                  <span className="text-[0.875rem] leading-[133%]">H</span>
                </li>
                <li>
                  <span className="text-[3rem] leading-[133%]">00</span>
                  <span className="text-[0.875rem] leading-[133%]">M</span>
                </li>
                <li>
                  <span className="text-[3rem] leading-[133%]">00</span>
                  <span className="text-[0.875rem] leading-[133%]">S</span>
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
