import { Link } from "react-router-dom";
import { criteria } from "../utils/content";
import judges from "../assets/images/home/judges.svg";

const Criteria = () => {
  return (
    <section
      id="criteria"
      className="bg-darkPurple text-white border-b-[0.0625rem] border-b-grey"
    >
      {/* Criteria container */}
      <div className="flex flex-col lg:flex-row gap-[0.62rem] lg:gap-[3.56rem] lg:justify-between items-center pt-[4.62rem] pl-[2.69rem] pr-[1.81rem] pb-[3.67rem] lg:pt-[4.9rem] lg:pb-[6.67rem] max-w-[87rem] mx-auto">
        {/* Criteria image */}
        <div className="">
          <img src={judges} alt="Judges" />
        </div>
        {/* Criteria details */}
        <div className="text-center lg:text-left max-w-[35.25rem] lg:w-1/2 xl:w-auto">
          <h2 className="text-[1.25rem] md:text-[2rem] font-bold leading-[133%] mb-[1rem] md:mb-[1.31rem]">
            Judging Criteria <br />
            <span className="text-secondary">Key attributes</span>
          </h2>
          <CriteriaItems />
          <Link className="btn-gradient w-[6.02188rem] h-[1.95913rem] md:w-[10.75rem] md:h-[3.3125rem] mx-auto lg:mx-0 mt-[1.5rem] md:mt-[3rem]">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

const CriteriaItems = () => {
  return (
    <div className="flex flex-col gap-[1.25rem] md:gap-[1.44rem]">
      {criteria.map((item) => (
        <div className="criteria-item" key={item.name}>
          <p className="leading-[173.5%]">
            <span className="text-[#FF26B9] font-bold text-[0.8125rem] md:text-[1rem]">{item.name}:</span>
            <span className="text-[0.75rem] md:text-[0.875rem]">{item.details}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Criteria;
