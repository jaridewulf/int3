import { useContext } from "react";
import { themeContext } from "../App";
import style from "../styles/Section.module.css";
import indicator_side from "../images/indicator_side.svg";

const Section = ({ title, value, sides, last }) => {
  const theme = useContext(themeContext);
  return (
    <section className={style.section} key={value}>
      <div className={style.section__left}>
        <h2
          className={style.section__title}
          style={{ color: theme.accentColor }}
        >
          {title}
        </h2>
        <h3 className={style.section__subtitle}>{value}.0</h3>
        {!last ? (
          <img
            src={indicator_side}
            alt="Indicator"
            className={style.section__indicator}
          />
        ) : null}
      </div>
      <div className={style.section__side}>
        {sides.map((side) => {
          return side;
        })}
      </div>
    </section>
  );
};

export default Section;
