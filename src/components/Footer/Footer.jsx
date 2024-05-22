// Footer.js
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footerContainer}>
    <div className={styles.footerContent}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#about">Про нас</a>
          </li>
          <li>
            <a href="#services">Послуги</a>
          </li>
          <li>
            <a href="#pricing">Ціни</a>
          </li>
          <li>
            <a href="#advantages">Переваги</a>
          </li>
          <li>
            <a href="#reviews">Відгуки</a>
          </li>
          <li>
            <a href="#contacts">Контакти</a>
          </li>
        </ul>
      </nav>
      <div className={styles.socialMedia}>
        <a href="#">
          <i className="fab fa-facebook">hth</i>
        </a>
        <a href="#">
          <i className="fab fa-instagram">instagram</i>
        </a>
        <a href="#">
          <i className="fab fa-whatsapp">whatsapp</i>
        </a>
        <a href="#">
          <i className="fab fa-tiktok">tiktok</i>
        </a>
      </div>
    </div>
    <div>
      <p>Всі права захищено</p>
      <p>Політика конфіденційності</p>
    </div>
  </footer>
);

export default Footer;
