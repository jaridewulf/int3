import { useContext } from "react";
import { themeContext } from "../App";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  const theme = useContext(themeContext);
  return (
    <nav className={styles.nav__top}>
      <ul className={styles.nav}>
        <li className={styles.nav__item}>
          <span
            className={styles.nav__item__accent}
            style={{ color: theme.accentColor }}
          >
            1.0
          </span>
          Data
        </li>
        <li className={styles.nav__item}>
          <span
            className={styles.nav__item__accent}
            style={{ color: theme.accentColor }}
          >
            2.0
          </span>
          Variations
        </li>
        <li className={styles.nav__item}>
          <span
            className={styles.nav__item__accent}
            style={{ color: theme.accentColor }}
          >
            3.0
          </span>
          Itterations
        </li>
        <li className={styles.nav__item}>
          <span
            className={styles.nav__item__accent}
            style={{ color: theme.accentColor }}
          >
            4.0
          </span>
          Use cases
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
