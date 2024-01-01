import logo from "../assets/images/home/getlinked.svg";
import hamburger from "../assets/images/home/hamburger.svg";
import cancel from "../assets/images/home/cancel.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  {
    id: 1,
    title: "Timeline",
    href: "#Timeline",
  },
  {
    id: 2,
    title: "Overview",
    href: "#Overview",
  },
  {
    id: 3,
    title: "FAQs",
    href: "#FAQs",
  },
  {
    id: 4,
    title: "Contact",
    href: "#Contact",
  },
];

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header className="bg-primary px-[2rem] xl:px-[8rem] border-b-[0.0625rem] border-b-grey">
      <nav className="pt-[2.12rem] pb-[1.56rem] lg:pt-[3.94rem] lg:pb-[1.56rem]">
        <div className="flex items-center justify-between">
          {/* Logo container */}
          <div>
            <Link to={"/"}>
              <img
                src={logo}
                alt="Getlinked logo"
                className="w-[130px] md:w-auto"
              />
            </Link>
          </div>

          {/* Nav links */}
          <div
            className={`absolute left-0 z-30 w-screen lg:w-fit lg:static transition-all duration-300 ease-in-out bg-[#150E28] lg:bg-transparent px-[2rem] pb-[4rem] pt-[1.5rem] lg:p-0 rounded-b-[0.5rem] lg:rounded-b-0 ${
              toggleNav ? "top-[5rem]" : "top-[-50rem]"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center gap-[1.3rem] lg:gap-[3.5rem]">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="text-white hover:text-secondary text-[1.125rem] font-medium lg:text-base lg:font-normal leading-normal"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={"/register"}
                  className="w-[10.75rem] h-[3.3125rem] rounded-[0.25rem] pink-bg text-white flex items-center justify-center xl:ml-[7.31rem]"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger buttons for mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setToggleNav(!toggleNav)}
              className="outline-none"
            >
              {toggleNav ? (
                <img
                  src={cancel}
                  alt="Close Menu"
                  className="gradient-line rounded-full p-1"
                />
              ) : (
                <img src={hamburger} alt="Open Menu" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
