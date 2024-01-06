import { useState } from "react";
import { questions } from "../utils/content";
import PropTypes from "prop-types";
import questionImg from "../assets/images/home/questions.svg";

const Faqs = () => {
  return (
    <section id="faq" className="bg-primary text-white border-b-[0.0625rem] border-b-grey">
      <div className="pl-[2.99rem] pr-[2.88rem] pt-[3.75rem] pb-[3.06rem] xl:pl-[13.69rem] xl:pr-[6.31rem] lg:pt-[3.75rem] lg:pb-[3.94rem]">
        <div className="flex flex-col lg:flex-row gap-[5.38rem] md:gap-[1.5rem] items-center">
          {/* Questions container */}
          <div className="max-w-[26.6875rem] w-full">
            {/* Faq header */}
            <div className="text-center lg:text-left mb-[2.86rem] md:mb-[4.25rem]">
              <h2 className="text-[1.25rem] md:text-[2rem] font-bold leading-[133%] mb-[0.38rem] md:mb-[1rem]">
                Frequently Asked <br />
                <span className="text-secondary">Questions</span>
              </h2>
              <p className="text-[0.75rem] leading-[229.167%] md:text-[0.875rem] md:leading-[196.429%]">
                We got answers to the questions that you might want to ask about{" "}
                <span className="font-bold">getlinked Hackathon 1.0</span>
              </p>
            </div>

            <div>
              <ul className="flex flex-col gap-[1.5rem]">
                {questions.map((question) => (
                  <Question key={question.id} {...question} />
                ))}
              </ul>
            </div>
          </div>

          {/* Faq image */}
          <div>
            <img src={questionImg} alt="Questions" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Question = ({ question, answer }) => {
  const [display, setDisplay] = useState(false);
  return (
    <li className="border-b border-b-secondary pb-[0.5rem]">
      <h3 className="flex items-center justify-between gap-[1.04rem] lg:gap-[1.5rem]">
        <span className="text-[0.875rem] leading-[196.429%]">{question}</span>
        <button
          onClick={() => setDisplay(!display)}
          className={`text-[1.5rem] text-secondary outline-none transition-all duration-300 ${
            display ? "rotate-[135deg]" : "rotate-0"
          }`}
        >
          +
        </button>
      </h3>
      {display && <p className="text-[0.875rem]">{answer}</p>}
    </li>
  );
};

Question.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default Faqs;
