import { ButtonProps } from "./types";
import "./styles.scss";

export const Button = ({
  children,
  onClick,
  uppercase,
  width,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${uppercase ? "uppercase" : ""}`}
      style={{ maxWidth: `${width}px` }}
    >
      {children}
    </button>
  );
};
