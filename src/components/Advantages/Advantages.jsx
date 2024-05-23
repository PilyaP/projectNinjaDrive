import styles from "./Advantages.module.scss";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <h2 className={styles.heading}>Наші переваги</h2>
        <Image src="/why-we-desk.png" alt="Facebook" width={209} height={38} />
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Image
              src="/advantages-desk-1.png"
              alt="Безпека"
              width={300}
              height={400}
            />
          </div>
          <div className={styles.gridItem}>
            <Image
              src="/advantages-desk-2.png"
              alt="Враження"
              width={300}
              height={400}
            />
          </div>
          <div className={styles.gridItem}>
            <Image
              src="/advantages-desk-3.png"
              alt="Комфорт"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
