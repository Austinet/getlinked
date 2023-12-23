import logo from "../assets/images/home/getlinked.svg";
import instagram from "../assets/images/home/instagram.svg";
import linkedin from "../assets/images/home/linkedin.svg";
import x from "../assets/images/home/x.svg";
import facebook from "../assets/images/home/facebook.svg";
import phone from "../assets/images/home/phone.svg";
import location from "../assets/images/home/location.svg";
import { Link } from "react-router-dom";

const usefulLinks = [
    {
      id: 1,
      title: "Overview",
      href: "#Overview",
    },
    {
      id: 2,
      title: "Timeline",
      href: "#Timeline",
     
    },
    {
      id: 3,
      title: "FAQs",
      href: "#FAQs",
    },
    {
      id: 4,
      title: "Register",
      href: "#Register",
    },
  ];

const socials = [
    {
        id: 1,
        icon: instagram,
        href: "/"
    },
    {
        id: 2,
        icon: x,
        href: "/"
    },
    {
        id: 3,
        icon: facebook,
        href: "/"
    },
    {
        id: 4,
        icon: linkedin,
        href: "/"
    },
]

const Footer = () => {
  return (
    <footer className="bg-[#100B20] text-white pt-[3.19rem] pb-[5.19rem] pl-[4.44rem] pr-[4.06rem] xl:px-[8rem]">
      <div>
        <div className="flex gap-[2rem] flex-col md:flex-row md:justify-between">
          <div className="max-w-[420px]">
            <img
              src={logo}
              alt="Getlinked logo"
              className="w-[130px] md:w-auto"
            />
            <p className="mt-[0.75rem] mb-[2.44rem] lg:mb-[3.44rem] text-[0.75rem] lg:text-[0.85rem] leading-[1.293rem]">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <p className="flex gap-[0.7rem] text-[0.75rem] lg:text-[0.85rem]"> 
                <Link className="border-r-2 border-r-secondary pr-[0.7rem]">Terms of Use</Link>
                <Link>Privacy Policy</Link>
            </p>
          </div>
          <div className="min-w-[200px]">
            <h3 className="text-secondary text-[0.875rem] font-semibold leading-[1.5085rem] mb-[0.38rem]">Useful Links</h3>
            <ul className="flex flex-col gap-[0.69rem]">
            {usefulLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="text-white hover:text-secondary text-[0.75rem] font-normal leading-[1.293rem]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-[1rem]">
                <p className="text-secondary text-[0.75rem]">Follow us</p>
                <ul className="flex gap-[1.19rem] items-center">
                {socials.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                  >
                    <img src={item.icon} alt="" />
                    {item.title}
                  </Link>
                </li>
              ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className="min-w-[200px]">
            <h3 className="text-secondary text-[0.875rem] font-semibold leading-[1.5085rem] mb-[0.38rem]">Contact Us</h3>
            <ul className="flex flex-col gap-[1.38rem] text-[0.75rem] font-normal leading-[1.293rem]">
                <li className="flex items-center gap-[1rem]">
                    <img src={phone} alt="Call" />
                    <p>+234 6707653444</p>
                </li>
                <li className="flex items-start gap-[1rem]">
                    <img src={location} alt="Address" />
                    <p>27,Alara Street <br/> Yaba 100012 <br/> Lagos State</p>
                </li>
            </ul>
          </div>
        </div>

        {/* Copyright container */}
        <div>
          <p className="text-center text-[0.75rem] mt-[3.75rem]">
            All rights reserved. © getlinked Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
