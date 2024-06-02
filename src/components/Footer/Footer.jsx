import Image from "next/image";
import s from "./Footer.module.scss";

const Footer = () => (
  <footer className={s.footerContainer}>
    <div className="container">
      <div className={s.footerNav}>
        <div className={s.footerLogo}>
          <Image src="/logo.png" alt="Logo" width={99} height={94} />
        </div>
        <div className={s.footerLineMob}> </div>
        <div className={s.footerNavSoc}>
          <div className={s.footerMobTab}>
            <ul className={s.navigation}>
              <li>
                <a href="#about">Про нас</a>
              </li>
              <li>
                <a href="#servies">Послуги</a>
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
          </div>
          <div className={s.socialsMob}>
            <p className={s.socialsText}>Соц. мережі</p>
            <ul className={s.socialsList}>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61559328162876&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className={s.socialsListIcon}
                    src="/facebook-dask.png"
                    alt="Facebook"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ninja.drive?igsh=eWRvaWVjNWF1ZDJz&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                   className={s.socialsListIcon}
                    src="/insta-desk.png"
                    alt="Instagram"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/380934800007"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                     className={s.socialsListIcon}
                    src="/whats-desk.png"
                    alt="WhatsApp"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@ninjadriveclub?_t=8mo4RBv4GSk&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                     className={s.socialsListIcon}
                    src="/tiktok-desk.png"
                    alt="TikTok"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={s.footerLine}></div>
      <div className={s.politics}>
        <p>Всі права захищено</p>
        <p>Політика конфіденційності</p>
      </div>
    </div>
  </footer>
);

export default Footer;
