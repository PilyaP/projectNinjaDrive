"use client";
import { useState } from "react";
import styles from "./About.module.scss";
import Image from "next/image";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.textSection}>
          <div className={""}>
            <h2 className={styles.heading}>Про нас</h2>

            <Image src="/arrow-desk.png" alt="Arrow" width={164} height={28} />
          </div>
          <Image
            src="/interest-desk.png"
            alt="interest-desk"
            width={272}
            height={38}
          />
          <p className={styles.subheading}>
            Драйвова команда на передових планках
          </p>
          <div className={styles.accordion}>
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 0 ? styles.active : ""
              }`}
              onClick={() => toggleAccordion(0)}
            >
              <div className={styles.accordionTitle}>Наш успіх</div>
              {activeIndex === 0 && (
                <div className={styles.accordionContent}>
                  Це результат наполегливої роботи і впевненості в тому, що
                  жодні перешкоди не зможуть зупинити нашу мрію.
                </div>
              )}
            </div>
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 1 ? styles.active : ""
              }`}
              onClick={() => toggleAccordion(1)}
            >
              <div className={styles.accordionTitle}>Максимальна безпека</div>
              {activeIndex === 1 && (
                <div className={styles.accordionContent}>
                  Ми оснащені сучасним обладнанням, щоб забезпечити максимальний
                  комфорт та безпеку.
                </div>
              )}
            </div>
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 2 ? styles.active : ""
              }`}
              onClick={() => toggleAccordion(2)}
            >
              <div className={styles.accordionTitle}>Неповторні емоції</div>
              {activeIndex === 2 && (
                <div className={styles.accordionContent}>
                  Отримуйте неповторні емоції від наших пригод та екскурсій.
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.imageSection}>
          <Image
            src="/animation.gif"
            alt="Квадроцикл"
            layout="responsive"
            width={625}
            height={423}
          />
        </div>
      </div>
    </section>
  );
}
