import style from "../styles/UseCase.module.css";

const Brand = ({ image, name }) => {
  return (
    <div className={style.brand}>
      <img src={image} alt={`logo ${name}`} className={style.brand__image} />
    </div>
  );
};

export default Brand;
