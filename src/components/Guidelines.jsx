import ladySitting from "../assets/images/home/woman-sitting.svg"

const Guidelines = () => {
  return (
    <section id="guidelines" className="bg-darkPurple text-white border-b-[0.0625rem] border-b-grey">
   {/* Guidelines container */}
    <div className="flex flex-col-reverse lg:flex-row gap-[0.62rem] md:gap-[3.56rem] lg:justify-between md:items-center px-[2.81rem] pb-[2.88rem] max-w-[75rem] mx-auto">
    {/* Guidelines details */}
      <div className="text-center lg:text-left max-w-[33.4375rem] lg:w-1/2 xl:w-auto">
        <h2 className="text-[1.25rem] md:text-[2rem] font-bold leading-[133%] mb-[0.56rem] md:mb-[1rem]">
          Rules and <br />
          <span className="text-secondary">Guidelines</span>
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
      <div className="guidelines-image">
        <img src={ladySitting} alt="A lady sitting and writing" />
      </div>
    </div>
  </section>
  )
}

export default Guidelines