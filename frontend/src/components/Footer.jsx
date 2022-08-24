import { useContext } from "react";
import { themeContext } from "../App";
import style from "../styles/Footer.module.css";
import slanted_black from "../images/slanted_black.svg";

const Footer = () => {
  const theme = useContext(themeContext);

  return (
    <footer
      className={style.footer}
      style={{
        backgroundColor: theme.accentColor,
        color: theme.bgColor,
      }}
    >
      <p>A devine project</p>
      <div className={style.footer__group}>
        <p>fictional for</p>{" "}
        <img
          className={style.footer__slanted}
          src={slanted_black}
          alt="Slanted Logo"
        />
      </div>
      <p>by Jari De Wulf</p>
    </footer>
  );
};

export default Footer;
