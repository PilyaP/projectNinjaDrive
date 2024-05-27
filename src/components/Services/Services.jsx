import styles from "./Services.module.scss";
import Image from "next/image";

export default function Services() {
  return (
    <section className={styles.services} id="servies">
      <div className="container">
        <h2 className={styles.heading}>Послуги</h2>
        <ul className={styles.tagsImage}>
          {/* <div className={styles.tags}>Kvadro</div> */}
          <div className={styles.quadroText}>
            <Image
              src="/quadro-text-desk.png"
              alt="Квадроцикл"
              width={146}
              height={48}
            />
          </div>
          <div className={styles.bagiText}>
            <Image
              src="/bagi-text-desk.png"
              alt="Квадроцикл"
              width={99}
              height={48}
            />
          </div>
          <div className={styles.motoText}>
            <Image
              src="/moto-text-desk.png"
              alt="Квадроцикл"
              width={181}
              height={48}
            />
          </div>
        </ul>
        <div className={styles.grid}>
          <li className={styles.gridItem}>
            <Image
              src="/services-desk-1.png"
              alt="Квадро"
              width={294}
              height={570}
            />
          </li>
          <li className={styles.gridItem}>
            <Image
              src="/services-desk-2.png"
              alt="Мотоцикл"
              width={194}
              height={378}
            />
          </li>
          <div className={styles.gridItem}>
            {/* <div className={styles.bgCardDark}>
              <div className={styles.bgCard}>

              </div>
            </div> */}
            <li className={styles.card}>
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
            </li>
            <Image src="/test.png" alt="cards" width={337} height={540} />
          </div>
          <li className={styles.gridItem}>
            <Image
              src="/services-desk-3.png"
              alt="Мотоцикл"
              width={193}
              height={570}
            />
            <div className={styles.gridItem}></div>
          </li>
          <li className={styles.gridItem}>
            <Image
              src="/services-desk-4.png"
              alt="Квадро"
              width={302}
              height={434}
            />
          </li>
        </div>
      </div>
    </section>
  );
}
