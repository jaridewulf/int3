import indicator_side from "../images/indicator_side.svg";
import style from "../styles/UseCase.module.css";
import { useContext } from "react";
import { themeContext } from "../App";

const UsesCases = ({ number }) => {
  const theme = useContext(themeContext);

  return (
    <div>
      <div className={style.section}>
        <h3 className={style.subtitle}>{number}.1</h3>
        <div className={style.grouped}>
          <h4 style={{ color: theme.accentColor }} className={style.title}>
            Airports
          </h4>
          <img
            src={indicator_side}
            alt="filler"
            className={style.illustration}
          />
        </div>
        <p>
          Originally designed for clear visibility on airport signs, Charles De
          Gaulle International Airport was the airport to commission this font.
        </p>
      </div>
      <div className={style.section}>
        <h3 className={style.subtitle}>{number}.2</h3>
        <div className={style.grouped}>
          <h4 style={{ color: theme.accentColor }} className={style.title}>
            Government
          </h4>
          <img
            src={indicator_side}
            alt="filler"
            className={style.illustration}
          />
        </div>
        <p>
          Because of the clear visibilty Frutiger is often used by government
          agencies. It’s been used on Swiss passports and by the British Royal
          Navy, the Finnish Defence Force and even on road signs in Switzerland.
        </p>
      </div>
    </div>
  );
};

export default UsesCases;
