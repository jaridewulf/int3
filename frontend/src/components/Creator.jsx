import { useContext } from "react";
import { themeContext } from "../App";
import indicator_side from "../images/indicator_side.svg";
import style from "../styles/Creator.module.css";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../constant";

const Creator = () => {
  const theme = useContext(themeContext);

  const { loading, error, data } = useFetch("creators");

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return data.data.map((content) => {
    return (
      <div className={style.card} key={content.id}>
        <img
          src={API_URL + content.attributes.image.data.attributes.url}
          alt={`${content.attributes.name}`}
          className={style.img}
        />
        <div className={style.data}>
          <p className={style.name} style={{ color: theme.accentColor }}>
            {content.attributes.name}
          </p>
          <p className={style.job}>{content.job}</p>
          <p className={style.company}>{content.attributes.company}</p>
          <p className={style.age}>
            {content.attributes.birthyear}{" "}
            {content.attributes.yearofdeath ? (
              <span>
                <span style={{ color: theme.accentColor }}>-</span>{" "}
                {content.attributes.yearofdeath}
              </span>
            ) : null}
          </p>
        </div>
        <div className={style.rightside}>
          <img
            className={style.nationality}
            src={API_URL + content.attributes.nationality.data.attributes.url}
            alt={`${content.attributes.name}'s place of birth'`}
          />
          <img
            className={style.illustration}
            src={indicator_side}
            alt="filler illustration"
          />
        </div>
      </div>
    );
  });
};

export default Creator;
