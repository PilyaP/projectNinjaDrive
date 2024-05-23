import styles from "./Pricing.module.scss";
import Image from "next/image";

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <div className="container">
        <h2 className={styles.heading}>Тарифи та Вартість</h2>
        <Image src="/zig-zag-desk.png" alt="zig-zag" width={229} height={27} />
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Image
              src="/quadro-desk-210.png"
              alt="Квадро 210 куб"
              width={300}
              height={200}
            />
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
            <Image
              src="/quadro-desk-300.png"
              alt="Квадро 300 куб"
              width={300}
              height={200}
            />
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
            <Image
              src="/quadro-desk-400.png"
              alt="Квадро 400 куб"
              width={300}
              height={200}
            />
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
            <Image
              src="/quadro-desk-550.png"
              alt="Квадро 550 куб"
              width={300}
              height={200}
            />
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

          <div className={styles.gridItem}>
            <Image
              src="/moto-desk-300.png"
              alt="Advance300"
              width={300}
              height={200}
            />
            <h3>Advance300</h3>
            <p>*бронь 500₴/ 1 одиня техніки</p>
            <div className={styles.pricingInfo}>
              <div>
                <p>2 години</p>
                <p>2800₴</p>
              </div>
              <div>
                <p>3 години</p>
                <p>3500₴</p>
              </div>
            </div>
            <a href="https://wa.me/123456789" className={styles.button}>
              Обрати
            </a>
          </div>

          <div className={styles.gridItem}>
            <Image
              src="/pitbike-desk.png"
              alt="Pitbike"
              width={300}
              height={200}
            />
            <h3>Pitbike</h3>
            <p>*бронь 500₴/ 1 одиня техніки</p>
            <div className={styles.pricingInfo}>
              <div>
                <p>2 години</p>
                <p>2800₴</p>
              </div>
              <div>
                <p>3 години</p>
                <p>3500₴</p>
              </div>
            </div>
            <a href="https://wa.me/123456789" className={styles.button}>
              Обрати
            </a>
          </div>

          <div className={styles.gridItem}>
            <Image
              src="/bagi-desk.png"
              alt="Багі BRP 1000"
              width={300}
              height={200}
            />
            <h3>Багі BRP 1000</h3>
            <p>*бронь 500₴/ 1 одиня техніки</p>
            <div className={styles.pricingInfo}>
              <div>
                <p>з інструктором на одному багі</p>
                <p>4000₴</p>
              </div>
              <div>
                <p>без інструктора/1год</p>
                <p>5000₴</p>
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
