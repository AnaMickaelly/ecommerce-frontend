import { ButtonProps } from "./types";
import "./styles.scss";

export const Button = ({
  children,
  onClick,
  uppercase,
  width,
  opacity,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${uppercase ? "uppercase" : ""} ${
        opacity ? "opacity" : ""
      }`}
      style={{ maxWidth: `${width}px` }}
    >
      {children}
    </button>
  );
};
