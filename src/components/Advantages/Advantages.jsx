import styles from "./Advantages.module.scss";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Наші переваги <span>чому саме ми?</span>
        </h2>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Image src="" alt="Безпека" width={300} height={400} />
          </div>
          <div className={styles.gridItem}>
            <Image src="" alt="Враження" width={300} height={400} />
          </div>
          <div className={styles.gridItem}>
            <Image src="" alt="Комфорт" width={300} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
