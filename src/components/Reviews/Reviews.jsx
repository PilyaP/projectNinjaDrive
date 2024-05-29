"use client";

import React from "react";
import styles from "./Reviews.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviews = [
  {
    name: "Інна",
    text: "Чудовий клуб! Індивідуальний підхід, нова і дуже крута потужна техніка😊👍   Море позитивних емоцій, гарний маршрут лісом 😊Рекомендую.",
    source: "*Видгук з гугл карт",
    initials: "І",
    avatar: "/path/to/avatar1.png",
  },
  {
    name: "Владислав",
    text: "Були кілька разів. Все відмінно, від атмосфери, сервісу мотів і до маршрутів! Круті інструктори, купа шикарних емоцій!",
    source: "*Видгук з гугл карт",
    initials: "B",
    avatar: "/path/to/avatar2.png",
  },
  {
    name: "Ярослав",
    text: "Найкращий прокат мото-техніки, є багато квадроциклів, ендуро, баггі.  Вся техніка дуже потужна і обслужена",
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
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className="container">
        <h2 className={styles.title}>Відгуки</h2>
        <h3 className={styles.titleDesk}>що говорять про нас люди</h3>
        <p className={styles.subtitleReview}>
          Відгуки тих, хто скористався нашими послугами, говорять самі за себе
        </p>
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

        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            spaceBetween={30}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ul className={styles.reviewContainer}>
                  <li className={styles.reviewCard}>
                    <div className={styles.avatarName}>
                      <div
                        className={styles.avatar}
                        style={{ backgroundColor: getRandomColor() }}
                      >
                        <span className={styles.initials}>
                          {review.initials}
                        </span>
                      </div>
                      <h3 className={styles.name}>{review.name}</h3>
                    </div>
                    <div className={styles.reviewContent}>
                      <p className={styles.text}>{review.text}</p>
                      <p className={styles.source}>{review.source}</p>
                    </div>
                  </li>
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
