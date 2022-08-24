import { useState, useContext } from "react";
import IterationCard from "./IterationCard";
import style from "../styles/Iterations.module.css";
import { themeContext } from "../App";

const Iterations = ({ number }) => {
  const [sampleText, setSampleText] = useState(
    "The quick brown fox jumps over the lazy dog."
  );

  const theme = useContext(themeContext);

  return (
    <div>
      <div className={style.sample}>
        <h2 className={style.title} style={{ color: theme.accentColor }}>
          Sample text
        </h2>
        <input
          className={style.inputText}
          type="text"
          id="sample"
          name="sample"
          placeholder="Feel free to test Frutiger with your own words."
          onChange={(e) => setSampleText(e.target.value)}
        />
      </div>
      <div>
        <IterationCard
          text={sampleText}
          number={`${number}.${1}`}
          name="Frutiger Arabic"
          date={2007}
        />
        <IterationCard
          text={sampleText}
          number={`${number}.${1}`}
          name="Frutiger Arabic"
          date={2007}
        />
      </div>
    </div>
  );
};

export default Iterations;
