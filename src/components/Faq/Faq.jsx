import { useState } from "react";
import faq from "../../assets/images/home/faq.png";
import { questions } from "../../utils/content";
import PropTypes from "prop-types";
import "./faq.css";

const Faq = () => {
  return (
    <section id="faq">
      <div className="faq-container w-80">
        <div className="faq-details">
          <div className="faq-header">
            <h2>
              Frequently Asked <br />
              <span>Questions</span>
            </h2>
            <p>
              We got answers to the questions that you might want to ask about{" "}
              <span>getlinked Hackathon 1.0</span>
            </p>
          </div>

          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </div>
        <div className="faq-image">
          <img src={faq} alt="A man with questions" />
        </div>
      </div>
    </section>
  );
};

const Question = ({ question, answer }) => {
    const [display, setDisplay] = useState(false)
  return (
    <div className="question">
      <h3>
        <span>{question}</span> <span onClick={() => setDisplay(!display)}>+</span>
      </h3>
      {
        display && <p>{answer}</p>
      }
      
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default Faq;
