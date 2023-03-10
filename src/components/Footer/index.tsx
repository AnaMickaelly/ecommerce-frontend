import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";
import pinterest from "../../assets/icons/pinterest.png";
import tumblr from "../../assets/icons/tumblr.png";
import "./styles.scss";

export const Footer = () => {
  const year = new Date();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li>Contato</li>
            <li>Fretes e entrega</li>
            <li>Como comprar</li>
            <li>Trocas e devoluções</li>
          </ul>
          <ul>
            <li>Sobre</li>
            <li>Na mídia</li>
            <li>Segurança</li>
            <li>Políticas</li>
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
          <li>FAQ</li>
          <li>Minha conta</li>
          <li>Meus pedidos</li>
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
