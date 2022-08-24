import { useContext } from "react";
import { themeContext } from "../App";
import style from "../styles/Section.module.css";
import indicator_side from "../images/indicator_side.svg";

const Section = ({ title, value, side }) => {
  const theme = useContext(themeContext);
  return (
    <section className={style.section}>
      <div className={style.section__left}>
        <h2
          className={style.section__title}
          style={{ color: theme.accentColor }}
        >
          {title}
        </h2>
        <h3 className={style.section__subtitle}>{value}.0</h3>
        <img
          src={indicator_side}
          alt="Indicator"
          className={style.section__indicator}
        />
      </div>
      <div className={style.section__side}>{side}</div>
    </section>
  );
};

export default Section;
