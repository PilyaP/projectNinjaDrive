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
            src="/all-advantages-desk.png"
            alt="Безпека"
            width={1275}
            height={677}
            className={styles.desktopImage}
          />
          <Image
            src="/all-advantages-mob.png"
            alt="Безпека"
            width={343}
            height={1383}
            className={styles.mobileImage}
          />
          <Image
            src="/all-advantages-tablet.png"
            alt="Безпека"
            width={446}
            height={527}
            className={styles.tabletImage}
          />
        </div>
      </div>
    </section>
  );
}
