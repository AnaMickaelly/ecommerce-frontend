import number from "../../assets/images/number.png";
import "./styles.scss";

export const Cards = () => {
  return (
    <div className="card-conteiner">
      <img src={number} alt="" />
      <div className="content">
        <h3>Creative Adidas T-shirts</h3>
        <p>R$ 150.55</p>
      </div>
    </div>
  );
};
