import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroText}>
          <div className={styles.ninja}>
            <Image
              src="/ninja-back-desk.png"
              alt="Back Ninja"
              width={1280}
              height={277}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.reviews}>
              <Image
                src="/photos-1k-desk.png"
                alt="Отзывы"
                width={63}
                height={24}
              />
              <div>
                <p>1K+</p>

                <p>Позитивних відгуків</p>
              </div>
            </div>
            <h1>2323</h1>
            <h2>Відчуй драйв на повну:</h2>
            <h3>Пригоди на квадроциклах</h3>
            <h4>чекають на тебе!</h4>
            <p>
              Ninja Drive Club: Приєднуйся до нас, щоб відкрити нові горизонти,
              насолодитися швидкістю і природою в одному заїзді. Твоя пригода
              починається тут
            </p>
            <div className={styles.buttons}>
              <button className={styles.signup}>Записатися</button>
              <button className={styles.certificate}>Сертифікат</button>
            </div>
            <div className={styles.socialsMob}>
              <Image
                src="/facebook-dask.png"
                alt="Facebook"
                width={40}
                height={40}
              />
              <Image
                src="/insta-desk.png"
                alt="Instagram"
                width={40}
                height={40}
              />
              <Image
                src="/whats-desk.png"
                alt="WhatsApp"
                width={40}
                height={40}
              />
              <Image
                src="/tiktok-desk.png"
                alt="TikTok"
                width={30}
                height={30}
              />
            </div>

            <div className={styles.gift}>
              <Image
                src="/buy-desk.png"
                alt="Facebook"
                width={251}
                height={38}
              />
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src="/motorcycle-hero-desk.png"
              alt="Квадроцикл"
              width={1029}
              height={918}
            />
            <div className={styles.stripe}>
              <Image
                src="/stripe-hero-desk.png"
                alt="Квадроцикл"
                width={1770}
                height={223}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
