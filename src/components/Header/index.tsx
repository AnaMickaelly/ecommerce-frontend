import "./styles.scss";
import bag from "../../assets/icons/bag.png";
import telephone from "../../assets/icons/telephone.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const navigateNotFound = () => {
    navigate("/not-found");
  };

  return (
    <header className="container-header">
      <div>
        <div className="container-infos">
          <div className="infos-store">
            <div className="infos-store-item">
              <img src={telephone} alt="Telefone para contato" />
              <p>11 4191 4399</p>
            </div>
            <h2 className="title-header">Aviato</h2>
            <div className="infos-store-item">
              <img src={bag} alt="Sacola de compras" />
              <p>
                (0) - <strong>R$ 0,00</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul className="menu-itens">
        <li onClick={navigateNotFound}>Home</li>
        <li onClick={navigateNotFound}>Camisas</li>
        <li onClick={navigateNotFound}>Blusas</li>
        <li onClick={navigateNotFound}>Calças</li>
        <li onClick={navigateNotFound}>Acessórios</li>
        <li className="red-text">Outlet</li>
      </ul>
    </header>
  );
};
