import s from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.heroText}>
          <div className={s.ninja}>
          </div>
          <div className={s.heroContent}>
            <div className={s.heroContentText}>
              <div className={s.heroReviewsExmp}>
                <Image
                  src="/photos-1k-desk.png"
                  alt="Отзывы"
                  width={63}
                  height={24}
                />
                  <p className={s.heroSubtitle}>
                    <span className={s.heroSubtitleNum}>1K+</span>
                  Позитивних відгуків
                  </p>
              </div>
            
              <h3 className={s.heroUptitle}>Відчуй драйв на повну:</h3>
              <h1 className={s.heroMaintitle}>Пригоди на квадроциклах</h1>
              <h3 className={s.heroUptitle}>чекають на тебе!</h3>
            </div>
            
            <div className={s.heroButtonsBox}>
              <ul className={s.heroButtonsList}>
               <li> <button className={`${s.heroBtn} ${s.signup}`}>Записатися</button></li>
               <li> <button  className={`${s.heroBtn} ${s.certificate}`}>Сертифікат</button></li>
              </ul>
                <p className={s.heroCalltoAction}>купуй в подарунок:)</p>
            </div>
            
          </div>
          <div className={s.image}>
           
          </div>
        </div>
      </div>
    </section>
  );
}
