import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";
import pinterest from "../../assets/icons/pinterest.png";
import tumblr from "../../assets/icons/tumblr.png";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const year = new Date();

  const navigateNotFound = () => {
    navigate("/not-found");
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li onClick={navigateNotFound}>Contato</li>
            <li onClick={navigateNotFound}>Fretes e entrega</li>
            <li onClick={navigateNotFound}>Como comprar</li>
            <li onClick={navigateNotFound}>Trocas e devoluções</li>
          </ul>
          <ul>
            <li onClick={navigateNotFound}>Sobre</li>
            <li onClick={navigateNotFound}>Na mídia</li>
            <li onClick={navigateNotFound}>Segurança</li>
            <li onClick={navigateNotFound}>Políticas</li>
          </ul>
        </div>
        <div className="footer-contacts">
          <p>Cadastre-se e receba nossas novidades</p>
          <input type="text" placeholder="Cadastrar" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright @ {year.getFullYear()}</p>
        <ul>
          <li onClick={navigateNotFound}>FAQ</li>
          <li onClick={navigateNotFound}>Minha conta</li>
          <li onClick={navigateNotFound}>Meus pedidos</li>
        </ul>
        <div className="icons-footer">
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
          <img src={tumblr} alt="Tumbler" />
          <img src={pinterest} alt="Pinterest" />
        </div>
      </div>
    </footer>
  );
};
