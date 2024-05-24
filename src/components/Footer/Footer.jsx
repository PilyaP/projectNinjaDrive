// Footer.js
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footerContainer}>
    <div className="container">
      <div style={{ width: "99px", height: "94px", position: "relative" }}>
        <Image
          src="/logo.png"
          alt="Logo"
          
          width={99}
          height={94}
        />
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
      <div className={styles.socialsMob}>
        <Image src="/facebook-dask.png" alt="Facebook" width={40} height={40} />
        <Image src="/insta-desk.png" alt="Instagram" width={40} height={40} />
        <Image src="/whats-desk.png" alt="WhatsApp" width={40} height={40} />
        <Image src="/tiktok-desk.png" alt="TikTok" width={30} height={30} />
      </div>

      <p>Всі права захищено</p>
      <p>Політика конфіденційності</p>
    </div>
  </footer>
);

export default Footer;
