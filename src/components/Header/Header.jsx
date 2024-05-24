"use client";

import { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logoItem}>
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Ninja Drive Club"
              width={50}
              height={50}
            />
          </div>
          <nav className={styles.nav}>
            <ul>
              <li>Про нас</li>
              <li>Послуги</li>
              <li>Ціни</li>
              <li>Переваги</li>
              <li>Відгуки</li>
              <li>Контакти</li>
            </ul>
          </nav>
        </div>
        <div className={styles.menuIcon} onClick={toggleMobileNav}>
          <MenuIcon style={{ color: "white", width: "24px", height: "24px" }} />
        </div>
        <div
          className={`${styles.mobileNav} ${
            showMobileNav ? styles.showMobileNav : ""
          }`}
        >
          <ul>
            <li onClick={toggleMobileNav}>Про нас</li>
            <li onClick={toggleMobileNav}>Послуги</li>
            <li onClick={toggleMobileNav}>Ціни</li>
            <li onClick={toggleMobileNav}>Переваги</li>
            <li onClick={toggleMobileNav}>Відгуки</li>
            <li onClick={toggleMobileNav}>Контакти</li>
          </ul>
          <div>
            <p>Телефон: +38 (096) 00 20 777</p>
            <p>Адреса: м. Дніпро, Полтавське шосе, 619</p>
          </div>
        </div>
      </div>
    </header>
  );
}
