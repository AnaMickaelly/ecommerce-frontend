import "./styles.scss";
import bag from "../../assets/icons/bag.png";
import telephone from "../../assets/icons/telephone.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const navigateToCategory = (type: string) => {
    navigate(`/category/${type}`);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const menu = {
    home: "Home",
    shirt: "Camisas",
    blouse: "Blusas",
    pants: "Calças",
    accessories: "Acessórios",
    outlet: "Outlet",
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
            <h2 onClick={navigateToHome} className="title-header">
              Aviato
            </h2>
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
        <li onClick={() => navigateToHome()}>{menu.home}</li>
        <li onClick={() => navigateToCategory(menu.shirt)}>{menu.shirt}</li>
        <li onClick={() => navigateToCategory(menu.blouse)}>{menu.blouse}</li>
        <li onClick={() => navigateToCategory(menu.pants)}>{menu.pants}</li>
        <li onClick={() => navigateToCategory(menu.accessories)}>
          {menu.accessories}
        </li>
        <li
          onClick={() => navigateToCategory(menu.outlet)}
          className="red-text"
        >
          {menu.outlet}
        </li>
      </ul>
    </header>
  );
};
