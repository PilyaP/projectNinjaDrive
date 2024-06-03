"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import SocialsList from "../common/SocialsList/SocialsList";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const mobileNavRef = useRef(null);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const handleClickOutside = (event) => {
    if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
      setShowMobileNav(false);
    }
  };

  useEffect(() => {
    if (showMobileNav) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMobileNav]);

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
              <li><a href="#about">Про нас</a></li>
              <li><a href="#services">Послуги</a></li>
              <li><a href="#pricing">Ціни</a></li>
              <li><a href="#advantages">Переваги</a></li>
              <li><a href="#reviews">Відгуки</a></li>
              <li><a href="#contacts">Контакти</a></li>
            </ul>
          </div>

          <div className={styles.mobMenuContainer}>
            <button type="button" title="Відкрити меню" className={styles.menuIcon} onClick={toggleMobileNav}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.53 9.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 14.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.53 19.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </button>
            <nav
              ref={mobileNavRef}
              className={`${styles.mobileNav} ${
                showMobileNav ? styles.showMobileNav : ""
              }`}
            >
            <div className={styles.navWrap}>
                <ul className={styles.mobileNavList}>
                  <li><a href="#about" onClick={toggleMobileNav}>Про нас</a></li>
                  <li><a href="#services" onClick={toggleMobileNav}>Послуги</a></li>
                  <li><a href="#pricing" onClick={toggleMobileNav}>Ціни</a></li>
                  <li><a href="#advantages" onClick={toggleMobileNav}>Переваги</a></li>
                  <li><a href="#reviews" onClick={toggleMobileNav}>Відгуки</a></li>
                  <li><a href="#contacts" onClick={toggleMobileNav}>Контакти</a></li>
                </ul>
                  <SocialsList />
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
