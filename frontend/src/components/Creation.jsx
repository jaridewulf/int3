import CreationCard from "./CreationCard";
import style from "../styles/Creation.module.css";
import { API_URL } from "../constant";

import useFetch from "../hooks/useFetch";

const Creation = () => {
  const { loading, error, data } = useFetch("creations");

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  console.log(data);
  return (
    <div className={style.cards}>
      {data.data.map((content) => (
        <CreationCard
          title={content.attributes.title}
          text={content.attributes.content}
          img={API_URL + content.attributes.image.data.attributes.url}
          key={content.attributes.title}
        />
      ))}
    </div>
  );
};

export default Creation;
