import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { CardProps } from "./types";

export const Cards = ({ image, name, price, id }: CardProps) => {
  const navigate = useNavigate();

  return (
    <div className="card-conteiner">
      <img onClick={() => navigate(`/product/${id}`)} src={image} alt="" />
      <div className="content">
        <h3 onClick={() => navigate(`/product/${id}`)}>{name}</h3>
        <p onClick={() => navigate(`/product/${id}`)}>
          {price?.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </div>
  );
};
