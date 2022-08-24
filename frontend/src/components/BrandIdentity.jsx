import indicator_side from "../images/indicator_side.svg";
import style from "../styles/UseCase.module.css";
import { useContext } from "react";
import { themeContext } from "../App";
import Brand from "./Brand";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../constant";

const BrandIdentity = ({ number }) => {
  const theme = useContext(themeContext);

  const { loading, error, data } = useFetch("logos");

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return (
    <div>
      <div className={style.section}>
        <h3 className={style.subtitle}>{number}.1</h3>
        <div className={style.grouped}>
          <h4 style={{ color: theme.accentColor }} className={style.title}>
            Logos
          </h4>
          <img
            src={indicator_side}
            alt="filler"
            className={style.illustration}
          />
        </div>
        <p className={style.text}>
          Frutiger is also used in many logos, examples can be found below.
        </p>
        <div
          className={style.brand__container}
          style={{ backgroundColor: theme.accentColor, color: theme.bgColor }}
        >
          {data.data.map((logo) => (
            <Brand
              image={API_URL + logo.attributes.img.data.attributes.url}
              name={logo.attributes.name}
            />
          ))}
        </div>
      </div>
      <div className={style.section}></div>
    </div>
  );
};

export default BrandIdentity;
