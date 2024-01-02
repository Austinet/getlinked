import { Link } from "react-router-dom";
import { criteria } from "../utils/content";

const Criteria = () => {
  return (
    <section id="criteria">
        <div className="criteria-container w-80">
            <div className="criteria-image">
                {/* <img src={judges} alt="Judges" /> */}
            </div>
            <div className="criteria-details">
                <h2>
                    Judging Criteria <br />
                    <span>Key attributes</span>
                </h2>
                <CriteriaItem />
                <Link className="btn-gradient">Read More</Link>
            </div>
        </div>

    </section>

  );
};

const CriteriaItem = () => {
  return (
    criteria.map(item => (
        <div className="criteria-item" key={item.name}>
            <p>
                <span>{item.name}:</span>
                {item.details}
            </p>
        </div>
    ))
  );
};

export default Criteria;
