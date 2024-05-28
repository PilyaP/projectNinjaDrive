"use client";
import React, { useState } from "react";
import Image from "next/image";
import s from "./Pricing.module.scss";

const items = [
  {
    src: "/quadro-desk-210.png",
    alt: "Квадро 210 куб",
    title: "Квадро 210 куб",
    details: [
      "Год. оплата за другу людину 400₴/год",
      "Гід до 7р. безкоштовно",
      "Бронь 500₴ / 1 одиниця техніки",
    ],
    pricing: [
      { time: "1 година", price: "1000₴" },
      { time: "2 години", price: "1800₴" },
    ],
    buttonLink: "https://wa.me/123456789",
  },
  {
    src: "/quadro-desk-300.png",
    alt: "Квадро 300 куб",
    title: "Квадро 300 куб",
    details: [
      "Год. оплата за другу людину 400₴/год",
      "Гід до 7р. безкоштовно",
      "Бронь 500₴ / 1 одиниця техніки",
    ],
    pricing: [
      { time: "1 година", price: "1300₴" },
      { time: "2 години", price: "2400₴" },
    ],
    buttonLink: "https://wa.me/123456789",
  },
  {
    src: "/quadro-desk-400.png",
    alt: "Квадро 400 куб",
    title: "Квадро 400 куб",
    details: [
      "Год. оплата за другу людину 400₴/год",
      "Гід до 7р. безкоштовно",
      "Бронь 500₴ / 1 одиниця техніки",
    ],
    pricing: [
      { time: "1 година", price: "1400₴" },
      { time: "2 години", price: "2600₴" },
    ],
    buttonLink: "https://wa.me/123456789",
  },
  {
    src: "/quadro-desk-550.png",
    alt: "Квадро 550 куб",
    title: "Квадро 550 куб",
    details: [
      "Год. оплата за другу людину 400₴/год",
      "Гід до 7р. безкоштовно",
      "Бронь 500₴ / 1 одиниця техніки",
    ],
    pricing: [
      { time: "1 година", price: "1600₴" },
      { time: "2 години", price: "3000₴" },
    ],
    buttonLink: "https://wa.me/123456789",
  },
  {
    src: "/moto-desk-300.png",
    alt: "Advance300",
    title: "Advance300",
    details: ["Бронь 500₴/ 1 одиниця техніки"],
    pricing: [
      { time: "2 години", price: "2800₴" },
      { time: "3 години", price: "3500₴" },
    ],
    buttonLink: "https://wa.me/123456789",
  },
  {
    src: "/pitbike-desk.png",
    alt: "Pitbike",
    title: "Pitbike",
    details: ["Бронь 500₴/ 1 одиниця техніки"],
    pricing: [
      { time: "2 години", price: "2800₴" },
      { time: "3 години", price: "3500₴" },
    ],
    buttonLink: "https://wa.me/123456789",
  },
  // {
  //   src: "/bagi-desk.png",
  //   alt: "Багі BRP 1000",
  //   title: "Багі BRP 1000",
  //   details: ["Бронь 500₴/ 1 одиниця техніки"],
  //   pricing: [
  //     { time: "з інструктором на одному багі", price: "4000₴" },
  //     { time: "без інструктора/1год", price: "5000₴" },
  //   ],
  //   buttonLink: "https://wa.me/123456789",
  // },
];

export default function Pricing() {
  const [visibleItems, setVisibleItems] = useState(4);

  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 4);
  };

  return (
    <section className={s.price}>
      <div className="container">
        <h3 className={`${s.priceTitle} ${s["priceTitle--mob"]}`}>вартість</h3>
        <h3 className={`${s.priceTitle} ${s["priceTitle--desk"]}`}>тарифи та вартість</h3>
        <ul className={s.priceList}>
          {items.slice(0, visibleItems).map((item, index) => {
            const { src, alt, title, details, pricing, buttonLink } = item;
            return (
              <li className={s.priceItem} key={index}>
                <div className={s.priceImg}>
                  <Image src={src} width={302} height={309} alt={alt} />
                </div>
                <div>
                  <h4 className={s.priceItemTitle}>{title}</h4>
                  <ul className={s.priceItemDscrTextList}>
                    {details.map((content, i) => {
                      return (
                        <li key={i}>
                          <p className={s.priceItemDscr}>{content}</p>
                        </li>
                      );
                    })}
                  </ul>

                  <ul className={s.priceItemDscrList}>
                    {pricing.map(({ time, price }, i) => {
                      return (
                        <li key={i} className={s.priceItemDscrListItem}>
                          <span className={`${s.priceHour} ${s["priceHour--f"]}`}>
                            {time}
                          </span>
                          <span className={`${s.pricePerHour} ${s["pricePerHour--t"]}`}>
                            {price}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <a href={buttonLink} className={s.priceBn}>
                    Обрати
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
        {/* {visibleItems < items.length && (
          <button onClick={showMoreItems} className={s.loadMoreButton}>
            Показати більше
          </button>
        )} */}
      </div>
    </section>
    // <section classNameN{s.me={styles.pricing} id="pricing">
    //   <div classNameN{s.me="container">
    //     <h2 classNameN{s.me={styles.heading}>Тарифи та Вартість</h2>
    //     <Image src="/zig-zag-desk.png" alt="zig-zag" width={229} height={27} />
    //     <div classNameN{s.me={styles.grid}>
    //       {items.slice(0, visibleItems).map((item, index) => (
    //         <div key={index} classNameN{s.me={styles.gridItem}>
    //           <Image src={item.src} alt={item.alt} width={300} height={200} />
    //           <h3>{item.title}</h3>
    //           <ul>
    //             {item.details.map((detail, idx) => (
    //               <li key={idx}>{detail}</li>
    //             ))}
    //           </ul>
    //           <div classNameN{s.me={styles.pricingInfo}>
    //             {item.pricing.map((price, idx) => (
    //               <div key={idx}>
    //                 <p>{price.time}</p>
    //                 <p>{price.price}</p>
    //               </div>
    //             ))}
    //           </div>
    //           <a href={item.buttonLink} classNameN{s.me={styles.button}>
    //             Обрати
    //           </a>
    //         </div>
    //       ))}
    //     </div>
    //     {visibleItems < items.length && (
    //       <button onClick={showMoreItems} classNameN{s.me={styles.loadMoreButton}>
    //         Показати більше
    //       </button>
    //     )}
    //   </div>
    // </section>
  );
}
