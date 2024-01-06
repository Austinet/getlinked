import idea from "../assets/images/home/idea.svg"

const About = () => {
  return (
    <section id="about" className="bg-primary text-white border-b-[0.0625rem] border-b-grey">
   {/* About container */}
    <div  className="flex flex-col lg:flex-row gap-[3.62rem] lg:justify-between md:items-center pt-[1.81rem] pb-[4.88rem] px-[2rem] md:pt-[3.88rem] max-w-[75rem] mx-auto">
    {/* About image */}
      <div className="px-[2.44rem] md:px-0">
        <img src={idea} alt="Light bulb" />
      </div>
      {/* About details  */}
      <div className="pl-[0.55rem] pr-[0.12rem] text-center lg:text-left max-w-[33.4375rem] lg:w-1/2 xl:w-auto">
        <h2 className="text-[1.25rem] md:text-[2rem] font-bold leading-[133%] mb-[0.56rem] md:mb-[1rem]">
          Introduction to getlinked <br />
          <span className="text-secondary">tech Hackathon 1.0</span>
        </h2>
        <p className="text-[0.8125rem] leading-[211.538%] md:text-[0.875rem] md:leading-[196.429%]">
          Our tech Hackathon is a melting pot of visionaries, and its purpose is as
          clear as day: to shape the future. Whether you&apos;re a coding genius, a 
          desgn maverck, or a concept wizard, you&apos;ll have the chance to transform
          your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world,
          that&apos;s what we&apos;re all about!
        </p>
      </div>
    </div>
  </section>
  )
}

export default About