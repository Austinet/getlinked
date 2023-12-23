import "./timeline.css";
import no_1 from "../../assets/images/home/no_1.png";
import no_2 from "../../assets/images/home/no_2.png";
import no_3 from "../../assets/images/home/no_3.png";
import no_4 from "../../assets/images/home/no_4.png";
import no_5 from "../../assets/images/home/no_5.png";
import no_6 from "../../assets/images/home/no_6.png";
import line_1 from "../../assets/images/home/line_1.png";
import line_2 from "../../assets/images/home/line_2.png";

const Timeline = () => {
  return (
    <section id="timeline">
      <div className="timeline-container w-80">
        <div className="timeline-header">
          <h2>Timeline</h2>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="timeline-details">
          <div className="timeline-left">
            <h3>Hackathon Announcement</h3>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div className="timeline-images">
            <div>
              <img src={line_1} alt="Line 1" />
            </div>
            <img src={no_1} alt="Number 1" />
          </div>
          <div className="timeline-right">
            <h3>November 18, 2023</h3>
          </div>
        </div>
        <div className="timeline-details">
          <div className="timeline-left">
          <h3>November 18, 2023</h3>
          
          </div>
          <div className="timeline-images">
            <div>
              <img src={line_1} alt="Line 1" />
            </div>
            <img src={no_1} alt="Number 1" />
          </div>
          <div className="timeline-right">
            <h3>November 18, 2023</h3>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
