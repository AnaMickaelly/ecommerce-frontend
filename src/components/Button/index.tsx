import { ButtonProps } from "./types";
import "./styles.scss";

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="button-container">
      {children}
    </button>
  );
};
