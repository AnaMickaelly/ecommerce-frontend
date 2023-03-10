import { ButtonProps } from "./types";
import "./styles.scss";

export const Button = ({
  children,
  onClick,
  uppercase,
  width,
  opacity,
  height,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${uppercase ? "uppercase" : ""} ${
        opacity ? "opacity" : ""
      }`}
      style={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}
    >
      {children}
    </button>
  );
};
