import "./styles/About.css";
import { config } from "../config";
import { normalizeText } from "./utils/textNormalize";
import { useEffect, useRef } from "react";
import { TextSplitter } from "../utils/textSplitter";

const About = () => {
  const paraRef = useRef<HTMLParagraphElement>(null);

 useEffect(() => {
  if (window.innerWidth < 1025) { // split only on tablet/mobile
    const paraElement = document.querySelector(".para");
    if (paraElement) new TextSplitter(paraElement, { type: "words" });
  }
}, []);


  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <p className="para" ref={paraRef}  style={{ fontFamily: '"Arial"' }}>
          {normalizeText(config.about.description)}

        </p>
      </div>
    </div>
  );
};

export default About;


