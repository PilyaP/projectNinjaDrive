import SocialsList from "../common/SocialsList/SocialsList";
import s from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
     <section className={s.hero}>
      <div className='container'>
        <div className={s.heroText}>
          <div className={s.ninja}>
          </div>
          <div className={s.heroContent}>
            <div className={s.heroContentText}>
              <div className={s.heroReviewsExmp}>
                <Image
                  src="/photos-1k-desk.png"
                  alt="відгуки"
                  width={63}
                  height={24}
                />
                  <p className={s.heroSubtitle}>
                    <span className={s.heroSubtitleNum}>1K+</span>
                  Позитивних відгуків
                  </p>
              </div>
            
              <div className={s.heroTitleGroup}>
                  <h3 className={s.heroUptitle}>Відчуй драйв на повну:</h3>
                  <h1 className={s.heroMaintitle}>Пригоди на квадроциклах</h1>
                  <h3 className={s.heroUptitle}>чекають на тебе!</h3>
              </div>
              <p className={s.herDscr}>Ninja Drive Club: Приєднуйся до нас, щоб відкрити нові горизонти, насолодитися швидкістю і природою в одному заїзді. Твоя пригода починається тут</p>
            </div>
            
            <div className={s.heroButtonsBox}>
              <ul className={s.heroButtonsList}>
               <li> <button className={`${s.heroBtn} ${s.signup}`}>Записатися</button></li>
               <li> <button className={`${s.heroBtn} ${s.certificate}`}>Сертифікат</button></li>
              </ul>
                <p className={s.heroCalltoAction}>купуй в подарунок:)</p>
            </div>
            <div className={s.socialsListBox}>

              <SocialsList/>
             {/* <ul className="socialsList">
          <li>
            <Image
            class="socialsListIcon"
              src="./assets/facebook-dask.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </li>
          <li>
            <Image
            class="socialsListIcon"
              src="./assets/insta-desk.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </li>
          <li>
            <Image
            class="socialsListIcon"
              src="./assets/whats-desk.png"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </li>
          <li>
            <Image
            class="socialsListIcon"
            src="./assets/tiktok-desk.png" alt="TikTok"
            width={24}
              height={24} />
          </li>
NameclassName        </ul> */}
           
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
