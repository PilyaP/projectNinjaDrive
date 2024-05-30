import MobileServices from "./MobileServices";
import s from "./Services.module.scss";
import Image from "next/image";
import TabletServices from "./TabletServices";
import DesktopServices from "./DesktopServices";

export default function Services() {
  return (
    <section className={s.services} id="services">
      <div className="container">
        <div className={s.servicesTopText}>
          <h2 className={s.servicesTitle}>Послуги</h2>
          <ul className={s.servicesFacilitiesList}>
            <li className={s.servicesFacilitiesItem}>
              <p className={s.servicesFacilitiesText}>Квадро</p>
            </li>
            <li className={s.servicesFacilitiesItem}>
              <p className={s.servicesFacilitiesText}>Багі</p>
            </li>
            <li className={s.servicesFacilitiesItem}>
              <p className={s.servicesFacilitiesText}>Мотоцикл</p>
            </li>
          </ul>
        </div>
        <div className={s.mobile}><MobileServices /></div>
        <div className={s.tablet}><TabletServices/></div>
        <div className={s.desktop}><DesktopServices/></div>
      </div>
    </section>
  );
}
