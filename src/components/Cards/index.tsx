import "./styles.scss";
import { CardProps } from "./types";

export const Cards = ({ image, name, price }: CardProps) => {
  return (
    <div className="card-conteiner">
      <img src={image} alt="" />
      <div className="content">
        <h3>{name}</h3>
        <p>
          {price?.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </div>
  );
};
