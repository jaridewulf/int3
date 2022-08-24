import style from "../styles/UseCase.module.css";

const Brand = ({ image, name }) => {
  return (
    <div className={style.brand}>
      <img src={image} alt={`logo ${name}`} className={style.brand__image} />
      <p className={style.brand__name}>{name}</p>
    </div>
  );
};

export default Brand;
