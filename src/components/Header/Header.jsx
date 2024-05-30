"use client";

import { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import SocialsList from "../common/SocialsList/SocialsList";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerNavBox}>
         <div className={styles.navigationContainer}>
            <div className={styles.logoItem}>
                <Image
                  src="/logo.png"
                  alt="Ninja Drive Club"
                  width={50}
                  height={50}
                  priority={true}
                />
            </div>
          <ul className={styles.navList}>
                  <li><a href="#about" onClick={toggleMobileNav} >Про нас</a></li>
                  <li><a href="#servies" onClick={toggleMobileNav} >Послуги</a></li>
                  <li><a href="#pricing" onClick={toggleMobileNav} >Ціни</a></li>
                  <li><a href="#advantages" onClick={toggleMobileNav} >Переваги</a></li>
                  <li><a href="#reviews" onClick={toggleMobileNav} >Відгуки</a></li>
                  <li><a href="#contacts" onClick={toggleMobileNav} >Контакти</a></li>
              </ul>
         </div>
           
         <div className={styles.mobMenuContainer}>
            <div className={styles.menuIcon} onClick={toggleMobileNav}>
              <MenuIcon style={{ color: "white", width: "24px", height: "24px" }} />
            </div>
            <nav
              className={`${styles.mobileNav} ${
                showMobileNav ? styles.showMobileNav : ""
              }`}
            >
              <ul className={styles.mobileNavList}>
                  <li><a href="#about" onClick={toggleMobileNav} >Про нас</a></li>
                  <li><a href="#servies" onClick={toggleMobileNav} >Послуги</a></li>
                  <li><a href="#pricing" onClick={toggleMobileNav} >Ціни</a></li>
                  <li><a href="#advantages" onClick={toggleMobileNav} >Переваги</a></li>
                  <li><a href="#reviews" onClick={toggleMobileNav} >Відгуки</a></li>
                  <li><a href="#contacts" onClick={toggleMobileNav} >Контакти</a></li>
              </ul>
              <div>
                <SocialsList/>
                <ul className={styles.mobileNavContactsList}>
                  <li><p className={styles.mobileNavContactsTitle}>Телефон:</p> <a className={styles.mobileNavContactsLink} href="tel:+38 (096) 00 20 777">+38 (096) 00 20 777</a></li>
                  <li><p className={styles.mobileNavContactsTitle}>Адреса:</p> <a className={styles.mobileNavContactsLink} href="#">м. Дніпро, Полтавське шосе, 619</a></li>
                </ul>
              </div>
            </nav>
         </div>
       </div>
      </div>
    </header>
  );
}
