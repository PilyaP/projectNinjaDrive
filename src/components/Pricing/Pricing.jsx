// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import s from "./Pricing.module.scss";
// import items from "./motoItems";

// export default function Pricing() {
//   const [visibleItems, setVisibleItems] = useState(4);

//   const showMoreItems = () => {
//     setVisibleItems((prev) => prev + 4);
//   };

//   return (
//     <section className={s.price} id="pricing">
//       <div className="container">
//         <h3 className={`${s.priceTitle} ${s["priceTitle--mob"]}`}>вартість</h3>
//         <h3 className={`${s.priceTitle} ${s["priceTitle--desk"]}`}>
//           тарифи та вартість
//         </h3>
//         <ul className={s.priceList}>
//           {items.slice(0, visibleItems).map((item, index) => {
//             const { src, alt, title, details, pricing, buttonLink } = item;
//             return (
//               <li className={s.priceItem} key={index}>
//                 <div className={s.priceImg}>
//                   <Image src={src} width={302} height={309} alt={alt} />
//                 </div>
//                 <div>
//                   <h4 className={s.priceItemTitle}>{title}</h4>
//                   <ul className={s.priceItemDscrTextList}>
//                     {details.map((content, i) => {
//                       return (
//                         <li key={i}>
//                           <p className={s.priceItemDscr}>{content}</p>
//                         </li>
//                       );
//                     })}
//                   </ul>

//                   <ul className={s.priceItemDscrList}>
//                     {pricing.map(({ time, price }, i) => {
//                       return (
//                         <li key={i} className={s.priceItemDscrListItem}>
//                           <span
//                             className={`${s.priceHour} ${s["priceHour--f"]}`}
//                           >
//                             {time}
//                           </span>
//                           <span
//                             className={`${s.pricePerHour} ${s["pricePerHour--t"]}`}
//                           >
//                             {price}
//                           </span>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                   <a target="blank" href={buttonLink} className={s.priceBn}>
//                     Обрати
//                   </a>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//         {visibleItems < items.length && (
//           <button
//             title="Показати більше"
//             onClick={showMoreItems}
//             className={s.loadMoreButton}
//           >
//             <svg
//               width="25"
//               height="25"
//               viewBox="0 0 25 45"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M20.42 26.95L13.9 33.47C13.13 34.24 11.87 34.24 11.1 33.47L4.57996 26.95"
//                 stroke="#FC8A22"
//                 strokeWidth="1.5"
//                 strokeMiterlimit="10"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         )}
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import Image from "next/image";
import s from "./Pricing.module.scss";
import items from "./motoItems";

export default function Pricing() {
  return (
    <section className={s.price} id="pricing">
      <div className="container">
        <h3 className={`${s.priceTitle} ${s["priceTitle--mob"]}`}>вартість</h3>
        <h3 className={`${s.priceTitle} ${s["priceTitle--desk"]}`}>
          тарифи та вартість
        </h3>
        <ul className={s.priceList}>
          {items.map((item, index) => {
            const { src, alt, title, details, pricing, buttonLink } = item;
            return (
              <li className={s.priceItem} key={index}>
                <div className={s.priceImg}>
                  <Image src={src} width={302} height={309} alt={alt} />
                </div>
                <div>
                  <h4 className={s.priceItemTitle}>{title}</h4>
                  <ul className={s.priceItemDscrTextList}>
                    {details.map((content, i) => (
                      <li key={i}>
                        <p className={s.priceItemDscr}>{content}</p>
                      </li>
                    ))}
                  </ul>

                  <ul className={s.priceItemDscrList}>
                    {pricing.map(({ time, price }, i) => (
                      <li key={i} className={s.priceItemDscrListItem}>
                        <span className={`${s.priceHour} ${s["priceHour--f"]}`}>
                          {time}
                        </span>
                        <span
                          className={`${s.pricePerHour} ${s["pricePerHour--t"]}`}
                        >
                          {price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a target="blank" href={buttonLink} className={s.priceBn}>
                    Обрати
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

