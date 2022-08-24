import { useContext } from "react";
import { styleContext } from "../App";

const Nav = () => {
  const style = useContext(styleContext);
  console.log(style);
  return (
    <nav>
      <ul>
        <li style={{ color: style.color }}>Frutiger</li>
      </ul>
    </nav>
  );
};

export default Nav;
