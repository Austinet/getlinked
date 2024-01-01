import { useState } from "react";
import { questions } from "../utils/content";
import PropTypes from "prop-types";

const Faqs = () => {
  return (
    <section className="bg-primary text-white">
      <div>
        {/* Faq header */}
        <div className="">
          <h2>
            Frequently Asked <br />
            <span>Questions</span>
          </h2>
          <p>
            We got answers to the questions that you might want to ask about{" "}
            <span>getlinked Hackathon 1.0</span>
          </p>
        </div>

        {/* Questions container */}
        <div className="max-w-[450px]">
          <ul className="flex flex-col gap-[1.5rem] pb-[4rem]">
            {questions.map((question) => (
              <Question key={question.id} {...question} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Question = ({ question, answer }) => {
  const [display, setDisplay] = useState(false);
  return (
    <li>
      <h3 className="flex items-center justify-between">
        <span>{question}</span>
        <button
          onClick={() => setDisplay(!display)}
          className={`text-[1.5rem] text-secondary outline-none transition-all duration-300 ${
            display ? "rotate-[135deg]" : "rotate-0"
          }`}
        >
          +
        </button>
      </h3>
      {display && <p>{answer}</p>}
    </li>
  );
};

Question.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default Faqs;
