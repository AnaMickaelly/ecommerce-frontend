import "./styles.scss";
import { CategoryProductsProps } from "./types";

export const Banner = ({
  title,
  description,
  height,
}: CategoryProductsProps) => {
  return (
    <div style={{ maxHeight: `${height}px` }} className="card">
      {title ?? <h2>{title}</h2>}
      <p>{description}</p>
    </div>
  );
};
