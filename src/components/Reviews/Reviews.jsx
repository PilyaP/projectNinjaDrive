"use client";

import React from "react";
import Image from "next/image";
import styles from "./Reviews.module.scss";

const reviews = [
  {
    name: "Инна",
    text: "Чудовый клуб! Ингивидуальный пидхид, нова и дуже крута потужна техника. Море позитивных эмоций, гарний маршрут лисом. Рекомендую",
    source: "*Видгук з гугл карт",
    initials: "I",
    avatar: "/path/to/avatar1.png",
  },
  {
    name: "Владислав",
    text: "Были килька разив. Все видминно, биг атмосфери, сервиси момив и го маршрутів! Крути инструктори, купа шикарних эмоций!",
    source: "*Видгук з гугл карт",
    initials: "B",
    avatar: "/path/to/avatar2.png",
  },
  {
    name: "Ярослав",
    text: "Найкращий прокат мото-техники, є багато квадроциклів, ендуро, багги. Вся техника дуже потужна и обслужена.",
    source: "*Видгук з гугл карт",
    initials: "Я",
    avatar: "/path/to/avatar3.png",
  },
];

const Reviews = () => {
  return (
    <section className={styles.reviewsSection}>
      <div className="container">
        <h2 className={styles.title}>Відгуки</h2>
        <p className={styles.subtitle}>
          Відгуки тих, хто скористався нашими послугами, говорять самі за себе
        </p>
        <div className={styles.slider}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.avatar}>
                <span className={styles.initials}>{review.initials}</span>
              </div>
              <div className={styles.reviewContent}>
                <h3 className={styles.name}>{review.name}</h3>
                <p className={styles.text}>{review.text}</p>
                <p className={styles.source}>{review.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
