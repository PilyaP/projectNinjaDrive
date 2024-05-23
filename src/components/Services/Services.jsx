import styles from "./Services.module.scss";
import Image from "next/image";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <h2 className={styles.heading}>Послуги</h2>
        <div className={styles.tags}>
          <span>Квадро</span>
          <span>Багі</span>
          <span>Мотоцикл</span>
        </div>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Image
              src="/services-desk-1.png"
              alt="Квадро"
              width={294}
              height={570}
            />
          </div>
          <div className={styles.gridItem}>
            <Image
              src="/services-desk-2.png"
              alt="Мотоцикл"
              width={194}
              height={378}
            />
          </div>
          <div className={styles.gridItem}>
            <div className={styles.card}>
              <h3>Широкий спектр послуг</h3>
              <p>
                Для шанувальників мотоциклів ми надаємо прокат сучасних моделей.
                Якщо вам до душі квадроцикли, ви можете орендувати сучасні та
                надійні квадроцикли для незабутніх пригод. Для тих, хто шукає
                екстремальних вражень на багі, ми пропонуємо прокат комфортних
                та надійних багі для активного відпочинку.
              </p>
              <a href="https://instagram.com" className={styles.button}>
                Переглянути в Instagram
              </a>
            </div>
          </div>
          <div className={styles.gridItem}>
            <Image
              src="/services-desk-3.png"
              alt="Мотоцикл"
              width={193}
              height={570}
            />
          </div>
          <div className={styles.gridItem}>
            <Image
              src="/services-desk-4.png"
              alt="Квадро"
              width={302}
              height={434}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
