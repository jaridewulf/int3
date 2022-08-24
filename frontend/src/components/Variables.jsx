import { useState, useContext } from "react";
import { themeContext } from "../App";
import style from "../styles/Variables.module.css";

const Variables = () => {
  const [lineheight, setLineheight] = useState(25);
  const [letterSpacing, setLetterSpacing] = useState(2);
  const [variant, setVariant] = useState("normal");

  const theme = useContext(themeContext);
  return (
    <div>
      <p
        style={{
          lineHeight: `${lineheight}px`,
          letterSpacing: `${letterSpacing}px`,
          fontStyle: variant,
        }}
        className={style.preview}
      >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.”
      </p>
      <div className={style.selectors}>
        <div className={style.selector}>
          <p className={style.subtitle} style={{ color: theme.accentColor }}>
            line height
          </p>
          <p className={style.sub__subtitle}>
            {lineheight}
            <span className={style.sub__sub__subtitle}>px</span>
          </p>
          <input
            type="range"
            min="22"
            max="60"
            value={lineheight}
            onChange={(e) => setLineheight(e.target.value)}
            className={style.slider}
          />
        </div>
        <div className={style.selector}>
          <p className={style.subtitle} style={{ color: theme.accentColor }}>
            letter spacing
          </p>
          <p className={style.sub__subtitle}>
            {letterSpacing}
            <span className={style.sub__sub__subtitle}>px</span>
          </p>
          <input
            type="range"
            min="0"
            max="15"
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(e.target.value)}
            className={style.slider}
          />
        </div>

        <div className={style.buttons}>
          <span onClick={() => setVariant("italic")}>
            <input
              type="radio"
              value="italic"
              name="variant"
              className={style.button}
              id="italic"
            />
            <label className={style.label} for="italic">
              italic
            </label>
          </span>

          <span onClick={() => setVariant("normal")}>
            <input
              type="radio"
              value="normal"
              name="variant"
              className={style.button}
              id="normal"
            />
            <label className={style.label} for="normal">
              normal
            </label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Variables;
