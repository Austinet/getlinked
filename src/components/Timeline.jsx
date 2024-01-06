// import no_1 from "../../assets/images/home/no_1.png";
// import no_2 from "../../assets/images/home/no_2.png";
// import no_3 from "../../assets/images/home/no_3.png";
// import no_4 from "../../assets/images/home/no_4.png";
// import no_5 from "../../assets/images/home/no_5.png";
// import no_6 from "../../assets/images/home/no_6.png";
// import line_1 from "../../assets/images/home/line_1.png";
// import line_2 from "../../assets/images/home/line_2.png";

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="bg-darkPurple text-white border-b-[0.0625rem] border-b-grey"
    >
      {/* Timeline container  */}
      <div className="pl-[2.86rem] pr-[2.56rem] py-[5rem]">
        {/* Timeline header */}
        <div className="text-center mb-[3.5rem] md:mb-[5.69rem]">
          <h2 className="text-[1.25rem] md:text-[2rem] font-bold leading-[133%] mb-[1rem] md:mb-[0.75rem]">
            Timeline
          </h2>
          <p className="max-w-[21.625rem] mx-auto text-[0.875rem] leading-[172.4%]">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        {/* Timeline details container */}
        <div className="flex flex-col gap-[1.69rem]">
          <div className="lg:flex items-center justify-between">
            <div className="timeline-left">
              <h3 className="text-secondary text-[0.75rem] md:text-[1.5rem] font-bold leading-normal">
                Hackathon Announcement
              </h3>
              <p className="timeline-details">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="timeline-images">
              {/* <div>
              <img src={line_1} alt="Line 1" />
            </div>
            <img src={no_1} alt="Number 1" /> */}
            </div>
            <div className="timeline-right">
              <h3 className="text-secondary text-[0.75rem] md:text-[1.5rem] font-bold leading-normal">
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="lg:flex flex-row-reverse items-center justify-between">
            <div className="timeline-right">
              <h3 className="text-secondary text-[0.75rem] md:text-[1.5rem] font-bold leading-normal">
                Teams Registration begins
              </h3>
              <p className="timeline-details">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
            <div className="timeline-images">
              {/* <div>
              <img src={line_1} alt="Line 1" />
            </div>
            <img src={no_1} alt="Number 1" /> */}
            </div>
            <div className="timeline-left">
              <h3 className="text-secondary text-[0.75rem] md:text-[1.5rem] font-bold leading-normal lg:text-right">
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="lg:flex items-center justify-between">
            <div className="timeline-left">
              <h3 className="text-secondary text-[0.75rem] md:text-[1.5rem] font-bold leading-normal">
                Teams Registration ends
              </h3>
              <p className="timeline-details">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="timeline-images">
              {/* <div>
              <img src={line_1} alt="Line 1" />
            </div>
            <img src={no_1} alt="Number 1" /> */}
            </div>
            <div className="timeline-right">
              <h3 className="text-secondary text-[0.75rem] md:text-[1.5rem] font-bold leading-normal">
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="lg:flex flex-row-reverse items-center justify-between">
            <div className="timeline-right">
              <h3 className="text-secondary text-[0.75rem] md:text-[1.5rem] font-bold leading-normal">
                Announcement of the accepted teams and ideas
              </h3>
              <p className="timeline-details">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
            <div className="timeline-images">
              {/* <div>
              <img src={line_1} alt="Line 1" />
            </div>
            <img src={no_1} alt="Number 1" /> */}
            </div>
            <div className="timeline-left">
              <h3 className="text-secondary text-[0.75rem] md:text-[1.5rem] font-bold leading-normal">
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="lg:flex items-center justify-between">
            <div className="timeline-left">
              <h3 className="text-secondary text-[0.75rem] md:text-[1.5rem] font-bold leading-normal">
                Getlinked Hackathon 1.0 Offically Begins
              </h3>
              <p className="timeline-details">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="timeline-images">
              {/* <div>
              <img src={line_1} alt="Line 1" />
            </div>
            <img src={no_1} alt="Number 1" /> */}
            </div>
            <div className="timeline-right">
              <h3 className="text-secondary text-[0.75rem] md:text-[1.5rem] font-bold leading-normal">
                November 18, 2023
              </h3>
            </div>
          </div>
          <div className="lg:flex flex-row-reverse items-center justify-between">
            <div className="timeline-right">
              <h3 className="text-secondary text-[0.75rem] md:text-[1.5rem] font-bold leading-normal">
                Demo Day
              </h3>
              <p className="timeline-details">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
            <div className="timeline-images">
              {/* <div>
              <img src={line_1} alt="Line 1" />
            </div>
            <img src={no_1} alt="Number 1" /> */}
            </div>
            <div className="timeline-left">
              <h3 className="text-secondary text-[0.75rem] md:text-[1.5rem] font-bold leading-normal">
                November 18, 2023
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
