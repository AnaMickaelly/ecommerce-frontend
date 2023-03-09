import "./styles.scss";
import bag from "../../assets/icons/bag.png";
import telephone from "../../assets/icons/telephone.png";

export const Header = () => {
  return (
    <div className="container-header">
      <div>
        <div className="container-infos">
          <h2 className="title-header">Aviato</h2>
          <div className="infos-store">
            <div className="infos-store-item">
              <img src={telephone} alt="Telefone para contato" />
              <p>11 4191 4399</p>
            </div>
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
        <li>Home</li>
        <li>Camisas</li>
        <li>Blusas</li>
        <li>Calças</li>
        <li>Acessórios</li>
        <li>Outlet</li>
      </ul>
    </div>
  );
};
