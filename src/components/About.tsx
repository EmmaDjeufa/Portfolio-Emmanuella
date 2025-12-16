import "./styles/About.css";
import { config } from "../config";
import { normalizeText } from "./utils/textNormalize";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <p className="para">{normalizeText(config.about.description)}</p>
      </div>
    </div>
  );
};

export default About;

