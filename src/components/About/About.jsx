"use client";
import { useState } from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.aboutSection}>
          <div className={styles.textSection}>
            <div className={styles.aboutUs}>
              <h2 className={styles.heading}>Про нас</h2>
              <div>
                <Image
                  src="/arrow-desk.png"
                  alt="Arrow"
                  width={164}
                  height={28}
                  className={styles.arrow}
                />
              </div>
            </div>
            <Image
              src="/interest-desk.png"
              alt="interest-desk"
              width={272}
              height={38}
              className={styles.interest}
            />
            <p className={styles.subheadingMob}>
              Драйвова команда на передових планках
            </p>
            <div className={styles.accordion}>
              <div
                className={`${styles.accordionItem} ${
                  activeIndex === 0 ? styles.active : ""
                }`}
                onClick={() => toggleAccordion(0)}
              >
                <div className={styles.accordionIcon}>
                  <p className={styles.accordionTitle}>Наш успіх</p>
                  <KeyboardArrowDownIcon />
                </div>
                {activeIndex === 0 && (
                  <div className={styles.accordionContent}>
                    Це результат наполегливої роботи і впевненості в тому, що{" "}
                    <span className={styles.subheadingOrange}>
                      жодні перешкоди не зможуть зупинити{" "}
                    </span>
                    нашу мрію. Навіть у найнестабільніші часи, ми зберігаємо
                    свій підхід до роботи та стежимо за тим, щоб{" "}
                    <span className={styles.subheadingOrange}>
                      кожен наш гість відчував себе в безпеці та комфортно
                    </span>
                  </div>
                )}
              </div>
              <div
                className={`${styles.accordionItem} ${
                  activeIndex === 1 ? styles.active : ""
                }`}
                onClick={() => toggleAccordion(1)}
              >
                <div className={styles.accordionIcon}>
                  <p className={styles.accordionTitle}>Максимальна безпека</p>
                  <KeyboardArrowDownIcon />
                </div>
                {activeIndex === 1 && (
                  <div className={styles.accordionContent}>
                    Ми оснащені сучасним обладнанням, щоб забезпечити
                    максимальний комфорт та безпеку.{" "}
                    <span className={styles.subheadingOrange}>
                      Наш пріоритет - це захист наших гостей
                    </span>
                    , тому ми ставимо безпеку на перше місце і завжди готові
                    забезпечити її на вищому рівні
                  </div>
                )}
              </div>
              <div
                className={`${styles.accordionItem} ${
                  activeIndex === 2 ? styles.active : ""
                }`}
                onClick={() => toggleAccordion(2)}
              >
                <div className={styles.accordionIcon}>
                  <p className={styles.accordionTitle}>Неповторні емоції</p>
                  <KeyboardArrowDownIcon />
                </div>
                {activeIndex === 2 && (
                  <div className={styles.accordionContent}>
                    Отримуйте неповторні емоції від наших пригод та екскурсій.
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.imageSection}>
            <p className={styles.subheading}>
              Драйвова команда на передових планках
            </p>
            <p className={styles.subheadingSecond}>
              Ми -{" "}
              <span className={styles.subheadingOrange}>
                молода, енергійна команда
              </span>
              , яка з турботою вже прийняла більше 1,000 задоволених
              відвідувачів у наші екскурсії. Незважаючи на свою молодість, ми
              вже встигли зарекомендувати себе як надійний провідник у світі
              пригод та емоційного драйву.
            </p>
            <div>
              <Image
                src="/animation2.gif"
                alt="Квадроцикл"
                width={625}
                height={423}
                className={styles.animation}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
