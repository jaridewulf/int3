import { useContext } from "react";
import { themeContext } from "../App";
import indicator_side from "../images/indicator_side.svg";
import style from "../styles/Creator.module.css";

const Creator = ({
  name,
  job,
  company,
  img,
  nationality,
  birthyear,
  dayOfDeath,
}) => {
  const theme = useContext(themeContext);
  return (
    <div className={style.card}>
      <img src={img} alt={`${name}`} />
      <div className={style.data}>
        <p className={style.name} style={{ color: theme.accentColor }}>
          {name}
        </p>
        <p className={style.job}>{job}</p>
        <p className={style.company}>{company}</p>
        <p className={style.age}>
          {birthyear}{" "}
          {dayOfDeath ? (
            <span>
              <span style={{ color: theme.accentColor }}>-</span> {dayOfDeath}
            </span>
          ) : null}
        </p>
      </div>
      <div className={style.rightside}>
        <img
          className={style.nationality}
          src={nationality}
          alt={`${name}'s place of birth'`}
        />
        <img
          className={style.illustration}
          src={indicator_side}
          alt="filler illustration"
        />
      </div>
    </div>
  );
};

export default Creator;
