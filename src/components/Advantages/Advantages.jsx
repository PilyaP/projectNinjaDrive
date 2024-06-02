import s from "./Advantages.module.scss";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className={s.advantages} id="advantages">
      <div className="container">
      
        <h2 className={s.heading}>Наші переваги</h2>
        <div className={s.imgWhy}>
          <Image
            className={s.advantagesImg}
            src="/why-we-desk.png"
            alt="Facebook"
            width={209}
            height={38}
          />
        </div>
        <div className={s.grid}>
          <Image
            src="/all-advantages-desk.png"
            alt="Безпека"
            width={1275}
            height={677}
            className={`${s.advantagesImg} ${s.desktopImage}`}
          />
          <Image
            src="/all-advantages-mob.png"
            alt="Безпека"
            width={343}
            height={1383}
            className={`${s.advantagesImg} ${s.mobileImage}`}
          />
          <Image
            src="/all-advantages-tablet.png"
            alt="Безпека"
            width={446}
            height={527}
            className={`${s.advantagesImg} ${s.tabletImage}`}
          />
        </div>
      </div>
    </section>
  );
}
