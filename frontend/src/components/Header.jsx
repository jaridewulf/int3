import header_image from "../images/header_image.svg";
import slanted_yellow from "../images/slanted_yellow.svg";
import indicator from "../images/indicator.svg";
import style from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__top}>
        <img
          src={header_image}
          alt="Font displayed"
          className={style.header__top__image}
        />
        <div className={style.header__top__side}>
          <h1 className={style.header__top__side__title}>Frutiger</h1>
          <div className={style.header__top__side__container}>
            <h2 className={style.header__top__side__info}>presented by</h2>
            <img
              className={style.header__top__side__slanted}
              src={slanted_yellow}
              alt="Slanted Logo"
            />
          </div>
        </div>
      </div>
      <img
        src={indicator}
        alt="Indicator"
        className={style.header__indicator}
      />
    </header>
  );
};

export default Header;
