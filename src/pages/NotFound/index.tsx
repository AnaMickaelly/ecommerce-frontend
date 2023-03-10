import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import animation from "../../assets/animations/not-found.json";
import { Button } from "../../components/Button";
import "./styles.scss";

export const NotFound = () => {
  const navigate = useNavigate();
  const year = new Date();

  const navigateHome = () => {
    navigate("/");
  };

  const style = {
    height: 800,
  };

  return (
    <div className="not-found-container">
      <h3>Página não encontrada</h3>
      <Lottie style={style} animationData={animation} />
      <Button width={300} onClick={navigateHome}>
        Voltar para home
      </Button>
    </div>
  );
};
