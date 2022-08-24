import style from "../styles/Article.module.css";
import { useContext } from "react";
import { themeContext } from "../App";

const Article = ({ content, title, number }) => {
  const theme = useContext(themeContext);
  return (
    <article className={style.article} key={number}>
      <h3 className={style.article__title}>
        <span style={{ color: theme.accentColor }}>{number}</span> {title}
      </h3>
      {content}
    </article>
  );
};

export default Article;
