import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.reviews}>
            <Image src="" alt="Отзывы" width={50} height={50} />
            <span>1K+ Позитивних відгуків</span>
          </div>
          <h1>Відчуй драйв на повну:</h1>
          <h2>Пригоди на квадроциклах чекають на тебе!</h2>
          <p>
            Ninja Drive Club: Приєднуйся до нас, щоб відкрити нові горизонти,
            насолодитися швидкістю і природою в одному заїзді. Твоя пригода
            починається тут
          </p>
          <div className={styles.buttons}>
            <button className={styles.signup}>Записатися</button>
            <button className={styles.certificate}>Сертифікат</button>
          </div>
          <div className={styles.socials}>
            <Image src="" alt="Facebook" width={30} height={30} />
            <Image src="" alt="Instagram" width={30} height={30} />
            <Image src="" alt="WhatsApp" width={30} height={30} />
            <Image src="" alt="TikTok" width={30} height={30} />
          </div>
          <div className={styles.gift}>
            <span>Купуй в подарунок :)</span>
          </div>
        </div>
        <div className={styles.image}>
          <Image src="" alt="Квадроцикл" layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  );
}
