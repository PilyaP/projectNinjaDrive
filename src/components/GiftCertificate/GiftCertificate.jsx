import styles from "./GiftCertificate.module.scss";
import Image from "next/image";

export default function GiftCertificate() {
  return (
    <section className={styles.giftCertificate}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.heading}>ПОДАРУНКОВИЙ СЕРТИФІКАТ</h2>
          <p className={styles.subtitle}>
            Найкращий сюрприз для ваших близьких
          </p>
          <p className={styles.description}>
            Купуй сертифікат у NINJA DRIVE або фізичний сертифікат. Напиши нам,
            щоб дізнатися деталі.
          </p>
          <button className={styles.button}>Деталі</button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/certificate-desk.png"
            alt="Подарунковий сертифікат"
            width={391}
            height={406}
          />
        </div>
      </div>
    </section>
  );
}
