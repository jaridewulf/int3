import { useContext } from "react";
import { themeContext } from "../App";
import style from "../styles/CreationCard.module.css";

const CreationCard = ({ title, img, text }) => {
  const theme = useContext(themeContext);

  return (
    <div className={style.card}>
      <img className={style.img} src={img} alt={`${title} illustration`} />
      <h3 className={style.title} style={{ color: theme.accentColor }}>
        {title}
      </h3>
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default CreationCard;
