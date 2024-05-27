import styles from "./Advantages.module.scss";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className={styles.advantages} id="advantages">
      <div className="container">
        <h2 className={styles.heading}>Наші переваги</h2>
        <div className={styles.imgWhy}>
          <Image
            src="/why-we-desk.png"
            alt="Facebook"
            width={209}
            height={38}
          />
        </div>
        <div className={styles.grid}>
          <Image
            src="/all-perevagu.png"
            alt="Безпека"
            width={1275}
            height={677}
          />
        </div>

        {/* <div className={styles.grid}>
          <div className={styles.safety}>
            <Image
              src="/advantages-desk-1.png"
              alt="Безпека"
              width={434}
              height={564}
            />
          </div>
          <div className={styles.impression}>
            <Image
              src="/advantages-desk-2.png"
              alt="Враження"
              width={558}
              height={677}
            />
          </div>
          <div className={styles.comfort}>
            <Image
              src="/advantages-desk-3.png"
              alt="Комфорт"
              width={433}
              height={563}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
