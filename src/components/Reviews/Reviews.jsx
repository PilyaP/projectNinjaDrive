"use client";

import React, { useState } from "react";
import styles from "./Reviews.module.scss";
import Image from "next/image";

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
  {
    name: "Владислав",
    text: "Были килька разив. Все видминно, биг атмосфери, сервиси момив и го маршрутів! Крути инструктори, купа шикарних эмоций!",
    source: "*Видгук з гугл карт",
    initials: "B",
    avatar: "/path/to/avatar2.png",
  },
  {
    name: "Владислав",
    text: "Были килька разив. Все видминно, биг атмосфери, сервиси момив и го маршрутів! Крути инструктори, купа шикарних эмоций!",
    source: "*Видгук з гугл карт",
    initials: "B",
    avatar: "/path/to/avatar2.png",
  },
  {
    name: "Владислав",
    text: "Были килька разив. Все видминно, биг атмосфери, сервиси момив и го маршрутів! Крути инструктори, купа шикарних эмоций!",
    source: "*Видгук з гугл карт",
    initials: "B",
    avatar: "/path/to/avatar2.png",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const nextSlide = () => {
    if (currentIndex < reviews.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className="container">
        <h2 className={styles.title}>що говорять про нас люди</h2>
        <div className={styles.subtitle}>
          <p>
            Ми завжди прагнемо досконалості у всьому, що робимо, і наші клієнти
            це цінують. Відгуки тих, хто скористався нашими послугами, говорять
            самі за себе.
          </p>
          <p>
            Наша репутація побудована на надійності, професіоналізмі та
            індивідуальному підході до кожного замовлення
          </p>
        </div>
        <div className={styles.imageReviewPosition}>
          <div className={styles.imageReview}>
            <Image
              src="/rewiev-desk.png"
              alt="rewiev"
              width={410}
              height={460}
            />
          </div>
        </div>
        <div className={styles.slider}>
          <button onClick={prevSlide} className={styles.arrow}>
            &#8249;
          </button>
          <div className={styles.reviewContainer}>
            {reviews
              .slice(currentIndex, currentIndex + 3)
              .map((review, index) => (
                <div key={index} className={styles.reviewCard}>
                  <div
                    className={styles.avatar}
                    style={{ backgroundColor: getRandomColor() }}
                  >
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
          <button onClick={nextSlide} className={styles.arrow}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
