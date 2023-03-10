import "./styles.scss";
import { CategoryProductsProps } from "./types";

export const CategoryProducts = ({ title }: CategoryProductsProps) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Home - Blusas e Camisas - Blusas</p>
    </div>
  );
};
