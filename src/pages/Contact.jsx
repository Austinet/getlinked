import { Link } from "react-router-dom";
import instagram from "../assets/images/home/instagram.svg";
import linkedin from "../assets/images/home/linkedin.svg";
import x from "../assets/images/home/x.svg";
import facebook from "../assets/images/home/facebook.svg";
import back from "../assets/images/contact/left-arrow.svg";
import Header from "../components/Header";

const socials = [
  {
    id: 1,
    icon: instagram,
    href: "/",
  },
  {
    id: 2,
    icon: x,
    href: "/",
  },
  {
    id: 3,
    icon: facebook,
    href: "/",
  },
  {
    id: 4,
    icon: linkedin,
    href: "/",
  },
];

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <section id="contact" className="bg-darkPurple text-white relative">
          <div className="max-w-[69rem] mx-auto px-[3.06rem] xl:px-0 pt-[3.51rem] lg:pt-[8.75rem] pb-[2.28rem] md:pb-[7.19rem]">
            {/* Back arrow for mobile */}
            <Link to={"/"} className="md:hidden">
              <img src={back} alt="Back" />
            </Link>
            <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-[2.56rem]">
              <div className="contact-details">
                <div className="hidden md:block">
                  <h2 className="text-secondary text-[2rem]">Get in touch</h2>
                  <p className="my-[1.06rem]">
                    Contact <br />
                    Information
                  </p>
                  {/* <address> */}
                    <p>
                      27, Alara Street <br />
                      Yaba 100012 <br />
                      Lagos State
                    </p>
                  {/* </address> */}
                  <p className="mt-[1.31rem] mb-[1.38rem]">Call us: 07067981819</p>
                  <p>
                    we are open from Monday-Friday <br />
                    08:00am-05:00pm
                  </p>
                </div>

                <div className="text-center md:text-left mt-[2.19rem]">
                  <h3 className="text-secondary text-[0.75rem] leading-normal mb-[0.48rem] md:mb-[0.88rem]">
                    Share on
                  </h3>
                  {/* Socials */}
                  <ul className="flex gap-[1.19rem] items-center">
                    {socials.map((item) => (
                      <li key={item.id}>
                        <Link to={item.href}>
                          <img src={item.icon} alt="" />
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:bg-boxBg md:shadow-bgBox md:rounded-[0.75rem] md:pt-[4.69rem] md:pb-[4.19rem] md:px-[5.62rem] max-w-[38.56rem]">
                <h2 className="text-secondary text-[1.25rem] font-semibold leading-normal mt-[2.56rem] md:mt-0 mb-[1.5rem]">
                  Questions or need assistance? <br />
                  Let us know about it!
                </h2>
                <p className="lg:hidden text-[0.75rem] leading-normal mb-[1.88rem]">
                  Email us below to any question related to our event
                </p>
                <form action="">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-transparent border outline-none rounded-[0.25rem] w-full px-[1.06rem] py-[0.69rem] mb-[1.12rem] md:mb-[1.81rem]"
                  />
                  <input
                    type="email"
                    placeholder="Mail"
                    className="bg-transparent border outline-none rounded-[0.25rem] w-full px-[1.06rem] py-[0.69rem] mb-[1.12rem] md:mb-[1.81rem]"
                  />
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    className="resize-none bg-transparent border outline-none rounded-[0.25rem] w-full h-[10rem] md:h-[7.4375rem] px-[1.06rem] py-[0.69rem] mb-[1.12rem] md:mb-[1.81rem]"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-[10.75rem] h-[3.3125rem] mx-auto  rounded-[0.25rem] pink-bg text-white flex items-center justify-center"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
