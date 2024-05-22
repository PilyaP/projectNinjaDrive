import styles from "./Pricing.module.scss";
import Image from "next/image";

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Вартість</h2>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Image src="" alt="Квадро 210 куб" width={300} height={200} />
            <h3>Квадро 210 куб</h3>
            <ul>
              <li>Год. оплата за другу людину 400₴/год</li>
              <li>Гід до 7р. безкоштовно</li>
              <li>Бронь 500₴ / 1 одиниця техніки</li>
            </ul>
            <div className={styles.pricingInfo}>
              <div>
                <p>1 година</p>
                <p>1000₴</p>
              </div>
              <div>
                <p>2 години</p>
                <p>1800₴</p>
              </div>
            </div>
            <a href="https://wa.me/123456789" className={styles.button}>
              Обрати
            </a>
          </div>
          <div className={styles.gridItem}>
            <Image src="" alt="Квадро 300 куб" width={300} height={200} />
            <h3>Квадро 300 куб</h3>
            <ul>
              <li>Год. оплата за другу людину 400₴/год</li>
              <li>Гід до 7р. безкоштовно</li>
              <li>Бронь 500₴ / 1 одиниця техніки</li>
            </ul>
            <div className={styles.pricingInfo}>
              <div>
                <p>1 година</p>
                <p>1300₴</p>
              </div>
              <div>
                <p>2 години</p>
                <p>2400₴</p>
              </div>
            </div>
            <a href="https://wa.me/123456789" className={styles.button}>
              Обрати
            </a>
          </div>
          <div className={styles.gridItem}>
            <Image src="" alt="Квадро 400 куб" width={300} height={200} />
            <h3>Квадро 400 куб</h3>
            <ul>
              <li>Год. оплата за другу людину 400₴/год</li>
              <li>Гід до 7р. безкоштовно</li>
              <li>Бронь 500₴ / 1 одиниця техніки</li>
            </ul>
            <div className={styles.pricingInfo}>
              <div>
                <p>1 година</p>
                <p>1400₴</p>
              </div>
              <div>
                <p>2 години</p>
                <p>2600₴</p>
              </div>
            </div>
            <a href="https://wa.me/123456789" className={styles.button}>
              Обрати
            </a>
          </div>
          <div className={styles.gridItem}>
            <Image src="" alt="Квадро 550 куб" width={300} height={200} />
            <h3>Квадро 550 куб</h3>
            <ul>
              <li>Год. оплата за другу людину 400₴/год</li>
              <li>Гід до 7р. безкоштовно</li>
              <li>Бронь 500₴ / 1 одиниця техніки</li>
            </ul>
            <div className={styles.pricingInfo}>
              <div>
                <p>1 година</p>
                <p>1600₴</p>
              </div>
              <div>
                <p>2 години</p>
                <p>3000₴</p>
              </div>
            </div>
            <a href="https://wa.me/123456789" className={styles.button}>
              Обрати
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
