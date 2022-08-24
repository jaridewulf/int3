import style from "../styles/IterationCard.module.css";
import { useContext } from "react";
import { themeContext } from "../App";

const IterationCard = ({ text, number, name, date }) => {
  const theme = useContext(themeContext);

  return (
    <div className={style.card}>
      <div className={style.info}>
        <h3 className={style.subtitle}>{number}</h3>
        <p className={style.name}>{name}</p>
        <p className={style.name}>{date}</p>
      </div>
      <div
        className={style.preview}
        style={{
          backgroundColor: theme.accentColor,
          color: theme.bgColor,
        }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default IterationCard;
