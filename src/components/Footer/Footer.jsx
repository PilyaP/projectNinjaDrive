// Footer.js
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footerContainer}>
    <div className="container">
      <div className={styles.footerNav}>
        <div style={{ width: "99px", height: "94px", position: "relative" }}>
          <Image
            src="/logo.png"
            alt="Logo"
            layout="responsive"
            width={99}
            height={94}
          />
        </div>

        <ul className={styles.navigation}>
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

        <ul className={styles.socialsList}>
          <li>
            <Image
              src="/facebook-dask.png"
              alt="Facebook"
              width={40}
              height={40}
            />
          </li>
          <li>
            <Image
              src="/insta-desk.png"
              alt="Instagram"
              width={40}
              height={40}
            />
          </li>
          <li>
            <Image
              src="/whats-desk.png"
              alt="WhatsApp"
              width={40}
              height={40}
            />
          </li>
          <li>
            <Image src="/tiktok-desk.png" alt="TikTok" width={30} height={30} />
          </li>
        </ul>
      </div>
      <div className={styles.footerLine}></div>
      <div className={styles.politics}>
        <p>Всі права захищено</p>
        <p>Політика конфіденційності</p>
      </div>
    </div>
  </footer>
);

export default Footer;
