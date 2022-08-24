import style from "../styles/Weights.module.css";
import { useContext, useState } from "react";
import { themeContext } from "../App";

const Weights = () => {
  const theme = useContext(themeContext);

  const [weight, setWeight] = useState("regular");

  return (
    <div>
      <p
        className={style.preview}
        style={{ color: theme.accentColor, fontWeight: weight }}
      >
        Ag
      </p>
      <div className={style.buttons}>
        <span onClick={() => setWeight(100)}>
          <input
            type="radio"
            value="light"
            name="weight"
            className={style.button}
            id="light"
          />
          <label className={style.label} for="light">
            light
          </label>
        </span>
        <span onClick={() => setWeight(400)}>
          <input
            type="radio"
            value="regular"
            name="weight"
            className={style.button}
            id="regular"
          />
          <label className={style.label} for="regular">
            regular
          </label>
        </span>
        <span onClick={() => setWeight(800)}>
          <input
            type="radio"
            value="bold"
            name="weight"
            className={style.button}
            id="bold"
          />
          <label className={style.label} for="bold">
            bold
          </label>
        </span>
      </div>
    </div>
  );
};

export default Weights;
