import first from "../assets/images/home/first-position.svg";
import second from "../assets/images/home/second-position.svg";
import third from "../assets/images/home/third-position.svg";
import trophy from "../assets/images/home/trophy.svg";

const Prizes = () => {
  return (
    <section
      id="prizes"
      className="bg-darkPurple text-white"
    >
      <div className="px-[4rem] py-[4.5rem] max-w-[75rem] mx-auto lg:pt-[8.78rem]">
        {/* Prizes header */}
        <div className="text-center mb-[2.5rem] md:mb-[5.26rem] lg:text-left max-w-[25.0625rem] mx-auto lg:ml-auto lg:mr-[6rem]">
          <h2 className="text-[1.25rem] md:text-[2rem] font-bold leading-[133%] mb-[0.19rem] md:mb-[0.8rem]">
            Prizes and <br />
            <span className="text-secondary">Rewards</span>
          </h2>
          <p className="text-[0.75rem] leading-[170.9%] md:text-base">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>

        {/* Prizes main */}
        <div className="flex flex-col items-center gap-[3.19rem] lg:gap-[2.31rem] lg:flex-row">
          <div>
            <img src={trophy} alt="Trophy" />
          </div>
          <div className="flex items-center">
            <div className="">
            <img src={second} alt="Second position"/>

            </div>
            <div className="">
            <img src={first} alt="First position"/>

            </div>
            <div className="">
            <img src={third} alt="Third position" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
