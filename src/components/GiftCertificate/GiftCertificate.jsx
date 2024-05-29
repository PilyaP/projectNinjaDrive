import styles from "./GiftCertificate.module.scss";
import Image from "next/image";

export default function GiftCertificate() {
  return (
    <section className={styles.certificate}>
      <div className="container">
        <div>
          <div className={styles.giftCertificate}>
            <div className={styles.imageContainer}>
              <Image
                src="/certificate-desk.png"
                alt="Подарунковий сертифікат"
                width={391}
                height={406}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.heading}>ПОДАРУНКОВИЙ СЕРТИФІКАТ</h2>
              <p className={styles.subtitle}>
                Найкращий сюрприз для ваших близьких
              </p>
              <p className={styles.description}>
                Купуй сертифікат у{" "}
                <span className={styles.ninjaDrive}>NINJA DRIVE</span> або
                фізичний сертифікат. Напиши нам, щоб дізнатися деталі.
              </p>
              <button className={styles.button}>Деталі</button>
            </div>
          </div>
          <div className={styles.contentMob}>
            <h3 className={styles.headingMob}>ПОДАРУНКОВИЙ СЕРТИФІКАТ</h3>
            <p className={styles.subtitleMob}>
              Найкращий сюрприз для ваших близьких
            </p>
            <p className={styles.descriptionMob}>
              Купуй сертифікат у{" "}
              <span className={styles.ninjaDrive}>NINJA DRIVE</span> або
              фізичний сертифікат. Напиши нам, щоб дізнатися деталі.
            </p>
            <button className={styles.buttonMob}>Деталі</button>
          </div>
        </div>
      </div>
    </section>
  );
}
